(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recruitment-recruitment-module"],{

/***/ "./src/app/pages/recruitment/recruitment-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recruitment/recruitment-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RecruitmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentRoutingModule", function() { return RecruitmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    // {
    //   path:'jobs',
    //   loadChildren:()=> import('./jobs/jobs.module').then(m => m.JobsModule),
    //   data:{breadcrumb:'JOBS'}
    // },
    {
        path: 'appointment-and-compensation',
        loadChildren: () => __webpack_require__.e(/*! import() | appointment-and-compensation-appointment-and-compensation-module */ "appointment-and-compensation-appointment-and-compensation-module").then(__webpack_require__.bind(null, /*! ./appointment-and-compensation/appointment-and-compensation.module */ "./src/app/pages/recruitment/appointment-and-compensation/appointment-and-compensation.module.ts")).then(m => m.AppointmentAndCompensationModule),
        data: { breadcrumb: 'APPOINTMENT_AND_COMPENSATION' }
    },
    {
        path: 'job-classification',
        loadChildren: () => __webpack_require__.e(/*! import() | job-classification-job-classification-module */ "job-classification-job-classification-module").then(__webpack_require__.bind(null, /*! ./job-classification/job-classification.module */ "./src/app/pages/recruitment/job-classification/job-classification.module.ts")).then(m => m.JobClassificationModule),
        data: { breadcrumb: 'JOB-CLASSIFICATION' }
    }
];
class RecruitmentRoutingModule {
}
RecruitmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecruitmentRoutingModule });
RecruitmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecruitmentRoutingModule_Factory(t) { return new (t || RecruitmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecruitmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecruitmentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/recruitment/recruitment.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/recruitment/recruitment.component.ts ***!
  \************************************************************/
/*! exports provided: RecruitmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentComponent", function() { return RecruitmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class RecruitmentComponent {
}
RecruitmentComponent.ɵfac = function RecruitmentComponent_Factory(t) { return new (t || RecruitmentComponent)(); };
RecruitmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecruitmentComponent, selectors: [["ngx-recruitment"]], decls: 1, vars: 0, template: function RecruitmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecruitmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-recruitment',
                template: `
    <router-outlet></router-outlet>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/recruitment/recruitment.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/recruitment/recruitment.module.ts ***!
  \*********************************************************/
/*! exports provided: RecruitmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentModule", function() { return RecruitmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _recruitment_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recruitment-routing.module */ "./src/app/pages/recruitment/recruitment-routing.module.ts");
/* harmony import */ var app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _recruitment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recruitment.component */ "./src/app/pages/recruitment/recruitment.component.ts");





class RecruitmentModule {
}
RecruitmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecruitmentModule });
RecruitmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecruitmentModule_Factory(t) { return new (t || RecruitmentModule)(); }, imports: [[
            app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
            _recruitment_routing_module__WEBPACK_IMPORTED_MODULE_1__["RecruitmentRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecruitmentModule, { declarations: [_recruitment_component__WEBPACK_IMPORTED_MODULE_3__["RecruitmentComponent"]], imports: [app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
        _recruitment_routing_module__WEBPACK_IMPORTED_MODULE_1__["RecruitmentRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecruitmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                    _recruitment_routing_module__WEBPACK_IMPORTED_MODULE_1__["RecruitmentRoutingModule"]
                ],
                declarations: [
                    _recruitment_component__WEBPACK_IMPORTED_MODULE_3__["RecruitmentComponent"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=recruitment-recruitment-module-es2015.js.map