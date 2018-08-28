import {Component, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';


declare var google;
/**
 * Generated class for the AutocompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autocomplete',
  templateUrl: 'autocomplete.html',
})
export class AutocompletePage {
  action :any;
  autocompleteItems;
  autocomplete;
  allDrivers;
  qdriver;
  service = new google.maps.places.AutocompleteService();
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, private zone: NgZone, private storage : Storage, public data : DataProvider) {
    this.action = navParams.get('action');
    console.log(this.action);
    this.autocompleteItems = [];
    this.allDrivers = [];
    this.autocomplete = {
      query:''
    };
    this.qdriver = {
      query:''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutocompletePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
 
  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
  }
  
  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query}, function (predictions, status) {
      me.autocompleteItems = []; 
      me.zone.run(function () {
        if (status != google.maps.places.PlacesServiceStatus.OK) {
            console.log(status);
            return;
        }
        predictions.forEach(function (prediction) {
          me.autocompleteItems.push(prediction.description);
        });
      });
    });
  }

  updateDriverSearch()               
  {
    if (this.qdriver.query == '') {
      this.allDrivers = [];
      return;
    }
    this.data.getallDrivers().subscribe(result=>{
      console.log(result);    
      //this.userData = result; 
      if(result.status == "ERROR")     
      {
          this.data.presentToast(result.error.email);
          return false;
      }
      else
      {   
        //this.storage.set("customer_data",data.msg[0]);
        this.data.presentToast('Profile Updated Successfully!');
        //this.navCtrl.setRoot(CustomerProfilePage);     
      }                    
    }); 
  }

  close(){
    this.viewCtrl.dismiss();
  } 

  clear(){

    console.log(this.autocomplete.query);  

    this.autocomplete.query = "";       
  }

}
