(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["performance-performance-module"], {
    /***/
    "./src/app/pages/performance/performance-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/performance/performance-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: PerformanceRoutingModule */

    /***/
    function srcAppPagesPerformancePerformanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceRoutingModule", function () {
        return PerformanceRoutingModule;
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
        path: 'employee-discipline',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | employee-discipline-employee-discipline-module */
          "employee-discipline-employee-discipline-module").then(__webpack_require__.bind(null,
          /*! ./employee-discipline/employee-discipline.module */
          "./src/app/pages/performance/employee-discipline/employee-discipline.module.ts")).then(function (m) {
            return m.EmployeeDisciplineModule;
          });
        },
        data: {
          breadcrumb: 'EMPLOYEE-DISCIPLINE'
        }
      }, {
        path: 'work-performance-evaluation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | work-performance-evaluation-work-performance-evaluation-module */
          "work-performance-evaluation-work-performance-evaluation-module").then(__webpack_require__.bind(null,
          /*! ./work-performance-evaluation/work-performance-evaluation.module */
          "./src/app/pages/performance/work-performance-evaluation/work-performance-evaluation.module.ts")).then(function (m) {
            return m.WorkPerformanceEvaluationModule;
          });
        },
        data: {
          breadcrumb: 'WORK-PERFORMANCE-EVALUATION'
        }
      }, {
        path: 'budget-utilization',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | budget-utilization-budget-utilization-module */
          "budget-utilization-budget-utilization-module").then(__webpack_require__.bind(null,
          /*! ./budget-utilization/budget-utilization.module */
          "./src/app/pages/performance/budget-utilization/budget-utilization.module.ts")).then(function (m) {
            return m.BudgetUtilizationModule;
          });
        },
        data: {
          breadcrumb: 'BUDGET-UTILIZATION'
        }
      }, {
        path: 'organizational-goals',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | organizational-goal-organizational-goal-module */
          "organizational-goal-organizational-goal-module").then(__webpack_require__.bind(null,
          /*! ./organizational-goal/organizational-goal.module */
          "./src/app/pages/performance/organizational-goal/organizational-goal.module.ts")).then(function (m) {
            return m.OrganizationalGoalModule;
          });
        },
        data: {
          breadcrumb: 'ORGANIZATIONAL-GOAL'
        }
      }, {
        path: 'hr-staffing-plan',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | hr-staffing-plan-hr-staffing-plan-module */
          "hr-staffing-plan-hr-staffing-plan-module").then(__webpack_require__.bind(null,
          /*! ./hr-staffing-plan/hr-staffing-plan.module */
          "./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan.module.ts")).then(function (m) {
            return m.HrStaffingPlanModule;
          });
        },
        data: {
          breadcrumb: 'HR-STAFFING-PLAN'
        }
      }, {
        path: 'complaints-center',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | complaints-center-complaints-center-module */
          "complaints-center-complaints-center-module").then(__webpack_require__.bind(null,
          /*! ./complaints-center/complaints-center.module */
          "./src/app/pages/performance/complaints-center/complaints-center.module.ts")).then(function (m) {
            return m.ComplaintsCenterModule;
          });
        },
        data: {
          breadcrumn: 'COMPLAINTS-CENTER'
        }
      }];

      var PerformanceRoutingModule = function PerformanceRoutingModule() {
        _classCallCheck(this, PerformanceRoutingModule);
      };

      PerformanceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PerformanceRoutingModule
      });
      PerformanceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PerformanceRoutingModule_Factory(t) {
          return new (t || PerformanceRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PerformanceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerformanceRoutingModule, [{
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
    "./src/app/pages/performance/performance.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/performance/performance.component.ts ***!
      \************************************************************/

    /*! exports provided: PerformanceComponent */

    /***/
    function srcAppPagesPerformancePerformanceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceComponent", function () {
        return PerformanceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PerformanceComponent = function PerformanceComponent() {
        _classCallCheck(this, PerformanceComponent);
      };

      PerformanceComponent.ɵfac = function PerformanceComponent_Factory(t) {
        return new (t || PerformanceComponent)();
      };

      PerformanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PerformanceComponent,
        selectors: [["ngx-performance"]],
        decls: 1,
        vars: 0,
        template: function PerformanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerformanceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-performance',
            template: "<router-outlet></router-outlet>"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/performance/performance.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/performance/performance.module.ts ***!
      \*********************************************************/

    /*! exports provided: PerformanceModule */

    /***/
    function srcAppPagesPerformancePerformanceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceModule", function () {
        return PerformanceModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _performance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./performance-routing.module */
      "./src/app/pages/performance/performance-routing.module.ts");
      /* harmony import */


      var _performance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./performance.component */
      "./src/app/pages/performance/performance.component.ts");

      var PerformanceModule = function PerformanceModule() {
        _classCallCheck(this, PerformanceModule);
      };

      PerformanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PerformanceModule
      });
      PerformanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PerformanceModule_Factory(t) {
          return new (t || PerformanceModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _performance_routing_module__WEBPACK_IMPORTED_MODULE_2__["PerformanceRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PerformanceModule, {
          declarations: [_performance_component__WEBPACK_IMPORTED_MODULE_3__["PerformanceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _performance_routing_module__WEBPACK_IMPORTED_MODULE_2__["PerformanceRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerformanceModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_performance_component__WEBPACK_IMPORTED_MODULE_3__["PerformanceComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _performance_routing_module__WEBPACK_IMPORTED_MODULE_2__["PerformanceRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=performance-performance-module-es5.js.map