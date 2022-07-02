(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ldna-ldna-module"],{

/***/ "./src/app/pages/learning_and_development/ldna/ldna-entry/ldna-entry.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/learning_and_development/ldna/ldna-entry/ldna-entry.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LdnaEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LdnaEntryComponent", function() { return LdnaEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/service/dialog.service */ "./src/app/shared/service/dialog.service.ts");
/* harmony import */ var app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/service/formGlobalData.service */ "./src/app/shared/service/formGlobalData.service.ts");
/* harmony import */ var app_shared_service_library_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/service/library.service */ "./src/app/shared/service/library.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_component_app_crud_app_crud_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/component/app-crud/app-crud.component */ "./src/app/shared/component/app-crud/app-crud.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/component/app-loader/app-loader.component */ "./src/app/shared/component/app-loader/app-loader.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");




















function LdnaEntryComponent_form_2_axl_app_loader_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "axl-app-loader");
} }
function LdnaEntryComponent_form_2_nb_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r4.departmentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r4.description, " ");
} }
function LdnaEntryComponent_form_2_tr_26_nb_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coreCompetency_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", coreCompetency_r11.coreCompetencyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", coreCompetency_r11.description, " ");
} }
function LdnaEntryComponent_form_2_tr_26_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const competencyCategory_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", competencyCategory_r13.competencyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", competencyCategory_r13.description, " ");
} }
function LdnaEntryComponent_form_2_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function LdnaEntryComponent_form_2_tr_26_Template_nb_select_selectedChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.selectedCoreCompetency = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LdnaEntryComponent_form_2_tr_26_nb_option_3_Template, 2, 2, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function LdnaEntryComponent_form_2_tr_26_Template_nb_select_selectedChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.selectedCompetencyCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LdnaEntryComponent_form_2_tr_26_nb_option_6_Template, 2, 2, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", category_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r3.selectedCoreCompetency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.lib_core_competency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r3.selectedCompetencyCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.lib_competency_category);
} }
function LdnaEntryComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LdnaEntryComponent_form_2_axl_app_loader_2_Template, 1, 0, "axl-app-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " LDNA Form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function LdnaEntryComponent_form_2_Template_nb_select_selectedChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.selectedDepartment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LdnaEntryComponent_form_2_nb_option_9_Template, 2, 2, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LdnaEntryComponent_form_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.openCoreCompetencyDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nb-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search Core Competency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Parent Competency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Competency Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Permanent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contractual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LdnaEntryComponent_form_2_tr_26_Template, 13, 5, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.LDNAForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r0.showLoadingProgressBar$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r0.selectedDepartment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.lib_department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ldnaResultFormArray.controls);
} }
class LdnaEntryComponent {
    constructor(dialogserve, fb, route, router, frmglobaldataserve, libraries_svc) {
        this.dialogserve = dialogserve;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.frmglobaldataserve = frmglobaldataserve;
        this.libraries_svc = libraries_svc;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "Library/";
        this.curRecordId = null;
        this.ldnaDetail = {
            ldnaResults: [],
        };
        this.libraries_svc.loadAllLibrary();
    }
    ngOnInit() {
        this.lib_core_competency = this.libraries_svc.lib_core_competencies_svc;
        this.lib_competency_category = this.libraries_svc.lib_competency_categories_svc;
        this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
        this.frmglobaldataserve.setLoadingProgressBar(true);
        this.initData();
        this.frmglobaldataserve.setLoadingProgressBar(false);
    }
    initData() {
        this.lib_department = JSON.parse(sessionStorage.getItem('lib_department'));
        this.curRecordId = this.route.snapshot.params['id'];
        if (this.curRecordId != "0") {
            this.getLDNA();
        }
        else {
            this.buildLDNADetail();
        }
        //this.getCoreCompetency();
    }
    getLDNA() {
        this.frmglobaldataserve.getRecord("LDNA/GetLDNA/" + this.curRecordId)
            .subscribe((data) => {
            this.ldnaDetail = data;
            this.buildLDNADetail(this.ldnaDetail);
        });
    }
    eventHandler(btnclick) {
        if (btnclick == "Save") {
            if (this.LDNAForm.valid)
                this.saveRecord();
        }
        else if (btnclick == "Delete") {
        }
    }
    saveRecord() {
        this.frmglobaldataserve.updateRecord(this.LDNAForm.value, "LDNA/PostLDNA")
            .subscribe((response) => {
            console.log("Record Saved Successfully: " + response);
            this.router.navigateByUrl("pages/learning-and-development/ldna/" + response).then(x => {
                this.initData(),
                    this.frmglobaldataserve.openSnackBar();
            }, (error) => {
                console.log("Error Saving the Record: " + JSON.stringify(this.LDNAForm.value));
            });
        });
    }
    buildLDNADetail(ldnaDetail) {
        this.LDNAForm = this.fb.group({
            ldnaId: [ldnaDetail ? ldnaDetail.ldnaId : guid_typescript__WEBPACK_IMPORTED_MODULE_7__["Guid"].raw],
            departmentId: [ldnaDetail ? ldnaDetail.departmentId : 0],
            ldnaResults: this.fb.array([]),
        });
        this.ldnaDetail.ldnaResults.forEach(i => {
            this.createLDNAResultFormGroup(i);
        });
    }
    openCoreCompetencyDialog() {
        this.dialogserve.openFormDialog('CoreCompetency');
    }
    ngDoCheck() {
        if (this.dialogserve.selectedCoreCompetency$ != undefined && this.dialogserve.doCheckController$.value == true) {
            this.createCoreCompetencyFormGroup(this.dialogserve.selectedCoreCompetency$);
            this.dialogserve.setDoCheckController(false);
        }
        ;
    }
    createCoreCompetencyFormGroup(libCoreCompetency) {
        let coreCompetencyFG = this.fb.group({
            coreCompetencyId: [libCoreCompetency ? libCoreCompetency.coreCompetencyId : 0],
            description: [libCoreCompetency ? libCoreCompetency.description : ''],
            libCompetencyCategory: this.fb.array([]),
        });
        libCoreCompetency.libCompetencyCategory.forEach(i => {
            this.createLDNAResultFormGroup(i, libCoreCompetency, i.description);
        });
    }
    createLDNAResultFormGroup(ldnaResult, libCoreCompetency, competencyDesc) {
        let ldnaResultFG = this.fb.group({
            ldnaResultId: [ldnaResult.ldnaResultId ? ldnaResult.ldnaResultId : guid_typescript__WEBPACK_IMPORTED_MODULE_7__["Guid"].raw],
            coreCompetencyId: [ldnaResult.coreCompetencyId ? ldnaResult.coreCompetencyId : libCoreCompetency.coreCompetencyId ? libCoreCompetency.coreCompetencyId : null],
            coreCompetencyDesc: [libCoreCompetency ? libCoreCompetency.description : null],
            competencyId: [ldnaResult.competencyId ? ldnaResult.competencyId : null],
            competencyDesc: [competencyDesc ? competencyDesc : null],
            permanent: [ldnaResult.permanent ? ldnaResult.permanent : 0],
            contractual: [ldnaResult.contractual ? ldnaResult.contractual : 0]
        });
        this.ldnaResultFormArray.push(ldnaResultFG);
    }
    get ldnaResultFormArray() {
        return this.LDNAForm.get("ldnaResults");
    }
}
LdnaEntryComponent.ɵfac = function LdnaEntryComponent_Factory(t) { return new (t || LdnaEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_library_service__WEBPACK_IMPORTED_MODULE_5__["LibraryService"])); };
LdnaEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LdnaEntryComponent, selectors: [["ngx-ldna-entry"]], decls: 3, vars: 1, consts: [[3, "appcrudbtnclick"], [1, "container"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [4, "ngIf"], ["formControlName", "departmentId", "fullWidth", "", "placeholder", "Department", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding-bottom", "5px"], ["nbButton", "", "status", "success", 3, "click"], ["icon", "search-outline"], [2, "padding-right", "50px"], [2, "padding-right", "135px"], [2, "padding-right", "20px"], [3, "formGroup", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "coreCompetencyId", "fullWidth", "", "placeholder", "Core Competency", 3, "selected", "selectedChange"], ["formControlName", "competencyId", "fullWidth", "", "placeholder", "Competency Category", 3, "selected", "selectedChange"], [2, "width", "100px"], ["type", "number", "formControlName", "permanent", "matInput", "", 2, "text-align", "right"], ["type", "number", "formControlName", "contractual", "matInput", "", 2, "text-align", "right"]], template: function LdnaEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "axl-app-crud", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appcrudbtnclick", function LdnaEntryComponent_Template_axl_app_crud_appcrudbtnclick_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LdnaEntryComponent_form_2_Template, 27, 7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.LDNAForm);
    } }, directives: [_shared_component_app_crud_app_crud_component__WEBPACK_IMPORTED_MODULE_8__["AppCrudComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconComponent"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_11__["AppLoaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOptionComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["nb-card-header[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: aliceblue;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: .5em;\n}\n\nth[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #1e90ff;\n  color: white;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmdfYW5kX2RldmVsb3BtZW50L2xkbmEvbGRuYS1lbnRyeS9sZG5hLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNwQjs7QUFFRTtFQUNBLFNBQVE7QUFDVjs7QUFNRTtFQUNBLGtCQUFpQjtBQUhuQjs7QUFNRTtFQUNBLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF3QjtFQUN4QixZQUFZO0VBQ1osbUJBQW1CO0FBSHJCOztBQU1FO0VBQW1CLHlCQUF5QjtBQUY5QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nX2FuZF9kZXZlbG9wbWVudC9sZG5hL2xkbmEtZW50cnkvbGRuYS1lbnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG4gIH1cclxuICBcclxuICBuYi1jYXJke1xyXG4gIG1hcmdpbjowO1xyXG4gIH1cclxuICBcclxuICAvLyBpbnB1dCxuYi1zZWxlY3Qge1xyXG4gIC8vICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgLy8gfVxyXG4gIFxyXG4gIHRoLHRke1xyXG4gIHBhZGRpbmctbGVmdDouNWVtO1xyXG4gIH1cclxuICBcclxuICB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxZTkwZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICBcclxuICBcclxuICAvLyBuYi10YWJzZXQgIHsgb3ZlcmZsb3cteDogYXV0bzsgb3ZlcmZsb3cteTogaGlkZGVuOyB9XHJcbiAgXHJcbiAgLy8gOmhvc3QgOjpuZy1kZWVwIG5neC10YWIxLCA6aG9zdCA6Om5nLWRlZXAgbmd4LXRhYjIge1xyXG4gIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgLy8gfVxyXG4gICJdfQ== */"] });
LdnaEntryComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LdnaEntryComponent, factory: LdnaEntryComponent.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LdnaEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-ldna-entry',
                templateUrl: './ldna-entry.component.html',
                styleUrls: ['./ldna-entry.component.scss']
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"] }, { type: app_shared_service_library_service__WEBPACK_IMPORTED_MODULE_5__["LibraryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning_and_development/ldna/ldna-list/ldna-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/learning_and_development/ldna/ldna-list/ldna-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LdnaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LdnaListComponent", function() { return LdnaListComponent; });
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





















function LdnaListComponent_axl_app_loader_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "axl-app-loader");
} }
function LdnaListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LDNA ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LdnaListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const erow_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", erow_r9.ldnaId, " ");
} }
function LdnaListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LdnaListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const erow_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", erow_r10.departmentDesc, " ");
} }
function LdnaListComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function LdnaListComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LdnaListComponent_tr_25_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const row_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onUserRowSelect(row_r11.ldnaId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 15]; };
class LdnaListComponent {
    constructor(router, frmglobaldataserve, dialog) {
        this.router = router;
        this.frmglobaldataserve = frmglobaldataserve;
        this.dialog = dialog;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "LDNA/";
        this.displayedColumns = ['ldnaId', 'departmentDesc'];
        this.gridDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.ldnaList = [];
        this.ldnaConsoReport = [];
    }
    set matPaginator(mp) {
        this.paginator = mp;
        this.gridDataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
        this.refreshTheList();
    }
    refreshTheList() {
        var urlstr = this.baseUrl + 'GetLDNAList/';
        this.frmglobaldataserve.setLoadingProgressBar(true);
        this.frmglobaldataserve.loadList(urlstr)
            .subscribe((res) => {
            this.ldnaList = res;
            this.gridDataSource.data = res;
            this.frmglobaldataserve.setLoadingProgressBar(false);
        }, () => { });
    }
    eventHandler(btnevent) {
        if (btnevent == "Refresh") {
            this.refreshTheList();
        }
        else if (btnevent == "Add") {
            this.router.navigateByUrl("pages/learning-and-development/ldna/" + 0);
        }
    }
    onUserRowSelect(id) {
        this.router.navigateByUrl("pages/learning-and-development/ldna/" + id);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
    exportTableList() {
        this.frmglobaldataserve.setLoadingProgressBar(true);
        this.frmglobaldataserve.loadList(this.baseUrl + 'ExportLDNAConsolidated/')
            .subscribe((res) => {
            this.ldnaConsoReport = res;
            this.frmglobaldataserve.setLoadingProgressBar(false);
            var fileName = "LDNAMasterList_" + Date.now + '.xlsx';
            let dataToExport = this.ldnaConsoReport
                .map(x => ({
                CoreCompetency: x.coreCompetency,
                CompetencyCategory: x.competencyCategory,
                PMED_Permanent: x.pmeD_Permanent,
                PMED_Contractual: x.pmeD_Contractual,
                Regulation_Licensing_and_Enforcement_Division_Permanent: x.regulation_Licensing_and_Enforcement_Division_Permanent,
                Regulation_Licensing_and_Enforcement_Division_Contractual: x.regulation_Licensing_and_Enforcement_Division_Contractual,
                District_Provincial_Health_Teams_Permanent: x.district_Provincial_Health_Teams_Permanent,
                District_Provincial_Health_Teams_Contractual: x.district_Provincial_Health_Teams_Contractual
            }));
            this.frmglobaldataserve.exportToXlsx(dataToExport, 'LDNAMasterList', fileName);
        }, () => { });
    }
}
LdnaListComponent.ɵfac = function LdnaListComponent_Factory(t) { return new (t || LdnaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_5__["FormGlobalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
LdnaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LdnaListComponent, selectors: [["ngx-ldna-list"]], viewQuery: function LdnaListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matPaginator = _t.first);
    } }, decls: 41, vars: 8, consts: [[3, "applistbtnclick"], [1, "container"], ["label", "List"], [4, "ngIf"], ["appearance", "standard", 2, "float", "right", "width", "100%"], ["matInput", "", "placeholder", "Search..", 3, "keyup"], ["input", ""], ["matSuffix", ""], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["table", ""], ["matColumnDef", "ldnaId"], ["mat-header-cell", "", "mat-sort-header", "", "style", "width: 230px;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "departmentDesc"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["label", "Reports"], [1, "row"], [1, "col-sx"], [1, "button", "button1", 3, "click"], [1, "far", "fa-file-excel"], [1, "col-lg"], ["mat-header-cell", "", "mat-sort-header", "", 2, "width", "230px"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function LdnaListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "axl-app-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("applistbtnclick", function LdnaListComponent_Template_axl_app_list_applistbtnclick_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " LDNA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LdnaListComponent_axl_app_loader_7_Template, 1, 0, "axl-app-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LdnaListComponent_Template_input_keyup_12_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LdnaListComponent_th_19_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LdnaListComponent_td_20_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LdnaListComponent_th_22_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LdnaListComponent_td_23_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LdnaListComponent_tr_24_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LdnaListComponent_tr_25_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Master List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LdnaListComponent_Template_a_click_34_listener() { return ctx.exportTableList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Report Details: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_shared_component_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_7__["AppListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_14__["AppLoaderComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["input[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%] {\n  margin-top: .5rem;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: .5em;\n}\n\nth[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #1e90ff;\n  color: white;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nnb-card-header[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: aliceblue;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  \n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.button1[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #4CAF50;\n}\n\n.button1[_ngcontent-%COMP%]:hover {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.processBar[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmdfYW5kX2RldmVsb3BtZW50L2xkbmEvbGRuYS1saXN0L2xkbmEtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGtCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF3QjtFQUN4QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3ZCOztBQUVFO0VBQW1CLHlCQUF5QjtBQUU5Qzs7QUFERTtFQUFTLGVBQWM7QUFLekI7O0FBRkU7RUFDSSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBS3RCOztBQUZFO0VBQ0kseUJBQXlCO0VBQUUsVUFBQTtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0FBTXJCOztBQUhJO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix5QkFBeUI7QUFNL0I7O0FBSEk7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQU1sQjs7QUFISTtFQUNFLG1CQUFtQjtBQU16QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nX2FuZF9kZXZlbG9wbWVudC9sZG5hL2xkbmEtbGlzdC9sZG5hLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCxuYi1zZWxlY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIHRoLHRke1xyXG4gICAgcGFkZGluZy1sZWZ0Oi41ZW07XHJcbiAgfVxyXG4gIFxyXG4gIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWU5MGZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gIHRyOmhvdmVye2N1cnNvcjpwb2ludGVyO31cclxuICBcclxuICBcclxuICBuYi1jYXJkLWhlYWRlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTsgXHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnV0dG9uMSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxuICAgICAgY29sb3I6IGJsYWNrOyBcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzRDQUY1MDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ1dHRvbjE6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9jZXNzQmFye1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LdnaListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-ldna-list',
                templateUrl: './ldna-list.component.html',
                styleUrls: ['./ldna-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_5__["FormGlobalDataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, { matPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/learning_and_development/ldna/ldna-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/learning_and_development/ldna/ldna-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: LdnaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LdnaRoutingModule", function() { return LdnaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ldna_entry_ldna_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ldna-entry/ldna-entry.component */ "./src/app/pages/learning_and_development/ldna/ldna-entry/ldna-entry.component.ts");
/* harmony import */ var _ldna_list_ldna_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ldna-list/ldna-list.component */ "./src/app/pages/learning_and_development/ldna/ldna-list/ldna-list.component.ts");






const routes = [
    {
        path: 'list',
        component: _ldna_list_ldna_list_component__WEBPACK_IMPORTED_MODULE_3__["LdnaListComponent"],
    },
    {
        path: ':id',
        component: _ldna_entry_ldna_entry_component__WEBPACK_IMPORTED_MODULE_2__["LdnaEntryComponent"],
        pathMatch: 'full'
    }
];
class LdnaRoutingModule {
}
LdnaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LdnaRoutingModule });
LdnaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LdnaRoutingModule_Factory(t) { return new (t || LdnaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LdnaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LdnaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/learning_and_development/ldna/ldna.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/learning_and_development/ldna/ldna.module.ts ***!
  \********************************************************************/
/*! exports provided: LdnaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LdnaModule", function() { return LdnaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ldna_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ldna-routing.module */ "./src/app/pages/learning_and_development/ldna/ldna-routing.module.ts");
/* harmony import */ var _ldna_list_ldna_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ldna-list/ldna-list.component */ "./src/app/pages/learning_and_development/ldna/ldna-list/ldna-list.component.ts");
/* harmony import */ var _ldna_entry_ldna_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ldna-entry/ldna-entry.component */ "./src/app/pages/learning_and_development/ldna/ldna-entry/ldna-entry.component.ts");
/* harmony import */ var app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/component/shared-component.module */ "./src/app/shared/component/shared-component.module.ts");
/* harmony import */ var app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/shared-material/shared-material.module */ "./src/app/shared/shared-material/shared-material.module.ts");








class LdnaModule {
}
LdnaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LdnaModule });
LdnaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LdnaModule_Factory(t) { return new (t || LdnaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ldna_routing_module__WEBPACK_IMPORTED_MODULE_2__["LdnaRoutingModule"],
            app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
            app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LdnaModule, { declarations: [_ldna_list_ldna_list_component__WEBPACK_IMPORTED_MODULE_3__["LdnaListComponent"], _ldna_entry_ldna_entry_component__WEBPACK_IMPORTED_MODULE_4__["LdnaEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ldna_routing_module__WEBPACK_IMPORTED_MODULE_2__["LdnaRoutingModule"],
        app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
        app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LdnaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ldna_list_ldna_list_component__WEBPACK_IMPORTED_MODULE_3__["LdnaListComponent"], _ldna_entry_ldna_entry_component__WEBPACK_IMPORTED_MODULE_4__["LdnaEntryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ldna_routing_module__WEBPACK_IMPORTED_MODULE_2__["LdnaRoutingModule"],
                    app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
                    app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ldna-ldna-module-es2015.js.map