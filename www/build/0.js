webpackJsonp([0],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthModule", function() { return OAuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_oauth_providers_list_page__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OAuthModule = (function () {
    function OAuthModule() {
    }
    OAuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_oauth_providers_list_page__["a" /* OAuthProvidersListPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__list_oauth_providers_list_page__["a" /* OAuthProvidersListPage */]
            ],
            providers: []
        })
    ], OAuthModule);
    return OAuthModule;
}());

//# sourceMappingURL=oauth.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OAuthProvidersListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OAuthProvidersListPage = (function () {
    function OAuthProvidersListPage() {
    }
    OAuthProvidersListPage.prototype.login = function (source) {
    };
    OAuthProvidersListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\oauth\list\oauth-providers.list.html"*/`<ion-header>\n	<ion-navbar>\n		 <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>OAuth providers</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<h4 padding>Please login by using one of the following providers</h4>\n	<ion-list inset>\n		<ion-item (click)="login(\'facebook\')">\n			<ion-icon name="logo-facebook" item-left></ion-icon>\n			Facebook\n		</ion-item>\n		<ion-item (click)="login(\'google\')">\n			<ion-icon name="logo-google" item-left></ion-icon>\n			Google\n		</ion-item>\n	</ion-list>\n</ion-content>`/*ion-inline-end:"E:\xammp\htdocs\ionic\otherlyionicmaster_new\src\pages\oauth\list\oauth-providers.list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OAuthProvidersListPage);
    return OAuthProvidersListPage;
}());

//# sourceMappingURL=oauth-providers.list.page.js.map

/***/ })

});
//# sourceMappingURL=0.js.map