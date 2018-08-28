import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  information : any;
  icon_name = 'add';

  constructor(public navCtrl: NavController, public navParams: NavParams, public data : DataProvider, private storage: Storage) {


    this.data.getFAQ().subscribe(result=>{
 
      console.log(result);   

       if(result.status == "ERROR")
       {
           this.data.presentToast('Invalid Username or Password!');
       }
       else   
       {
         console.log(result);
         this.information = result.success.faqs;
         console.log(this.information);
       }                           

});


    /*this.information = [
      {
          name: 'Checklist 1',
          content: 'Content 1'
      },
      {
          title: 'Checklist 2',
          items: 'Content 2 '
      }
    ]*/



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');      
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }


  change(){

    if(this.icon_name == 'add'){
      this.icon_name = 'remove';
    }else{
      this.icon_name = 'add';    
    }
  }

}
