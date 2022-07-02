(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["internal-management-internal-management-module"],{

/***/ "./src/app/pages/internal-management/internal-management-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/internal-management/internal-management-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InternalManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalManagementRoutingModule", function() { return InternalManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'office-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | office-profile-office-profile-module */ "office-profile-office-profile-module").then(__webpack_require__.bind(null, /*! ./office-profile/office-profile.module */ "./src/app/pages/internal-management/office-profile/office-profile.module.ts")).then(m => m.OfficeProfileModule),
        data: { breadcrumb: 'OFFICE-PROFILE' }
    }
];
class InternalManagementRoutingModule {
}
InternalManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InternalManagementRoutingModule });
InternalManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InternalManagementRoutingModule_Factory(t) { return new (t || InternalManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InternalManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/internal-management/internal-management.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/internal-management/internal-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: InternalManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalManagementComponent", function() { return InternalManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class InternalManagementComponent {
}
InternalManagementComponent.ɵfac = function InternalManagementComponent_Factory(t) { return new (t || InternalManagementComponent)(); };
InternalManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InternalManagementComponent, selectors: [["ngx-internal-management"]], decls: 1, vars: 0, template: function InternalManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-internal-management',
                template: `<router-outlet></router-outlet>`
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/internal-management/internal-management.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/internal-management/internal-management.module.ts ***!
  \*************************************************************************/
/*! exports provided: InternalManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalManagementModule", function() { return InternalManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _internal_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal-management-routing.module */ "./src/app/pages/internal-management/internal-management-routing.module.ts");
/* harmony import */ var _internal_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal-management.component */ "./src/app/pages/internal-management/internal-management.component.ts");





class InternalManagementModule {
}
InternalManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InternalManagementModule });
InternalManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InternalManagementModule_Factory(t) { return new (t || InternalManagementModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _internal_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["InternalManagementRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InternalManagementModule, { declarations: [_internal_management_component__WEBPACK_IMPORTED_MODULE_3__["InternalManagementComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _internal_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["InternalManagementRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_internal_management_component__WEBPACK_IMPORTED_MODULE_3__["InternalManagementComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _internal_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["InternalManagementRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=internal-management-internal-management-module-es2015.js.map