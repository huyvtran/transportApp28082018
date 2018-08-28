import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { PasswordResetPage } from '../password-reset/password-reset';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AvatarPage } from '../avatar/avatar'; 
import { UploadProfilePage } from '../upload-profile/upload-profile';
import { SigninPage } from '../signin/signin';
     
/**
 * Generated class for the CustomerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-profile',
  templateUrl: 'customer-profile.html',
})
export class CustomerProfilePage {
  user_details :any= {};
  profile : any;
  cust_id :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data : DataProvider, private storage: Storage,private DomSanitizer: DomSanitizer, private camera: Camera, public http : HttpClient,private alertCtrl: AlertController) {
    this.profile = new FormGroup({    
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required])
      });	

      this.storage.get('user').then(data=>{   
          let param = data[0].id;
        if(data[0].role==2){
          this.data.getCustomerProfile(param).subscribe(result=>{
            if(result.status == 'OK')
            {
              //console.log(result.success.profile[0].first_name);
              this.user_details.fname = result.success.profile[0].first_name;
              this.user_details.lname = result.success.profile[0].last_name;
              this.user_details.email = result.success.profile[0].email;
              this.user_details.phone = result.success.profile[0].phone;
              this.user_details.address = result.success.profile[0].address;
              this.user_details.avatar = result.success.profile[0].profile;
            }
            else{

            }
         });
        }else if(data[0].role==3){
          this.data.getDriverProfile(param).subscribe(result=>{
            if(result.status == 'OK')    
            {
              //console.log(result.success.profile[0].first_name);
              this.user_details.fname = result.success.profile[0].first_name;
              this.user_details.lname = result.success.profile[0].last_name;
              this.user_details.email = result.success.profile[0].email;
              this.user_details.phone = result.success.profile[0].phone;
              this.user_details.address = result.success.profile[0].address;
              this.user_details.avatar = result.success.profile[0].profile;
            }
            else{

            }
         });
        }
          
      });

  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerProfilePage');
  }

  gotoChangePass()
  {
    this.navCtrl.push(PasswordResetPage);
  }  

  gotoeditProfile()                
  {      
    this.navCtrl.push(EditProfilePage);
  }     

  gotoAvatarPage()
  {
    this.navCtrl.push(UploadProfilePage);
  }

  signOut(){
    this.navCtrl.setRoot(SigninPage); 
  }
}