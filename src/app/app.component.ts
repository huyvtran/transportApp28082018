import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav,Platform,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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

@Component({   
  templateUrl: 'app.html'
})
export class MyApp {             
  @ViewChild(Nav) nav: Nav;
  rootPage:any = IntroPage;   
  pages : any;
  fname = '';
  lname = '';     
  email = '';   
  role : Number;       
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public data : DataProvider, private storage: Storage,public events: Events) {
    events.subscribe('user:created', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user, 'at', time);
      this.fname = user[0].first_name;
      this.lname = user[0].last_name;
      this.email = user[0].email;
      this.role = user[0].role;
      console.log('this.role==>'+this.role);
    });
    platform.ready().then(() => {   
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();   
       
    });                

   

    this.pages = {    
      homePage : HomePage,   
      customerProfilePage : CustomerProfilePage,
      findabranchPage : HomePage,
      mapPage : MapPage,    
      helpPage : HelpPage,
      settingsPage : SettingsPage    
    }  
}
}