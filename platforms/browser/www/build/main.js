webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentPage = /** @class */ (function () {
    function PaymentPage(payPal, navCtrl, navParams, data, storage) {
        var _this = this;
        this.payPal = payPal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        this.cost = '0';
        this.booking_id = navParams.get('booking_id');
        this.driver_id = navParams.get('driver_id');
        this.storage.get('user').then(function (data) {
            _this.id = data[0].id;
            _this.role = data[0].role;
        });
        var param = new FormData();
        //param.append("driver_Id",this.Did);
        // param.append("customer_id",this.customer_id);
        param.append("booking_id", this.booking_id);
        this.data.getcurrentBooking(param).subscribe(function (result) {
            console.log(result);
            //this.userData = result; 
            if (result.status == "OK") {
                _this.cost = result.success.booking.cost;
            }
            else {
                _this.data.presentToast('Error');
                return false;
            }
        });
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
        //this.pay();
    };
    PaymentPage.prototype.moveForward = function () {
        if (this.role == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__feedback_feedback__["a" /* FeedbackPage */], { booking_id: this.booking_id, driver_id: this.driver_id });
        }
        else if (this.role == 3) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
    };
    PaymentPage.prototype.pay = function () {
        var _this = this;
        this.payPal.init({
            PayPalEnvironmentProduction: 'ATyecYC9QulZbd0Gd3-6EU-qwJtm_-wATZpWp0tll2Hu2eosdhr-gDK1kyh2odnEkamuRoUPWUuHflMK',
            PayPalEnvironmentSandbox: 'AWTTT5V870I-5KsL8D3pR8wu6dTF0r3cEa-zpqI9YCK33AEfUedvxXOegKfmUdM_ofYR4a247R8h7s8S'
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var payment = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__["c" /* PayPalPayment */](_this.cost, 'USD', 'This is payment for completed Ride', 'Pay');
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
                    //console.log(payment)
                    //alert(JSON.stringify(payment));
                    _this.data.presentToast('Payment Successfull!');
                    _this.moveForward();
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
                }, function () {
                    // Error or render dialog closed without being successful
                });
            }, function () {
                // Error in configuration
            });
        }, function () {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="sideMenu" hideBackButton>\n    <button ion-button menuToggle >\n      <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n    </button>\n\n    <ion-title>Payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-item class="desc">\n    <h3>Ride Completed Successfully.</h3>\n    <img src="assets/imgs/1300231.svg"/>\n  </ion-item>\n  <span class="cost">${{cost}}</span>\n  <button class="profile-btn" ion-button color="primary" (click)="pay()" block>Pay</button>\n</ion-content>\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RideLaterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RideLaterPage = /** @class */ (function () {
    function RideLaterPage(nativeGeocoder, platform, navCtrl, navParams, data, storage) {
        var _this = this;
        this.nativeGeocoder = nativeGeocoder;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        console.log('navParams.get(param)==>' + navParams.get('param'));
        this.data1 = navParams.get('param');
        this.distance = this.data1.distance;
        this.vehicle_type = this.data1.vehicle_type;
        this.pick_up = this.data1.pick_up;
        this.drop = this.data1.drop;
        this.cost = this.data1.cost;
        this.date = this.data1.date;
        this.time = this.data1.time;
        this.Did = this.data1.Did;
        this.active = '';
        var options = {
            useLocale: true,
            maxResults: 5
        };
        var addresses = [this.pick_up, this.drop];
        var addressFull = [];
        //var addresses = '';
        var geocoder = new google.maps.Geocoder();
        addresses.forEach(function (value) {
            console.log(value);
            geocoder.geocode({ 'address': value }, function (results, status) {
                if (status == 'OK') {
                    var address0 = results[0].geometry.location.lat();
                    var address1 = results[0].geometry.location.lng();
                    console.log(address0, address1);
                    addressFull.push(address0);
                    addressFull.push(address1);
                    //console.log(address);
                }
                else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
        setTimeout(function () {
            console.log('addressFull==>' + addressFull);
            _this.pick_up_lt = addressFull[0];
            _this.pick_up_lg = addressFull[1];
            _this.drop_lt = addressFull[2];
            _this.drop_lg = addressFull[3];
        }, 1500);
        this.storage.get('user').then(function (data) {
            _this.customer_id = data[0].id;
        });
    }
    RideLaterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RideLaterPage');
    };
    RideLaterPage.prototype.updateActive = function (name) {
        this.active = name;
    };
    RideLaterPage.prototype.confirmPayment = function () {
        var _this = this;
        var param = new FormData();
        //alert(this.date + '--' + this.time);
        var dateObj = new Date(this.date + ' ' + this.time);
        var date1 = new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getUTCDate(), dateObj.getUTCHours(), dateObj.getUTCMinutes(), dateObj.getUTCSeconds());
        var date = new Date(date1).toISOString();
        //var date = dateObj.toUTCString();
        //var date = dateObj;
        //alert(date);
        //console.log(id);
        param.append("customer_id", this.customer_id);
        param.append("schedule", "0");
        param.append("pickup_date", this.date);
        param.append("schedule_time", date);
        param.append("distance", this.distance);
        param.append("vehicle_type", this.vehicle_type);
        param.append("source", this.pick_up);
        param.append("source_lat", this.pick_up_lt);
        param.append("source_long", this.pick_up_lg);
        param.append("destination_lat", this.drop_lt);
        param.append("destination_long", this.drop_lg);
        param.append("destination", this.drop);
        param.append("total", null);
        param.append("is_cancelled", "0");
        param.append("is_completed", "0");
        param.append("is_paid", "0");
        param.append("status", "0");
        param.append("cost", this.cost);
        param.append("driver_id", '');
        this.data.rideLaterbookingRequest(param).subscribe(function (result) {
            console.log(result);
            //this.userData = result; 
            if (result.status == "ERROR") {
                _this.data.presentToast('Error');
                return false;
            }
            else {
                var param1 = new FormData();
                param1.append("driver_Id", _this.Did);
                param1.append("customer_id", _this.customer_id);
                param1.append("booking_id", result.success.booking_request.id);
                param1.append("ride_type", 'later');
                _this.data.postNotification(param1).subscribe(function (result) {
                    if (result.status == "ERROR") {
                    }
                });
                //this.storage.set("customer_data",data.msg[0]);
                _this.data.presentToast('Booking Request Successfull!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                //this.navCtrl.setRoot(ConfirmPaymentPage,{'booking_id':result.success.booking_request.id,rideType:'later'});
            }
        });
    };
    RideLaterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ride-later',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\ride-later\ride-later.html"*/'<!--\n  Generated template for the RideLaterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Ride Later</ion-title>\n  </ion-navbar>  \n</ion-header>\n\n<ion-content>\n    <div class="top_div">\n      <ion-grid>\n        <ion-row class="addr_row">\n          <ion-col col-4 class="srcpt">\n           {{pick_up}}\n          </ion-col>\n          <ion-col col-4>\n            \n          </ion-col>\n          <ion-col col-4 class="destpt">\n            {{drop}}\n          </ion-col>\n        </ion-row>\n        <ion-row class="img_row">\n          <ion-col col-1>\n            <img src="assets/imgs/placeholder.png" />\n          </ion-col>\n          <ion-col col-10>\n            <img class="line_img" src="assets/imgs/substract.png" />\n          </ion-col>\n          <ion-col col-1>\n            <img src="assets/imgs/placeholder.png" />\n          </ion-col>\n        <!--</ion-row>\n        <ion-row class="distanceCostDiv">-->\n            <ion-col col-4>\n            </ion-col>\n            <ion-col col-4>\n              <div class="distanceCostDiv">\n                  {{distance}} | ${{cost}}\n              </div>\n            </ion-col>\n            <ion-col col-4>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    </div>\n  \n    <!--<div class="driverDiv">\n        <ion-item class="selectDriver">\n            <div class="datetime">\n              <span class="date">Date : {{date}}</span>\n              <span class="date">Time : {{time}}</span>\n            </div>\n            <h2 text-wrap>Driver information will be send to you 10 minutes before ride.</h2>\n        </ion-item>\n    </div>-->\n  \n    <div class="paymentMethodDiv">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <div class="innerDiv" [ngClass]="active === \'cash\' ? \'active_payment\' : \'\'" (click)="updateActive(\'cash\')">\n              <img class="list_item_icon" src="assets/imgs/notes.png"/>\n              <ion-label>Cash</ion-label>\n            </div>\n          </ion-col>\n          <ion-col col-4>\n            <div class="innerDiv" [ngClass]="active === \'card\' ? \'active_payment\' : \'\'" (click)="updateActive(\'card\')">\n              <img class="list_item_icon" src="assets/imgs/credit-card.png"/>\n              <ion-label>Card</ion-label>\n            </div>\n          </ion-col>\n          <ion-col col-4>\n            <div class="innerDiv" [ngClass]="active === \'wallet\' ? \'active_payment\' : \'\'" (click)="updateActive(\'wallet\')">\n              <img class="list_item_icon" src="assets/imgs/wallet.png"/>\n              <ion-label>Wallet</ion-label>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <button (click)=\'confirmPayment()\' class="login-btn" ion-button color="primary" block >Confirm Ride Request</button>\n  </ion-content>\n \n'/*ion-inline-end:"E:\transportApp28082018\src\pages\ride-later\ride-later.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RideLaterPage);
    return RideLaterPage;
}());

//# sourceMappingURL=ride-later.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(ht, http, toast, storage) {
        var _this = this;
        this.ht = ht;
        this.http = http;
        this.toast = toast;
        this.storage = storage;
        this.baseURL = "http://transport.walstarmedia.com/api/";
        console.log('Hello DataProvider Provider');
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
    }
    DataProvider.prototype.presentToast = function (msg) {
        var toast = this.toast.create({
            message: msg,
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    };
    DataProvider.prototype.getRoles = function () {
        return this.ht.get(this.baseURL + "roles").map(function (res) { return res.json(); });
    };
    //user signup
    DataProvider.prototype.userSignUp = function (param) {
        return this.ht.post(this.baseURL + "register", param).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.userSignIn = function (param) {
        return this.ht.post(this.baseURL + "login", param).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getCustomerProfile = function (param) {
        //return this.http.post(this.baseURL+"customer/profile",param).map(res=> res.json());
        //console.log("Token Here "+ this.token);
        //console.log('param'+param);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        //return this.http.post(this.baseURL+"customer/profile",header,param);
        return this.ht.post(this.baseURL + "customer/profile", '', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.custChangePass = function (param) {
        //console.log("Token Here "+ this.token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/change/password", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.updateCustomerProfile = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/save/profile", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.forgotPass = function (param) {
        return this.ht.post(this.baseURL + "password/reset", param).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getDriverProfile = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/profile", '', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.updateDriverProfile = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/save/profile", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.driverChangePass = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/change/password", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getFAQ = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.get(this.baseURL + "faqs", { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getallDrivers = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.get(this.baseURL + "admin/driver/list", { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.updateCustomerAvtar = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/update/profile/image", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.updateDriverAvtar = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/update/profile/image", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.addSuggestion = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/create/suggestion", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getvehicletypes = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/vehicletypes", '', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getvehicletypesforCustomers = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/vehicletypes", '', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.storeCustomerLocation = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/store/location", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.storeDriverLocation = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            //console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/store/location", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.AvailableToggle = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            //console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/toggle", '', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getCloseCustomers = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/closer/customers", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getCloseDrivers = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/closer/drivers", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getSelectedDriverInfo = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/get/driver/info", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getDriverToggle = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/get/toggle", '', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getCost = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/tripcost", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.postNotification = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/postNotification", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.bookingRequest = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/booking/request", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getBookingList = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/booking/list", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getPendingBookingList = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/pending/booking/list", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.driverRejectBooking = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/reject/booking", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.driverAcceptBooking = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/accept/booking", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.customerRejectBooking = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/cancel/booking", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.rideLaterbookingRequest = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/booking/later	", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.customerBookingDistance = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/booking/distance	", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.driverBookingDistance = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/booking/distance	", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getBookingInfo = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/booking/details	", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.RideCancelCharges = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/cancellation/charges", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.DriverpostNotification = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/postNotification", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.feedback = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/ride/feedback", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getCustInfo = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/customer/details", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.rideStart = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/ride/start", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.rideEnd = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/ride/finish", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getCustomerBookingList = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/booking/history", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.addFavDriver = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/add/favdriver", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.removeFavDriver = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/delete/favdriver", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getBookingDetails = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "driver/booking/details", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.addCustomerFavLocation = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/add/favlocation", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.removeCustomerFavLocation = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/delete/favlocation", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getCustomerFavLocation = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/favlocations", '', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getFavDrivers = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/favdrivers", '', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider.prototype.getcurrentBooking = function (param) {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
            // console.log("Token here"+this.token);            
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.ht.post(this.baseURL + "customer/booking/details", param, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalpage_modalpage__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BookingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookingListPage = /** @class */ (function () {
    function BookingListPage(navCtrl, navParams, data, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.storage.get('user').then(function (data) {
            _this.driver_id = data[0].id;
        });
        this.bookings = 'pending';
        setTimeout(function () {
            var param = new FormData();
            param.append("driver_id", _this.driver_id);
            console.log(_this.driver_id);
            _this.data.getBookingList(param).subscribe(function (result) {
                console.log(result);
                if (result.status == 'OK') {
                    _this.booking_history = result.success.booking;
                }
            });
            _this.data.getPendingBookingList(param).subscribe(function (result) {
                console.log(result);
                if (result.status == 'OK') {
                    _this.pending_bookings = result.success.booking;
                }
            });
        }, 1000);
    }
    BookingListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookingListPage');
    };
    BookingListPage.prototype.showBooking = function (i) {
        var _this = this;
        console.log(this.pending_bookings[i]);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modalpage_modalpage__["a" /* ModalpagePage */], { modalAct: 'showBooking', bookingId: this.pending_bookings[i].booking_id });
        var me = this;
        modal.onDidDismiss(function (data) {
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        });
        modal.present();
    };
    BookingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-booking-list',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\booking-list\booking-list.html"*/'<!--\n  Generated template for the BookingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="sideMenu" hideBackButton>\n    <button ion-button menuToggle >\n      <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n    </button>\n    <ion-title>Booking List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n             \n<ion-content padding>\n  <div padding>\n    <ion-segment [(ngModel)]="bookings">\n      <ion-segment-button value="pending">\n        Pending\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        History\n      </ion-segment-button>    \n    </ion-segment>     \n  </div>\n  \n  <div [ngSwitch]="bookings">\n    <ion-list class="pending_list" *ngSwitchCase="\'pending\'">    \n      <ion-item>\n          <ion-grid>\n              <ion-row>\n                  <ion-col text-wrap col-5>\n                    <h4>Source</h4>\n                  </ion-col>\n                  <ion-col text-wrap col-5>\n                      <h4>Destination</h4>\n                    </ion-col>\n                  <ion-col col-2>\n                      <h6>Action</h6>\n                  </ion-col>\n                </ion-row>\n            <ion-row *ngFor="let item of pending_bookings; let i = index">\n              <ion-col text-wrap col-5>\n                <h4>{{item.source}}</h4>\n              </ion-col>\n              <ion-col text-wrap col-5>\n                  <h4>{{item.destination}}</h4>\n                </ion-col>\n              <ion-col col-2 text-center>\n                  <ion-icon class="action_icon" name="open" (click)=\'showBooking(i)\'></ion-icon>\n              </ion-col>\n            </ion-row>    \n          </ion-grid>\n      </ion-item>\n    </ion-list>    \n  \n    <ion-list class="pending_list" *ngSwitchCase="\'history\'">\n        <ion-item>\n            <ion-grid>\n                <ion-row>\n                    <ion-col text-wrap col-5>\n                      <h4>Source</h4>\n                    </ion-col>\n                    <ion-col text-wrap col-5>\n                        <h4>Destination</h4>\n                      </ion-col>\n                    <ion-col col-2>\n                        <h6>Status</h6>\n                    </ion-col>\n                  </ion-row>\n              <ion-row *ngFor="let item of booking_history; let i = index">\n                <ion-col text-wrap col-5>\n                  <h4>{{item.source}}</h4>\n                </ion-col>\n                <ion-col text-wrap col-5>\n                    <h4>{{item.destination}}</h4>\n                  </ion-col>\n                <ion-col col-2 text-center>\n                    Accepted\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-item>\n    </ion-list>\n  </div>     \n</ion-content>\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\booking-list\booking-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], BookingListPage);
    return BookingListPage;
}());

//# sourceMappingURL=booking-list.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, data, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.loading = loading;
        this.user_details = [];
        this.userData = {};
        this.signup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            fname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            lname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]),
            c_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            role: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
        this.data.getRoles().subscribe(function (result) {
            if (result.status == 'OK') {
                console.log(result.success.roles);
                _this.roles = result.success.roles;
            }
            else {
                _this.data.presentToast(result.status);
            }
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.SignupForm = function () {
        var _this = this;
        console.log(this.user_details['fname']);
        /*let param = JSON.stringify({"first_name":"test", "last_name":"test",
      "role":1,"password":"1234","c_password":"1234","email":"abc@gmail.com"});*/
        if (this.user_details['password'] !== this.user_details['c_password']) {
            this.data.presentToast('Password and Confirm Password must match!');
            return false;
        }
        var param = new FormData();
        param.append("first_name", this.user_details['fname']);
        param.append("last_name", this.user_details['lname']);
        param.append("email", this.user_details['email']);
        param.append("password", this.user_details['password']);
        param.append("role", this.user_details['role']);
        param.append("c_password", this.user_details['c_password']);
        var loader = this.loading.create({
            content: "Please wait...",
            spinner: 'bubbles'
        });
        loader.present();
        this.data.userSignUp(param).subscribe(function (result) {
            console.log(result);
            //this.userData = result; 
            loader.dismiss();
            if (result.status == "ERROR") {
                _this.data.presentToast(result.error.email);
                return false;
            }
            else {
                //this.storage.set("customer_data",data.msg[0]);
                _this.data.presentToast('Registration Successfull!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
            }
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar align-title="center" color="primary">\n\n    <ion-title>\n\n	    <h2>Sign Up</h2>\n\n	</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="login-container">\n\n  	<ion-icon name="close" navPop></ion-icon>\n\n  	<div class="title_div">\n\n      <!-- <h2 class="head_title">TFH</h2> -->\n\n      <h2 class="sub_title">Sign Up</h2>\n\n    </div>\n\n    <!-- Sign up form-->\n\n    <form class="sign_up_form" [formGroup]="signup" (ngSubmit)="SignupForm()"> \n\n      <ion-list no-lines>\n\n      	<ion-item>\n\n          <ion-label stacked>First Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user_details.fname" formControlName="fname" [class.invalid]="!signup.valid && (signup.controls.fname.dirty || submitAttempt)" ></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="signup.get(\'fname\').hasError(\'required\')  && signup.get(\'fname\').touched">\n\n            Please fill out this field\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Last Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user_details.lname" formControlName="lname" [class.invalid]="!signup.valid && (signup.controls.lname.dirty || submitAttempt)" ></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="signup.get(\'lname\').hasError(\'required\')  && signup.get(\'lname\').touched">\n\n            Please fill out this field\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="email" [(ngModel)]="user_details.email" formControlName="email" [class.invalid]="!signup.valid && (signup.controls.email.dirty || submitAttempt)" ></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="signup.get(\'email\').hasError(\'required\') && signup.get(\'email\').touched">\n\n            Please fill out this field.\n\n        </div>\n\n            \n\n        <div class="error" *ngIf="!signup.get(\'email\').hasError(\'required\') && (signup.get(\'email\').hasError(\'email\') && signup.get(\'email\').dirty )">\n\n            Please enter valid Email address\n\n        </div>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="user_details.password" minlength="6" formControlName="password" [class.invalid]="!signup.valid && (signup.controls.password.dirty || submitAttempt)"  ></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="signup.get(\'password\').hasError(\'required\')  && signup.get(\'password\').touched">\n\n            Please fill out this field\n\n        </div>\n\n        <div class="error" *ngIf="signup.get(\'password\').hasError(\'minlength\')  && signup.get(\'password\').touched">\n\n            Minimum Length of password must be 6\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Confirm Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="user_details.c_password" formControlName="c_password" [class.invalid]="!signup.valid && (signup.controls.c_password.dirty || submitAttempt)" ></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="signup.get(\'c_password\').hasError(\'required\') && signup.get(\'c_password\').hasError(\'mismatchedPasswords\') && signup.get(\'c_password\').touched">\n\n            Please fill out this field\n\n        </div>\n\n\n\n        <ion-item>\n\n            <ion-label stacked></ion-label>\n\n            <ion-select placeholder="Role"  [(ngModel)]="user_details.role" formControlName="role" [class.invalid]="!signup.valid && (signup.controls.role.dirty || submitAttempt)"  >\n\n                <ion-option *ngFor="let role of roles" value="{{role.id}}">{{role.name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div class="error" *ngIf="signup.get(\'role\').hasError(\'required\')  && signup.get(\'role\').touched">\n\n              Please fill out this field\n\n          </div>\n\n\n\n        <ion-item class="submit_btn_item">\n\n            <button class="sign_up-btn" ion-button color="primary" block [disabled]="!this.signup.valid">Get Started</button>\n\n        </ion-item>\n\n \n\n      </ion-list>  \n\n    </form>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPaymentPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_google_maps_google_maps__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Firebase__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__payment_payment__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modalpage_modalpage__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { FeedbackPage } from '../feedback/feedback';


var ConfirmPaymentPage = /** @class */ (function () {
    function ConfirmPaymentPage(geolocation, modalCtrl, device, navParams, zone, platform, viewCtrl, actionSheetCtrl, eve, navCtrl, data, storage, alertCtrl, maps) {
        var _this = this;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.device = device;
        this.navParams = navParams;
        this.zone = zone;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.eve = eve;
        this.navCtrl = navCtrl;
        this.data = data;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.maps = maps;
        this.duration = '0 min';
        this.markers = [];
        this.currentMapTrack = null;
        this.isTracking = false;
        this.trackedRoute = [];
        this.userData = {};
        this.car_marker = null;
        this.rideComplete = false;
        this.ref = __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"]().ref('geolocations/');
        this.booking_id = navParams.get('booking_id');
        this.rideType = navParams.get('rideType');
        this.source = navParams.get('source');
        this.destination = navParams.get('destination');
        //this.driver_id = navParams.get('driver_id');
        this.active = 'reject';
        //this.live_trak = 'false';
        this.traking = 'image';
        this.storage.get('user').then(function (data) {
            _this.customer_id = data[0].id;
        });
        eve.subscribe('live_tracking_Driver_id:created', function (live_tracking_Driver_id, time) {
            _this.traking = 'div';
            //this.live_trak = 'true';
            _this.active = 'accept';
            console.log('live_tracking_Driver_id' + live_tracking_Driver_id);
            _this.driver_id = live_tracking_Driver_id;
            _this.startNavigating(_this.source, _this.destination);
            _this.showSelectDriverModal(_this.driver_id);
            //this.watchMethod();
            /*let marker = new google.maps.Marker({
              position: this.map.getCenter(),
              map: this.map,
              icon: 'assets/imgs/car48x48.png'
            });
      
            setInterval(() =>{
              this.updateTrak().then(data=>{
                console.log(data);
                this.deleteMarkers();
                // this.addMarker1(data,'assets/imgs/car48x48.png');
                 marker.setPosition(data);
                //this.markers.push(marker);
                this.setMapOnAll(this.map);
                this.getDuration(data).then(data=>{
                  this.duration = data;
                });
              });
            }, 3000);*/
            // this.driver_id = 3;
            //setTimeout(() => {  
            // this.startNavigating(this.source,this.destination);
            //}, 2500); 
            // this.showSelectDriverModal(this.driver_id);
            //this.watchMethod();
            //let marker= null;
            setInterval(function () {
                _this.updateTrak().then(function (data) {
                    _this.userData = data;
                    console.log(data);
                    alert(_this.userData.latitude);
                    //this.addMarker1(data,'assets/imgs/car48x48.png');
                    var marker = new google.maps.Marker({
                        position: _this.map.getCenter(),
                        map: _this.map,
                        icon: 'assets/imgs/car48x48.png'
                    });
                    //marker.setPosition(data);
                });
            }, 5000);
        });
        eve.subscribe('finished_ride:created', function (finished_ride_data, time) {
            //this.rideComplete = true;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__payment_payment__["a" /* PaymentPage */], { booking_id: _this.booking_id, driver_id: _this.driver_id });
        });
    }
    ConfirmPaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPaymentPage');
        /*let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
          this.autocompleteService = new google.maps.places.AutocompleteService();
          this.searchDisabled = false;
        }); */
        this.loadMap();
    };
    ConfirmPaymentPage.prototype.showSelectDriverModal = function (did) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__modalpage_modalpage__["a" /* ModalpagePage */], { modalAct: 'driverInfo', driverId: did });
        var me = this;
        modal.onDidDismiss(function (data) {
            if (data) {
                //this.selectdId = data;
            }
            else {
                //this.selectdId = '';
            }
        });
        modal.present();
    };
    ConfirmPaymentPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.watchPosition().subscribe(function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                clickableIcons: false,
                disableDefaultUI: true,
                zoomControl: false,
                enableHighAccuracy: true,
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    ConfirmPaymentPage.prototype.getDuration = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                origins: [new google.maps.LatLng(_this.latitude, _this.longitude)],
                destinations: [new google.maps.LatLng(data.lat(), data.lng())],
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            }, function (response, status) {
                if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
                    var distance = response.rows[0].elements[0].distance.text;
                    var duration = response.rows[0].elements[0].duration.text;
                    resolve(duration);
                }
                else {
                    alert("Unable to find the distance via road.");
                }
            });
        });
    };
    ConfirmPaymentPage.prototype.confirm_cancel = function () {
        var _this = this;
        var CancelDuration1;
        var CancelCharge1;
        var CancelDuration2;
        var CancelCharge2;
        var CancelDuration3;
        var CancelCharge3;
        var param = new FormData();
        param.append("booking_id", this.booking_id);
        this.data.RideCancelCharges(param).subscribe(function (result) {
            console.log(result);
            if (result.status == 'OK') {
                console.log(result.success);
                CancelDuration1 = result.success.Charges_list[0].cancellation_time;
                CancelCharge1 = result.success.Charges_list[0].charges;
                CancelDuration2 = result.success.Charges_list[1].cancellation_time;
                CancelCharge2 = result.success.Charges_list[1].charges;
                CancelDuration3 = result.success.Charges_list[2].cancellation_time;
                CancelCharge3 = result.success.Charges_list[2].charges;
                var alert_1 = _this.alertCtrl.create({
                    title: 'Cancellation charges',
                    message: 'There are some cancellation charges as per following.<br/>For ' + CancelDuration1 + ' min : $' + CancelCharge1 + '<br/> For ' + CancelDuration2 + 'min : $' + CancelCharge2 + '<br/> For' + CancelDuration3 + ' min : $' + CancelCharge3 + ' <br/>Do you Really want to cancel Ride?',
                    buttons: [
                        {
                            text: 'Yes',
                            handler: function () {
                                console.log('Accept clicked');
                                var param = new FormData();
                                param.append("customer_id", _this.customer_id);
                                param.append("driver_id", _this.driver_id);
                                param.append("booking_id", _this.booking_id);
                                _this.data.customerRejectBooking(param).subscribe(function (result) {
                                    console.log(result);
                                    if (result.status == 'OK') {
                                        _this.data.presentToast('Request Canceled Successfully');
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                    }
                                });
                            }
                        },
                        {
                            text: 'No',
                            handler: function () {
                                console.log('reject clicked');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    ConfirmPaymentPage.prototype.addMarker = function () {
        /*let marker;
        if (marker && marker.setMap) {
          marker.setMap(null);
        }*/
        this.deleteMarkers();
        var marker;
        marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        new google.maps.Circle({
            strokeColor: '#3853fa55',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            strokeWidth: 5,
            fillColor: '#00880055',
            fillOpacity: 0.35,
            map: this.map,
            center: this.map.getCenter(),
            radius: 300
        }).then(function (circle) {
            marker.bindTo('position', circle, 'center');
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    ConfirmPaymentPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    ConfirmPaymentPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    ConfirmPaymentPage.prototype.watchMethod = function () {
        var _this = this;
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            _this.deleteMarkers();
            _this.updateGeolocation(_this.customer_id, _this.booking_id, data.coords.latitude, data.coords.longitude);
        });
    };
    ConfirmPaymentPage.prototype.updateGeolocation = function (customer_id, booking_id, lat, lng) {
        __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"]().ref(booking_id + '/' + customer_id).set({ 'latitude': lat, 'longitude': lng });
    };
    ConfirmPaymentPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    ConfirmPaymentPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        //this.loadMap();
        this.markers = [];
    };
    ConfirmPaymentPage.prototype.updateTrak = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"]().ref(_this.booking_id + '/' + _this.driver_id).on('value', function (snapshot) {
                snapshotToArray(snapshot).forEach(function (data) {
                    console.log(data);
                    //if(data.uuid !== this.device.uuid) {
                    var image = 'assets/imgs/car48x48.png';
                    var updatelocation = new google.maps.LatLng(data.latitude, data.longitude);
                    //alert(updatelocation.lat())
                    resolve(updatelocation);
                });
            });
        });
    };
    ConfirmPaymentPage.prototype.addMarker1 = function (location, image) {
    };
    ConfirmPaymentPage.prototype.RideLaterOk = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ConfirmPaymentPage.prototype.startNavigating = function (pickup, drop) {
        var _this = this;
        console.log("Start Navigating");
        //this.marker.setMap(null);
        this.directionsPanel = this.directionsPanelElement.nativeElement;
        //this.clearMarkers();
        //this.markers = [];    
        //this.circle.setMap(null);
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { /*strokeColor:"#4a4a4a",*/ strokeOpacity: 0.8, strokeWeight: 3, strokeColor: '#278DF8' }, suppressMarkers: true });
        //directionsDisplay.set('directions', null);
        this.getLatLng(pickup).then(function (data) {
            _this.startMarker = new google.maps.Marker({ position: new google.maps.LatLng(data['latitude'], data['longitude']), map: _this.map, icon: 'assets/imgs/source_pin.png' });
            _this.markers.push(_this.startMarker);
        });
        this.getLatLng(drop).then(function (data) {
            _this.stopMarker = new google.maps.Marker({ position: new google.maps.LatLng(data['latitude'], data['longitude']), map: _this.map, icon: 'assets/imgs/destination_pin.png' });
            _this.markers.push(_this.stopMarker);
        });
        this.directionsService.route({
            origin: pickup,
            destination: drop,
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            var route = res.routes[0];
            console.log('route==>' + route.legs);
            ///this.eve.publish('distance:created', route.legs[0].distance.text, Date.now());
            _this.directionsDisplay.setMap(null);
            if (status == google.maps.DirectionsStatus.OK) {
                _this.directionsDisplay.setMap(_this.map);
                _this.directionsDisplay.setDirections(res);
            }
            else {
                console.warn(status);
            }
        });
    };
    ConfirmPaymentPage.prototype.redrawPath = function (path) {
        /*if (this.currentMapTrack) {
          this.currentMapTrack.setMap(null);
        }*/
        if (path.length > 1) {
            this.currentMapTrack = new google.maps.Polyline({
                path: path,
                geodesic: true,
                strokeColor: '#ff00ff',
                strokeOpacity: 1.0,
                strokeWeight: 3
            });
            //this.currentMapTrack.setMap(this.map);
        }
    };
    ConfirmPaymentPage.prototype.getLatLng = function (address) {
        return new Promise(function (resolve) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    resolve({ latitude: latitude, longitude: longitude });
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ConfirmPaymentPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('directionsPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ConfirmPaymentPage.prototype, "directionsPanelElement", void 0);
    ConfirmPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-confirm-payment',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\confirm-payment\confirm-payment.html"*/'<!--\n  Generated template for the ConfirmPaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="sideMenu" >\n    <!--<button ion-button menuToggle >\n      <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n    </button>-->\n    <ion-title *ngIf =\'rideType == "now"\'>Ride Tracking</ion-title>\n    <ion-title *ngIf =\'rideType == "later"\'>Ride Information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding *ngIf =\'rideType == "now"\'>\n  <ion-grid >\n    <ion-row>\n      <ion-col col-12>\n        <div class="signoutcontentdiv" text-center>\n          <h1> Your Ride Confirmation Successful! </h1>\n        </div>\n      </ion-col>\n     \n      <ion-col col-12>\n        <div class="signoutimgdiv">\n          <img [ngClass]="traking === \'image\' ? \'trak_image\' : \'no_trak_image\'" class="live_trak" src="assets/imgs/checked-symbol.png" />\n          <div [ngClass]="traking === \'div\' ? \'track_div\' : \'no_trak_div\'" class="live_trak">\n              <!--<div  class="live_trak">-->\n              <div id="distance">\n                 {{duration}}\n              </div>\n            <div #map id="map"></div>\n            <div #directionsPanel id="directionsPanel"></div>\n          </div>\n        </div>\n        <div class="driver_status" [ngClass]="active === \'reject\' ? \'bg_reject\' : \'bg_accept\'"></div>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n</ion-content>     \n\n\n<ion-content padding *ngIf=\'rideType == "later"\'>\n  <ion-grid >\n    <ion-row>     \n      <ion-col col-12>\n        <div class="signoutcontentdiv" text-center>\n          <h1> Your Ride Request saved successfully. </h1>\n          <p>\n            Driver information will send to you 10 minutes before your Ride\n          </p>\n        </div>\n        <button (click)=\'RideLaterOk()\' class="login-btn" ion-button color="primary" block >OK</button>\n      </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <button (click)=\'confirm_cancel()\' class="login-btn" ion-button color="primary" block >Cancel Booking</button>\n</ion-footer>\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\confirm-payment\confirm-payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */]])
    ], ConfirmPaymentPage);
    return ConfirmPaymentPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function () {
        var item = snapshot.val();
        item.key = snapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
/*
 this.updateTrak().then(data=>{
        this.userData = data;
        console.log(data);
        alert(this.userData.latitude);
        //this.deleteMarkers();
        //alert( data.latitude);
       // alert( data.lat());
       // this.addMarker1(data,'assets/imgs/car48x48.png');
       /*if(this.car_marker == null)
       {*
        this.car_marker = new google.maps.Marker({
          position: data,
          map: this.map,
          icon: 'assets/imgs/car48x48.png'
        });
        /*setTimeout(() => {
          
          this.trackedRoute.push(data);
          this.redrawPath(this.trackedRoute);
        }, 0);
       }
       else{
        this.car_marker.setPosition(data);
        setTimeout(() => {
         // this.trackedRoute.push({ lat: data.lat(), lng: data.lng() });
         this.trackedRoute.push({ lat: this.userData.lat(), lng: this.userData.lng() });
          this.redrawPath(this.trackedRoute);
        }, 0);
        
       }
*
      //this.markers.push(marker);
        //this.setMapOnAll(this.map);
        this.getDuration(data).then(data=>{
          this.duration = data;
        });
      });
*/ 
//# sourceMappingURL=confirm-payment.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswoedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ForgotpasswoedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswoedPage = /** @class */ (function () {
    function ForgotpasswoedPage(navCtrl, navParams, data, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.loading = loading;
        this.forgetpass = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]),
        });
    }
    ForgotpasswoedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswoedPage');
    };
    ForgotpasswoedPage.prototype.forgotpass = function (email) {
        var _this = this;
        var param = new FormData();
        param.append("email", email);
        var loader = this.loading.create({
            content: "Please wait...",
            spinner: 'bubbles'
        });
        loader.present();
        this.data.forgotPass(param).subscribe(function (result) {
            // console.log(result);  
            loader.dismiss();
            if (result.status == "ERROR") {
                _this.data.presentToast(result.error);
            }
            else {
                _this.data.presentToast('Password reset instructions are sent to your email');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
        });
    };
    ForgotpasswoedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgotpasswoed',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\forgotpasswoed\forgotpasswoed.html"*/'<!--\n\n  Generated template for the ForgotpasswoedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <div class="forgetPass-img" text-center>\n\n    <img src="../../assets/imgs/logotransperent.png" />\n\n  </div>\n\n  <form text-center [formGroup]="forgetpass">      \n\n    <h2>Forgot your password?</h2>\n\n    <p>Enter your Email below to receive your password reset instructions</p>\n\n    <input type="email" placeholder="Email Address" [(ngModel)]="email" formControlName="email" [class.invalid]="!forgetpass.valid && (forgetpass.controls.email.dirty || submitAttempt)" >\n\n    \n\n    <div class="error" *ngIf="forgetpass.get(\'email\').hasError(\'required\') && forgetpass.get(\'email\').touched">\n\n      Please fill out this field.\n\n    </div>\n\n        \n\n    <div class="error" *ngIf="!forgetpass.get(\'email\').hasError(\'required\') && (forgetpass.get(\'email\').hasError(\'email\') && forgetpass.get(\'email\').dirty )">\n\n        Please enter valid Email address\n\n    </div>\n\n\n\n    <button class="login-btn" ion-button color="primary" block  (click)="forgotpass(email)" [disabled]="!this.forgetpass.valid">Send</button>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\forgotpasswoed\forgotpasswoed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], ForgotpasswoedPage);
    return ForgotpasswoedPage;
}());

//# sourceMappingURL=forgotpasswoed.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailverificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmailverificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailverificationPage = /** @class */ (function () {
    function EmailverificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = this.navParams.get('data');
        this.first_name = this.user[0].first_name;
        this.last_name = this.user[0].last_name;
        this.email = this.user[0].email;
    }
    EmailverificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailverificationPage');
    };
    EmailverificationPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], EmailverificationPage.prototype, "nav", void 0);
    EmailverificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-emailverification',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\emailverification\emailverification.html"*/'<!--\n\n  Generated template for the EmailverificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!--<button ion-button (click)=\'goBack()\' >Go Back</button>-->\n\n  <div class="emptydiv" text-center>\n\n    <img src="../../assets/imgs/letter.png" />\n\n  </div>\n\n  <div class="contentdiv" text-center>\n\n    <h2>Verify your email address</h2>\n\n    <p>{{first_name}} {{last_name}} to start using TFH, we need to verify your email ID : {{email}}.</p>\n\n    <p>Check your email & click the verification link to activate your account.</p>\n\n    <!--<button ion-button class="login-btn">CLICK TO VERIFY</button>-->\n\n  </div>\n\n</ion-content>\n\n   '/*ion-inline-end:"E:\transportApp28082018\src\pages\emailverification\emailverification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], EmailverificationPage);
    return EmailverificationPage;
}());

//# sourceMappingURL=emailverification.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_profile_customer_profile__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PasswordResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordResetPage = /** @class */ (function () {
    function PasswordResetPage(navCtrl, navParams, data, loading, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.loading = loading;
        this.storage = storage;
        this.password = [];
        this.change_pass = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            current_pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]),
            new_pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]),
            confirm_new_pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])
        });
    }
    PasswordResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordResetPage');
    };
    PasswordResetPage.prototype.updatePassword = function (password) {
        //console.log(password['current_pass']);
        var _this = this;
        if (this.password['new_pass'] !== this.password['confirm_new_pass']) {
            this.data.presentToast('New Password and Confirm New Password must match!');
            return false;
        }
        this.storage.get('user').then(function (data) {
            //console.log(data); 
            //let param = new FormData();
            _this.customer_id = data[0].id;
            var param = new FormData();
            if (data[0].role == 2) {
                param.append("customer_id", _this.customer_id);
            }
            else if (data[0].role == 3) {
                param.append("driver_id", _this.customer_id);
            }
            param.append("current_password", _this.password['current_pass']);
            param.append("password", _this.password['confirm_new_pass']);
            param.append("c_password", _this.password['confirm_new_pass']);
            var loader = _this.loading.create({
                content: "Please wait...",
                spinner: 'bubbles'
            });
            loader.present();
            if (data[0].role == 2) {
                _this.data.custChangePass(param).subscribe(function (result) {
                    //console.log(result);    
                    //this.userData = result; 
                    loader.dismiss();
                    if (result.status == "ERROR") {
                        _this.data.presentToast('Something Went Wrong!');
                        return false;
                    }
                    else {
                        //this.storage.set("customer_data",data.msg[0]);
                        _this.data.presentToast('Changed Password Successfully!');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                });
            }
            else if (data[0].role == 3) {
                _this.data.driverChangePass(param).subscribe(function (result) {
                    //console.log(result);    
                    //this.userData = result; 
                    loader.dismiss();
                    if (result.status == "ERROR") {
                        _this.data.presentToast('Something Went Wrong!');
                        return false;
                    }
                    else {
                        //this.storage.set("customer_data",data.msg[0]);
                        _this.data.presentToast('Changed Password Successfully!');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__customer_profile_customer_profile__["a" /* CustomerProfilePage */]);
                    }
                });
            }
        });
    };
    PasswordResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-password-reset',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\password-reset\password-reset.html"*/'<!--\n\n  Generated template for the PasswordResetPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="sideMenu">\n\n    <ion-title> Change Password </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="head_container" text-center >\n\n    <div class="first_key">\n\n        <img src="assets/imgs/key.png" />\n\n    </div>\n\n    <div class="second_key">\n\n        <img src="assets/imgs/key.png" />\n\n    </div>\n\n  </div>\n\n\n\n  <form class="updatepass_form" [formGroup]="change_pass"> \n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Current Password</ion-label>\n\n        <ion-input [(ngModel)]="password.current_pass" type="password" minlength="6" formControlName="current_pass" [class.invalid]="!change_pass.valid && (change_pass.controls.current_pass.dirty || submitAttempt)" ></ion-input>\n\n      </ion-item>\n\n      <div class="error" *ngIf="change_pass.get(\'current_pass\').hasError(\'required\')  && change_pass.get(\'current_pass\').touched">\n\n          Please fill out this field\n\n      </div>\n\n      <div class="error" *ngIf="change_pass.get(\'current_pass\').hasError(\'minlength\')  && change_pass.get(\'current_pass\').touched">\n\n          Minimum Length of password must be 6\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>New Password</ion-label>\n\n        <ion-input [(ngModel)]="password.new_pass" type="password"minlength="6" formControlName="new_pass" [class.invalid]="!change_pass.valid && (change_pass.controls.new_pass.dirty || submitAttempt)" ></ion-input>\n\n      </ion-item>\n\n      <div class="error" *ngIf="change_pass.get(\'new_pass\').hasError(\'required\')  && change_pass.get(\'new_pass\').touched">\n\n          Please fill out this field\n\n      </div>\n\n      <div class="error" *ngIf="change_pass.get(\'new_pass\').hasError(\'minlength\')  && change_pass.get(\'new_pass\').touched">\n\n          Minimum Length of password must be 6\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Confirm New Password</ion-label>\n\n        <ion-input [(ngModel)]="password.confirm_new_pass" type="password"minlength="6" formControlName="confirm_new_pass" [class.invalid]="!change_pass.valid && (change_pass.controls.confirm_new_pass.dirty || submitAttempt)" ></ion-input>\n\n      </ion-item>\n\n      <div class="error" *ngIf="change_pass.get(\'confirm_new_pass\').hasError(\'required\')  && change_pass.get(\'confirm_new_pass\').touched">\n\n          Please fill out this field\n\n      </div>\n\n      <div class="error" *ngIf="change_pass.get(\'confirm_new_pass\').hasError(\'minlength\')  && change_pass.get(\'confirm_new_pass\').touched">\n\n          Minimum Length of password must be 6\n\n      </div>\n\n\n\n\n\n      <ion-item class="submit_btn_item">\n\n        <button class="login-btn" ion-button color="primary" block [disabled]="!this.change_pass.valid"  (click)="updatePassword(password)">Done</button>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\password-reset\password-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PasswordResetPage);
    return PasswordResetPage;
}());

//# sourceMappingURL=password-reset.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookinghistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BookinghistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookinghistoryPage = /** @class */ (function () {
    function BookinghistoryPage(data, loading, storage, navCtrl, navParams) {
        var _this = this;
        this.data = data;
        this.loading = loading;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.history = '';
        this.upcoming = '';
        this.delivery_history = '';
        this.upcoming_deliveries = '';
        this.showDiv = 1;
        this.showSubDiv = 3;
        var loader = this.loading.create({
            content: "Please wait...",
            spinner: 'bubbles'
        });
        loader.present();
        this.storage.get('user').then(function (data) {
            _this.id = data[0].id;
            var param = new FormData();
            param.append("customer_id", data[0].id);
            _this.data.getCustomerBookingList(param).subscribe(function (result) {
                console.log(result);
                if (result.status == 'OK') {
                    _this.history = result.success.booking;
                    _this.upcoming = result.success.later;
                }
            });
        });
        loader.dismiss();
    }
    BookinghistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookinghistoryPage');
    };
    BookinghistoryPage.prototype.changeTab = function (TabNo) {
        this.showDiv = TabNo;
        this.showSubDiv = 3;
    };
    BookinghistoryPage.prototype.changeSubTab = function (TabNo) {
        this.showSubDiv = TabNo;
    };
    BookinghistoryPage.prototype.giveFeedback = function (i) {
        //let record = this.history[i];
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__feedback_feedback__["a" /* FeedbackPage */], { booking_id: this.history[i].booking_id, driver_id: this.history[i].driver_id });
    };
    BookinghistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bookinghistory',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\bookinghistory\bookinghistory.html"*/'<!--\n  Generated template for the BookinghistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Bookings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf=\'showDiv == 1\'>\n    <div class = "tabs-striped tabs-background-positive tabs-color-light">\n      <div class = "tabs toptabs">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6 (click)=\'changeSubTab("3")\'>\n              <a class = "tab-item toptab_item" [ngClass]="showSubDiv == 3 ? \'active\' : \'\'">\n                Past\n              </a>\n            </ion-col>\n            <ion-col col-6 (click)=\'changeSubTab("4")\'>\n              <a class = "tab-item toptab_item" [ngClass]="showSubDiv == 4 ? \'active\' : \'\'">\n                Upcoming\n              </a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <div *ngIf=\'showSubDiv == 3\'>\n    <div *ngIf=\'history != ""\'>\n      <ion-card *ngFor="let item of history; let i = index">\n        <div class="abs_div">\n          <span>{{item.booking_details.created_at}}</span>\n        </div>\n        <span class="price">${{item.booking_details.cost}}</span> \n        <ion-item>\n          <ion-icon class="src_pin" name="pin"></ion-icon>\n          <span>{{item.booking_details.source}}</span>\n        </ion-item> \n        <ion-item>\n          <ion-icon class="dest_pin" name="pin"></ion-icon>\n          <span>{{item.booking_details.destination}}</span>\n        </ion-item>\n        <ion-item *ngIf="item?.feedback?.rating > 0">\n          <ion-icon name="star" [ngClass]="item.feedback.rating > 0 ? \'r_star\' : \'n_start\'"></ion-icon>\n          <ion-icon name="star" [ngClass]="item.feedback.rating > 1 ? \'r_star\' : \'n_start\'"></ion-icon>\n          <ion-icon name="star" [ngClass]="item.feedback.rating > 2 ? \'r_star\' : \'n_start\'"></ion-icon>\n          <ion-icon name="star" [ngClass]="item.feedback.rating > 3 ? \'r_star\' : \'n_start\'"></ion-icon>\n          <ion-icon name="star" [ngClass]="item.feedback.rating > 4 ? \'r_star\' : \'n_start\'"></ion-icon>\n        </ion-item>\n        <ion-item class="not_rated_item" *ngIf="item?.feedback == null">\n          Not Rated \n          <span (click)="giveFeedback(i)">Rate</span>\n        </ion-item>\n      </ion-card>\n    </div>\n    <div class="nulldiv" *ngIf=\'history == ""\'>\n        You haven\'t taken a ride yet.\n    </div>\n  </div>\n\n  <div *ngIf=\'showSubDiv == 4\'>\n    <div *ngIf=\'upcoming != ""\'>\n      <ion-card *ngFor="let item of upcoming; let i = index">\n        <div class="abs_div">\n          <span>{{item.schedule_time}}</span>\n        </div>\n        <span class="price">${{item.cost}}</span> \n        <ion-item>\n          <ion-icon class="src_pin" name="pin"></ion-icon>\n          <span>{{item.source}}</span>\n        </ion-item> \n        <ion-item>\n          <ion-icon class="dest_pin" name="pin"></ion-icon>\n          <span>{{item.destination}}</span>\n        </ion-item>\n      </ion-card>\n    </div>\n    <div class="nulldiv" *ngIf=\'upcoming == ""\'>\n        You have no upcoming Rides.\n    </div>\n  </div>\n     \n</div>   \n       <!--<ion-card>\n           <div class="abs_div">\n              <span>5 Oct 2018</span>\n           </div>\n           <span class="price">$15</span> \n           <ion-item>\n              <ion-icon class="src_pin" name="pin"></ion-icon>\n              <span>Mumbai, Maharashtra, India</span>\n           </ion-item> \n           <ion-item>\n              <ion-icon class="dest_pin" name="pin"></ion-icon>\n              <span>Satara, Maharashtra, India</span>\n           </ion-item>\n          </ion-card>-->\n\n  <div *ngIf=\'showDiv == 2\'>\n    <div class = "tabs-striped tabs-background-positive tabs-color-light">\n      <div class = "tabs toptabs">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6 (click)=\'changeSubTab("3")\'>\n              <a class = "tab-item toptab_item"  [ngClass]="showSubDiv == 3 ? \'active\' : \'\'">\n                Past\n              </a>\n            </ion-col>\n            <ion-col col-6 (click)=\'changeSubTab("4")\'>\n              <a class = "tab-item toptab_item" [ngClass]="showSubDiv == 4 ? \'active\' : \'\'">\n                Upcoming\n              </a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <div *ngIf=\'showSubDiv == 3\'>\n      <div *ngIf=\'delivery_history != ""\'>\n          <ion-card *ngFor="let item of history; let i = index">\n            <div class="abs_div">\n              <span>{{item.booking_details.created_at}}</span>\n            </div>\n            <span class="price">${{item.booking_details.cost}}</span> \n            <ion-item>\n              <ion-icon class="src_pin" name="pin"></ion-icon>\n              <span>{{item.booking_details.source}}</span>\n            </ion-item> \n            <ion-item>\n              <ion-icon class="dest_pin" name="pin"></ion-icon>\n              <span>{{item.booking_details.destination}}</span>\n            </ion-item>\n          </ion-card>\n        </div>\n        <div class="nulldiv" *ngIf=\'delivery_history == ""\'>\n            You haven\'t taken a delivery yet.\n        </div>\n    </div>\n  \n    <div *ngIf=\'showSubDiv == 4\'>\n        <div *ngIf=\'upcoming_deliveries != ""\'>\n            <ion-card *ngFor="let item of upcoming; let i = index">\n              <div class="abs_div">\n                <span>{{item.schedule_time}}</span>\n              </div>\n              <span class="price">${{item.cost}}</span> \n              <ion-item>\n                <ion-icon class="src_pin" name="pin"></ion-icon>\n                <span>{{item.source}}</span>\n              </ion-item> \n              <ion-item>\n                <ion-icon class="dest_pin" name="pin"></ion-icon>\n                <span>{{item.destination}}</span>\n              </ion-item>\n            </ion-card>\n          </div>\n          <div class="nulldiv" *ngIf=\'upcoming_deliveries == ""\'>\n              You have no upcoming delivery.\n          </div>\n    </div>\n</div>\n</ion-content>\n\n\n<div class="last_div">  \n    <div class="inner_last_div">\n      <div class = "tabs-striped tabs-background-positive tabs-color-light">\n        <div class = "tabs">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6 (click)=\'changeTab("1")\'>\n                  <a class = "tab-item">\n                      Rides\n                  </a>\n              </ion-col>\n              <ion-col col-6 (click)=\'changeTab("2")\'>\n                  <a class = "tab-item">\n                      Deliveries\n                  </a>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n     </div>\n    </div>    \n</div>      '/*ion-inline-end:"E:\transportApp28082018\src\pages\bookinghistory\bookinghistory.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], BookinghistoryPage);
    return BookinghistoryPage;
}());

//# sourceMappingURL=bookinghistory.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DriversettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriversettingPage = /** @class */ (function () {
    function DriversettingPage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.isToggled = false;
    }
    DriversettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriversettingPage');
    };
    DriversettingPage.prototype.notify = function () {
        var _this = this;
        console.log("Toggled: " + this.isToggled);
        this.data.AvailableToggle().subscribe(function (result) {
            console.log(result);
            if (result.status == 'OK') {
                console.log(result.success.available);
                if (result.success.available == 'Driver set to On') {
                    _this.data.presentToast('You are visible to nearby customers');
                }
                else {
                    _this.data.presentToast('You are invisible to nearby customers');
                }
            }
            else {
                _this.data.presentToast('Error');
            }
        });
    };
    DriversettingPage.prototype.setVisibility = function (visibility) {
        console.log("Toggled: " + this.isToggled);
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
    };
    DriversettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-driversetting',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\driversetting\driversetting.html"*/'<!--\n  Generated template for the DriversettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Visible to customers</ion-label>\n    <ion-toggle [(ngModel)]="isToggled" (ionChange)="notify()"></ion-toggle>\n  </ion-item>\n</ion-content> \n '/*ion-inline-end:"E:\transportApp28082018\src\pages\driversetting\driversetting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], DriversettingPage);
    return DriversettingPage;
}());

//# sourceMappingURL=driversetting.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Info = /** @class */ (function () {
    function Info() {
    }
    return Info;
}());
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, data, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        this.icon_name = 'add';
        this.searchTerm = '';
        this.showDiv = 1;
        this.data.getFAQ().subscribe(function (result) {
            console.log(result);
            if (result.status == "ERROR") {
                _this.data.presentToast('Invalid Username or Password!');
            }
            else {
                console.log(result);
                _this.information = result.success.faqs;
                _this.original_info = result.success.faqs;
                console.log(_this.information);
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
    HelpPage.prototype.setFilteredItems = function () {
        this.information = this.filterItems(this.searchTerm);
    };
    HelpPage.prototype.filterItems = function (searchTerm) {
        return this.original_info.filter(function (item) {
            return item.answer.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.question.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    HelpPage.prototype.change = function () {
        if (this.icon_name == 'add') {
            this.icon_name = 'remove';
        }
        else {
            this.icon_name = 'add';
        }
    };
    HelpPage.prototype.changeTab = function (TabNo) {
        this.showDiv = TabNo;
    };
    HelpPage.prototype.addSuggestion = function (msg) {
        var _this = this;
        if (msg == '') {
            this.data.presentToast('Please add your suggestion!');
            return false;
        }
        var param = new FormData();
        param.append("suggestion", msg);
        this.data.addSuggestion(param).subscribe(function (result) {
            console.log(result);
            //this.userData = result; 
            //loader.dismiss();   
            if (result.status == "ERROR") {
                _this.data.presentToast(result.error.email);
                return false;
            }
            else {
                //this.storage.set("customer_data",data.msg[0]);
                _this.data.presentToast('Suggestion added successfully Successfully!');
                //this.navCtrl.setRoot('');  
                _this.msg = '';
            }
        });
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\help\help.html"*/'<!--\n\n  Generated template for the HelpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Help</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf=\'showDiv == 1\'>\n\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n\n\n\n    <ion-card class=\'faqs\' *ngFor="let item of information; let i = index">\n\n        <ion-list>\n\n          <ion-item>\n\n              <button class="questions" text-wrap ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n                <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n                <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n                    {{ item.question }}\n\n              </button>\n\n          </ion-item>\n\n          <ion-item class=\'answers\' *ngIf="item.open" text-wrap>      \n\n              {{item.answer}}\n\n          </ion-item>\n\n      </ion-list>\n\n    </ion-card> \n\n  </div>\n\n\n\n\n\n  <div *ngIf=\'showDiv == 2\'>\n\n    <ion-card class=\'faqs\' *ngFor="let item of information; let i = index">\n\n        <ion-list>\n\n          <ion-item>\n\n              <button class="questions" text-wrap ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n                <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n                <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n                    {{ item.question }}\n\n              </button>\n\n          </ion-item>\n\n          <ion-item class=\'answers\' *ngIf="item.open" text-wrap>      \n\n              {{item.answer}}\n\n          </ion-item>\n\n      </ion-list>\n\n    </ion-card> \n\n  </div>\n\n\n\n\n\n  <div *ngIf=\'showDiv == 3\'>\n\n    <h2 class="suggestion_title">Have thoughts? We\'re listening...</h2>\n\n    <ion-card class=\'suggestions\'>\n\n        <ion-list>\n\n          <ion-item>     \n\n            <ion-textarea text-wrap [(ngModel)]="msg"></ion-textarea>\n\n          </ion-item>\n\n      </ion-list>\n\n    </ion-card>      \n\n      <button class="suggestion-btn" ion-button color="primary" block (click)=\'addSuggestion(msg)\'>Done</button>\n\n  </div>\n\n    \n\n\n\n\n\n    <!--<ion-card>\n\n      <ion-row class="first-row">\n\n        <ion-col col-1><ion-icon [name]="icon_name" (click)="change()"></ion-icon></ion-col>\n\n        <ion-col col-11>\n\n          <span>Is the first question?</span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="icon_name == \'remove\'?true:false">\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-11>\n\n          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>-->\n\n\n\n\n\n</ion-content>\n\n  <div class="last_div">  \n\n    <div class="inner_last_div">\n\n      <div class = "tabs-striped tabs-background-positive tabs-color-light">\n\n        <div class = "tabs">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-4 (click)=\'changeTab("1")\'>\n\n                  <a class = "tab-item">\n\n                      FAQ\n\n                   </a>\n\n              </ion-col>\n\n              <ion-col col-4 (click)=\'changeTab("2")\'>\n\n                  <a class = "tab-item active">\n\n                      Help\n\n                    </a>\n\n              </ion-col>\n\n              <ion-col col-4 (click)=\'changeTab("3")\'>\n\n                  <a class = "tab-item">\n\n                      Suggestions\n\n                   </a>\n\n             </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n           \n\n\n\n        </div>\n\n     </div>\n\n    </div>    \n\n  </div>     '/*ion-inline-end:"E:\transportApp28082018\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        /* this.mainPage = {
           homePage : SigninPage
         }*/
        this.last_slide = 0;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.gotoNav = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    IntroPage.prototype.getNext = function () {
        if (this.slider.isEnd()) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
        }
        else {
            this.slider.slideNext();
            if (this.slider.isEnd()) {
                this.last_slide = 1;
            }
            else if (this.slider.isBeginning()) {
                this.last_slide = 0;
            }
            else {
                this.last_slide = 2;
            }
        }
    };
    IntroPage.prototype.getPrev = function () {
        this.slider.slidePrev();
        if (this.slider.isBeginning()) {
            this.last_slide = 0;
        }
    };
    IntroPage.prototype.skip = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('slides'),
        __metadata("design:type", Object)
    ], IntroPage.prototype, "slider", void 0);
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\intro\intro.html"*/'<!--\n\n  Generated template for the IntroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Intro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content >\n\n    <!--<ion-slides  pager="true" autoplay="4000" speed="2000">-->\n\n        <ion-slides  pager="true" #slides>\n\n        <ion-slide >\n\n          <div class="slider-1-img">\n\n              <img src="assets/imgs/taxi.png" />\n\n          </div>\n\n          <div text-center class="slider-1-content">\n\n              <h2>Plan a Trip</h2>\n\n              <p>Choose your pickup and drop location. Choose cab of your choice, we have car for everything. Ride now or later.</p>\n\n          </div>\n\n        </ion-slide>\n\n        <ion-slide >\n\n            <div class="slider-2-img">\n\n                <img src="assets/imgs/taxi-driver.png" />\n\n            </div>\n\n            <div text-center class="slider-1-content">\n\n                <h2>Near By Driver</h2>\n\n                <p>Select near by driver of your pickup location. We give you the best price. We guaranteed!</p>\n\n            </div>\n\n        </ion-slide>\n\n        <ion-slide >\n\n            <div class="slider-3-img">\n\n                <img src="assets/imgs/payment-method.png" />\n\n            </div>\n\n            <div text-center class="slider-1-content">\n\n                <h2>Secure Payment</h2>\n\n                <p>Do your payment as per your convenient. Pay in Cash or Wallet at departure.</p>\n\n              </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n</ion-content>\n\n<ion-footer>\n\n\n\n        <button  ion-button icon-only clear (click)="skip()" class="arrow-back">SKIP<!--<ion-icon name="arrow-back"></ion-icon>--></button>\n\n    <!-- <button *ngIf=\'last_slide==2 || last_slide==1\' ion-button icon-only clear (click)="getPrev()" class="arrow-back">Prev<ion-icon name="arrow-back"></ion-icon></button> -->\n\n    \n\n    <button *ngIf=\'last_slide!=1\' ion-button icon-only clear (click)="getNext()" class="arrow-forward">NEXT<!--<ion-icon name="arrow-forward"></ion-icon>--></button>\n\n    <button *ngIf=\'last_slide==1\' ion-button icon-only clear (click)="getNext()" class="arrow-forward">DONE<!--<ion-icon name="arrow-forward"></ion-icon>--></button>\n\n</ion-footer>\n\n     '/*ion-inline-end:"E:\transportApp28082018\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_google_maps_google_maps__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, geolocation, zone, maps, platform, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.zone = zone;
        this.maps = maps;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.query = '';
        this.places = [];
        this.searchDisabled = true;
        this.saveDisabled = true;
    }
    /*ionViewDidLoad() {
      console.log('ionViewDidLoad MapPage');
    }
  
    ionViewDidEnter(){
      //Set latitude and longitude of some place
      /*this./
  
      this.geolocation.getCurrentPosition().then((position) => {
   
          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     
          let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          
         this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
         this.addMarker();
        }, (err) => {
          console.log(err);
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
     
    }*/
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(function () {
            _this.autocompleteService = new google.maps.places.AutocompleteService();
            _this.searchDisabled = false;
        });
    };
    MapPage.prototype.selectPlace = function (place) {
        var _this = this;
        this.places = [];
        var location = {
            lat: null,
            lng: null,
            name: place.name
        };
        this.placesService = new google.maps.places.PlacesService(this.maps.map);
        this.placesService.getDetails({ placeId: place.place_id }, function (details) {
            _this.zone.run(function () {
                location.name = details.name;
                location.lat = details.geometry.location.lat();
                location.lng = details.geometry.location.lng();
                _this.saveDisabled = false;
                _this.maps.map.setCenter({ lat: location.lat, lng: location.lng });
                _this.location = location;
            });
        });
    };
    MapPage.prototype.searchPlace = function () {
        var _this = this;
        this.saveDisabled = true;
        if (this.query.length > 0 && !this.searchDisabled) {
            var config = {
                types: ['geocode'],
                input: this.query
            };
            this.autocompleteService.getPlacePredictions(config, function (predictions, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                    _this.places = [];
                    predictions.forEach(function (prediction) {
                        _this.places.push(prediction);
                    });
                }
            });
        }
        else {
            this.places = [];
        }
    };
    MapPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.location);
    };
    MapPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('pleaseConnect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MapPage.prototype, "pleaseConnect", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\map\map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar color="sideMenu" hideBackButton>\n\n    <button ion-button menuToggle >\n\n      <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n\n    </button>\n\n    <ion-title>Map</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div id=\'map\'></div>\n\n</ion-content>-->\n\n\n\n\n\n\n\n\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons left>\n\n            <button ion-button (click)="close()">Cancel</button>\n\n        </ion-buttons>\n\n        <ion-buttons right>\n\n            <button [disabled]="saveDisabled" ion-button (click)="save()">Save</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n \n\n    <ion-toolbar>\n\n        <ion-searchbar [(ngModel)]="query" (ionInput)="searchPlace()"></ion-searchbar>\n\n    </ion-toolbar>\n\n \n\n    <ion-list>\n\n        <ion-item *ngFor="let place of places" (touchstart)="selectPlace(place)">{{place.description}}</ion-item>\n\n    </ion-list>\n\n \n\n</ion-header>\n\n \n\n<ion-content>\n\n \n\n    <div #pleaseConnect id="please-connect">\n\n        <p>Please connect to the Internet...</p>\n\n    </div>\n\n \n\n    <div #map id="map">\n\n        <ion-spinner></ion-spinner>\n\n    </div>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentwalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_paypal__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PaymentwalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentwalletPage = /** @class */ (function () {
    function PaymentwalletPage(alertCtrl, payPal, navCtrl, navParams, data, storage) {
        this.alertCtrl = alertCtrl;
        this.payPal = payPal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
    }
    PaymentwalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentwalletPage');
    };
    PaymentwalletPage.prototype.pay = function () {
        var _this = this;
        this.getAmount().then(function (data) {
            var amount = data.toString();
            _this.payPal.init({
                PayPalEnvironmentProduction: 'ATyecYC9QulZbd0Gd3-6EU-qwJtm_-wATZpWp0tll2Hu2eosdhr-gDK1kyh2odnEkamuRoUPWUuHflMK',
                PayPalEnvironmentSandbox: 'AWTTT5V870I-5KsL8D3pR8wu6dTF0r3cEa-zpqI9YCK33AEfUedvxXOegKfmUdM_ofYR4a247R8h7s8S'
            }).then(function () {
                // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_2__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                    var payment = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_paypal__["c" /* PayPalPayment */](amount, 'USD', 'Top-up Given amount into customer wallet', 'Top-up');
                    _this.payPal.renderSinglePaymentUI(payment).then(function () {
                        //console.log(payment)
                        //alert(JSON.stringify(payment));
                        _this.data.presentToast('Payment Successfull!');
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
                    }, function () {
                        // Error or render dialog closed without being successful
                    });
                }, function () {
                    // Error in configuration
                });
            }, function () {
                // Error in initialization, maybe PayPal isn't supported or something else
            });
        });
    };
    PaymentwalletPage.prototype.getAmount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var prompt = _this.alertCtrl.create({
                title: 'Top-Up Amount',
                message: "Enter Top-Up amount",
                enableBackdropDismiss: false,
                inputs: [
                    {
                        name: 'amount',
                        placeholder: "e.g. - 200"
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            console.log(data);
                            _this.data.presentToast('Please add amount Top-Up.');
                            prompt.dismiss();
                            return false;
                        }
                    },
                    {
                        text: 'Procced',
                        handler: function (data) {
                            console.log(data);
                            prompt.dismiss().then(function () { resolve(data.amount); });
                            //resolve(data.name);
                            return false;
                        }
                    }
                ]
            });
            prompt.present();
        });
    };
    PaymentwalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-paymentwallet',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\paymentwallet\paymentwallet.html"*/'<!--\n  Generated template for the PaymentwalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>My Wallet</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="walletBalanceDiv">\n    <img src="../../assets/imgs/wallet.png" height="44px" />\n    <h2>\n      Your Balance\n    </h2>\n    <h1>\n      $20,578\n    </h1>\n  </div>\n\n  <div>\n    <!--<h2 class="transactionHead">Transaction Details</h2>\n    <ion-list>\n      <ion-item class="transactionList">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2>\n              <ion-icon name="phone-portrait"></ion-icon>\n            </ion-col>\n            <ion-col col-8>\n              New iPhone 6s 64GB\n            </ion-col>\n            <ion-col col-2>\n              $749\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>-->\n\n    <form>\n      <ion-grid>\n        <ion-row>\n          <!--<ion-col col-12>\n              <ion-row>\n                  <ion-col col-12>\n                      <ion-input type="text" placeholder="Card Number"></ion-input>\n                  </ion-col>\n                </ion-row>\n          </ion-col>\n          <ion-col col-12>\n              <ion-row>\n                  <ion-col col-12>\n                      <ion-input type="text" placeholder="Card Holder\'s Name"></ion-input>\n                  </ion-col>\n              </ion-row>\n          </ion-col>\n          <ion-col col-12>\n            <ion-row>\n                <ion-col col-6>\n                  <ion-row>\n                      <ion-col col-6>\n                        <ion-input placeholder=\'mm\'></ion-input>\n                      </ion-col>\n                      <ion-col col-6>\n                        <ion-input placeholder=\'yyyy\'></ion-input>\n                      </ion-col>\n                  </ion-row>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-row>\n                      <ion-col col-12>\n                          <ion-input placeholder=\'cvv\'></ion-input>\n                      </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row> \n          </ion-col>-->\n          <button class="login-btn" ion-button color="primary" block (click)="pay()">Top Up</button>\n        </ion-row>\n      </ion-grid>\n      \n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\paymentwallet\paymentwallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_paypal__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PaymentwalletPage);
    return PaymentwalletPage;
}());

//# sourceMappingURL=paymentwallet.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var SettingsPage = /** @class */ (function () {
    function SettingsPage(alertCtrl, loading, eve, navCtrl, modalCtrl, storage, data, geolocation, navParams, zone, maps, platform, viewCtrl) {
        //this.searchDisabled = true;
        //this.saveDisabled = true;
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.eve = eve;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.data = data;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.zone = zone;
        this.maps = maps;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.homelocation = '';
        this.worklocation = '';
        this.otherlocations = '';
        this.showmainpage = true;
        this.showlocation = false;
        this.showdrivers = false;
        this.showNotifications = false;
        //let param = new FormData();
        // param.append("location_type",act); 
        this.hideBackButton = false;
        var loader = this.loading.create({
            content: "Please wait...",
            spinner: 'bubbles'
        });
        loader.present();
        this.data.getCustomerFavLocation().subscribe(function (result) {
            if (result.status == "OK") {
                _this.fav_locations = result.success.favlocations;
                _this.getHomelocation(_this.fav_locations).then(function (data) {
                    _this.homelocation = data;
                });
                _this.getWorklocation(_this.fav_locations).then(function (data) {
                    _this.worklocation = data;
                });
                _this.getOtherlocation(_this.fav_locations).then(function (data) {
                    _this.otherlocations = data;
                });
            }
        });
        this.data.getFavDrivers().subscribe(function (result) {
            console.log(result);
            if (result.status == "OK") {
                //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                _this.fav_drivers = result.success.favdrivers;
            }
        });
        loader.dismiss();
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.movetoFavlocations = function () {
        this.hideBackButton = true;
        this.showmainpage = false;
        this.showlocation = true;
    };
    SettingsPage.prototype.movetoFavdrivers = function () {
        this.hideBackButton = true;
        this.showmainpage = false;
        this.showdrivers = true;
    };
    SettingsPage.prototype.movetoNotifications = function () {
        this.hideBackButton = true;
        this.showmainpage = false;
        this.showNotifications = true;
    };
    SettingsPage.prototype.goBack = function () {
        this.hideBackButton = false;
        this.showmainpage = true;
        this.showlocation = false;
        this.showdrivers = false;
        this.showNotifications = false;
    };
    SettingsPage.prototype.getHomelocation = function (locations) {
        return new Promise(function (resolve, reject) {
            locations.forEach(function (element) {
                if (element.location_type == 'home') {
                    resolve(element);
                }
            });
        });
    };
    SettingsPage.prototype.getWorklocation = function (locations) {
        return new Promise(function (resolve, reject) {
            locations.forEach(function (element) {
                if (element.location_type == 'work') {
                    resolve(element);
                }
            });
        });
    };
    SettingsPage.prototype.getOtherlocation = function (locations) {
        return new Promise(function (resolve, reject) {
            var loc = [];
            locations.forEach(function (element) {
                if (element.location_type != 'home' && element.location_type != 'work') {
                    loc.push(element);
                }
                /* else{
                   loc.push(element);
                 }*/
            });
            resolve(loc);
        });
    };
    SettingsPage.prototype.addAddr = function (act) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modal, me;
            return __generator(this, function (_a) {
                modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__["a" /* AutocompletePage */], { action: act });
                me = this;
                modal.onDidDismiss(function (data) {
                    if (data) {
                        var param_1 = new FormData();
                        if (act != 'home' && act != 'work') {
                            param_1.append("location", data);
                            _this.getLocationType().then(function (loc) {
                                if (loc) {
                                    param_1.append("location_type", loc.toString());
                                    _this.geocodeAddress(data).then(function (data) {
                                        var lat = data[0];
                                        var lng = data[1];
                                        param_1.append("latitude", lat);
                                        param_1.append("longitude", lng);
                                        _this.data.addCustomerFavLocation(param_1).subscribe(function (result) {
                                            console.log(result);
                                            if (result.status == "OK") {
                                                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                                            }
                                        });
                                    });
                                }
                            });
                        }
                        else {
                            param_1.append("location", data);
                            param_1.append("location_type", act);
                            _this.geocodeAddress(data).then(function (data) {
                                var lat = data[0];
                                var lng = data[1];
                                param_1.append("latitude", lat);
                                param_1.append("longitude", lng);
                                _this.data.addCustomerFavLocation(param_1).subscribe(function (result) {
                                    console.log(result);
                                    if (result.status == "OK") {
                                        _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                                    }
                                });
                            });
                        }
                    }
                });
                modal.present();
                return [2 /*return*/];
            });
        });
    };
    SettingsPage.prototype.removeAddr = function (id) {
        var _this = this;
        var param = new FormData();
        param.append("location_id", id);
        this.data.removeCustomerFavLocation(param).subscribe(function (result) {
            if (result.status == "OK") {
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
        });
        //}
        /*else{
          
        }*/
    };
    SettingsPage.prototype.geocodeAddress = function (address) {
        //var address = document.getElementById('address').value;
        return new Promise(function (resolve, reject) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var loc = [results[0].geometry.location.lat(), results[0].geometry.location.lng()];
                    resolve(loc);
                }
                else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
    };
    SettingsPage.prototype.getLocationType = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var prompt = _this.alertCtrl.create({
                title: 'Set Location Name',
                message: "Set name for location to save place",
                enableBackdropDismiss: false,
                inputs: [
                    {
                        name: 'name',
                        placeholder: "e.g. - Joe's Home"
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            console.log(data);
                            _this.data.presentToast('Please add Location name to save as favorite location');
                            prompt.dismiss();
                            return false;
                        }
                    },
                    {
                        text: 'Save',
                        handler: function (data) {
                            console.log(data);
                            if (data.name == 'Home' || data.name == 'home' || data.name == 'work' || data.name == 'Work') {
                                _this.data.presentToast('You can not add Home and work as additional favorite locations.');
                            }
                            else {
                                prompt.dismiss().then(function () { resolve(data.name); });
                                //resolve(data.name);
                                return false;
                            }
                        }
                    }
                ]
            });
            prompt.present();
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n   <ion-navbar color="sideMenu" hideBackButton="{{hideBackButton}}">   \n\n    <button ion-button menuToggle >\n\n        <ion-icon name="arrow-back"></ion-icon>     \n\n    </button>\n\n    <ion-title>\n\n        Settings\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div *ngIf="showmainpage == true">\n\n      <ion-list class="set_list">\n\n        <ion-item (click)="movetoFavlocations()">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-3>\n\n                <img class="list_item_icon" src="assets/imgs/s_placeholder.png"/>\n\n              </ion-col>\n\n              <ion-col col-9>\n\n                Favorite Locations\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-item>\n\n\n\n        <ion-item (click)="movetoFavdrivers()">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-3>\n\n                <img class="list_item_icon" src="assets/imgs/s_user.png"/>\n\n              </ion-col>\n\n              <ion-col col-9>\n\n                Favorite Drivers\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-item>\n\n\n\n        <ion-item (click)="movetoNotifications()">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-3>\n\n                <img class="list_item_icon" src="assets/imgs/s_notification.png"/>\n\n              </ion-col>\n\n              <ion-col col-9>\n\n                Notifications\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n   \n\n\n\n  <div *ngIf="showlocation == true">\n\n    <ion-item class="setting_label">\n\n      <ion-label>Favorite Places</ion-label>\n\n    </ion-item>\n\n    <div class="favlocDiv">\n\n      <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1 text-center>\n\n              <ion-icon class="setting_icons" name="home"></ion-icon>\n\n            </ion-col>\n\n            <ion-col class="setting_title" col-11>\n\n              <h3 *ngIf="homelocation == \'\'" (click)="addAddr(\'home\')">Add Home</h3>\n\n              <h3 *ngIf="homelocation != \'\'" (click)="addAddr(\'home\')">Home</h3>\n\n              <span *ngIf="homelocation != \'\'">\n\n                {{homelocation?.location}}\n\n                <p class="delete_op" (click)="removeAddr(homelocation?.id)">Delete</p>\n\n              </span>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1 text-center>\n\n              <ion-icon class="setting_icons" name="briefcase"></ion-icon>\n\n            </ion-col>\n\n            <ion-col class="setting_title" col-11>\n\n              <h3 *ngIf="worklocation == \'\'" (click)="addAddr(\'work\')">Add Work</h3>\n\n              <h3 *ngIf="worklocation != \'\'" (click)="addAddr(\'work\')">Work</h3>\n\n              <span *ngIf="worklocation != \'\'">\n\n                {{worklocation?.location}}\n\n                <p class="delete_op" (click)="removeAddr(worklocation?.id)">Delete</p>     \n\n              </span>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        \n\n\n\n        <ion-grid  *ngFor="let item of otherlocations; let i = index">\n\n          <ion-row>\n\n            <ion-col col-1 text-center>\n\n              <ion-icon class="setting_icons" name="star"></ion-icon>\n\n            </ion-col>\n\n            <ion-col class="setting_title" col-11>\n\n              <h3>{{item?.location_type}}</h3>\n\n              <span>\n\n                {{item?.location}}\n\n                <p class="delete_op" (click)="removeAddr(item?.id)">Delete</p>     \n\n              </span>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n        <ion-grid (click)="addAddr(\'other\')" class="addLocGrid">\n\n          <ion-row>\n\n            <ion-col col-1 text-center>\n\n              <ion-icon class="setting_icons" name="add"></ion-icon>\n\n            </ion-col>\n\n            <ion-col class="setting_title" col-11>\n\n              <h3>Add another favorite places</h3>\n\n              <span>Get to your Favorite Destinations faster</span>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="showdrivers == true">\n\n    <ion-item class="setting_label">\n\n      <ion-label>Favorite Drivers</ion-label>\n\n    </ion-item>\n\n    <div class="favDriverDiv">\n\n      <ion-grid *ngFor="let item of fav_drivers; let i = index">\n\n        <ion-row>\n\n          <ion-col>\n\n            <h2>{{item.first_name}} {{item.last_name}}</h2>\n\n            <span>{{item.email}}</span>\n\n            <span>{{item.phone}}</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n<div *ngIf="showmainpage != true" class="last_div" (click)="goBack()">  \n\n    <div class="inner_last_div">\n\n      <p><ion-icon name="arrow-back"></ion-icon> Go Back </p>\n\n    </div>\n\n</div> '/*ion-inline-end:"E:\transportApp28082018\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* ViewController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ride_now_ride_now__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ride_later_ride_later__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modalpage_modalpage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DeliveryPage = /** @class */ (function () {
    function DeliveryPage(oneSignal, ht, actionSheetCtrl, eve, navCtrl, modalCtrl, storage, data, geolocation, navParams, zone, maps, platform, viewCtrl) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.ht = ht;
        this.actionSheetCtrl = actionSheetCtrl;
        this.eve = eve;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.data = data;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.zone = zone;
        this.maps = maps;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.query = '';
        this.dest_query = '';
        this.places = [];
        this.dest_places = [];
        this.vehicle_type = '';
        this.marker = [];
        this.selectdId = '';
        this.searchDisabled = true;
        this.saveDisabled = true;
        this.active = '';
        this.calculated_distance = '0 km';
        this.vehicle_types = ['', '', ''];
        this.action = {
            pickup: 'pickup',
            drop: 'drop'
        };
        this.cost = {
            economy_cost: 0,
            comfort_cost: 0,
            business_cost: 0
        };
        this.address = {
            place: '',
            drop_place: ''
        };
        this.storage.get('user').then(function (data) {
            var id = data[0].id;
            _this.role = data[0].role;
            _this.oneSignal.sendTag('user_id', id);
        });
        this.storage.get('token')
            .then(function (data) {
            _this.data.token = data;
        });
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.lat = position.coords.latitude;
            _this.long = position.coords.longitude;
        });
        eve.subscribe('distance:created', function (distance, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.calculated_distance = distance;
            var param = new FormData();
            var x = _this.calculated_distance.split("km");
            param.append("distance", x[0]);
            _this.data.getCost(param).subscribe(function (result) {
                if (result.status == "ERROR") {
                    _this.data.presentToast('eRROR');
                    return false;
                }
                else {
                    _this.cost = {
                        economy_cost: result.success.trip_costs[0].cost,
                        comfort_cost: result.success.trip_costs[1].cost,
                        business_cost: result.success.trip_costs[2].cost
                    };
                }
            });
        });
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.lat = position.coords.latitude;
            _this.long = position.coords.longitude;
        });
        setTimeout(function () {
            var addressFull = [];
            var address = '';
            var geocoder = new google.maps.Geocoder();
            if (_this.lat && _this.long) {
                var latlng = { lat: parseFloat(_this.lat), lng: parseFloat(_this.long) };
                geocoder.geocode({ 'location': latlng }, function (results, status) {
                    if (status === 'OK') {
                        var address = results[0].formatted_address;
                        addressFull.push(address);
                    }
                });
                setTimeout(function () {
                    _this.address.place = addressFull[0];
                }, 100);
            }
        }, 2500);
    }
    DeliveryPage.prototype.updateActive = function (name) {
        this.active = name;
    };
    DeliveryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(function () {
            _this.autocompleteService = new google.maps.places.AutocompleteService();
            _this.searchDisabled = false;
        });
    };
    DeliveryPage.prototype.showAddressModal = function (act) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__["a" /* AutocompletePage */], { action: act });
        var me = this;
        this.ionViewDidLoad();
        modal.onDidDismiss(function (data) {
            if (act == 'pickup') {
                if (data) {
                    _this.address.place = data;
                }
                // this.getgeocodeAddress(this.address.place);
            }
            else {
                if (data) {
                    _this.address.drop_place = data;
                }
            }
            if (_this.address.place && _this.address.drop_place) {
                _this.maps.startNavigating(_this.address.place, _this.address.drop_place, _this.directionsPanel.nativeElement);
                _this.display_vehicleTypes = 1;
            }
        });
        modal.present();
    };
    DeliveryPage.prototype.selectVehicle = function (selected_vehicle_type, selected_cost) {
        var _this = this;
        //this.animator.setType('flipInX').show(this.myElem.nativeElement);
        this.vehicle_type = selected_vehicle_type;
        this.selected_cost = selected_cost;
        var param = new FormData();
        param.append("latitude", this.lat);
        param.append("longitude", this.long);
        this.data.getCloseDrivers(param).subscribe(function (result) {
            if (result.status == "ERROR") {
                _this.data.presentToast('eRROR');
                return false;
            }
            else {
                if (result.success.drivers[0]) {
                    _this.data.presentToast('Closer Drivers!');
                    var addressFull = [];
                    var address = [];
                    for (var i = 0; i < result.success.drivers.length; i++) {
                        var geocoder = new google.maps.Geocoder();
                        address[i] = [];
                        address[i]['lat'] = result.success.drivers[i].latitude;
                        address[i]['lng'] = result.success.drivers[i].longitude;
                        _this.addMarker(address[i]['lat'], address[i]['lng'], result.success.drivers[i]);
                    }
                }
                else {
                    _this.data.presentToast('No Nearby Drivers!');
                }
            }
        });
    };
    DeliveryPage.prototype.addMarker = function (lt, lg, driver) {
        this.marker = new google.maps.Marker({
            map: this.maps.map,
            position: new google.maps.LatLng(lt, lg),
            icon: { url: 'assets/imgs/automobile.png',
                size: {
                    width: 64,
                    height: 55
                }
            },
            animation: google.maps.Animation.DROP
        });
        //var addressFull = [];
        //var driver_address = '';
        //var geocoder = new google.maps.Geocoder();
        //var latlng = {lat: parseFloat(driver.latitude), lng: parseFloat(driver.longitude)};
        //return new Promise((resolve) => { 
        /* geocoder.geocode({'location': latlng}, function(results, status) {
             if (status === 'OK') {
               var address = results[0].formatted_address;
               addressFull.push(address);
             }
           });
          await this.timeout(100);
             //setTimeout(() => {
               driver_address = addressFull[0];
               console.log('driver_address==>'+driver_address);
            // }, 100);*/
        // }
        var content = "<ion-item id='info_action'><div style='float:left'><img class='info_avtar' src='assets/imgs/img1.png'></div><div class='info_info'><h6>" + driver.first_name + ' ' + driver.last_name + "</h6><p class='rating_p'>Rating : 4.5</p><p class='arrival_p'>Arrives In : " + this.getDuration(driver) + "</p></div></ion-item>";
        this.addInfoWindow(this.marker, content, driver.id);
        //});
    };
    DeliveryPage.prototype.getDuration = function (driver) {
        var directionsService = new google.maps.DirectionsService;
        var duration = '';
        //if(driver_address && driver_address != ''){
        directionsService.route({
            origin: {
                lat: Number(this.lat),
                lng: Number(this.long)
            },
            destination: {
                lat: Number(driver.latitude),
                lng: Number(driver.longitude)
            },
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            console.log('demodemo' + res);
            if (status == google.maps.DirectionsStatus.OK) {
                var route = res.routes[0];
                console.log('route123==>' + route.legs[0]);
                duration = route.legs[0].duration.text;
                console.log('durationduration===>' + duration);
                return duration;
            }
            else {
                console.log('route123==>errrrr');
                return '';
            }
        });
    };
    DeliveryPage.prototype.addInfoWindow = function (marker, content, did) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
            document.getElementById('info_action').addEventListener('click', function () {
                //this.closeInfoViewWindow(infoWindow);
                _this.showSelectDriverModal(did);
            });
        });
    };
    DeliveryPage.prototype.rideNow = function (dist, selected_vehicle_type) {
        if (this.address.place != '' && this.address.drop_place != '' && this.vehicle_type != '' && this.selectdId != '') {
            var param = void 0;
            //this.getLoc(this.address.place);
            param = {
                'distance': dist,
                'vehicle_type': this.vehicle_type,
                'pick_up': this.address.place,
                'drop': this.address.drop_place,
                'cost': this.selected_cost,
                'Did': this.selectdId
            };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ride_now_ride_now__["a" /* RideNowPage */], { param: param });
        }
        else {
            this.data.presentToast('Please select pickup and drop locations, Vehicle Type and Nearby Driver!');
        }
    };
    DeliveryPage.prototype.rideLater = function (dist, selected_vehicle_type) {
        if (this.address.place != '' && this.address.drop_place != '' && this.vehicle_type != '' && this.selectdId != '') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__ride_later_ride_later__["a" /* RideLaterPage */], { distance: dist, vehicle_type: selected_vehicle_type });
        }
        else {
            this.data.presentToast('Please select pickup and drop locations, Vehicle Type and Nearby Driver!');
        }
    };
    DeliveryPage.prototype.getLoc = function (addr) {
        var addressFull = [];
        var address = '';
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': addr }, function (results, status) {
            if (status === 'OK') {
                var lt = results[0].geometry.bounds['f'].kd;
                var lg = results[0].geometry.bounds['b'].gd;
            }
        });
        setTimeout(function () {
            // this.address.place = addressFull[0];
        }, 100);
    };
    DeliveryPage.prototype.showSelectDriverModal = function (did) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__modalpage_modalpage__["a" /* ModalpagePage */], { modalAct: 'driverInfo', driverId: did });
        var me = this;
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.selectdId = data;
                var param = new FormData();
                param.append("select_driver_Id", _this.selectdId);
                _this.data.postNotification(param).subscribe(function (result) {
                    if (result.status == "ERROR") {
                    }
                });
            }
            else {
                _this.selectdId = '';
            }
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DeliveryPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('pleaseConnect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DeliveryPage.prototype, "pleaseConnect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('directionsPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DeliveryPage.prototype, "directionsPanel", void 0);
    DeliveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-delivery',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\delivery\delivery.html"*/'<!--\n  Generated template for the DeliveryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="sideMenu" hideBackButton>\n    <button ion-button menuToggle >\n      <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n    </button>\n    <ion-title>Book a Delivery</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="home-content">\n  <div #pleaseConnect id="please-connect">\n    <p>Please connect to the Internet...</p>\n  </div>\n\n  <ion-card class="directionsPanel">\n      <ion-card-content>\n          <div #directionsPanel></div>\n      </ion-card-content>\n  </ion-card>\n\n  <div #map id="map">\n      <ion-spinner></ion-spinner>\n  </div>\n  \n  <ion-card *ngIf=\'role == 2\' class="card-content">  \n      <ion-list no-lines>\n        <ion-item (click)="showAddressModal(action.pickup)">\n            <ion-icon item-start ios="md-navigate" md="md-navigate"></ion-icon>\n            <ion-label stacked>Pickup Location</ion-label>\n            <ion-input [(ngModel)]="address.place" type="text" disabled ></ion-input>\n        </ion-item>\n        <ion-item (click)="showAddressModal(action.drop)">\n            <ion-icon item-start ios="md-pin" md="md-pin"></ion-icon>\n            <ion-label stacked>Drop Off Location</ion-label>\n            <ion-input [(ngModel)]="address.drop_place" type="text" disabled ></ion-input>\n        </ion-item>\n        <div #distance id="distance">\n           {{calculated_distance}}\n        </div>\n      </ion-list>   \n    </ion-card>\n</ion-content>\n<div *ngIf=\'role == 2\' class="last_div">  \n  <div *ngIf=\'display_vehicleTypes==1\' class="type_btn_div">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <button class="type_btn" [ngClass]="active === \'economy\' ? \'active_payment\' : \'\'" (click)="updateActive(\'economy\')" (click)=\'selectVehicle(vehicle_types[0].type,cost.economy_cost)\'>\n            <img src="assets/imgs/img3.png" />\n            <p>{{vehicle_types[0].type}}</p>\n            <div class="appx_cost">${{cost.economy_cost}} Appx.</div>\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button class="type_btn" [ngClass]="active === \'comfort\' ? \'active_payment\' : \'\'" (click)="updateActive(\'comfort\')" (click)=\'selectVehicle(vehicle_types[1].type,cost.comfort_cost)\'>\n            <img src="assets/imgs/img2.png" />\n            <p>{{vehicle_types[1].type}}</p>\n            <div class="appx_cost">${{cost.comfort_cost}} Appx.</div>\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button class="type_btn" [ngClass]="active === \'business\' ? \'active_payment\' : \'\'" (click)="updateActive(\'business\')" (click)=\'selectVehicle(vehicle_types[2].type,cost.business_cost)\'>\n            <img src="assets/imgs/img1.png" />\n            <p>{{vehicle_types[2].type}}</p>\n            <div class="appx_cost">${{cost.business_cost}} Appx.</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>   \n  <div class="inner_last_div">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 class="ride_now" (click)=\'rideNow(calculated_distance,vehicle_type)\'><p>Deliver Now</p></ion-col>\n        <ion-col col-6 class="ride_later" (click)=\'rideLater(calculated_distance,vehicle_type)\'><p>Deliver Later</p></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div> \n'/*ion-inline-end:"E:\transportApp28082018\src\pages\delivery\delivery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* ViewController */]])
    ], DeliveryPage);
    return DeliveryPage;
}());

//# sourceMappingURL=delivery.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/autocomplete/autocomplete.module": [
		254
	],
	"../pages/booking-list/booking-list.module": [
		258
	],
	"../pages/bookinghistory/bookinghistory.module": [
		323
	],
	"../pages/confirm-payment/confirm-payment.module": [
		324
	],
	"../pages/customer-profile/customer-profile.module": [
		325
	],
	"../pages/driversetting/driversetting.module": [
		326
	],
	"../pages/edit-profile/edit-profile.module": [
		327
	],
	"../pages/emailverification/emailverification.module": [
		328
	],
	"../pages/feedback/feedback.module": [
		329
	],
	"../pages/forgotpasswoed/forgotpasswoed.module": [
		332
	],
	"../pages/help/help.module": [
		333
	],
	"../pages/intro/intro.module": [
		334
	],
	"../pages/map/map.module": [
		335
	],
	"../pages/modalpage/modalpage.module": [
		336
	],
	"../pages/password-reset/password-reset.module": [
		337
	],
	"../pages/payment/payment.module": [
		338
	],
	"../pages/paymentwallet/paymentwallet.module": [
		339
	],
	"../pages/ride-later/ride-later.module": [
		340
	],
	"../pages/ride-now/ride-now.module": [
		341
	],
	"../pages/settings/settings.module": [
		342
	],
	"../pages/signup/signup.module": [
		343
	],
	"../pages/upload-profile/upload-profile.module": [
		344
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 253;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompletePageModule", function() { return AutocompletePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autocomplete__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutocompletePageModule = /** @class */ (function () {
    function AutocompletePageModule() {
    }
    AutocompletePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__autocomplete__["a" /* AutocompletePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autocomplete__["a" /* AutocompletePage */]),
            ],
        })
    ], AutocompletePageModule);
    return AutocompletePageModule;
}());

//# sourceMappingURL=autocomplete.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingListPageModule", function() { return BookingListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_list__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingListPageModule = /** @class */ (function () {
    function BookingListPageModule() {
    }
    BookingListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */]),
            ],
        })
    ], BookingListPageModule);
    return BookingListPageModule;
}());

//# sourceMappingURL=booking-list.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectivityServiceProvider = /** @class */ (function () {
    function ConnectivityServiceProvider(platform, network) {
        this.platform = platform;
        this.network = network;
        this.onDevice = this.platform.is('cordova');
    }
    ConnectivityServiceProvider.prototype.isOnline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type != 'none';
        }
        else {
            return navigator.onLine;
        }
    };
    ConnectivityServiceProvider.prototype.isOffline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type == 'none';
        }
        else {
            return !navigator.onLine;
        }
    };
    ConnectivityServiceProvider.prototype.watchOnline = function () {
        return this.network.onConnect();
    };
    ConnectivityServiceProvider.prototype.watchOffline = function () {
        return this.network.onDisconnect();
    };
    ConnectivityServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], ConnectivityServiceProvider);
    return ConnectivityServiceProvider;
}());

//# sourceMappingURL=connectivity-service.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookinghistoryPageModule", function() { return BookinghistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookinghistory__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookinghistoryPageModule = /** @class */ (function () {
    function BookinghistoryPageModule() {
    }
    BookinghistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bookinghistory__["a" /* BookinghistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookinghistory__["a" /* BookinghistoryPage */]),
            ],
        })
    ], BookinghistoryPageModule);
    return BookinghistoryPageModule;
}());

//# sourceMappingURL=bookinghistory.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPaymentPageModule", function() { return ConfirmPaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_payment__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmPaymentPageModule = /** @class */ (function () {
    function ConfirmPaymentPageModule() {
    }
    ConfirmPaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_payment__["a" /* ConfirmPaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_payment__["a" /* ConfirmPaymentPage */]),
            ],
        })
    ], ConfirmPaymentPageModule);
    return ConfirmPaymentPageModule;
}());

//# sourceMappingURL=confirm-payment.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfilePageModule", function() { return CustomerProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_profile__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerProfilePageModule = /** @class */ (function () {
    function CustomerProfilePageModule() {
    }
    CustomerProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__customer_profile__["a" /* CustomerProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customer_profile__["a" /* CustomerProfilePage */]),
            ],
        })
    ], CustomerProfilePageModule);
    return CustomerProfilePageModule;
}());

//# sourceMappingURL=customer-profile.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversettingPageModule", function() { return DriversettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driversetting__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriversettingPageModule = /** @class */ (function () {
    function DriversettingPageModule() {
    }
    DriversettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driversetting__["a" /* DriversettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driversetting__["a" /* DriversettingPage */]),
            ],
        })
    ], DriversettingPageModule);
    return DriversettingPageModule;
}());

//# sourceMappingURL=driversetting.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailverificationPageModule", function() { return EmailverificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emailverification__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailverificationPageModule = /** @class */ (function () {
    function EmailverificationPageModule() {
    }
    EmailverificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__emailverification__["a" /* EmailverificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emailverification__["a" /* EmailverificationPage */]),
            ],
        })
    ], EmailverificationPageModule);
    return EmailverificationPageModule;
}());

//# sourceMappingURL=emailverification.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());

//# sourceMappingURL=feedback.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswoedPageModule", function() { return ForgotpasswoedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpasswoed__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotpasswoedPageModule = /** @class */ (function () {
    function ForgotpasswoedPageModule() {
    }
    ForgotpasswoedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgotpasswoed__["a" /* ForgotpasswoedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotpasswoed__["a" /* ForgotpasswoedPage */]),
            ],
        })
    ], ForgotpasswoedPageModule);
    return ForgotpasswoedPageModule;
}());

//# sourceMappingURL=forgotpasswoed.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalpagePageModule", function() { return ModalpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modalpage__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalpagePageModule = /** @class */ (function () {
    function ModalpagePageModule() {
    }
    ModalpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modalpage__["a" /* ModalpagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modalpage__["a" /* ModalpagePage */]),
            ],
        })
    ], ModalpagePageModule);
    return ModalpagePageModule;
}());

//# sourceMappingURL=modalpage.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function() { return PasswordResetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_reset__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordResetPageModule = /** @class */ (function () {
    function PasswordResetPageModule() {
    }
    PasswordResetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password_reset__["a" /* PasswordResetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_reset__["a" /* PasswordResetPage */]),
            ],
        })
    ], PasswordResetPageModule);
    return PasswordResetPageModule;
}());

//# sourceMappingURL=password-reset.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
            ],
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentwalletPageModule", function() { return PaymentwalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymentwallet__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentwalletPageModule = /** @class */ (function () {
    function PaymentwalletPageModule() {
    }
    PaymentwalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paymentwallet__["a" /* PaymentwalletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paymentwallet__["a" /* PaymentwalletPage */]),
            ],
        })
    ], PaymentwalletPageModule);
    return PaymentwalletPageModule;
}());

//# sourceMappingURL=paymentwallet.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideLaterPageModule", function() { return RideLaterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ride_later__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RideLaterPageModule = /** @class */ (function () {
    function RideLaterPageModule() {
    }
    RideLaterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ride_later__["a" /* RideLaterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ride_later__["a" /* RideLaterPage */]),
            ],
        })
    ], RideLaterPageModule);
    return RideLaterPageModule;
}());

//# sourceMappingURL=ride-later.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideNowPageModule", function() { return RideNowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ride_now__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RideNowPageModule = /** @class */ (function () {
    function RideNowPageModule() {
    }
    RideNowPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ride_now__["a" /* RideNowPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ride_now__["a" /* RideNowPage */]),
            ],
        })
    ], RideNowPageModule);
    return RideNowPageModule;
}());

//# sourceMappingURL=ride-now.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadProfilePageModule", function() { return UploadProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_profile__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadProfilePageModule = /** @class */ (function () {
    function UploadProfilePageModule() {
    }
    UploadProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upload_profile__["a" /* UploadProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upload_profile__["a" /* UploadProfilePage */]),
            ],
        })
    ], UploadProfilePageModule);
    return UploadProfilePageModule;
}());

//# sourceMappingURL=upload-profile.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customer_profile_customer_profile__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











/**
 * Generated class for the UploadProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadProfilePage = /** @class */ (function () {
    function UploadProfilePage(imagePicker, navParams, base64, navCtrl, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, data, storage) {
        var _this = this;
        this.imagePicker = imagePicker;
        this.navParams = navParams;
        this.base64 = base64;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.data = data;
        this.storage = storage;
        this.lastImage = null;
        this.imgPreview = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
        this.imgPreview = navParams.get('imgurl');
        this.storage.get('user').then(function (data) {
            //let param = data[0].id;
            _this.role = data[0].role;
        });
    }
    UploadProfilePage.prototype.captureImage = function (useAlbum) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var srcType, options, imageData, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (useAlbum == true) {
                            srcType = this.camera.PictureSourceType.CAMERA;
                        }
                        else {
                            srcType = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
                        }
                        options = {
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            sourceType: srcType
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        imageData = _a.sent();
                        console.log('imageData===>' + imageData);
                        this.avtarPath = 'data:image/jpg;base64,' + imageData;
                        param = new FormData();
                        param.append("image_file", this.avtarPath);
                        //this.photos.unshift(this.base64Image);
                        if (this.role == 2) {
                            this.data.updateCustomerAvtar(param).subscribe(function (result) {
                                if (result.status == "ERROR") {
                                    _this.data.presentToast('eRROR');
                                    return false;
                                }
                                else {
                                    _this.data.presentToast('Profile Updated Successfully!');
                                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__customer_profile_customer_profile__["a" /* CustomerProfilePage */]);
                                }
                            });
                        }
                        if (this.role == 3) {
                            this.data.updateDriverAvtar(param).subscribe(function (result) {
                                if (result.status == "ERROR") {
                                    _this.data.presentToast('eRROR');
                                    return false;
                                }
                                else {
                                    _this.data.presentToast('Profile Updated Successfully!');
                                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__customer_profile_customer_profile__["a" /* CustomerProfilePage */]);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-upload-profile',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\upload-profile\upload-profile.html"*/'<!--\n\n  Generated template for the UploadProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Upload Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="{{imgPreview}}">\n\n  <h3 >Please Select Image!</h3>\n\n  <!--<img src="{{pathForImage(lastImage)}}" style="width: 100%" [hidden]="lastImage === null">\n\n  <h3 [hidden]="lastImage !== null">Please Select Image!</h3>\n\n</ion-content>-->\n\n       \n\n<ion-footer>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button icon-left (click)="presentActionSheet()">\n\n              <ion-icon name="camera"></ion-icon>Select Image\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-6>          \n\n            <button ion-button icon-left (click)="uploadImage()" >\n\n              <ion-icon name="cloud-upload"></ion-icon>Upload\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"E:\transportApp28082018\src\pages\upload-profile\upload-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], UploadProfilePage);
    return UploadProfilePage;
}());

//# sourceMappingURL=upload-profile.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ride_now_ride_now__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ride_later_ride_later__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modalpage_modalpage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Firebase__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_device__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_page_transitions__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














//import { isCordovaAvailable } from '../common/is-cordova-available';
//import { oneSignalAppId, sender_id } from '../config';

var HomePage = /** @class */ (function () {
    function HomePage(nativePageTransitions, oneSignal, loading, device, actionSheetCtrl, eve, navCtrl, modalCtrl, storage, data, geolocation, navParams, zone, maps, platform, viewCtrl) {
        var _this = this;
        this.nativePageTransitions = nativePageTransitions;
        this.oneSignal = oneSignal;
        this.loading = loading;
        this.device = device;
        this.actionSheetCtrl = actionSheetCtrl;
        this.eve = eve;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.data = data;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.zone = zone;
        this.maps = maps;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.currentMapTrack = null;
        this.isTracking = false;
        this.trackedRoute = [];
        this.previousTracks = [];
        this.query = '';
        this.dest_query = '';
        this.places = [];
        this.dest_places = [];
        this.vehicle_type = '';
        this.marker = [];
        this.selectdId = '';
        this.isnowenabled = false;
        this.endRide = false;
        this.islaterenabled = false;
        this.ride_date = '';
        this.ride_time = '';
        this.drivers = [];
        this.markers = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_12_Firebase__["database"]().ref('geolocations/');
        this.chkPickup = 0;
        this.displaydistance = false;
        var loader = this.loading.create({
            content: "Please wait...",
            spinner: 'bubbles'
        });
        loader.present();
        this.searchDisabled = true;
        this.saveDisabled = true;
        this.active = '';
        this.calculated_distance = '0 km';
        this.action = {
            pickup: 'pickup',
            drop: 'drop'
        };
        this.cost = {
            economy_cost: 0,
            comfort_cost: 0,
            business_cost: 0
        };
        //this.startTracking();
        this.address = {
            place: '',
            drop_place: ''
        };
        this.storage.get('user').then(function (data) {
            _this.id = data[0].id;
            _this.yourId = _this.id;
            _this.role = data[0].role;
            _this.watch2 = _this.geolocation.watchPosition().pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["filter"])(function (p) { return p.coords !== undefined; }) //Filter Out Errors
            ).subscribe(function (position) {
                setTimeout(function () {
                    _this.lat = position.coords.latitude;
                    _this.long = position.coords.longitude;
                    console.log(_this.lat + '-' + _this.long);
                    if (_this.role == 2) {
                        _this.getPickup().then(function (_) {
                        });
                    }
                }, 0);
            });
        });
        this.storage.get('token')
            .then(function (data) {
            _this.data.token = data;
        });
        /*setTimeout(() => {
          if(this.role == 2)
          {
            
            var addressFull = [];
            var address = '';
            var geocoder = new google.maps.Geocoder();
            console.log(this.lat+'--'+this.long);
            if(this.lat && this.long)
            {
              var latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.long)};
              geocoder.geocode({'location': latlng}, function(results, status) {
                if (status === 'OK') {
                  var address = results[0].formatted_address;
                  addressFull.push(address);
                  console.log(address);
                }
              });
              setTimeout(() => {
                this.address.place = addressFull[0];
                console.log(this.address.place);
              }, 100);
            }
          }
        },2500);*/
        setTimeout(function () {
            if (_this.role == 2) {
                _this.data.getvehicletypesforCustomers().subscribe(function (result) {
                    if (result.status == 'OK') {
                        _this.vehicle_types = result.success.vehicletypes;
                    }
                    else {
                        _this.data.presentToast(result.status);
                    }
                });
                var param = new FormData();
                param.append("latitude", _this.lat);
                param.append("longitude", _this.long);
                _this.data.storeCustomerLocation(param).subscribe(function (result) {
                    if (result.status == "ERROR") {
                        _this.data.presentToast('Not Able to get your current location');
                    }
                    else {
                    }
                });
                //this.navCtrl.setRoot(HomePage); 
            }
            else if (_this.role == 3) {
                var param = new FormData();
                param.append("latitude", _this.lat);
                param.append("longitude", _this.long);
                console.log(_this.lat + '===' + _this.long);
                _this.data.storeDriverLocation(param).subscribe(function (result) {
                    if (result.status == "ERROR") {
                        _this.data.presentToast('Not Able to get your current location');
                    }
                    else {
                    }
                });
                // this.navCtrl.setRoot(HomePage);     
            }
        }, 2500);
        eve.subscribe('distance:created', function (distance, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.calculated_distance = distance;
            _this.displaydistance = true;
            var param = new FormData();
            var x = _this.calculated_distance.split("km");
            param.append("distance", x[0]);
            _this.data.getCost(param).subscribe(function (result) {
                if (result.status == "ERROR") {
                    //this.data.presentToast('eRROR');
                    return false;
                }
                else {
                    _this.cost = {
                        economy_cost: result.success.trip_costs[0].cost,
                        comfort_cost: result.success.trip_costs[1].cost,
                        business_cost: result.success.trip_costs[2].cost
                    };
                }
            });
        });
        eve.subscribe('live_tracking:created', function (live_tracking_data, time) {
            _this.isnowenabled = true;
            _this.watchMethod(live_tracking_data);
            _this.liveRide_bookingId = live_tracking_data.booking_id;
            _this.liveRide_customerId = live_tracking_data.customer_id;
            //alert(this.liveRide_customerId);
            var param = new FormData();
            param.append("booking_id", _this.liveRide_bookingId);
            _this.data.getBookingDetails(param).subscribe(function (result) {
                if (result.status == "OK") {
                    //this.maps.startNavigating([new google.maps.LatLng(this.latitude,this.longitude)], result.success.booking.source,this.directionsPanel.nativeElement);
                    _this.maps.startNavigating(result.success.booking.source, result.success.booking.destination, _this.directionsPanel.nativeElement);
                }
            });
        });
        setTimeout(function () {
            if (_this.role == 3) {
                var param = new FormData();
                param.append("latitude", _this.lat);
                param.append("longitude", _this.long);
                _this.data.getCloseCustomers(param).subscribe(function (result) {
                    if (result.status == "ERROR") {
                        //this.data.presentToast('eRROR');
                        return false;
                    }
                    else {
                        if (result.success.customers) {
                            _this.data.presentToast('Closer Customers!');
                            var addressFull = [];
                            var address = [];
                            for (var i = 0; i < result.success.customers.length; i++) {
                                var geocoder = new google.maps.Geocoder();
                                address[i] = [];
                                address[i]['lat'] = result.success.customers[0].latitude;
                                address[i]['lng'] = result.success.customers[0].longitude;
                                _this.marker[i] = new google.maps.Marker({
                                    map: _this.maps.map,
                                    //animation: google.maps.Animation.DROP,
                                    position: new google.maps.LatLng(address[i]['lat'], address[i]['lng']),
                                    icon: { url: 'assets/imgs/standing-up-man-.png',
                                        size: {
                                            width: 50,
                                            height: 55
                                        }
                                    },
                                    animation: google.maps.Animation.BOUNCE
                                });
                            }
                        }
                        else {
                            _this.data.presentToast('No Nearby Customers!');
                        }
                    }
                });
            }
        }, 2500);
        // setTimeout(() => {   
        loader.dismiss();
        //}, 500); 
    }
    HomePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //this.watch2.unsubscribe();
                        console.log("First log");
                        google.maps.event.trigger(this.maps.map, 'resize');
                        return [4 /*yield*/, this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(function () {
                                _this.autocompleteService = new google.maps.places.AutocompleteService();
                                _this.searchDisabled = false;
                                console.log("Middle log");
                            })];
                    case 1:
                        _a.sent();
                        console.log("Last log");
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        //alert('will');
        this.watch2.unsubscribe();
        //this.geolocation.clearWatch(watch2);
        /*let options: NativeTransitionOptions = {
          direction: 'up',
          duration: 1000,
          slowdownfactor: 3,
          slidePixels: 20,
          iosdelay: 100,
          androiddelay: 500,
          fixedPixelsTop: 0,
          fixedPixelsBottom: 60
         };
      
         this.nativePageTransitions.slide(options);*/
    };
    HomePage.prototype.ionViewWillEnter = function () {
    };
    HomePage.prototype.getPickup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var addressFull, address, geocoder, latlng;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressFull = [];
                        address = '';
                        geocoder = new google.maps.Geocoder();
                        console.log(this.lat + '--' + this.long);
                        if (!(this.lat && this.long)) return [3 /*break*/, 2];
                        latlng = { lat: parseFloat(this.lat), lng: parseFloat(this.long) };
                        return [4 /*yield*/, geocoder.geocode({ 'location': latlng }, function (results, status) {
                                if (status === 'OK') {
                                    var address = results[0].formatted_address;
                                    addressFull.push(address);
                                    console.log(address);
                                }
                            })];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            _this.address.place = addressFull[0];
                            console.log(_this.address.place);
                        }, 500);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.updateActive = function (name) {
        this.active = name;
    };
    HomePage.prototype.showAddressModal = function (act) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__["a" /* AutocompletePage */], { action: act });
        var me = this;
        modal.onDidDismiss(function (data) {
            if (act == 'pickup') {
                if (data) {
                    _this.address.place = data;
                }
                // this.getgeocodeAddress(this.address.place);
            }
            else {
                if (data) {
                    _this.address.drop_place = data;
                }
            }
            if (_this.address.place && _this.address.drop_place) {
                _this.maps.startNavigating(_this.address.place, _this.address.drop_place, _this.directionsPanel.nativeElement);
                _this.display_vehicleTypes = 1;
            }
        });
        modal.present();
    };
    HomePage.prototype.selectVehicle = function (selected_vehicle_type, selected_cost) {
        var _this = this;
        this.vehicle_type = selected_vehicle_type;
        this.selected_cost = selected_cost;
        this.isnowenabled = true;
        this.islaterenabled = true;
        var param = new FormData();
        param.append("latitude", this.lat);
        param.append("longitude", this.long);
        param.append("vehicle_type", this.vehicle_type);
        this.data.getCloseDrivers(param).subscribe(function (result) {
            if (result.status == "ERROR") {
                //this.data.presentToast('eRROR');
                return false;
            }
            else {
                if (result.success.drivers[0]) {
                    //this.data.presentToast('Closer Drivers!');
                    //var addressFull = [];
                    var address = [];
                    for (var i = 0; i < result.success.drivers.length; i++) {
                        //var geocoder = new google.maps.Geocoder();
                        address[i] = [];
                        address[i]['lat'] = result.success.drivers[i].latitude;
                        address[i]['lng'] = result.success.drivers[i].longitude;
                        _this.drivers[i] = result.success.drivers[i].id;
                        _this.addMarker(address[i]['lat'], address[i]['lng'], result.success.drivers[i]);
                    }
                }
                else {
                    _this.data.presentToast('No Nearby Drivers!');
                    _this.isnowenabled = false;
                }
            }
        });
        /*
          let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'rideDecision'},{showBackdrop: false});
                       
          modal.onDidDismiss(data => {
              if(data && data == 'now')
              {
                
              }
              else{
                console.log(data);
                this.isnowenabled = false;
                this.islaterenabled = true;
                this.ride_date = data[0];
                this.ride_time = data[1];
              }
            });
            modal.present();*/
    };
    HomePage.prototype.addMarker = function (lt, lg, driver) {
        this.marker = new google.maps.Marker({
            map: this.maps.map,
            position: new google.maps.LatLng(lt, lg),
            icon: { url: 'assets/imgs/car48x48.png',
                size: {
                    width: 64,
                    height: 55
                }
            },
            animation: google.maps.Animation.DROP
        });
        /*let param = new FormData();
        param.append("origin",'19.7514798','75.7138884');
        param.append("destination",'19.0760','72.8777');
      
        this.data.customerBookingDistance(param).subscribe(result=>{
          if(result.status == 'OK')
          {
            this.duration = result.success.duration;
            console.log(this.duration);
          }
        });
        console.log(this.duration);
        let content = "<ion-item id='info_action'><div style='float:left'><img class='info_avtar' src='assets/imgs/img1.png'></div><div class='info_info'><h6>"+driver.first_name+' '+driver.last_name+"</h6><p class='rating_p'>Rating : 4.5</p><p class='arrival_p'>Arrives In : "+this.duration+"</p></div></ion-item>";
        this.addInfoWindow(this.marker, content, driver.id);
          //});*/
    };
    /*addInfoWindow(marker, content, did){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      document.getElementById('info_action').addEventListener('click', () => {
        this.showSelectDriverModal(did);
      });
    });
    
    }*/
    HomePage.prototype.rideNow = function (dist, selected_vehicle_type) {
        if (this.address.place != '' && this.address.drop_place != '' && this.vehicle_type != '') {
            var param = void 0;
            //this.getLoc(this.address.place);
            param = {
                'distance': dist,
                'vehicle_type': this.vehicle_type,
                'pick_up': this.address.place,
                'drop': this.address.drop_place,
                'cost': this.selected_cost,
                'Did': this.drivers
            };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ride_now_ride_now__["a" /* RideNowPage */], { param: param });
        }
        else {
            this.data.presentToast('Please select pickup and drop locations and Vehicle Type!');
        }
    };
    HomePage.prototype.rideLater = function (dist, selected_vehicle_type) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__modalpage_modalpage__["a" /* ModalpagePage */], { modalAct: 'getDateTime' }, { showBackdrop: false });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.ride_date = data[0];
                _this.ride_time = data[1];
                if (_this.address.place != '' && _this.address.drop_place != '' && _this.vehicle_type != '' && _this.ride_date != '' && _this.ride_time != '') {
                    var param = void 0;
                    param = {
                        'distance': dist,
                        'vehicle_type': _this.vehicle_type,
                        'pick_up': _this.address.place,
                        'drop': _this.address.drop_place,
                        'cost': _this.selected_cost,
                        'date': _this.ride_date,
                        'time': _this.ride_time,
                        'Did': _this.drivers
                    };
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__ride_later_ride_later__["a" /* RideLaterPage */], { param: param });
                }
                else {
                    _this.data.presentToast('Please select pickup and drop locations, Vehicle Type, Date and Time!');
                }
            }
        });
        modal.present();
    };
    /*showSelectDriverModal(did){
      let modal = this.modalCtrl.create(ModalpagePage,{modalAct : 'driverInfo',driverId:did});
      let me = this;
                   
        modal.onDidDismiss(data => {
          if(data)
          {
            //this.selectdId = data;
          }
          else{
            //this.selectdId = '';
          }
        });
        modal.present();
    }*/
    HomePage.prototype.startTracking = function () {
        var _this = this;
        this.isTracking = true;
        this.trackedRoute = [];
        this.positionSubscription = this.geolocation.watchPosition()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["filter"])(function (p) { return p.coords !== undefined; }) //Filter Out Errors
        )
            .subscribe(function (data) {
            console.log(data);
            setTimeout(function () {
                _this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
                //this.redrawPath(this.trackedRoute);
            }, 0);
        });
    };
    HomePage.prototype.redrawPath = function (path) {
        if (this.currentMapTrack) {
            this.currentMapTrack.setMap(null);
        }
        if (path.length > 1) {
            this.currentMapTrack = new google.maps.Polyline({
                path: path,
                geodesic: true,
                strokeColor: '#ff00ff',
                strokeOpacity: 1.0,
                strokeWeight: 3
            });
            this.currentMapTrack.setMap(this.maps.map);
        }
    };
    HomePage.prototype.stopTracking = function () {
        var newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
        this.previousTracks.push(newRoute);
        this.storage.set('routes', this.previousTracks);
        this.isTracking = false;
        this.positionSubscription.unsubscribe();
        this.currentMapTrack.setMap(null);
    };
    HomePage.prototype.watchMethod = function (live_tracking_data) {
        // var customer_id = live_tracking_data.customer_id;
        var _this = this;
        /*let param = new FormData();
        param.append("customer_id",customer_id);
      
        this.data.getCustInfo(param).subscribe(result=>{
          if(result.status == "OK")
          {
            console.log(result);
            if( this.lat == result.success.customer[0].latitude && this.long == result.success.customer[0].longitude && this.chkPickup ==0)
            {
              this.chkPickup =1;
            }
          }
          else{
            console.log('Err');
          }
        });
      */
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            //this.deleteMarkers();
            _this.updateGeolocation(_this.liveRide_customerId, _this.liveRide_bookingId, data.coords.latitude, data.coords.longitude);
            /*-let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
            let image = 'assets/imgs/blue-bike.png';
            this.addMarker1(updatelocation,image);
            this.setMapOnAll(this.map);*/
        });
    };
    HomePage.prototype.updateGeolocation = function (customer_id, booking_id, lat, lng) {
        __WEBPACK_IMPORTED_MODULE_12_Firebase__["database"]().ref(booking_id + '/' + this.id).set({ 'latitude': lat, 'longitude': lng });
        //firebase.database().ref('100/201').set({ 'latitude': '17.1243', 'longitude' : '75.1463'});
    };
    /*addMarker1(location, image) {
      let marker = new google.maps.Marker({
        position: location,
        map: this.map,
        icon: image
      });
      this.markers.push(marker);
    }
    
    setMapOnAll(map) {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    }
    
    clearMarkers() {
      this.setMapOnAll(null);
    }
    
    deleteMarkers() {
      this.clearMarkers();
      this.markers = [];
    }*/
    HomePage.prototype.startRide = function () {
        var _this = this;
        this.isnowenabled = false;
        this.endRide = true;
        var param = new FormData();
        param.append("customer_id", this.liveRide_customerId);
        param.append("booking_id", this.liveRide_bookingId);
        param.append("driver_id", this.yourId);
        this.data.rideStart(param).subscribe(function (result) {
            if (result.status == "OK") {
                console.log(result);
                _this.startTracking();
            }
            else {
                console.log('Err');
            }
        });
    };
    HomePage.prototype.finishRide = function () {
        var _this = this;
        var param = new FormData();
        param.append("customer_id", this.liveRide_customerId);
        param.append("booking_id", this.liveRide_bookingId);
        param.append("driver_id", this.yourId);
        this.data.rideEnd(param).subscribe(function (result) {
            if (result.status == "OK") {
                console.log(result);
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
            else {
                console.log('Err');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('pleaseConnect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomePage.prototype, "pleaseConnect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('directionsPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomePage.prototype, "directionsPanel", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="sideMenu" hideBackButton>\n\n    <button ion-button menuToggle >\n\n      <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf=\'role == 2\'>\n\n        Book A Ride\n\n    </ion-title>\n\n    <ion-title *ngIf=\'role == 3\'>\n\n       Dashboard\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  class="home-content">\n\n  <!--<ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6 text-center>\n\n          <img src="../../assets/imgs/143366-200.png" width="100" height="100" class="book_icon"/>\n\n          <h2>Book a Ride</h2>\n\n      </ion-col>\n\n      <ion-col col-6 text-center>\n\n          <img src="../../assets/imgs/delivery (1).png" width="100" height="100" class="book_icon" />\n\n          <h2>Book a Delivery</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>-->\n\n  <div #pleaseConnect id="please-connect">\n\n    <p>Please connect to the Internet...</p>\n\n  </div>\n\n\n\n  <ion-card class="directionsPanel">\n\n      <ion-card-content>\n\n          <div #directionsPanel></div>\n\n      </ion-card-content>\n\n  </ion-card>\n\n\n\n  <div #map id="map">\n\n      <ion-spinner></ion-spinner>\n\n  </div>\n\n  \n\n  <ion-card *ngIf=\'role == 2\' class="card-content">  \n\n      <ion-list no-lines>\n\n        <ion-item (click)="showAddressModal(action.pickup)">\n\n            <ion-icon item-start ios="md-navigate" md="md-navigate"></ion-icon>\n\n            <ion-label stacked>Pickup Location</ion-label>\n\n            <ion-input [(ngModel)]="address.place" type="text" disabled ></ion-input>\n\n        </ion-item>\n\n        <ion-item (click)="showAddressModal(action.drop)">\n\n            <ion-icon item-start ios="md-pin" md="md-pin"></ion-icon>\n\n            <ion-label stacked>Drop Off Location</ion-label>\n\n            <ion-input [(ngModel)]="address.drop_place" type="text" disabled ></ion-input>\n\n        </ion-item>\n\n        <div *ngIf=\'displaydistance == true\' #distance id="distance">\n\n            <!--<ion-input [(ngModel)]="distance" type="hidden"  ></ion-input>-->\n\n           {{calculated_distance}}\n\n        </div>\n\n      </ion-list>   \n\n    </ion-card>\n\n\n\n\n\n    <div *ngIf=\'role == 3\' class="card-content">  \n\n      <ion-fab top right edge>\n\n        <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n\n        <ion-fab-list>\n\n          <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n          <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n          <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n          <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n        </ion-fab-list>\n\n      </ion-fab>\n\n    </div>\n\n\n\n\n\n</ion-content>\n\n<div *ngIf=\'role == 2\' class="last_div">  \n\n  <div *ngIf=\'display_vehicleTypes==1\' class="type_btn_div">\n\n    <ion-grid>\n\n      <ion-row>   \n\n        <ion-col col-4>\n\n          <button class="type_btn" [ngClass]="active === \'economy\' ? \'active_payment\' : \'\'" (click)="updateActive(\'economy\')" (click)=\'selectVehicle(vehicle_types[0].type,cost.economy_cost)\'>\n\n            <img src="assets/imgs/img3.png" />\n\n            <p>{{vehicle_types[0].type}}</p>\n\n            <div class="appx_cost">${{cost.economy_cost}} Appx.</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <button class="type_btn" [ngClass]="active === \'comfort\' ? \'active_payment\' : \'\'" (click)="updateActive(\'comfort\')" (click)=\'selectVehicle(vehicle_types[1].type,cost.comfort_cost)\'>\n\n            <img src="assets/imgs/img2.png" />\n\n            <p>{{vehicle_types[1].type}}</p>\n\n            <div class="appx_cost">${{cost.comfort_cost}} Appx.</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <button class="type_btn" [ngClass]="active === \'business\' ? \'active_payment\' : \'\'" (click)="updateActive(\'business\')" (click)=\'selectVehicle(vehicle_types[2].type,cost.business_cost)\'>\n\n            <img src="assets/imgs/img1.png" />\n\n            <p>{{vehicle_types[2].type}}</p>\n\n            <div class="appx_cost">${{cost.business_cost}} Appx.</div>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>   \n\n  <div class="inner_last_div">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <button col-6 class="ride_now" (click)=\'rideNow(calculated_distance,vehicle_type)\' [disabled]="!isnowenabled"><p>Ride Now</p></button>\n\n        <button col-6 class="ride_later" (click)=\'rideLater(calculated_distance,vehicle_type)\' [disabled]="!islaterenabled"><p>Ride Later</p></button>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</div>\n\n\n\n\n\n<div *ngIf=\'role == 3\' class="last_div">  \n\n  <div class="inner_last_div">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <button col-12 class="ride_now" (click)=\'startRide()\' *ngIf="isnowenabled == true"><p>Start Ride</p></button>\n\n        <button col-12 class="ride_now" (click)=\'finishRide()\' *ngIf="endRide == true"><p>End Ride</p></button>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</div>\n\n   '/*ion-inline-end:"E:\transportApp28082018\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_14__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* ViewController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export FadeTansition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_page_transitions__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_paypal__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_customer_profile_customer_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_map_map__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_edit_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_password_reset_password_reset__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_autocomplete_autocomplete__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_intro_intro__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_help_help__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ride_now_ride_now__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_forgotpasswoed_forgotpasswoed__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_emailverification_emailverification__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_settings_settings__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_common_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_connectivity_service_connectivity_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_network__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_google_maps_google_maps__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_file__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_transfer__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_file_path__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_upload_profile_upload_profile__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_ride_later_ride_later__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_paymentwallet_paymentwallet__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_driversetting_driversetting__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_bookinghistory_bookinghistory__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_modalpage_modalpage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_confirm_payment_confirm_payment__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_booking_list_booking_list__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_delivery_delivery__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_feedback_feedback__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ionic2_rating__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_payment_payment__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_intro_intro_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_forgotpasswoed_forgotpasswoed_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_emailverification_emailverification_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_help_help_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_customer_profile_customer_profile_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_edit_profile_edit_profile_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_map_map_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_password_reset_password_reset_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_settings_settings_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_signup_signup_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_upload_profile_upload_profile_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_autocomplete_autocomplete_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_ride_now_ride_now_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_ride_later_ride_later_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_paymentwallet_paymentwallet_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_driversetting_driversetting_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_bookinghistory_bookinghistory_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_modalpage_modalpage_module__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_confirm_payment_confirm_payment_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_booking_list_booking_list_module__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_delivery_delivery_module__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_feedback_feedback_module__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_payment_payment_module__ = __webpack_require__(338);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










































































var AppModule = /** @class */ (function () {
    function AppModule(config) {
        config.setTransition('fade', FadeTansition);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__["a" /* SigninPage */]
                //  SignupPage,
                //  CustomerProfilePage,    
                //  MapPage,      
                //  PasswordResetPage,
                //  EditProfilePage,
                //  AvatarPage,
                //  AutocompletePage,
                //  IntroPage,      
                //  ForgotpasswoedPage,
                //  EmailverificationPage,    
                //  HelpPage,
                //  SettingsPage,
                //  UploadProfilePage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_51__pages_intro_intro_module__["IntroPageModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_forgotpasswoed_forgotpasswoed_module__["ForgotpasswoedPageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_emailverification_emailverification_module__["EmailverificationPageModule"],
                __WEBPACK_IMPORTED_MODULE_55__pages_customer_profile_customer_profile_module__["CustomerProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_56__pages_edit_profile_edit_profile_module__["EditProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_57__pages_map_map_module__["MapPageModule"],
                __WEBPACK_IMPORTED_MODULE_58__pages_password_reset_password_reset_module__["PasswordResetPageModule"],
                __WEBPACK_IMPORTED_MODULE_59__pages_settings_settings_module__["SettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_54__pages_help_help_module__["HelpPageModule"],
                __WEBPACK_IMPORTED_MODULE_60__pages_signup_signup_module__["SignupPageModule"],
                __WEBPACK_IMPORTED_MODULE_61__pages_upload_profile_upload_profile_module__["UploadProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_62__pages_autocomplete_autocomplete_module__["AutocompletePageModule"],
                __WEBPACK_IMPORTED_MODULE_31__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_63__pages_ride_now_ride_now_module__["RideNowPageModule"],
                __WEBPACK_IMPORTED_MODULE_64__pages_ride_later_ride_later_module__["RideLaterPageModule"],
                __WEBPACK_IMPORTED_MODULE_65__pages_paymentwallet_paymentwallet_module__["PaymentwalletPageModule"],
                __WEBPACK_IMPORTED_MODULE_66__pages_driversetting_driversetting_module__["DriversettingPageModule"],
                __WEBPACK_IMPORTED_MODULE_67__pages_bookinghistory_bookinghistory_module__["BookinghistoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_68__pages_modalpage_modalpage_module__["ModalpagePageModule"],
                __WEBPACK_IMPORTED_MODULE_69__pages_confirm_payment_confirm_payment_module__["ConfirmPaymentPageModule"],
                __WEBPACK_IMPORTED_MODULE_70__pages_booking_list_booking_list_module__["BookingListPageModule"],
                __WEBPACK_IMPORTED_MODULE_71__pages_delivery_delivery_module__["a" /* DeliveryPageModule */],
                __WEBPACK_IMPORTED_MODULE_72__pages_feedback_feedback_module__["FeedbackPageModule"],
                __WEBPACK_IMPORTED_MODULE_49_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_73__pages_payment_payment_module__["PaymentPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {
                    preloadModules: true,
                    pageTransition: 'fade'
                }, {
                    links: [
                        { loadChildren: '../pages/autocomplete/autocomplete.module#AutocompletePageModule', name: 'AutocompletePage', segment: 'autocomplete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking-list/booking-list.module#BookingListPageModule', name: 'BookingListPage', segment: 'booking-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookinghistory/bookinghistory.module#BookinghistoryPageModule', name: 'BookinghistoryPage', segment: 'bookinghistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-payment/confirm-payment.module#ConfirmPaymentPageModule', name: 'ConfirmPaymentPage', segment: 'confirm-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-profile/customer-profile.module#CustomerProfilePageModule', name: 'CustomerProfilePage', segment: 'customer-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driversetting/driversetting.module#DriversettingPageModule', name: 'DriversettingPage', segment: 'driversetting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emailverification/emailverification.module#EmailverificationPageModule', name: 'EmailverificationPage', segment: 'emailverification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpasswoed/forgotpasswoed.module#ForgotpasswoedPageModule', name: 'ForgotpasswoedPage', segment: 'forgotpasswoed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalpage/modalpage.module#ModalpagePageModule', name: 'ModalpagePage', segment: 'modalpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-reset/password-reset.module#PasswordResetPageModule', name: 'PasswordResetPage', segment: 'password-reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentwallet/paymentwallet.module#PaymentwalletPageModule', name: 'PaymentwalletPage', segment: 'paymentwallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ride-later/ride-later.module#RideLaterPageModule', name: 'RideLaterPage', segment: 'ride-later', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ride-now/ride-now.module#RideNowPageModule', name: 'RideNowPage', segment: 'ride-now', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-profile/upload-profile.module#UploadProfilePageModule', name: 'UploadProfilePage', segment: 'upload-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_29__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_customer_profile_customer_profile__["a" /* CustomerProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_password_reset_password_reset__["a" /* PasswordResetPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_forgotpasswoed_forgotpasswoed__["a" /* ForgotpasswoedPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_emailverification_emailverification__["a" /* EmailverificationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_upload_profile_upload_profile__["a" /* UploadProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_ride_now_ride_now__["a" /* RideNowPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_ride_later_ride_later__["a" /* RideLaterPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_paymentwallet_paymentwallet__["a" /* PaymentwalletPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_driversetting_driversetting__["a" /* DriversettingPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_bookinghistory_bookinghistory__["a" /* BookinghistoryPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_modalpage_modalpage__["a" /* ModalpagePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_confirm_payment_confirm_payment__["a" /* ConfirmPaymentPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_booking_list_booking_list__["a" /* BookingListPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_delivery_delivery__["a" /* DeliveryPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_payment_payment__["a" /* PaymentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_33__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_paypal__["a" /* PayPal */]
            ]
        })
        //export class AppModule {} 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Config */]])
    ], AppModule);
    return AppModule;
}());

var SHOW_BACK_BTN_CSS = 'show-back-button';
var FadeTansition = /** @class */ (function (_super) {
    __extends(FadeTansition, _super);
    function FadeTansition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeTansition.prototype.init = function () {
        _super.prototype.init.call(this);
        var plt = this.plt;
        var enteringView = this.enteringView;
        var leavingView = this.leavingView;
        var opts = this.opts;
        // what direction is the transition going
        var backDirection = opts.direction === 'back';
        if (enteringView) {
            if (backDirection) {
                this.duration(1000);
            }
            else {
                this.duration(1000);
                this.enteringPage.fromTo('opacity', 0, 1, true);
            }
            if (enteringView.hasNavbar()) {
                var enteringPageEle = enteringView.pageRef().nativeElement;
                var enteringNavbarEle = enteringPageEle.querySelector('ion-navbar');
                var enteringNavBar = new __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Animation */](plt, enteringNavbarEle);
                this.add(enteringNavBar);
                var enteringBackButton = new __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Animation */](plt, enteringNavbarEle.querySelector('.back-button'));
                this.add(enteringBackButton);
                if (enteringView.enableBack()) {
                    enteringBackButton.beforeAddClass(SHOW_BACK_BTN_CSS);
                }
                else {
                    enteringBackButton.beforeRemoveClass(SHOW_BACK_BTN_CSS);
                }
            }
        }
        // setup leaving view
        if (leavingView && backDirection) {
            // leaving content
            this.duration(1000);
            var leavingPage = new __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Animation */](plt, leavingView.pageRef());
            this.add(leavingPage.fromTo('opacity', 1, 0));
        }
    };
    return FadeTansition;
}(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PageTransition */]));

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModalpagePage = /** @class */ (function () {
    function ModalpagePage(geolocation, oneSignal, data, navCtrl, storage, navParams, viewCtrl) {
        var _this = this;
        this.geolocation = geolocation;
        this.oneSignal = oneSignal;
        this.data = data;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.social_account_details = [];
        this.modalAct = navParams.get('modalAct');
        this.driverId = navParams.get('driverId');
        this.bookingId = navParams.get('bookingId');
        //this.social_account = navParams.get('account');
        this.driver = {
            fname: 'fname',
            lname: 'lname',
            phone: '9874589687',
            address: '',
            vehicle_type: '',
            vehicle_no: '',
            email: 'driver@gmai.com'
        };
        this.booking_info = {
            source: '',
            destination: '',
            distance: '',
            cost: '',
            customer_id: '',
            source_lat: '',
            source_lng: '',
            destination_lat: '',
            destination_lng: '',
            booking_id: '',
            driver_id: '',
            pickup_date: '',
            schedule_time: '',
            duration: '',
            customer_name: '',
            customer_contact: ''
        };
        this.social_account = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            google: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            facebook: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            twitter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            instagram: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('')
        });
        if (this.driverId && this.driverId != '') {
            var param = new FormData();
            param.append("driver_id", this.driverId);
            this.data.getSelectedDriverInfo(param).subscribe(function (result) {
                console.log(result);
                if (result.status == 'OK') {
                    console.log(result.success.driver.first_name);
                    _this.driver.fname = result.success.driver.first_name;
                    _this.driver.lname = result.success.driver.last_name;
                    //this.user_details.email = result.success.profile[0].email;
                    _this.driver.phone = result.success.driver.phone;
                    _this.driver.address = result.success.driver.address;
                    _this.driver.vehicle_type = result.success.driver.vehicle_type;
                    _this.driver.vehicle_no = result.success.driver.vehicle_number;
                    _this.driver.email = result.success.driver.email;
                }
                else {
                }
            });
            /*let param = new FormData();
              param.append("origin",this.lat+','+this.long);
              param.append("destination",driver.latitude+','+driver.longitude);
      
              this.data.customerBookingDistance(param).subscribe(result=>{
                if(result.status == 'OK')
                {
                  //console.log(result);
                  this.duration = result.success.duration;
                  console.log(this.duration);
                }
              });*/
        }
        if (this.bookingId && this.bookingId != '') {
            var param = new FormData();
            param.append("booking_id", this.bookingId);
            this.data.getBookingInfo(param).subscribe(function (result) {
                console.log(result);
                if (result.status == 'OK') {
                    _this.booking_info.source = result.success.booking.source,
                        _this.booking_info.destination = result.success.booking.destination,
                        _this.booking_info.distance = result.success.booking.distance,
                        _this.booking_info.cost = result.success.booking.cost,
                        _this.booking_info.customer_id = result.success.booking.customer_id,
                        _this.booking_info.source_lat = result.success.booking.source_lat,
                        _this.booking_info.source_lng = result.success.booking.source_long,
                        _this.booking_info.destination_lat = result.success.booking.destination_lat,
                        _this.booking_info.destination_lng = result.success.booking.destination_long,
                        _this.booking_info.booking_id = result.success.booking.id,
                        _this.booking_info.driver_id = result.success.booking.driver_id,
                        _this.booking_info.pickup_date = result.success.booking.pickup_date,
                        _this.booking_info.schedule_time = result.success.booking.schedule_time;
                    _this.geolocation.getCurrentPosition().then(function (position) {
                        _this.lat = position.coords.latitude;
                        _this.lng = position.coords.longitude;
                    });
                    var param_1 = new FormData();
                    param_1.append("origin", _this.lat + ',' + _this.lng);
                    param_1.append("destination", _this.booking_info.source_lat + ',' + _this.booking_info.source_lng);
                    _this.data.customerBookingDistance(param_1).subscribe(function (result) {
                        if (result.status == 'OK') {
                            //console.log(result);    
                            _this.booking_info.duration = result.success.duration;
                            console.log(_this.booking_info.duration);
                        }
                    });
                }
                else {
                }
            });
        }
    }
    ModalpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalpagePage');
    };
    ModalpagePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    /*selectDriver(Did)
    {
      this.viewCtrl.dismiss(Did);
    }*/
    ModalpagePage.prototype.signout = function () {
        var _this = this;
        this.oneSignal.deleteTag('user_id');
        this.storage.set('isRemember', false);
        this.storage.get('user').then(function (data) {
            var param = data[0].id;
            var role = data[0].role;
            console.log(role);
            if (role == 3) {
                _this.data.getDriverToggle(param).subscribe(function (result) {
                    if (result.status == 'OK') {
                        if (result.success.available == 'on') {
                            _this.data.AvailableToggle().subscribe(function (result) {
                                console.log(result);
                                if (result.status == 'OK') {
                                    console.log(result.success.available);
                                }
                                else {
                                    _this.data.presentToast('Error');
                                }
                            });
                        }
                    }
                });
            }
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    /*ride(ride)
    {
      console.log(ride);
      if(ride == 'now')
      {
        this.viewCtrl.dismiss(ride);
      }
      else{
        this.modalAct = 'getDateTime';
      }
    }*/
    ModalpagePage.prototype.gotHome = function () {
        console.log(this.myDate);
        console.log(this.myTime);
        if (this.myDate && this.myTime) {
            var data = [this.myDate, this.myTime];
            this.viewCtrl.dismiss(data);
        }
    };
    ModalpagePage.prototype.accept_req = function () {
        var _this = this;
        var param = new FormData();
        param.append("driver_id", this.booking_info.driver_id);
        param.append("customer_id", this.booking_info.customer_id);
        param.append("booking_id", this.booking_info.booking_id);
        this.data.driverAcceptBooking(param).subscribe(function (result) {
            if (result.status == "OK") {
                _this.data.presentToast('Booking Confirmation Successfull!');
                var param1 = new FormData();
                param1.append("action", 'booking_response');
                param1.append("select_driver_Id", _this.booking_info.driver_id);
                param1.append("customer_id", _this.booking_info.customer_id);
                param1.append("booking_id", _this.booking_info.booking_id);
                _this.data.DriverpostNotification(param1).subscribe(function (result) {
                    if (result.status == "ERROR") {
                        _this.data.presentToast('Notification fail!');
                    }
                    else {
                        _this.data.presentToast('Notification success!');
                    }
                });
                _this.data.presentToast('Request accepted successfully!');
                _this.viewCtrl.dismiss();
            }
        });
    };
    ModalpagePage.prototype.reject_req = function () {
        var _this = this;
        var param = new FormData();
        param.append("driver_id", this.booking_info.driver_id);
        param.append("customer_id", this.booking_info.customer_id);
        param.append("booking_id", this.booking_info.booking_id);
        this.data.driverRejectBooking(param).subscribe(function (result) {
            if (result.status == "OK") {
                _this.data.presentToast('Booking Confirmation Successfull!');
                var param1 = new FormData();
                param1.append("action", 'booking_response');
                param1.append("select_driver_Id", _this.booking_info.driver_id);
                param1.append("customer_id", _this.booking_info.customer_id);
                param1.append("booking_id", _this.booking_info.booking_id);
                _this.data.DriverpostNotification(param1).subscribe(function (result) {
                    if (result.status == "ERROR") {
                        _this.data.presentToast('Notification fail!');
                    }
                    else {
                        _this.data.presentToast('Notification success!');
                    }
                });
                _this.data.presentToast('Request Rejected successfully!');
                _this.viewCtrl.dismiss();
            }
        });
    };
    ModalpagePage.prototype.add_social_account = function () {
        //alert(this.social_account_details['google']);
        var param = new FormData();
        param.append("google", this.social_account_details['google']);
        param.append("facebook", this.social_account_details['facebook']);
        param.append("twitter", this.social_account_details['twitter']);
        param.append("instagram", this.social_account_details['instagram']);
        /*this.data.userSignUp(param).subscribe(result=>{
                 console.log(result);
                 //this.userData = result;
                 if(result.status == "ERROR")
                 {
                     this.data.presentToast(result.error.email);
                     return false;
                 }
                 else
                 {
                   this.data.presentToast('Social Medial Links stored successfully!');
                   this.viewCtrl.dismiss();
                 }
         });*/
    };
    ModalpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modalpage',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\modalpage\modalpage.html"*/'<!--\n  Generated template for the ModalpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n  <ion-navbar color="sideMenu" hideBackButton>\n    <button ion-button menuToggle >\n      <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n    </button>\n    <ion-title>modalpage</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content padding>\n  <ion-card>\n      <ion-label class="close" text-right (click)="close()">\n          <ion-icon name="close"></ion-icon>\n      </ion-label>\n    <ion-grid *ngIf="modalAct==\'driverInfo\'">\n      <ion-row>\n        <ion-col class="profile_header" col-12 text-center>\n          <p>You\'ve got a</p>\n          <h3>Driver</h3>\n        </ion-col>\n        <ion-col col-6>\n          <div class="profile_imgDiv">\n            <img src="assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png" />\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div class="vehicle_imgDiv">\n              <img src="assets/imgs/img1.png" />\n          </div>\n        </ion-col>    \n        <ion-col col-12>\n          <div class="personalInfoDiv">\n            <div>\n              <h4>Personal Information</h4>\n            </div>\n            <div class="Info_title">Name : </div>\n            <div class="Info_desc">{{driver.fname}} {{driver.lname}}</div>\n\n            <div class="Info_title">Contact No. : </div>\n            <div class="Info_desc">{{driver.phone}}</div>\n\n            <div class="Info_title">Email : </div> \n            <div class="Info_desc">{{driver.email}}</div>\n\n            <div class="Info_title">Ratings : </div> \n            <div class="Info_desc">\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n            </div>\n\n            <!--<div class="Info_title">Arrives In : </div>\n            <div class="Info_desc">5 min</div>--> \n          </div>     \n        </ion-col>\n        <!--<ion-col class="btn_div" col-12>\n            <button class="login-btn selectDriverbtn" (click)="selectDriver(driverId)" ion-button color="primary" block >Select</button>\n        </ion-col>-->\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-grid *ngIf="modalAct==\'signout\'">\n      <ion-row>\n        <ion-col col-12>\n          <div class="signoutimgdiv">\n            <img src="assets/imgs/logout.png" />\n          </div>\n        </ion-col>\n        <ion-col col-12>\n          <div class="signoutcontentdiv" text-center>\n            <h5>Do you really want to</h5>\n            <h1> Sign Out </h1>\n          </div>\n        </ion-col>\n        <ion-col col-12>\n          <ion-grid>\n            <ion-row>\n                <ion-col col-6>\n                  <button class="login-btn" (click)="signout()" ion-button color="primary" block >Yes</button>\n                </ion-col>\n                <ion-col col-6>\n                  <button class="login-btn" (click)="close()" ion-button color="primary" block >No</button>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <!--<ion-grid *ngIf="modalAct==\'rideDecision\'">\n      <ion-row>\n        <ion-col col-12>\n          <div class="signoutcontentdiv" text-center>\n            <h5>Do you want to Ride</h5>\n          </div>\n        </ion-col>\n        <ion-col col-12>\n          <ion-grid>\n            <ion-row>\n                <ion-col col-6>\n                  <button class="login-btn ride_btn" (click)="ride(\'now\')" ion-button color="primary" block >Now</button>\n                </ion-col>\n                <ion-col col-6>\n                  <button class="login-btn ride_btn" (click)="ride(\'later\')" ion-button color="primary" block >Later</button>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>-->\n\n    <ion-grid *ngIf="modalAct==\'getDateTime\'">\n      <ion-row>\n        <ion-col col-12>\n          <div padding class="datetimeDiv">\n            <ion-list>\n              <ion-item >\n                  <ion-label floating>Select Date</ion-label>\n                  <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate" (ngModelChange)=\'gotHome()\'></ion-datetime>\n              </ion-item>\n              <ion-item>\n                  <ion-label floating>Select Time</ion-label>\n                  <ion-datetime displayFormat="HH:mm" [(ngModel)]="myTime" (ngModelChange)=\'gotHome()\'></ion-datetime>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf="modalAct==\'showBooking\'">\n      <ion-row>\n        <ion-col col-12>\n          <div class="pin_icon" text-center>\n              <ion-icon name="pin"></ion-icon>\n          </div>.\n        </ion-col>\n        <ion-col col-12>\n          <div class="showBookingDiv">\n            <ion-row class="addrSection">\n              <ion-col col-6 text-left>\n                <ion-icon class="nav_left" name="navigate"></ion-icon>\n                <span>From</span>\n                <div text-left class="pickupaddr">{{booking_info.source}}</div>\n              </ion-col>\n              <ion-col col-6 text-right>\n                <span>To</span>\n                <ion-icon class="nav_right" name="navigate"></ion-icon>\n                <div text-right class="dropaddr">{{booking_info.destination}}</div>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class="otherInfoDiv">\n                <ion-col class="otherTitle" col-4>Distance</ion-col>\n                <ion-col class="otherTitle" col-4>Duration</ion-col>\n                <ion-col class="otherTitle" col-4>Cost</ion-col>\n                <ion-col class="otherDescription" col-4>{{booking_info.distance}}</ion-col>\n                <ion-col class="otherDescription" col-4>{{booking_info.duration}}</ion-col>\n                <ion-col class="otherDescription" col-4>{{booking_info.cost}}</ion-col>\n            </ion-row>\n\n            <ion-row class="customerInfoDiv">\n              <ion-card >\n                <h2>Customer Information</h2>\n                <div class="custInfoDiv">\n                  <h3>Swapnil Pathade</h3>\n                  <p><ion-icon name="call"></ion-icon> 9876543234</p>\n                </div>\n              </ion-card>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-6>\n                  <button (click)=\'accept_req()\' class="login-btn accept_btn" ion-button color="primary" block >Accept</button>\n                </ion-col>\n                <ion-col col-6>\n                  <button (click)=\'reject_req()\' class="login-btn decline_btn" ion-button color="primary" block >Decline</button>\n                </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <ion-grid *ngIf="modalAct==\'addSocialaccount\'">\n      <ion-row>\n        <ion-col col-12>\n          <form class="social_media_form" [formGroup]="social_account" (ngSubmit)="add_social_account()"> \n            <ion-list no-lines>\n              <ion-item>\n                <ion-label floating>Google</ion-label>\n                <ion-input [(ngModel)]="social_account_details.google" formControlName="google" type="text"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>Facebook</ion-label>\n                <ion-input [(ngModel)]="social_account_details.facebook" formControlName="facebook" type="text"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>Twitter</ion-label>\n                <ion-input [(ngModel)]="social_account_details.twitter" formControlName="twitter" type="text"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>Instagram</ion-label>\n                <ion-input [(ngModel)]="social_account_details.instagram" formControlName="instagram" type="text"></ion-input>\n              </ion-item>\n\n              <ion-item class="submit_btn_item">\n                <button class="sign_up-btn" ion-button color="primary" block >Save</button>\n              </ion-item>\n            </ion-list>\n          </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-card>    \n</ion-content>\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\modalpage\modalpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], ModalpagePage);
    return ModalpagePage;
}());

//# sourceMappingURL=modalpage.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_customer_profile_customer_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_paymentwallet_paymentwallet__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_driversetting_driversetting__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bookinghistory_bookinghistory__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_booking_list_booking_list__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_delivery_delivery__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_onesignal__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_is_cordova_available__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__config__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_feedback_feedback__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_edit_profile_edit_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_payment_payment__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_firebase__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var config = {
    apiKey: 'AIzaSyD_mkig8BYCj7PJlCj4-yN4w6QPmJjxFbg',
    authDomain: 'localhost',
    databaseURL: 'https://transportapp-b1681.firebaseio.com/',
    projectId: 'transportapp-b1681',
    storageBucket: 'gs://transportapp-b1681.appspot.com',
};
var MyApp = /** @class */ (function () {
    function MyApp(oneSignal, platform, statusBar, splashScreen, data, storage, events, alertCtrl) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.data = data;
        this.storage = storage;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.fname = '';
        this.lname = '';
        this.email = '';
        this.avatar = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
        __WEBPACK_IMPORTED_MODULE_24_firebase__["initializeApp"](config);
        this.storage.get('showSlide').then(function (data) {
            if (data == null || data == undefined) {
                _this.storage.set('showSlide', false);
                //show slide logic should run
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */];
            }
            else {
                _this.storage.get('isRemember').then(function (data) {
                    if (data == null || data == undefined) {
                        _this.storage.set('isRemember', false);
                        //show slide logic should run
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */];
                    }
                    if (data == true) {
                        /*this.storage.get('isProfile_Complete').then(data1=>{
                          if(data1 == null || data1 == undefined || data1 == false)
                          {
                            //this.storage.set('showSlide', false);
                            //show slide logic should run
                            this.rootPage = EditProfilePage;
                          }
                          else{
                            this.rootPage = HomePage;
                          }
                        });*/
                        _this.storage.get('user').then(function (data) {
                            _this.id = data[0].id;
                        });
                        var param = _this.id;
                        _this.data.getDriverProfile(param).subscribe(function (result) {
                            if (result.status == 'OK') {
                                if (result.success.profile[0].is_completed == 0) {
                                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_22__pages_edit_profile_edit_profile__["a" /* EditProfilePage */];
                                }
                                else {
                                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                                }
                            }
                            else {
                                //this.data.presentToast('Unable to get your Profile data!');
                                _this.storage.get('isProfile_Complete').then(function (data1) {
                                    if (data1 == null || data1 == undefined || data1 == false) {
                                        //this.storage.set('showSlide', false);
                                        //show slide logic should run
                                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_22__pages_edit_profile_edit_profile__["a" /* EditProfilePage */];
                                    }
                                    else {
                                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                                    }
                                });
                            }
                        });
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */];
                    }
                });
            }
        });
        events.subscribe('user:created', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            console.log('Welcome', user, 'at', time);
            _this.fname = user[0].first_name;
            _this.lname = user[0].last_name;
            _this.email = user[0].email;
            _this.role = user[0].role;
            _this.id = user[0].id;
            console.log('this.role==>' + _this.role);
            var param = user[0].id;
            _this.data.getCustomerProfile(param).subscribe(function (result) {
                if (result.status == 'OK') {
                    //console.log(result.success.profile[0].first_name);
                    if (result.success.profile[0].profile == null) {
                        _this.avatar = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
                    }
                    else {
                        _this.avatar = 'http://transport.walstarmedia.com/public/storage/images/customer/profile_image/' + result.success.profile[0].profile;
                    }
                }
                else {
                }
            });
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (Object(__WEBPACK_IMPORTED_MODULE_19__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
                _this.oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_20__config__["a" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_20__config__["b" /* sender_id */]);
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                _this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this.onPushReceived(data.payload); });
                _this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this.onPushOpened(data.notification.payload); });
                _this.oneSignal.endInit();
                /*var notificationReceivedCallback = function(data) {};
                var notificationOpenedCallback = jsonData => {};
        
                window["plugins"].OneSignal
                .startInit("e3852c7f-8318-42a3-a4b7-f29ebcab0d47", "540630126754")
                .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
                .handleNotificationOpened(notificationOpenedCallback)
                .handleNotificationReceived(notificationReceivedCallback)
                .endInit();*/
            }
        });
        this.pages = {
            homePage: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            customerProfilePage: __WEBPACK_IMPORTED_MODULE_9__pages_customer_profile_customer_profile__["a" /* CustomerProfilePage */],
            findabranchPage: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            mapPage: __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
            helpPage: __WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */],
            settingsPage: __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
            paymentwalletPage: __WEBPACK_IMPORTED_MODULE_13__pages_paymentwallet_paymentwallet__["a" /* PaymentwalletPage */],
            driversettingPage: __WEBPACK_IMPORTED_MODULE_14__pages_driversetting_driversetting__["a" /* DriversettingPage */],
            bookinghistoryPage: __WEBPACK_IMPORTED_MODULE_15__pages_bookinghistory_bookinghistory__["a" /* BookinghistoryPage */],
            bookingListPage: __WEBPACK_IMPORTED_MODULE_16__pages_booking_list_booking_list__["a" /* BookingListPage */],
            deliveryPage: __WEBPACK_IMPORTED_MODULE_17__pages_delivery_delivery__["a" /* DeliveryPage */],
            feedbackPage: __WEBPACK_IMPORTED_MODULE_21__pages_feedback_feedback__["a" /* FeedbackPage */],
            paymentPage: __WEBPACK_IMPORTED_MODULE_23__pages_payment_payment__["a" /* PaymentPage */]
        };
    }
    MyApp.prototype.onPushReceived = function (payload) {
        /*alert('Push recevied:' + payload.body);
        alert( payload.additionalData.driver_id);
        alert( payload.additionalData.customer_id);
        alert( payload.additionalData.booking_id);*/
        //presentConfirm() {
        // }
        if (payload.additionalData.action == 'booking_response') {
            this.events.publish('live_tracking_Driver_id:created', payload.additionalData.driver_id, Date.now());
        }
        if (payload.additionalData.action == 'finish_ride') {
            this.events.publish('finished_ride:created', payload.additionalData, Date.now());
        }
    };
    MyApp.prototype.onPushOpened = function (payload) {
        var _this = this;
        //alert('Push opened: ' + payload.body);
        if (payload.additionalData.action == 'booking_request') {
            var alert_1 = this.alertCtrl.create({
                title: 'Customer Request',
                message: payload.body,
                buttons: [
                    {
                        text: 'Accept',
                        handler: function () {
                            console.log('Accept clicked');
                            var param = new FormData();
                            param.append("driver_id", _this.id);
                            param.append("customer_id", payload.additionalData.customer_id);
                            param.append("booking_id", payload.additionalData.booking_id);
                            _this.data.driverAcceptBooking(param).subscribe(function (result) {
                                if (result.status == "OK") {
                                    _this.data.presentToast('Booking Confirmation Successfull!');
                                    if (payload.additionalData.ride_type != 'later') {
                                        var param1 = new FormData();
                                        param1.append("driver_Id", _this.id);
                                        param1.append("customer_id", payload.additionalData.customer_id);
                                        param1.append("booking_id", payload.additionalData.booking_id);
                                        _this.data.DriverpostNotification(param1).subscribe(function (result) {
                                            if (result.status == "ERROR") {
                                                _this.data.presentToast('postNotification fail');
                                            }
                                            else {
                                                _this.data.presentToast('postNotification success');
                                                _this.events.publish('live_tracking:created', payload.additionalData, Date.now());
                                            }
                                        });
                                        _this.data.presentToast('Request accepted successfully!');
                                    }
                                }
                            });
                        }
                    },
                    {
                        text: 'Reject',
                        handler: function () {
                            console.log('reject clicked');
                            var param = new FormData();
                            param.append("driver_id", _this.id);
                            param.append("customer_id", payload.additionalData.customer_id);
                            param.append("booking_id", payload.additionalData.booking_id);
                            _this.data.driverRejectBooking(param).subscribe(function (result) {
                                if (result.status == "OK") {
                                    /* this.data.presentToast('Booking Confirmation Successfull!');
                                       let param1 = new FormData();
                                       param1.append("driver_Id",this.id);
                                       param1.append("customer_id",payload.additionalData.customer_id);
                                       param1.append("booking_id",payload.additionalData.booking_id);
                 
                                       this.data.DriverpostNotification(param1).subscribe(result=>{
                                         if(result.status == "ERROR")
                                         {
                                           this.data.presentToast('postNotification fail');
                                         }
                                         else{
                                           this.data.presentToast('postNotification success');
                                         }
                                       });*/
                                    _this.data.presentToast('Request Rejected successfully!');
                                }
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\transportApp28082018\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n      <!--<ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>-->\n\n      <ion-card class="menu-card" menuClose (click)="nav.push(pages.customerProfilePage)">\n\n        <ion-item text-center>\n\n          <ion-avatar>\n\n            <img class="menu_header_avtar" src="{{avatar}}">\n\n          </ion-avatar>\n\n          <h2>{{fname}} {{lname}}</h2>\n\n          <p>{{email}}</p>\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-header>\n\n  \n\n    <ion-content *ngIf="role==2" class="sideMenu">\n\n      <ion-list class="menu-list" no-lines>\n\n        <!-- <button class="sideMenuItem" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon name="add-circle"></ion-icon>\n\n          {{p.title}}\n\n        </button> -->\n\n        <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.homePage)">\n\n            <!--<ion-icon class="sideMenuIcons" name="home"></ion-icon>-->\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-3>\n\n                  <img class="list_item_icon" src="assets/imgs/riding-car.png"/>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <div class="list_item_title">Book A Ride</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </button>\n\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.deliveryPage)">\n\n            <!--<ion-icon class="sideMenuIcons" name="home"></ion-icon>-->\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-3>\n\n                  <img class="list_item_icon" src="assets/imgs/riding-car.png"/>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <div class="list_item_title">Book A Delivery</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </button>\n\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.customerProfilePage)">  \n\n            <!--<ion-icon ios="ios-person" md="md-person"></ion-icon>-->\n\n            <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-3>\n\n                    <img class="list_item_icon" src="assets/imgs/user.png"/>\n\n                  </ion-col>\n\n                  <ion-col col-9>\n\n                      <div class="list_item_title">Profile</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n          </button>\n\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.bookinghistoryPage)">  \n\n              <!--<ion-icon ios="ios-person" md="md-person"></ion-icon>-->\n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col col-3>\n\n                      <img class="list_item_icon" src="assets/imgs/calendar-page-with-circular-clock-symbol.png"/>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <div class="list_item_title">Your Bookings</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n          </button>\n\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.paymentwalletPage)">  \n\n              <!--<ion-icon ios="ios-cog" md="md-cog"></ion-icon>-->\n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col col-3>\n\n                      <img class="list_item_icon" src="assets/imgs/wallet1.png"/>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <div class="list_item_title">Payments</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid> \n\n          </button>\n\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.settingsPage)">  \n\n              <!--<ion-icon ios="ios-book" md="md-book"></ion-icon>-->\n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col col-3>   \n\n                      <img class="list_item_icon" src="assets/imgs/settings.png"/>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <div class="list_item_title">Settings</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n          </button>\n\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.feedbackPage)">  \n\n              <!--<ion-icon ios="ios-book" md="md-book"></ion-icon>-->\n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col col-3>\n\n                      <img class="list_item_icon" src="assets/imgs/notification.png"/>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <div class="list_item_title">Notifications</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n          </button>\n\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.homePage)">  \n\n              <!--<ion-icon ios="logo-usd" md="logo-usd"></ion-icon>-->\n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col col-3>\n\n                      <img class="list_item_icon" src="assets/imgs/giftbox-outline.png"/>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <div class="list_item_title">Refer & Earn</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>   \n\n          </button>\n\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.helpPage)">  \n\n              <!--<ion-icon ios="ios-help-circle" md="md-help-circle"></ion-icon>-->\n\n              <ion-grid>\n\n                  <ion-row>      \n\n                    <ion-col col-3>\n\n                      <img class="list_item_icon" src="assets/imgs/chat.png"/>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <div class="list_item_title">Help</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>    \n\n          </button>\n\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.paymentPage)">  \n\n              <!--<ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>-->\n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col col-3>\n\n                      <img class="list_item_icon" src="assets/imgs/notepad.png"/>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <div class="list_item_title">Privacy Policy</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>   \n\n          </button>\n\n      </ion-list>    \n\n    </ion-content>\n\n\n\n    <ion-content *ngIf="role==3" class="sideMenu">\n\n        <ion-list class="menu-list" no-lines>\n\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.homePage)">\n\n            <!--<ion-icon class="sideMenuIcons" name="home"></ion-icon>-->\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-3>\n\n                  <img class="list_item_icon" src="assets/imgs/riding-car.png"/>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <div class="list_item_title">Dashboard</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </button>\n\n            <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.customerProfilePage)">  \n\n              <!--<ion-icon ios="ios-person" md="md-person"></ion-icon>-->\n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col col-3>\n\n                      <img class="list_item_icon" src="assets/imgs/user.png"/>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <div class="list_item_title">Profile</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n            </button>\n\n            <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.paymentwalletPage)">  \n\n                <!--<ion-icon ios="ios-cog" md="md-cog"></ion-icon>-->\n\n                <ion-grid>\n\n                    <ion-row>\n\n                      <ion-col col-3>\n\n                        <img class="list_item_icon" src="assets/imgs/wallet1.png"/>\n\n                      </ion-col>\n\n                      <ion-col col-9>\n\n                          <div class="list_item_title">Payments</div>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                  </ion-grid> \n\n            </button>\n\n            <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.driversettingPage)">  \n\n                <!--<ion-icon ios="ios-book" md="md-book"></ion-icon>-->\n\n                <ion-grid>\n\n                    <ion-row>\n\n                      <ion-col col-3>   \n\n                        <img class="list_item_icon" src="assets/imgs/settings.png"/>\n\n                      </ion-col>\n\n                      <ion-col col-9>\n\n                          <div class="list_item_title">Settings</div>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                  </ion-grid>\n\n            </button>\n\n            <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.bookingListPage)">  \n\n              <!--<ion-icon ios="ios-person" md="md-person"></ion-icon>-->\n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col col-3>\n\n                      <img class="list_item_icon" src="assets/imgs/calendar-page-with-circular-clock-symbol.png"/>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <div class="list_item_title">Your Bookings</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n          </button>\n\n        </ion-list>       \n\n      </ion-content>\n\n  </ion-menu>\n\n  \n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n     '/*ion-inline-end:"E:\transportApp28082018\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_18__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCordovaAvailable; });
var isCordovaAvailable = function () {
    if (!window.cordova) {
        alert('This is a native feature. Please use a device');
        return false;
    }
    return true;
};
//# sourceMappingURL=is-cordova-available.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sender_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return oneSignalAppId; });
var sender_id = '1046014935493';
var oneSignalAppId = '3e0e1252-5e94-416e-8442-9b2498d6124e';
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeliveryPageModule = /** @class */ (function () {
    function DeliveryPageModule() {
    }
    DeliveryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__delivery__["a" /* DeliveryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__delivery__["a" /* DeliveryPage */]),
            ],
        })
    ], DeliveryPageModule);
    return DeliveryPageModule;
}());

//# sourceMappingURL=delivery.module.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectivity_service_connectivity_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the GoogleMapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GoogleMapsProvider = /** @class */ (function () {
    function GoogleMapsProvider(eve, events, connectivityService, geolocation, platform) {
        this.eve = eve;
        this.events = events;
        this.connectivityService = connectivityService;
        this.geolocation = geolocation;
        this.platform = platform;
        this.mapInitialised = false;
        this.apiKey = "AIzaSyD_mkig8BYCj7PJlCj4-yN4w6QPmJjxFbg";
        this.markers = [];
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { /*strokeColor:"#4a4a4a",*/ strokeOpacity: 0.8, strokeWeight: 3, strokeColor: '#278DF8' }, suppressMarkers: true });
    }
    GoogleMapsProvider.prototype.init = function (mapElement, pleaseConnect) {
        this.mapElement = mapElement;
        this.pleaseConnect = pleaseConnect;
        return this.loadGoogleMaps();
    };
    GoogleMapsProvider.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded.");
                _this.disableMap();
                if (_this.connectivityService.isOnline()) {
                    window['mapInit'] = function () {
                        _this.initMap().then(function () {
                            resolve(true);
                        });
                        _this.enableMap();
                    };
                    var script = document.createElement("script");
                    script.id = "googleMaps";
                    if (_this.apiKey) {
                        script.src = 'http://maps.google.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit&libraries=places';
                    }
                    else {
                        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                    }
                    document.body.appendChild(script);
                }
            }
            else {
                if (_this.connectivityService.isOnline()) {
                    _this.initMap();
                    _this.enableMap();
                }
                else {
                    _this.disableMap();
                }
                resolve(true);
            }
            _this.addConnectivityListeners();
        });
    };
    GoogleMapsProvider.prototype.initMap = function () {
        var _this = this;
        this.mapInitialised = true;
        return new Promise(function (resolve) {
            _this.platform.ready().then(function () {
                /*this.geolocation.watchPosition().pipe(
                  filter((p) => p.coords !== undefined) //Filter Out Errors
                )
                .subscribe*/
                _this.geolocation.getCurrentPosition().then(function (position) {
                    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    console.log('latLng==>' + latLng);
                    var mapOptions = {
                        center: latLng,
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        clickableIcons: false,
                        disableDefaultUI: true,
                        zoomControl: false,
                        enableHighAccuracy: true,
                    };
                    var geocoder = new google.maps.Geocoder;
                    _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                    resolve(true);
                    console.log("I am called");
                    _this.addMarker();
                }, function (err) { console.log(JSON.stringify(err)); });
            });
        });
    };
    GoogleMapsProvider.prototype.disableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "block";
        }
    };
    GoogleMapsProvider.prototype.enableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "none";
        }
    };
    GoogleMapsProvider.prototype.addConnectivityListeners = function () {
        var _this = this;
        this.connectivityService.watchOnline().subscribe(function () {
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        });
        this.connectivityService.watchOffline().subscribe(function () {
            _this.disableMap();
        });
    };
    GoogleMapsProvider.prototype.addMarker = function () {
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter(),
            icon: 'assets/imgs/map-pin-marked.png'
        });
        this.circle = new google.maps.Circle({
            strokeColor: '#b5bedc',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            strokeWidth: 5,
            fillColor: '#c3cdee',
            fillOpacity: 0.35,
            map: this.map,
            center: this.map.getCenter(),
            radius: 300
        }); /*.then((circle)=>{
          this.marker.bindTo('position',circle,'center');
        });*/
        var content = "<h4>Your Current Location !</h4>";
        this.addInfoWindow(this.marker, content);
    };
    GoogleMapsProvider.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    GoogleMapsProvider.prototype.startNavigating = function (pickup, drop, directionsPanel) {
        var _this = this;
        console.log("Start Navigating");
        this.marker.setMap(null);
        this.directionsPanel = directionsPanel;
        this.clearMarkers();
        this.markers = [];
        this.circle.setMap(null);
        this.directionsDisplay.setMap(null);
        this.directionsDisplay.set('directions', null);
        //directionsDisplay.set('directions', null);
        this.getLatLng(pickup).then(function (data) {
            _this.startMarker = new google.maps.Marker({ position: new google.maps.LatLng(data['latitude'], data['longitude']), map: _this.map, icon: 'assets/imgs/source_pin.png' });
            _this.markers.push(_this.startMarker);
        });
        this.getLatLng(drop).then(function (data) {
            _this.stopMarker = new google.maps.Marker({ position: new google.maps.LatLng(data['latitude'], data['longitude']), map: _this.map, icon: 'assets/imgs/destination_pin.png' });
            _this.markers.push(_this.stopMarker);
        });
        this.directionsService.route({
            origin: pickup,
            destination: drop,
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            var route = res.routes[0];
            console.log('route==>' + route.legs);
            _this.events.publish('distance:created', route.legs[0].distance.text, Date.now());
            _this.directionsDisplay.setMap(null);
            if (status == google.maps.DirectionsStatus.OK) {
                _this.directionsDisplay.setMap(_this.map);
                _this.directionsDisplay.setDirections(res);
            }
            else {
                console.warn(status);
            }
        });
    };
    GoogleMapsProvider.prototype.getLatLng = function (address) {
        return new Promise(function (resolve) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    resolve({ latitude: latitude, longitude: longitude });
                }
            });
        });
    };
    GoogleMapsProvider.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    GoogleMapsProvider.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    GoogleMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], GoogleMapsProvider);
    return GoogleMapsProvider;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_reset_password_reset__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_profile_edit_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modalpage_modalpage__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CustomerProfilePage = /** @class */ (function () {
    function CustomerProfilePage(navCtrl, loading, actionSheetCtrl, navParams, data, storage, DomSanitizer, camera, http, alertCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        this.DomSanitizer = DomSanitizer;
        this.camera = camera;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.user_details = {};
        var loader = this.loading.create({
            content: "Please wait...",
            spinner: 'bubbles'
        });
        loader.present();
        this.storage.get('user').then(function (data) {
            var param = data[0].id;
            _this.role = data[0].role;
            if (data[0].role == 2) {
                _this.data.getCustomerProfile(param).subscribe(function (result) {
                    if (result.status == 'OK') {
                        //console.log(result.success.profile[0].first_name);
                        _this.user_details.fname = result.success.profile[0].first_name;
                        _this.user_details.lname = result.success.profile[0].last_name;
                        _this.user_details.email = result.success.profile[0].email;
                        _this.user_details.phone = result.success.profile[0].phone;
                        _this.user_details.address = result.success.profile[0].address;
                        //this.user_details.avatar = 'http://transport.walstarmedia.com/public/storage/images/customer/profile_image/'+result.success.profile[0].profile;
                        if (result.success.profile[0].profile == null) {
                            _this.user_details.avatar = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
                        }
                        else {
                            _this.user_details.avatar = 'http://transport.walstarmedia.com/public/storage/images/customer/profile_image/' + result.success.profile[0].profile;
                        }
                    }
                    else {
                    }
                });
            }
            else if (data[0].role == 3) {
                _this.data.getvehicletypes().subscribe(function (result) {
                    if (result.status == 'OK') {
                        console.log('kjndjknbbv==>' + result.success.vehicletypes[0].type);
                        _this.vehicle_types = result.success.vehicletypes;
                        _this.data.getDriverProfile(param).subscribe(function (result) {
                            if (result.status == 'OK') {
                                //console.log(result.success.profile[0].first_name);
                                _this.user_details.fname = result.success.profile[0].first_name;
                                _this.user_details.lname = result.success.profile[0].last_name;
                                _this.user_details.email = result.success.profile[0].email;
                                _this.user_details.phone = result.success.profile[0].phone;
                                _this.user_details.address = result.success.profile[0].address;
                                if (result.success.profile[0].profile == null) {
                                    _this.user_details.avatar = 'assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png';
                                }
                                else {
                                    _this.user_details.avatar = 'http://transport.walstarmedia.com/public/storage/images/customer/profile_image/' + result.success.profile[0].profile;
                                }
                                //this.user_details.avatar = 'http://transport.walstarmedia.com/public/storage/images/driver/profile_image/'+result.success.profile[0].profile;
                                _this.user_details.vehicle_type = _this.vehicle_types[result.success.profile[0].vehicle_type - 1].type;
                                _this.user_details.vehicle_number = result.success.profile[0].vehicle_number;
                            }
                            else {
                            }
                        });
                    }
                    else {
                        _this.data.presentToast(result.status);
                    }
                });
            }
        });
        loader.dismiss();
    }
    CustomerProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerProfilePage');
    };
    CustomerProfilePage.prototype.gotoChangePass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__password_reset_password_reset__["a" /* PasswordResetPage */]);
    };
    CustomerProfilePage.prototype.gotoeditProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    CustomerProfilePage.prototype.gotoAvatarPage = function () {
        //this.navCtrl.push(UploadProfilePage,{'imgurl':this.user_details.avatar}, { animate: true, animation: 'transition', duration: 500, direction: 'up' });
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        //this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        _this.captureImage(false);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        //this.takePicture(this.camera.PictureSourceType.CAMERA);
                        _this.captureImage(true);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    CustomerProfilePage.prototype.signOut = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__modalpage_modalpage__["a" /* ModalpagePage */], { modalAct: 'signout' });
        var me = this;
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                //this.selectdId = data;
            }
            else {
                //this.selectdId = '';            
            }
        });
        modal.present();
        //this.navCtrl.setRoot(SigninPage); 
    };
    CustomerProfilePage.prototype.addSocialLink = function (account) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__modalpage_modalpage__["a" /* ModalpagePage */], { modalAct: 'addSocialaccount' });
        var me = this;
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                //this.selectdId = data;
            }
            else {
                //this.selectdId = '';        
            }
        });
        modal.present();
        //this.navCtrl.setRoot(SigninPage); 
    };
    CustomerProfilePage.prototype.captureImage = function (useAlbum) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var srcType, options, imageData, loader, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (useAlbum == true) {
                            srcType = this.camera.PictureSourceType.CAMERA;
                        }
                        else {
                            srcType = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
                        }
                        options = {
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            sourceType: srcType
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        imageData = _a.sent();
                        this.avtarPath = 'data:image/jpg;base64,' + imageData;
                        loader = this.loading.create({
                            content: "Please wait...",
                            spinner: 'bubbles'
                        });
                        loader.present();
                        param = new FormData();
                        param.append("image_file", this.avtarPath);
                        //this.photos.unshift(this.base64Image);
                        if (this.role == 2) {
                            this.data.updateCustomerAvtar(param).subscribe(function (result) {
                                if (result.status == "ERROR") {
                                    _this.data.presentToast('eRROR');
                                    return false;
                                }
                                else {
                                    _this.data.presentToast('Profile Updated Successfully!');
                                    loader.dismiss();
                                    _this.navCtrl.push(_this.navCtrl.getActive().component);
                                    //this.navCtrl.setRoot(CustomerProfilePage);
                                }
                            });
                        }
                        if (this.role == 3) {
                            this.data.updateDriverAvtar(param).subscribe(function (result) {
                                if (result.status == "ERROR") {
                                    _this.data.presentToast('eRROR');
                                    return false;
                                }
                                else {
                                    _this.data.presentToast('Profile Updated Successfully!');
                                    loader.dismiss();
                                    _this.navCtrl.push(_this.navCtrl.getActive().component);
                                    //this.navCtrl.setRoot(CustomerProfilePage);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customer-profile',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\customer-profile\customer-profile.html"*/'<!--\n\n  Generated template for the CustomerProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <!--<button ion-button menuToggle >\n\n        <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n\n    </button>-->\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>  \n\n    <ion-card>\n\n        <ion-list>\n\n            <ion-item class="profile_edit_list">\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-4>\n\n                            <ion-avatar item-start (click)="gotoAvatarPage()">\n\n                                <img src="{{user_details.avatar}}">\n\n                            </ion-avatar>  \n\n                        </ion-col>\n\n                        <ion-col col-6> \n\n                            <h2 class="profile_name">\n\n                                {{user_details.fname}} {{user_details.lname}}\n\n                            </h2>\n\n                            <h3>{{user_details.email}}</h3>\n\n                            <p>{{user_details.phone}}</p>\n\n                        </ion-col>\n\n                        <ion-col col-2 text-center class="profile_edit_icon" (click)="gotoeditProfile()">\n\n                            <ion-icon ios="ios-create" md="md-create" class="ion-md-create profile_edit_icon_main"></ion-icon>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ion-card>\n\n    <ion-card *ngIf=\'role==3\' class="Saved_places_card vehicle_details_header">\n\n        <ion-card-header> \n\n          Vehicle Details\n\n        </ion-card-header>\n\n        <ion-card-content class="vehicle_details">\n\n             <h3>Type : </h3>\n\n             <span>{{user_details.vehicle_type}}</span>\n\n             <h3>Number : </h3>\n\n             <span>{{user_details.vehicle_number}}</span>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-list class="menu-list" no-lines>\n\n        <button class="sideMenuItem change_pass_btn" menuClose ion-item (click)="gotoChangePass()">\n\n            <ion-icon ios="ios-lock" md="md-lock" class="lock-icon"></ion-icon>\n\n            <span class="change_pass_text">Change Password</span>\n\n        </button>   \n\n    </ion-list>\n\n\n\n    <ion-card class="Saved_places_card">\n\n        <ion-card-header> \n\n          Home\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            {{user_details.address}}        \n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n    <ion-list class="social_icons" no-lines (click)="addSocialLink()">\n\n        <ion-item class="" ion-item > \n\n            <span class="add_social_link">Add Social Media Account Links</span>\n\n        </ion-item>\n\n        <!--<ion-icon class="google" name="logo-googleplus" (click)="addSocialLink(\'google\')"></ion-icon>\n\n        <ion-icon class="facebook" name="logo-facebook" (click)="addSocialLink(\'facebook\')"></ion-icon>\n\n        <ion-icon class="twitter" name="logo-twitter" (click)="addSocialLink(\'twitter\')"></ion-icon>       \n\n        <ion-icon class="instagram" name="logo-instagram" (click)="addSocialLink(\'instagram\')"></ion-icon>-->\n\n    </ion-list>\n\n\n\n</ion-content>\n\n<div class="last_div" (click)="signOut()">  \n\n    <div class="inner_last_div">\n\n      <p><!--<ion-icon ios="ios-power" md="md-power"></ion-icon>--> Sign Out </p>\n\n    </div>\n\n</div> \n\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\customer-profile\customer-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], CustomerProfilePage);
    return CustomerProfilePage;
}());

//# sourceMappingURL=customer-profile.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AutocompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AutocompletePage = /** @class */ (function () {
    function AutocompletePage(navCtrl, geolocation, navParams, viewCtrl, zone, storage, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.storage = storage;
        this.data = data;
        this.currentMapTrack = null;
        this.isTracking = false;
        this.trackedRoute = [];
        this.previousTracks = [];
        this.service = new google.maps.places.AutocompleteService();
        this.action = navParams.get('action');
        console.log(this.action);
        this.autocompleteItems = [];
        this.allDrivers = [];
        this.autocomplete = {
            query: ''
        };
        this.qdriver = {
            query: ''
        };
        this.data.getCustomerFavLocation().subscribe(function (result) {
            if (result.status == "OK") {
                _this.fav_locations = result.success.favlocations;
            }
        });
    }
    AutocompletePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutocompletePage');
    };
    AutocompletePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
    };
    AutocompletePage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        /*this.positionSubscription = this.geolocation.watchPosition()
        .pipe(
          filter((p) => p.coords !== undefined) //Filter Out Errors
        )
        .subscribe(data => {
          console.log(data);
          setTimeout(() => {
            let latLng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
             console.log('coords===>'+this.latlng);
            //this.lng = data.coords.longitude;
            //this.redrawPath(this.trackedRoute);
          }, 0);
        });  */
        this.service.getPlacePredictions({ input: this.autocomplete.query, location: this.latlng }, function (predictions, status) {
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
    };
    AutocompletePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage.prototype.clear = function () {
        console.log(this.autocomplete.query);
        this.autocomplete.query = "";
    };
    AutocompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-autocomplete',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\autocomplete\autocomplete.html"*/'<!--\n\n  Generated template for the AutocompletePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n        <ion-label class="close" text-right (click)="close()">\n\n            Cancel\n\n        </ion-label>\n\n        <!--<ion-buttons right>\n\n            <button [disabled]="saveDisabled" ion-button (click)="save()">Save</button>\n\n        </ion-buttons>-->\n\n    <ion-item *ngIf="action == \'pickup\'" class="pickup">\n\n        <ion-icon item-start ios="md-navigate" md="md-navigate"></ion-icon>\n\n        <ion-label stacked>Pickup Location</ion-label>    \n\n        <ion-input [(ngModel)]="autocomplete.query" (ionChange)="updateSearch()" (ionCancel)="dismiss()"></ion-input>\n\n        <button *ngIf="autocomplete.query != \'\'? true : false" icon-only  ion-button small item-end (click)="clear()"><ion-icon ios="md-close" md="md-close"></ion-icon></button>\n\n    </ion-item>\n\n    \n\n      <ion-item *ngIf="action == \'drop\'" class="drop">\n\n          <ion-icon item-start ios="md-pin" md="md-pin"></ion-icon>\n\n          <ion-label stacked>Drop Off Location</ion-label>\n\n          <ion-input [(ngModel)]="autocomplete.query" (ionChange)="updateSearch()" (ionCancel)="dismiss()"></ion-input>\n\n        <button *ngIf="autocomplete.query != \'\'? true : false" icon-only  ion-button small item-end (click)="clear()"><ion-icon ios="md-close" md="md-close"></ion-icon></button>\n\n          <!-- <ion-input [(ngModel)]="autocomplete.query" (ionChange)="updateSearch()" (ionCancel)="dismiss()"></ion-input> -->\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="action == \'home\' || action == \'work\' || action == \'other\'" class="drop">\n\n          <ion-icon item-start ios="md-pin" md="md-pin"></ion-icon>\n\n          <ion-label stacked>Select Location</ion-label>\n\n          <ion-input [(ngModel)]="autocomplete.query" (ionChange)="updateSearch()" (ionCancel)="dismiss()"></ion-input>\n\n      </ion-item>\n\n\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n\n        <ion-icon item-start ios="md-pin" md="md-pin"></ion-icon>\n\n        {{ item }}\n\n      </ion-item>\n\n    </ion-list>\n\n      <ion-list *ngIf="action != \'home\' && action != \'work\' && action != \'other\' && autocompleteItems == \'\'">\n\n        <ion-item *ngFor="let item of fav_locations" class="fav_loc" tappable (click)="chooseItem(item.location)" >\n\n         <ion-icon item-start name="star"></ion-icon>\n\n         <!--<div class="favLoc_label">-->\n\n            {{ item.location_type }}\n\n         <!--</div>-->\n\n        </ion-item>\n\n      </ion-list>\n\n    \n\n  </ion-content>\n\n  '/*ion-inline-end:"E:\transportApp28082018\src\pages\autocomplete\autocomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], AutocompletePage);
    return AutocompletePage;
}());

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgotpasswoed_forgotpasswoed__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__emailverification_emailverification__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_profile_edit_profile__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SigninPage = /** @class */ (function () {
    function SigninPage(oneSignal, navCtrl, alertCtrl, data, storage, loading, events, geolocation) {
        this.oneSignal = oneSignal;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.data = data;
        this.storage = storage;
        this.loading = loading;
        this.events = events;
        this.geolocation = geolocation;
        this.isRemember = false;
        this.signin = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
    }
    SigninPage.prototype.createUser = function (user) {
        console.log('User created!');
        this.events.publish('user:created', user, Date.now());
    };
    SigninPage.prototype.red_list = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.signIn = function (uname, pass) {
        var _this = this;
        if (this.isRemember == true) {
            this.storage.set('isRemember', true);
        }
        var param = new FormData();
        param.append("email", uname);
        param.append("password", pass);
        var loader = this.loading.create({
            content: "Please wait...",
            spinner: 'bubbles'
        });
        loader.present();
        this.data.userSignIn(param).subscribe(function (result) {
            console.log(result);
            if (result.status == "ERROR") {
                _this.data.presentToast('Invalid Username or Password!');
                loader.dismiss();
            }
            else {
                console.log(result.success.user);
                _this.createUser(result.success.user);
                if (result.success.user[0].active == 1) {
                    _this.storage.set("token", result.success.token);
                    _this.storage.set("user", result.success.user);
                    /*this.geolocation.getCurrentPosition().then((position) => {
                        this.lat = position.coords.latitude;
                        this.long =  position.coords.longitude;
                    });*/
                    //loader.dismiss();  
                    setTimeout(function () {
                        if (result.success.user[0].role == 2) {
                            _this.oneSignal.sendTag('customer_id', result.success.user[0].id);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                            loader.dismiss();
                        }
                        else if (result.success.user[0].role == 3) {
                            _this.oneSignal.sendTag('driver_id', result.success.user[0].id);
                            var param_1 = result.success.user[0].id;
                            _this.data.getDriverProfile(param_1).subscribe(function (result) {
                                if (result.status == 'OK') {
                                    if (result.success.profile[0].is_completed == 0) {
                                        loader.dismiss();
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__edit_profile_edit_profile__["a" /* EditProfilePage */]);
                                    }
                                    else {
                                        loader.dismiss();
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                                    }
                                }
                                else {
                                    //this.data.presentToast('Unable to get your Profile data!');
                                    _this.storage.get('isProfile_Complete').then(function (data1) {
                                        if (data1 == null || data1 == undefined || data1 == false) {
                                            //this.storage.set('showSlide', false);
                                            //show slide logic should run
                                            loader.dismiss();
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__edit_profile_edit_profile__["a" /* EditProfilePage */]);
                                        }
                                        else {
                                            loader.dismiss();
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                                        }
                                    });
                                }
                            });
                            /*this.storage.get('isProfile_Complete').then(data1=>{
                             if(data1 == null || data1 == undefined || data1 == false)
                             {
                               //this.storage.set('showSlide', false);
                               //show slide logic should run
                               this.navCtrl.push(EditProfilePage);
                             }
                             else{
                               this.navCtrl.setRoot(HomePage);
                             }
                           }); */
                        }
                    }, 2500);
                }
                else {
                    loader.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__emailverification_emailverification__["a" /* EmailverificationPage */], { data: result.success.user });
                }
            }
        });
        /*if( uname == 'admin@gmail.com' && pass == 'admin' )
        {
          this.navCtrl.setRoot(HomePage);
        }
        else{
          this.data.presentToast('Incorrect username or password!');
        }*/
    };
    SigninPage.prototype.notify = function (isRemember) {
        //console.log("Toggled: "+ isRemember);
        this.isRemember = !isRemember;
        //console.log("Toggled: "+ this.isRemember); 
    };
    SigninPage.prototype.gotoForgotPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__forgotpasswoed_forgotpasswoed__["a" /* ForgotpasswoedPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\signin\signin.html"*/'<!--<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n\n    <ion-title>\n\n      <h2>Sign In</h2>\n\n    <!--   <p>Sign In</p> --\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>-->\n\n\n\n<ion-content padding> \n\n\n\n  <div class="login-container">\n\n\n\n    <div class="title_div">\n\n      <h2 class="head_title">TFH</h2>\n\n      <h3 class="sub_title">Welcome Back!</h3>\n\n      <p class="title_info">Sign In to continue to TaXI App</p>\n\n    </div>\n\n    <!-- Login form-->\n\n    <form class="sign_in_form" [formGroup]="signin" > \n\n      <ion-list no-lines>\n\n        <ion-item>\n\n          <ion-label stacked>Email Address</ion-label>\n\n          <ion-input type="email" [(ngModel)]="uname" formControlName="email" [class.invalid]="!signin.valid && (signin.controls.email.dirty || submitAttempt)" ></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="error" *ngIf="signin.get(\'email\').hasError(\'required\') && signin.get(\'email\').touched">\n\n            Please fill out this field.\n\n        </div>\n\n            \n\n        <div class="error" *ngIf="!signin.get(\'email\').hasError(\'required\') && (signin.get(\'email\').hasError(\'email\') && signin.get(\'email\').dirty )">\n\n            Please enter valid Email address\n\n        </div>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="pass" formControlName="password" [class.invalid]="!signin.valid && (signin.controls.password.dirty || submitAttempt)" ></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="error" *ngIf="signin.get(\'password\').hasError(\'required\')  && signin.get(\'password\').touched">\n\n            Please fill out this field\n\n        </div>\n\n\n\n        <ion-item>\n\n            <ion-label>Remember Me</ion-label>\n\n            <ion-checkbox (ionChange)="notify(isRemember)"></ion-checkbox>\n\n        </ion-item>\n\n    \n\n        <ion-item class="submit_btn_item">\n\n          <a class="forgot_pass" (click)="gotoForgotPass()"><p>Forgot password?</p></a>\n\n          <button class="login-btn" ion-button color="primary" block  (click)="signIn(uname, pass)" [disabled]="!this.signin.valid">SIGN IN</button>\n\n          <p class="new_acc" (click)=\'red_list()\'>Create New Account</p>\n\n        </ion-item>\n\n      </ion-list> \n\n    </form>\n\n  </div>\n\n</ion-content>      \n\n\n\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams, storage, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.data = data;
        this.feedback = '';
        this.rate = '';
        this.isfav = false;
        this.favDriver = 'Add driver as a favourite';
        this.booking_id = navParams.get('booking_id');
        this.driver_id = navParams.get('driver_id');
        this.feedback_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            feedback: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            rate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage.prototype.sendFeedback = function (feedback, rate) {
        var _this = this;
        if (feedback != '' && rate != '') {
            var param = new FormData();
            param.append("feedback", feedback);
            param.append("rating", rate);
            param.append("driver_id", this.driver_id);
            param.append("booking_id", this.booking_id);
            this.data.feedback(param).subscribe(function (result) {
                if (result.status == "OK") {
                    _this.data.presentToast('Feedback sent successfully');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                }
                else {
                }
            });
        }
    };
    FeedbackPage.prototype.notify = function (isfav) {
        var _this = this;
        //console.log("Toggled: "+ isRemember);
        this.isfav = !isfav;
        if (this.isfav == true) {
            this.favDriver = 'Added to favourite';
            var param = new FormData();
            param.append("driver_id", this.driver_id);
            this.data.addFavDriver(param).subscribe(function (result) {
                if (result.status == "OK") {
                    _this.data.presentToast('Added driver to favorite list successfully');
                }
                else {
                }
            });
        }
        else {
            this.favDriver = 'Add driver as a favourite';
            var param = new FormData();
            param.append("driver_id", this.driver_id);
            this.data.removeFavDriver(param).subscribe(function (result) {
                if (result.status == "OK") {
                    _this.data.presentToast('Removed driver from favorite list successfully');
                }
                else {
                }
            });
        }
        //console.log("Toggled: "+ this.isRemember); 
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\feedback\feedback.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="forgetPass-img" text-center>\n    <img src="assets/imgs/website-rating-feedback-and-review.png" />\n    <ion-item> \n        <button class="fav_driver" (click)="notify(isfav)">{{favDriver}}</button>\n    </ion-item>\n  </div>\n  <form [formGroup]="feedback_form" text-center>      \n    <h2>Feedback</h2>\n    <p>Please help us to serve you better by feeling out a feedback form</p>\n    <ion-textarea formControlName="feedback" [(ngModel)]="feedback" [class.invalid]="!feedback_form.valid && (feedback_form.controls.feedback.dirty || submitAttempt)"></ion-textarea>\n    <div class="error" *ngIf="feedback_form.get(\'feedback\').hasError(\'required\')  && feedback_form.get(\'feedback\').touched">\n      Please fill out this field\n    </div>\n\n    <rating formControlName="rate" [(ngModel)]="rate" \n        readOnly="false"\n        max="5"\n        emptyStarIconName="star-outline" \n        halfStarIconName="star-half"\n        starIconName="star"\n        nullable="false"\n        [class.invalid]="!feedback_form.valid && (feedback_form.controls.rate.dirty || submitAttempt)"\n        >\n    </rating>\n    <div class="error" *ngIf="feedback_form.get(\'feedback\').hasError(\'required\')  && feedback_form.get(\'feedback\').touched">\n      Please fill out this field\n    </div>\n\n    <button class="login-btn" ion-button color="primary" [disabled]="!this.feedback_form.valid" (click)="sendFeedback(feedback,rate)" block >Send</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_profile_customer_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, data, storage, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        this.loading = loading;
        this.user_details = {};
        this.profile = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            fname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            lname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            //email: new FormControl('', [Validators.required,Validators.email]),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(11)]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
        this.Dprofile = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            fname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            lname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            //email: new FormControl('', [Validators.required,Validators.email]),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(11)]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            vehicle_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            vehicle_no: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
        this.storage.get('user').then(function (data) {
            var param = data[0].id;
            _this.role = data[0].role;
            if (data[0].role == 2) {
                _this.data.getCustomerProfile(param).subscribe(function (result) {
                    if (result.status == 'OK') {
                        //console.log(result.success.profile[0].first_name);
                        _this.user_details.fname = result.success.profile[0].first_name;
                        _this.user_details.lname = result.success.profile[0].last_name;
                        //this.user_details.email = result.success.profile[0].email;
                        _this.user_details.phone = result.success.profile[0].phone;
                        _this.user_details.address = result.success.profile[0].address;
                        //this.user_details.avatar = result.success.profile[0].profile;
                    }
                    else {
                    }
                });
            }
            else if (data[0].role == 3) {
                _this.data.getvehicletypes().subscribe(function (result) {
                    if (result.status == 'OK') {
                        console.log('kjndjknbbv==>' + result.success.vehicletypes[0].type);
                        _this.vehicle_types = result.success.vehicletypes;
                    }
                    else {
                        _this.data.presentToast(result.status);
                    }
                });
                _this.data.getDriverProfile(param).subscribe(function (result) {
                    if (result.status == 'OK') {
                        //console.log(result.success.profile[0].first_name);
                        _this.user_details.fname = result.success.profile[0].first_name;
                        _this.user_details.lname = result.success.profile[0].last_name;
                        //this.user_details.email = result.success.profile[0].email;
                        _this.user_details.phone = result.success.profile[0].phone;
                        _this.user_details.address = result.success.profile[0].address;
                        _this.user_details.vehicle_type = result.success.profile[0].vehicle_type;
                        _this.user_details.vehicle_no = result.success.profile[0].vehicle_number;
                    }
                    else {
                    }
                });
            }
        });
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.isValidMobile = function (control) {
        var regExp = /^[0-9]{10}$/;
        if (!regExp.test(control.value)) {
            return { "invalidMobile": true };
        }
        return null;
    };
    EditProfilePage.prototype.ProfileForm = function (profile) {
        var _this = this;
        var param = new FormData();
        if (this.role == 2) {
            param.append("customer_id", this.cust_id);
        }
        else if (this.role == 3) {
            param.append("driver_id", this.cust_id);
            param.append("vehicle_type", profile.vehicle_type);
            param.append("vehicle_number", profile.vehicle_no);
            param.append("is_completed", '1');
        }
        param.append("first_name", profile.fname);
        param.append("last_name", profile.lname);
        //param.append("email",profile.email);
        param.append("phone", profile.phone);
        param.append("address", profile.address);
        //param.append("profile",profile.avatar);
        var loader = this.loading.create({
            content: "Please wait...",
            spinner: 'bubbles'
        });
        loader.present();
        if (this.role == 2) {
            this.data.updateCustomerProfile(param).subscribe(function (result) {
                //console.log(result);    
                //this.userData = result; 
                loader.dismiss();
                if (result.status == "ERROR") {
                    _this.data.presentToast(result.error.email);
                    return false;
                }
                else {
                    //this.storage.set("customer_data",data.msg[0]);
                    _this.data.presentToast('Profile Updated Successfully!');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__customer_profile_customer_profile__["a" /* CustomerProfilePage */]);
                }
            });
        }
        else if (this.role == 3) {
            this.data.updateDriverProfile(param).subscribe(function (result) {
                //console.log(result);    
                //this.userData = result; 
                loader.dismiss();
                if (result.status == "ERROR") {
                    _this.data.presentToast(result.error.email);
                    _this.storage.set('isProfile_Complete', false);
                    return false;
                }
                else {
                    //this.storage.set("customer_data",data.msg[0]);
                    _this.data.presentToast('Profile Updated Successfully!');
                    _this.storage.set('isProfile_Complete', true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                }
            });
        }
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\edit-profile\edit-profile.html"*/'<!--\n\n  Generated template for the EditProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!--<button ion-button menuToggle >\n\n        <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n\n    </button>-->\n\n    <ion-title>Edit Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n         \n\n<ion-content padding>\n\n  <form  *ngIf=\'role == 2\' class="profile_form" [formGroup]="profile" (ngSubmit)="ProfileForm(user_details)"> \n\n    <ion-list>\n\n \n\n    <ion-item>\n\n        <ion-label stacked>First Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user_details.fname" value="{{user_details.fname}}" formControlName="fname" [class.invalid]="!profile.valid && (profile.controls.fname.dirty || submitAttempt)" ></ion-input>\n\n      </ion-item>\n\n      <div class="error" *ngIf="profile.get(\'fname\').hasError(\'required\')  && profile.get(\'fname\').touched">\n\n          Please fill out this field\n\n      </div>\n\n        \n\n      <ion-item>\n\n      <ion-label stacked>Last Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user_details.lname" formControlName="lname" [class.invalid]="!profile.valid && (profile.controls.lname.dirty || submitAttempt)"  ></ion-input>\n\n      </ion-item>\n\n      <div class="error" *ngIf="profile.get(\'lname\').hasError(\'required\')  && profile.get(\'lname\').touched">\n\n          Please fill out this field\n\n      </div>\n\n\n\n      <ion-item>\n\n          <ion-label stacked>Phone No.</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user_details.phone" maxlength="11" formControlName="phone" [class.invalid]="!profile.valid && (profile.controls.phone.dirty || submitAttempt)"  ></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="profile.get(\'phone\').hasError(\'required\')  && profile.get(\'phone\').touched">\n\n            Please fill out this field\n\n        </div>\n\n        <div class="error" *ngIf="profile.get(\'phone\').hasError(\'maxlength\') && profile.get(\'phone\').touched">\n\n            Maximum Length of Phone No. must be 11\n\n        </div>\n\n\n\n      <ion-item>\n\n          <ion-label stacked>Address</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user_details.address" formControlName="address" [class.invalid]="!profile.valid && (profile.controls.address.dirty || submitAttempt)"  ></ion-input>\n\n          </ion-item>\n\n          <div class="error" *ngIf="profile.get(\'address\').hasError(\'required\')  && profile.get(\'address\').touched">\n\n        z      Please fill out this field\n\n          </div>\n\n      <ion-item class="submit_btn_item">\n\n          <button class="profile-btn" ion-button color="primary" block [disabled]="!this.profile.valid">Update</button>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </form>\n\n\n\n\n\n  <form  *ngIf=\'role == 3\' class="profile_form" [formGroup]="Dprofile" (ngSubmit)="ProfileForm(user_details)"> \n\n    <ion-list>\n\n \n\n    <ion-item>\n\n        <ion-label stacked>First Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user_details.fname" value="{{user_details.fname}}" formControlName="fname" [class.invalid]="!Dprofile.valid && (Dprofile.controls.fname.dirty || submitAttempt)" ></ion-input>\n\n      </ion-item>\n\n      <div class="error" *ngIf="Dprofile.get(\'fname\').hasError(\'required\')  && Dprofile.get(\'fname\').touched">\n\n          Please fill out this field\n\n      </div>\n\n        \n\n      <ion-item>\n\n      <ion-label stacked>Last Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user_details.lname" formControlName="lname" [class.invalid]="!Dprofile.valid && (Dprofile.controls.lname.dirty || submitAttempt)"  ></ion-input>\n\n      </ion-item>\n\n      <div class="error" *ngIf="Dprofile.get(\'lname\').hasError(\'required\')  && Dprofile.get(\'lname\').touched">\n\n          Please fill out this field\n\n      </div>\n\n\n\n      <ion-item>\n\n          <ion-label stacked>Phone No.</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user_details.phone" formControlName="phone" [class.invalid]="!Dprofile.valid && (Dprofile.controls.phone.dirty || submitAttempt)"  ></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="Dprofile.get(\'phone\').hasError(\'required\')  && Dprofile.get(\'phone\').touched">\n\n            Please fill out this field\n\n        </div>\n\n        <!--<div class="error" *ngIf="profile.get(\'phone\').hasError(\'required\') && profile.get(\'phone\').touched && profile.get(\'phone\').pattern">\n\n            Please fill out valid phone\n\n        </div>-->\n\n\n\n      <ion-item>\n\n          <ion-label stacked>Address</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user_details.address" formControlName="address" [class.invalid]="!Dprofile.valid && (Dprofile.controls.address.dirty || submitAttempt)"  ></ion-input>\n\n          </ion-item>\n\n          <div class="error" *ngIf="Dprofile.get(\'address\').hasError(\'required\')  && Dprofile.get(\'address\').touched">\n\n              Please fill out this field\n\n          </div>\n\n   \n\n        <ion-item>\n\n            <ion-label stacked></ion-label>\n\n            <ion-select placeholder="Vehicle Type"  [(ngModel)]="user_details.vehicle_type" formControlName="vehicle_type" [class.invalid]="!Dprofile.valid && (Dprofile.controls.vehicle_type.dirty || submitAttempt)"  >\n\n                <ion-option *ngFor="let types of vehicle_types" value="{{types.id}}">{{types.type}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <div class="error" *ngIf="Dprofile.get(\'vehicle_type\').hasError(\'required\')  && Dprofile.get(\'vehicle_type\').touched">\n\n            Please fill out this field\n\n        </div>\n\n        \n\n        <ion-item>\n\n            <ion-label stacked>Vehicle No.</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user_details.vehicle_no" formControlName="vehicle_no" [class.invalid]="!Dprofile.valid && (Dprofile.controls.vehicle_no.dirty || submitAttempt)"  ></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="Dprofile.get(\'vehicle_no\').hasError(\'required\')  && Dprofile.get(\'vehicle_no\').touched">\n\n            Please fill out this field\n\n        </div>\n\n\n\n      <ion-item class="submit_btn_item">\n\n          <button class="profile-btn" ion-button color="primary" block [disabled]="!this.Dprofile.valid">Update</button>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\transportApp28082018\src\pages\edit-profile\edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RideNowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_payment_confirm_payment__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RideNowPage = /** @class */ (function () {
    function RideNowPage(nativeGeocoder, platform, navCtrl, navParams, data, storage) {
        var _this = this;
        this.nativeGeocoder = nativeGeocoder;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        this.Did = '';
        console.log('navParams.get(param)==>' + navParams.get('param'));
        this.data1 = navParams.get('param');
        this.distance = this.data1.distance;
        this.vehicle_types = this.data1.vehicle_type;
        this.pick_up = this.data1.pick_up;
        this.drop = this.data1.drop;
        this.cost = this.data1.cost;
        this.Did = this.data1.Did;
        this.active = '';
        var options = {
            useLocale: true,
            maxResults: 5
        };
        var addresses = [this.pick_up, this.drop];
        var addressFull = [];
        //var addresses = '';
        var geocoder = new google.maps.Geocoder();
        addresses.forEach(function (value) {
            console.log(value);
            geocoder.geocode({ 'address': value }, function (results, status) {
                if (status == 'OK') {
                    var address0 = results[0].geometry.location.lat();
                    var address1 = results[0].geometry.location.lng();
                    console.log(address0, address1);
                    addressFull.push(address0);
                    addressFull.push(address1);
                    //console.log(address);
                }
                else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
        setTimeout(function () {
            console.log('addressFull==>' + addressFull);
            _this.pick_up_lt = addressFull[0];
            _this.pick_up_lg = addressFull[1];
            _this.drop_lt = addressFull[2];
            _this.drop_lg = addressFull[3];
        }, 1500);
        //console.log(this.pick_up_lg);
        //console.log('pick_up_ltlg===>'+pick_up_ltlg);
        /*this.nativeGeocoder.forwardGeocode("'"+this.pick_up+"'", options)
        .then((coordinates: NativeGeocoderForwardResult[]) => console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude))
        .catch((error: any) => console.log(error));*/
        this.storage.get('user').then(function (data) {
            _this.customer_id = data[0].id;
        });
        // console.log('oiuygfbhthis.distance==>>'+this.distance);
        this.driver = {
            fname: 'fname',
            lname: 'lname',
            phone: '98745896',
            address: '',
            vehicle_type: '',
            vehicle_no: ''
        };
        if (this.Did && this.Did != '') {
            var param = new FormData();
            param.append("driver_id", this.Did);
            this.data.getSelectedDriverInfo(param).subscribe(function (result) {
                console.log(result);
                if (result.status == 'OK') {
                    console.log(result.success.driver.first_name);
                    _this.driver.fname = result.success.driver.first_name;
                    _this.driver.lname = result.success.driver.last_name;
                    //this.user_details.email = result.success.profile[0].email;
                    _this.driver.phone = result.success.driver.phone;
                    _this.driver.address = result.success.driver.address;
                    _this.driver.vehicle_type = result.success.driver.vehicle_type;
                    _this.driver.vehicle_no = result.success.driver.vehicle_number;
                }
                else {
                }
            });
        }
    }
    RideNowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RideNowPage');
    };
    RideNowPage.prototype.updateActive = function (name) {
        this.active = name;
    };
    RideNowPage.prototype.forwardGeocode = function (keyword) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': keyword }, function (results, status) {
            if (status == 'OK') {
                console.log('helloooooooooooo====>' + results[0].geometry.location);
                return results[0].geometry.location;
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    RideNowPage.prototype.confirmPayment = function () {
        var _this = this;
        var param = new FormData();
        //console.log(id);
        param.append("customer_id", this.customer_id);
        param.append("schedule", "0");
        param.append("schedule_time", null);
        param.append("distance", this.distance);
        param.append("vehicle_type", this.vehicle_types);
        param.append("source", this.pick_up);
        param.append("source_lat", this.pick_up_lt);
        param.append("source_long", this.pick_up_lg);
        param.append("destination_lat", this.drop_lt);
        param.append("destination_long", this.drop_lg);
        param.append("destination", this.drop);
        param.append("total", null);
        param.append("is_cancelled", "0");
        param.append("is_completed", "0");
        param.append("is_paid", "0");
        param.append("status", "0");
        param.append("cost", this.cost);
        param.append("driver_id", '');
        this.data.bookingRequest(param).subscribe(function (result) {
            console.log(result);
            //this.userData = result; 
            if (result.status == "ERROR") {
                _this.data.presentToast('Error');
                return false;
            }
            else {
                //this.storage.set("customer_data",data.msg[0]);
                _this.data.presentToast('Booking Request Successfull!');
                var param1 = new FormData();
                param1.append("driver_Id", _this.Did);
                param1.append("customer_id", _this.customer_id);
                param1.append("booking_id", result.success.booking_request.id);
                _this.data.postNotification(param1).subscribe(function (result) {
                    if (result.status == "ERROR") {
                    }
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__confirm_payment_confirm_payment__["a" /* ConfirmPaymentPage */], { 'booking_id': result.success.booking_request.id, rideType: 'now', source: _this.pick_up, destination: _this.drop });
            }
        });
    };
    RideNowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ride-now',template:/*ion-inline-start:"E:\transportApp28082018\src\pages\ride-now\ride-now.html"*/'<!--\n  Generated template for the RideNowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Ride Now</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-grid padding class="srcpt">\n      <ion-row class="addr_row">\n        <ion-col col-1 >\n          <ion-icon class="nav_icon" name="navigate"></ion-icon>\n        </ion-col>\n        <ion-col col-9 class="addr">\n          {{pick_up}}    \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid padding class="srcpt">\n      <ion-row class="addr_row">\n        <ion-col col-1 >\n          <ion-icon name="car"></ion-icon>    \n        </ion-col>\n        <ion-col col-9 class="addr">\n          {{vehicle_types}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid padding class="srcpt">\n      <ion-row class="addr_row">\n        <ion-col col-1 >\n          <ion-icon name="pin"></ion-icon>\n        </ion-col>\n        <ion-col col-9 class="addr">\n          {{drop}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid padding class="moreInfo">\n      <ion-row>\n        <ion-col col-3 class="title_col">\n          Distance :\n        </ion-col>\n        <ion-col col-3 class="value_col">\n          {{distance}} \n        </ion-col>\n        <ion-col col-3 class="title_col">\n          Cost : \n        </ion-col>\n        <ion-col col-3 class="value_col">\n          ${{cost}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <div class="paymentMethodDiv">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <div class="innerDiv" [ngClass]="active === \'cash\' ? \'active_payment\' : \'\'" (click)="updateActive(\'cash\')">\n              <img class="list_item_icon" src="assets/imgs/notes.png"/>\n              <ion-label>Cash</ion-label>\n            </div>\n          </ion-col>\n          <ion-col col-4>\n            <div class="innerDiv" [ngClass]="active === \'card\' ? \'active_payment\' : \'\'" (click)="updateActive(\'card\')">\n              <img class="list_item_icon" src="assets/imgs/credit-card.png"/>\n              <ion-label>Card</ion-label>\n            </div>\n          </ion-col>\n          <ion-col col-4>\n            <div class="innerDiv" [ngClass]="active === \'wallet\' ? \'active_payment\' : \'\'" (click)="updateActive(\'wallet\')">\n              <img class="list_item_icon" src="assets/imgs/wallet.png"/>\n              <ion-label>Wallet</ion-label>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n  <button (click)=\'confirmPayment()\' class="login-btn" ion-button color="primary" block >Confirm Ride Request</button>\n</ion-content> '/*ion-inline-end:"E:\transportApp28082018\src\pages\ride-now\ride-now.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RideNowPage);
    return RideNowPage;
}());

//# sourceMappingURL=ride-now.js.map

/***/ })

},[392]);
//# sourceMappingURL=main.js.map