import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { FeedbackPage } from '../feedback/feedback';
import { HomePage } from '../home/home';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { load } from 'google-maps';


@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  id: any;
  role: any;
  booking_id: any;
  driver_id: any;
  cost : any = 0;

  constructor(private loading: LoadingController,public actionSheetCtrl: ActionSheetController, private payPal: PayPal, public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, private storage: Storage) {
    let loader = this.loading.create({
      content :"Please wait...",
      spinner : 'crescent'
    });

    loader.present();

    this.booking_id = navParams.get('booking_id');
    this.driver_id = navParams.get('driver_id');
    //alert(this.booking_id);
    this.storage.get('user').then(data => {
      this.id = data[0].id;
      this.role = data[0].role;
    });

    //this.cost = 0;
    
    let param = new FormData();
    //param.append("driver_Id",this.Did);
   // param.append("customer_id",this.customer_id);
    param.append("booking_id",this.booking_id);

      this.data.getcurrentBooking(param).subscribe(result=>{   
              console.log(result);    
              //this.userData = result; 
              if(result.status == "OK")
              {
                  this.cost = result.success.booking.cost;
                  loader.dismiss();  
                  //alert('this.booking_id==>'+this.booking_id);
                  //alert('result.success.booking.cost==>'+result.success.booking.cost);
              }
              else
              {
                loader.dismiss();  
                this.data.presentToast('Error');        
                  //return false;
              }   
                                      
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    //this.pay();
  }

  moveForward() {
    if (this.role == 2) {
      this.navCtrl.setRoot(FeedbackPage, { booking_id: this.booking_id, driver_id: this.driver_id });
    }
    else if (this.role == 3) {
      this.navCtrl.setRoot(HomePage);
    }
  }


  pay() {

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Use payment method',
      enableBackdropDismiss : false,
      buttons: [
        {
          text: 'Wallet',
          handler: () => {
            //console.log('Destructive clicked');
            this.payUsingWallet();
          }
        },
        {
          text: 'Paypal or Card',
          handler: () => {
            //console.log('Archive clicked');
            this.payUsingPaypal();
          }
        },
      ]
    });
 
    actionSheet.present();
    
  }

  payUsingPaypal()
  {
    this.payPal.init({
      PayPalEnvironmentProduction: 'ATyecYC9QulZbd0Gd3-6EU-qwJtm_-wATZpWp0tll2Hu2eosdhr-gDK1kyh2odnEkamuRoUPWUuHflMK',
      PayPalEnvironmentSandbox: 'AWTTT5V870I-5KsL8D3pR8wu6dTF0r3cEa-zpqI9YCK33AEfUedvxXOegKfmUdM_ofYR4a247R8h7s8S'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment( this.cost, 'USD', 'This is payment for completed Ride', 'Pay');
        this.payPal.renderSinglePaymentUI(payment).then((result) => {
          alert(JSON.stringify(result));
          console.log(JSON.stringify(result));
        
        let loader = this.loading.create({
              content :"Please wait...",
              spinner : 'crescent'
            });

            loader.present();

          if(this.cost && this.booking_id && this.id && this.driver_id){
            let param = new FormData();
            param.append("response_type",result.response_type);
            param.append("payment_id",result.response.id);
            param.append("state",result.response.state);
            param.append("create_time",result.response.create_time);
            param.append("intent",result.response.intent);
            param.append("platform",result.client.platform);
            param.append("balance",this.cost);
            param.append('customer_id', this.id);
            param.append('booking_id',this.booking_id);
            param.append('driver_id',this.driver_id);
            //alert(this.cost+'-'+this.booking_id+'-'+ this.id+'-'+this.driver_id);

            this.data.payment(param).subscribe(result=>{
              console.log(result);
              if(result.status == 'OK')
              {
                this.data.presentToast('Payment Successfull!');
                loader.dismiss();
                this.moveForward();
              }
            });
          }
          else{
            this.data.presentToast('There is some problem please try after some time.');
            //return false;
          }
            

          // Successfully paid

          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, (error) => {
          // Error or render dialog closed without being successful
          console.log(error);
        });
      }, (error) => {
        // Error in configuration
        console.log(error);
      });
    }, (error) => {
      // Error in initialization, maybe PayPal isn't supported or something else
      console.log(error);
    });
  }

  payUsingWallet()
  {
        let loader = this.loading.create({
              content :"Please wait...",
              spinner : 'crescent'
            });

            loader.present();
        let param = new FormData();
        param.append("balance",this.cost);
        //param.append('purpose','topup');
        param.append('customer_id', this.id);
        param.append('booking_id',this.booking_id);
        param.append('driver_id',this.driver_id);

        this.data.walletPayment(param).subscribe(result=>{
          console.log(result);
          if(result.status == 'OK')
          {
            loader.dismiss();
            this.data.presentToast('Payment Successfull!');
            this.moveForward();
          }
          else
          {
            loader.dismiss();
            let param1 = new FormData();
            param1.append("customer_id",this.id);
            this.data.getWalletAmount(param1).subscribe(result=>{
              console.log(result);
              if(result.status == 'OK')
              {
                if(parseFloat(this.cost) > parseFloat(result.success.balance))
                {
                  //this.data.presentToast('Wallet amount is not sufficient to pay Ride cost.');        
                  //return false;
                  let actionSheet = this.actionSheetCtrl.create({
                    title: 'Wallet amount is not sufficient to pay Ride cost',
                    enableBackdropDismiss : false,
                    buttons: [
                      {
                        text: 'Add amount to wallet & pay?',
                        handler: () => {
                          //console.log('Destructive clicked');
                          var amount = (this.cost - result.success.balance+1).toString();
                          this.payPal.init({
                            PayPalEnvironmentProduction: 'ATyecYC9QulZbd0Gd3-6EU-qwJtm_-wATZpWp0tll2Hu2eosdhr-gDK1kyh2odnEkamuRoUPWUuHflMK',
                            PayPalEnvironmentSandbox: 'AWTTT5V870I-5KsL8D3pR8wu6dTF0r3cEa-zpqI9YCK33AEfUedvxXOegKfmUdM_ofYR4a247R8h7s8S'
                          }).then(() => {
                            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                              // Only needed if you get an "Internal Service Error" after PayPal login!
                              //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                            })).then(() => {
                              let payment = new PayPalPayment(amount, 'USD', 'Top-up Given amount into customer wallet', 'Top-up');
                              this.payPal.renderSinglePaymentUI(payment).then(result => {
                      
                                //console.log(payment)
                      
                                //alert(JSON.stringify(result.response));
                                //this.data.presentToast('Top-Up Successfull!');
                                let loader = this.loading.create({
                                  content :"Please wait...",
                                  spinner : 'crescent'
                                });
                    
                                loader.present();

                                let param = new FormData();
                                param.append("response_type",result.response_type);
                                param.append("payment_id",result.response.id);
                                param.append("state",result.response.state);
                                param.append("create_time",result.response.create_time);
                                param.append("intent",result.response.intent);
                                param.append("platform",result.client.platform);
                                param.append('customer_id',this.id);
                                param.append('balance',amount);

                                this.data.walletTopUp(param).subscribe(result=>{
                                  console.log(result);
                                  if(result.status == 'OK')
                                  {
                                   // alert(this.cost +'-'+ this.booking_id +'-'+ this.id +'-'+ this.driver_id);
                                    if(this.cost && this.booking_id && this.id && this.driver_id){
                                      let param = new FormData();
                                      param.append("balance",this.cost);
                                      //param.append('purpose','topup');
                                      param.append('customer_id', this.id);
                                      param.append('booking_id',this.booking_id);
                                      param.append('driver_id',this.driver_id);
                          
                                      this.data.walletPayment(param).subscribe(result=>{
                                        console.log(result);
                                        if(result.status == 'OK')
                                        {
                                          loader.dismiss();
                                          this.data.presentToast('Payment Successfull!');
                                          this.moveForward();
                                        }
                                      });
                                      loader.dismiss();
                                    }
                                      else{
                                        loader.dismiss();
                                        this.data.presentToast('There is some problem please try after some time.');
                                        //return false;
                                      }
                                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                                  }
                                });
                                //alert(response.id);
                                //this.moveForward();
                      
                                // Successfully paid
                      
                                // Example sandbox response
                                //
                                // {
                                //   "client": {
                                //     "environment": "sandbox",
                                //     "product_name": "PayPal iOS SDK",
                                //     "paypal_sdk_version": "2.16.0",
                                //     "platform": "iOS"
                                //   },
                                //   "response_type": "payment",
                                //   "response": {
                                //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                                //     "state": "approved",
                                //     "create_time": "2016-10-03T13:33:33Z",
                                //     "intent": "sale"
                                //   }
                                // }
                              }, (error) => {
                                console.log(error);
                                // Error or render dialog closed without being successful
                              });
                            }, (error) => {
                              console.log(error);
                              // Error in configuration
                            });
                          }, (error) => {
                            console.log(error);
                            // Error in initialization, maybe PayPal isn't supported or something else
                          });
                        }
                      },
                      {
                        text: 'Use Paypal or Card',
                        handler: () => {
                          //console.log('Archive clicked');
                          this.payUsingPaypal();
                        }
                      },
                    ]
                  });
              
                  actionSheet.present();
                }
              }
            });        
          }
        });



    /*let param1 = new FormData();
    param1.append("customer_id",this.id);
    this.data.getWalletAmount(param1).subscribe(result=>{
      console.log(result);
      if(result.status == 'OK')
      {*/
        
        /*if(this.cost > result.success.balance)
        {
          //this.data.presentToast('Wallet amount is not sufficient to pay Ride cost.');        
          //return false;
          let actionSheet = this.actionSheetCtrl.create({
            title: 'Wallet amount is not sufficient to pay Ride cost',
            buttons: [
              {
                text: 'Add amount to wallet & pay?',
                handler: () => {
                  //console.log('Destructive clicked');
                  var amount = (this.cost - result.success.balance).toString();
                  this.payPal.init({
                    PayPalEnvironmentProduction: 'ATyecYC9QulZbd0Gd3-6EU-qwJtm_-wATZpWp0tll2Hu2eosdhr-gDK1kyh2odnEkamuRoUPWUuHflMK',
                    PayPalEnvironmentSandbox: 'AWTTT5V870I-5KsL8D3pR8wu6dTF0r3cEa-zpqI9YCK33AEfUedvxXOegKfmUdM_ofYR4a247R8h7s8S'
                  }).then(() => {
                    // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                    this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                      // Only needed if you get an "Internal Service Error" after PayPal login!
                      //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                    })).then(() => {
                      let payment = new PayPalPayment(amount, 'USD', 'Top-up Given amount into customer wallet', 'Top-up');
                      this.payPal.renderSinglePaymentUI(payment).then(result => {
              
                        //console.log(payment)
              
                        //alert(JSON.stringify(result.response));
                        //this.data.presentToast('Top-Up Successfull!');
debugger;
                        let param = new FormData();
                        param.append("response_type",result.response_type);
                        param.append("payment_id",result.response.id);
                        param.append("state",result.response.state);
                        param.append("create_time",result.response.create_time);
                        param.append("intent",result.response.intent);
                        param.append("platform",result.client.platform);
                        param.append('customer_id',this.id);
                        param.append('balance',amount);

                        this.data.walletTopUp(param).subscribe(result=>{
                          console.log(result);
                          if(result.status == 'OK')
                          {
                            alert(this.cost +'-'+ this.booking_id +'-'+ this.id +'-'+ this.driver_id);
                            if(this.cost && this.booking_id && this.id && this.driver_id){
                              let param = new FormData();
                              param.append("balance",this.cost);
                              //param.append('purpose','topup');
                              param.append('customer_id', this.id);
                              param.append('booking_id',this.booking_id);
                              param.append('driver_id',this.driver_id);
                  
                              this.data.walletPayment(param).subscribe(result=>{
                                console.log(result);
                                if(result.status == 'OK')
                                {
                                  this.data.presentToast('Payment Successfull!');
                                  this.moveForward();
                                }
                              });
                            }
                              else{
                                this.data.presentToast('There is some problem please try after some time.');
                                return false;
                              }
                            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                          }
                        });
                        //alert(response.id);
                        //this.moveForward();
              
                        // Successfully paid
              
                        // Example sandbox response
                        //
                        // {
                        //   "client": {
                        //     "environment": "sandbox",
                        //     "product_name": "PayPal iOS SDK",
                        //     "paypal_sdk_version": "2.16.0",
                        //     "platform": "iOS"
                        //   },
                        //   "response_type": "payment",
                        //   "response": {
                        //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                        //     "state": "approved",
                        //     "create_time": "2016-10-03T13:33:33Z",
                        //     "intent": "sale"
                        //   }
                        // }
                      }, () => {
                        // Error or render dialog closed without being successful
                      });
                    }, () => {
                      // Error in configuration
                    });
                  }, () => {
                    // Error in initialization, maybe PayPal isn't supported or something else
                  });
                }
              },
              {
                text: 'Use Paypal or Card',
                handler: () => {
                  //console.log('Archive clicked');
                  this.payUsingPaypal();
                }
              },
            ]
          });
       
          actionSheet.present();
        }
        else{
           
          if(this.cost && this.booking_id && this.id && this.driver_id){
            let param = new FormData();
            param.append("balance",this.cost);
            //param.append('purpose','topup');
            param.append('customer_id', this.id);
            param.append('booking_id',this.booking_id);
            param.append('driver_id',this.driver_id);

            this.data.walletPayment(param).subscribe(result=>{
              console.log(result);
              if(result.status == 'OK')
              {
                this.data.presentToast('Payment Successfull!');
                this.moveForward();
              }
            });
          }
            else{
              this.data.presentToast('There is some problem please try after some time.');
              return false;
            }
        } */
     // }
   // });
  }

}
