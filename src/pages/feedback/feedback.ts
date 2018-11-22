import { NgModule, Component } from '@angular/core';
import { IonicPageModule, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { HomePage } from '../home/home';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */         
@IonicPage()    
@Component({
  selector: 'page-feedback',         
  templateUrl: 'feedback.html',
})

export class FeedbackPage {
  feedback_form : any;
  feedback :any='';
  rate : any='';
  booking_id : any;
  driver_id : any;
  isfav :any = false;
  favDriver : any = 'Add driver as a favourite';    
  fav_drivers : any;

  constructor(public navCtrl: NavController, private loading: LoadingController, public navParams: NavParams, private storage : Storage, public data : DataProvider) {
    
    let loader = this.loading.create({
      content :"Please wait...",
      spinner : 'crescent'
    });

    loader.present();
    
    this.booking_id = navParams.get('booking_id');
    this.driver_id = navParams.get('driver_id');
    this.feedback_form = new FormGroup({    
      feedback: new FormControl('', [Validators.required]),
      rate: new FormControl('', [Validators.required]),
      });	


      this.data.getFavDrivers().subscribe(result=>{
        if(result.status == "OK")
        {
          this.fav_drivers = result.success.favdrivers;    //this.data.presentToast('Feedback sent successfully');
          //this.navCtrl.setRoot(HomePage);
          this.checkFavDriver(result.success.favdrivers).then(data=>{
            if(data == 'favorite')
            {
              this.favDriver = 'Added to favourite';
            }
            loader.dismiss();
          });
        }
        else   
        {
          loader.dismiss();
        }                           
      });
      
  }
        
  ionViewDidLoad() {                 
    console.log('ionViewDidLoad FeedbackPage');
  }

  checkFavDriver(list)
  {
    var did =  this.driver_id.toString();
    return new Promise((resolve,reject)=>{
      list.forEach(function (value) {
        console.log(value);
        if( did == value.id)
        {
          resolve('favorite');
        }
      });
      resolve('nofavorite');
    });
  }

  sendFeedback(feedback,rate)
  {
    if(feedback != '' && rate!='')
    {
      let param = new FormData();
      param.append("feedback",feedback);
      param.append("rating",rate);
      param.append("driver_id",this.driver_id);
      param.append("booking_id",this.booking_id);
      this.data.feedback(param).subscribe(result=>{
        if(result.status == "OK")
        {
          this.data.presentToast('Feedback sent successfully');
          this.navCtrl.setRoot(HomePage);
        }
        else   
        {
        }                           
      });

    }
  }

  public notify(isfav) {
    //console.log("Toggled: "+ isRemember);
    this.isfav = !isfav;
    if(this.isfav == true)
    {
      this.favDriver = 'Added to favourite';
      let param = new FormData();
      param.append("driver_id",this.driver_id);
      this.data.addFavDriver(param).subscribe(result=>{
        if(result.status == "OK")
        {
          this.data.presentToast('Added driver to favorite list successfully');
        }
        else   
        {
        }                           
      }); 
    }
    else{
      this.favDriver = 'Add driver as a favourite';
      let param = new FormData();
      param.append("driver_id",this.driver_id);
      this.data.removeFavDriver(param).subscribe(result=>{
        if(result.status == "OK")
        {
          this.data.presentToast('Removed driver from favorite list successfully');
        }
        else   
        {
        }                           
      }); 
    }
    //console.log("Toggled: "+ this.isRemember); 
  }
}
