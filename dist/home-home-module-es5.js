(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./src/app/pages/home/home-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
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


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "./src/app/pages/home/homepage/homepage.component.ts");

      var routes = [{
        path: 'content',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
      }];

      var HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      HomeRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function HomeRoutingModule_Factory(t) {
          return new (t || HomeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeRoutingModule, [{
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
    "./src/app/pages/home/home.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomeModule */

    /***/
    function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/home/home-routing.module.ts");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "./src/app/pages/home/homepage/homepage.component.ts");
      /* harmony import */


      var app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/shared-material/shared-material.module */
      "./src/app/shared/shared-material/shared-material.module.ts");
      /* harmony import */


      var app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/component/shared-component.module */
      "./src/app/shared/component/shared-component.module.ts");
      /* harmony import */


      var _charts_charts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../charts/charts.module */
      "./src/app/pages/charts/charts.module.ts");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: HomeModule
      });
      HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"], app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["SharedMaterialModule"], _charts_charts_module__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HomeModule, {
          declarations: [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"], app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["SharedMaterialModule"], _charts_charts_module__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"], app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["SharedMaterialModule"], _charts_charts_module__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/home/homepage/homepage.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/home/homepage/homepage.component.ts ***!
      \***********************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function srcAppPagesHomeHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _charts_echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../charts/echarts/echarts-pie.component */
      "./src/app/pages/charts/echarts/echarts-pie.component.ts");
      /* harmony import */


      var _charts_echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../charts/echarts/echarts-bar.component */
      "./src/app/pages/charts/echarts/echarts-bar.component.ts");
      /* harmony import */


      var _charts_echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../charts/echarts/echarts-line.component */
      "./src/app/pages/charts/echarts/echarts-line.component.ts");
      /* harmony import */


      var _charts_echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../charts/echarts/echarts-multiple-xaxis.component */
      "./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts");
      /* harmony import */


      var _charts_echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../charts/echarts/echarts-area-stack.component */
      "./src/app/pages/charts/echarts/echarts-area-stack.component.ts");
      /* harmony import */


      var _charts_echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../charts/echarts/echarts-bar-animation.component */
      "./src/app/pages/charts/echarts/echarts-bar-animation.component.ts");
      /* harmony import */


      var _charts_echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../charts/echarts/echarts-radar.component */
      "./src/app/pages/charts/echarts/echarts-radar.component.ts");

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent() {
          _classCallCheck(this, HomepageComponent);

          this.chartData = [];
          this.chartLegend = [];
        }

        _createClass(HomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chartLegend = ['Male', 'Female', 'LGBTQ'];
            this.chartData = [{
              value: 100,
              name: 'Male'
            }, {
              value: 200,
              name: 'Female'
            }, {
              value: 90,
              name: 'LGBTQ'
            }];
          }
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.??fac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)();
      };

      HomepageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomepageComponent,
        selectors: [["ngx-homepage"]],
        decls: 43,
        vars: 2,
        consts: [[1, "row"], [1, "col-lg-6"], [3, "chartLegend", "chartData"]],
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Number of Male/Female Worker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "ngx-echarts-pie", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Number of Person resigned per year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "ngx-echarts-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Number of Hired Male/Female from the last 9 months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "ngx-echarts-line");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "2019 and 2020 Harassment Cases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "ngx-echarts-multiple-xaxis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Area Stack");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "ngx-echarts-area-stack");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Bar Animation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "ngx-echarts-bar-animation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Radar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "ngx-echarts-radar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartLegend", ctx.chartLegend)("chartData", ctx.chartData);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _charts_echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_2__["EchartsPieComponent"], _charts_echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_3__["EchartsBarComponent"], _charts_echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_4__["EchartsLineComponent"], _charts_echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_5__["EchartsMultipleXaxisComponent"], _charts_echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_6__["EchartsAreaStackComponent"], _charts_echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_7__["EchartsBarAnimationComponent"], _charts_echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_8__["EchartsRadarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomepageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map