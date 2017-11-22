webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__ = __webpack_require__(163);
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
 * Generated class for the ConversationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConversationsPage = (function () {
    function ConversationsPage(navCtrl, navParams, inAppB, platform, contact) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppB = inAppB;
        this.platform = platform;
        this.contact = contact;
        this.platform.ready().then(function () {
            var opts = {
                filter: "M",
                multiple: true,
                hasPhoneNumber: true,
                fields: ['displayName', 'name']
            };
            contact.find(['displayName', 'name'], opts).then(function (contacts) {
                _this.contactlist = contacts;
                console.log("contact list: " + JSON.stringify(_this.contactlist));
            }, function (error) {
                console.log(error);
            });
        });
    }
    ConversationsPage.prototype.goto = function (params) {
        var browser = this.inAppB.create("http://" + params + "", '_self', { location: 'no' });
    };
    ConversationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conversations',template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\conversations\conversations.html"*/`<!--\n  Generated template for the ConversationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-list>\n    <span *ngFor="let contact of contactlist" >\n      <ion-item *ngIf="contact.displayName">\n          {{contact.displayName}}: Mobile {{contact.phoneNumbers[0].value}}\n          <h1 *ngIf="!contact.emails.value">Email: {{contact.emails.value }}</h1>\n      </ion-item>\n    </span>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\conversations\conversations.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__["a" /* Contacts */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__["a" /* Contacts */]])
    ], ConversationsPage);
    return ConversationsPage;
}());

//# sourceMappingURL=conversations.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(41);
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
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MorePage = (function () {
    function MorePage(navCtrl, navParams, inAppB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppB = inAppB;
        this.goto('other.ly/more');
    }
    MorePage.prototype.goto = function (params) {
        var browser = this.inAppB.create("http://" + params + "", '_self', { location: 'no' });
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\more\more.html"*/`<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>more</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(41);
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
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, inAppB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppB = inAppB;
        this.goto('other.ly/notifications');
    }
    NotificationsPage.prototype.goto = function (params) {
        var browser = this.inAppB.create("http://" + params + "", '_self', { location: 'no' });
        // window.open("http://" + params+"" , '_self');
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\notifications\notifications.html"*/`<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/conversations/conversations.module": [
		287,
		5
	],
	"../pages/loginauth/loginauth.module": [
		288,
		4
	],
	"../pages/more/more.module": [
		289,
		3
	],
	"../pages/notifications/notifications.module": [
		290,
		2
	],
	"../pages/oauth/oauth.module": [
		291,
		0
	],
	"../pages/signup/signup.module": [
		292,
		1
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_otherly_api_otherly_api__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';




//import { GoogleAuth, User } from '@ionic/cloud-angular';

var LoginPage = (function () {
    function LoginPage(navCtrl, Facebook, googlePlus, lds, OtherlyAPI) {
        // let getData$ = new Observable(observer => {
        //     this.UserData(() =>{
        //       console.log('Observable');
        //       observer.next(this.UserData);
        //     })
        // });
        this.navCtrl = navCtrl;
        this.Facebook = Facebook;
        this.googlePlus = googlePlus;
        this.lds = lds;
        this.OtherlyAPI = OtherlyAPI;
        this.UserData = null;
        // getData$.subscribe(data => console.log(JSON.stringify(data)));
    }
    LoginPage.prototype.FBlogin = function () {
        this.getFacebook().then(function (data) {
            //this.UserData = {email: data['email'], first_name: data['first_name'], last_name: data['last_name'], picture:data['picture_large']['data']['url'], user_name:data['name']};
            console.log("FBlogin " + JSON.stringify(data));
            //this.lds.setUser(data);
            //this.navCtrl.setRoot(TabsPage);
        });
    };
    LoginPage.prototype.getFacebook = function () {
        var _this = this;
        var data;
        var access_token;
        var Token;
        return new Promise(function (resolve) {
            _this.Facebook.login(['email', 'public_profile']).then(function (response) {
                access_token = response;
                _this.Facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                    data = { email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'], picture: profile['picture_large']['data']['url'], user_name: profile['name'] };
                    _this.UserData = { email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'], picture: profile['picture_large']['data']['url'], user_name: profile['name'] };
                    //console.log("FBlogin getFacebook "+ JSON.stringify(data));
                    console.log("access token: " + JSON.stringify(access_token.authResponse.accessToken));
                    _this.OtherlyAPI.GetOtherlyAccessToken(access_token.authResponse.accessToken).then(function (res) {
                        Token = res;
                        console.log('SENDING TO SAVE USER otherly-token: ' + Token);
                        _this.lds.setUser(data, Token);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                    });
                });
            });
            console.log('promise');
            return Promise.resolve(data);
        });
    };
    LoginPage.prototype.Googlelogin = function () {
        var _this = this;
        var access_token;
        this.googlePlus.login({
            'scopes': 'profile',
            'webClientId': '792378810184-kn9s20un6jugat4bbb48mpglb36l27lq.apps.googleusercontent.com',
            'offline': true
        })
            .then(function (res) {
            console.log('Logged ' + JSON.stringify(res));
            _this.UserData = { email: res['email'], first_name: res['givenName'], last_name: res.familyName, picture: res.imageUrl };
            _this.lds.setUser(_this.UserData, access_token.accessToken);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
            console.log('error');
            console.log(err);
        });
        console.log('google login');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\login\login.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle right class="menu-otherly-home">\n      \n    </button>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="logo" >\n  <img class="logo" src="./assets/img/other.ly_logo.png"/>\n  <p>\n   Authentic friends. Real comunities.\n  </p>\n\n  <ion-row class="login">\n    <ion-col col-6 >\n\n      <button ion-button (click)="FBlogin()">\n        <ion-label class="icon-face"></ion-label>\n        Login with facebook\n        </button>\n        \n    </ion-col>\n    <ion-col col-6>\n\n      <button ion-button (click)="Googlelogin()">\n        <ion-label class="icon-google"></ion-label>\n        Login with Google\n        </button>\n  </ion-col>\n  </ion-row>\n\n  <ion-row padding class="content">\n    <ion-col col-12>\n      <h1>Belong</h1>\n      <p>\n        to comunities that help each other\n      </p>\n      <img class="content-img" src="assets/img/blue/everybody_blue.png"/>\n      <p>\n        What goes around, comes around\n      </p>\n\n    </ion-col>\n\n    <ion-col col-12>\n      <h1>Auto-Connect</h1>\n      <p>\n        your Facebook and Google friends\n      </p>\n      <img class="content-img" src="assets/img/blue/import-friends_blue.png"/>\n      <p>\n        Don\'t fret, we\'ve got this\n      </p>\n\n    </ion-col>\n\n    <ion-col col-12>\n      <h1>Collaborate</h1>\n      <p>\n        on projects with your pals\n      </p>\n      <img class="content-img" src="assets/img/blue/inspire_blue.png"/>\n      <p>\n        Go do cool stuff\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Post</h1>\n      <p>\n        something that you\'re looking for\n      </p>\n      <img class="content-img" src="assets/img/blue/post_blue.png"/>\n      <p>\n        Leads? Clients? Recommendations\n      </p>\n\n    </ion-col>\n\n    <ion-col col-12>\n      <h1>Find Opportunities</h1>\n      <p>\n        from your network\n      </p>\n      <img class="content-img" src="assets/img/blue/get-help_blue.png"/>\n      <p>\n        Let your friends help you\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Say Thanks</h1>\n      <p>\n        and give all sort of gifts\n      </p>\n      <img class="content-img" src="assets/img/blue/thank-friends_blue.png"/>\n      <p>\n        An easy way to show you care\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Discover</h1>\n      <p>\n        what your friens need\n      </p>\n      <img class="content-img" src="assets/img/blue/search_blue.png"/>\n      <p>\n        Lend a helping hand\n      </p>\n\n    </ion-col>\n\n    <ion-col col-12>\n      <h1>Introduce</h1>\n      <p>\n        friends who can help each other\n      </p>\n      <img class="content-img" src="assets/img/blue/introductions_blue.png"/>\n      <p>\n        Help make a connection\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Enjoy</h1>\n      <p>\n        gifts, perks, and lots of "thank you"s\n      </p>\n      <img class="content-img" src="assets/img/blue/give-gift_blue.png"/>\n      <p>\n        Bask in the glory\n      </p>\n\n    </ion-col>\n\n\n\n    <ion-col col-12>\n      <h1>Chat</h1>\n      <p>\n        privately with friends\n      </p>\n      <img class="content-img" src="assets/img/blue/conversations_blue.png"/>\n      <p>\n        Not everyone needs to see this\n      </p>\n\n    </ion-col>\n\n\n\n    <ion-col col-12>\n      <h1>Share</h1>\n      <p>\n        posts with friends and communities\n      </p>\n      <img class="content-img" src="assets/img/blue/share_blue.png"/>\n      <p>\n        Everyone needs to see this\n      </p>\n\n    </ion-col>\n\n\n\n    <ion-col col-12>\n      <h1>Organize</h1>\n      <p>\n        chats, intros, and more in one place\n      </p>\n      <img class="content-img" src="assets/img/blue/pin_blue.png"/>\n      <p>\n        Everyone in one place\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Send</h1>\n      <p>\n        real-life greeting cards\n      </p>\n      <img class="content-img" src="assets/img/blue/send_blue.png"/>\n      <p>\n        We\'ll find the street address and mail it for you\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Personalize</h1>\n      <p>\n        greeting cards using your photo library\n      </p>\n      <img class="content-img" src="assets/img/blue/activities_blue.png"/>\n      <p>\n        For that personal touch!\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Exchange Other.ly Coins</h1>\n      <p>\n        to buy all sort of stuff\n      </p>\n      <img class="content-img" src="assets/img/blue/credit-card_blue.png"/>\n      <p>\n        Easy to earn, easy to spend!\n      </p>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_friends__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loginauth_loginauth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conversations_conversations__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_notifications__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__more_more__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';







var TabsPage = (function () {
    function TabsPage(nav, events) {
        this.nav = nav;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__friends_friends__["a" /* Friends */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_4__loginauth_loginauth__["a" /* LoginauthPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__conversations_conversations__["a" /* ConversationsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_7__notifications_notifications__["a" /* NotificationsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_8__more_more__["a" /* MorePage */];
    }
    TabsPage.prototype.tapped = function () {
        this.events.publish('friends:refresh', Date.now());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mainTabs'),
        __metadata("design:type", TabsPage)
    ], TabsPage.prototype, "mainTabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tabs',template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\tabs\tabs.html"*/`<ion-tabs tabsPlacement=\'top\' #mainTabs (tap)="tapped()">\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="otherly-home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="otherly-friends"></ion-tab>\n\n  <ion-tab [root]="tab6Root" tabTitle="Login" tabIcon="otherly-login"></ion-tab>\n\n  <ion-tab [root]="tab7Root" tabTitle="Signup" tabIcon="otherly-signup"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="otherly-talk"></ion-tab>\n\n\n\n  <ion-tab [root]="tab4Root" tabTitle="" tabIcon="otherly-notifications"></ion-tab>\n\n\n\n  <ion-tab [root]="tab5Root" tabTitle="" tabIcon="otherly-search"></ion-tab>\n\n\n\n  <ion-tab [root]="tab5Root" tabTitle="" tabIcon="otherly-more"></ion-tab>\n\n</ion-tabs>\n\n`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_otherly_api_otherly_api__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//provider

var HomePage = (function () {
    function HomePage(navCtrl, Lds, OtherlyAPI) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.Lds = Lds;
        this.OtherlyAPI = OtherlyAPI;
        //this.UserData = this.navCtrl.get('UserData');
        this.Lds.getUser()
            .then(function (data) {
            _this.UserData = data;
        });
    }
    HomePage.prototype.openPage = function (params) {
        window.open("http://" + params + "", '_self');
    };
    HomePage.prototype.createPost = function () {
        console.log("post text: " + this.post_text);
        if (this.post_text != "") {
            this.OtherlyAPI.CreatePost(this.post_text, this.UserData.username).then(function (res) {
                console.log(res);
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\home\home.html"*/`<ion-content>\n\n  <ion-row class="infos" padding>\n    <ion-col col-12 class="about">\n      About me\n    </ion-col>\n    <ion-col col-12 class="user-info" *ngIf="UserData.picture != \'\'">\n      <img src="{{ UserData.picture }}" />\n    </ion-col>\n    <ion-col col-12 class="user-info" *ngIf="UserData.picture == \'\'">\n        <img src="assets/img/avatar_small.png" />\n    </ion-col>\n\n    <ion-col col-12 class="user-name" *ngIf="UserData">\n      {{ UserData.first_name }} {{ UserData.last_name }}\n    </ion-col>\n\n    <ion-col col-12 class="user-info">\n    <ion-col col-4 class="user-info">\n      <ion-grid>\n      <p class="quantity number">{{ UserData.helps_given }}</p><br/>\n      <p class="quantity title">Helps given</p>\n      </ion-grid>\n    </ion-col>\n    <div class="separator"></div>\n    <ion-col col-4 class="user-info">\n      <ion-grid>\n      <p class="quantity title">Vancouver, Canada</p>\n\n      </ion-grid>\n    </ion-col>\n    <div class="separator"></div>\n    <ion-col col-4 class="user-info">\n      <ion-grid>\n      <p class="quantity number">{{ UserData.thanks_sent }}</p><br/>\n      <p class="quantity title">Thanks received</p>\n      </ion-grid>\n    </ion-col>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row class="buttons">\n    <ion-col col-3 (click)="FBlogin()">\n      <img src="assets/img/post.png" />\n    </ion-col>\n\n\n\n    <ion-col col-3 (click)="Googlelogin()">\n      \n      <img src="assets/img/activities.png" />\n    </ion-col>\n\n    <ion-col col-3 >\n      \n      <img src="assets/img/inspire_blue.png" />\n    </ion-col>\n\n    <ion-col col-3 >\n      \n      <img src="assets/img/more_blue.png" />\n    </ion-col>\n    \n  </ion-row>\n\n\n\n  <ion-row class="post">\n\n    \n      <ion-col col-3 class="user-info" *ngIf="UserData.picture != \'\'">\n        <img  src="{{ UserData.picture }}" />\n      </ion-col>\n      <ion-col col-3 class="user-info" *ngIf="UserData.picture == \'\'">\n          <img  src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-9 >\n        <ion-col col-12 class="user-infos" *ngIf="UserData">{{ UserData.first_name }} {{ UserData.last_name }}</ion-col>\n          <ion-col col-12 class="post-text">\n            \n              <textarea [(ngModel)]="post_text" placeholder="Write what you are looking for or what you are offering..." >\n              </textarea>\n           \n          </ion-col>\n      </ion-col>\n    \n    \n      <ion-col col-12 class="post-buttom" >\n        <img (click)="createPost()" src="assets/img/post_button_blue.png" />\n      </ion-col>\n    \n\n    \n  </ion-row>\n  \n  \n\n        <!-- <div class="list">\n            <a class="item" href="#" onclick="window.open(\'http://other.ly\', \'_self\'); return false;">\n            Open a Browser\n            </a>\n            \n        </div> -->\n    \n</ion-content> -->\n`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]])
    ], HomePage);
    return HomePage;
}());

// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// @Component({
//   selector: 'page-home',
//template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\home\home.html"*/`<ion-content>\n\n  <ion-row class="infos" padding>\n    <ion-col col-12 class="about">\n      About me\n    </ion-col>\n    <ion-col col-12 class="user-info" *ngIf="UserData.picture != \'\'">\n      <img src="{{ UserData.picture }}" />\n    </ion-col>\n    <ion-col col-12 class="user-info" *ngIf="UserData.picture == \'\'">\n        <img src="assets/img/avatar_small.png" />\n    </ion-col>\n\n    <ion-col col-12 class="user-name" *ngIf="UserData">\n      {{ UserData.first_name }} {{ UserData.last_name }}\n    </ion-col>\n\n    <ion-col col-12 class="user-info">\n    <ion-col col-4 class="user-info">\n      <ion-grid>\n      <p class="quantity number">{{ UserData.helps_given }}</p><br/>\n      <p class="quantity title">Helps given</p>\n      </ion-grid>\n    </ion-col>\n    <div class="separator"></div>\n    <ion-col col-4 class="user-info">\n      <ion-grid>\n      <p class="quantity title">Vancouver, Canada</p>\n\n      </ion-grid>\n    </ion-col>\n    <div class="separator"></div>\n    <ion-col col-4 class="user-info">\n      <ion-grid>\n      <p class="quantity number">{{ UserData.thanks_sent }}</p><br/>\n      <p class="quantity title">Thanks received</p>\n      </ion-grid>\n    </ion-col>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row class="buttons">\n    <ion-col col-3 (click)="FBlogin()">\n      <img src="assets/img/post.png" />\n    </ion-col>\n\n\n\n    <ion-col col-3 (click)="Googlelogin()">\n      \n      <img src="assets/img/activities.png" />\n    </ion-col>\n\n    <ion-col col-3 >\n      \n      <img src="assets/img/inspire_blue.png" />\n    </ion-col>\n\n    <ion-col col-3 >\n      \n      <img src="assets/img/more_blue.png" />\n    </ion-col>\n    \n  </ion-row>\n\n\n\n  <ion-row class="post">\n\n    \n      <ion-col col-3 class="user-info" *ngIf="UserData.picture != \'\'">\n        <img  src="{{ UserData.picture }}" />\n      </ion-col>\n      <ion-col col-3 class="user-info" *ngIf="UserData.picture == \'\'">\n          <img  src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-9 >\n        <ion-col col-12 class="user-infos" *ngIf="UserData">{{ UserData.first_name }} {{ UserData.last_name }}</ion-col>\n          <ion-col col-12 class="post-text">\n            \n              <textarea [(ngModel)]="post_text" placeholder="Write what you are looking for or what you are offering..." >\n              </textarea>\n           \n          </ion-col>\n      </ion-col>\n    \n    \n      <ion-col col-12 class="post-buttom" >\n        <img (click)="createPost()" src="assets/img/post_button_blue.png" />\n      </ion-col>\n    \n\n    \n  </ion-row>\n  \n  \n\n        <!-- <div class="list">\n            <a class="item" href="#" onclick="window.open(\'http://other.ly\', \'_self\'); return false;">\n            Open a Browser\n            </a>\n            \n        </div> -->\n    \n</ion-content> -->\n`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\home\home.html"*/
// })
// export class HomePage {
//   constructor(public navCtrl: NavController) {
//   }
// }
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_loginauth_loginauth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_conversations_conversations__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_more_more__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_localdata_localdata__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_otherly_api_otherly_api__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { Friends } from '../pages/friends/friends';




//Providers







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                //Friends,
                __WEBPACK_IMPORTED_MODULE_6__pages_loginauth_loginauth__["a" /* LoginauthPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_conversations_conversations__["a" /* ConversationsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/conversations/conversations.module#ConversationsPageModule', name: 'ConversationsPage', segment: 'conversations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginauth/loginauth.module#LoginauthPageModule', name: 'LoginauthPage', segment: 'loginauth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/oauth/oauth.module#OAuthModule', name: 'OauthPage', segment: 'oauth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                //Friends,
                __WEBPACK_IMPORTED_MODULE_6__pages_loginauth_loginauth__["a" /* LoginauthPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_conversations_conversations__["a" /* ConversationsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_localdata_localdata__["a" /* LocaldataProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_19__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_loginauth_loginauth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */] },
            //{ title: 'Friends', component: Friends },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_loginauth_loginauth__["a" /* LoginauthPage */] },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component); //TabsPage
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\app\app.html"*/`<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Friends; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_otherly_api_otherly_api__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//provider

//NATIVE FEATURES


//PAGES
//import { MobileContact } from '../friends/mobilecontact';
;
//Otherly API connection

var Friends = (function () {
    //@ViewChild(Content) content: Content;
    function Friends(navCtrl, navParams, inAppB, platform, contact, OtherlyAPI, Lds, events, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppB = inAppB;
        this.platform = platform;
        this.contact = contact;
        this.OtherlyAPI = OtherlyAPI;
        this.Lds = Lds;
        this.events = events;
        this.app = app;
        this.List = [];
        this.list = [];
        this.mobile_contact = [];
        this.add_friends = false;
        this.search = -2;
        this.platform.ready().then(function () {
            var opts = {
                filter: "M",
                multiple: true,
                hasPhoneNumber: true,
                fields: ['displayName', 'name']
            };
            contact.find(['displayName', 'name'], opts).then(function (contacts) {
                _this.contactlist = contacts;
                _this.MobileContactsinArray();
                //console.log("contact list: " + JSON.stringify(this.contactlist));
            }, function (error) {
                console.log(error);
            });
        });
        this.Lds.getUser()
            .then(function (data) {
            _this.UserData = data;
            //USER INFORMATIONS HAVE BEEN RECEIVED HERE
            _this.OtherlyAPI.GetFriendsList(_this.UserData.otherly_token, {})
                .then(function (data) {
                _this.API_List = data;
                console.log("Friends page USER DATA: " + JSON.stringify(_this.API_List));
                //if(this.API_List.length >= 2){
                for (var item in _this.API_List)
                    _this.list.push(_this.API_List[item]);
                _this.List = _this.list.sort(function (a, b) {
                    if (a.instance.full_name < b.instance.full_name)
                        return -1;
                    if (a.instance.full_name > b.instance.full_name)
                        return 1;
                    return 0;
                });
                //}
                /*else {
                  for (let item in this.API_List)
                    this.List.push(this.API_List[item])
     
                }*/
                //console.log('LIST O & M: ' + JSON.stringify(this.List));
                _this.quantity = _this.List.length;
                console.log('LIST O & M: ' + JSON.stringify(_this.List));
            });
        });
    }
    Friends.prototype.MobileContactsinArray = function () {
        for (var item in this.contactlist) {
            this.list.push({
                instance: {
                    full_name: this.contactlist[item].displayName,
                    photo_url: '',
                    mobile_number: this.contactlist[item].phoneNumbers[0].value,
                    rating: '',
                    helps_given: '',
                    source: 'M'
                }
            });
        }
    };
    Friends.prototype.ionSelected = function () {
        console.log("Friends has been selected");
        this.add_friends = false;
        console.log(this.add_friends);
    };
    Friends.prototype.goto = function (params) {
        //const browser = this.inAppB.create("http://" + params+"" , '_self',{location:'yes'});
    };
    Friends.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                _this.List.push(_this.List.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    Friends.prototype.Search = function () {
        this.search = -1;
        console.log("Search field : " + this.search_friend);
        /*this.OtherlyAPI.GetFriendsList('carlos',{search_str:this.search_friend})
           .then(data => {
            this.API_List = data;
    
             //this.List = Object.keys(data);
    
            this.search = this.List.length;
    
            console.log("Quantity: " + this.search);
    
            this.search = -2;
    
            //console.log("My Friends: " + JSON.stringify(this.List));
         });*/
        for (var item in this.list) {
            if (this.list[item].indexOf(this.search_friend) >= 0) {
                console.log('Found: ' + this.list[item].full_name);
            }
        }
    };
    Friends.prototype.Show_Add_friends = function () {
        this.add_friends = !this.add_friends;
    };
    Friends = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\friends\friends.html"*/`\n\n<ion-content>\n  <ion-item *ngIf="!add_friends">\n    <ion-input [(ngModel)]="search_friend" (keyup.enter)="Search()" placeholder="Search friend..." >\n    </ion-input>\n  </ion-item>\n\n  <ion-row>\n  <ion-col col-7>\n    <div padding>\n      <b>My Friends</b>\n    </div>\n  </ion-col>\n\n  <ion-col col-5>\n    <div padding *ngIf="!add_friends">\n      <button (click)="Show_Add_friends()">\n      Add friend\n      </button>\n    </div>\n  </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="add_friends">\n\n    <!-- ADD GOOGLE FRIENDS -->\n    <ion-col col-12 class="add_friend">\n      <ion-col col-2>\n        <img  src="assets/img/Google_Logo.png" />\n      </ion-col>\n\n      <ion-col col-9 >\n        Sync friends with Google \n      </ion-col>\n    </ion-col>\n\n\n    <!-- ADD FACEBOOK FRIENDS -->\n    <ion-col col-12 class="add_friend">\n      <ion-col col-2>\n        <img  src="assets/img/facebook-logo.png" />\n      </ion-col>\n\n      <ion-col col-9>\n        Add Friends from Facebook \n      </ion-col>\n    </ion-col>\n\n    <!-- ADD FRIENDS USING EMAIL -->\n    <ion-col col-12 class="add_friend">\n      <ion-col col-2>\n        <img  src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-9>\n        Add with e-mail\n      </ion-col>\n    </ion-col>\n\n    <!-- ADD FRIENDS FROM MOBILE CONTACTS -->\n    <ion-col col-12 class="add_friend" (click)="add_contact_mobile()">\n      <ion-col col-2>\n        <img  src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-9>\n        Add from my mobile contacts\n      </ion-col>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-spinner *ngIf="!List || search == -1"></ion-spinner>\n\n  <ion-row *ngIf="quantity == 0" padding>\n    You don\'t have any friends yet\n  </ion-row>\n\n  <ion-row *ngIf="search == 0" padding>\n    We didn\'t find any result matching your query...\n  </ion-row>\n\n  <ion-list class="ion-list"  *ngIf="quantity != 0 && !add_friends">\n\n    <!-- LOOP WITH THE FRIENDS LIST -->\n    \n    <ion-item *ngFor="let list of List; let i=index" >\n\n    \n\n      <!-- CONTACT FROM OTHERLY  -->\n      <ion-row *ngIf="list.instance.source ==\'O\'">\n\n        \n          \n        <ion-col class="user-picture" col-2 >\n          <img *ngIf="list.instance.photo_url ==\'\' || list.instance.photo_url == undefined" src="assets/img/avatar_small.png" />\n          <img *ngIf="list.instance.photo_url !== undefined"  src=\'{{list.instance.photo_url}}\' />\n        </ion-col>\n        \n        <ion-col col-6>\n          <div *ngIf="list.instance.first_name != \'\'" class="object-item">\n            <div ><b>{{list.instance.full_name}}</b>\n            </div>\n          </div>\n\n          <!-- <div *ngIf="list.instance.first_name == \'\' && list.instance.full_name != \'\' " class="object-item">\n            <div ><b>{{list.instance.full_name}}</b>\n            </div>\n          </div> -->\n\n          <div *ngIf="list.instance.rating == 0">\n            <ion-icon name=\'star\'></ion-icon>\n            <ion-icon name=\'star\'></ion-icon>\n            <ion-icon name=\'star\'></ion-icon>\n          </div>\n          <div *ngIf="list.instance.rating == 1">\n            <ion-icon class="yellow-star" name=\'star\'></ion-icon>\n            <ion-icon name=\'star\'></ion-icon>\n            <ion-icon name=\'star\'></ion-icon>\n          </div>\n          <div *ngIf="list.instance.rating == 2">\n            <ion-icon class="yellow-star" name=\'star\'></ion-icon>\n            <ion-icon class="yellow-star" name=\'star\'></ion-icon>\n            <ion-icon name=\'star\'></ion-icon>\n          </div>\n          <div *ngIf="list.instance.rating == 3">\n            <ion-icon class="yellow-star" name=\'star\'></ion-icon>\n            <ion-icon class="yellow-star" name=\'star\'></ion-icon>\n            <ion-icon class="yellow-star" name=\'star\'></ion-icon>\n          </div>\n\n\n        </ion-col>\n\n        <ion-col col-4 class="ion-col-helps">\n          <div class="helps_given">{{list.instance.helps_given}}</div>\n          <div class="helps_given_text">helps given</div>\n        </ion-col>\n      </ion-row>\n\n\n      \n      <!-- CONTACT FROM MOBILE  -->\n      <ion-row *ngIf="list.instance.source ==\'M\'">\n\n        <ion-col col-2 *ngIf="list.instance.photo_url ==\'\'">\n          <img  src="assets/img/avatar_small.png" />\n        </ion-col>\n        <ion-col col-6>\n          <div class="object-item">\n            <div ><b>{{list.instance.full_name}}</b>\n            </div>\n          </div>\n\n\n        </ion-col>\n\n        <ion-col col-4 class="ion-col-helps">\n              <button>INVITE</button>\n        </ion-col>\n      </ion-row>\n\n        \n    </ion-item>\n\n    \n    <!-- END OF LOOP -->\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n</ion-content>\n`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\friends\friends.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__["a" /* Contacts */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_5__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], Friends);
    return Friends;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherlyApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Device } from '@ionic-native/device';



/*
  Generated class for the OtherlyApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var OtherlyApiProvider = (function () {
    function OtherlyApiProvider(http) {
        this.http = http;
        console.log('Hello OtherlyApiProvider Provider');
        this.host = 'http://35.160.26.235:8025';
        this.DEV_host = 'http://staging.other.ly/api';
    }
    OtherlyApiProvider.prototype.CreatePost = function (post_text, username) {
        var _this = this;
        username = 'carlos';
        var body = {
            user: username,
            subject: 'From Ionic',
            body: post_text
        };
        console.log(username);
        var post_url = '/posts/';
        var URL = '/api' + post_url;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve) {
            _this.http.post(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.GetFriendsList = function (access_token, get_options) {
        var _this = this;
        console.log('Otherly LDS Get Friends');
        //username = 'carlos';
        //user=normal49437              user wth no friends
        //let post_url = '/friends/?user=carlosumbreon';
        var post_url = '/friends/';
        //?user=carlos42829
        //http://35.160.26.235:8025/api
        //http://staging.other.ly
        var URL = "http://staging.other.ly/api" + post_url;
        if (get_options.search_str !== undefined) {
            console.log('URL');
            URL = URL + '&search_str=' + get_options.search_str;
        }
        var token_string = 'token ' + access_token;
        console.log('OTHERLY token string:' + token_string);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        console.log;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.get(URL, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                var result = [];
                for (var item in res.results) {
                    if (res.results[item].full_name != "") {
                        result.push({
                            instance: {
                                full_name: res.results[item].full_name,
                                photo_url: res.results[item].related_user.photo_url,
                                rating: res.results[item].rating,
                                helps_given: res.results[item].related_user.helps_given,
                                source: 'O'
                            }
                        });
                    }
                    else {
                        result.push({
                            instance: {
                                full_name: res.results[item].related_user.first_name + ' ' + res.results[item].related_user.last_name,
                                photo_url: res.results[item].related_user.photo_url,
                                rating: res.results[item].rating,
                                helps_given: res.results[item].related_user.helps_given,
                                source: 'O'
                            }
                        });
                    }
                }
                resolve(result);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.GetOtherlyAccessToken = function (accessToken) {
        var _this = this;
        var URL = 'http://staging.other.ly/api/login/';
        var body = {
            fb_access_token: accessToken,
            client_id: 'O1nR1EQwIQfCi3UkxRGAQQxu5KTeJaPGZPseJcdc',
            client_secret: '3TIyuiO6tlBK64Regr1aoodebN89gzywya0aQabnQkzHEsWm4EmqCWrIKr6BCcpz63AViAThGH8nm6tV5ImRpai7CIb3wBOQg6REko7JyZ0DLQAmNFRVla6ZJTNdarFb'
        };
        /*let body = {
          fb_access_token: accessToken,
          client_id: 'F0J01mx3juZS48PdMZ3IYPNdGSI37ku4CwEnvOPq',
          client_secret: 'iZgMtOzgYRbFOil7PLTdngbDx6zifZoGIJyaIoZ6FjOEFFJzh7F27KD6H5i82V4St9z4Z2er4DIhTC0lk236vOTIJLKiP7hEtvmopG3dpK66d7iOvphxdW4SoFkiJdnz'
        }*/
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json;charset=UTF-8');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        console.log('GET OTHERLY TOKEN');
        return new Promise(function (resolve) {
            _this.http.post(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.Otherly_data = res;
                console.log('Otherly TOKEN:' + _this.Otherly_data);
                resolve(_this.Otherly_data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OtherlyApiProvider);
    return OtherlyApiProvider;
}());

//# sourceMappingURL=otherly-api.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaldataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__ = __webpack_require__(43);
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
  Generated class for the LocaldataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LocaldataProvider = (function () {
    function LocaldataProvider(http, OtherlyApi) {
        this.http = http;
        this.OtherlyApi = OtherlyApi;
        this.UserData = {};
        console.log('Hello LocaldataProvider Provider');
        this.UserData = {
            email: '',
            first_name: '',
            last_name: '',
            picture: '',
            user_name: ''
        };
    }
    LocaldataProvider.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var res = _this.UserData;
            return resolve(res);
        });
    };
    LocaldataProvider.prototype.setUser = function (user, Otherly_data) {
        var _this = this;
        return new Promise(function (resolve) {
            //console.log('LocalData Otherly token: ' + Token )	
            _this.UserData = {
                otherly_token: Otherly_data.token,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                picture: user.picture,
                user_name: user.user_name,
                thanks_sent: Otherly_data.user.thanks_sent,
                helps_given: Otherly_data.user.helps_given,
                date_joined: Otherly_data.user.date_joined
            };
            console.log("SET USER:" + JSON.stringify(_this.UserData));
        });
    };
    LocaldataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]])
    ], LocaldataProvider);
    return LocaldataProvider;
}());

//# sourceMappingURL=localdata.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginauthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the LoginauthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginauthPage = (function () {
    function LoginauthPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.LoginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,} *'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginauthPage.prototype.save = function () {
        this.submitAttempt = true;
        if (!this.LoginForm.valid) {
            //this.signupSlider.slideTo(0);
        }
        else {
            console.log("success!");
            console.log(this.LoginForm.value);
        }
    };
    LoginauthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginauthPage');
    };
    LoginauthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loginauth',template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\loginauth\loginauth.html"*/`<!--\n\n  Generated template for the LoginauthPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="menu-otherly-home">\n\n      \n\n    </button>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>	\n\n	<ion-list>\n\n		<form [formGroup]="LoginForm">\n\n			<ion-item>\n\n				<ion-label stacked>Username</ion-label>\n\n				<ion-input type="text" formControlName="email" type="email" [class.invalid]="!LoginForm.controls.email.valid && (LoginForm.controls.email.dirty || submitAttempt)"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item *ngIf="!LoginForm.controls.email.valid  && (LoginForm.controls.email.dirty || submitAttempt)">\n\n		        <p style="color: #ea6153;">Please enter a valid email address.</p>\n\n		    </ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Password</ion-label>\n\n				<ion-input formControlName="password" type="password" [class.invalid]="!LoginForm.controls.password.valid && (LoginForm.controls.password.dirty || submitAttempt)"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item *ngIf="!LoginForm.controls.password.valid  && (LoginForm.controls.password.dirty || submitAttempt)">\n\n	            <p style="color: #ea6153;">Please enter a valid password.</p>\n\n	        </ion-item>\n\n\n\n			<button ion-button class="Login" (click)="save()">Create Account</button>\n\n		</form>\n\n	</ion-list>	\n\n</ion-content>\n\n`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\loginauth\loginauth.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
    ], LoginauthPage);
    return LoginauthPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=loginauth.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.slideOneForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,} *'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            cpassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        }, { 'Validators': __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].isMatching });
    }
    SignupPage.prototype.save = function () {
        this.submitAttempt = true;
        if (!this.slideOneForm.valid) {
            //this.signupSlider.slideTo(0);
        }
        else {
            console.log("success!");
            console.log(this.slideOneForm.value);
        }
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\signup\signup.html"*/`<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="menu-otherly-home">\n\n      \n\n    </button>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>	\n\n		<ion-list>\n\n			<form [formGroup]="slideOneForm">\n\n			  <ion-item>\n\n                <ion-label color="primary" stacked>First Name</ion-label>\n\n                <ion-input formControlName="firstName" type="text" [class.invalid]="!slideOneForm.controls.firstName.valid && (slideOneForm.controls.firstName.dirty || submitAttempt)"></ion-input>\n\n            	</ion-item>\n\n \n\n	            <ion-item *ngIf="!slideOneForm.controls.firstName.valid  && (slideOneForm.controls.firstName.dirty || submitAttempt)">\n\n	                <p style="color: #ea6153;">Please enter a valid first name.</p>\n\n	            </ion-item>\n\n \n\n	            <ion-item>\n\n	                <ion-label color="primary" stacked>Last Name</ion-label>\n\n	                <ion-input formControlName="lastName" type="text" [class.invalid]="!slideOneForm.controls.lastName.valid && (slideOneForm.controls.lastName.dirty || submitAttempt)"></ion-input>\n\n	            </ion-item>\n\n \n\n	            <ion-item *ngIf="!slideOneForm.controls.lastName.valid  && (slideOneForm.controls.lastName.dirty || submitAttempt)">\n\n	                <p style="color: #ea6153;">Please enter a valid last name.</p>\n\n	            </ion-item>\n\n\n\n	            <ion-item>\n\n	                <ion-label color="primary" stacked>Mobile Number</ion-label>\n\n	                <ion-input formControlName="phone" type="number" [class.invalid]="!slideOneForm.controls.phone.valid && (slideOneForm.controls.phone.dirty || submitAttempt)" ng-maxlength="10"></ion-input>\n\n            	</ion-item>\n\n \n\n	            <ion-item *ngIf="!slideOneForm.controls.phone.valid  && (slideOneForm.controls.phone.dirty || submitAttempt)">\n\n	                <p style="color: #ea6153;">Please enter a valid phone number.</p>\n\n	            </ion-item>\n\n\n\n			  	<ion-item>\n\n	                <ion-label color="primary" stacked>Email address</ion-label>\n\n	                <ion-input formControlName="email" type="email" [class.invalid]="!slideOneForm.controls.email.valid && (slideOneForm.controls.email.dirty || submitAttempt)"></ion-input>\n\n            	</ion-item>\n\n \n\n	            <ion-item *ngIf="!slideOneForm.controls.email.valid  && (slideOneForm.controls.email.dirty || submitAttempt)">\n\n	                <p style="color: #ea6153;">Please enter a valid email address.</p>\n\n	            </ion-item>\n\n			  \n\n				<ion-item>\n\n					<ion-label color="primary" stacked>Password</ion-label>\n\n					<ion-input formControlName="password" type="password" [class.invalid]="!slideOneForm.controls.password.valid && (slideOneForm.controls.password.dirty || submitAttempt)"></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item *ngIf="!slideOneForm.controls.password.valid  && (slideOneForm.controls.password.dirty || submitAttempt)">\n\n	                <p style="color: #ea6153;">Please enter a valid password.</p>\n\n	            </ion-item>\n\n\n\n	            <ion-item>\n\n					<ion-label color="primary" stacked>Confirm Password</ion-label>\n\n\n\n					<ion-input formControlName="cpassword" type="password" [class.invalid]="!slideOneForm.controls.cpassword.valid && (slideOneForm.controls.cpassword.dirty || submitAttempt)"></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item no-line *ngIf="slideOneForm.value.password != slideOneForm.value.cpassword && slideOneForm.value.cpassword != \'\' && (slideOneForm.controls.cpassword.dirty  || submitAttempt) && !slideOneForm.controls.cpassword.pending && slideOneForm.value.password != \'\' && slideOneForm.controls.password.valid">\n\n        			<p style="color: #ea6153;">Confirm password not valid</p>\n\n    			</ion-item>\n\n\n\n				<ion-item no-line *ngIf="slideOneForm.value.cpassword == \'\' && (slideOneForm.controls.cpassword.dirty  || submitAttempt) && !slideOneForm.controls.cpassword.pending && slideOneForm.value.password != \'\' && slideOneForm.controls.password.valid">\n\n	                <p style="color: #ea6153;">Confirm password required</p>\n\n	            </ion-item>\n\n			  \n\n			  <button ion-button class="signup" (click)="save()">Create Account</button>\n\n			</form>\n\n		</ion-list>\n\n</ion-content>`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map