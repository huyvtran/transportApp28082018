import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, Events, NavController, NavParams, Platform, ViewController, ModalController } from 'ionic-angular';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { AutocompletePage } from '../autocomplete/autocomplete';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  
  map : any;
  latitude: number;
  longitude: number;
  autocompleteService: any;
  placesService: any;
  query: string = '';
  dest_query :string ='';
  places: any = [];
  dest_places: any = [];
  searchDisabled: boolean;
  saveDisabled: boolean;
  location: any; 
  action : {};
  address;
  sourceLatLng:any;

  constructor(private eve: Events,public navCtrl: NavController, private modalCtrl: ModalController, private storage : Storage, public data : DataProvider, public geolocation: Geolocation, public navParams: NavParams, public zone: NgZone, public maps: GoogleMapsProvider, public platform: Platform, public viewCtrl: ViewController) {
    this.searchDisabled = true;
    this.saveDisabled = true;

    this.action = {
      pickup : 'pickup',
      drop : 'drop'
    };

    this.address = {
      place: '',
      drop_place:''
    };

    this.storage.get('token')
    .then(data=>{
        //console.log("Token : "+data);
        this.data.token = data;

    });

  }

  red_list(){
  	this.navCtrl.push('');      
  }

  ionViewDidLoad(): void {
 
    let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {

      this.autocompleteService = new google.maps.places.AutocompleteService();
      this.searchDisabled = false;  
    });

}

showAddressModal(act) {
  console.log(act);
  let modal = this.modalCtrl.create(AutocompletePage, {action: act});
  let me = this;

  this.ionViewDidLoad();


    modal.onDidDismiss(data => {
      if(act=='pickup')
      {
        this.address.place = data;
      // this.getgeocodeAddress(this.address.place);
      }
      else{
        this.address.drop_place = data; 
      }
      if(this.address.place != '' && this.address.drop_place!='')
      {
        this.maps.startNavigating(this.address.place,this.address.drop_place,this.directionsPanel.nativeElement);    
      }
    });
      modal.present();
} 

rideNow(distance)
{
  console.log('pickup==>'+this.address.place);
  console.log('drop==>'+this.address.drop_place);
  console.log('schedule==>'+'1');
  console.log('date==>'+new Date().toISOString());
}

rideLater(distance)
{
  
}

}
  