import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the DriversettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driversetting',
  templateUrl: 'driversetting.html',
})
export class DriversettingPage {
  visible : any;
  public isToggled: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data : DataProvider) {
    this.isToggled = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriversettingPage');
  }

  public notify() {
    console.log("Toggled: "+ this.isToggled); 
    this.data.AvailableToggle().subscribe(result=>{
      console.log(result);
      if(result.status == 'OK')
      {
        console.log(result.success.available);
        if(result.success.available == 'Driver set to On')
        {
          this.data.presentToast('You are visible to nearby customers');
        }
        else{
          this.data.presentToast('You are invisible to nearby customers');
        }
        
      }
      else{
        this.data.presentToast('Error');
      }
    });
  }

  setVisibility(visibility)
  {
    console.log("Toggled: "+ this.isToggled); 
   /*console.log('asdfghjkrtyui');
    this.visible = !visibility;
    this.data.AvailableToggle().subscribe(result=>{
      console.log(result);
      if(result.status == 'OK')
      {
        if(result.success.availble=='Driver set to On')
        {
          this.data.presentToast('You are visible to nearby customers');
        }
        else{
          this.data.presentToast('You are invisible to nearby customers');
        }
        
      }
      else{
        this.data.presentToast('Error');
      }
   });*/
    /*console.log(visibility);
    this.visible = !visibility;
    console.log(this.visible);
    if(this.visible)
    {
      //this.visible = false;
      //console.log(this.visible);
      this.data.presentToast('You are invisible to nearby customers');
    }
    else
    { 
      //this.visible = true;
      this.data.presentToast('You are visible to nearby customers');
     
    }*/
      
  }

}
