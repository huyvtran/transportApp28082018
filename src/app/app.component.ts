import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav,Platform,Events, AlertController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { DataProvider } from '../providers/data/data';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin'; 
import { SignupPage } from '../pages/signup/signup';
import { IntroPage } from '../pages/intro/intro';
import { EmailverificationPage } from '../pages/emailverification/emailverification';
import { CustomerProfilePage } from '../pages/customer-profile/customer-profile'; 
import { MapPage } from '../pages/map/map';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';
import { PaymentwalletPage } from '../pages/paymentwallet/paymentwallet';
import { DriversettingPage } from '../pages/driversetting/driversetting';
import { BookinghistoryPage } from '../pages/bookinghistory/bookinghistory';
import { BookingListPage } from '../pages/booking-list/booking-list';
import { DeliveryPage } from '../pages/delivery/delivery';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { isCordovaAvailable } from '../common/is-cordova-available';
import { oneSignalAppId, sender_id } from '../config';
import { FeedbackPage } from '../pages/feedback/feedback';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { PaymentPage } from '../pages/payment/payment';
import * as firebase from 'firebase';
import { delay } from 'rxjs/operators';
import { ModalpagePage } from '../pages/modalpage/modalpage';
import { PackageBookingPage } from '../pages/package-booking/package-booking';
import { NotificationsPage } from '../pages/notifications/notifications';
import { DriverTransactionsPage } from '../pages/driver-transactions/driver-transactions';

const config = {         
  apiKey: 'AIzaSyD_mkig8BYCj7PJlCj4-yN4w6QPmJjxFbg',
  authDomain: 'localhost',
  databaseURL: 'https://transportapp-b1681.firebaseio.com/',
  projectId: 'transportapp-b1681',
  storageBucket: 'gs://transportapp-b1681.appspot.com',
};



@Component({   
  templateUrl: 'app.html'
})
export class MyApp {          

  @ViewChild(Nav) nav: Nav;
  rootPage:any;   
  pages : any;
  fname = '';
  lname = '';     
  email = '';   
  role : Number; 
  id :any;
  avatar : any = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';

  constructor(private backgroundMode: BackgroundMode,private androidPermissions: AndroidPermissions, private modalCtrl: ModalController, private oneSignal: OneSignal,  platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public data : DataProvider, private storage: Storage,public events: Events,private alertCtrl: AlertController) {
    firebase.initializeApp(config);
    this.backgroundMode.enable();
    this.backgroundMode.setDefaults({'hidden':false}); 

    this.storage.get('showSlide').then(data=>{
      if(data == null || data == undefined)
      {
        this.storage.set('showSlide', false);
        //show slide logic should run
        this.rootPage = IntroPage;       
      }    
      else{
        this.storage.get('isRemember').then(data=>{
          if(data == null || data == undefined)
          {    
            this.storage.set('isRemember', false);
            //show slide logic should run
            this.rootPage = IntroPage;
          }
          if(data == true)
          {
            /*this.storage.get('isProfile_Complete').then(data1=>{
              if(data1 == null || data1 == undefined || data1 == false)
              {
                //this.storage.set('showSlide', false);
                //show slide logic should run
                this.rootPage = EditProfilePage;       
              }    
              else{
                this.rootPage = HomePage;
              }
            });*/
            this.storage.get('user').then(user=>{   
              if(user == null || user == undefined || user == false)
              {
                this.rootPage = SigninPage;
                return false;
              }
              this.id = user[0].id;
              this.role = user[0].role;

              this.fname = user[0].first_name;
              this.lname = user[0].last_name;
              this.email = user[0].email;
              console.log('this.role==>'+this.role);

              if(user[0].role==2)
              {
                let param = user[0].id;
                
                this.data.getCustomerProfile(param).subscribe(result=>{
                  if(result.status == 'OK')
                  {
                    //console.log(result.success.profile[0].first_name);
                    

                    if(result.success.profile[0].profile == null)
                    {
                      this.avatar = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
                    }
                    else{
                      this.avatar = 'http://transport.walstarmedia.com/public/storage/images/customer/profile_image/'+result.success.profile[0].profile;
                    }
                    
                  }
                  else{

                  }
                });  
              }
              else if(user[0].role==3)
              {
                let param = user[0].id;
                
                  this.data.getDriverProfile(param).subscribe(result=>{
                    if(result.status == 'OK')
                    {
                      //console.log(result.success.profile[0].first_name);
                      

                      if(result.success.profile[0].profile == null)
                      {
                        this.avatar = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
                      }
                      else{
                        this.avatar = 'http://transport.walstarmedia.com/public/storage/images/driver/profile_image/'+result.success.profile[0].profile;
                      }
                      
                    }
                    else{

                    }
                });  
              }
              
            });

            setTimeout(() => {
              //alert(this.role);
            if(this.role == 2){
              this.oneSignal.sendTag('customer_id',this.id);
              this.rootPage = HomePage;
            }
            
            if(this.role == 3){
              this.oneSignal.sendTag('driver_id',this.id);
              let param = this.id; 
            this.data.getDriverProfile(param).subscribe(result=>{
              if(result.status == 'OK')    
              {
                if(result.success.profile[0].is_completed == 0)
                {
                  this.rootPage = EditProfilePage;
                }
                else
                {
                  this.rootPage = HomePage;
                }
              }   
               else{ 
                //this.data.presentToast('Unable to get your Profile data!');
                this.storage.get('isProfile_Complete').then(data1=>{
                  if(data1 == null || data1 == undefined || data1 == false)
                  {
                    //this.storage.set('showSlide', false);
                    //show slide logic should run
                    this.rootPage = EditProfilePage;       
                  }    
                  else{
                    this.rootPage = HomePage;
                  }
                });
              }
            });
            }
            }, 1500); 
          }
          else
          {
            this.rootPage = SigninPage;
          }
          
        }); 
        
      }
    });
    
    events.subscribe('user:created', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user, 'at', time);
      this.fname = user[0].first_name;
      this.lname = user[0].last_name;
      this.email = user[0].email;
      this.role = user[0].role;
      this.id = user[0].id;
      console.log('this.role==>'+this.role);
      if(user[0].role==2)
              {
                let param = user[0].id;
                
                this.data.getCustomerProfile(param).subscribe(result=>{
                  if(result.status == 'OK')
                  {
                    //console.log(result.success.profile[0].first_name);
                    

                    if(result.success.profile[0].profile == null)
                    {
                      this.avatar = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
                    }
                    else{
                      this.avatar = 'http://transport.walstarmedia.com/public/storage/images/customer/profile_image/'+result.success.profile[0].profile;
                    }
                    
                  }
                  else{

                  }
                });  
              }
              else if(user[0].role==3)
              {
                let param = user[0].id;
                
                  this.data.getDriverProfile(param).subscribe(result=>{
                    if(result.status == 'OK')
                    {
                      //console.log(result.success.profile[0].first_name);
                      

                      if(result.success.profile[0].profile == null)
                      {
                        this.avatar = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
                      }
                      else{
                        this.avatar = 'http://transport.walstarmedia.com/public/storage/images/driver/profile_image/'+result.success.profile[0].profile;
                      }
                      
                    }
                    else{

                    }
                });  
              }
    });
    
    platform.ready().then(() => {   
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();   
      if (isCordovaAvailable()){
        this.oneSignal.startInit(oneSignalAppId, sender_id);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        //this.oneSignal.enableSound(this.oneSignal.enableSound());
        //this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
        this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
        this.oneSignal.endInit();


        /*window["plugins"].OneSignal
      .startInit(oneSignalAppId, sender_id)  
      .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
      .handleNotificationOpened(data => this.onPushOpened(data.notification.payload))
      .handleNotificationReceived(data => this.onPushReceived(data.payload))
      .endInit();*/

        /*var notificationReceivedCallback = function(data) {};    
        var notificationOpenedCallback = jsonData => {};

        window["plugins"].OneSignal
        .startInit("e3852c7f-8318-42a3-a4b7-f29ebcab0d47", "540630126754")
        .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
        .handleNotificationOpened(notificationOpenedCallback)
        .handleNotificationReceived(notificationReceivedCallback)
        .endInit();*/
      }      
    });                 

    this.pages = {    
      homePage : HomePage,   
      customerProfilePage : CustomerProfilePage,     
      findabranchPage : HomePage,
      mapPage : MapPage,         
      helpPage : HelpPage,           
      settingsPage : SettingsPage,     
      paymentwalletPage : PaymentwalletPage,
      driversettingPage : DriversettingPage,
      bookinghistoryPage : BookinghistoryPage,
      bookingListPage : BookingListPage,
      deliveryPage : DeliveryPage,   
      feedbackPage : FeedbackPage,
      paymentPage : PaymentPage,
      packageBooking:PackageBookingPage,
      notificationsPage : NotificationsPage,
      driverTransactionsPage : DriverTransactionsPage             
    }            
}

private signOut(){
  let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'signout'});
  let me = this;
             
  modal.onDidDismiss(data => {   
    console.log(data);
    if(data == true)
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
      this.rootPage = SigninPage;
    }  
    else{
      //this.selectdId = '';            
    }     
  });
  modal.present();
  //this.navCtrl.setRoot(SigninPage); 
}  

private onPushReceived(payload: OSNotificationPayload) {
  /*alert('Push recevied:' + payload.body);
  alert( payload.additionalData.driver_id);
  alert( payload.additionalData.customer_id);
  alert( payload.additionalData.booking_id);*/
  //presentConfirm() {
                    
 // }

  if(payload.additionalData.action == 'booking_response'){
    this.events.publish('live_tracking_Driver_id:created', payload.additionalData.driver_id, Date.now());
    //alert(JSON.stringify(payload.additionalData));
  } 
  if(payload.additionalData.action == 'start_ride'){
    this.events.publish('start_ride:created', payload.additionalData, Date.now());
  }
  if(payload.additionalData.action == 'finish_ride'){
    this.events.publish('finished_ride:created', payload.additionalData, Date.now());
  }

  if(payload.additionalData.action == 'cancle_booking'){
    this.events.publish('cancelled_request:created', payload.additionalData, Date.now());
  }

  if(payload.additionalData.action == 'feedback'){
  
    let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'showFeedback',feedback:payload.additionalData.feedback,rating :payload.additionalData.rating},{showBackdrop: false});  
    let me = this;

      modal.onDidDismiss(data => {
      });
      modal.present();

  }

  if(payload.additionalData.action == 'booking_request' || payload.additionalData.action == 'ride_alert'){
    let alert1 = this.alertCtrl.create({
      title: 'Customer Request',
      cssClass:'b_r_request',
      message: '<div class="c_name">'+payload.additionalData.customer+'</div><div class="title">Location</div><div class="desc">'+payload.additionalData.source+'</div><div class="title">Time</div><div class="desc">'+payload.additionalData.pick_up+'</div>',
      buttons: [
        {
          text: 'Accept',
          handler: () => {
            console.log('Accept clicked');
            let param = new FormData();
            param.append("driver_id",payload.additionalData.driver_id);
            param.append("customer_id",payload.additionalData.customer_id); 
            param.append("booking_id",payload.additionalData.booking_id); 
              this.data.driverAcceptBooking(param).subscribe(result=>{
              if(result.status == "OK")
              {
                this.data.presentToast('Booking Confirmation Successfull!');
                //if(payload.additionalData.ride_type != 'later')
                //{
                  
                  let param1 = new FormData();
                  param1.append("driver_Id",payload.additionalData.driver_id);
                  param1.append("customer_id",payload.additionalData.customer_id);
                  param1.append("booking_id",payload.additionalData.booking_id);
                 
                  this.data.DriverpostNotification(param1).subscribe(result=>{   
                    if(result.status == "ERROR")
                    {     
                      this.data.presentToast('Post Notification fail');
                    }
                    else{
                      this.data.presentToast('Post Notification Success');
                      this.events.publish('live_tracking:created',payload.additionalData, Date.now());
                    }    
                  });
                  this.data.presentToast('Request accepted successfully!'); 
                //}
              }        
              else{
                this.data.presentToast('May be Customer Cancelled Booking!');
              }                 
            });          
          }
        },      
        {
          text: 'Reject',
          handler: () => {
            console.log('reject clicked');
            let param = new FormData();
            param.append("driver_id",payload.additionalData.driver_id);
            param.append("customer_id",payload.additionalData.customer_id); 
            param.append("booking_id",payload.additionalData.booking_id);     
              this.data.driverRejectBooking(param).subscribe(result=>{
              if(result.status == "OK")
              {
               /* this.data.presentToast('Booking Confirmation Successfull!');
                  let param1 = new FormData();
                  param1.append("driver_Id",this.id);
                  param1.append("customer_id",payload.additionalData.customer_id);
                  param1.append("booking_id",payload.additionalData.booking_id);

                  this.data.DriverpostNotification(param1).subscribe(result=>{   
                    if(result.status == "ERROR")
                    {     
                      this.data.presentToast('postNotification fail');
                    }
                    else{
                      this.data.presentToast('postNotification success');
                    }
                  });*/
                this.data.presentToast('Request Rejected successfully!');
              }    
              else{
                this.data.presentToast('May be Customer Cancelled Booking!');
              }                      
            });
          }
        }
      ]
    });      
    alert1.present();
  }

  if(payload.additionalData.action == 'ride_later_alert'){
    this.events.publish('ride_later_alert:created', payload.additionalData, Date.now());
  }

  if(payload.additionalData.action == 'ride_alert'){

  }

  if(payload.additionalData.action == 'cashpayment'){
    this.events.publish('selected_Cash_Payment:created', payload.additionalData, Date.now());
  }

  if(payload.additionalData.action == 'otherpayment'){
    this.events.publish('selected_Other_Payment:created', payload.additionalData, Date.now());
  }

  if(payload.additionalData.action == 'cashpaymentReceived'){
    this.events.publish('cashpaymentReceived:created', payload.additionalData, Date.now());
  }
  
}

private onPushOpened(payload: OSNotificationPayload) {
    if(payload.additionalData.action == 'booking_request' || payload.additionalData.action == 'ride_alert'){
        let alert1 = this.alertCtrl.create({
          title: 'Customer Request',
          cssClass:'b_r_request',
          message: '<div class="c_name">'+payload.additionalData.customer+'</div><div class="title">Location</div><div class="desc">'+payload.additionalData.source+'</div><div class="title">Time</div><div class="desc">'+payload.additionalData.pick_up+'</div>',
          buttons: [
            {
              text: 'Accept',
              handler: () => {
                console.log('Accept clicked');
                let param = new FormData();
                param.append("driver_id",payload.additionalData.driver_id);
                param.append("customer_id",payload.additionalData.customer_id); 
                param.append("booking_id",payload.additionalData.booking_id); 
                  this.data.driverAcceptBooking(param).subscribe(result=>{
                  if(result.status == "OK")
                  {
                    this.data.presentToast('Booking Confirmation Successfull!');
                   // if(payload.additionalData.ride_type != 'later')
                   // {
                      
                      let param1 = new FormData();
                      param1.append("driver_Id",payload.additionalData.driver_id);
                      param1.append("customer_id",payload.additionalData.customer_id);
                      param1.append("booking_id",payload.additionalData.booking_id);
                     
                      this.data.DriverpostNotification(param1).subscribe(result=>{   
                        if(result.status == "ERROR")
                        {     
                          this.data.presentToast('Post Notification Fail');
                        }
                        else{
                          this.data.presentToast('Post Notification Success');
                          this.events.publish('live_tracking:created',payload.additionalData, Date.now());
                        }    
                      });
                      this.data.presentToast('Request accepted successfully!'); 
                    //}
                  }                         
                });          
              }
            },      
            {
              text: 'Reject',
              handler: () => {
                console.log('reject clicked');
                let param = new FormData();
                param.append("driver_id",payload.additionalData.driver_id);
                param.append("customer_id",payload.additionalData.customer_id); 
                param.append("booking_id",payload.additionalData.booking_id);     
                  this.data.driverRejectBooking(param).subscribe(result=>{
                  if(result.status == "OK")
                  {
                   /* this.data.presentToast('Booking Confirmation Successfull!');
                      let param1 = new FormData();
                      param1.append("driver_Id",this.id);
                      param1.append("customer_id",payload.additionalData.customer_id);
                      param1.append("booking_id",payload.additionalData.booking_id);

                      this.data.DriverpostNotification(param1).subscribe(result=>{   
                        if(result.status == "ERROR")
                        {     
                          this.data.presentToast('postNotification fail');
                        }
                        else{
                          this.data.presentToast('postNotification success');
                        }
                      });*/
                    this.data.presentToast('Request Rejected successfully!');
                  }                         
                });
              }
            }
          ]
        });
        alert1.present();
      }
}

}         