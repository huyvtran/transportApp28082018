import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ModalController, ActionSheetController, LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { PasswordResetPage } from '../password-reset/password-reset';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UploadProfilePage } from '../upload-profile/upload-profile';
import { SigninPage } from '../signin/signin';
import { ModalpagePage } from '../modalpage/modalpage';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
     
/**
 * Generated class for the CustomerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-customer-profile',
  templateUrl: 'customer-profile.html',
})
export class CustomerProfilePage {
  user_details :any= {};
  profile : any;
  cust_id :any;
  role : any;
  vehicle_types : any;
  avtarPath : any;
  
  constructor(public navCtrl: NavController, private loading: LoadingController, public actionSheetCtrl: ActionSheetController, public navParams: NavParams, public data : DataProvider, private storage: Storage,private DomSanitizer: DomSanitizer, private camera: Camera, public http : HttpClient,private alertCtrl: AlertController, private modalCtrl: ModalController) {
    let loader = this.loading.create({
      content :"Please wait...",
      spinner : 'crescent'
    });

      loader.present();
      this.storage.get('user').then(data=>{   
          let param = data[0].id;
          this.role = data[0].role;
        if(data[0].role==2){
          this.data.getCustomerProfile(param).subscribe(result=>{
            if(result.status == 'OK')
            {
              //console.log(result.success.profile[0].first_name);
              this.user_details.fname = result.success.profile[0].first_name;
              this.user_details.lname = result.success.profile[0].last_name;
              this.user_details.email = result.success.profile[0].email;
              this.user_details.phone = result.success.profile[0].phone;
              this.user_details.address = result.success.profile[0].address;
              //this.user_details.avatar = 'http://transport.walstarmedia.com/public/storage/images/customer/profile_image/'+result.success.profile[0].profile;

              if(result.success.profile[0].profile == null)
              {
                this.user_details.avatar = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
              }
              else{
                this.user_details.avatar = 'http://transport.walstarmedia.com/public/storage/images/customer/profile_image/'+result.success.profile[0].profile;
              }
              
            }
            else{

            }
         });
        }else if(data[0].role==3){    
          this.data.getvehicletypes().subscribe(result=>{
        
            if(result.status == 'OK')
            {
              console.log('kjndjknbbv==>'+result.success.vehicletypes[0].type);    
              this.vehicle_types = result.success.vehicletypes;

              this.data.getDriverProfile(param).subscribe(result=>{
                if(result.status == 'OK')    
                {
                  //console.log(result.success.profile[0].first_name);
                  this.user_details.fname = result.success.profile[0].first_name;
                  this.user_details.lname = result.success.profile[0].last_name;
                  this.user_details.email = result.success.profile[0].email;
                  this.user_details.phone = result.success.profile[0].phone;
                  this.user_details.address = result.success.profile[0].address;
                  if(result.success.profile[0].profile == null)
                  {
                    this.user_details.avatar = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
                  }
                  else{
                    this.user_details.avatar = 'http://transport.walstarmedia.com/public/storage/images/customer/profile_image/'+result.success.profile[0].profile;
                  }
                  //this.user_details.avatar = 'http://transport.walstarmedia.com/public/storage/images/driver/profile_image/'+result.success.profile[0].profile;
                  this.user_details.vehicle_type = this.vehicle_types[result.success.profile[0].vehicle_type-1].type;
                  this.user_details.vehicle_number = result.success.profile[0].vehicle_number;
    
                  
                  
                }   
                else{
    
                }
             });
              
            }
            else{
              this.data.presentToast(result.status);
            }
            
          });
          
        }
          
      });
      loader.dismiss();
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerProfilePage');
  }

  gotoChangePass()
  {
    this.navCtrl.push(PasswordResetPage);
  }  

  gotoeditProfile()                
  {      
    this.navCtrl.push(EditProfilePage);
  }     

  gotoAvatarPage()
  {
    //this.navCtrl.push(UploadProfilePage,{'imgurl':this.user_details.avatar}, { animate: true, animation: 'transition', duration: 500, direction: 'up' });
  

      let actionSheet = this.actionSheetCtrl.create({
        title: 'Select Image Source',
        buttons: [
          {
            text: 'Load from Library',
            handler: () => {
              //this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
              this.captureImage(false);
            }
          },
          {
            text: 'Use Camera',
            handler: () => {
              //this.takePicture(this.camera.PictureSourceType.CAMERA);
              this.captureImage(true);
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      });
      actionSheet.present();

  }

  signOut(){
    let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'signout'});
    let me = this;
               
    modal.onDidDismiss(data => {   
      console.log(data);
      if(data)
      {
        //this.selectdId = data;
      }  
      else{
        //this.selectdId = '';            
      }     
    });
    modal.present();
    //this.navCtrl.setRoot(SigninPage); 
  }   
  
  addSocialLink(account)
  {
    let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'addSocialaccount'});
    let me = this;
               
    modal.onDidDismiss(data => {   
      console.log(data);
      if(data)
      {
        //this.selectdId = data;
      }          
      else{
        //this.selectdId = '';        
      }     
    });
    modal.present();
    //this.navCtrl.setRoot(SigninPage); 
  }

  async captureImage(useAlbum: boolean) {
    var srcType;
    if(useAlbum == true)
    {
      srcType= this.camera.PictureSourceType.CAMERA;
    }
    else{
      srcType = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
    }
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: srcType
    }

    const imageData = await this.camera.getPicture(options);

    this.avtarPath = 'data:image/jpg;base64,'+imageData;

    let loader = this.loading.create({
      content :"Please wait...",
      spinner : 'crescent'
    });

    loader.present();

    let param = new FormData();
    param.append("image_file", this.avtarPath );

    //this.photos.unshift(this.base64Image);
    if(this.role == 2)
            {
              this.data.updateCustomerAvtar(param).subscribe(result=>{
            
                if(result.status == "ERROR")
                {
                    this.data.presentToast('eRROR');
                    return false;
                }
                else
                {   
                  this.data.presentToast('Profile Updated Successfully!');
                  loader.dismiss();   
                  this.navCtrl.push(this.navCtrl.getActive().component);
                  //this.navCtrl.setRoot(CustomerProfilePage);
                }                    
              }); 
            }
            if(this.role == 3)
            {
              this.data.updateDriverAvtar(param).subscribe(result=>{
            
                if(result.status == "ERROR")
                {
                    this.data.presentToast('eRROR');
                    return false;
                }
                else
                {   
                  this.data.presentToast('Profile Updated Successfully!');
                  loader.dismiss();   
                  this.navCtrl.push(this.navCtrl.getActive().component);
                  //this.navCtrl.setRoot(CustomerProfilePage);
                }                    
              }); 
            }

  }

}    