import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { ModalpagePage } from '../modalpage/modalpage';

/**
 * Generated class for the BookingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-list',
  templateUrl: 'booking-list.html',
})
export class BookingListPage {             
               
  driver_id : any;
  bookings : any;
  pending_bookings : any;
  booking_history :any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public data : DataProvider, private storage: Storage, private modalCtrl: ModalController) {
    this.storage.get('user').then(data=>{        
      this.driver_id = data[0].id;                 
    });   

    this.bookings='pending';             

    setTimeout(() => {            
      let param = new FormData();
      param.append("driver_id",this.driver_id);
      console.log(this.driver_id);         
        this.data.getBookingList(param).subscribe(result=>{
          console.log(result);
          if(result.status == 'OK')
          {  
            this.booking_history = result.success.booking;
          }
        });

        this.data.getPendingBookingList(param).subscribe(result=>{
          console.log(result);
          if(result.status == 'OK')
          {
            this.pending_bookings = result.success.booking;
          }
        });
      },1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingListPage');
  }

  showBooking(i)                    
  {
    console.log(this.pending_bookings[i]);
    let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'showBooking',bookingId:this.pending_bookings[i].booking_id});
    let me = this;
               
    modal.onDidDismiss(data => { 
      this.navCtrl.setRoot(this.navCtrl.getActive().component);   
    });
    modal.present();
  }

}
