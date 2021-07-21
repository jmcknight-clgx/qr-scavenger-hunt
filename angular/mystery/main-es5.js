function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_itsasecrettoeverybody_itsasecrettoeverybody_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/itsasecrettoeverybody/itsasecrettoeverybody.component */
    "./src/app/components/itsasecrettoeverybody/itsasecrettoeverybody.component.ts");
    /* harmony import */


    var _components_nothingtoseehere_nothingtoseehere_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/nothingtoseehere/nothingtoseehere.component */
    "./src/app/components/nothingtoseehere/nothingtoseehere.component.ts");
    /* harmony import */


    var _components_rainbow_rainbow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/rainbow/rainbow.component */
    "./src/app/components/rainbow/rainbow.component.ts");
    /* harmony import */


    var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/welcome/welcome.component */
    "./src/app/components/welcome/welcome.component.ts");

    var routes = [{
      path: '',
      component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"]
    }, {
      path: 'itsasecrettoeverybody',
      component: _components_itsasecrettoeverybody_itsasecrettoeverybody_component__WEBPACK_IMPORTED_MODULE_2__["ItsasecrettoeverybodyComponent"]
    }, {
      path: 'nothingtoseehere',
      component: _components_nothingtoseehere_nothingtoseehere_component__WEBPACK_IMPORTED_MODULE_3__["NothingtoseehereComponent"]
    }, {
      path: 'rainbow',
      component: _components_rainbow_rainbow_component__WEBPACK_IMPORTED_MODULE_4__["RainbowComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'mystery';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/welcome/welcome.component */
    "./src/app/components/welcome/welcome.component.ts");
    /* harmony import */


    var _components_itsasecrettoeverybody_itsasecrettoeverybody_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/itsasecrettoeverybody/itsasecrettoeverybody.component */
    "./src/app/components/itsasecrettoeverybody/itsasecrettoeverybody.component.ts");
    /* harmony import */


    var _components_nothingtoseehere_nothingtoseehere_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/nothingtoseehere/nothingtoseehere.component */
    "./src/app/components/nothingtoseehere/nothingtoseehere.component.ts");
    /* harmony import */


    var _components_rainbow_rainbow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/rainbow/rainbow.component */
    "./src/app/components/rainbow/rainbow.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"], _components_itsasecrettoeverybody_itsasecrettoeverybody_component__WEBPACK_IMPORTED_MODULE_5__["ItsasecrettoeverybodyComponent"], _components_nothingtoseehere_nothingtoseehere_component__WEBPACK_IMPORTED_MODULE_6__["NothingtoseehereComponent"], _components_rainbow_rainbow_component__WEBPACK_IMPORTED_MODULE_7__["RainbowComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"], _components_itsasecrettoeverybody_itsasecrettoeverybody_component__WEBPACK_IMPORTED_MODULE_5__["ItsasecrettoeverybodyComponent"], _components_nothingtoseehere_nothingtoseehere_component__WEBPACK_IMPORTED_MODULE_6__["NothingtoseehereComponent"], _components_rainbow_rainbow_component__WEBPACK_IMPORTED_MODULE_7__["RainbowComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/itsasecrettoeverybody/itsasecrettoeverybody.component.ts": function srcAppComponentsItsasecrettoeverybodyItsasecrettoeverybodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItsasecrettoeverybodyComponent", function () {
      return ItsasecrettoeverybodyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ItsasecrettoeverybodyComponent =
    /*#__PURE__*/
    function () {
      function ItsasecrettoeverybodyComponent() {
        _classCallCheck(this, ItsasecrettoeverybodyComponent);
      }

      _createClass(ItsasecrettoeverybodyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItsasecrettoeverybodyComponent;
    }();

    ItsasecrettoeverybodyComponent.ɵfac = function ItsasecrettoeverybodyComponent_Factory(t) {
      return new (t || ItsasecrettoeverybodyComponent)();
    };

    ItsasecrettoeverybodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItsasecrettoeverybodyComponent,
      selectors: [["app-itsasecrettoeverybody"]],
      decls: 3,
      vars: 0,
      consts: [["src", "https://media.giphy.com/media/W8JIqASjSwtcA/giphy.gif"], [2, "position", "fixed", "bottom", "0", "right", "0"], ["src", "../../assets/images/frame1.png", 2, "width", "10px", "height", "10px"]],
      template: function ItsasecrettoeverybodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItsasecrettoeverybodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-itsasecrettoeverybody',
          templateUrl: './itsasecrettoeverybody.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/nothingtoseehere/nothingtoseehere.component.ts": function srcAppComponentsNothingtoseehereNothingtoseehereComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NothingtoseehereComponent", function () {
      return NothingtoseehereComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NothingtoseehereComponent =
    /*#__PURE__*/
    function () {
      function NothingtoseehereComponent() {
        _classCallCheck(this, NothingtoseehereComponent);
      }

      _createClass(NothingtoseehereComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NothingtoseehereComponent;
    }();

    NothingtoseehereComponent.ɵfac = function NothingtoseehereComponent_Factory(t) {
      return new (t || NothingtoseehereComponent)();
    };

    NothingtoseehereComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NothingtoseehereComponent,
      selectors: [["app-nothingtoseehere"]],
      decls: 3,
      vars: 0,
      consts: [[2, "position", "relative", "display", "block"], ["src", "../../assets/images/endframe.png", 2, "width", "500px", "height", "500px"], ["src", "../../assets/images/test.png", 2, "position", "absolute", "top", "211px", "left", "208px", "width", "5px", "height", "5px"]],
      template: function NothingtoseehereComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NothingtoseehereComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nothingtoseehere',
          templateUrl: './nothingtoseehere.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/rainbow/rainbow.component.ts": function srcAppComponentsRainbowRainbowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RainbowComponent", function () {
      return RainbowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RainbowComponent =
    /*#__PURE__*/
    function () {
      function RainbowComponent() {
        _classCallCheck(this, RainbowComponent);
      }

      _createClass(RainbowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RainbowComponent;
    }();

    RainbowComponent.ɵfac = function RainbowComponent_Factory(t) {
      return new (t || RainbowComponent)();
    };

    RainbowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RainbowComponent,
      selectors: [["app-rainbow"]],
      decls: 3,
      vars: 0,
      consts: [["src", "https://media.giphy.com/media/du3snt7wxe2GrhY6En/giphy.gif"]],
      template: function RainbowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "i mean i guess i owe you some bravo points or something.. pm me this page and let me know. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RainbowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rainbow',
          templateUrl: './rainbow.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/welcome/welcome.component.ts": function srcAppComponentsWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomeComponent =
    /*#__PURE__*/
    function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)();
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 1,
      vars: 0,
      consts: [["src", "https://media.giphy.com/media/KD2WeGZT39WwOUbh9f/giphy.gif"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\github\qr-scavenger-hunt\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map