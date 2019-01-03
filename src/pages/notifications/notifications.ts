import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  role : any;
  id : any;
  notifications : any = [];
  lazy_notifications : any = [];
  users = [];
  page = 1;
  maximumPages : any;
  last_index : any = 0;
  loadingCtr : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage : Storage, public data : DataProvider, private loading: LoadingController) {
    this.storage.get('user').then(data=>{   
      this.id = data[0].id
      this.role = data[0].role; 
    });

    /*setTimeout(()=>{
      this.loadUsers();
    },1500);*/
    this.loadingCtr = this.loading.create({
      content :"Please wait...",
      spinner : 'crescent'
    });

    this.loadingCtr.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

  ionViewDidEnter()
  {
    this.loadUsers();
    this.loadingCtr.dismiss();
  }

  loadUsers(infiniteScroll?){
    let param = new FormData();
    param.append("user_id",this.id);
      //param.append("page",this.page);   
      //alert(this.page);
      this.data.driverNotifications(param,this.page).subscribe(result=>{                          
        if(result.status == "OK")  
        {   
          if(result.success.data == null)
          {
            this.data.presentToast('There is no more data available');
            return false;
          }
          else{
            this.users = this.users.concat(result.success.data);
            if(infiniteScroll) {
              infiniteScroll.complete();
            }
          }
        }
      });
  }
 
  loadMore(infiniteScroll){
    this.page++;
    this.last_index = this.users.length;
    this.loadUsers(infiniteScroll);
    if (this.page === this.maximumPages){
      infiniteScroll.enable(false);
    }
  }

}


/*
constructor(public navCtrl: NavController, public navParams: NavParams, private storage : Storage, public data : DataProvider) {
    this.storage.get('user').then(data=>{   
      this.id = data[0].id
      this.role = data[0].role;
      let param = new FormData();
      param.append("user_id",this.id);
      this.data.driverNotifications(param).subscribe(result=>{                          
        if(result.status == "OK")
        {
          this.notifications = result.success;
          console.log('this.notifications ===> '+this.notifications);
        }
      });
    });

    setTimeout(()=>{
      this.getRecords();
    },2500);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      
      setTimeout(()=>{
        this.getRecords();
      },2500); 

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  getRecords()
  {
   // return new Promise((resolve: Function, reject: Function) => {
      for (let i = 0; i < 30; i++) {
        //alert(this.notifications[i].message);
        //if(this.notifications[i])   
        //{
          this.lazy_notifications.push( this.notifications[i]);
        /*}
        else{
          resolve(this.items);                       
        }*
      }
      //});
    }
*/