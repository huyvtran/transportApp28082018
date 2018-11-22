import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage,ActionSheetController, Events, NavController, NavParams, Platform, ViewController, ModalController, LoadingController } from 'ionic-angular';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { Subscription } from 'rxjs/Subscription';
import { AutocompletePage } from '../autocomplete/autocomplete';
import { RideNowPage } from '../ride-now/ride-now';
import { RideLaterPage } from '../ride-later/ride-later';
import { ModalpagePage } from '../modalpage/modalpage';
import { OneSignal } from '@ionic-native/onesignal';
import { AsyncPipe } from '../../../node_modules/@angular/common';
import { filter, delay } from 'rxjs/operators';
import * as firebase from 'Firebase';
import { Device } from '@ionic-native/device';
//import { isCordovaAvailable } from '../common/is-cordova-available';
//import { oneSignalAppId, sender_id } from '../config';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions'; 
import { ConfirmPaymentPage } from '../confirm-payment/confirm-payment'

declare var google;          

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;

  currentMapTrack = null;
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  positionSubscription: Subscription;
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
  isnowenabled:boolean=false;
  endRide:boolean=false;
  islaterenabled:boolean=false;
  ride_date : any = '';
  ride_time : any = '';
  drivers : any =[];
  public duration: any;
  markers = [];
  ref = firebase.database().ref('geolocations/');
  chkPickup : any = 0;
  liveRide_bookingId :any;
  liveRide_customerId :any;
  yourId : any;
  id : any;
  watch2 : Subscription;
  watch : any;
  displaydistance : boolean = false;


  constructor( private nativePageTransitions: NativePageTransitions, private oneSignal: OneSignal, private loading: LoadingController,private device: Device, public actionSheetCtrl: ActionSheetController, private eve: Events,public navCtrl: NavController, private modalCtrl: ModalController, private storage : Storage, public data : DataProvider, public geolocation: Geolocation, public navParams: NavParams, public zone: NgZone, public maps: GoogleMapsProvider, public platform: Platform, public viewCtrl: ViewController) {
   
    let loader = this.loading.create({
      content :"Please wait...",
      spinner : 'crescent'
    });

    loader.present();
   
    this.searchDisabled = true;
    this.saveDisabled = true;
    this.active = '';
    this.calculated_distance = '0 km';  
    this.action = {
      pickup : 'pickup',
      drop : 'drop'
    };

    this.cost = {
      economy_cost : 0,
      comfort_cost : 0,
      business_cost : 0
    }

    //this.startTracking();

    this.address = {
      place:'',
      drop_place:''
    };

      

    /*setTimeout(() => {   
      if(this.role == 2)
      {
		
        var addressFull = [];
        var address = '';
        var geocoder = new google.maps.Geocoder();
        console.log(this.lat+'--'+this.long);
        if(this.lat && this.long)
        {
          var latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.long)};
          geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === 'OK') {
              var address = results[0].formatted_address;
              addressFull.push(address);
              console.log(address);
            }        
          });
          setTimeout(() => {   
            this.address.place = addressFull[0];
            console.log(this.address.place);
          }, 100); 
        }
      }
    },2500);*/
     
    /*setTimeout(() => {   
      if(this.role == 2)
      {
        this.data.getvehicletypesforCustomers().subscribe(result=>{
        
          if(result.status == 'OK')        
          {
            this.vehicle_types = result.success.vehicletypes;
          }
          else{
            this.data.presentToast(result.status);
          }     
        });  

        /*if(this.lat == undefined || this.long == undefined)
        {
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }*
        
        let param = new FormData();
        param.append("latitude",this.lat);
        param.append("longitude",this.long);
          this.data.storeCustomerLocation(param).subscribe(result=>{
            if(result.status == "ERROR")
            {
                this.data.presentToast('Not Able to get your current location');
            }
            else   
            {
            }                           
          });
        //this.navCtrl.setRoot(HomePage); 
      }else if(this.role == 3){
        let param = new FormData();
        param.append("latitude",this.lat);
        param.append("longitude",this.long); 
        console.log(this.lat+'==='+this.long);
          this.data.storeDriverLocation(param).subscribe(result=>{
            if(result.status == "ERROR")
            {
                this.data.presentToast('Not Able to get your current location');
            }
            else   
            {

            }                           
          });
        
       // this.navCtrl.setRoot(HomePage);     
      }  

    }, 2500); */

    eve.subscribe('distance:created', (distance, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.calculated_distance = distance;
      this.displaydistance = true;
      let param = new FormData();
        let x = this.calculated_distance.split("km");
        x = x[0].split("m");
        param.append("distance",x);
        if(this.role == 2)
        {
          this.data.getCost(param).subscribe(result=>{                          
            if(result.status == "ERROR")
            {
                //this.data.presentToast('eRROR');
                return false;
            }
            else
            {     
              this.cost = {
                economy_cost : Number((result.success.trip_costs[0].cost).toFixed(2)), //result.success.trip_costs[0].cost,
                comfort_cost : Number((result.success.trip_costs[1].cost).toFixed(2)),//result.success.trip_costs[1].cost,
                business_cost : Number((result.success.trip_costs[2].cost).toFixed(2))//result.success.trip_costs[2].cost
              } 
            }
          });
        }
       
    });
      
    eve.subscribe('live_tracking:created', (live_tracking_data, time) => {
      this.isnowenabled = true;
      this.watchMethod(live_tracking_data);
      this.liveRide_bookingId = live_tracking_data.booking_id;
      this.liveRide_customerId = live_tracking_data.customer_id;
      //alert(this.liveRide_customerId);
     
      let param = new FormData();
      param.append("booking_id",this.liveRide_bookingId);
        this.data.getBookingDetails(param).subscribe(result=>{                          
          if(result.status == "OK")
          {
            //this.maps.startNavigating([new google.maps.LatLng(this.latitude,this.longitude)], result.success.booking.source,this.directionsPanel.nativeElement);
            this.maps.startNavigating(result.success.booking.source,result.success.booking.destination,this.directionsPanel.nativeElement);
          }

        }); 
    });


    eve.subscribe('cancelled_request:created', (cancelled_request, time) => {
      //this.positionSubscription.unsubscribe();
      this.watch.unsubscribe();
      if(this.watch2){
        this.watch2.unsubscribe();
      }
      firebase.database().ref(this.liveRide_bookingId).remove();
      this.data.presentToast('Request cancelled by customer');
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });


    eve.subscribe('ride_later_alert:created', (ride_later_alert, time) => {
     // alert(ride_later_alert.booking_id);
     
    this.gotoRideLater(ride_later_alert.booking_id);
    });
    
    
   /* setTimeout(() => {    
      if(this.role == 3)
      {
        let param = new FormData();
        param.append("latitude",this.lat);
        param.append("longitude",this.long); 
        this.data.getCloseCustomers(param).subscribe(result=>{
                            
          if(result.status == "ERROR")
          {
              //this.data.presentToast('eRROR');
              return false;
          }
          else
          {   
            if(result.success.customers)
            {
              this.data.presentToast('Closer Customers!');
              var addressFull = [];
              var address=[];
            
              for(var i = 0; i<result.success.customers.length;i++)
              {
                var geocoder = new google.maps.Geocoder();
                address[i]=[];
                address[i]['lat'] = result.success.customers[0].latitude;
                address[i]['lng'] = result.success.customers[0].longitude;
                this.marker[i] = new google.maps.Marker({
                  map: this.maps.map,         
                  //animation: google.maps.Animation.DROP,
                  position: new google.maps.LatLng(address[i]['lat'],address[i]['lng']),
                  icon: { url : 'assets/imgs/standing-up-man-.png',
                          size: {
                            width: 50,
                            height: 55
                          } 
                        },
                  animation: google.maps.Animation.BOUNCE
                });         
              }
            }
            else{
              this.data.presentToast('No Nearby Customers!');
            }
          }                        
        });
      }      
     }, 2500); */
    // setTimeout(() => {   
      loader.dismiss();
    //}, 500); 
  }

  async ionViewDidLoad() {
    //this.watch2.unsubscribe();
      console.log("First log");
      google.maps.event.trigger( this.maps.map, 'resize' );
      await this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
        this.autocompleteService = new google.maps.places.AutocompleteService();
        this.searchDisabled = false;  
        console.log("Middle log");
      });        
      console.log("Last log");


      this.storage.get('user').then(data=>{   
        this.id = data[0].id
        this.yourId = this.id;
        this.role = data[0].role;
  
        
      });
      
      //this.maps.map.clear();
  }

  

  ionViewWillLeave()
  {
    //alert('will');
    /*if(this.watch2){
      this.watch2.unsubscribe();
    }

    if(this.watch)
    {
      this.watch.unsubscribe();
    }*/
    
    
    //this.geolocation.clearWatch(watch2);
    /*let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 1000,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 500,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };    
  
     this.nativePageTransitions.slide(options);*/
     
  }

  ionViewWillEnter() {
    
    this.getLatLng().then(points=>{
      this.lat = points[0];
      this.long = points[1];
      if(this.role == 2)
      {
        this.getPickup().then(data=>{
          this.address.place = data;
        });

        this.data.getvehicletypesforCustomers().subscribe(result=>{
        
          if(result.status == 'OK')        
          {
            this.vehicle_types = result.success.vehicletypes;
          }
          else{
            this.data.presentToast(result.status);
          }     
        });  

        /*if(this.lat == undefined || this.long == undefined)
        {
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }*/
        
        let param = new FormData();
        param.append("latitude",this.lat);
        param.append("longitude",this.long);
          this.data.storeCustomerLocation(param).subscribe(result=>{
            if(result.status == "ERROR")
            {
                this.data.presentToast('Not Able to get your current location');
            }
            else   
            {
            }                           
          });
        
      }

      if(this.role == 3)
      {
        let param = new FormData();
        param.append("latitude",this.lat);
        param.append("longitude",this.long); 
        console.log(this.lat+'==='+this.long);
          this.data.storeDriverLocation(param).subscribe(result=>{
            if(result.status == "ERROR")
            {
                this.data.presentToast('Not Able to get your current location');
            }
            else   
            {

            }                           
          });


          let param1 = new FormData();
          param1.append("latitude",this.lat);
          param1.append("longitude",this.long); 
          this.data.getCloseCustomers(param1).subscribe(result=>{
                              
            if(result.status == "ERROR")
            {
                //this.data.presentToast('eRROR');
                return false;
            }
            else
            {   
              if(result.success.customers)
              {
                this.data.presentToast('Closer Customers!');
                var addressFull = [];
                var address=[];
              
                for(var i = 0; i<result.success.customers.length;i++)
                {
                  var geocoder = new google.maps.Geocoder();
                  address[i]=[];
                  address[i]['lat'] = result.success.customers[0].latitude;
                  address[i]['lng'] = result.success.customers[0].longitude;
                  this.marker[i] = new google.maps.Marker({
                    map: this.maps.map,         
                    //animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(address[i]['lat'],address[i]['lng']),
                    icon: { url : 'assets/imgs/standing-up-man-.png',
                            size: {
                              width: 50,
                              height: 55
                            } 
                          },
                    animation: google.maps.Animation.BOUNCE
                  });         
                }
              }
              else{
                this.data.presentToast('No Nearby Customers!');
              }
            }                        
          });
      }
    })
    //alert('ionViewWillEnter');
   }

   ionViewDidEnter()
   {
    /*this.storage.get('user').then(data=>{   
      this.id = data[0].id
      this.yourId = this.id;
      this.role = data[0].role;

      this.getLatLng().then(points=>{
        this.lat = points[0];
        this.long = points[1];*/
       /* if(this.lat != undefined || this.long !=!undefined){

        }*/
        setTimeout(() => {
        if(this.role == 2)
        {
          /*this.getPickup().then(data=>{
            this.address.place = data;
          });*/

          this.data.getvehicletypesforCustomers().subscribe(result=>{
        
            if(result.status == 'OK')        
            {
              this.vehicle_types = result.success.vehicletypes;
            }
            else{
              this.data.presentToast(result.status);
            }     
          });  
  
          /*if(this.lat == undefined || this.long == undefined)
          {
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          }*/
          
          let param = new FormData();
          param.append("latitude",this.lat);
          param.append("longitude",this.long);
            this.data.storeCustomerLocation(param).subscribe(result=>{
              if(result.status == "ERROR")
              {
                  this.data.presentToast('Not Able to get your current location');
              }
              else   
              {
              }                           
            });
          
        }

        if(this.role == 3)
        {
          let param = new FormData();
          param.append("latitude",this.lat);
          param.append("longitude",this.long); 
          console.log(this.lat+'==='+this.long);
            this.data.storeDriverLocation(param).subscribe(result=>{
              if(result.status == "ERROR")
              {
                  this.data.presentToast('Not Able to get your current location');
              }
              else   
              {
  
              }                           
            });


            let param1 = new FormData();
            param1.append("latitude",this.lat);
            param1.append("longitude",this.long); 
            this.data.getCloseCustomers(param1).subscribe(result=>{
                                
              if(result.status == "ERROR")
              {
                  //this.data.presentToast('eRROR');
                  return false;
              }
              else
              {   
                if(result.success.customers)
                {
                  this.data.presentToast('Closer Customers!');
                  var addressFull = [];
                  var address=[];
                
                  for(var i = 0; i<result.success.customers.length;i++)
                  {
                    var geocoder = new google.maps.Geocoder();
                    address[i]=[];
                    address[i]['lat'] = result.success.customers[0].latitude;
                    address[i]['lng'] = result.success.customers[0].longitude;
                    this.marker[i] = new google.maps.Marker({
                      map: this.maps.map,         
                      //animation: google.maps.Animation.DROP,
                      position: new google.maps.LatLng(address[i]['lat'],address[i]['lng']),
                      icon: { url : 'assets/imgs/standing-up-man-.png',
                              size: {
                                width: 50,
                                height: 55
                              } 
                            },
                      animation: google.maps.Animation.BOUNCE
                    });         
                  }
                }
                else{
                  this.data.presentToast('No Nearby Customers!');
                }
              }                        
            });
        }
        }, 1500);
        
      //});
      
    //});

    this.storage.get('token')
    .then(data=>{
        this.data.token = data;
    });
   }


gotoRideLater(booking_id)
{
  if(this.watch2){
    this.watch2.unsubscribe();
  }
  this.eve.unsubscribe('distance:created');
  this.eve.unsubscribe('ride_later_alert:created');
  var pick_up;
      var drop;
      let param = new FormData();
      param.append("booking_id",booking_id);
      this.data.getcurrentBooking(param).subscribe(result=>{   
              console.log(result);    
              //this.userData = result; 
              if(result.status == "OK")
              {
                pick_up = result.success.booking.source;
                drop = result.success.booking.destination;
                //alert(pick_up);
                /*if(this.watch2){
                  this.watch2.unsubscribe();
                }
                eve.unsubscribe('ride_later_alert:created');*/
                
                this.navCtrl.push(ConfirmPaymentPage,{'booking_id':booking_id,rideType:'now',source:pick_up,destination:drop});
                
              }
              else
              {
                this.data.presentToast('Error');        ;
              }                                
      });
}


getLatLng()
{
  return new Promise((resolve,reject)=>{
    var points = [];
    this.watch2 = this.geolocation.watchPosition().subscribe((position) => {
      //alert('hello - '+this.lat);
    // this.geolocation.getCurrentPosition().then((position) => {
        //this.lat = position.coords.latitude;
        //this.long =  position.coords.longitude;
        points.push(position.coords.latitude);
        points.push(position.coords.longitude);
        resolve(points); 
      if(points.length > 0)
      {
        this.watch2.unsubscribe();
        
      }
      
    });
    
   // setTimeout(() => {   
      
      
    //},1500);
    
  });
}

getPickup()
{
  return new Promise((resolve,reject)=>{
  var addressFull = [];
        var address = '';
        var geocoder = new google.maps.Geocoder();
        console.log(this.lat+'--'+this.long);
        if(this.lat && this.long)    
        {
          var latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.long)};
           geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === 'OK') {
              var address = results[0].formatted_address;
              addressFull.push(address);
              //console.log(address);
              resolve(address);
            }        
          });
          /*setTimeout(() => {   
            this.address.place = addressFull[0];
            console.log(this.address.place);
          },500); */
        }
      });
}

  
updateActive(name)
{
  this.active = name;
}

showAddressModal(act) {
  this.active = '';
  this.isnowenabled = false;
  this.islaterenabled = false;

  if(this.watch2){
    this.watch2.unsubscribe();
  }
  let modal = this.modalCtrl.create(AutocompletePage, {action: act});
  let me = this;

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
  this.isnowenabled = false;
  this.islaterenabled = false;
  this.vehicle_type = selected_vehicle_type;
  this.selected_cost = selected_cost;
  this.deleteMarkers();
  let param = new FormData();
  param.append("latitude",this.lat);
  param.append("longitude",this.long); 
  param.append("vehicle_type",this.vehicle_type); 
  this.data.getCloseVehicles(param).subscribe(result=>{                              
  if(result.status == "ERROR")
  {
    //this.data.presentToast('eRROR');
    return false;
  }
  else
  {   
    if(result.success.drivers[0])
    {
      //this.data.presentToast('Closer Drivers!');
      //var addressFull = [];
      this.isnowenabled = true;
      this.islaterenabled = true;
      var address=[];
      for(var i = 0; i<result.success.drivers.length;i++)
      {
        //var geocoder = new google.maps.Geocoder();
        address[i]=[];
        address[i]['lat'] = result.success.drivers[i].latitude;
        address[i]['lng'] = result.success.drivers[i].longitude;
        this.drivers[i] = result.success.drivers[i].id;
        this.addMarker(address[i]['lat'],address[i]['lng'],result.success.drivers[i]);    
      }               
    }
    else{
      this.data.presentToast('No Nearby Drivers!');
      this.isnowenabled = false;
      this.islaterenabled = false;
    }
  }                           
});

/*
  let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'rideDecision'},{showBackdrop: false});
               
  modal.onDidDismiss(data => {   
      if(data && data == 'now')
      {
        
      }
      else{
        console.log(data);
        this.isnowenabled = false;
        this.islaterenabled = true;
        this.ride_date = data[0];
        this.ride_time = data[1];
      }
    });
    modal.present();*/
}

addMarker(lt,lg,driver) {
  this.marker = new google.maps.Marker({
    map: this.maps.map,         
    position: new google.maps.LatLng(lt,lg),
    icon: { url : 'assets/imgs/car48x48.png',        
            size: {
              width: 64,
              height: 55
            }     
          },
    animation: google.maps.Animation.DROP
  });
  this.markers.push(this.marker);
  /*let param = new FormData();
  param.append("origin",'19.7514798','75.7138884');
  param.append("destination",'19.0760','72.8777');

  this.data.customerBookingDistance(param).subscribe(result=>{   
    if(result.status == 'OK')
    {     
      this.duration = result.success.duration;
      console.log(this.duration);
    }
  });
  console.log(this.duration);
  let content = "<ion-item id='info_action'><div style='float:left'><img class='info_avtar' src='assets/imgs/img1.png'></div><div class='info_info'><h6>"+driver.first_name+' '+driver.last_name+"</h6><p class='rating_p'>Rating : 4.5</p><p class='arrival_p'>Arrives In : "+this.duration+"</p></div></ion-item>";
  this.addInfoWindow(this.marker, content, driver.id);
    //});*/

}
     
/*addInfoWindow(marker, content, did){
let infoWindow = new google.maps.InfoWindow({
  content: content
});

google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  document.getElementById('info_action').addEventListener('click', () => {
    this.showSelectDriverModal(did);
  });
});

}*/

rideNow(dist,selected_vehicle_type)
{
  if( this.address.place != '' && this.address.drop_place != '' && this.vehicle_type != '' && this.selected_cost > 0 )
  {       
    let param ;

    //this.getLoc(this.address.place);

    param = {
      'distance':dist,
      'vehicle_type':this.vehicle_type,
      'pick_up':this.address.place,
      'drop':this.address.drop_place,
      'cost':this.selected_cost,
      'Did': this.drivers
    };
    this.navCtrl.push(RideNowPage,{param:param});
  }   
  else{
    this.data.presentToast('Please select pickup and drop locations and Vehicle Type!');
  }       
}

rideLater(dist,selected_vehicle_type)
{
  let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'getDateTime'},{showBackdrop: false});             
  modal.onDidDismiss(data => {   
      if(data)
      {
        this.ride_date = data[0];
        this.ride_time = data[1];

        if( this.address.place != '' && this.address.drop_place != '' && this.vehicle_type != '' && this.ride_date != ''&& this.ride_time != '' && this.selected_cost > 0 )
        {
          let param ;
          param = {
            'distance':dist,
            'vehicle_type':this.vehicle_type,
            'pick_up':this.address.place,
            'drop':this.address.drop_place,
            'cost':this.selected_cost,
            'date' : this.ride_date,
            'time' : this.ride_time,
            'Did': this.drivers
          };
          this.navCtrl.push(RideLaterPage,{param:param});
        }   
        else{
          this.data.presentToast('Please select pickup and drop locations, Vehicle Type, Date and Time!');
        }

      }
    });
    modal.present();
}  

/*showSelectDriverModal(did){
  let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'driverInfo',driverId:did});
  let me = this;
               
    modal.onDidDismiss(data => {   
      if(data)
      {
        //this.selectdId = data;
      }  
      else{
        //this.selectdId = '';
      }     
    });
    modal.present();    
}*/

startTracking() {
  this.isTracking = true;
  this.trackedRoute = [];

  this.positionSubscription = this.geolocation.watchPosition().subscribe(data => {
      console.log(data);
      setTimeout(() => {
        this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
        //this.redrawPath(this.trackedRoute);
      }, 0);
    });

}

redrawPath(path) {
  if (this.currentMapTrack) {
    this.currentMapTrack.setMap(null);
  }

  if (path.length > 1) {
    this.currentMapTrack = new google.maps.Polyline({
      path: path,
      geodesic: true,
      strokeColor: '#ff00ff',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    this.currentMapTrack.setMap(this.maps.map);
  }
}

stopTracking() {
  let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
  this.previousTracks.push(newRoute);
  this.storage.set('routes', this.previousTracks);   
 
  this.isTracking = false;
  this.positionSubscription.unsubscribe();
  this.currentMapTrack.setMap(null);
}

watchMethod(live_tracking_data)
{
 // var customer_id = live_tracking_data.customer_id;

  /*let param = new FormData();
  param.append("customer_id",customer_id); 

  this.data.getCustInfo(param).subscribe(result=>{   
    if(result.status == "OK")
    {     
      console.log(result);
      if( this.lat == result.success.customer[0].latitude && this.long == result.success.customer[0].longitude && this.chkPickup ==0)
      {
        this.chkPickup =1;
      }
    }
    else{
      console.log('Err');
    }    
  });
*/
  this.watch = this.geolocation.watchPosition().subscribe((data) => {
      //this.deleteMarkers();
      
      this.updateGeolocation(this.liveRide_customerId,this.liveRide_bookingId, data.coords.latitude,data.coords.longitude);
      /*-let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
      let image = 'assets/imgs/blue-bike.png';
      this.addMarker1(updatelocation,image);
      this.setMapOnAll(this.map);*/
    });
  }

updateGeolocation(customer_id,booking_id, lat, lng) {
  firebase.database().ref(booking_id+'/'+this.id).set({ 'latitude': lat, 'longitude' : lng});
  //firebase.database().ref('100/201').set({ 'latitude': '17.1243', 'longitude' : '75.1463'});
} 

/*addMarker1(location, image) {
  let marker = new google.maps.Marker({
    position: location,
    map: this.map,
    icon: image
  });
  this.markers.push(marker);
}

setMapOnAll(map) {
  for (var i = 0; i < this.markers.length; i++) {
    this.markers[i].setMap(map);
  }
}

clearMarkers() {
  this.setMapOnAll(null);
}

deleteMarkers() {
  this.clearMarkers();
  this.markers = [];
}*/

setMapOnAll(map) {
  for (var i = 0; i < this.markers.length; i++) {
    this.markers[i].setMap(map);
  }
}

clearMarkers() {
  this.setMapOnAll(null);
}

deleteMarkers() {
  this.clearMarkers();
  this.markers = [];
}

startRide()
{
  this.isnowenabled = false;
  this.endRide = true;
  let param = new FormData();
  param.append("customer_id",this.liveRide_customerId); 
  param.append("booking_id",this.liveRide_bookingId); 
  param.append("driver_id",this.yourId); 

  this.data.rideStart(param).subscribe(result=>{   
    if(result.status == "OK")
    {     
      console.log(result);
     
      this.startTracking();
    }
    else{
      console.log('Err');
    }    
  });
}

finishRide()
{

  let param = new FormData();
  param.append("customer_id",this.liveRide_customerId); 
  param.append("booking_id",this.liveRide_bookingId); 
  param.append("driver_id",this.yourId);    

  this.data.rideEnd(param).subscribe(result=>{   
    if(result.status == "OK")
    {     
      console.log(result); 
      firebase.database().ref(this.liveRide_bookingId).remove();
     

      if(this.watch && this.watch !== undefined)
      {
        this.watch.unsubscribe();
      }
      if(this.watch2){
        this.watch2.unsubscribe();
      }
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
    else{
      console.log('Err');      
    }    
  });
}

}       
