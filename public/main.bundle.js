webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div id=\"wrap\" class=\"controlDiv\">\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_unique_email_directive__ = __webpack_require__("../../../../../src/app/directives/unique-email.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_missmatch_password_directive__ = __webpack_require__("../../../../../src/app/directives/missmatch-password.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_layout_header_header_component__ = __webpack_require__("../../../../../src/app/components/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_layout_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_work_work_component__ = __webpack_require__("../../../../../src/app/components/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_price_price_component__ = __webpack_require__("../../../../../src/app/components/price/price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Routes

// Directives


// Services


// Guards

// Components
 // Root Component








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_layout_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_layout_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_work_work_component__["a" /* WorkComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_price_price_component__["a" /* PriceComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_5__directives_unique_email_directive__["a" /* UniqueEmailDirective */],
            __WEBPACK_IMPORTED_MODULE_6__directives_missmatch_password_directive__["a" /* MissmatchPasswordDirective */],
            __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* AppRoutes */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_work_work_component__ = __webpack_require__("../../../../../src/app/components/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_price_price_component__ = __webpack_require__("../../../../../src/app/components/price/price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_3__components_work_work_component__["a" /* WorkComponent */] },
    { path: 'price', component: __WEBPACK_IMPORTED_MODULE_4__components_price_price_component__["a" /* PriceComponent */] },
    { path: 'auth/signup', component: __WEBPACK_IMPORTED_MODULE_5__components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'auth/login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] }
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<h1 class=\"text-muted\">Pricetrak</h1>\n<br>\n<div>\n  <h4>Why this web site ?</h4>Inspired by a Digital Inspiration post this website hosts a simple\n  <a href=\"/redirect?to=http%3A//www.flipkart.com?\">Flipkart.com</a>, <a href=\"http://www.amazon.in\">Amazon.In</a>,\n  <a href=\"http://www.snapdeal.com?utm_source=aff_prog&amp;utm_campaign=afts&amp;offer_id=17&amp;aff_id=14723\">Snapdeal.com</a>,\n  <a href=\"http://www.infibeam.com?trackId=singhkrviv\">Infibeam.com</a>, <a href=\"http://linksredirect.com?pub_id=4403CL4185&amp;url=http%3A//jabong.com\">\n    Jabong.com</a> & <a href=\"http://linksredirect.com?pub_id=4403CL4185&amp;url=http%3A//paytm.com\">Paytm.com</a> price tracker. Hope this saves you some money.\n  <br/>\n  <br/>\n  <h4>Any policies ?</h4>Checkout brand new <a href=\"/cookie\">Privacy policy</a>\n  <br/>\n  <br/>\n  <h4>Any disclaimers ?</h4> All outgoing links contain my affiliate id embedded for respective sites.\n  <br/>\n  <br/>\n  <h4>Which stack ?</h4>Built using <a href=\"http://nodejs.org/\">Node.js</a>, <a href=\"http://getbootstrap.com/\">Twitter Bootstrap</a>,\n  <a href=\"http://angular.io\">Angular 4 </a>and more. Supported by <a href=\"https://www.digitalocean.com/?refcode=3570798be52f\">Digital Ocean</a> and <a href=\"http://x.co/fliptrak\">Go Daddy</a>.\n  <br/>\n  <br/>\n  <h4>What if something goes wrong ?</h4>Issue tracker for website available at <a href=\"https://bitbucket.org/mail2vks/fliptrak/issues\">\n    bitbucket.org</a>\n  <br/>\n  <br/>\n  <h4>Any copyrights ?</h4>Yeah !! Copyright &copy; 2017 PriceTrack.in | All rights reserved.\n  <br/>\n  <br/>\n  <h4>How to contact you ?</h4>Email PriceTrack<span class=\"domain\">pricetrack.in</span>\n  <br/>\n  <br/>\n  <a href=\"https://twitter.com/muhammadkh4n\" data-show-count=\"false\" data-size=\"large\" data-dnt=\"true\" class=\"twitter-follow-button\">\n    <span>@muhammadkh4n</span>\n  </a>\n  <script>\n    (function(d, s, id) {\n      var js, fjs = d.getElementsByTagName(s)[0],\n      p = /^http:/.test(d.location) ? 'http' : 'https';\n      if (!d.getElementById(id)) {\n        js = d.createElement(s);\n        js.id = id;\n        js.src = p + '://platform.twitter.com/widgets.js';\n        fjs.parentNode.insertBefore(js, fjs);\n      }\n    })(document, 'script', 'twitter-wjs');\n  </script>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<div class=\"row\">\n  <div class=\"col-xs-12\" *ngIf=\"msg\">\n    <div class=\"alert alert-success text-center\">\n      {{msg}}\n    </div>\n  </div>\n  <div class=\"col-md-12 text-center\">\n    <h5>Works with</h5>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <a href=\"http://www.flipkart.com\"><img src=\"/assets/img/fk.png\" style=\"max-height:35px\"></a>\n    &nbsp;&nbsp;&nbsp;\n    <a href=\"http://www.amazon.in\"><img src=\"/assets/img/amzn.png\" style=\"max-height:25px\"></a>&nbsp;&nbsp;&nbsp;\n    <!-- <a href=\"http://linksredirect.com?pub_id=4403CL4185&amp;url=http%3A//jabong.com\"><img src=\"dist/jb.png\" style=\"max-height:20px\"></a> -->\n    <!-- &nbsp;&nbsp;&nbsp; -->\n    <!-- <a href=\"http://www.snapdeal.com?utm_source=aff_prog&amp;utm_campaign=afts&amp;offer_id=17&amp;aff_id=14723\"> -->\n    <!--   <img src=\"dist/sd.png\" style=\"max-height:20px\"></a>&nbsp;&nbsp;&nbsp; -->\n    <!-- <a href=\"http://www.infibeam.com?trackId=singhkrviv\"> -->\n    <!--   <img src=\"dist/ib.png\" style=\"max-height:25px\"></a>&nbsp;&nbsp;&nbsp; -->\n    <!-- <a href=\"http://linksredirect.com?pub_id=4403CL4185&amp;url=http%3A//paytm.com\"> -->\n    <!--   <img src=\"dist/pt.png\" style=\"max-height:35px\"></a> -->\n  </div>\n</div>\n<br/>\n<!-- <div class=\"row\"> -->\n<!--   <div class=\"col-md-12 text-center\">Few minor issues with jabong.com right now. We are working on a fix</div> -->\n<!-- </div> -->\n<div class=\"row\">\n  <div class=\"col-md-1\">\n    <div class=\"ajaxStatus\" *ngIf=\"loading\">\n      <img src=\"/assets/img/progress.gif\">\n    </div>\n  </div>\n  <div class=\"col-md-10\">\n    <div class=\"addItem\">\n      <br/>\n      <br/>\n      <form role=\"form\">\n        <p class=\"text-center\">Enter page link for product you want to track below or use Google Chrome Extension\n        </p>\n        <div class=\"input-group input-group-small\">\n          <input id=\"itemInputURL\" autofocus=\"autofocus\" type=\"text\"\n                 placeholder=\"Enter product link like http://www.flipkart.com/apple-iphone-5s/p/itmdppzzgvhwgbst?pid=MOBDPPZZDX8WSPAT \n                              or http://www.amazon.in/Apple-iPhone-5s-Space-Grey/dp/B00FXLC9V4/\"\n                 class=\"form-control\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" id=\"addItemBtnNL\" class=\"btn btn-success\">\n              Add to watch list</button>\n          </span>\n        </div>\n      </form>\n    </div>\n    <div class=\"listItem\">\n      <br/>\n      <br/>\n      <div id=\"chartModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" class=\"modal fade\">\n        <div class=\"modal-dialog modal-lg\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>\n              <h4 class=\"modal-title\">Price History</h4></div>\n            <div class=\"modal-body\">\n              <div id=\"chart\"></div>\n            </div>\n            <div class=\"modal-footer\">\n              <button data-dismiss=\"modal\" class=\"btn btn-default\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h4>You are currently tracking <b>3</b> items.\n        <div>\n          <h5>Sort list by &nbsp;<a href=\"#\" class=\"byprice\">price</a>&nbsp;\n            <a href=\"#\" class=\"bytitle\">title</a>&nbsp;<a href=\"#\" class=\"byvendor\">vendor</a>&nbsp;\n            <a href=\"#\" class=\"bydrop\">price drop</a></h5>\n        </div>\n        <hr/>\n      </h4>\n      <div class=\"dataToSort\">\n        <div>\n          <div>\n            <h1>Tracked items list placeholder</h1>\n          </div>\n          <hr/>\n        </div>\n      </div>\n      <div>\n        <h5>Sort list by &nbsp;<a href=\"#\" class=\"byprice\">price</a>&nbsp;<a href=\"#\" class=\"bytitle\">title\n          </a>&nbsp;<a href=\"#\" class=\"byvendor\">vendor</a>&nbsp;<a href=\"#\" class=\"bydrop\">price drop</a></h5>\n        <hr/>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-md-8\">\n    <div id=\"alert\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" class=\"modal fade\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>\n            <h4 class=\"modal-title\">Set alert for Item Title</h4>\n          </div>\n          <div class=\"modal-body\">\n            <div id=\"alertInner\" style=\"padding-left:15px;\">\n              <span>\n                <h3>Price right now is <i class=\"fa fa-inr\">\n                    Current Price $ 238</i></h3>\n                <form name=\"alertForm\"></form>\n                <div class=\"form-group\"></div>\n                <div class=\"radio\">\n                  <input type=\"radio\" name=\"alert_pref\" value=\"email\">&nbsp;Send mail to\n                  <div class=\"input-group input-group-sm\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n                    <input type=\"email\" name=\"alert_pref_email\" required class=\"form-control\">\n                  </div>&nbsp;when price drops below\n                  <div class=\"input-group input-group-sm\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-inr\"></i></span>\n                    <input type=\"text\" name=\"alert_price\" pattern=\"/^[0-9]+$/\" required class=\"form-control\">\n                  </div>\n                </div>\n                <span>\n                  <div class=\"radio\">\n                    <input type=\"radio\" name=\"alert_pref\" value=\"none\">&nbsp;Disable this alert\n                  </div>\n                </span>\n                <div class=\"guideText\">Alert modal message</div>\n              </span>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button data-dismiss=\"modal\" class=\"btn btn-danger\">Close</button>\n            <button class=\"btn btn-success\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br/>\n<br/>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(Message) {
        this.Message = Message;
        this.msg = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msg = this.Message.msg;
        setTimeout(function () {
            _this.msg = null;
            _this.Message.msg = null;
        }, 5000);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/layout/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"text-center text-muted\">\n    <p>Copyright &copy; 2017 PriceTrack.in. All rights reserved</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/layout/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/layout/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/layout/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"top\" role=\"banner\" class=\"navbar navbar-static-top navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\">\n        <span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>\n      <img src=\"/assets/img/logo.png\" class=\"navbar-brand\"><a routerLink=\"/\" class=\"navbar-brand\">Pricetrack</a></div>\n    <nav style=\"height: auto;\" role=\"navigation\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a href=\"http://twitter.com/pricetrack\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li>\n        <li>\n          <a href=\"http://facebook.com/pricetrack\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>\n        <li>\n          <a href=\"https://chrome.google.com/webstore/detail/pricetrakin-assistant-for/mfgfkbhlcecfjmpfjplmfpkgelimpkfd\" target=\"_blank\"><i class=\"fa fa-chrome\"></i></a>\n        </li>\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n          <a routerLink=\"/\"><i class=\"fa fa-home\"></i></a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/about\" class=\"white\">About</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/work\" class=\"white\">How it Works ?</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/price\" class=\"white\">Price changes</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li routerLinkActive=\"active\" *ngIf=\"!User.loggedIn()\">\n          <a routerLink=\"/auth/signup\">Sign Up <i class=\"fa fa-user-plus\"></i></a>\n        </li>\n        <li *ngIf=\"User.loggedIn()\">\n          <a href=\"#\">Dashboard ({{User.getUsername()}})</a>\n        </li>\n        <li *ngIf=\"User.loggedIn()\">\n          <button class=\"btn btn-danger navbar-btn\" (click)=\"User.logout()\">\n            <i class=\"fa fa-sign-out\"></i> Log out</button>\n        </li>\n        <li *ngIf=\"!User.loggedIn()\">\n          <div class=\"btn-group navbar-btn\">\n            <button class=\"btn btn-success\" routerLink=\"/auth/login\">Sign In</button>\n            <button data-toggle=\"dropdown\" class=\"btn btn-success dropdown-toggle\"><span class=\"caret\"></span></button>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a href=\"/auth/google\"><i class=\"fa fa-google-plus\"></i>&nbsp;&nbsp;Sign In with Google</a>\n              </li>\n              <li>\n                <a href=\"/auth/windows\"><i class=\"fa fa-windows\"></i>&nbsp;&nbsp;Sign In with Microsoft</a>\n              </li>\n              <li>\n                <a href=\"/auth/facebook\"><i class=\"fa fa-facebook\"></i>&nbsp;&nbsp;Sign In with Facebook</a>\n              </li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(User) {
        this.User = User;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/layout/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/layout/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<div class=\"row\">\n  <div class=\"col-sm-6 col-xs-12 col-sm-offset-3\">\n    <div class=\"alert alert-danger\" *ngIf=\"error\">\n      {{error.msg}}\n    </div>\n    <div class=\"alert alert-success\" *ngIf=\"msg\">\n      {{msg}}\n    </div>\n    <form class=\"form-horizontal\" #userForm=\"ngForm\" (submit)=\"loginUser()\">\n      <div class=\"form-group\" [ngClass]=\"em.invalid && em.touched ? 'has-error' : ''\">\n        <label for=\"email\" class=\"col-sm-3 control-label\">Email</label>\n        <div class=\"col-sm-9\">\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\" #em=\"ngModel\" required email>\n          <div *ngIf=\"em.invalid && em.touched\">\n            <span id=\"emailRequired\" class=\"help-block\" *ngIf=\"em.errors.required\">Email is required</span>\n            <span id=\"invalidEmail\" class=\"help-block\" *ngIf=\"!em.errors.required && em.errors.email\">Email is invalid</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"p.invalid && p.touched ? 'has-error' : ''\">\n        <label for=\"password\" class=\"col-sm-3 control-label\">Password</label>\n        <div class=\"col-sm-9\">\n          <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" required [(ngModel)]=\"user.password\" #p=\"ngModel\">\n          <div *ngIf=\"p.invalid && p.touched\">\n            <span id=\"pRequired\" class=\"help-block\" *ngIf=\"p.errors.required\">Password is required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-3 col-sm-9\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userForm.form.valid\">Login</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(User, router, Message) {
        this.User = User;
        this.router = router;
        this.Message = Message;
        this.user = {};
        this.error = null;
        this.msg = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msg = this.Message.msg;
        setTimeout(function () {
            _this.msg = null;
            _this.Message.msg = null;
        }, 5000);
        this.form.valueChanges.subscribe(function (val) {
            _this.error = null;
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.User.loginUser(this.user)
            .subscribe(function (res) {
            console.log(res);
            _this.Message.msg = res.msg;
            _this.router.navigate(['']);
        }, function (err) {
            console.log(err.json());
            _this.error = err.json();
        });
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "form", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/price/price.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/price/price.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<br/>\n<br/>\n<div id=\"chartModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>\n        <h4 class=\"modal-title\">Price History</h4></div>\n      <div class=\"modal-body\">\n        <div id=\"chart\"></div>\n      </div>\n      <div class=\"modal-footer\">\n        <button data-dismiss=\"modal\" class=\"btn btn-default\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"dataToSort\">\n  <div>\n    <h1>Item list placeholder</h1>\n    <hr/>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <button type=\"button\" id=\"loadMoreChangesBtn\" class=\"btn btn-primary\">Load more price changes</button>\n  </div>\n</div>\n<br/>\n"

/***/ }),

/***/ "../../../../../src/app/components/price/price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceComponent = (function () {
    function PriceComponent() {
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    return PriceComponent;
}());
PriceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-price',
        template: __webpack_require__("../../../../../src/app/components/price/price.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/price/price.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PriceComponent);

//# sourceMappingURL=price.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<div class=\"row\">\n  <div class=\"col-sm-6 col-xs-12 col-sm-offset-3\">\n    <form class=\"form-horizontal\" #userForm=\"ngForm\" (submit)=\"registerUser()\">\n      <div class=\"form-group\" [ngClass]=\"fn.invalid && fn.touched ? 'has-error' : ''\">\n        <label for=\"first_name\" class=\"col-sm-3 control-label\">First Name</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\" id=\"first_name\" name=\"first_name\" placeholder=\"First Name\" required [(ngModel)]=\"user.first_name\" #fn=\"ngModel\">\n          <div *ngIf=\"fn.invalid && fn.touched\">\n            <span id=\"fnRequired\" class=\"help-block\" *ngIf=\"fn.errors.required\">First Name is required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"ln.invalid && ln.touched ? 'has-error' : ''\">\n        <label for=\"last_name\" class=\"col-sm-3 control-label\">Last Name</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\" id=\"last_name\" name=\"last_name\" placeholder=\"Last Name\" required [(ngModel)]=\"user.last_name\" #ln=\"ngModel\">\n          <div *ngIf=\"ln.invalid && ln.touched\">\n            <span id=\"lnRequired\" class=\"help-block\" *ngIf=\"ln.errors.required\">Last Name is required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"em.invalid && em.touched ? 'has-error' : ''\">\n        <label for=\"email\" class=\"col-sm-3 control-label\">Email</label>\n        <div class=\"col-sm-9\">\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\" #em=\"ngModel\" required email uniqueEmail>\n          <div *ngIf=\"em.invalid && em.touched\">\n            <span id=\"emailRequired\" class=\"help-block\" *ngIf=\"em.errors.required\">Email is required</span>\n            <span id=\"invalidEmail\" class=\"help-block\" *ngIf=\"!em.errors.required && em.errors.email\">Email is invalid</span>\n            <span id=\"uniqueEmail\" class=\"help-block\" *ngIf=\"!em.errors.required && !em.errors.email && em.errors.userExists\">Email already taken</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"p.invalid && p.touched ? 'has-error' : ''\">\n        <label for=\"password\" class=\"col-sm-3 control-label\">Password</label>\n        <div class=\"col-sm-9\">\n          <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" required [(ngModel)]=\"user.password\" #p=\"ngModel\">\n          <div *ngIf=\"p.invalid && p.touched\">\n            <span id=\"pRequired\" class=\"help-block\" *ngIf=\"p.errors.required\">Password is required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"cp.invalid && cp.touched ? 'has-error' : ''\">\n        <label for=\"confirm_password\" class=\"col-sm-3 control-label\">Confirm password</label>\n        <div class=\"col-sm-9\">\n          <input type=\"password\" class=\"form-control\" id=\"confirm_password\" name=\"confirm_passowrd\" placeholder=\"Confirm password\" missmatchPassword=\"password\" required [(ngModel)]=\"user.confirm_password\" #cp=\"ngModel\">\n          <div *ngIf=\"cp.invalid && cp.touched\">\n            <span id=\"cpRequired\" class=\"help-block\" *ngIf=\"cp.errors.required\">Password Confirmation is required</span>\n            <span id=\"missmatchPassword\" class=\"help-block\" *ngIf=\"!cp.errors.required && cp.errors.mismatchPassword\">Passwords missmatch</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-3 col-sm-9\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userForm.form.valid\">Sign Up</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(User, router, Message) {
        this.User = User;
        this.router = router;
        this.Message = Message;
        this.user = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.registerUser = function () {
        var _this = this;
        this.User.registerUser(this.user)
            .subscribe(function (res) {
            console.log(res);
            _this.Message.msg = res.msg;
            _this.router.navigate(['/auth/login']);
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/work/work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<div>\n  <ul>\n    <li>To get started copy the exact product link from website and paste in the textbox on dashboard page. Try adding direct product page link and not the search page link.\n      <br/>\n      <br/><img src=\"/assets/img/hiw-copy.png\" style=\"width:85%;\">\n      <br/>\n      <br/>\n    </li>\n    <li class=\"hiw\">Click the \"Add to watch list\" button for Pricetrak to fetch product details and add it to your watchlist.\n      <br/>\n      <br/><img src=\"/assets/img/hiw-paste.png\" style=\"width:85%;\">\n      <br/>\n      <br/>\n    </li>\n    <li>\n      Use the \"Price drop notification\" option to set alert price for product. Currently only notification by email is supported.\n      <br/>\n      <br/>\n      <img src=\"/assets/img/hiw-alert.png\" style=\"width:50%;\">\n      <br/>\n      <br/>\n    </li>\n  </ul>\n</div>\n<br/>\n"

/***/ }),

/***/ "../../../../../src/app/components/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    return WorkComponent;
}());
WorkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-work',
        template: __webpack_require__("../../../../../src/app/components/work/work.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/work/work.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WorkComponent);

//# sourceMappingURL=work.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/missmatch-password.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissmatchPasswordDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MissmatchPasswordDirective = MissmatchPasswordDirective_1 = (function () {
    function MissmatchPasswordDirective(missmatchPassword) {
        this.missmatchPassword = missmatchPassword;
    }
    MissmatchPasswordDirective.prototype.validate = function (c) {
        var confirm = c.value;
        var pass = c.root.get(this.missmatchPassword);
        if (confirm && pass.value !== confirm)
            return {
                missmatchPassword: false
            };
        return null;
    };
    return MissmatchPasswordDirective;
}());
MissmatchPasswordDirective = MissmatchPasswordDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[ngModel][missmatchPassword]',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MissmatchPasswordDirective_1; }),
                multi: true
            }]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('missmatchPassword')),
    __metadata("design:paramtypes", [String])
], MissmatchPasswordDirective);

var MissmatchPasswordDirective_1;
//# sourceMappingURL=missmatch-password.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/unique-email.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniqueEmailDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UniqueEmailDirective = UniqueEmailDirective_1 = (function () {
    function UniqueEmailDirective(User) {
        this.User = User;
    }
    UniqueEmailDirective.prototype.validate = function (control) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.User.checkUniqueEmail(control.value)
                .subscribe(function (res) {
                if (res.userExists) {
                    observer.next({ userExists: true });
                }
                else {
                    observer.next(null);
                }
            });
        }).first();
    };
    return UniqueEmailDirective;
}());
UniqueEmailDirective = UniqueEmailDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[uniqueEmail][ngModel]',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NG_ASYNC_VALIDATORS */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return UniqueEmailDirective_1; }),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], UniqueEmailDirective);

var UniqueEmailDirective_1, _a;
//# sourceMappingURL=unique-email.directive.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, User) {
        this.router = router;
        this.User = User;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.User.loggedIn())
            return true;
        this.router.navigate(['/auth/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = (function () {
    function MessageService() {
        this.msg = null;
    }
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MessageService);

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    // Check if user email exists
    UserService.prototype.checkUniqueEmail = function (email) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/user/check', { email: email }).map(function (res) { return res.json(); });
    };
    // register the user
    UserService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/auth/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    // login user
    UserService.prototype.loginUser = function (user) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/auth/login', user).map(function (res) {
            var Response = res.json();
            if (Response.token && Response.username) {
                _this.saveToken(Response.username, Response.token);
            }
            return Response;
        });
    };
    // save token to local storage
    UserService.prototype.saveToken = function (username, token) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        this.token = token;
        this.username = username;
    };
    // logout user
    UserService.prototype.logout = function () {
        this.token = null;
        this.username = null;
        localStorage.clear();
    };
    UserService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        this.token = token;
    };
    UserService.prototype.getUsername = function () {
        this.username = localStorage.getItem('username');
        return this.username;
    };
    UserService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])();
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://192.168.1.65:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map