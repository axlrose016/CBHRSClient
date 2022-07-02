(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"], {
    /***/
    "./src/app/pages/setting/setting-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/setting/setting-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SettingRoutingModule */

    /***/
    function srcAppPagesSettingSettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function () {
        return SettingRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'users',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-users-module */
          "users-users-module").then(__webpack_require__.bind(null,
          /*! ./users/users.module */
          "./src/app/pages/setting/users/users.module.ts")).then(function (m) {
            return m.UsersModule;
          });
        },
        data: {
          breadcrumb: 'USERS'
        }
      }, {
        path: 'libraries',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | libraries-libraries-module */
          "libraries-libraries-module").then(__webpack_require__.bind(null,
          /*! ./libraries/libraries.module */
          "./src/app/pages/setting/libraries/libraries.module.ts")).then(function (m) {
            return m.LibrariesModule;
          });
        },
        data: {
          breadcrumb: 'LIBRARIES'
        }
      }];

      var SettingRoutingModule = function SettingRoutingModule() {
        _classCallCheck(this, SettingRoutingModule);
      };

      SettingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SettingRoutingModule
      });
      SettingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SettingRoutingModule_Factory(t) {
          return new (t || SettingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/setting/setting.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/setting/setting.component.ts ***!
      \****************************************************/

    /*! exports provided: SettingComponent */

    /***/
    function srcAppPagesSettingSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingComponent", function () {
        return SettingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var SettingComponent = function SettingComponent() {
        _classCallCheck(this, SettingComponent);
      };

      SettingComponent.ɵfac = function SettingComponent_Factory(t) {
        return new (t || SettingComponent)();
      };

      SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingComponent,
        selectors: [["ngx-setting"]],
        decls: 1,
        vars: 0,
        template: function SettingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-setting',
            template: "\n    <router-outlet></router-outlet>\n  "
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/setting/setting.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/setting/setting.module.ts ***!
      \*************************************************/

    /*! exports provided: SettingModule */

    /***/
    function srcAppPagesSettingSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingModule", function () {
        return SettingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _setting_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./setting-routing.module */
      "./src/app/pages/setting/setting-routing.module.ts");
      /* harmony import */


      var _setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./setting.component */
      "./src/app/pages/setting/setting.component.ts");
      /* harmony import */


      var app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/@theme/theme.module */
      "./src/app/@theme/theme.module.ts");

      var SettingModule = function SettingModule() {
        _classCallCheck(this, SettingModule);
      };

      SettingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SettingModule
      });
      SettingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SettingModule_Factory(t) {
          return new (t || SettingModule)();
        },
        imports: [[app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_1__["SettingRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingModule, {
          declarations: [_setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"]],
          imports: [app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_1__["SettingRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"]],
            imports: [app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_1__["SettingRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=setting-setting-module-es5.js.map