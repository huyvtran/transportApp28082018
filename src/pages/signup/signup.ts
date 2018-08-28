import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { SigninPage } from '../signin/signin';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()   
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})  
export class SignupPage {  
  user_details =[];
  
  public userData : any = {};
  signup : any;
  roles : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data : DataProvider,private loading: LoadingController) {
    this.signup = new FormGroup({    
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      c_password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
      });	

      this.data.getRoles().subscribe(result=>{
        
        if(result.status == 'OK')
        {
          console.log(result.success.roles);
          this.roles = result.success.roles;
        }
        else{
          this.data.presentToast(result.status);
        }
        

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    
  }

  SignupForm(){   
    console.log(this.user_details['fname']);
 
    /*let param = JSON.stringify({"first_name":"test", "last_name":"test",          
  "role":1,"password":"1234","c_password":"1234","email":"abc@gmail.com"});*/

  if(this.user_details['password'] !== this.user_details['c_password'])
  {
    this.data.presentToast('Password and Confirm Password must match!');
    return false;
  }         

   let param = new FormData();
   param.append("first_name",this.user_details['fname']);
   param.append("last_name",this.user_details['lname']);
   param.append("email",this.user_details['email']);
   param.append("password",this.user_details['password']);  
   param.append("role",this.user_details['role']);   
   param.append("c_password",this.user_details['c_password']);

   let loader = this.loading.create({

        content :"Please wait...",
        spinner : 'bubbles'
    });

    loader.present();

    this.data.userSignUp(param).subscribe(result=>{
            console.log(result);    
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
              this.data.presentToast('Registration Successfull!');
              this.navCtrl.setRoot(SigninPage);     
            }                    
    });
  }  
}
