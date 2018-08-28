import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the EmailverificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()   
@Component({
  selector: 'page-emailverification',
  templateUrl: 'emailverification.html',
})
export class EmailverificationPage {
  @ViewChild(Nav) nav: Nav;
  user: any;
  first_name : any;
  last_name : any;
  email : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('data');
    this.first_name = this.user[0].first_name;
    this.last_name = this.user[0].last_name; 
    this.email = this.user[0].email;
  }   

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailverificationPage');
  }
  
  goBack()
  {
    this.navCtrl.setRoot(HomePage);
  }

}
