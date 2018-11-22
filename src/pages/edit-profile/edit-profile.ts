import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController} from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { CustomerProfilePage } from '../customer-profile/customer-profile';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',     
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
  user_details :any= {};
  profile : any;
  Dprofile : any;
  cust_id :any;
  role : Number;
  vehicle_types : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data : DataProvider, private storage: Storage,private loading: LoadingController) {
    
    this.profile = new FormGroup({    
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      //email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required,Validators.maxLength(11)]),/*pattern("06([0-9]{8})")*/
      address: new FormControl('', [Validators.required]),
      });
        

      this.Dprofile = new FormGroup({    
        fname: new FormControl('', [Validators.required]),
        lname: new FormControl('', [Validators.required]),
        //email: new FormControl('', [Validators.required,Validators.email]),
        phone: new FormControl('', [Validators.required,Validators.maxLength(11)]),/*pattern("06([0-9]{8})")----Validators.maxLength(11)*/
        address: new FormControl('', [Validators.required]),
        vehicle_type: new FormControl('', [Validators.required]),
        vehicle_no:  new FormControl('', [Validators.required])         
        });      

      this.storage.get('user').then(data=>{   
          let param = data[0].id;
          this.role = data[0].role;
          if(data[0].role==2){

            this.data.getCustomerProfile(param).subscribe(result=>{
              if(result.status == 'OK')
              {
                //console.log(result.success.profile[0].first_name);
                this.user_details.fname = result.success.profile[0].first_name;
                this.user_details.lname = result.success.profile[0].last_name;
                //this.user_details.email = result.success.profile[0].email;
                this.user_details.phone = result.success.profile[0].phone;
                this.user_details.address = result.success.profile[0].address;
                //this.user_details.avatar = result.success.profile[0].profile;
              }
              else{
  
              }
           });
          }
          else if(data[0].role==3){
            this.data.getvehicletypes().subscribe(result=>{
        
              if(result.status == 'OK')
              {
                console.log('kjndjknbbv==>'+result.success.vehicletypes[0].type);    
                this.vehicle_types = result.success.vehicletypes;
                
              }     
              else{
                this.data.presentToast(result.status);
              }
              
            });
            this.data.getDriverProfile(param).subscribe(result=>{
              if(result.status == 'OK')
              {
                //console.log(result.success.profile[0].first_name);
                this.user_details.fname = result.success.profile[0].first_name;
                this.user_details.lname = result.success.profile[0].last_name;
                //this.user_details.email = result.success.profile[0].email;
                this.user_details.phone = result.success.profile[0].phone;
                this.user_details.address = result.success.profile[0].address;
                this.user_details.vehicle_type = result.success.profile[0].vehicle_type;
                this.user_details.vehicle_no = result.success.profile[0].vehicle_number;
              }
              else{
  
              }
           });
          }
          
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  isValidMobile(control: FormControl): any {

    let regExp = /^[0-9]{10}$/;

    if (!regExp.test(control.value)) {
        return {"invalidMobile": true};
    }
    return null;
  }


  ProfileForm(profile)
  {
    let param = new FormData();
    if(this.role==2)
    {
      param.append("customer_id",this.cust_id);
    }
    else if(this.role==3)
    {
      param.append("driver_id",this.cust_id);
      param.append("vehicle_type",profile.vehicle_type);   
      param.append("vehicle_number",profile.vehicle_no);
      param.append("is_completed",'1');
    }
    param.append("first_name",profile.fname);
    param.append("last_name",profile.lname);
    //param.append("email",profile.email);
    param.append("phone",profile.phone);  
    param.append("address",profile.address);   
    //param.append("profile",profile.avatar);
 
    let loader = this.loading.create({
 
         content :"Please wait...",
         spinner : 'crescent'
     });
 
     loader.present();

     if(this.role==2)
    {
      this.data.updateCustomerProfile(param).subscribe(result=>{
        //console.log(result);    
        //this.userData = result; 
        loader.dismiss();   
        if(result.status == "ERROR")
        {
            this.data.presentToast(result.error.email);
            return false;
        }
        else
        {   
          //this.storage.set("customer_data",data.msg[0]);
          this.data.presentToast('Profile Updated Successfully!');
          this.navCtrl.setRoot(CustomerProfilePage);     
        }                    
      }); 

    }
    else if(this.role==3)
    {
      this.data.updateDriverProfile(param).subscribe(result=>{
        //console.log(result);    
        //this.userData = result; 
        loader.dismiss();   
        if(result.status == "ERROR")
        {
            this.data.presentToast(result.error.email);     
            this.storage.set('isProfile_Complete', false);
            return false;
            
        }
        else
        {   
          //this.storage.set("customer_data",data.msg[0]);
          this.data.presentToast('Profile Updated Successfully!');
          this.storage.set('isProfile_Complete', true);
          this.navCtrl.setRoot(HomePage);     
        }                    
      });
    }

  }    

}
