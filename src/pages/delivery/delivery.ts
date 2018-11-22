import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage,ActionSheetController, Events, NavController, NavParams, Platform, ViewController, ModalController } from 'ionic-angular';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { AutocompletePage } from '../autocomplete/autocomplete';
import { RideNowPage } from '../ride-now/ride-now';
import { RideLaterPage } from '../ride-later/ride-later';
import { Http , RequestOptions, Headers} from '@angular/http';
import { ModalpagePage } from '../modalpage/modalpage';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { AsyncPipe } from '../../../node_modules/@angular/common';

/**   
 * Generated class for the DeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */   


declare var google;          
@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {
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
  calculated_distance : any;
  actionSheetStyles : any;
  actionSheet : any;
  role : any;
  lat : any;
  long : any;
  current_place : any;
  display_vehicleTypes : any;
  vehicle_types : any;
  vehicle_type : any = '';
  marker : any = [];
  selectdId:any = '';
  cost : any;
  infoWindow : any;
  selected_cost : any;
  public active: string; 

  constructor(private oneSignal: OneSignal,public ht: Http, public actionSheetCtrl: ActionSheetController, private eve: Events,public navCtrl: NavController, private modalCtrl: ModalController, private storage : Storage, public data : DataProvider, public geolocation: Geolocation, public navParams: NavParams, public zone: NgZone, public maps: GoogleMapsProvider, public platform: Platform, public viewCtrl: ViewController) {
    this.searchDisabled = true;
    this.saveDisabled = true;
    this.active = '';
    this.calculated_distance = '0 km';  
    this.vehicle_types =['','',''];  
    this.action = {
      pickup : 'pickup',
      drop : 'drop'
    };

    this.cost = {
      economy_cost : 0,
      comfort_cost : 0,
      business_cost : 0
    }

    this.address = {
      place:'',
      drop_place:''
    };
    
    this.storage.get('user').then(data=>{   
      var id = data[0].id;
      this.role = data[0].role;
      this.oneSignal.sendTag('user_id',id);
    });

    this.storage.get('token')
    .then(data=>{
        this.data.token = data;
    });

    this.geolocation.getCurrentPosition().then((position) => {
        this.lat = position.coords.latitude;
        this.long =  position.coords.longitude;
    });

    eve.subscribe('distance:created', (distance, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.calculated_distance = distance;
      let param = new FormData();
        let x = this.calculated_distance.split("km");
        param.append("distance",x[0]);
        this.data.getCost(param).subscribe(result=>{                          
          if(result.status == "ERROR")
          {
              this.data.presentToast('eRROR');
              return false;
          }
          else
          {     
            this.cost = {
              economy_cost : result.success.trip_costs[0].cost,
              comfort_cost : result.success.trip_costs[1].cost,
              business_cost : result.success.trip_costs[2].cost
            } 
          }
        });
    });
      this.geolocation.getCurrentPosition().then((position) => {
        this.lat = position.coords.latitude;
        this.long =  position.coords.longitude; 
      });

    setTimeout(() => {   
        var addressFull = [];
        var address = '';
        var geocoder = new google.maps.Geocoder();
        if(this.lat && this.long)
        {
          var latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.long)};
          geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === 'OK') {
              var address = results[0].formatted_address;
              addressFull.push(address);
            }        
          });
          setTimeout(() => {   
            this.address.place = addressFull[0];
          }, 100); 
        }
    }, 2500); 

  }

  updateActive(name)
  {
    this.active = name;
  }

  ionViewDidLoad(): void {
    let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
      this.autocompleteService = new google.maps.places.AutocompleteService();
      this.searchDisabled = false;  
    }); 
  }

showAddressModal(act) {
  let modal = this.modalCtrl.create(AutocompletePage, {action: act});
  let me = this;

  this.ionViewDidLoad();

    modal.onDidDismiss(data => {
      if(act=='pickup')
      {
        if(data)
        {
          this.address.place = data;
        }  
      // this.getgeocodeAddress(this.address.place);
      }
      else{
        if(data)
        {
          this.address.drop_place = data; 
        }
      }
      if(this.address.place && this.address.drop_place)
      {
        this.maps.startNavigating(this.address.place,this.address.drop_place,this.directionsPanel.nativeElement);        
        this.display_vehicleTypes = 1;
      }
    });
    modal.present();
} 

selectVehicle(selected_vehicle_type,selected_cost)
{
  //this.animator.setType('flipInX').show(this.myElem.nativeElement);
  this.vehicle_type = selected_vehicle_type;
  this.selected_cost = selected_cost;
  let param = new FormData();
        param.append("latitude",this.lat);
        param.append("longitude",this.long); 
        this.data.getCloseDrivers(param).subscribe(result=>{                              
          if(result.status == "ERROR")
          {
              this.data.presentToast('eRROR');
              return false;
          }
          else
          {   
            if(result.success.drivers[0])
            {
              this.data.presentToast('Closer Drivers!');
              var addressFull = [];
              var address=[];
              for(var i = 0; i<result.success.drivers.length;i++)
              {
                var geocoder = new google.maps.Geocoder();
                address[i]=[];
                address[i]['lat'] = result.success.drivers[i].latitude;
                address[i]['lng'] = result.success.drivers[i].longitude;
                   
                this.addMarker(address[i]['lat'],address[i]['lng'],result.success.drivers[i]);    
  
              }               
            }
            else{
              this.data.presentToast('No Nearby Drivers!');
            }
          }                           
        });
}

addMarker(lt,lg,driver) {
  this.marker = new google.maps.Marker({
    map: this.maps.map,         
    position: new google.maps.LatLng(lt,lg),
    icon: { url : 'assets/imgs/automobile.png',        
            size: {
              width: 64,
              height: 55
            }     
          },
    animation: google.maps.Animation.DROP
  });

  //var addressFull = [];
  //var driver_address = '';
  //var geocoder = new google.maps.Geocoder();
  //var latlng = {lat: parseFloat(driver.latitude), lng: parseFloat(driver.longitude)};
  //return new Promise((resolve) => { 
 /* geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        var address = results[0].formatted_address;
        addressFull.push(address);
      }        
    });
   await this.timeout(100);
      //setTimeout(() => {  
        driver_address = addressFull[0];
        console.log('driver_address==>'+driver_address);
     // }, 100);*/
     // }

      let content = "<ion-item id='info_action'><div style='float:left'><img class='info_avtar' src='assets/imgs/img1.png'></div><div class='info_info'><h6>"+driver.first_name+' '+driver.last_name+"</h6><p class='rating_p'>Rating : 4.5</p><p class='arrival_p'>Arrives In : "+this.getDuration(driver)+"</p></div></ion-item>";
    
      this.addInfoWindow(this.marker, content, driver.id);
    //});

}

getDuration(driver) {
  let directionsService = new google.maps.DirectionsService;
      let duration = '';
      //if(driver_address && driver_address != ''){
        directionsService.route({
          origin: {
            lat: Number(this.lat),
            lng: Number(this.long)
        },
        destination: {
            lat: Number(driver.latitude),
            lng: Number(driver.longitude)
        },
          travelMode: google.maps.TravelMode['DRIVING']
        }, (res,status) => {
          console.log('demodemo'+res);
          if(status == google.maps.DirectionsStatus.OK){
            var route = res.routes[0];
            console.log('route123==>'+route.legs[0]);          
            duration = route.legs[0].duration.text; 
            console.log('durationduration===>'+duration);
            return duration;
          }     
          else{
            console.log('route123==>errrrr');  
            return '';      
          }    
        });  
}
     
addInfoWindow(marker, content, did){
let infoWindow = new google.maps.InfoWindow({
  content: content
});

google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  document.getElementById('info_action').addEventListener('click', () => {
    //this.closeInfoViewWindow(infoWindow);
    this.showSelectDriverModal(did);
  });
});

}

rideNow(dist,selected_vehicle_type)
{
  if( this.address.place != '' && this.address.drop_place != '' && this.vehicle_type != '' && this.selectdId != '' )
  {       
    let param ;

    //this.getLoc(this.address.place);

    param = {
      'distance':dist,
      'vehicle_type':this.vehicle_type,
      'pick_up':this.address.place,
      'drop':this.address.drop_place,
      'cost':this.selected_cost,
      'Did': this.selectdId
    };
    this.navCtrl.push(RideNowPage,{param:param});
  }   
  else{
    this.data.presentToast('Please select pickup and drop locations, Vehicle Type and Nearby Driver!');
  }       
}

rideLater(dist,selected_vehicle_type)
{
  if( this.address.place != '' && this.address.drop_place != '' && this.vehicle_type != '' && this.selectdId != '' )
  {
    this.navCtrl.push(RideLaterPage,{distance:dist,vehicle_type:selected_vehicle_type});
  }   
  else{
    this.data.presentToast('Please select pickup and drop locations, Vehicle Type and Nearby Driver!');
  }
}

getLoc(addr)
{
  var addressFull = [];
    var address = '';
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': addr}, function(results, status):any {
      if (status === 'OK') {
        var lt = results[0].geometry.bounds['f'].kd;
        var lg = results[0].geometry.bounds['b'].gd;
      }       
    });
    setTimeout(() => {   
     // this.address.place = addressFull[0];
    }, 100);    
}        

showSelectDriverModal(did){
  let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'driverInfo',driverId:did});
  let me = this;
               
    modal.onDidDismiss(data => {   
      if(data)
      {
        this.selectdId = data;

        let param = new FormData();
        param.append("select_driver_Id",this.selectdId);

        this.data.postNotification(param).subscribe(result=>{   
          if(result.status == "ERROR")
          {     

          }
        });
      }  
      else{
        this.selectdId = '';
      }     
    });
    modal.present();
}

}
