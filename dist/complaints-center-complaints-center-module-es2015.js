(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-center-complaints-center-module"],{

/***/ "./src/app/pages/performance/complaints-center/complaints-center-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/performance/complaints-center/complaints-center-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComplaintsCenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsCenterRoutingModule", function() { return ComplaintsCenterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _complaints_entry_complaints_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complaints-entry/complaints-entry.component */ "./src/app/pages/performance/complaints-center/complaints-entry/complaints-entry.component.ts");
/* harmony import */ var _complaints_list_complaints_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaints-list/complaints-list.component */ "./src/app/pages/performance/complaints-center/complaints-list/complaints-list.component.ts");






const routes = [
    {
        path: 'list',
        component: _complaints_list_complaints_list_component__WEBPACK_IMPORTED_MODULE_3__["ComplaintsListComponent"]
    },
    {
        path: ':id',
        component: _complaints_entry_complaints_entry_component__WEBPACK_IMPORTED_MODULE_2__["ComplaintsEntryComponent"],
        pathMatch: 'full'
    }
];
class ComplaintsCenterRoutingModule {
}
ComplaintsCenterRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ComplaintsCenterRoutingModule });
ComplaintsCenterRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ComplaintsCenterRoutingModule_Factory(t) { return new (t || ComplaintsCenterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ComplaintsCenterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ComplaintsCenterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/performance/complaints-center/complaints-center.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/performance/complaints-center/complaints-center.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ComplaintsCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsCenterModule", function() { return ComplaintsCenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _complaints_center_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complaints-center-routing.module */ "./src/app/pages/performance/complaints-center/complaints-center-routing.module.ts");
/* harmony import */ var _complaints_list_complaints_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaints-list/complaints-list.component */ "./src/app/pages/performance/complaints-center/complaints-list/complaints-list.component.ts");
/* harmony import */ var _complaints_entry_complaints_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complaints-entry/complaints-entry.component */ "./src/app/pages/performance/complaints-center/complaints-entry/complaints-entry.component.ts");
/* harmony import */ var app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/component/shared-component.module */ "./src/app/shared/component/shared-component.module.ts");
/* harmony import */ var app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/shared-material/shared-material.module */ "./src/app/shared/shared-material/shared-material.module.ts");








class ComplaintsCenterModule {
}
ComplaintsCenterModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ComplaintsCenterModule });
ComplaintsCenterModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ComplaintsCenterModule_Factory(t) { return new (t || ComplaintsCenterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _complaints_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComplaintsCenterRoutingModule"],
            app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
            app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ComplaintsCenterModule, { declarations: [_complaints_list_complaints_list_component__WEBPACK_IMPORTED_MODULE_3__["ComplaintsListComponent"], _complaints_entry_complaints_entry_component__WEBPACK_IMPORTED_MODULE_4__["ComplaintsEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _complaints_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComplaintsCenterRoutingModule"],
        app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
        app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ComplaintsCenterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_complaints_list_complaints_list_component__WEBPACK_IMPORTED_MODULE_3__["ComplaintsListComponent"], _complaints_entry_complaints_entry_component__WEBPACK_IMPORTED_MODULE_4__["ComplaintsEntryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _complaints_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComplaintsCenterRoutingModule"],
                    app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
                    app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/performance/complaints-center/complaints-entry/complaints-entry.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/performance/complaints-center/complaints-entry/complaints-entry.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ComplaintsEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsEntryComponent", function() { return ComplaintsEntryComponent; });
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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/component/app-loader/app-loader.component */ "./src/app/shared/component/app-loader/app-loader.component.ts");

















function ComplaintsEntryComponent_form_2_axl_app_loader_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "axl-app-loader");
} }
function ComplaintsEntryComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ComplaintsEntryComponent_form_2_axl_app_loader_2_Template, 1, 0, "axl-app-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Complaint Form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Select your office");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Administration and Financial Management Team (AFMT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Field Implementation and Coordination Team ( NCR and Luzon)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Health Policy and Systems Development Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Procurement and Supply Chain Management Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Health Regulation Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Health Facilities and Infrastructure Development Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Field Implementation and Coordination Team (Visayas and Mindanao)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Field Implementation and Coordination Team ( NCR and North Luzon)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Health Emergency Management Bureau");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Internal Audit Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Legal Service (LS)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Bureau of International Health Cooperation (BIHC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Bureau of Local Health Systems Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Health Policy Development and Planning Bureau (HPDPB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Health Human Resource Development Bureau (HHRDB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Disease Prevention and Control Bureau (DPCB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Health Promotion Bureau");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Epidemiology Bureau");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Health Facilities Enhancement Program Management Office");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Health Facility Development Bureau");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Knowledge Management and Information Technology Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Bureau of Quarantine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Supply Chain Management Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Procurement Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Financial and Management Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Administrative Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Malasakit Program Office");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Pharmaceutical Division");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Health Facilities and Services Regulatory Bureau (HFSRB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Bureau of Quarantine (BOQ)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Complainant Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ComplaintsEntryComponent_form_2_Template_button_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.openParticipantDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "nb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Search Complainant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Select your office");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Lack of Communication");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Ambiguously-Defined Employee Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Bosses Playing Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Bullying and Hostile Work Environments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Not Having Time for Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Employees complaining About the Supervisor: Taking Credit for Other\u2019s Ideas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Work/Life Balance Concerns");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Unrealistic expectations regarding work");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Cultivating Any Type of Hostile Work Environment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Micromanagement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "No Opportunity for Advancement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Excessive demands that are impossible to meet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Demeaning demands far below the employee\u2019s capability");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Intrusion into the employee\u2019s personal life");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Interpersonal Challenges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Physical assaults of a sexual nature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Unwelcome sexual advances, propositions, or other sexual comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Sharing sexual photos (pornography)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Posting sexual posters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Sexual comments, jokes, questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Inappropriate sexual touching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Inappropriate sexual gestures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Invading personal space in a sexual way");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Quid pro quo sexual harassment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Preferential treatment or promises of preferential treatment to an employee for submitting to sexual conduct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Exposing an employee to unwanted sexual attention or activity, or making their employees more difficult due to their sex.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Sexual or discriminatory displays or publications anywhere in the workplace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Retaliation for sexual harassment complaints.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Racial slurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Racial insults");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Racial jokes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Degrading comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Disgust");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Intolerance of differences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Gender Harassment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Third-party harassment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Verbal harassment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Intolerance toward religious holidays");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Intolerance toward religious traditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Intolerance toward religious customs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Cruel religious jokes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Degrading stereotypical comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Pressures to convert religions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Teased and insulted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Left out of activities or meetings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Unfairly criticized");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Disability-Based Harassment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Sexual Orientation-Based Harassment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Age-Based Harassment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Inappropriate comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Offensive jokes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "Personal humiliation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Critical remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Ostracizing behaviors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Intimidation tactics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Direct threats of intent to inflict harm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Physical attacks (hitting, shoving, kicking)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "Threatening behavior (shaking fists angrily)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Destroying property to intimidate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Isolating or denying the victim\u2019s presence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "Belittling or trivializing the victim\u2019s thoughts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "Discrediting or spreading rumors about the victim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Opposing or challenging everything the victim says");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Share humiliating things about the victim by mass email or mass chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Spread lies or gossip about the victim on social media");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Send harassing instant messages or text messages directly to the victim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "Cyberbullying");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Retaliation harassment/ like someone else to get revenge and to prevent the victim from behaving in such a way again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, " Complainee Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ComplaintsEntryComponent_form_2_Template_button_click_232_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.openComplaineeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](233, "nb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "Search Complainee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](239, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, " Provide Email Address (complainant) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](243, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, " Provide Email Address of your supervisor or any with higher position from your office ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](247, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, " Take Note:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](253, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, " Before you file your complaint:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](255, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, " You know who the person is to address your complaint to.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](257, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, " You know the form that your complaint should take?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](259, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, " You are aware of what you want to accomplish.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](261, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](262, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, " The complaint in writing:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](264, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](265, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, " You have stated your purpose clearly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](267, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, " The reason you are making the complaint is obvious.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](269, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, " You have demonstrated the importance.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](271, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, " You have requested what you would like to see happen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](273, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, " You have asked for a timely reply.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, " Your complaint is short and to the point.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, " You were polite.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](279, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, " You refrained from criticism and personal attacks.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](281, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, " You demonstrated that you have support.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](283, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, " You have determined the appropriateness of humor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](285, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, " You are prepared to raise the stakes if necessary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](287, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, " You have a copy of the complaint.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](289, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.ComplaintForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 100, ctx_r0.showLoadingProgressBar$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 68);
} }
class ComplaintsEntryComponent {
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
            this.getComplaint();
        }
        else {
            this.buildComplaintDetail();
        }
    }
    ngDoCheck() {
        debugger;
        if (this.dialogserve.selectedPDS$ != null) {
            var selectedPerson = this.dialogserve.selectedPDS$;
            this.ComplaintForm.controls['personId'].patchValue(selectedPerson.personId);
            this.ComplaintForm.controls['complaintName'].patchValue(selectedPerson.firstName + " " + selectedPerson.lastName);
        }
        if (this.dialogserve.selectedPDSOther$ != null) {
            var selectedPerson = this.dialogserve.selectedPDSOther$;
            this.ComplaintForm.controls['complaineeId'].patchValue(selectedPerson.personId);
            this.ComplaintForm.controls['complaineeName'].patchValue(selectedPerson.firstName + " " + selectedPerson.lastName);
        }
    }
    ngOnDestroy() {
        this.ComplaintForm.reset();
        this.dialogserve.selectedPDS$ = null;
        this.dialogserve.selectedPDSOther$ = null;
    }
    getComplaint() {
        this.frmglobaldataserve.getRecord("PerformanceMgnt/GetComplaintDetail/" + this.curRecordId)
            .subscribe((data) => {
            this.complaintDetail = data;
            this.buildComplaintDetail(this.complaintDetail);
        });
    }
    buildComplaintDetail(complaintDetail) {
        this.ComplaintForm = this.fb.group({
            complaintId: [complaintDetail ? complaintDetail.complaintId : guid_typescript__WEBPACK_IMPORTED_MODULE_5__["Guid"].raw],
            officeId: [complaintDetail ? complaintDetail.officeId : null],
            personId: [complaintDetail ? complaintDetail.personId : null],
            typeOfComplaint: [complaintDetail ? complaintDetail.typeOfComplaint : null],
            grievanceDetails: [complaintDetail ? complaintDetail.grievanceDetails : ''],
            complaineeId: [complaintDetail ? complaintDetail.complaineeId : null],
            emailAddressComplainant: [complaintDetail ? complaintDetail.emailAddressComplainant : ''],
            emailAddressSupervisor: [complaintDetail ? complaintDetail.emailAddressSupervisor : ''],
            complaintName: [complaintDetail ? complaintDetail.complaintName : ''],
            complaineeName: [complaintDetail ? complaintDetail.complaineeName : '']
        });
    }
    // buildPDSDetail(pdsDetail?: PersonPDSDetail){
    //   this.personDetailForm = this.fb.group({
    //     firstName:[pdsDetail? pdsDetail.firstName:''],
    //     middleName:[pdsDetail? pdsDetail.middleName:''],
    //     lastName:[pdsDetail? pdsDetail.lastName:'']
    //   })
    // }
    // buildComplaineeDetail(complaineeDetail?: PersonPDSDetail){
    //   this.complaineeForm = this.fb.group({
    //     firstName:[complaineeDetail? complaineeDetail.firstName:''],
    //     middleName:[complaineeDetail? complaineeDetail.middleName:''],
    //     lastName:[complaineeDetail? complaineeDetail.lastName:'']
    //   })
    // }
    eventHandler(btnclick) {
        if (btnclick == "Save") {
            if (this.ComplaintForm.valid)
                this.saveRecord();
        }
        else if (btnclick == "Delete")
            this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
                .afterClosed().subscribe(result => {
                if (result == true) {
                    this.ComplaintForm.patchValue({ 'is_deleted': true, 'deleted_by': localStorage.getItem('secN'), 'deleted_date': this.frmglobaldataserve.formatDate(new Date()) });
                    this.deleteRecord();
                }
            });
    }
    openParticipantDialog() {
        this.dialogserve.openFormDialog('PersonProfile');
    }
    openComplaineeDialog() {
        this.dialogserve.openFormDialog('PersonProfile', true);
    }
    saveRecord() {
        this.frmglobaldataserve.updateRecord(this.ComplaintForm.value, "PerformanceMgnt/PostComplaintDetail")
            .subscribe((response) => {
            console.log("Record Saved Successfully: " + response);
            this.router.navigateByUrl("pages/performance/complaints-center/" + response).then(x => {
                this.initData(),
                    this.frmglobaldataserve.openSnackBar();
            }, (error) => {
                console.log("Error Saving the record: " + JSON.stringify(this.ComplaintForm.value));
            });
        });
    }
    deleteRecord() {
        this.frmglobaldataserve.updateRecord(this.ComplaintForm.value, "PerformanceMgnt/PostComplaintDetail")
            .subscribe((response) => {
            console.log("Record Deleted Successfully: " + response);
            this.router.navigateByUrl("pages/performance/complaints-center/list");
        }, (error) => {
            console.log("Error Deleting the Record: " + JSON.stringify(this.ComplaintForm.value));
        });
    }
}
ComplaintsEntryComponent.??fac = function ComplaintsEntryComponent_Factory(t) { return new (t || ComplaintsEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ComplaintsEntryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ComplaintsEntryComponent, selectors: [["ngx-complaints-entry"]], decls: 3, vars: 1, consts: [[3, "appcrudbtnclick"], [1, "container"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], ["appearance", "fill", 2, "width", "100%"], ["formControlName", "officeId", "matNativeControl", "", "required", ""], [3, "ngValue"], ["nbButton", "", "status", "success", 2, "float", "right", 3, "click"], ["icon", "search-outline"], [1, "col-sm-4"], ["formControlName", "complaintName", "type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Full Name"], ["formControlName", "typeOfComplaint", "matNativeControl", "", "required", ""], ["formControlName", "complaineeName", "type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Full Name"], ["placeholder", "...", "type", "text", "nbInput", "", "fullWidth", "", "formControlName", "emailAddressComplainant"], ["placeholder", "...", "type", "text", "nbInput", "", "fullWidth", "", "formControlName", "emailAddressSupervisor"]], template: function ComplaintsEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "axl-app-crud", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("appcrudbtnclick", function ComplaintsEntryComponent_Template_axl_app_crud_appcrudbtnclick_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ComplaintsEntryComponent_form_2_Template, 290, 102, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ComplaintForm);
    } }, directives: [_shared_component_app_crud_app_crud_component__WEBPACK_IMPORTED_MODULE_6__["AppCrudComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_11__["AppLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["nb-card-header[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: aliceblue;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ninput[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin-top: .5rem;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: .5em;\n}\n\nth[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #1e90ff;\n  color: white;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZm9ybWFuY2UvY29tcGxhaW50cy1jZW50ZXIvY29tcGxhaW50cy1lbnRyeS9jb21wbGFpbnRzLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVE7QUFDVjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF3QjtFQUN4QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQW1CLHlCQUF5QjtBQUU1QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmZvcm1hbmNlL2NvbXBsYWludHMtY2VudGVyL2NvbXBsYWludHMtZW50cnkvY29tcGxhaW50cy1lbnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG59XHJcblxyXG5uYi1jYXJke1xyXG4gIG1hcmdpbjowO1xyXG59XHJcblxyXG5pbnB1dCxuYi1zZWxlY3QsdGV4dGFyZWEge1xyXG4gIG1hcmdpbi10b3A6IC41cmVtO1xyXG59XHJcblxyXG50aCx0ZHtcclxuICBwYWRkaW5nLWxlZnQ6LjVlbTtcclxufVxyXG5cclxudGgge1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMWU5MGZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcblxyXG5cclxuLy8gbmItdGFic2V0ICB7IG92ZXJmbG93LXg6IGF1dG87IG92ZXJmbG93LXk6IGhpZGRlbjsgfVxyXG5cclxuLy8gOmhvc3QgOjpuZy1kZWVwIG5neC10YWIxLCA6aG9zdCA6Om5nLWRlZXAgbmd4LXRhYjIge1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuLy8gfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ComplaintsEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-complaints-entry',
                templateUrl: './complaints-entry.component.html',
                styleUrls: ['./complaints-entry.component.scss']
            }]
    }], function () { return [{ type: app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }, { type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/performance/complaints-center/complaints-list/complaints-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/performance/complaints-center/complaints-list/complaints-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComplaintsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsListComponent", function() { return ComplaintsListComponent; });
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





















function ComplaintsListComponent_axl_app_loader_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "axl-app-loader");
} }
function ComplaintsListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Complaint ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ComplaintsListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const erow_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", erow_r13.complaintId, " ");
} }
function ComplaintsListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Office ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ComplaintsListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const erow_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", erow_r14.officeId, " ");
} }
function ComplaintsListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Complaint Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ComplaintsListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const erow_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", erow_r15.complaintName, " ");
} }
function ComplaintsListComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Type of Complaint ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ComplaintsListComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const erow_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", erow_r16.typeOfComplaint, " ");
} }
function ComplaintsListComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 21);
} }
function ComplaintsListComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ComplaintsListComponent_tr_31_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19); const row_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r18.onUserRowSelect(row_r17.complaintId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function () { return [5, 10, 15]; };
class ComplaintsListComponent {
    constructor(router, frmglobaldataserve, dialog) {
        this.router = router;
        this.frmglobaldataserve = frmglobaldataserve;
        this.dialog = dialog;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "PerformanceMgnt/";
        this.displayedColumns = ['complaintId', 'officeId', 'complaintName', 'typeOfComplaint'];
        this.gridDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.complaintList = [];
    }
    set matPaginator(mp) {
        this.paginator = mp;
        this.gridDataSource;
    }
    ngOnInit() {
        this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
        this.refreshTheList();
    }
    eventHandler(btnevent) {
        if (btnevent == "Refresh") {
            this.refreshTheList();
        }
        else if (btnevent == "Add") {
            this.router.navigateByUrl("pages/performance/complaints-center/" + 0);
        }
    }
    onUserRowSelect(id) {
        this.router.navigateByUrl("pages/performance/complaints-center/" + id);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
    refreshTheList() {
        var urlstr = this.baseUrl + 'GetComplaintList/';
        this.frmglobaldataserve.setLoadingProgressBar(true);
        this.frmglobaldataserve.loadList(urlstr)
            .subscribe((res) => {
            this.complaintList = res;
            this.gridDataSource.data = res;
            this.frmglobaldataserve.setLoadingProgressBar(false);
        }, () => { });
    }
}
ComplaintsListComponent.??fac = function ComplaintsListComponent_Factory(t) { return new (t || ComplaintsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_5__["FormGlobalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
ComplaintsListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ComplaintsListComponent, selectors: [["ngx-complaints-list"]], viewQuery: function ComplaintsListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.matPaginator = _t.first);
    } }, decls: 33, vars: 8, consts: [[3, "applistbtnclick"], [1, "container"], ["label", "List"], [4, "ngIf"], ["appearance", "standard", 2, "float", "right", "width", "100%"], ["matInput", "", "placeholder", "Search..", 3, "keyup"], ["input", ""], ["matSuffix", ""], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["table", ""], ["matColumnDef", "complaintId"], ["mat-header-cell", "", "mat-sort-header", "", "style", "width: 230px;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "officeId"], ["matColumnDef", "complaintName"], ["matColumnDef", "typeOfComplaint"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 2, "width", "230px"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function ComplaintsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "axl-app-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("applistbtnclick", function ComplaintsListComponent_Template_axl_app_list_applistbtnclick_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Complaints Center ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ComplaintsListComponent_axl_app_loader_7_Template, 1, 0, "axl-app-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function ComplaintsListComponent_Template_input_keyup_12_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "table", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ComplaintsListComponent_th_19_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ComplaintsListComponent_td_20_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](21, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ComplaintsListComponent_th_22_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ComplaintsListComponent_td_23_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](24, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ComplaintsListComponent_th_25_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ComplaintsListComponent_td_26_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](27, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ComplaintsListComponent_th_28_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ComplaintsListComponent_td_29_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, ComplaintsListComponent_tr_30_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ComplaintsListComponent_tr_31_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 5, ctx.showLoadingProgressBar$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.gridDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c0));
    } }, directives: [_shared_component_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_7__["AppListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_14__["AppLoaderComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["input[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%] {\n  margin-top: .5rem;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: .5em;\n}\n\nth[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #1e90ff;\n  color: white;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nnb-card-header[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: aliceblue;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  \n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.button1[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #4CAF50;\n}\n\n.button1[_ngcontent-%COMP%]:hover {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.processBar[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZm9ybWFuY2UvY29tcGxhaW50cy1jZW50ZXIvY29tcGxhaW50cy1saXN0L2NvbXBsYWludHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGtCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF3QjtFQUN4QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3ZCOztBQUVFO0VBQW1CLHlCQUF5QjtBQUU5Qzs7QUFERTtFQUFTLGVBQWM7QUFLekI7O0FBRkU7RUFDSSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBS3RCOztBQUZFO0VBQ0kseUJBQXlCO0VBQUUsVUFBQTtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0FBTXJCOztBQUhJO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix5QkFBeUI7QUFNL0I7O0FBSEk7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQU1sQjs7QUFISTtFQUNFLG1CQUFtQjtBQU16QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmZvcm1hbmNlL2NvbXBsYWludHMtY2VudGVyL2NvbXBsYWludHMtbGlzdC9jb21wbGFpbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCxuYi1zZWxlY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIHRoLHRke1xyXG4gICAgcGFkZGluZy1sZWZ0Oi41ZW07XHJcbiAgfVxyXG4gIFxyXG4gIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWU5MGZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gIHRyOmhvdmVye2N1cnNvcjpwb2ludGVyO31cclxuICBcclxuICBcclxuICBuYi1jYXJkLWhlYWRlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTsgXHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnV0dG9uMSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxuICAgICAgY29sb3I6IGJsYWNrOyBcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzRDQUY1MDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ1dHRvbjE6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9jZXNzQmFye1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ComplaintsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-complaints-list',
                templateUrl: './complaints-list.component.html',
                styleUrls: ['./complaints-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_5__["FormGlobalDataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, { matPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=complaints-center-complaints-center-module-es2015.js.map