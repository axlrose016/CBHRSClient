(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hr-staffing-plan-hr-staffing-plan-module"],{

/***/ "./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-entry/hr-staffing-plan-entry.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-entry/hr-staffing-plan-entry.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: HrStaffingPlanEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrStaffingPlanEntryComponent", function() { return HrStaffingPlanEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/service/dialog.service */ "./src/app/shared/service/dialog.service.ts");
/* harmony import */ var app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/service/formGlobalData.service */ "./src/app/shared/service/formGlobalData.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_component_app_crud_app_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/component/app-crud/app-crud.component */ "./src/app/shared/component/app-crud/app-crud.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/component/app-loader/app-loader.component */ "./src/app/shared/component/app-loader/app-loader.component.ts");















function HrStaffingPlanEntryComponent_form_2_axl_app_loader_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "axl-app-loader");
} }
function HrStaffingPlanEntryComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HrStaffingPlanEntryComponent_form_2_axl_app_loader_2_Template, 1, 0, "axl-app-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " HR Staffing Plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Existing nos. of personnel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " For Job Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " For Plantilla ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Nos. of filled position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " For Job Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " For Plantilla ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Nos. of unfilled position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " For Job Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " For Plantilla ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Nos. of proposed position to change or modify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " For Job Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " For Plantilla ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Proposed nos. of personnel for next year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " For Job Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " For Plantilla ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Note: Provide detailed supporting documentation for the approving authority and HR to review. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.HRStaffingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r0.showLoadingProgressBar$));
} }
class HrStaffingPlanEntryComponent {
    constructor(dialogserve, frmglobaldataserve, router, route, fb) {
        this.dialogserve = dialogserve;
        this.frmglobaldataserve = frmglobaldataserve;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.curRecordId = null;
    }
    ngOnInit() {
        this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
        this.frmglobaldataserve.setLoadingProgressBar(true);
        this.initData();
        this.frmglobaldataserve.setLoadingProgressBar(false);
    }
    initData() {
        this.curRecordId = this.route.snapshot.params['id'];
        if (this.curRecordId != "0") {
            this.getHRStaffingPlan();
        }
        else {
            this.buildHRStaffingPlanDetail();
        }
    }
    getHRStaffingPlan() {
        this.frmglobaldataserve.getRecord("PerformanceMgnt/GetHRStaffing/" + this.curRecordId)
            .subscribe((data) => {
            this.hrStaffingPlanDetail = data;
            this.buildHRStaffingPlanDetail(this.hrStaffingPlanDetail);
        });
    }
    buildHRStaffingPlanDetail(hrStaffingPlanDetail) {
        this.HRStaffingForm = this.fb.group({
            hrStaffingPlanId: [hrStaffingPlanDetail ? hrStaffingPlanDetail.hrStaffingId : guid_typescript__WEBPACK_IMPORTED_MODULE_5__["Guid"].raw],
            existingNosPersonnelJO: [hrStaffingPlanDetail ? hrStaffingPlanDetail.existingNosPersonnelJO : 0],
            existingNosPersonnelPlantil: [hrStaffingPlanDetail ? hrStaffingPlanDetail.existingNosPersonnelPlantil : 0],
            nosFilledPosJO: [hrStaffingPlanDetail ? hrStaffingPlanDetail.nosFilledPosJO : 0],
            nosFilledPosPlantil: [hrStaffingPlanDetail ? hrStaffingPlanDetail.nosUnfilledPosPlantil : 0],
            nosUnfilledPosJO: [hrStaffingPlanDetail ? hrStaffingPlanDetail.nosUnfilledPosJO : 0],
            nosUnfilledPosPlantil: [hrStaffingPlanDetail ? hrStaffingPlanDetail.nosUnfilledPosPlantil : 0],
            nosProposedPosToChangeJO: [hrStaffingPlanDetail ? hrStaffingPlanDetail.nosProposedPosToChangeJO : 0],
            nosProposedPosToChangePlantil: [hrStaffingPlanDetail ? hrStaffingPlanDetail.nosProposedPosToChangePlantil : 0],
            proposedNosPersonnelNextYrJO: [hrStaffingPlanDetail ? hrStaffingPlanDetail.proposedNosPersonnelNextYrJO : 0],
            proposedNosPersonnelNextYrPlantil: [hrStaffingPlanDetail ? hrStaffingPlanDetail.proposedNosPersonnelNextYrPlantil : 0],
        });
    }
    eventHandler(btnclick) {
        if (btnclick == "Save") {
            if (this.HRStaffingForm.valid)
                this.saveRecord();
        }
        else if (btnclick == "Delete")
            this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
                .afterClosed().subscribe(result => {
                if (result == true) {
                    this.HRStaffingForm.patchValue({ 'is_deleted': true, 'deleted_by': localStorage.getItem('secN'), 'deleted_date': this.frmglobaldataserve.formatDate(new Date()) });
                    this.deleteRecord();
                }
            });
    }
    saveRecord() {
        this.frmglobaldataserve.updateRecord(this.HRStaffingForm.value, "PerformanceMgnt/PostHRStaffing")
            .subscribe((response) => {
            console.log("Record Saved Successfully: " + response);
            this.router.navigateByUrl("pages/performance/hr-staffing-plan/" + response).then(x => {
                this.initData(),
                    this.frmglobaldataserve.openSnackBar();
            }, (error) => {
                console.log("Error Saving the record: " + JSON.stringify(this.HRStaffingForm.value));
            });
        });
    }
    deleteRecord() {
        this.frmglobaldataserve.updateRecord(this.HRStaffingForm.value, "PerformanceMgnt/PostHRStaffing")
            .subscribe((response) => {
            console.log("Record Deleted Successfully: " + response);
            this.router.navigateByUrl("pages/performance/hr-staffing-plan/list");
        }, (error) => {
            console.log("Error Deleting the Record: " + JSON.stringify(this.HRStaffingForm.value));
        });
    }
}
HrStaffingPlanEntryComponent.ɵfac = function HrStaffingPlanEntryComponent_Factory(t) { return new (t || HrStaffingPlanEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
HrStaffingPlanEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HrStaffingPlanEntryComponent, selectors: [["ngx-hr-staffing-plan-entry"]], decls: 3, vars: 1, consts: [[3, "appcrudbtnclick"], [1, "container"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [4, "ngIf"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["placeholder", "...", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "existingNosPersonnelJO"], ["placeholder", "...", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "existingNosPersonnelPlantil"], ["placeholder", "...", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "nosFilledPosJO"], ["placeholder", "...", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "nosFilledPosPlantil"], ["placeholder", "...", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "nosUnfilledPosJO"], ["placeholder", "...", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "nosUnfilledPosPlantil"], ["placeholder", "...", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "nosProposedPosToChangeJO"], ["placeholder", "...", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "nosProposedPosToChangePlantil"], ["placeholder", "...", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "proposedNosPersonnelNextYrJO"], ["placeholder", "...", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "proposedNosPersonnelNextYrPlantil"], [1, "col-sm-12"]], template: function HrStaffingPlanEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "axl-app-crud", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appcrudbtnclick", function HrStaffingPlanEntryComponent_Template_axl_app_crud_appcrudbtnclick_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HrStaffingPlanEntryComponent_form_2_Template, 70, 4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.HRStaffingForm);
    } }, directives: [_shared_component_app_crud_app_crud_component__WEBPACK_IMPORTED_MODULE_6__["AppCrudComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_9__["AppLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["nb-card-header[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: aliceblue;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ninput[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin-top: .5rem;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: .5em;\n}\n\nth[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #1e90ff;\n  color: white;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZm9ybWFuY2UvaHItc3RhZmZpbmctcGxhbi9oci1zdGFmZmluZy1wbGFuLWVudHJ5L2hyLXN0YWZmaW5nLXBsYW4tZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXdCO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFBbUIseUJBQXlCO0FBRTVDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVyZm9ybWFuY2UvaHItc3RhZmZpbmctcGxhbi9oci1zdGFmZmluZy1wbGFuLWVudHJ5L2hyLXN0YWZmaW5nLXBsYW4tZW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlOyBcclxufVxyXG5cclxubmItY2FyZHtcclxuICBtYXJnaW46MDtcclxufVxyXG5cclxuaW5wdXQsbmItc2VsZWN0LHRleHRhcmVhIHtcclxuICBtYXJnaW4tdG9wOiAuNXJlbTtcclxufVxyXG5cclxudGgsdGR7XHJcbiAgcGFkZGluZy1sZWZ0Oi41ZW07XHJcbn1cclxuXHJcbnRoIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzFlOTBmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG5cclxuXHJcbi8vIG5iLXRhYnNldCAgeyBvdmVyZmxvdy14OiBhdXRvOyBvdmVyZmxvdy15OiBoaWRkZW47IH1cclxuXHJcbi8vIDpob3N0IDo6bmctZGVlcCBuZ3gtdGFiMSwgOmhvc3QgOjpuZy1kZWVwIG5neC10YWIyIHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbi8vIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrStaffingPlanEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-hr-staffing-plan-entry',
                templateUrl: './hr-staffing-plan-entry.component.html',
                styleUrls: ['./hr-staffing-plan-entry.component.scss']
            }]
    }], function () { return [{ type: app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }, { type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-list/hr-staffing-plan-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-list/hr-staffing-plan-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: HrStaffingPlanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrStaffingPlanListComponent", function() { return HrStaffingPlanListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/service/formGlobalData.service */ "./src/app/shared/service/formGlobalData.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_component_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/component/app-list/app-list.component */ "./src/app/shared/component/app-list/app-list.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/component/app-loader/app-loader.component */ "./src/app/shared/component/app-loader/app-loader.component.ts");





















function HrStaffingPlanListComponent_axl_app_loader_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "axl-app-loader");
} }
function HrStaffingPlanListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " HR Staffing ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HrStaffingPlanListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const erow_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", erow_r11.hrStaffingId, " ");
} }
function HrStaffingPlanListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Existing No. of Personnel JO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HrStaffingPlanListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const erow_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", erow_r12.existingNosPersonnelJO, " ");
} }
function HrStaffingPlanListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Existing No. of Personnel Plantilla ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HrStaffingPlanListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const erow_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", erow_r13.existingNosPersonnelPlantil, " ");
} }
function HrStaffingPlanListComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function HrStaffingPlanListComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HrStaffingPlanListComponent_tr_28_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onUserRowSelect(row_r14.hrStaffingId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 15]; };
class HrStaffingPlanListComponent {
    constructor(router, frmglobaldataserve, dialog) {
        this.router = router;
        this.frmglobaldataserve = frmglobaldataserve;
        this.dialog = dialog;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "PerformanceMgnt/";
        this.displayedColumns = ['hrStaffingId', 'existingNosPersonnelJO', 'existingNosPersonnelPlantil'];
        this.gridDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.hrStaffingPlanLst = [];
    }
    set matPaginator(mp) {
        this.paginator = mp;
        this.gridDataSource;
    }
    ngOnInit() {
        this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
        this.refreshTheList();
    }
    refreshTheList() {
        var urlstr = this.baseUrl + 'GetHRStaffing/';
        this.frmglobaldataserve.setLoadingProgressBar(true);
        this.frmglobaldataserve.loadList(urlstr)
            .subscribe((res) => {
            this.hrStaffingPlanLst = res;
            this.gridDataSource.data = res;
            this.frmglobaldataserve.setLoadingProgressBar(false);
        }, () => { });
    }
    eventHandler(btnevent) {
        if (btnevent == "Refresh") {
            this.refreshTheList();
        }
        else if (btnevent == "Add") {
            this.router.navigateByUrl("pages/performance/hr-staffing-plan/" + 0);
        }
    }
    onUserRowSelect(id) {
        this.router.navigateByUrl("pages/performance/hr-staffing-plan/" + id);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
}
HrStaffingPlanListComponent.ɵfac = function HrStaffingPlanListComponent_Factory(t) { return new (t || HrStaffingPlanListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_5__["FormGlobalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
HrStaffingPlanListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HrStaffingPlanListComponent, selectors: [["ngx-hr-staffing-plan-list"]], viewQuery: function HrStaffingPlanListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matPaginator = _t.first);
    } }, decls: 30, vars: 8, consts: [[3, "applistbtnclick"], [1, "container"], ["label", "List"], [4, "ngIf"], ["appearance", "standard", 2, "float", "right", "width", "100%"], ["matInput", "", "placeholder", "Search..", 3, "keyup"], ["input", ""], ["matSuffix", ""], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["table", ""], ["matColumnDef", "hrStaffingId"], ["mat-header-cell", "", "mat-sort-header", "", "style", "width: 230px;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "existingNosPersonnelJO"], ["matColumnDef", "existingNosPersonnelPlantil"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 2, "width", "230px"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function HrStaffingPlanListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "axl-app-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("applistbtnclick", function HrStaffingPlanListComponent_Template_axl_app_list_applistbtnclick_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " HR Staffing Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HrStaffingPlanListComponent_axl_app_loader_7_Template, 1, 0, "axl-app-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HrStaffingPlanListComponent_Template_input_keyup_12_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HrStaffingPlanListComponent_th_19_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HrStaffingPlanListComponent_td_20_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HrStaffingPlanListComponent_th_22_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HrStaffingPlanListComponent_td_23_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HrStaffingPlanListComponent_th_25_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HrStaffingPlanListComponent_td_26_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HrStaffingPlanListComponent_tr_27_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HrStaffingPlanListComponent_tr_28_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.showLoadingProgressBar$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.gridDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_shared_component_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_7__["AppListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_14__["AppLoaderComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["input[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%] {\n  margin-top: .5rem;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: .5em;\n}\n\nth[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #1e90ff;\n  color: white;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nnb-card-header[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: aliceblue;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  \n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.button1[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #4CAF50;\n}\n\n.button1[_ngcontent-%COMP%]:hover {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.processBar[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZm9ybWFuY2UvaHItc3RhZmZpbmctcGxhbi9oci1zdGFmZmluZy1wbGFuLWxpc3QvaHItc3RhZmZpbmctcGxhbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0FBQ3JCOztBQUVFO0VBQ0Usa0JBQWlCO0FBQ3JCOztBQUVFO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXdCO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7QUFDdkI7O0FBRUU7RUFBbUIseUJBQXlCO0FBRTlDOztBQURFO0VBQVMsZUFBYztBQUt6Qjs7QUFGRTtFQUNJLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFLdEI7O0FBRkU7RUFDSSx5QkFBeUI7RUFBRSxVQUFBO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7QUFNckI7O0FBSEk7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHlCQUF5QjtBQU0vQjs7QUFISTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBTWxCOztBQUhJO0VBQ0UsbUJBQW1CO0FBTXpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVyZm9ybWFuY2UvaHItc3RhZmZpbmctcGxhbi9oci1zdGFmZmluZy1wbGFuLWxpc3QvaHItc3RhZmZpbmctcGxhbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsbmItc2VsZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gIH1cclxuICBcclxuICB0aCx0ZHtcclxuICAgIHBhZGRpbmctbGVmdDouNWVtO1xyXG4gIH1cclxuICBcclxuICB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzFlOTBmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICB0cjpob3ZlcntjdXJzb3I6cG9pbnRlcjt9XHJcbiAgXHJcbiAgXHJcbiAgbmItY2FyZC1oZWFkZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ1dHRvbjEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idXR0b24xOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvY2Vzc0JhcntcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrStaffingPlanListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-hr-staffing-plan-list',
                templateUrl: './hr-staffing-plan-list.component.html',
                styleUrls: ['./hr-staffing-plan-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_5__["FormGlobalDataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, { matPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: HrStaffingPlanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrStaffingPlanRoutingModule", function() { return HrStaffingPlanRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hr_staffing_plan_entry_hr_staffing_plan_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hr-staffing-plan-entry/hr-staffing-plan-entry.component */ "./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-entry/hr-staffing-plan-entry.component.ts");
/* harmony import */ var _hr_staffing_plan_list_hr_staffing_plan_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hr-staffing-plan-list/hr-staffing-plan-list.component */ "./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-list/hr-staffing-plan-list.component.ts");






const routes = [
    {
        path: 'list',
        component: _hr_staffing_plan_list_hr_staffing_plan_list_component__WEBPACK_IMPORTED_MODULE_3__["HrStaffingPlanListComponent"]
    },
    {
        path: ':id',
        component: _hr_staffing_plan_entry_hr_staffing_plan_entry_component__WEBPACK_IMPORTED_MODULE_2__["HrStaffingPlanEntryComponent"],
        pathMatch: 'full'
    }
];
class HrStaffingPlanRoutingModule {
}
HrStaffingPlanRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HrStaffingPlanRoutingModule });
HrStaffingPlanRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HrStaffingPlanRoutingModule_Factory(t) { return new (t || HrStaffingPlanRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HrStaffingPlanRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrStaffingPlanRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan.module.ts ***!
  \*******************************************************************************/
/*! exports provided: HrStaffingPlanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrStaffingPlanModule", function() { return HrStaffingPlanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hr_staffing_plan_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hr-staffing-plan-routing.module */ "./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-routing.module.ts");
/* harmony import */ var _hr_staffing_plan_list_hr_staffing_plan_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hr-staffing-plan-list/hr-staffing-plan-list.component */ "./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-list/hr-staffing-plan-list.component.ts");
/* harmony import */ var _hr_staffing_plan_entry_hr_staffing_plan_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hr-staffing-plan-entry/hr-staffing-plan-entry.component */ "./src/app/pages/performance/hr-staffing-plan/hr-staffing-plan-entry/hr-staffing-plan-entry.component.ts");
/* harmony import */ var app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/component/shared-component.module */ "./src/app/shared/component/shared-component.module.ts");
/* harmony import */ var app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/shared-material/shared-material.module */ "./src/app/shared/shared-material/shared-material.module.ts");








class HrStaffingPlanModule {
}
HrStaffingPlanModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HrStaffingPlanModule });
HrStaffingPlanModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HrStaffingPlanModule_Factory(t) { return new (t || HrStaffingPlanModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _hr_staffing_plan_routing_module__WEBPACK_IMPORTED_MODULE_2__["HrStaffingPlanRoutingModule"],
            app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
            app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HrStaffingPlanModule, { declarations: [_hr_staffing_plan_list_hr_staffing_plan_list_component__WEBPACK_IMPORTED_MODULE_3__["HrStaffingPlanListComponent"], _hr_staffing_plan_entry_hr_staffing_plan_entry_component__WEBPACK_IMPORTED_MODULE_4__["HrStaffingPlanEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _hr_staffing_plan_routing_module__WEBPACK_IMPORTED_MODULE_2__["HrStaffingPlanRoutingModule"],
        app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
        app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrStaffingPlanModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_hr_staffing_plan_list_hr_staffing_plan_list_component__WEBPACK_IMPORTED_MODULE_3__["HrStaffingPlanListComponent"], _hr_staffing_plan_entry_hr_staffing_plan_entry_component__WEBPACK_IMPORTED_MODULE_4__["HrStaffingPlanEntryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _hr_staffing_plan_routing_module__WEBPACK_IMPORTED_MODULE_2__["HrStaffingPlanRoutingModule"],
                    app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
                    app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=hr-staffing-plan-hr-staffing-plan-module-es2015.js.map