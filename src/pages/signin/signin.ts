import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController,Events } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';


import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { ForgotpasswoedPage } from '../forgotpasswoed/forgotpasswoed';
import { EmailverificationPage } from '../emailverification/emailverification';
import { CustomerProfilePage } from '../customer-profile/customer-profile';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {    
  signin : any;     
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public data : DataProvider, private storage: Storage, private loading: LoadingController,public events: Events) {

    this.signin = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required])
      });	     
  }

  createUser(user) {
    console.log('User created!')
    this.events.publish('user:created', user, Date.now());
  }
 
  red_list(){
  	this.navCtrl.push(SignupPage);
  }   
     

  signIn(uname,pass)
  {   
   let param = new FormData();
    param.append("email",uname);
    param.append("password",pass);  
    
     let loader = this.loading.create({

            content :"Please wait...",
            spinner : 'bubbles'
      });

      loader.present();
 
     this.data.userSignIn(param).subscribe(result=>{
 
           console.log(result);  
            loader.dismiss();   

            if(result.status == "ERROR")
            {
                this.data.presentToast('Invalid Username or Password!');
            }
            else   
            {
              console.log(result.success.user);
              this.createUser(result.success.user);
            
              if(result.success.user[0].active == 1)    
              {    
                this.storage.set("token",result.success.token);
                this.storage.set("user",result.success.user);
                if(result.success.user[0].role == 2)
                {
                  this.navCtrl.setRoot(HomePage); 
                }else if(result.success.user[0].role == 3){
                  this.navCtrl.setRoot(CustomerProfilePage);     
                }              
              }
              else
              {
                this.navCtrl.push(EmailverificationPage,{data:result.success.user});  
              }    
            }                           
 
     });
    
    /*if( uname == 'admin@gmail.com' && pass == 'admin' )
    {
      this.navCtrl.setRoot(HomePage);  
    }            
    else{    
      this.data.presentToast('Incorrect username or password!');
    }*/
  }     
          
  gotoForgotPass()    
  {
    this.navCtrl.push(ForgotpasswoedPage);            
  }
}
