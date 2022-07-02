(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clearance-clearance-module"], {
    /***/
    "./src/app/pages/forms/clearance/clearance-entry/clearance-entry.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/pages/forms/clearance/clearance-entry/clearance-entry.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ClearanceEntryComponent */

    /***/
    function srcAppPagesFormsClearanceClearanceEntryClearanceEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClearanceEntryComponent", function () {
        return ClearanceEntryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/service/dialog.service */
      "./src/app/shared/service/dialog.service.ts");
      /* harmony import */


      var app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/service/formGlobalData.service */
      "./src/app/shared/service/formGlobalData.service.ts");
      /* harmony import */


      var app_shared_service_globalVariables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/service/globalVariables.service */
      "./src/app/shared/service/globalVariables.service.ts");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var guid_typescript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! guid-typescript */
      "./node_modules/guid-typescript/dist/guid.js");
      /* harmony import */


      var guid_typescript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _shared_component_app_crud_app_crud_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../shared/component/app-crud/app-crud.component */
      "./src/app/shared/component/app-crud/app-crud.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/component/app-loader/app-loader.component */
      "./src/app/shared/component/app-loader/app-loader.component.ts");

      function ClearanceEntryComponent_form_2_axl_app_loader_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "axl-app-loader");
        }
      }

      function ClearanceEntryComponent_form_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClearanceEntryComponent_form_2_axl_app_loader_2_Template, 1, 0, "axl-app-loader", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Clearance Form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I. Purpose ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Name of Employee:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClearanceEntryComponent_form_2_Template_input_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.openParticipantDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "TO: DEPARTMENT OF HEALTH - CVCHD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "I hereby apply for clearance from money, property and work-related accountabilities for:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Purpose:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-checkbox", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\xA0Transfer \xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-checkbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\xA0Retirement \xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-checkbox", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\xA0Resignation \xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-checkbox", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\xA0Leave ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-checkbox", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\xA0Other Mode of Separation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Please specify:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Effectivity/Inclusive Period:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Date of Application:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "nb-datepicker", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " II. Clearance From Work-Related Accountabilities ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "We hereby certify that this applicant is cleared of work-related accountabilities from this Unit/Office/Dept.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Immediate Supervisor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Division Head ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " III. Certification of no pending administrative case ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "mat-checkbox", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\xA0With Pending Administrative Case");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "mat-checkbox", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\xA0With OnGoing Investigation (no formal charge yet)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.ClearanceForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r0.showLoadingProgressBar$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.PDSForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbDatepicker", _r2);
        }
      }

      var ClearanceEntryComponent = /*#__PURE__*/function () {
        function ClearanceEntryComponent(gd, fb, frmglobaldataserve, route, router, dialogserve) {
          _classCallCheck(this, ClearanceEntryComponent);

          this.gd = gd;
          this.fb = fb;
          this.frmglobaldataserve = frmglobaldataserve;
          this.route = route;
          this.router = router;
          this.dialogserve = dialogserve;
          this.curRecordId = null;
          this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "Clearance/";
        }

        _createClass(ClearanceEntryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.gd.user_level.userLevelId == 3) {
              this.currUserId = localStorage.getItem('secI');
            } else {
              this.currUserId = "00000000-0000-0000-0000-000000000000";
            }

            this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
            this.frmglobaldataserve.setLoadingProgressBar(true);
            this.initData();
            this.frmglobaldataserve.setLoadingProgressBar(false);
          }
        }, {
          key: "initData",
          value: function initData() {
            this.curRecordId = this.route.snapshot.params['id'];

            if (this.curRecordId != "0") {
              this.getClearance();
            } else {
              this.buildClearanceForm();
              this.buildPDSForm();
            }
          }
        }, {
          key: "getClearance",
          value: function getClearance() {
            var _this = this;

            this.frmglobaldataserve.getRecord("Clearance/GetClearance/" + this.curRecordId).subscribe(function (data) {
              var clearanceData = data;

              _this.buildClearanceForm(clearanceData);

              _this.getPDS(clearanceData.personId);
            });
          }
        }, {
          key: "getPDS",
          value: function getPDS(id) {
            var _this2 = this;

            this.frmglobaldataserve.getRecord("Person/GetPDS/" + id).subscribe(function (data) {
              var pds = data;

              _this2.buildPDSForm(pds);
            });
          }
        }, {
          key: "buildClearanceForm",
          value: function buildClearanceForm(clearanceDetail) {
            this.ClearanceForm = this.fb.group({
              clearanceId: [clearanceDetail ? clearanceDetail.clearanceId : guid_typescript__WEBPACK_IMPORTED_MODULE_7__["Guid"].raw],
              dateOfApplication: [clearanceDetail ? clearanceDetail.dateOfApplication : ''],
              isTransfer: [clearanceDetail ? clearanceDetail.isTransfer : false],
              isRetirement: [clearanceDetail ? clearanceDetail.isRetirement : false],
              isResignation: [clearanceDetail ? clearanceDetail.isResignation : false],
              isLeave: [clearanceDetail ? clearanceDetail.isLeave : false],
              isOther: [clearanceDetail ? clearanceDetail.isOther : false],
              specifyOther: [clearanceDetail ? clearanceDetail.specifyOther : ''],
              effectivityInclusivePeriod: [clearanceDetail ? clearanceDetail.effectivityInclusivePeriod : ''],
              immediateSupervisor: [clearanceDetail ? clearanceDetail.immediateSupervisor : ''],
              divisionHead: [clearanceDetail ? clearanceDetail.divisionHead : ''],
              withPendingAdminCase: [clearanceDetail ? clearanceDetail.withPendingAdminCase : false],
              withOnGoingInvestigation: [clearanceDetail ? clearanceDetail.withOnGoingInvestigation : false],
              personId: [clearanceDetail ? clearanceDetail.personId : null]
            });
          }
        }, {
          key: "buildPDSForm",
          value: function buildPDSForm(pds) {
            this.PDSForm = this.fb.group({
              personId: [pds ? pds.personId : guid_typescript__WEBPACK_IMPORTED_MODULE_7__["Guid"].raw],
              fullName: [pds ? pds.firstName + " " + pds.lastName : '']
            });
          }
        }, {
          key: "eventHandler",
          value: function eventHandler(btnclick) {
            if (btnclick == "Save") {
              if (this.ClearanceForm.valid) this.saveRecord();
            } else if (btnclick == "Delete") {
              this.deleteRecord();
            }
          }
        }, {
          key: "saveRecord",
          value: function saveRecord() {
            var _this3 = this;

            this.frmglobaldataserve.updateRecord(this.ClearanceForm.value, "Clearance/PostClearance").subscribe(function (response) {
              console.log("Record Saved Successfully: " + response);

              _this3.router.navigateByUrl("pages/forms/clearance/" + response).then(function (x) {
                _this3.initData(), localStorage.setItem('secPI', response);

                _this3.frmglobaldataserve.openSnackBar();
              }, function (error) {
                console.log("Error Saving the Record: " + JSON.stringify(_this3.ClearanceForm.value));
              });
            });
          }
        }, {
          key: "deleteRecord",
          value: function deleteRecord() {
            var _this4 = this;

            this.frmglobaldataserve.updateRecord(this.ClearanceForm.value, "Clearance/PostClearance").subscribe(function (response) {
              console.log("Record Deleted Successfully: " + response);

              _this4.router.navigateByUrl("pages/forms/clearance/list");
            }, function (error) {
              console.log("Error Deleting the Record: " + JSON.stringify(_this4.ClearanceForm.value));
            });
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.dialogserve.selectedPDS$ != null) {
              debugger;
              this.PersonDetails = this.dialogserve.selectedPDS$;
              var selectedId = this.PersonDetails;
              this.ClearanceForm.patchValue({
                'personId': selectedId.personId
              });
              this.buildPDSForm(selectedId);
            }
          }
        }, {
          key: "openParticipantDialog",
          value: function openParticipantDialog() {
            this.dialogserve.openFormDialog('PersonProfile');
          }
        }]);

        return ClearanceEntryComponent;
      }();

      ClearanceEntryComponent.ɵfac = function ClearanceEntryComponent_Factory(t) {
        return new (t || ClearanceEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_globalVariables_service__WEBPACK_IMPORTED_MODULE_5__["GlobalVariablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]));
      };

      ClearanceEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClearanceEntryComponent,
        selectors: [["ngx-clearance-entry"]],
        decls: 3,
        vars: 1,
        consts: [[3, "appcrudbtnclick"], [1, "container"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [4, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group", 3, "formGroup"], ["formControlName", "fullName", "type", "text", "nbInput", "", "fullWidth", "", "placeholder", "..", 3, "click"], [1, "col-sm-10"], [1, "form-group"], ["formControlName", "isTransfer", 1, "example-margin"], ["formControlName", "isRetirement", 1, "example-margin"], ["formControlName", "isResignation", 1, "example-margin"], ["formControlName", "isLeave", 1, "example-margin"], ["formControlName", "isOther", 1, "example-margin"], ["formControlName", "specifyOther", "type", "text", "nbInput", "", "placeholder", ".."], ["formControlName", "effectivityInclusivePeriod", "type", "text", "nbInput", "", "fullWidth", "", "placeholder", ".."], ["dateTimePicker", ""], ["formControlName", "dateOfApplication", "nbInput", "", "fullWidth", "", "placeholder", "Date of Application", 3, "nbDatepicker"], ["formControlName", "immediateSupervisor", "type", "text", "nbInput", "", "fullWidth", "", "placeholder", ".."], ["formControlName", "divisionHead", "type", "text", "nbInput", "", "fullWidth", "", "placeholder", ".."], ["formControlName", "withPendingAdminCase", 1, "example-margin"], ["formControlName", "withOnGoingInvestigation", 1, "example-margin"]],
        template: function ClearanceEntryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "axl-app-crud", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appcrudbtnclick", function ClearanceEntryComponent_Template_axl_app_crud_appcrudbtnclick_0_listener($event) {
              return ctx.eventHandler($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClearanceEntryComponent_form_2_Template, 84, 6, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ClearanceForm);
          }
        },
        directives: [_shared_component_app_crud_app_crud_component__WEBPACK_IMPORTED_MODULE_8__["AppCrudComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDatepickerComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDatepickerDirective"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_12__["AppLoaderComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: ["nb-card-header[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: aliceblue;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: .5em;\n}\n\nth[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #1e90ff;\n  color: white;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybXMvY2xlYXJhbmNlL2NsZWFyYW5jZS1lbnRyeS9jbGVhcmFuY2UtZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUTtBQUNWOztBQU1BO0VBQ0Usa0JBQWlCO0FBSG5COztBQU1BO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXdCO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7QUFIckI7O0FBTUE7RUFBbUIseUJBQXlCO0FBRjVDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybXMvY2xlYXJhbmNlL2NsZWFyYW5jZS1lbnRyeS9jbGVhcmFuY2UtZW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlOyBcclxufVxyXG5cclxubmItY2FyZHtcclxuICBtYXJnaW46MDtcclxufVxyXG5cclxuLy8gaW5wdXQsbmItc2VsZWN0IHtcclxuLy8gICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuLy8gfVxyXG5cclxudGgsdGR7XHJcbiAgcGFkZGluZy1sZWZ0Oi41ZW07XHJcbn1cclxuXHJcbnRoIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzFlOTBmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG5cclxuXHJcbi8vIG5iLXRhYnNldCAgeyBvdmVyZmxvdy14OiBhdXRvOyBvdmVyZmxvdy15OiBoaWRkZW47IH1cclxuXHJcbi8vIDpob3N0IDo6bmctZGVlcCBuZ3gtdGFiMSwgOmhvc3QgOjpuZy1kZWVwIG5neC10YWIyIHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbi8vIH1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClearanceEntryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-clearance-entry',
            templateUrl: './clearance-entry.component.html',
            styleUrls: ['./clearance-entry.component.scss']
          }]
        }], function () {
          return [{
            type: app_shared_service_globalVariables_service__WEBPACK_IMPORTED_MODULE_5__["GlobalVariablesService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/forms/clearance/clearance-list/clearance-list.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/forms/clearance/clearance-list/clearance-list.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ClearanceListComponent */

    /***/
    function srcAppPagesFormsClearanceClearanceListClearanceListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClearanceListComponent", function () {
        return ClearanceListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/service/formGlobalData.service */
      "./src/app/shared/service/formGlobalData.service.ts");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _shared_component_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../shared/component/app-list/app-list.component */
      "./src/app/shared/component/app-list/app-list.component.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../shared/component/app-loader/app-loader.component */
      "./src/app/shared/component/app-loader/app-loader.component.ts");

      function ClearanceListComponent_axl_app_loader_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "axl-app-loader");
        }
      }

      function ClearanceListComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clearance ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClearanceListComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var erow_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](erow_r15.clearanceId);
        }
      }

      function ClearanceListComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClearanceListComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var erow_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", erow_r16.firstName, " ");
        }
      }

      function ClearanceListComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Middle Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClearanceListComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var erow_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](erow_r17.middleName);
        }
      }

      function ClearanceListComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClearanceListComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var erow_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](erow_r18.lastName);
        }
      }

      function ClearanceListComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date Of Application ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClearanceListComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var erow_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](erow_r19.dateOfApplication);
        }
      }

      function ClearanceListComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
        }
      }

      function ClearanceListComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClearanceListComponent_tr_34_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var row_r20 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.onUserRowSelect(row_r20.clearanceId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 15];
      };

      var ClearanceListComponent = /*#__PURE__*/function () {
        function ClearanceListComponent(router, frmglobaldataserve) {
          _classCallCheck(this, ClearanceListComponent);

          this.router = router;
          this.frmglobaldataserve = frmglobaldataserve;
          this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "Clearance/";
          this.displayedColumns = ['clearanceId', 'firstName', 'middleName', 'lastName', 'dateOfApplication'];
          this.gridDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
          this.clearanceList = [];
        }

        _createClass(ClearanceListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.refreshTheList();
          }
        }, {
          key: "eventHandler",
          value: function eventHandler(btnevent) {
            if (btnevent == "Refresh") {
              this.refreshTheList();
            } else if (btnevent == "Add") {
              this.router.navigateByUrl("pages/forms/clearance/" + 0);
            }
          }
        }, {
          key: "refreshTheList",
          value: function refreshTheList() {
            var _this5 = this;

            var urlstr = this.baseUrl + 'GetClearanceList/';
            this.frmglobaldataserve.setLoadingProgressBar(true);
            this.frmglobaldataserve.loadList(urlstr).subscribe(function (res) {
              _this5.clearanceList = res;
              _this5.gridDataSource.data = res;

              _this5.frmglobaldataserve.setLoadingProgressBar(false);
            }, function () {});
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.gridDataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "onUserRowSelect",
          value: function onUserRowSelect(id) {
            this.router.navigateByUrl("pages/forms/clearance/" + id);
          }
        }, {
          key: "matPaginator",
          set: function set(mp) {
            this.paginator = mp;
            this.gridDataSource.paginator = this.paginator;
          }
        }]);

        return ClearanceListComponent;
      }();

      ClearanceListComponent.ɵfac = function ClearanceListComponent_Factory(t) {
        return new (t || ClearanceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"]));
      };

      ClearanceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClearanceListComponent,
        selectors: [["ngx-clearance-list"]],
        viewQuery: function ClearanceListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matPaginator = _t.first);
          }
        },
        decls: 36,
        vars: 8,
        consts: [[3, "applistbtnclick"], [1, "container"], ["label", "List"], [4, "ngIf"], ["appearance", "standard", 2, "float", "right", "width", "100%"], ["matInput", "", "placeholder", "Search..", 3, "keyup"], ["input", ""], ["matSuffix", ""], ["mat-table", "", "matSout", "", 1, "mat-elevation-z8", 3, "dataSource"], ["table", ""], ["matColumnDef", "clearanceId"], ["mat-header-cell", "", "mat-sort-header", "", "style", "width: 230px;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstName"], ["matColumnDef", "middleName"], ["matColumnDef", "lastName"], ["matColumnDef", "dateOfApplication"], ["mat-header-cell", "", "mat-sort-header", "", "srtle", "width: 230px;", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButton", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 2, "width", "230px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "srtle", "width: 230px;"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
        template: function ClearanceListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "axl-app-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("applistbtnclick", function ClearanceListComponent_Template_axl_app_list_applistbtnclick_0_listener($event) {
              return ctx.eventHandler($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Clearance List ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClearanceListComponent_axl_app_loader_7_Template, 1, 0, "axl-app-loader", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ClearanceListComponent_Template_input_keyup_12_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClearanceListComponent_th_19_Template, 2, 0, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClearanceListComponent_td_20_Template, 2, 1, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ClearanceListComponent_th_22_Template, 2, 0, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ClearanceListComponent_td_23_Template, 2, 1, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ClearanceListComponent_th_25_Template, 2, 0, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ClearanceListComponent_td_26_Template, 2, 1, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ClearanceListComponent_th_28_Template, 2, 0, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ClearanceListComponent_td_29_Template, 2, 1, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ClearanceListComponent_th_31_Template, 2, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ClearanceListComponent_td_32_Template, 2, 1, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ClearanceListComponent_tr_33_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ClearanceListComponent_tr_34_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-paginator", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.showLoadingProgressBar$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.gridDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
          }
        },
        directives: [_shared_component_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_6__["AppListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_13__["AppLoaderComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: ["input[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%] {\n  margin-top: .5rem;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: .5em;\n}\n\nth[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #1e90ff;\n  color: white;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nnb-card-header[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: aliceblue;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  \n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.button1[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #4CAF50;\n}\n\n.button1[_ngcontent-%COMP%]:hover {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.processBar[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybXMvY2xlYXJhbmNlL2NsZWFyYW5jZS1saXN0L2NsZWFyYW5jZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0FBQ3JCOztBQUVFO0VBQ0Usa0JBQWlCO0FBQ3JCOztBQUVFO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXdCO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7QUFDdkI7O0FBRUU7RUFBbUIseUJBQXlCO0FBRTlDOztBQURFO0VBQVMsZUFBYztBQUt6Qjs7QUFGRTtFQUNJLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFLdEI7O0FBRkU7RUFDSSx5QkFBeUI7RUFBRSxVQUFBO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7QUFNckI7O0FBSEk7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHlCQUF5QjtBQU0vQjs7QUFISTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBTWxCOztBQUhJO0VBQ0UsbUJBQW1CO0FBTXpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybXMvY2xlYXJhbmNlL2NsZWFyYW5jZS1saXN0L2NsZWFyYW5jZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsbmItc2VsZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gIH1cclxuICBcclxuICB0aCx0ZHtcclxuICAgIHBhZGRpbmctbGVmdDouNWVtO1xyXG4gIH1cclxuICBcclxuICB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzFlOTBmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICB0cjpob3ZlcntjdXJzb3I6cG9pbnRlcjt9XHJcbiAgXHJcbiAgXHJcbiAgbmItY2FyZC1oZWFkZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ1dHRvbjEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idXR0b24xOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvY2Vzc0JhcntcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClearanceListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-clearance-list',
            templateUrl: './clearance-list.component.html',
            styleUrls: ['./clearance-list.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"]
          }];
        }, {
          matPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/forms/clearance/clearance-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/forms/clearance/clearance-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ClearanceRoutingModule */

    /***/
    function srcAppPagesFormsClearanceClearanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClearanceRoutingModule", function () {
        return ClearanceRoutingModule;
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


      var app_shared_service_authGuard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/service/authGuard.service */
      "./src/app/shared/service/authGuard.service.ts");
      /* harmony import */


      var _clearance_list_clearance_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./clearance-list/clearance-list.component */
      "./src/app/pages/forms/clearance/clearance-list/clearance-list.component.ts");
      /* harmony import */


      var _clearance_entry_clearance_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./clearance-entry/clearance-entry.component */
      "./src/app/pages/forms/clearance/clearance-entry/clearance-entry.component.ts");

      var routes = [{
        data: {
          module: 'Clearance-List'
        },
        canActivate: [app_shared_service_authGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        path: 'list',
        component: _clearance_list_clearance_list_component__WEBPACK_IMPORTED_MODULE_3__["ClearanceListComponent"]
      }, {
        data: {
          module: 'Clearance-Entry'
        },
        canActivate: [app_shared_service_authGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        path: ':id',
        component: _clearance_entry_clearance_entry_component__WEBPACK_IMPORTED_MODULE_4__["ClearanceEntryComponent"],
        pathMatch: 'full'
      }];

      var ClearanceRoutingModule = function ClearanceRoutingModule() {
        _classCallCheck(this, ClearanceRoutingModule);
      };

      ClearanceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ClearanceRoutingModule
      });
      ClearanceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ClearanceRoutingModule_Factory(t) {
          return new (t || ClearanceRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClearanceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClearanceRoutingModule, [{
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
    "./src/app/pages/forms/clearance/clearance.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/forms/clearance/clearance.module.ts ***!
      \***********************************************************/

    /*! exports provided: ClearanceModule */

    /***/
    function srcAppPagesFormsClearanceClearanceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClearanceModule", function () {
        return ClearanceModule;
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


      var _clearance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./clearance-routing.module */
      "./src/app/pages/forms/clearance/clearance-routing.module.ts");
      /* harmony import */


      var _clearance_list_clearance_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./clearance-list/clearance-list.component */
      "./src/app/pages/forms/clearance/clearance-list/clearance-list.component.ts");
      /* harmony import */


      var _clearance_entry_clearance_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./clearance-entry/clearance-entry.component */
      "./src/app/pages/forms/clearance/clearance-entry/clearance-entry.component.ts");
      /* harmony import */


      var app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/component/shared-component.module */
      "./src/app/shared/component/shared-component.module.ts");
      /* harmony import */


      var app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/shared-material/shared-material.module */
      "./src/app/shared/shared-material/shared-material.module.ts");

      var ClearanceModule = function ClearanceModule() {
        _classCallCheck(this, ClearanceModule);
      };

      ClearanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ClearanceModule
      });
      ClearanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ClearanceModule_Factory(t) {
          return new (t || ClearanceModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clearance_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClearanceRoutingModule"], app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"], app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClearanceModule, {
          declarations: [_clearance_entry_clearance_entry_component__WEBPACK_IMPORTED_MODULE_4__["ClearanceEntryComponent"], _clearance_list_clearance_list_component__WEBPACK_IMPORTED_MODULE_3__["ClearanceListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clearance_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClearanceRoutingModule"], app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"], app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClearanceModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_clearance_entry_clearance_entry_component__WEBPACK_IMPORTED_MODULE_4__["ClearanceEntryComponent"], _clearance_list_clearance_list_component__WEBPACK_IMPORTED_MODULE_3__["ClearanceListComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clearance_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClearanceRoutingModule"], app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"], app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=clearance-clearance-module-es5.js.map