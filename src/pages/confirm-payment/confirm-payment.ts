import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage,ActionSheetController,AlertController, Events, NavController, NavParams, Platform, ViewController, ModalController } from 'ionic-angular';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { Subscription } from 'rxjs/Subscription';
import { AutocompletePage } from '../autocomplete/autocomplete';
import { Device } from '@ionic-native/device';
import * as firebase from 'Firebase';
//import { FeedbackPage } from '../feedback/feedback';
import { PaymentPage } from '../payment/payment';
import { ModalpagePage } from '../modalpage/modalpage';

/**
 * Generated class for the ConfirmPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;  

@IonicPage()       
@Component({         
  selector: 'page-confirm-payment',
  templateUrl: 'confirm-payment.html',
})
export class ConfirmPaymentPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanelElement: ElementRef;
  
  customer_id : any;
  booking_id : any;
  driver_id : any;
  active : any;
  map : any;
  latitude: number;
  longitude: number;    
  autocompleteService: any;
  searchDisabled: boolean; 
  saveDisabled: boolean;
  rideType : any;
  traking : any;
  callpickAPI :any;
  duration : any = '0 min';
  source : any;
  destination : any;
  marker:any = null;
  markers:any = [];
  directionsService: any;
  directionsDisplay :any;
  startMarker : any;
  stopMarker : any;
  circle : any;
  directionsPanel :any;
  currentMapTrack = null;
  isTracking = false;
  trackedRoute = [];
  public userData: any = {};
  car_marker : any = null;
  watch : any;
  rideComplete : boolean = false;
  ref = firebase.database().ref('geolocations/');

  constructor( public geolocation: Geolocation, private modalCtrl: ModalController, private device: Device, public navParams: NavParams, public zone: NgZone, public platform: Platform, public viewCtrl: ViewController,public actionSheetCtrl: ActionSheetController, public eve: Events,public navCtrl: NavController,public data : DataProvider, private storage: Storage,private alertCtrl: AlertController, public maps: GoogleMapsProvider) {
    this.booking_id = navParams.get('booking_id');
    this.rideType = navParams.get('rideType');
    this.source = navParams.get('source');
    this.destination = navParams.get('destination');
    this.driver_id = '';
    //this.driver_id = navParams.get('driver_id');
    this.active = 'reject';
    //this.live_trak = 'false';
    this.traking = 'image';

    this.storage.get('user').then(data=>{        
      this.customer_id = data[0].id;          
    }); 
   
  alert(this.source);
  alert(this.destination);

    eve.subscribe('live_tracking_Driver_id:created', (live_tracking_Driver_id, time) => {
      console.log('live_tracking_Driver_id'+live_tracking_Driver_id);
      this.driver_id = live_tracking_Driver_id; 
      alert(this.driver_id);
      this.subscribeAction();
    });

    eve.subscribe('finished_ride:created', (finished_ride_data, time) => {
        
      //this.rideComplete = true;
      firebase.database().ref(this.booking_id).remove();
      this.watch.unsubscribe();
      eve.unsubscribe('finished_ride:created');
      this.navCtrl.push(PaymentPage,{booking_id : this.booking_id, driver_id : this.driver_id});
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPaymentPage');
    /*let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
      this.autocompleteService = new google.maps.places.AutocompleteService();
      this.searchDisabled = false;  
    }); */

    this.loadMap();
  }
  

  ionViewWillLeave()
  {
    //alert('will');
    /*if(this.watch && this.watch !== undefined){
      this.watch.unsubscribe();
    }*/
    
    this.eve.unsubscribe('finished_ride:created');
  }

  subscribeAction()
  {
    this.eve.unsubscribe('live_tracking_Driver_id:created');
    this.traking = 'div';
      //this.live_trak = 'true';
      this.active = 'accept';
      
      //this.startNavigating(this.source,this.destination);
      this.showSelectDriverModal(this.driver_id);
      this.startNavigating(this.source,this.destination); 
      //this.watchMethod();
      /*let marker = new google.maps.Marker({
        position: this.map.getCenter(),
        map: this.map,
        icon: 'assets/imgs/car48x48.png'
      });

      setInterval(() =>{
        this.updateTrak().then(data=>{
          console.log(data);
          this.deleteMarkers();
          // this.addMarker1(data,'assets/imgs/car48x48.png');
           marker.setPosition(data);
          //this.markers.push(marker);
          this.setMapOnAll(this.map);
          this.getDuration(data).then(data=>{
            this.duration = data;
          });
        });
      }, 3000);*/

     // this.driver_id = 3;
    //setTimeout(() => {  
     // this.startNavigating(this.source,this.destination);
    //}, 2500); 
     // this.showSelectDriverModal(this.driver_id);
    this.watchMethod();

    
    //let marker= null;
    let marker = null;

    this.updateTrak().then(data=>{
      this.userData = data;
      console.log(data);
      
        marker = new google.maps.Marker({
          position: data,
          map: this.map,
          icon: 'assets/imgs/car48x48.png'
        });

    });
   
    setInterval(() =>{ 
      this.updateTrak().then(data=>{
        this.userData = data;
        console.log(data);
        
          marker.setPosition({lat:this.userData.lat(),lng:this.userData.lng()});
        
          this.trackedRoute.push({ lat: this.userData.lat(), lng: this.userData.lng() });
          this.redrawPath(this.trackedRoute);
        //alert(this.userData.lat());
        //this.addMarker1(data,'assets/imgs/car48x48.png');
        
        //this.abc(this.marker, data)
        /*if (this.marker != null) {
          this.marker.setPosition(this.userData);
        } 
        else{
        
         
        }*/
      
      });   
    }, 5000);
  }

 abc(marker,data) {
  this.userData = data;
    marker.setPosition({lat:this.userData.lat(),lng:this.userData.lng()});
  }
   
  showSelectDriverModal(did){
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
  }

  loadMap(){
 
    //this.geolocation.watchPosition().subscribe((position) =>  {
      this.geolocation.getCurrentPosition().then((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          clickableIcons: false,    
          disableDefaultUI: true,
          zoomControl: false,
          enableHighAccuracy: true,
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     
    }, (err) => {
      console.log(err);
    });

  }

  getDuration(data)
  {
    return new Promise((resolve,reject)=>{
      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix({
          origins: [new google.maps.LatLng(this.latitude,this.longitude)],
          destinations:[new google.maps.LatLng(data.lat(), data.lng())],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
      }, function (response, status) {
          if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
              var distance = response.rows[0].elements[0].distance.text;
              var duration = response.rows[0].elements[0].duration.text;
              resolve(duration);
          } else {
              alert("Unable to find the distance via road.");
          }
      });
    });
  }

  confirm_cancel()
  { 
    var CancelDuration1;
    var CancelCharge1;
    var CancelDuration2;
    var CancelCharge2;
    var CancelDuration3;
    var CancelCharge3;
    let param = new FormData();
    param.append("booking_id",this.booking_id);
    this.data.RideCancelCharges(param).subscribe(result=>{
      console.log(result);
      if(result.status == 'OK')
      {
        console.log(result.success);
        CancelDuration1 = result.success.Charges_list[0].cancellation_time;
        CancelCharge1 = result.success.Charges_list[0].charges;
        CancelDuration2 = result.success.Charges_list[1].cancellation_time;
        CancelCharge2 = result.success.Charges_list[1].charges;
        CancelDuration3 = result.success.Charges_list[2].cancellation_time;
        CancelCharge3 = result.success.Charges_list[2].charges;
        let alert = this.alertCtrl.create({
          title: 'Cancellation charges',
          message:'There are some cancellation charges as per following.<br/>For '+CancelDuration1+' min : $'+CancelCharge1+'<br/> For '+CancelDuration2+'min : $'+CancelCharge2+'<br/> For'+CancelDuration3+' min : $'+CancelCharge3+' <br/>Do you Really want to cancel Ride?',
          buttons: [
            {
              text: 'Yes',
              handler: () => {
                console.log('Accept clicked');
                let param = new FormData();
                param.append("customer_id",this.customer_id);
                if(this.driver_id != '')
                {
                  param.append("driver_id",this.driver_id);
                }
                else{
                  param.append("driver_id",'0');
                }
                param.append("booking_id",this.booking_id);
                this.data.customerRejectBooking(param).subscribe(result=>{
                  console.log(result);
                  if(result.status == 'OK')
                  {
                    this.data.presentToast('Request Canceled Successfully');
                    firebase.database().ref(this.booking_id).remove();
                    this.eve.unsubscribe('finished_ride:created');
                    if(this.watch && this.watch !== undefined)
                    {
                      this.watch.unsubscribe();
                    }
                    
                    this.navCtrl.setRoot(HomePage);
                  }
                });        
              }
            },
            {
              text: 'No',
              handler: () => {
                console.log('reject clicked'); 
              }
            }
          ]
        });
        alert.present();
      }
    });     
  }

  addMarker(){
    /*let marker;
    if (marker && marker.setMap) {
      marker.setMap(null);
    }*/
    
    this.deleteMarkers();
    let marker;
    marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    new google.maps.Circle({
      strokeColor: '#3853fa55',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      strokeWidth:5,
      fillColor: '#00880055',
      fillOpacity: 0.35,
      map: this.map,
      center: this.map.getCenter(),
      radius: 300
    }).then((circle)=>{
      marker.bindTo('position',circle,'center');
    });
  
    let content = "<h4>Information!</h4>";         
  
    this.addInfoWindow(marker, content);
  
  }

  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }


  
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }



watchMethod()
{
  this.watch = this.geolocation.watchPosition().subscribe((data) => {
      //this.deleteMarkers();
      this.updateGeolocation(this.customer_id,this.booking_id, data.coords.latitude,data.coords.longitude);
      
    });
  }

updateGeolocation(customer_id,booking_id, lat, lng) {
  firebase.database().ref(booking_id+'/'+customer_id).set({ 'latitude': lat, 'longitude' : lng});
}

  
clearMarkers() {
  this.setMapOnAll(null);
}
  
deleteMarkers() {
  this.clearMarkers();
  //this.loadMap();
  this.markers = [];
}

updateTrak()
{
  return new Promise((resolve,reject)=>{
    firebase.database().ref(this.booking_id+'/'+this.driver_id).on('value', function(snapshot) {
      snapshotToArray(snapshot).forEach(data => {
        console.log(data);
        //if(data.uuid !== this.device.uuid) {
      let image = 'assets/imgs/car48x48.png';
      let updatelocation = new google.maps.LatLng(data.latitude,data.longitude);
      //alert(updatelocation.lat())
      resolve(updatelocation);
      });
    });
  });
}

  addMarker1(location, image) {
   
  }

  RideLaterOk()
  {
    this.navCtrl.setRoot(HomePage);
  }

  startNavigating(pickup,drop){
    console.log("Start Navigating");
    //this.marker.setMap(null);
    this.directionsPanel = this.directionsPanelElement.nativeElement;
    //this.clearMarkers();
    //this.markers = [];    
    //this.circle.setMap(null);
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions:{/*strokeColor:"#4a4a4a",*/strokeOpacity: 0.8,strokeWeight:3,strokeColor: '#278DF8' }, suppressMarkers:true });
   
    //directionsDisplay.set('directions', null);
    this.getLatLng(pickup).then(data=>{
      this.startMarker = new google.maps.Marker({ position: new google.maps.LatLng(data['latitude'],data['longitude']), map: this.map, icon: 'assets/imgs/source_pin.png' });
      this.markers.push(this.startMarker);
    });
    
    this.getLatLng(drop).then(data=>{
      this.stopMarker = new google.maps.Marker({ position: new google.maps.LatLng(data['latitude'],data['longitude']), map: this.map, icon: 'assets/imgs/destination_pin.png' });
      this.markers.push(this.stopMarker);
    });

    this.directionsService.route({
        origin: pickup,
        destination: drop,
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res,status) => {
      var route = res.routes[0];
      console.log('route==>'+route.legs);
        ///this.eve.publish('distance:created', route.legs[0].distance.text, Date.now());
        this.directionsDisplay.setMap(null);
        
        if(status == google.maps.DirectionsStatus.OK){ 
            this.directionsDisplay.setMap(this.map);
            this.directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }
    });
  }

  redrawPath(path) {
    /*if (this.currentMapTrack) {
      this.currentMapTrack.setMap(null);
    }*/
  
    if (path.length > 1) {
      this.currentMapTrack = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#ff00ff',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
      this.currentMapTrack.setMap(this.map);
    }
  }

  getLatLng(address)
  {
    return new Promise((resolve) => {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': address}, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
        resolve({latitude,longitude});
        } 
      }); 
    });
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(function() {
      var item = snapshot.val();
      item.key = snapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};

/*
 this.updateTrak().then(data=>{
        this.userData = data;
        console.log(data);
        alert(this.userData.latitude);
        //this.deleteMarkers();
        //alert( data.latitude);
       // alert( data.lat());
       // this.addMarker1(data,'assets/imgs/car48x48.png');
       /*if(this.car_marker == null)
       {*
        this.car_marker = new google.maps.Marker({
          position: data,
          map: this.map,
          icon: 'assets/imgs/car48x48.png'
        });
        /*setTimeout(() => {
          
          this.trackedRoute.push(data);
          this.redrawPath(this.trackedRoute);
        }, 0);
       }
       else{
        this.car_marker.setPosition(data);
        setTimeout(() => {
         // this.trackedRoute.push({ lat: data.lat(), lng: data.lng() });
         this.trackedRoute.push({ lat: this.userData.lat(), lng: this.userData.lng() });
          this.redrawPath(this.trackedRoute);
        }, 0);
        
       }
*
      //this.markers.push(marker);
        //this.setMapOnAll(this.map);
        this.getDuration(data).then(data=>{
          this.duration = data;
        });
      });        
*/