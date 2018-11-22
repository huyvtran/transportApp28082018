import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { FeedbackPage } from '../feedback/feedback';

/**
 * Generated class for the BookinghistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookinghistory',
  templateUrl: 'bookinghistory.html'
})
export class BookinghistoryPage {

  id : any;
  history : any = '';
  upcoming : any = '';
  delivery_history : any = '';
  upcoming_deliveries : any = '';
  showDiv :any = 1;    
  showSubDiv : any = 3;

  constructor(public data : DataProvider, private loading: LoadingController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

    let loader = this.loading.create({
      content :"Please wait...",
      spinner : 'crescent'
    });

    loader.present();

    this.storage.get('user').then(data=>{        
      this.id = data[0].id;    
      let param = new FormData();
      param.append("customer_id",data[0].id);
      this.data.getCustomerBookingList(param).subscribe(result=>{
        console.log(result);
        if(result.status == 'OK'){
          this.history = result.success.booking;
          this.upcoming = result.success.later;
          
        }
      });  
    }); 
    
    loader.dismiss();
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookinghistoryPage');
  }

  changeTab(TabNo)
  {
    this.showDiv = TabNo;   
    this.showSubDiv = 3;  
  }

  changeSubTab(TabNo)
  {
    this.showSubDiv = TabNo;
  }

  giveFeedback(i)
  {
    //let record = this.history[i];
    this.navCtrl.setRoot(FeedbackPage,{booking_id : this.history[i].booking_id, driver_id : this.history[i].driver_id});
  }

}      
