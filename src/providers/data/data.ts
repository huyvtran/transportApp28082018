import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {    

  baseURL:string = "http://transport.walstarmedia.com/api/";
  token : string;
  headers:any;

  constructor(public ht: Http, public http: HttpClient, private toast: ToastController, private storage: Storage) {
    console.log('Hello DataProvider Provider');

     this.storage.get('token').then(data=>{

          this.token = data;
          console.log("Token here"+this.token);
     });
  }

  presentToast(msg)     
  {   
      let toast = this.toast.create({

            message : msg,
            duration : 2000,
            position : 'middle'
      });

      toast.present();            
  } 

  getRoles()
  {
    return this.ht.get(this.baseURL+"roles").map(res=> res.json());
  }

  //user signup
  userSignUp(param)   
  {
   
    return this.ht.post(this.baseURL+"register",param).map(res=> res.json());
  }

  userSignIn(param)
  {
    
    return this.ht.post(this.baseURL+"login",param).map(res=> res.json());
  }

  getCustomerProfile(param){
   //return this.http.post(this.baseURL+"customer/profile",param).map(res=> res.json());

   //console.log("Token Here "+ this.token);
   //console.log('param'+param);
               
    let headers = new Headers({

        'Accept' : 'application/json',
        'Authorization' : 'Bearer '+this.token
   });

    //return this.http.post(this.baseURL+"customer/profile",header,param);
     return this.ht.post(this.baseURL+"customer/profile",'',{headers: headers}).map(res=> res.json());
  }

  custChangePass(param)
  {
    //console.log("Token Here "+ this.token);
                
      let headers = new Headers({

          'Accept' : 'application/json',
          'Authorization' : 'Bearer '+this.token
    });

    

    return this.ht.post(this.baseURL+"customer/change/password", param,{headers: headers}).map(res=> res.json());
  }

  updateCustomerProfile(param)
  {
    let headers = new Headers({
          'Accept' : 'application/json',
          'Authorization' : 'Bearer '+this.token
    });

    return this.ht.post(this.baseURL+"customer/save/profile", param,{headers: headers}).map(res=> res.json());
  }   

  forgotPass(param)
  {
    return this.ht.post(this.baseURL+"password/reset", param).map(res=> res.json());
  }  


  getDriverProfile(param)    
  {
   
    this.storage.get('token').then(data=>{

      this.token = data;
      console.log("Token here"+this.token);
    });
    
    let headers = new Headers({

      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+this.token
    });

   return this.ht.post(this.baseURL+"driver/profile",'',{headers: headers}).map(res=> res.json());
  }

  updateDriverProfile(param)
  {
    let headers = new Headers({
      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+this.token
    });

    return this.ht.post(this.baseURL+"driver/save/profile", param,{headers: headers}).map(res=> res.json());
  }

  driverChangePass(param)
  {
    let headers = new Headers({

      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+this.token
    });

    return this.ht.post(this.baseURL+"driver/change/password", param,{headers: headers}).map(res=> res.json());
  }

  getFAQ()
  {
    this.storage.get('token').then(data=>{

      this.token = data;
     // console.log("Token here"+this.token);
    });
    
    let headers = new Headers({

      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+this.token
    });

   return this.ht.get(this.baseURL+"faqs",{headers: headers}).map(res=> res.json());
  }

  getallDrivers()
  {
    this.storage.get('token').then(data=>{

      this.token = data;
     // console.log("Token here"+this.token);
    });
    
    let headers = new Headers({

      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+this.token
    });

   return this.ht.get(this.baseURL+"admin/driver/list",{headers: headers}).map(res=> res.json());
  }

}
