(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["learning_and_development-learning-and-development-module"], {
    /***/
    "./src/app/pages/learning_and_development/learning-and-development-routing.module.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/learning_and_development/learning-and-development-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LearningAndDevelopmentRoutingModule */

    /***/
    function srcAppPagesLearning_and_developmentLearningAndDevelopmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearningAndDevelopmentRoutingModule", function () {
        return LearningAndDevelopmentRoutingModule;
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
        path: 'ldna',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ldna-ldna-module */
          "ldna-ldna-module").then(__webpack_require__.bind(null,
          /*! ./ldna/ldna.module */
          "./src/app/pages/learning_and_development/ldna/ldna.module.ts")).then(function (m) {
            return m.LdnaModule;
          });
        },
        data: {
          breadcrumb: 'LDNA'
        }
      }, {
        path: 'learning-and-evaluation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | learning_and_evaluation-learning-and-evaluation-module */
          "learning_and_evaluation-learning-and-evaluation-module").then(__webpack_require__.bind(null,
          /*! ./learning_and_evaluation/learning-and-evaluation.module */
          "./src/app/pages/learning_and_development/learning_and_evaluation/learning-and-evaluation.module.ts")).then(function (m) {
            return m.LearningAndEvaluationModule;
          });
        },
        data: {
          breadcrumb: 'LEARNING-AND-DEVELOPMENT'
        }
      }, {
        path: 'training-evaluation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | training_evaluation-training-evaluation-module */
          "training_evaluation-training-evaluation-module").then(__webpack_require__.bind(null,
          /*! ./training_evaluation/training-evaluation.module */
          "./src/app/pages/learning_and_development/training_evaluation/training-evaluation.module.ts")).then(function (m) {
            return m.TrainingEvaluationModule;
          });
        },
        data: {
          breadcrumb: 'TRAINING-EVALUATION'
        }
      }, {
        path: 'wap',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | wap-wap-module */
          "wap-wap-module").then(__webpack_require__.bind(null,
          /*! ./wap/wap.module */
          "./src/app/pages/learning_and_development/wap/wap.module.ts")).then(function (m) {
            return m.WapModule;
          });
        },
        data: {
          breadcrumb: 'WAP'
        }
      }, {
        path: 'performance-rating',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | performance-rating-performance-rating-module */
          "performance-rating-performance-rating-module").then(__webpack_require__.bind(null,
          /*! ./performance-rating/performance-rating.module */
          "./src/app/pages/learning_and_development/performance-rating/performance-rating.module.ts")).then(function (m) {
            return m.PerformanceRatingModule;
          });
        },
        data: {
          breadcrumb: 'PERFORMANCE-RATING'
        }
      } // {
      //   path:'workplace-application-plan',
      //   loadChildren:() => import('./workplace-application-plan/workplace-application-plan.module').then(m => m.WorkplaceApplicationPlanModule),
      //   data:{breadcrumb:'WORKPLACE-APPLICATION-PLAN'}
      // }
      ];

      var LearningAndDevelopmentRoutingModule = function LearningAndDevelopmentRoutingModule() {
        _classCallCheck(this, LearningAndDevelopmentRoutingModule);
      };

      LearningAndDevelopmentRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: LearningAndDevelopmentRoutingModule
      });
      LearningAndDevelopmentRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function LearningAndDevelopmentRoutingModule_Factory(t) {
          return new (t || LearningAndDevelopmentRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LearningAndDevelopmentRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LearningAndDevelopmentRoutingModule, [{
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
    "./src/app/pages/learning_and_development/learning-and-development.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/learning_and_development/learning-and-development.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: LearningAndDevelopmentComponent */

    /***/
    function srcAppPagesLearning_and_developmentLearningAndDevelopmentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearningAndDevelopmentComponent", function () {
        return LearningAndDevelopmentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var LearningAndDevelopmentComponent = function LearningAndDevelopmentComponent() {
        _classCallCheck(this, LearningAndDevelopmentComponent);
      };

      LearningAndDevelopmentComponent.??fac = function LearningAndDevelopmentComponent_Factory(t) {
        return new (t || LearningAndDevelopmentComponent)();
      };

      LearningAndDevelopmentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LearningAndDevelopmentComponent,
        selectors: [["ngx-learning-and-development"]],
        decls: 1,
        vars: 0,
        template: function LearningAndDevelopmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LearningAndDevelopmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-learning-and-development',
            template: "<router-outlet></router-outlet>"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/learning_and_development/learning-and-development.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/learning_and_development/learning-and-development.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: LearningAndDevelopmentModule */

    /***/
    function srcAppPagesLearning_and_developmentLearningAndDevelopmentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearningAndDevelopmentModule", function () {
        return LearningAndDevelopmentModule;
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


      var _learning_and_development_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./learning-and-development-routing.module */
      "./src/app/pages/learning_and_development/learning-and-development-routing.module.ts");
      /* harmony import */


      var _learning_and_development_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./learning-and-development.component */
      "./src/app/pages/learning_and_development/learning-and-development.component.ts");

      var LearningAndDevelopmentModule = function LearningAndDevelopmentModule() {
        _classCallCheck(this, LearningAndDevelopmentModule);
      };

      LearningAndDevelopmentModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: LearningAndDevelopmentModule
      });
      LearningAndDevelopmentModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function LearningAndDevelopmentModule_Factory(t) {
          return new (t || LearningAndDevelopmentModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _learning_and_development_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningAndDevelopmentRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LearningAndDevelopmentModule, {
          declarations: [_learning_and_development_component__WEBPACK_IMPORTED_MODULE_3__["LearningAndDevelopmentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _learning_and_development_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningAndDevelopmentRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LearningAndDevelopmentModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _learning_and_development_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningAndDevelopmentRoutingModule"]],
            declarations: [_learning_and_development_component__WEBPACK_IMPORTED_MODULE_3__["LearningAndDevelopmentComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=learning_and_development-learning-and-development-module-es5.js.map