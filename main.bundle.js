webpackJsonp([0,3],{

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(942),
            styles: [__webpack_require__(939)],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/andre/Documents/GitHub/tennis-homepage/src/app.component.js.map

/***/ },

/***/ 480:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 480;


/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(582);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_23" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/andre/Documents/GitHub/tennis-homepage/src/main.js.map

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topic_topic_component__ = __webpack_require__(584);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__topic_topic_component__["a" /* TopicComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/andre/Documents/GitHub/tennis-homepage/src/app.module.js.map

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContenfulService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContenfulService = (function () {
    //   space: 'mo94git5zcq9',
    //   accessToken: 'b933b531a7f37efbfc68838d24b416ddb3d53ea16377606045d3bfcdf705b0fb'
    // })
    function ContenfulService() {
        this.contentful = __webpack_require__(601);
        this.client = this.contentful.createClient({
            space: 'ib5ydo7u4ogm',
            accessToken: '36d0e337ebcc34c13ef162ddcba494cb17310041e299086a449d17c13777987b'
        });
    }
    ContenfulService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ContenfulService);
    return ContenfulService;
}());
//# sourceMappingURL=C:/Users/andre/Documents/GitHub/tennis-homepage/src/contenful.service.js.map

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(580);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/andre/Documents/GitHub/tennis-homepage/src/index.js.map

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(943),
            styles: [__webpack_require__(940)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/Users/andre/Documents/GitHub/tennis-homepage/src/navbar.component.js.map

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contenful_service__ = __webpack_require__(581);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicComponent = (function () {
    function TopicComponent(ContenfulService) {
        this.ContenfulService = ContenfulService;
        this.client = this.ContenfulService.client;
        this.text = this.ContenfulService.client.getEntry('49cV2SnLIcMYaWoEg8oMo0')
            .then(function (res) {
            return res.fields.text;
        });
        this.url = this.ContenfulService.client.getAsset('605UIkWqt2eCIgyc2Gi8W2')
            .then(function (res) {
            return res.fields.file.url;
        });
    }
    TopicComponent.prototype.getNews = function () {
        this.client.getEntry('49cV2SnLIcMYaWoEg8oMo0')
            .then(function (news) {
            this.text = news.fields.text;
            console.log(this.text);
        });
        // this.client.getEntries({
        //   'content_type': 'news'
        // })
        // .then(function (entries) {
        //   // log the title for all the entries that might have it
        //   entries.items.forEach(function (entry) {
        //     console.log(entry)
        //     if(entry.fields.img) {
        //       //console.log(entry.fields.img[0].fields.file.url)
        //       //entry.fields.img[0].fields.file.url.then(function(e){console.log('yes')})
        //       //console.log(this.url);
        //     }
        //   })
        // })   
    };
    TopicComponent.prototype.ngOnInit = function () {
    };
    TopicComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-topic',
            template: __webpack_require__(944),
            styles: [__webpack_require__(941)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__contenful_service__["a" /* ContenfulService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contenful_service__["a" /* ContenfulService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contenful_service__["a" /* ContenfulService */]) === 'function' && _a) || Object])
    ], TopicComponent);
    return TopicComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/andre/Documents/GitHub/tennis-homepage/src/topic.component.js.map

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/andre/Documents/GitHub/tennis-homepage/src/environment.js.map

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/andre/Documents/GitHub/tennis-homepage/src/polyfills.js.map

/***/ },

/***/ 939:
/***/ function(module, exports) {

module.exports = "#section0 {\r\n    width: 100%;\r\n    background-size: cover;\r\n    background: url(\"./assets/img/tennis0.jpg\") no-repeat fixed center;\r\n}"

/***/ },

/***/ 940:
/***/ function(module, exports) {

module.exports = "#logo {\r\n    height: 100px;\r\n    float: left;\r\n}\r\n#clubName {\r\n    float: left;\r\n    margin-top: 25px;\r\n    color: white;\r\n}\r\n#signIn {\r\n    float: right;\r\n    margin-top: 25px;\r\n}\r\n#member {\r\n    margin-top: 30px;\r\n    margin-left: 5%;\r\n}\r\n\r\n#clubName {\r\n    float: left;\r\n    margin-top: 25px;\r\n    color: white;\r\n}"

/***/ },

/***/ 941:
/***/ function(module, exports) {

module.exports = "\r\n"

/***/ },

/***/ 942:
/***/ function(module, exports) {

module.exports = "<div id=\"fullpage\">\n  <div class=\"section\" id=\"section0\">\n    <app-navbar></app-navbar>\n  </div>\n  <div class=\"section\" id=\"section1\">\n    <div class=\"container-fluid nopadding\">\n      <app-topic></app-topic>\n    </div>\n  </div>\n</div>\n\n"

/***/ },

/***/ 943:
/***/ function(module, exports) {

module.exports = "<div id=\"header\" class=\"navbar\">\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" href=\"#firstPage\">\n                    <img id=\"logo\" alt=\"Brand\" src=\"./assets/img/logo.png\">\n                    <!--<h4 id=\"clubName\">Treptower Teufel Tennis Club e.V.</h4>-->\n                    <h4 id=\"clubName\">TVM Tennis</h4>\n                </a>\n                <button type=\"button\" id=\"signIn\" class=\"btn btn-danger navbar-btn\">Anmelden</button>\n            </div>\n        </div>\n    </nav>\n</div>\n<div class=\"row\">\n    <div class=\"headline\">\n        <h2 class=\"col-xs-5 col-md-5 col-lg-5\">\n            Werde jetzt Mitglied und sichere dir ein Jahr kostenloses Training.\n        </h2>\n    </div>\n</div>\n<button class=\"btn btn-lg btn-success col-md-4\" id=\"member\">Jetzt Mitglied werden</button>\n"

/***/ },

/***/ 944:
/***/ function(module, exports) {

module.exports = "<div class=\"col-lg-4 col-sm-6 nopadding\">\n    <a class=\"portfolio-box\" href=\"#\">\n        <img class=\"img-fluid\" src=\"{{url._v}}\">\n        <div class=\"portfolio-box-caption\">\n            <div class=\"portfolio-box-caption-content\">\n                <div class=\"project-category text-faded\">\n                    <div class=\"project-name\">\n                        {{text._v}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </a>\n</div>      \n<!--<div class=\"col-lg-4 col-sm-6 nopadding\">\n    <a class=\"portfolio-box\" href=\"#\">\n        <img class=\"img-fluid\" src=\"/assets/img/farbig1.jpg\">\n        <div class=\"portfolio-box-caption\">\n            <div class=\"portfolio-box-caption-content\">\n                <div class=\"project-category text-faded\">\n                    <div class=\"project-name\">\n                        Über uns und unsere Vorteile\n                    </div>\n                </div>\n            </div>\n        </div>\n    </a>\n</div>-->\n<div class=\"col-lg-4 col-sm-6 nopadding\">\n    <a class=\"portfolio-box\" href=\"#\">\n        <img class=\"img-fluid\" src=\"./assets/img/schwarz_weiß2.jpg\">\n        <div class=\"portfolio-box-caption\">\n            <div class=\"portfolio-box-caption-content\">\n                <div class=\"project-category text-faded\">\n                    <div class=\"project-name\">\n                        Teams\n                    </div>\n                </div>\n            </div>\n        </div>\n    </a>\n</div>\n<div class=\"col-lg-4 col-sm-6 nopadding\">\n    <a class=\"portfolio-box\" href=\"#\">\n        <img class=\"img-fluid\" src=\"./assets/img/farbig3.jpg\">\n        <div class=\"portfolio-box-caption\">\n            <div class=\"portfolio-box-caption-content\">\n                <div class=\"project-category text-faded\">\n                    <div class=\"project-name\">\n                        News/Kalender\n                    </div>\n                </div>\n            </div>\n        </div>\n    </a>\n</div>\n<div class=\"col-lg-4 col-sm-6 nopadding\">\n    <a class=\"portfolio-box\" href=\"#\">\n        <img class=\"img-fluid\" src=\"./assets/img/schwarz_weiß3.jpg\">\n        <div class=\"portfolio-box-caption\">\n            <div class=\"portfolio-box-caption-content\">\n                <div class=\"project-category text-faded\">\n                    <div class=\"project-name\">\n                        Kontakt\n                    </div>\n                </div>\n            </div>\n        </div>\n    </a>\n</div>\n<div class=\"col-lg-4 col-sm-6 nopadding\">\n    <a class=\"portfolio-box\" href=\"#\">\n        <img class=\"img-fluid\" src=\"./assets/img/farbig2.jpg\">\n        <div class=\"portfolio-box-caption\">\n            <div class=\"portfolio-box-caption-content\">\n                <div class=\"project-category text-faded\">\n                    <div class=\"project-name\">\n                        Hallenbuchung\n                    </div>\n                </div>\n            </div>\n        </div>\n    </a>\n</div>\n<div class=\"col-lg-4 col-sm-6 nopadding\">\n    <a class=\"portfolio-box\" href=\"#\">\n        <img class=\"img-fluid\" src=\"./assets/img/schwarz_weiß1.jpg\">\n        <div class=\"portfolio-box-caption\">\n            <div class=\"portfolio-box-caption-content\">\n                <div class=\"project-category text-faded\">\n                    <div class=\"project-name\">\n                        Downloads\n                    </div>\n                </div>\n            </div>\n        </div>\n    </a>\n</div>"

/***/ },

/***/ 959:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(481);


/***/ }

},[959]);
//# sourceMappingURL=main.bundle.map