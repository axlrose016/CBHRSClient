(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["libraries-libraries-module"],{

/***/ "./src/app/pages/setting/libraries/libraries-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/setting/libraries/libraries-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LibrariesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrariesRoutingModule", function() { return LibrariesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'user-levels',
        loadChildren: () => __webpack_require__.e(/*! import() | user-levels-user-levels-module */ "user-levels-user-levels-module").then(__webpack_require__.bind(null, /*! ./user-levels/user-levels.module */ "./src/app/pages/setting/libraries/user-levels/user-levels.module.ts")).then(m => m.UserLevelsModule),
        data: { breadcrumb: 'USER-LEVELS' }
    },
    {
        path: 'request-types',
        loadChildren: () => __webpack_require__.e(/*! import() | request-types-request-type-module */ "request-types-request-type-module").then(__webpack_require__.bind(null, /*! ./request-types/request-type.module */ "./src/app/pages/setting/libraries/request-types/request-type.module.ts")).then(m => m.RequestTypeModule),
        data: { breadcrumb: 'REQUEST-TYPES' }
    },
    {
        path: 'departments',
        loadChildren: () => __webpack_require__.e(/*! import() | departments-departments-module */ "departments-departments-module").then(__webpack_require__.bind(null, /*! ./departments/departments.module */ "./src/app/pages/setting/libraries/departments/departments.module.ts")).then(m => m.DepartmentsModule),
        data: { breadcrumb: 'DEPARTMENTS' }
    },
    {
        path: 'job-categories',
        loadChildren: () => __webpack_require__.e(/*! import() | job-categories-job-categories-module */ "job-categories-job-categories-module").then(__webpack_require__.bind(null, /*! ./job-categories/job-categories.module */ "./src/app/pages/setting/libraries/job-categories/job-categories.module.ts")).then(m => m.JobCategoriesModule),
        data: { breadcrumb: 'JOB-CATEGORIES' }
    },
    {
        path: 'core-competencies',
        loadChildren: () => __webpack_require__.e(/*! import() | core-competencies-core-competencies-module */ "core-competencies-core-competencies-module").then(__webpack_require__.bind(null, /*! ./core-competencies/core-competencies.module */ "./src/app/pages/setting/libraries/core-competencies/core-competencies.module.ts")).then(m => m.CoreCompetenciesModule),
        data: { breadcrumb: 'CORE-COMPETENCIES' }
    },
    {
        path: 'competency-categories',
        loadChildren: () => __webpack_require__.e(/*! import() | competency-categories-competency-categories-module */ "competency-categories-competency-categories-module").then(__webpack_require__.bind(null, /*! ./competency-categories/competency-categories.module */ "./src/app/pages/setting/libraries/competency-categories/competency-categories.module.ts")).then(m => m.CompetencyCategoriesModule),
        data: { breadcrumb: 'COMPETENCY-CATEGORIES' }
    }
];
class LibrariesRoutingModule {
}
LibrariesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LibrariesRoutingModule });
LibrariesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LibrariesRoutingModule_Factory(t) { return new (t || LibrariesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LibrariesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibrariesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/setting/libraries/libraries.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/setting/libraries/libraries.component.ts ***!
  \****************************************************************/
/*! exports provided: LibrariesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrariesComponent", function() { return LibrariesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LibrariesComponent {
}
LibrariesComponent.ɵfac = function LibrariesComponent_Factory(t) { return new (t || LibrariesComponent)(); };
LibrariesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LibrariesComponent, selectors: [["ngx-libraries"]], decls: 1, vars: 0, template: function LibrariesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibrariesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-libraries',
                template: `
    <router-outlet></router-outlet>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/setting/libraries/libraries.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/setting/libraries/libraries.module.ts ***!
  \*************************************************************/
/*! exports provided: LibrariesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrariesModule", function() { return LibrariesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _libraries_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libraries-routing.module */ "./src/app/pages/setting/libraries/libraries-routing.module.ts");
/* harmony import */ var app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _libraries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libraries.component */ "./src/app/pages/setting/libraries/libraries.component.ts");





class LibrariesModule {
}
LibrariesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LibrariesModule });
LibrariesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LibrariesModule_Factory(t) { return new (t || LibrariesModule)(); }, imports: [[
            app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
            _libraries_routing_module__WEBPACK_IMPORTED_MODULE_1__["LibrariesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LibrariesModule, { declarations: [_libraries_component__WEBPACK_IMPORTED_MODULE_3__["LibrariesComponent"]], imports: [app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
        _libraries_routing_module__WEBPACK_IMPORTED_MODULE_1__["LibrariesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibrariesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_libraries_component__WEBPACK_IMPORTED_MODULE_3__["LibrariesComponent"]],
                imports: [
                    app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                    _libraries_routing_module__WEBPACK_IMPORTED_MODULE_1__["LibrariesRoutingModule"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=libraries-libraries-module-es2015.js.map