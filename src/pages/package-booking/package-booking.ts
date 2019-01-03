import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams,LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';




@IonicPage()
@Component({
  selector: 'page-package-booking',
  templateUrl: 'package-booking.html',
})
export class PackageBookingPage {

  public from: string;
  public to: any;
  public type: any;
  public weight: any;
  public height: any;
  public width: any;
  public lenght: any;
  user_id: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private service: ServiceProvider, private storage: Storage,private loading: LoadingController,public data : DataProvider) {
  
  storage.get("user").then(data=>{
    console.log(data[0].id);

    this.user_id = data[0].id;
  });
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackageBookingPage');
  }
  goToSubmit() {
    
      if(this.validate()) {
     
   
         
         // }
          
          let param = new FormData();
          param.append("from",this.from);    
          param.append("to",this.to);    
          param.append("type",this.type);    
          param.append("weight",this.weight); 
          param.append("length",this.lenght);    
          param.append("width",this.width);
          param.append("height",this.height); 
          param.append("user_id",this.user_id)          
              
           let loader = this.loading.create({
              content :"",
              spinner : 'crescent'
            });
      
            loader.present();
       
           this.data.getParcelPackage(param).subscribe(result=>{
       
                 console.log(result);  
                  
              
                }
           );}
            }
          
            
          
  

  validate() {

    let result = true;

    if (this.from == null || this.from == undefined || this.from == "") {
      this.service.validator('from field is required')
      result = false
    }

    else if (this.to == null || this.to == undefined || this.to == "") {
      this.service.validator('to field is required')
      result = false
    }
    else if (this.type == null || this.type == undefined || this.type == "") {
      this.service.validator('type field is required')
      result = false
    }
    else if (this.weight == null || this.weight == undefined || this.weight == "") {
      this.service.validator('weight field is required')
      result = false
    }
    else if (this.height == null || this.height == undefined || this.height == "") {
      this.service.validator('height field is required')
      result = false
    }
    else if (this.width == null || this.width == undefined || this.width == "") {
      this.service.validator('width field is required')
      result = false
    }
    else if (this.lenght == null || this.lenght == undefined || this.lenght == "") {
      this.service.validator('length field is required')
      result = false
    }

    return result;
  }

}
