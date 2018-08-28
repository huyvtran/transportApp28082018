import { Injectable, Component, ViewChild, ElementRef   } from '@angular/core';
import { Platform,Events } from 'ionic-angular';
import { ConnectivityServiceProvider } from '../../providers/connectivity-service/connectivity-service';
import { Geolocation } from '@ionic-native/geolocation';
 
declare var google;
/*
  Generated class for the GoogleMapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class GoogleMapsProvider {
  mapElement: any;
  pleaseConnect: any;
  directionsPanel: any;
  public distance: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  currentMarker: any;
  apiKey: string = "AIzaSyD_mkig8BYCj7PJlCj4-yN4w6QPmJjxFbg";
  result:any;  
  

  constructor(public events: Events, public connectivityService: ConnectivityServiceProvider, public geolocation: Geolocation) {
       
  }

  init(mapElement: any, pleaseConnect: any): Promise<any> {
 
    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;
 
    return this.loadGoogleMaps();
 
  }
 
  loadGoogleMaps(): Promise<any> {
 
    return new Promise((resolve) => {
 
      if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
        console.log("Google maps JavaScript needs to be loaded.");
        this.disableMap();
 
        if(this.connectivityService.isOnline()){
 
          window['mapInit'] = () => {
 
            this.initMap().then(() => {
              resolve(true);
            });
 
            this.enableMap();
          }
 
          let script = document.createElement("script");
          script.id = "googleMaps";
 
          if(this.apiKey){
            script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit&libraries=places';
          } else {
            script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';      
          }
 
          document.body.appendChild(script); 
 
        }
      } else {
 
        if(this.connectivityService.isOnline()){
          this.initMap();
          this.enableMap();
        }
        else {
          this.disableMap();
        }
 
        resolve(true);
 
      }
 
      this.addConnectivityListeners();
 
    });
 
  }
 
  initMap(): Promise<any> {

    
   
 
    this.mapInitialised = true;
 
    return new Promise((resolve) => {

 
      this.geolocation.getCurrentPosition().then((position) => {
 
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          clickableIcons: false,    
          disableDefaultUI: true,
          zoomControl: false
        }
      
        var geocoder = new google.maps.Geocoder;


   
        this.map = new google.maps.Map(this.mapElement, mapOptions);
        this.geocodeLatLng(geocoder, this.map,position.coords.latitude, position.coords.longitude);
        resolve(true);
        
        console.log("I am called");   
        
        this.addMarker();
      
      });
 
    });
 
  }
 
  disableMap(): void {
 
    if(this.pleaseConnect){
      this.pleaseConnect.style.display = "block";
    }
 
  }
 
  enableMap(): void {
 
    if(this.pleaseConnect){
      this.pleaseConnect.style.display = "none";
    }
 
  }

  geocodeLatLng(geocoder, map,lat,lng) {
   // var input = document.getElementById('latlng').value;
    //var latlngStr = input.split(',', 2);
    var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        //console.log('results[0]==>'+ results[0].formatted_address);
        //console.log('results[0]==>'+ results[0].place_id);
        return results[0];
        /*if (results[0]) {
          map.setZoom(11);
          var marker = new google.maps.Marker({
            position: latlng,
            map: map
          });
          //infowindow.setContent(results[0].formatted_address);
          //infowindow.open(map, marker);
        } else {
          window.alert('No results found');
        }*/
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });   
  }
 
  addConnectivityListeners(): void {
 
    this.connectivityService.watchOnline().subscribe(() => {
 
      setTimeout(() => {
 
        if(typeof google == "undefined" || typeof google.maps == "undefined"){
          this.loadGoogleMaps();
        }
        else {
          if(!this.mapInitialised){
            this.initMap();
          }
 
          this.enableMap();
        }
 
      }, 2000);
 
    });
 
    this.connectivityService.watchOffline().subscribe(() => {
 
      this.disableMap();
 
    });
 
  }


  addMarker(){
 
    
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
  
    let content = "<h4>Your Current Location !</h4>";         
   
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

  startNavigating(pickup,drop, directionsPanel: any){

   


    console.log("Start Navigating")
    
    this.directionsPanel = directionsPanel;

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    /*if (directionsDisplay.setMap != null) {
      directionsDisplay.setMap(null);
      directionsDisplay.setPanel(null);
      //directionsDisplay = null;
      //directionsService.route({routes: []});
      directionsDisplay.setDirections({routes: []});
    }*/
    
    directionsDisplay.setMap(null);   
    directionsDisplay.set('directions', null);
    //directionsDisplay.setPanel(this.directionsPanel);
  
    directionsService.route({
        origin: pickup,
        destination: drop,
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res,status) => {
      var route = res.routes[0];
        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setMap(this.map);
            directionsDisplay.setDirections(res);
            for (var i = 0; i < route.legs.length; i++) {
              this.distance = route.legs[i].distance.text;
              //console.log('distance==>>'+this.distance);
            }
        } else {
            console.warn(status);
        }
    });



  }

  getgeocodeAddress(address):any
  {
    var geocoder = new google.maps.Geocoder;
      this.map = new google.maps.Map(this.mapElement, '');
      let latlng = this.geocodeAddress(geocoder, this.map,address);
      return latlng;
  }

  geocodeAddress(geocoder, resultsMap, loc_address):any {
    var address = loc_address;
   
    geocoder.geocode({'address': address}, function(results, status):any {
      //console.log('results[0].geometry.location==>'+results[0].geometry.location);
      //return results[0].geometry.location;

      //this.eve.publish("LatLng",results[0].geometry.location);       
      
      //this.events.publish("LatLng",results[0].geometry.location);                 

      this.result = results[0].geometry.location;
      
    });

    
  }

}
