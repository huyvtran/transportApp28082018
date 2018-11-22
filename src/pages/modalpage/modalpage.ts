import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { SigninPage } from '../signin/signin';
import { DataProvider } from '../../providers/data/data';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the ModalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
@IonicPage()
@Component({
  selector: 'page-modalpage',
  templateUrl: 'modalpage.html',
})
export class ModalpagePage {
  modalAct : any;
  driverId : any;
  driver : any;
  myDate : any;
  myTime : any;
  bookingId : any;
  booking_info : any;
  lat : any;
  lng : any;
  social_account : any;
  social_account_details =[];
  rating : any;
  feedback : any;
  minDate : any;    

  constructor(public geolocation: Geolocation,private oneSignal: OneSignal, public data : DataProvider, public navCtrl: NavController, private storage: Storage, public navParams: NavParams,public viewCtrl: ViewController) {
    this.modalAct = navParams.get('modalAct');
    this.driverId = navParams.get('driverId');
    this.bookingId = navParams.get('bookingId');
    this.feedback = navParams.get('feedback');
    this.rating = navParams.get('rating');
    this.minDate = new Date().toISOString();
    //this.social_account = navParams.get('account');

    this.driver ={
      fname : 'fname',
      lname : 'lname',
      phone : '9874589687',
      address : '',
      vehicle_type : '',
      vehicle_no : '',
      email : 'driver@gmail.com',
      rate : ''
    }

    this.booking_info = {
      source : '',
      destination : '',
      distance : '',
      cost : '',
      customer_id : '',
      source_lat : '',
      source_lng : '',
      destination_lat : '',
      destination_lng : '',
      booking_id : '',
      driver_id : '',
      pickup_date : '',
      schedule_time : '',
      duration : '',
      customer_name : '',
      customer_contact :''
    }

    this.social_account = new FormGroup({    
      google: new FormControl(''),
      facebook: new FormControl(''),
      twitter: new FormControl(''),
      instagram: new FormControl('')
    });	
    
    if(this.driverId && this.driverId != '')
    {
      let param = new FormData();
      param.append("driver_id",this.driverId);
     
      this.data.getSelectedDriverInfo(param).subscribe(result=>{
        console.log(result);
        if(result.status == 'OK')
        {
          console.log(result.success.driver.first_name);
          this.driver.fname = result.success.driver.first_name;
          this.driver.lname = result.success.driver.last_name;
          //this.user_details.email = result.success.profile[0].email;
          this.driver.phone = result.success.driver.phone;
          this.driver.address = result.success.driver.address;
          this.driver.vehicle_type = result.success.driver.vehicle_type;
          this.driver.vehicle_no = result.success.driver.vehicle_number;
          this.driver.email = result.success.driver.email;
          this.driver.rate = result.success.driver.rating;
        }
        else{

        }
      });

      /*let param = new FormData();
        param.append("origin",this.lat+','+this.long);
        param.append("destination",driver.latitude+','+driver.longitude);

        this.data.customerBookingDistance(param).subscribe(result=>{   
          if(result.status == 'OK')
          {     
            //console.log(result);    
            this.duration = result.success.duration;
            console.log(this.duration);
          }
        });*/
    }

    if(this.bookingId && this.bookingId != '')
    {
      let param = new FormData();
      param.append("booking_id",this.bookingId);
     
      this.data.getBookingInfo(param).subscribe(result=>{
        console.log(result);
        if(result.status == 'OK')
        {
          this.booking_info.source = result.success.booking.source,
          this.booking_info.destination =  result.success.booking.destination,
          this.booking_info.distance = result.success.booking.distance,
          this.booking_info.cost = result.success.booking.cost,
          this.booking_info.customer_id = result.success.booking.customer_id,
          this.booking_info.source_lat = result.success.booking.source_lat,
          this.booking_info.source_lng = result.success.booking.source_long,
          this.booking_info.destination_lat = result.success.booking.destination_lat,
          this.booking_info.destination_lng = result.success.booking  .destination_long,
          this.booking_info.booking_id = result.success.booking.id,
          this.booking_info.driver_id = result.success.booking.driver_id,
          this.booking_info.pickup_date = result.success.booking.pickup_date,
          this.booking_info.schedule_time = result.success.booking.schedule_time

          this.geolocation.getCurrentPosition().then((position) => {
            this.lat = position.coords.latitude;
            this.lng =  position.coords.longitude;
          });   

          let param = new FormData();
          param.append("origin",this.lat+','+this.lng);
          param.append("destination",this.booking_info.source_lat+','+this.booking_info.source_lng);

          this.data.customerBookingDistance(param).subscribe(result=>{   
            if(result.status == 'OK')
            {     
              //console.log(result);    
              this.booking_info.duration = result.success.duration;
              console.log(this.booking_info.duration);
            }
          });
        }
        else{

        }
      });
    }
  }

  ionViewDidLoad() {     
    console.log('ionViewDidLoad ModalpagePage');
  }         

  close(){       
    this.viewCtrl.dismiss();
  } 

  /*selectDriver(Did)
  { 
    this.viewCtrl.dismiss(Did);          
  }*/

  signout()
  {
    this.oneSignal.deleteTag('user_id');
    this.storage.set('isRemember', false); 
    this.storage.get('user').then(data=>{   
      let param = data[0].id;
      let role = data[0].role;
      console.log(role);    
      if(role == 3)
      {
        this.data.getDriverToggle(param).subscribe(result=>{
          if(result.status == 'OK')
          {
            if(result.success.available == 'on')
            {
              this.data.AvailableToggle().subscribe(result=>{
                console.log(result);
                if(result.status == 'OK')
                {
                  console.log(result.success.available);
                }
                else{
                  this.data.presentToast('Error');
                }
              });
            }
          }
        });
      }
    });
    this.navCtrl.setRoot(SigninPage);
  }

  /*ride(ride)
  {
    console.log(ride);
    if(ride == 'now')
    {
      this.viewCtrl.dismiss(ride);
    }
    else{
      this.modalAct = 'getDateTime';
    }
  }*/

  gotHome()
  {
    console.log(this.myDate); 
    console.log(this.myTime);
    if(this.myDate && this.myTime)
    { 
      var data = [this.myDate,this.myTime];
      this.viewCtrl.dismiss(data);
    }
  }

  accept_req()
  {
      let param = new FormData();
      param.append("driver_id",this.booking_info.driver_id);
      param.append("customer_id",this.booking_info.customer_id);
      param.append("booking_id",this.booking_info.booking_id);
        this.data.driverAcceptBooking(param).subscribe(result=>{
        if(result.status == "OK")
        {
          this.data.presentToast('Booking Confirmation Successfull!');
            let param1 = new FormData();
            param1.append("action",'booking_response');
            param1.append("select_driver_Id",this.booking_info.driver_id);
            param1.append("customer_id",this.booking_info.customer_id);
            param1.append("booking_id",this.booking_info.booking_id);

            this.data.DriverpostNotification(param1).subscribe(result=>{   
              if(result.status == "ERROR")
              {     
                this.data.presentToast('Notification fail!');
              }
              else
              {
                this.data.presentToast('Notification success!');
              }
            });
          this.data.presentToast('Request accepted successfully!');
          this.viewCtrl.dismiss();
        }                         
      });          
  }

  reject_req()
  {
    let param = new FormData();
    param.append("driver_id",this.booking_info.driver_id);
    param.append("customer_id",this.booking_info.customer_id);
    param.append("booking_id",this.booking_info.booking_id);  
      this.data.driverRejectBooking(param).subscribe(result=>{
        if(result.status == "OK")
        {
          this.data.presentToast('Booking Confirmation Successfull!');
            let param1 = new FormData();
            param1.append("action",'booking_response');
            param1.append("select_driver_Id",this.booking_info.driver_id);
            param1.append("customer_id",this.booking_info.customer_id);
            param1.append("booking_id",this.booking_info.booking_id);

            this.data.DriverpostNotification(param1).subscribe(result=>{      
              if(result.status == "ERROR")
              {     
                this.data.presentToast('Notification fail!');         
              }
              else{
                this.data.presentToast('Notification success!');
              }
            });
            this.data.presentToast('Request Rejected successfully!');
            this.viewCtrl.dismiss();
        }                         
      });        
  }

  add_social_account()
  {
    //alert(this.social_account_details['google']);
    let param = new FormData();
    param.append("google",this.social_account_details['google']);
    param.append("facebook",this.social_account_details['facebook']);
    param.append("twitter",this.social_account_details['twitter']);
    param.append("instagram",this.social_account_details['instagram']);

  
     /*this.data.userSignUp(param).subscribe(result=>{
              console.log(result);    
              //this.userData = result;    
              if(result.status == "ERROR")
              {
                  this.data.presentToast(result.error.email);
                  return false;
              }
              else
              {
                this.data.presentToast('Social Medial Links stored successfully!');
                this.viewCtrl.dismiss();
              }                    
      });*/
  }

}
