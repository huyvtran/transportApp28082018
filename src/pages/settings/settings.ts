import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, Events, NavController, NavParams, Platform, ViewController, ModalController } from 'ionic-angular';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { AutocompletePage } from '../autocomplete/autocomplete';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  fav_location = 'Favorite Location';
  fav_driver = 'Favorite Driver';
  constructor(private eve: Events,public navCtrl: NavController, private modalCtrl: ModalController, private storage : Storage, public data : DataProvider, public geolocation: Geolocation, public navParams: NavParams, public zone: NgZone, public maps: GoogleMapsProvider, public platform: Platform, public viewCtrl: ViewController) {
    //this.searchDisabled = true;
    //this.saveDisabled = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }


  showAddressModal() {
    //console.log(act);
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
  
      modal.onDidDismiss(data => {
          console.log(data);
          this.fav_location = data;
      });
        modal.present();
  }

  showDriverModal()
  {
    let modal = this.modalCtrl.create(AutocompletePage,{action:'driver'});
    let me = this;
  
      modal.onDidDismiss(data => {
          console.log(data);
          this.fav_driver = data;
      });       
        modal.present();
  }

}
