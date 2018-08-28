import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin'; 
import { SignupPage } from '../pages/signup/signup';  
import { CustomerProfilePage } from '../pages/customer-profile/customer-profile';   
import { MapPage } from '../pages/map/map';   
import { EditProfilePage } from '../pages/edit-profile/edit-profile'; 
import { PasswordResetPage } from '../pages/password-reset/password-reset';
import { AvatarPage } from '../pages/avatar/avatar';  
import { AutocompletePage } from '../pages/autocomplete/autocomplete';
import { IntroPage } from '../pages/intro/intro';
import { HelpPage } from '../pages/help/help';
import { ForgotpasswoedPage } from '../pages/forgotpasswoed/forgotpasswoed';
import { EmailverificationPage } from '../pages/emailverification/emailverification';
import { SettingsPage } from '../pages/settings/settings';
import { DataProvider } from '../providers/data/data'; 
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule }   from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { Network } from '@ionic-native/network';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { UploadProfilePage } from '../pages/upload-profile/upload-profile';

import { IntroPageModule  }  from '../pages/intro/intro.module';
import { ForgotpasswoedPageModule } from '../pages/forgotpasswoed/forgotpasswoed.module';
import { EmailverificationPageModule } from '../pages/emailverification/emailverification.module';
import { AvatarPageModule } from '../pages/avatar/avatar.module';
import { HelpPageModule } from '../pages/help/help.module';
import { CustomerProfilePageModule } from '../pages/customer-profile/customer-profile.module';
import { EditProfilePageModule } from '../pages/edit-profile/edit-profile.module';
import { MapPageModule } from '../pages/map/map.module';
import { PasswordResetPageModule } from '../pages/password-reset/password-reset.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { UploadProfilePageModule } from '../pages/upload-profile/upload-profile.module';
import { AutocompletePageModule } from '../pages/autocomplete/autocomplete.module';

@NgModule({                
  declarations: [   
    MyApp,      
    HomePage,            
    SigninPage,  
  //  SignupPage,
  //  CustomerProfilePage,    
  //  MapPage,      
  //  PasswordResetPage,
  //  EditProfilePage,
  //  AvatarPage,
  //  AutocompletePage,
  //  IntroPage,      
  //  ForgotpasswoedPage,
  //  EmailverificationPage,    
  //  HelpPage,
  //  SettingsPage,
  //  UploadProfilePage
  ],   
  imports: [
    BrowserModule,
    HttpClientModule,   
    IntroPageModule,  
    ForgotpasswoedPageModule,  
    EmailverificationPageModule,
    AvatarPageModule,
    CustomerProfilePageModule,
    EditProfilePageModule,
    MapPageModule,
    PasswordResetPageModule,
    SettingsPageModule,
    HelpPageModule,
    SignupPageModule,
    UploadProfilePageModule,
    AutocompletePageModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      preloadModules: true,     
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,     
    SignupPage,
    CustomerProfilePage,
    MapPage,
    PasswordResetPage,
    EditProfilePage,
    AvatarPage,
    AutocompletePage,
    IntroPage,
    ForgotpasswoedPage,
    EmailverificationPage,
    HelpPage,
    SettingsPage,
    UploadProfilePage      
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,          
    ConnectivityServiceProvider,    
    Network,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    ConnectivityServiceProvider,
    GoogleMapsProvider
  ]
})   
export class AppModule {}  
       