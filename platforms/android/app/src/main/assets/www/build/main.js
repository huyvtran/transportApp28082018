webpackJsonp([12],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(21);
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
 * Generated class for the AvatarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvatarPage = /** @class */ (function () {
    function AvatarPage(navCtrl, navParams, DomSanitizer, camera, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DomSanitizer = DomSanitizer;
        this.camera = camera;
        this.http = http;
    }
    AvatarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvatarPage');
    };
    AvatarPage.prototype.OpenCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = _this.DomSanitizer.bypassSecurityTrustUrl(imageData);
        }, function (err) {
            // Handle error
        });
    };
    AvatarPage.prototype.OpenGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = _this.DomSanitizer.bypassSecurityTrustUrl(imageData);
        }, function (err) {
            // Handle error
        });
    };
    AvatarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avatar',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\avatar\avatar.html"*/'<!--\n  Generated template for the AvatarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Avatar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="OpenCamera()">Open Camera</button>\n  <button ion-button full (click)="OpenGallery()">Open Gallery</button>\n\n  <img [src]="base64Image"/>        \n\n  <button full ion-button>Upload</button>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\avatar\avatar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AvatarPage);
    return AvatarPage;
}());

//# sourceMappingURL=avatar.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_profile_customer_profile__ = __webpack_require__(36);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-reset',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\password-reset\password-reset.html"*/'<!--\n  Generated template for the PasswordResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="sideMenu">\n    <ion-title> Change Password </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="head_container" text-center >\n    <div class="first_key">\n        <img src="../../assets/imgs/key.png" />\n    </div>\n    <div class="second_key">\n        <img src="../../assets/imgs/key.png" />\n    </div>\n  </div>\n\n  <form class="updatepass_form" [formGroup]="change_pass"> \n    <ion-list>\n      <ion-item>\n        <ion-label floating  text-center>Current Password</ion-label>\n        <ion-input [(ngModel)]="password.current_pass" type="password" minlength="6" formControlName="current_pass" [class.invalid]="!change_pass.valid && (change_pass.controls.current_pass.dirty || submitAttempt)" ></ion-input>\n      </ion-item>\n      <div class="error" *ngIf="change_pass.get(\'current_pass\').hasError(\'required\')  && change_pass.get(\'current_pass\').touched">\n          Please fill out this field\n      </div>\n      <div class="error" *ngIf="change_pass.get(\'current_pass\').hasError(\'minlength\')  && change_pass.get(\'current_pass\').touched">\n          Minimum Length of password must be 6\n      </div>\n\n      <ion-item>\n        <ion-label floating  text-center>New Password</ion-label>\n        <ion-input [(ngModel)]="password.new_pass" type="password"minlength="6" formControlName="new_pass" [class.invalid]="!change_pass.valid && (change_pass.controls.new_pass.dirty || submitAttempt)" ></ion-input>\n      </ion-item>\n      <div class="error" *ngIf="change_pass.get(\'new_pass\').hasError(\'required\')  && change_pass.get(\'new_pass\').touched">\n          Please fill out this field\n      </div>\n      <div class="error" *ngIf="change_pass.get(\'new_pass\').hasError(\'minlength\')  && change_pass.get(\'new_pass\').touched">\n          Minimum Length of password must be 6\n      </div>\n\n      <ion-item>\n        <ion-label floating  text-center>Confirm New Password</ion-label>\n        <ion-input [(ngModel)]="password.confirm_new_pass" type="password"minlength="6" formControlName="confirm_new_pass" [class.invalid]="!change_pass.valid && (change_pass.controls.confirm_new_pass.dirty || submitAttempt)" ></ion-input>\n      </ion-item>\n      <div class="error" *ngIf="change_pass.get(\'confirm_new_pass\').hasError(\'required\')  && change_pass.get(\'confirm_new_pass\').touched">\n          Please fill out this field\n      </div>\n      <div class="error" *ngIf="change_pass.get(\'confirm_new_pass\').hasError(\'minlength\')  && change_pass.get(\'confirm_new_pass\').touched">\n          Minimum Length of password must be 6\n      </div>\n\n\n      <ion-item class="submit_btn_item">\n        <button class="login-btn" ion-button color="primary" block  (click)="updatePassword(password)">Done</button>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\password-reset\password-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PasswordResetPage);
    return PasswordResetPage;
}());

//# sourceMappingURL=password-reset.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_profile_customer_profile__ = __webpack_require__(36);
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
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            //avatar: new FormControl('', [Validators.required])   
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
                _this.data.getDriverProfile(param).subscribe(function (result) {
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
        });
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.ProfileForm = function (profile) {
        var _this = this;
        var param = new FormData();
        if (this.role == 2) {
            param.append("customer_id", this.cust_id);
        }
        else if (this.role == 3) {
            param.append("driver_id", this.cust_id);
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
                    return false;
                }
                else {
                    //this.storage.set("customer_data",data.msg[0]);
                    _this.data.presentToast('Profile Updated Successfully!');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__customer_profile_customer_profile__["a" /* CustomerProfilePage */]);
                }
            });
        }
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\edit-profile\edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n        <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n    </button>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n         \n<ion-content padding>\n  <form class="profile_form" [formGroup]="profile" (ngSubmit)="ProfileForm(user_details)"> \n    <ion-list>\n \n    <ion-item>\n        <ion-label stacked>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="user_details.fname" value="{{user_details.fname}}" formControlName="fname" [class.invalid]="!profile.valid && (profile.controls.fname.dirty || submitAttempt)" ></ion-input>\n      </ion-item>\n      <div class="error" *ngIf="profile.get(\'fname\').hasError(\'required\')  && profile.get(\'fname\').touched">\n          Please fill out this field\n      </div>\n        \n      <ion-item>\n      <ion-label stacked>Last Name</ion-label>\n      <ion-input type="text" [(ngModel)]="user_details.lname" formControlName="lname" [class.invalid]="!profile.valid && (profile.controls.lname.dirty || submitAttempt)"  ></ion-input>\n      </ion-item>\n      <div class="error" *ngIf="profile.get(\'lname\').hasError(\'required\')  && profile.get(\'lname\').touched">\n          Please fill out this field\n      </div>\n      \n      <!--<ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="user_details.email" formControlName="email" [class.invalid]="!profile.valid && (profile.controls.email.dirty || submitAttempt)" ></ion-input>\n      </ion-item>\n      <div class="error" *ngIf="profile.get(\'email\').hasError(\'required\') && profile.get(\'email\').touched">\n          Please fill out this field.\n      </div>\n          \n      <div class="error" *ngIf="!profile.get(\'email\').hasError(\'required\') && (profile.get(\'email\').hasError(\'email\') && profile.get(\'email\').dirty )">\n          Please enter valid Email address\n      </div>-->\n\n      <ion-item>\n          <ion-label stacked>Phone No.</ion-label>\n          <ion-input type="text" [(ngModel)]="user_details.phone" formControlName="phone" [class.invalid]="!profile.valid && (profile.controls.phone.dirty || submitAttempt)"  ></ion-input>\n        </ion-item>\n        <div class="error" *ngIf="profile.get(\'phone\').hasError(\'required\')  && profile.get(\'phone\').touched">\n            Please fill out this field\n        </div>\n        <!--<div class="error" *ngIf="profile.get(\'phone\').hasError(\'required\') && profile.get(\'phone\').touched && profile.get(\'phone\').pattern">\n            Please fill out valid phone\n        </div>-->\n\n      <ion-item>\n          <ion-label stacked>Address</ion-label>\n          <ion-input type="text" [(ngModel)]="user_details.address" formControlName="address" [class.invalid]="!profile.valid && (profile.controls.address.dirty || submitAttempt)"  ></ion-input>\n          </ion-item>\n          <div class="error" *ngIf="profile.get(\'address\').hasError(\'required\')  && profile.get(\'address\').touched">\n              Please fill out this field\n          </div>\n   \n      <!--<ion-item>\n          <ion-label stacked>Avatar</ion-label>\n          <ion-input type="file" [(ngModel)]="user_details.avatar" formControlName="avatar" [class.invalid]="!profile.valid && (profile.controls.avatar.dirty || submitAttempt)"  ></ion-input>\n          </ion-item>\n          <div class="error" *ngIf="profile.get(\'avatar\').hasError(\'required\')  && profile.get(\'avatar\').touched">\n              Please fill out this field\n          </div>-->\n\n      <ion-item class="submit_btn_item">\n          <button class="profile-btn" ion-button color="primary" block [disabled]="!this.profile.valid">Update</button>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailverificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], EmailverificationPage.prototype, "nav", void 0);
    EmailverificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emailverification',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\emailverification\emailverification.html"*/'<!--\n  Generated template for the EmailverificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!--<button ion-button (click)=\'goBack()\' >Go Back</button>-->\n  <div class="emptydiv" text-center>\n    <img src="../../assets/imgs/letter.png" />\n  </div>\n  <div class="contentdiv" text-center>\n    <h2>Verify your email address</h2>\n    <p>{{first_name}} {{last_name}} to start using TFH, we need to verify your email ID : {{email}}.</p>\n    <p>Check your email & click the verification link to activate your account.</p>\n    <!--<button ion-button class="login-btn">CLICK TO VERIFY</button>-->\n  </div>\n</ion-content>\n   '/*ion-inline-end:"E:\Ionic\myApp1\src\pages\emailverification\emailverification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EmailverificationPage);
    return EmailverificationPage;
}());

//# sourceMappingURL=emailverification.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswoedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(14);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpasswoed',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\forgotpasswoed\forgotpasswoed.html"*/'<!--\n  Generated template for the ForgotpasswoedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="forgetPass-img" text-center>\n    <img src="../../assets/imgs/logotransperent.png" />\n  </div>\n  <form text-center [formGroup]="forgetpass">      \n    <h2>Forgot your password?</h2>\n    <p>Enter your Email below to receive your password reset instructions</p>\n    <input type="email" placeholder="Email Address" [(ngModel)]="email" formControlName="email" [class.invalid]="!forgetpass.valid && (forgetpass.controls.email.dirty || submitAttempt)" >\n    \n    <div class="error" *ngIf="forgetpass.get(\'email\').hasError(\'required\') && forgetpass.get(\'email\').touched">\n      Please fill out this field.\n    </div>\n        \n    <div class="error" *ngIf="!forgetpass.get(\'email\').hasError(\'required\') && (forgetpass.get(\'email\').hasError(\'email\') && forgetpass.get(\'email\').dirty )">\n        Please enter valid Email address\n    </div>\n\n    <button class="login-btn" ion-button color="primary" block  (click)="forgotpass(email)" [disabled]="!this.forgetpass.valid">Send</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\forgotpasswoed\forgotpasswoed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ForgotpasswoedPage);
    return ForgotpasswoedPage;
}());

//# sourceMappingURL=forgotpasswoed.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(90);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", Object)
    ], IntroPage.prototype, "slider", void 0);
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\intro\intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n  <ion-navbar>\n    <ion-title>Intro</ion-title>\n  </ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content >\n    <!--<ion-slides  pager="true" autoplay="4000" speed="2000">-->\n        <ion-slides  pager="true" #slides>\n        <ion-slide >\n          <div class="slider-1-img">\n              <img src="../../assets/imgs/taxi.png" />\n          </div>\n          <div text-center class="slider-1-content">\n              <h2>Plan a Trip</h2>\n              <p>Choose your pickup and drop location. Choose cab of your choice, we have car for everything. Ride now or later.</p>\n          </div>\n        </ion-slide>\n        <ion-slide >\n            <div class="slider-2-img">\n                <img src="../../assets/imgs/taxi-driver.png" />\n            </div>\n            <div text-center class="slider-1-content">\n                <h2>Near By Driver</h2>\n                <p>Select near by driver of your pickup location. We give you the best price. We guaranteed!</p>\n            </div>\n        </ion-slide>\n        <ion-slide >\n            <div class="slider-3-img">\n                <img src="../../assets/imgs/payment-method.png" />\n            </div>\n            <div text-center class="slider-1-content">\n                <h2>Secure Payment</h2>\n                <p>Do your payment as per your convenient. Pay in Cash or Wallet at departure.</p>\n              </div>\n        </ion-slide>\n      </ion-slides>\n</ion-content>\n<ion-footer>\n    <button *ngIf=\'last_slide==2 || last_slide==1\' ion-button icon-only clear (click)="getPrev()" class="arrow-back">Prev<!--<ion-icon name="arrow-back"></ion-icon>--></button>\n    <button *ngIf=\'last_slide!=1\' ion-button icon-only clear (click)="getNext()" class="arrow-forward">Next<!--<ion-icon name="arrow-forward"></ion-icon>--></button>\n    <button *ngIf=\'last_slide==1\' ion-button icon-only clear (click)="getNext()" class="arrow-forward">Done<!--<ion-icon name="arrow-forward"></ion-icon>--></button>\n</ion-footer>\n     '/*ion-inline-end:"E:\Ionic\myApp1\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(90);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>\n	    <h2>Sign Up</h2>\n	</ion-title>\n  </ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content padding>\n\n  <div class="login-container">\n  	<ion-icon name="close" navPop></ion-icon>\n  	<div class="title_div">\n      <h2 class="head_title">TFH</h2>\n      <h2 class="sub_title">Sign Up</h2>\n    </div>\n    <!-- Sign up form-->\n    <form class="sign_up_form" [formGroup]="signup" (ngSubmit)="SignupForm()"> \n      <ion-list no-lines>\n      	<ion-item>\n          <ion-label stacked>First Name</ion-label>\n          <ion-input type="text" [(ngModel)]="user_details.fname" formControlName="fname" [class.invalid]="!signup.valid && (signup.controls.fname.dirty || submitAttempt)" ></ion-input>\n        </ion-item>\n        <div class="error" *ngIf="signup.get(\'fname\').hasError(\'required\')  && signup.get(\'fname\').touched">\n            Please fill out this field\n        </div>\n\n        <ion-item>\n          <ion-label stacked>Last Name</ion-label>\n          <ion-input type="text" [(ngModel)]="user_details.lname" formControlName="lname" [class.invalid]="!signup.valid && (signup.controls.lname.dirty || submitAttempt)"  ></ion-input>\n        </ion-item>\n        <div class="error" *ngIf="signup.get(\'lname\').hasError(\'required\')  && signup.get(\'lname\').touched">\n            Please fill out this field\n        </div>\n\n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="email" [(ngModel)]="user_details.email" formControlName="email" [class.invalid]="!signup.valid && (signup.controls.email.dirty || submitAttempt)" ></ion-input>\n        </ion-item>\n        <div class="error" *ngIf="signup.get(\'email\').hasError(\'required\') && signup.get(\'email\').touched">\n            Please fill out this field.\n        </div>\n            \n        <div class="error" *ngIf="!signup.get(\'email\').hasError(\'required\') && (signup.get(\'email\').hasError(\'email\') && signup.get(\'email\').dirty )">\n            Please enter valid Email address\n        </div>\n\n        <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="user_details.password" minlength="6" formControlName="password" [class.invalid]="!signup.valid && (signup.controls.password.dirty || submitAttempt)"  ></ion-input>\n        </ion-item>\n        <div class="error" *ngIf="signup.get(\'password\').hasError(\'required\')  && signup.get(\'password\').touched">\n            Please fill out this field\n        </div>\n        <div class="error" *ngIf="signup.get(\'password\').hasError(\'minlength\')  && signup.get(\'password\').touched">\n            Minimum Length of password must be 6\n        </div>\n\n        <ion-item>\n          <ion-label stacked>Confirm Password</ion-label>\n          <ion-input type="password" [(ngModel)]="user_details.c_password" formControlName="c_password" [class.invalid]="!signup.valid && (signup.controls.c_password.dirty || submitAttempt)" ></ion-input>\n        </ion-item>\n        <div class="error" *ngIf="signup.get(\'c_password\').hasError(\'required\') && signup.get(\'c_password\').hasError(\'mismatchedPasswords\') && signup.get(\'c_password\').touched">\n            Please fill out this field\n        </div>\n\n        <ion-item>\n            <ion-label stacked></ion-label>\n            <ion-select placeholder="Role"  [(ngModel)]="user_details.role" formControlName="role" [class.invalid]="!signup.valid && (signup.controls.role.dirty || submitAttempt)"  >\n                <ion-option *ngFor="let role of roles" value="{{role.id}}">{{role.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <div class="error" *ngIf="signup.get(\'role\').hasError(\'required\')  && signup.get(\'role\').touched">\n              Please fill out this field\n          </div>\n\n        <ion-item class="submit_btn_item">\n            <button class="sign_up-btn" ion-button color="primary" block [disabled]="!this.signup.valid">SIGN UP</button>\n        </ion-item>\n \n      </ion-list>\n    </form>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
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
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, data, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        this.data.getFAQ().subscribe(function (result) {
            console.log(result);
            if (result.status == "ERROR") {
                _this.data.presentToast('Invalid Username or Password!');
            }
            else {
                console.log(result);
                _this.information = result.success.faqs;
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
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class=\'faqs\' *ngFor="let item of information; let i = index">\n        <ion-list>\n          <ion-item>\n              <button class="questions" text-wrap ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n                <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n                <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n                    {{ item.question }}\n              </button>\n          </ion-item>\n          <ion-item class=\'answers\' *ngIf="item.open" text-wrap>      \n              {{item.answer}}\n          </ion-item>\n      </ion-list>\n    </ion-card>\n</ion-content>\n<!--<div class="last_div">  \n    <div class="inner_last_div">\n      <p>For more queries Click Here</p>\n    </div>\n  </div> -->\n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_google_maps_google_maps__ = __webpack_require__(53);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pleaseConnect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "pleaseConnect", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\map\map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n  <ion-navbar color="sideMenu" hideBackButton>\n    <button ion-button menuToggle >\n      <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n    </button>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id=\'map\'></div>\n</ion-content>-->\n\n\n\n\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-buttons left>\n            <button ion-button (click)="close()">Cancel</button>\n        </ion-buttons>\n        <ion-buttons right>\n            <button [disabled]="saveDisabled" ion-button (click)="save()">Save</button>\n        </ion-buttons>\n    </ion-navbar>\n \n    <ion-toolbar>\n        <ion-searchbar [(ngModel)]="query" (ionInput)="searchPlace()"></ion-searchbar>\n    </ion-toolbar>\n \n    <ion-list>\n        <ion-item *ngFor="let place of places" (touchstart)="selectPlace(place)">{{place.description}}</ion-item>\n    </ion-list>\n \n</ion-header>\n \n<ion-content>\n \n    <div #pleaseConnect id="please-connect">\n        <p>Please connect to the Internet...</p>\n    </div>\n \n    <div #map id="map">\n        <ion-spinner></ion-spinner>\n    </div>\n \n</ion-content>\n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__ = __webpack_require__(58);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(eve, navCtrl, modalCtrl, storage, data, geolocation, navParams, zone, maps, platform, viewCtrl) {
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
        this.fav_location = 'Favorite Location';
        this.fav_driver = 'Favorite Driver';
        //this.searchDisabled = true;
        //this.saveDisabled = true;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.showAddressModal = function () {
        var _this = this;
        //console.log(act);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__["a" /* AutocompletePage */]);
        var me = this;
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.fav_location = data;
        });
        modal.present();
    };
    SettingsPage.prototype.showDriverModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__["a" /* AutocompletePage */], { action: 'driver' });
        var me = this;
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.fav_driver = data;
        });
        modal.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="sideMenu" hideBackButton>\n    <button ion-button menuToggle >\n      <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n    </button>\n    <ion-title>\n        Settings\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-label class="fav_loc_label">\n      Your Favorite Location : \n    </ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8>\n          <ion-label class="fav_loc" text-wrap>{{fav_location}}</ion-label>\n        </ion-col>\n        <ion-col col-4 class="fav_loc_icons">\n            <ion-icon name="eye"></ion-icon>\n            <ion-icon name="create" (click)="showAddressModal()"></ion-icon>\n            <ion-icon name="trash"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n      <ion-label class="fav_driver_label">\n        Your Favorite Driver : \n      </ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-8>\n            <ion-label class="fav_driver">Driver</ion-label>\n          </ion-col>\n          <ion-col col-4 class="fav_driver_icons">\n              <ion-icon name="eye"></ion-icon>\n              <ion-icon name="create" (click)="showDriverModal()"></ion-icon>\n              <ion-icon name="trash"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ViewController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 133:
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
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
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
            console.log("Token here" + _this.token);
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
            console.log("Token here" + _this.token);
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
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/autocomplete/autocomplete.module": [
		299,
		11
	],
	"../pages/avatar/avatar.module": [
		300,
		10
	],
	"../pages/customer-profile/customer-profile.module": [
		301,
		9
	],
	"../pages/edit-profile/edit-profile.module": [
		304,
		8
	],
	"../pages/emailverification/emailverification.module": [
		302,
		7
	],
	"../pages/forgotpasswoed/forgotpasswoed.module": [
		303,
		6
	],
	"../pages/help/help.module": [
		306,
		5
	],
	"../pages/intro/intro.module": [
		305,
		4
	],
	"../pages/map/map.module": [
		307,
		3
	],
	"../pages/password-reset/password-reset.module": [
		308,
		2
	],
	"../pages/settings/settings.module": [
		309,
		1
	],
	"../pages/signup/signup.module": [
		310,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], ConnectivityServiceProvider);
    return ConnectivityServiceProvider;
}());

//# sourceMappingURL=connectivity-service.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_customer_profile_customer_profile__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_map_map__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_password_reset_password_reset__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_avatar_avatar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_autocomplete_autocomplete__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_help_help__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_forgotpasswoed_forgotpasswoed__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_emailverification_emailverification__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_data_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_connectivity_service_connectivity_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_network__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_google_maps_google_maps__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_customer_profile_customer_profile__["a" /* CustomerProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_password_reset_password_reset__["a" /* PasswordResetPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_avatar_avatar__["a" /* AvatarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgotpasswoed_forgotpasswoed__["a" /* ForgotpasswoedPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_emailverification_emailverification__["a" /* EmailverificationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    preloadModules: true,
                }, {
                    links: [
                        { loadChildren: '../pages/autocomplete/autocomplete.module#AutocompletePageModule', name: 'AutocompletePage', segment: 'autocomplete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avatar/avatar.module#AvatarPageModule', name: 'AvatarPage', segment: 'avatar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-profile/customer-profile.module#CustomerProfilePageModule', name: 'CustomerProfilePage', segment: 'customer-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emailverification/emailverification.module#EmailverificationPageModule', name: 'EmailverificationPage', segment: 'emailverification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpasswoed/forgotpasswoed.module#ForgotpasswoedPageModule', name: 'ForgotpasswoedPage', segment: 'forgotpasswoed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-reset/password-reset.module#PasswordResetPageModule', name: 'PasswordResetPage', segment: 'password-reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_customer_profile_customer_profile__["a" /* CustomerProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_password_reset_password_reset__["a" /* PasswordResetPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_avatar_avatar__["a" /* AvatarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgotpasswoed_forgotpasswoed__["a" /* ForgotpasswoedPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_emailverification_emailverification__["a" /* EmailverificationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_26__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_network__["a" /* Network */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_customer_profile_customer_profile__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_help_help__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, data, storage, events) {
        var _this = this;
        this.data = data;
        this.storage = storage;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__["a" /* IntroPage */];
        this.fname = '';
        this.lname = '';
        this.email = '';
        events.subscribe('user:created', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            console.log('Welcome', user, 'at', time);
            _this.fname = user[0].first_name;
            _this.lname = user[0].last_name;
            _this.email = user[0].email;
            _this.role = user[0].role;
            console.log('this.role==>' + _this.role);
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = {
            homePage: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            customerProfilePage: __WEBPACK_IMPORTED_MODULE_8__pages_customer_profile_customer_profile__["a" /* CustomerProfilePage */],
            findabranchPage: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            mapPage: __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */],
            helpPage: __WEBPACK_IMPORTED_MODULE_10__pages_help_help__["a" /* HelpPage */],
            settingsPage: __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */]
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ionic\myApp1\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <!--<ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>-->\n      <ion-card class="menu-card">\n        <ion-item text-center>\n          <ion-avatar>\n            <img class="menu_header_avtar" src="../assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png">\n          </ion-avatar>\n          <h2>{{fname}} {{lname}}</h2>\n          <p>{{email}}</p>\n        </ion-item>\n      </ion-card>\n    </ion-header>\n  \n    <ion-content *ngIf="role==2" class="sideMenu">\n      <ion-list class="menu-list" no-lines>\n        <!-- <button class="sideMenuItem" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="add-circle"></ion-icon>\n          {{p.title}}\n        </button> -->\n        <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.homePage)">\n            <!--<ion-icon class="sideMenuIcons" name="home"></ion-icon>-->\n            <ion-grid>\n              <ion-row>\n                <ion-col col-3>\n                  <img class="list_item_icon" src="../assets/imgs/riding-car.png"/>\n                </ion-col>\n                <ion-col col-9>\n                    <div class="list_item_title">Book A Ride</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </button>\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.customerProfilePage)">  \n            <!--<ion-icon ios="ios-person" md="md-person"></ion-icon>-->\n            <ion-grid>\n                <ion-row>\n                  <ion-col col-3>\n                    <img class="list_item_icon" src="../assets/imgs/user.png"/>\n                  </ion-col>\n                  <ion-col col-9>\n                      <div class="list_item_title">Profile</div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n          </button>\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.mapPage)">  \n              <!--<ion-icon ios="ios-person" md="md-person"></ion-icon>-->\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-3>\n                      <img class="list_item_icon" src="../assets/imgs/calendar-page-with-circular-clock-symbol.png"/>\n                    </ion-col>\n                    <ion-col col-9>\n                        <div class="list_item_title">Your Bookings</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n          </button>\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.emailverificationPage)">  \n              <!--<ion-icon ios="ios-cog" md="md-cog"></ion-icon>-->\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-3>\n                      <img class="list_item_icon" src="../assets/imgs/wallet.png"/>\n                    </ion-col>\n                    <ion-col col-9>\n                        <div class="list_item_title">Payments</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid> \n          </button>\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.settingsPage)">  \n              <!--<ion-icon ios="ios-book" md="md-book"></ion-icon>-->\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-3>   \n                      <img class="list_item_icon" src="../assets/imgs/settings.png"/>\n                    </ion-col>\n                    <ion-col col-9>\n                        <div class="list_item_title">Settings</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n          </button>\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.homePage)">  \n              <!--<ion-icon ios="ios-book" md="md-book"></ion-icon>-->\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-3>\n                      <img class="list_item_icon" src="../assets/imgs/notification.png"/>\n                    </ion-col>\n                    <ion-col col-9>\n                        <div class="list_item_title">Notifications</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n          </button>\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.homePage)">  \n              <!--<ion-icon ios="logo-usd" md="logo-usd"></ion-icon>-->\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-3>\n                      <img class="list_item_icon" src="../assets/imgs/giftbox-outline.png"/>\n                    </ion-col>\n                    <ion-col col-9>\n                        <div class="list_item_title">Refer & Earn</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>   \n          </button>\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.push(pages.helpPage)">  \n              <!--<ion-icon ios="ios-help-circle" md="md-help-circle"></ion-icon>-->\n              <ion-grid>\n                  <ion-row>      \n                    <ion-col col-3>\n                      <img class="list_item_icon" src="../assets/imgs/chat.png"/>\n                    </ion-col>\n                    <ion-col col-9>\n                        <div class="list_item_title">Help</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>    \n          </button>\n          <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.homePage)">  \n              <!--<ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>-->\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-3>\n                      <img class="list_item_icon" src="../assets/imgs/notepad.png"/>\n                    </ion-col>\n                    <ion-col col-9>\n                        <div class="list_item_title">Privacy Policy</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>   \n          </button>\n      </ion-list>    \n    </ion-content>\n\n\n\n    <ion-content *ngIf="role==3" class="sideMenu">\n        <ion-list class="menu-list" no-lines>\n          <!-- <button class="sideMenuItem" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n            <ion-icon name="add-circle"></ion-icon>\n            {{p.title}}\n          </button> -->\n            <button class="sideMenuItem" menuClose detail-none ion-item icon-left (click)="nav.setRoot(pages.customerProfilePage)">  \n              <!--<ion-icon ios="ios-person" md="md-person"></ion-icon>-->\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-3>\n                      <img class="list_item_icon" src="../assets/imgs/user.png"/>\n                    </ion-col>\n                    <ion-col col-9>\n                        <div class="list_item_title">Profile</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n            </button>\n            \n        </ion-list>    \n      </ion-content>\n  \n  </ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"E:\Ionic\myApp1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(eve, navCtrl, modalCtrl, storage, data, geolocation, navParams, zone, maps, platform, viewCtrl) {
        var _this = this;
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
        this.searchDisabled = true;
        this.saveDisabled = true;
        this.action = {
            pickup: 'pickup',
            drop: 'drop'
        };
        this.address = {
            place: '',
            drop_place: ''
        };
        this.storage.get('token')
            .then(function (data) {
            //console.log("Token : "+data);
            _this.data.token = data;
        });
    }
    HomePage.prototype.red_list = function () {
        this.navCtrl.push('');
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(function () {
            _this.autocompleteService = new google.maps.places.AutocompleteService();
            _this.searchDisabled = false;
        });
    };
    HomePage.prototype.showAddressModal = function (act) {
        var _this = this;
        console.log(act);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__["a" /* AutocompletePage */], { action: act });
        var me = this;
        this.ionViewDidLoad();
        modal.onDidDismiss(function (data) {
            if (act == 'pickup') {
                _this.address.place = data;
                // this.getgeocodeAddress(this.address.place);
            }
            else {
                _this.address.drop_place = data;
            }
            if (_this.address.place != '' && _this.address.drop_place != '') {
                _this.maps.startNavigating(_this.address.place, _this.address.drop_place, _this.directionsPanel.nativeElement);
            }
        });
        modal.present();
    };
    HomePage.prototype.rideNow = function (distance) {
        console.log('pickup==>' + this.address.place);
        console.log('drop==>' + this.address.drop_place);
        console.log('schedule==>' + '1');
        console.log('date==>' + new Date().toISOString());
    };
    HomePage.prototype.rideLater = function (distance) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pleaseConnect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "pleaseConnect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('directionsPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "directionsPanel", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="sideMenu" hideBackButton>\n    <button ion-button menuToggle >\n      <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n    </button>\n    <ion-title>\n        Book A Ride\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="home-content">\n  <!--<ion-grid>\n    <ion-row>\n      <ion-col col-6 text-center>\n          <img src="../../assets/imgs/143366-200.png" width="100" height="100" class="book_icon"/>\n          <h2>Book a Ride</h2>\n      </ion-col>\n      <ion-col col-6 text-center>\n          <img src="../../assets/imgs/delivery (1).png" width="100" height="100" class="book_icon" />\n          <h2>Book a Delivery</h2>\n      </ion-col>\n    </ion-row>\n  </ion-grid>-->\n  <div #pleaseConnect id="please-connect">\n    <p>Please connect to the Internet...</p>\n  </div>\n\n  <ion-card class="directionsPanel">\n      <ion-card-content>\n          <div #directionsPanel></div>\n      </ion-card-content>\n  </ion-card>\n\n  <div #map id="map">\n      <ion-spinner></ion-spinner>\n  </div>\n  \n  <ion-card class="card-content">  \n      <ion-list no-lines>\n        <ion-item>\n            <ion-icon item-start ios="md-navigate" md="md-navigate"></ion-icon>\n            <ion-label stacked>Pickup Location</ion-label>\n            <ion-input (click)="showAddressModal(action.pickup)" [(ngModel)]="address.place" type="text" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start ios="md-pin" md="md-pin"></ion-icon>\n            <ion-label stacked>Drop Off Location</ion-label>\n            <ion-input (click)="showAddressModal(action.drop)" [(ngModel)]="address.drop_place" type="text"  ></ion-input>\n        </ion-item>\n        <div #distance id="distance">\n            <ion-input [(ngModel)]="maps.distance" type="hidden"  ></ion-input>\n        </div>\n      </ion-list>\n    </ion-card>\n</ion-content>\n<div class="last_div">  \n  <div class="inner_last_div">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 class="ride_now" (click)=\'rideNow(maps.distance)\'><p>Ride Now</p></ion-col>\n        <ion-col col-6 class="ride_later" (click)=\'rideLater(maps.distance)\'><p>Ride Later</p></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div> \n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ViewController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__password_reset_password_reset__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_profile_edit_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__avatar_avatar__ = __webpack_require__(112);
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
 * Generated class for the CustomerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerProfilePage = /** @class */ (function () {
    function CustomerProfilePage(navCtrl, navParams, data, storage, DomSanitizer, camera, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        this.DomSanitizer = DomSanitizer;
        this.camera = camera;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.user_details = {};
        this.profile = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            fname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            lname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            avatar: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
        this.storage.get('user').then(function (data) {
            var param = data[0].id;
            if (data[0].role == 2) {
                _this.data.getCustomerProfile(param).subscribe(function (result) {
                    if (result.status == 'OK') {
                        //console.log(result.success.profile[0].first_name);
                        _this.user_details.fname = result.success.profile[0].first_name;
                        _this.user_details.lname = result.success.profile[0].last_name;
                        _this.user_details.email = result.success.profile[0].email;
                        _this.user_details.phone = result.success.profile[0].phone;
                        _this.user_details.address = result.success.profile[0].address;
                        _this.user_details.avatar = result.success.profile[0].profile;
                    }
                    else {
                    }
                });
            }
            else if (data[0].role == 3) {
                _this.data.getDriverProfile(param).subscribe(function (result) {
                    if (result.status == 'OK') {
                        //console.log(result.success.profile[0].first_name);
                        _this.user_details.fname = result.success.profile[0].first_name;
                        _this.user_details.lname = result.success.profile[0].last_name;
                        _this.user_details.email = result.success.profile[0].email;
                        _this.user_details.phone = result.success.profile[0].phone;
                        _this.user_details.address = result.success.profile[0].address;
                        _this.user_details.avatar = result.success.profile[0].profile;
                    }
                    else {
                    }
                });
            }
        });
    }
    CustomerProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerProfilePage');
    };
    CustomerProfilePage.prototype.gotoChangePass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__password_reset_password_reset__["a" /* PasswordResetPage */]);
    };
    CustomerProfilePage.prototype.gotoeditProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    CustomerProfilePage.prototype.gotoAvatarPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__avatar_avatar__["a" /* AvatarPage */]);
    };
    CustomerProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer-profile',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\customer-profile\customer-profile.html"*/'<!--\n  Generated template for the CustomerProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n        <ion-icon ios="ios-list" md="md-list" class="ion-md-list"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>  \n    <ion-card>\n        <ion-list>\n            <ion-item class="profile_edit_list">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-avatar item-start (click)="gotoAvatarPage()">\n                                <img src="../../assets/imgs/kisspng-user-profile-computer-icons-girl-customer-5af32956696762.8139603615258852704317.png">\n                            </ion-avatar>  \n                        </ion-col>\n                        <ion-col col-6> \n                            <h2 class="profile_name">\n                                {{user_details.fname}} {{user_details.lname}}\n                            </h2>\n                            <h3>{{user_details.email}}</h3>\n                            <p>{{user_details.phone}}</p>\n                        </ion-col>\n                        <ion-col col-2 text-center class="profile_edit_icon" (click)="gotoeditProfile()">\n                            <ion-icon ios="ios-create" md="md-create" class="ion-md-create profile_edit_icon_main"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n\n    <ion-list class="menu-list" no-lines>\n        <button class="sideMenuItem change_pass_btn" menuClose ion-item (click)="gotoChangePass()">\n            <ion-icon ios="ios-lock" md="md-lock" class="lock-icon"></ion-icon>\n            <span class="change_pass_text">Change Password</span>\n        </button>   \n    </ion-list>\n\n      <ion-card class="Saved_places_card">\n        <ion-card-header>\n          Home\n        </ion-card-header>\n        <ion-card-content>\n            {{user_details.address}}        \n        </ion-card-content>\n      </ion-card>\n</ion-content>\n<div class="last_div">  \n    <div class="inner_last_div">\n      <p><ion-icon ios="ios-power" md="md-power"></ion-icon> Logout</p>\n    </div>\n  </div> \n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\customer-profile\customer-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CustomerProfilePage);
    return CustomerProfilePage;
}());

//# sourceMappingURL=customer-profile.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectivity_service_connectivity_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(46);
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
    function GoogleMapsProvider(events, connectivityService, geolocation) {
        this.events = events;
        this.connectivityService = connectivityService;
        this.geolocation = geolocation;
        this.mapInitialised = false;
        this.apiKey = "AIzaSyD_mkig8BYCj7PJlCj4-yN4w6QPmJjxFbg";
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
            _this.geolocation.getCurrentPosition().then(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    clickableIcons: false,
                    disableDefaultUI: true,
                    zoomControl: false
                };
                var geocoder = new google.maps.Geocoder;
                _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                _this.geocodeLatLng(geocoder, _this.map, position.coords.latitude, position.coords.longitude);
                resolve(true);
                _this.addMarker();
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
    GoogleMapsProvider.prototype.geocodeLatLng = function (geocoder, map, lat, lng) {
        // var input = document.getElementById('latlng').value;
        //var latlngStr = input.split(',', 2);
        var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                //console.log('results[0]==>'+ results[0].formatted_address);
                //console.log('results[0]==>'+ results[0].place_id);
                return results[0];
                /*if (results[0]) {
                  map.setZoom(11);
                  var marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                  });
                  //infowindow.setContent(results[0].formatted_address);
                  //infowindow.open(map, marker);
                } else {
                  window.alert('No results found');
                }*/
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
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
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Your Current Location !</h4>";
        this.addInfoWindow(marker, content);
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
        this.directionsPanel = directionsPanel;
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        /*if (directionsDisplay.setMap != null) {
          directionsDisplay.setMap(null);
          directionsDisplay.setPanel(null);
          //directionsDisplay = null;
          //directionsService.route({routes: []});
          directionsDisplay.setDirections({routes: []});
        }*/
        directionsDisplay.setMap(null);
        directionsDisplay.set('directions', null);
        //directionsDisplay.setPanel(this.directionsPanel);
        directionsService.route({
            origin: pickup,
            destination: drop,
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            var route = res.routes[0];
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setMap(_this.map);
                directionsDisplay.setDirections(res);
                for (var i = 0; i < route.legs.length; i++) {
                    _this.distance = route.legs[i].distance.text;
                    //console.log('distance==>>'+this.distance);
                }
            }
            else {
                console.warn(status);
            }
        });
    };
    GoogleMapsProvider.prototype.getgeocodeAddress = function (address) {
        var geocoder = new google.maps.Geocoder;
        this.map = new google.maps.Map(this.mapElement, '');
        var latlng = this.geocodeAddress(geocoder, this.map, address);
        return latlng;
    };
    GoogleMapsProvider.prototype.geocodeAddress = function (geocoder, resultsMap, loc_address) {
        var address = loc_address;
        geocoder.geocode({ 'address': address }, function (results, status) {
            //console.log('results[0].geometry.location==>'+results[0].geometry.location);
            //return results[0].geometry.location;
            //this.eve.publish("LatLng",results[0].geometry.location);       
            //this.events.publish("LatLng",results[0].geometry.location);                 
            this.result = results[0].geometry.location;
        });
    };
    GoogleMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GoogleMapsProvider);
    return GoogleMapsProvider;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(14);
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
    function AutocompletePage(navCtrl, navParams, viewCtrl, zone, storage, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.storage = storage;
        this.data = data;
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
        this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
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
    AutocompletePage.prototype.updateDriverSearch = function () {
        var _this = this;
        if (this.qdriver.query == '') {
            this.allDrivers = [];
            return;
        }
        this.data.getallDrivers().subscribe(function (result) {
            console.log(result);
            //this.userData = result; 
            if (result.status == "ERROR") {
                _this.data.presentToast(result.error.email);
                return false;
            }
            else {
                //this.storage.set("customer_data",data.msg[0]);
                _this.data.presentToast('Profile Updated Successfully!');
                //this.navCtrl.setRoot(CustomerProfilePage);     
            }
        });
    };
    AutocompletePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-autocomplete',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\autocomplete\autocomplete.html"*/'<!--\n  Generated template for the AutocompletePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n        <ion-label class="close" text-right (click)="close()">\n            Cancel\n        </ion-label>\n        <!--<ion-buttons right>\n            <button [disabled]="saveDisabled" ion-button (click)="save()">Save</button>\n        </ion-buttons>-->\n    <ion-item *ngIf="action == \'pickup\'" class="pickup">\n        <ion-icon item-start ios="md-navigate" md="md-navigate"></ion-icon>\n        <ion-label stacked>Pickup Location</ion-label>\n        <ion-input [(ngModel)]="autocomplete.query" (ionChange)="updateSearch()" (ionCancel)="dismiss()"></ion-input>\n    </ion-item>\n    <!--<ion-toolbar *ngIf="action == \'pickup\'">\n      <ion-title>Enter address</ion-title>\n      <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>\n    </ion-toolbar>-->\n    <!--<ion-toolbar *ngIf="action == \'drop\'">\n        <ion-title>Enter address</ion-title>\n        <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>\n      </ion-toolbar>-->\n      <ion-item *ngIf="action == \'drop\'" class="drop">\n          <ion-icon item-start ios="md-pin" md="md-pin"></ion-icon>\n          <ion-label stacked>Drop Off Location</ion-label>\n          <ion-input [(ngModel)]="autocomplete.query" (ionChange)="updateSearch()" (ionCancel)="dismiss()"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="action != \'drop\' && action != \'pickup\' && action != \'getDriver\'" class="drop">\n          <ion-icon item-start ios="md-pin" md="md-pin"></ion-icon>\n          <ion-label stacked>Select Your Favorite Location</ion-label>\n          <ion-input [(ngModel)]="autocomplete.query" (ionChange)="updateSearch()" (ionCancel)="dismiss()"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="action == \'driver\'" class="drop">\n          <ion-icon item-start ios="md-pin" md="md-pin"></ion-icon>\n          <ion-label stacked>Select Your Favourite Driver</ion-label>\n          <ion-input [(ngModel)]="qdriver.query" (ionChange)="updateDriverSearch()" (ionCancel)="dismiss()"></ion-input>\n      </ion-item>\n\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n        {{ item }}\n      </ion-item>\n      <ion-item *ngFor="let item of allDrivers" tappable (click)="chooseItem(item)">\n          {{ item }}\n        </ion-item>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"E:\Ionic\myApp1\src\pages\autocomplete\autocomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], AutocompletePage);
    return AutocompletePage;
}());

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgotpasswoed_forgotpasswoed__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__emailverification_emailverification__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_profile_customer_profile__ = __webpack_require__(36);
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
    function SigninPage(navCtrl, alertCtrl, data, storage, loading, events) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.data = data;
        this.storage = storage;
        this.loading = loading;
        this.events = events;
        this.signin = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
    }
    SigninPage.prototype.createUser = function (user) {
        console.log('User created!');
        this.events.publish('user:created', user, Date.now());
    };
    SigninPage.prototype.red_list = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.signIn = function (uname, pass) {
        var _this = this;
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
            loader.dismiss();
            if (result.status == "ERROR") {
                _this.data.presentToast('Invalid Username or Password!');
            }
            else {
                console.log(result.success.user);
                _this.createUser(result.success.user);
                if (result.success.user[0].active == 1) {
                    _this.storage.set("token", result.success.token);
                    _this.storage.set("user", result.success.user);
                    if (result.success.user[0].role == 2) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                    }
                    else if (result.success.user[0].role == 3) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__customer_profile_customer_profile__["a" /* CustomerProfilePage */]);
                    }
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__emailverification_emailverification__["a" /* EmailverificationPage */], { data: result.success.user });
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
    SigninPage.prototype.gotoForgotPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__forgotpasswoed_forgotpasswoed__["a" /* ForgotpasswoedPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"E:\Ionic\myApp1\src\pages\signin\signin.html"*/'<!--<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n\n    <ion-title>\n\n      <h2>Sign In</h2>\n\n    <!--   <p>Sign In</p> --\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>-->\n\n\n\n<ion-content padding> \n\n\n\n  <div class="login-container">\n\n\n\n    <div class="title_div">\n\n      <h2 class="head_title">TFH</h2>\n\n      <h3 class="sub_title">Welcome Back!</h3>\n\n      <p class="title_info">Sign In to continue to TaXI App</p>\n\n    </div>\n\n    <!-- Login form-->\n\n    <form class="sign_in_form" [formGroup]="signin" > \n\n      <ion-list no-lines>\n\n        <ion-item>\n\n          <ion-label stacked>Email Address</ion-label>\n\n          <ion-input type="email" [(ngModel)]="uname" formControlName="email" [class.invalid]="!signin.valid && (signin.controls.email.dirty || submitAttempt)" ></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="error" *ngIf="signin.get(\'email\').hasError(\'required\') && signin.get(\'email\').touched">\n\n            Please fill out this field.\n\n        </div>\n\n            \n\n        <div class="error" *ngIf="!signin.get(\'email\').hasError(\'required\') && (signin.get(\'email\').hasError(\'email\') && signin.get(\'email\').dirty )">\n\n            Please enter valid Email address\n\n        </div>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="pass" formControlName="password" [class.invalid]="!signin.valid && (signin.controls.password.dirty || submitAttempt)" ></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="error" *ngIf="signin.get(\'password\').hasError(\'required\')  && signin.get(\'password\').touched">\n\n            Please fill out this field\n\n        </div>\n\n\n\n        <ion-item class="submit_btn_item">\n\n          <a class="forgot_pass" (click)="gotoForgotPass()"><p>Forgot password?</p></a>\n\n          <button class="login-btn" ion-button color="primary" block  (click)="signIn(uname, pass)" [disabled]="!this.signin.valid">SIGN IN</button>\n\n          <p class="new_acc" (click)=\'red_list()\'>Create New Account?</p>\n\n        </ion-item>\n\n\n\n      </ion-list> \n\n    </form>\n\n\n\n  </div>\n\n    \n\n</ion-content>      \n\n\n\n'/*ion-inline-end:"E:\Ionic\myApp1\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map