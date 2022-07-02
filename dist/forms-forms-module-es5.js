(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"], {
    /***/
    "./src/app/pages/forms/forms-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/forms/forms-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: FormsRoutingModule */

    /***/
    function srcAppPagesFormsFormsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function () {
        return FormsRoutingModule;
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
        path: 'pds',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pds-pds-module */
          "pds-pds-module").then(__webpack_require__.bind(null,
          /*! ./pds/pds.module */
          "./src/app/pages/forms/pds/pds.module.ts")).then(function (m) {
            return m.PdsModule;
          });
        },
        data: {
          breadcrumb: 'PDS'
        }
      }, {
        path: 'clearance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | clearance-clearance-module */
          "clearance-clearance-module").then(__webpack_require__.bind(null,
          /*! ./clearance/clearance.module */
          "./src/app/pages/forms/clearance/clearance.module.ts")).then(function (m) {
            return m.ClearanceModule;
          });
        },
        data: {
          breadcrumb: 'CLEARANCE'
        }
      }, {
        path: 'pes11',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pes11-pes11-module */
          "pes11-pes11-module").then(__webpack_require__.bind(null,
          /*! ./pes11/pes11.module */
          "./src/app/pages/forms/pes11/pes11.module.ts")).then(function (m) {
            return m.Pes11Module;
          });
        },
        data: {
          breadcrumb: 'PES11'
        }
      }];

      var FormsRoutingModule = function FormsRoutingModule() {
        _classCallCheck(this, FormsRoutingModule);
      };

      FormsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FormsRoutingModule
      });
      FormsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FormsRoutingModule_Factory(t) {
          return new (t || FormsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsRoutingModule, [{
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
    "./src/app/pages/forms/forms.component.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/forms/forms.component.ts ***!
      \************************************************/

    /*! exports provided: FormsComponent */

    /***/
    function srcAppPagesFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
        return FormsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var FormsComponent = function FormsComponent() {
        _classCallCheck(this, FormsComponent);
      };

      FormsComponent.ɵfac = function FormsComponent_Factory(t) {
        return new (t || FormsComponent)();
      };

      FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormsComponent,
        selectors: [["ngx-form-elements"]],
        decls: 1,
        vars: 0,
        template: function FormsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-form-elements',
            template: "\n    <router-outlet></router-outlet>\n  "
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/forms/forms.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/forms/forms.module.ts ***!
      \*********************************************/

    /*! exports provided: FormsModule */

    /***/
    function srcAppPagesFormsFormsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
        return FormsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      "./src/app/@theme/theme.module.ts");
      /* harmony import */


      var _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forms-routing.module */
      "./src/app/pages/forms/forms-routing.module.ts");
      /* harmony import */


      var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forms.component */
      "./src/app/pages/forms/forms.component.ts");

      var FormsModule = function FormsModule() {
        _classCallCheck(this, FormsModule);
      };

      FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FormsModule
      });
      FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FormsModule_Factory(t) {
          return new (t || FormsModule)();
        },
        imports: [[_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsModule, {
          declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"]],
          imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"]],
            declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=forms-forms-module-es5.js.map