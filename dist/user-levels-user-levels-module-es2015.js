(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-levels-user-levels-module"],{

/***/ "./src/app/pages/setting/libraries/user-levels/user-level-entry/user-level-entry.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/setting/libraries/user-levels/user-level-entry/user-level-entry.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: UserLevelEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLevelEntryComponent", function() { return UserLevelEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/service/dialog.service */ "./src/app/shared/service/dialog.service.ts");
/* harmony import */ var app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/service/formGlobalData.service */ "./src/app/shared/service/formGlobalData.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_component_app_crud_app_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/component/app-crud/app-crud.component */ "./src/app/shared/component/app-crud/app-crud.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/component/app-loader/app-loader.component */ "./src/app/shared/component/app-loader/app-loader.component.ts");















function UserLevelEntryComponent_form_2_axl_app_loader_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "axl-app-loader");
} }
function UserLevelEntryComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UserLevelEntryComponent_form_2_axl_app_loader_2_Template, 1, 0, "axl-app-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " User Level Form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "nb-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.UserLevelForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 2, ctx_r0.showLoadingProgressBar$));
} }
class UserLevelEntryComponent {
    constructor(fb, frmglobaldataserve, dialogserve, route, router) {
        this.fb = fb;
        this.frmglobaldataserve = frmglobaldataserve;
        this.dialogserve = dialogserve;
        this.route = route;
        this.router = router;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "Library/";
        this.curRecordId = 0;
    }
    ngOnInit() {
        this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
        this.frmglobaldataserve.setLoadingProgressBar(true);
        this.initData();
        this.frmglobaldataserve.setLoadingProgressBar(false);
    }
    initData() {
        this.curRecordId = +this.route.snapshot.params['id'];
        if (this.curRecordId != 0) {
            this.getUserLevel();
        }
        else {
            this.buildUserLevelDetail();
        }
    }
    getUserLevel() {
        this.frmglobaldataserve.getRecord("Library/GetUserLevel?id=" + this.curRecordId)
            .subscribe((data) => {
            this.userLevelDetail = data;
            this.buildUserLevelDetail(this.userLevelDetail);
        });
    }
    buildUserLevelDetail(userLevelDetail) {
        this.UserLevelForm = this.fb.group({
            userLevelId: [userLevelDetail ? userLevelDetail.userLevelId : 0],
            description: [userLevelDetail ? userLevelDetail.description : ''],
            user_group_id: [userLevelDetail ? userLevelDetail.user_group_id : 0],
            is_active: [userLevelDetail ? userLevelDetail.is_active : true]
        });
    }
    eventHandler(btnclick) {
        if (btnclick == "Save") {
            if (this.UserLevelForm.valid)
                this.saveRecord();
        }
        else if (btnclick == "Delete") {
            this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
                .afterClosed().subscribe(result => {
                if (result == true) {
                    this.UserLevelForm.patchValue({ 'is_deleted': true, 'deleted_by': 'Axl', 'deleted_date': this.formatDate(new Date()) });
                    this.deleteRecord();
                }
            });
        }
    }
    deleteRecord() {
        this.frmglobaldataserve.updateRecord(this.UserLevelForm.value, "Library/PostUserLevel")
            .subscribe((response) => {
            console.log("Record Deleted Successfully: " + response);
            this.router.navigateByUrl("pages/settings/libraries/user-levels/list");
        }, (error) => {
            console.log("Error Deleting the Record: " + JSON.stringify(this.UserLevelForm.value));
        });
    }
    saveRecord() {
        this.frmglobaldataserve.updateRecord(this.UserLevelForm.value, "Library/PostUserLevel")
            .subscribe((response) => {
            this.router.navigateByUrl("pages/settings/libraries/user-levels/" + response).then(x => {
                this.initData(),
                    this.frmglobaldataserve.openSnackBar();
            }, (error) => {
                console.log("Error saving the Record: " + JSON.stringify(this.UserLevelForm.value));
            });
        });
    }
    formatDate(date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
}
UserLevelEntryComponent.??fac = function UserLevelEntryComponent_Factory(t) { return new (t || UserLevelEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserLevelEntryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserLevelEntryComponent, selectors: [["ngx-user-level-entry"]], decls: 3, vars: 1, consts: [[3, "appcrudbtnclick"], [1, "container"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [4, "ngIf"], [1, "row"], [1, "col-sm-10"], [1, "form-group"], ["formControlName", "description", "type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Description"], [1, "col-sm-2"], ["status", "basic", "formControlName", "is_active", 2, "float", "right"]], template: function UserLevelEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "axl-app-crud", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("appcrudbtnclick", function UserLevelEntryComponent_Template_axl_app_crud_appcrudbtnclick_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UserLevelEntryComponent_form_2_Template, 16, 4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.UserLevelForm);
    } }, directives: [_shared_component_app_crud_app_crud_component__WEBPACK_IMPORTED_MODULE_6__["AppCrudComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCheckboxComponent"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_9__["AppLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["nb-card-header[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: aliceblue;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ninput[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%] {\n  margin-top: .5rem;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: .5em;\n}\n\nth[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #1e90ff;\n  color: white;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZy9saWJyYXJpZXMvdXNlci1sZXZlbHMvdXNlci1sZXZlbC1lbnRyeS91c2VyLWxldmVsLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVE7QUFDVjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF3QjtFQUN4QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQW1CLHlCQUF5QjtBQUU1QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvbGlicmFyaWVzL3VzZXItbGV2ZWxzL3VzZXItbGV2ZWwtZW50cnkvdXNlci1sZXZlbC1lbnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG59XHJcblxyXG5uYi1jYXJke1xyXG4gIG1hcmdpbjowO1xyXG59XHJcblxyXG5pbnB1dCxuYi1zZWxlY3Qge1xyXG4gIG1hcmdpbi10b3A6IC41cmVtO1xyXG59XHJcblxyXG50aCx0ZHtcclxuICBwYWRkaW5nLWxlZnQ6LjVlbTtcclxufVxyXG5cclxudGgge1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMWU5MGZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcblxyXG5cclxuLy8gbmItdGFic2V0ICB7IG92ZXJmbG93LXg6IGF1dG87IG92ZXJmbG93LXk6IGhpZGRlbjsgfVxyXG5cclxuLy8gOmhvc3QgOjpuZy1kZWVwIG5neC10YWIxLCA6aG9zdCA6Om5nLWRlZXAgbmd4LXRhYjIge1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuLy8gfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserLevelEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-user-level-entry',
                templateUrl: './user-level-entry.component.html',
                styleUrls: ['./user-level-entry.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"] }, { type: app_shared_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/setting/libraries/user-levels/user-level-list/user-level-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/setting/libraries/user-levels/user-level-list/user-level-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: UserLevelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLevelListComponent", function() { return UserLevelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/service/formGlobalData.service */ "./src/app/shared/service/formGlobalData.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_component_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/component/app-list/app-list.component */ "./src/app/shared/component/app-list/app-list.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/component/app-loader/app-loader.component */ "./src/app/shared/component/app-loader/app-loader.component.ts");

















function UserLevelListComponent_axl_app_loader_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "axl-app-loader");
} }
function UserLevelListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " User Level ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UserLevelListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const erow_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", erow_r10.userLevelId, " ");
} }
function UserLevelListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UserLevelListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const erow_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", erow_r11.description, " ");
} }
function UserLevelListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UserLevelListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const erow_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](erow_r12.is_active);
} }
function UserLevelListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 15);
} }
function UserLevelListComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserLevelListComponent_tr_21_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const row_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r14.onUserRowSelect(row_r13.userLevelId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function () { return [5, 10, 15]; };
class UserLevelListComponent {
    constructor(router, frmglobaldataserve, dialog) {
        this.router = router;
        this.frmglobaldataserve = frmglobaldataserve;
        this.dialog = dialog;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "Library/";
        this.displayedColumns = ['userLevelId', 'description', 'is_active'];
        this.gridDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.userLevelList = [];
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
        var urlstr = this.baseUrl + 'GetAllUserLevel/';
        this.frmglobaldataserve.setLoadingProgressBar(true);
        this.frmglobaldataserve.loadList(urlstr)
            .subscribe((res) => {
            this.userLevelList = res;
            this.gridDataSource.data = res;
            this.frmglobaldataserve.setLoadingProgressBar(false);
        }, () => { });
    }
    eventHandler(btnevent) {
        if (btnevent == "Refresh") {
            console.log("Refresh");
            this.refreshTheList();
        }
        else if (btnevent == "Add") {
            console.log("Add");
            this.router.navigateByUrl("pages/settings/libraries/user-levels/" + 0);
        }
    }
    onUserRowSelect(id) {
        this.router.navigateByUrl("pages/settings/libraries/user-levels/" + id);
    }
}
UserLevelListComponent.??fac = function UserLevelListComponent_Factory(t) { return new (t || UserLevelListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_5__["FormGlobalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
UserLevelListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserLevelListComponent, selectors: [["ngx-user-level-list"]], viewQuery: function UserLevelListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.matPaginator = _t.first);
    } }, decls: 23, vars: 8, consts: [[3, "applistbtnclick"], [1, "container"], [4, "ngIf"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["table", ""], ["matColumnDef", "userLevelId"], ["mat-header-cell", "", "mat-sort-header", "", "style", "width: 230px;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "is_active"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 2, "width", "230px"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function UserLevelListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "axl-app-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("applistbtnclick", function UserLevelListComponent_Template_axl_app_list_applistbtnclick_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " User Levels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UserLevelListComponent_axl_app_loader_6_Template, 1, 0, "axl-app-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, UserLevelListComponent_th_12_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, UserLevelListComponent_td_13_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, UserLevelListComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, UserLevelListComponent_td_16_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, UserLevelListComponent_th_18_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, UserLevelListComponent_td_19_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, UserLevelListComponent_tr_20_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, UserLevelListComponent_tr_21_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 5, ctx.showLoadingProgressBar$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.gridDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c0));
    } }, directives: [_shared_component_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_7__["AppListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_10__["AppLoaderComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["input[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%] {\n  margin-top: .5rem;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: .5em;\n}\n\nth[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #1e90ff;\n  color: white;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nnb-card-header[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: aliceblue;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  \n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.button1[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #4CAF50;\n}\n\n.button1[_ngcontent-%COMP%]:hover {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.processBar[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZy9saWJyYXJpZXMvdXNlci1sZXZlbHMvdXNlci1sZXZlbC1saXN0L3VzZXItbGV2ZWwtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGtCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF3QjtFQUN4QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3ZCOztBQUVFO0VBQW1CLHlCQUF5QjtBQUU5Qzs7QUFERTtFQUFTLGVBQWM7QUFLekI7O0FBRkU7RUFDSSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBS3RCOztBQUZFO0VBQ0kseUJBQXlCO0VBQUUsVUFBQTtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0FBTXJCOztBQUhJO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix5QkFBeUI7QUFNL0I7O0FBSEk7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQU1sQjs7QUFISTtFQUNFLG1CQUFtQjtBQU16QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvbGlicmFyaWVzL3VzZXItbGV2ZWxzL3VzZXItbGV2ZWwtbGlzdC91c2VyLWxldmVsLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCxuYi1zZWxlY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIHRoLHRke1xyXG4gICAgcGFkZGluZy1sZWZ0Oi41ZW07XHJcbiAgfVxyXG4gIFxyXG4gIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWU5MGZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gIHRyOmhvdmVye2N1cnNvcjpwb2ludGVyO31cclxuICBcclxuICBcclxuICBuYi1jYXJkLWhlYWRlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTsgXHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnV0dG9uMSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxuICAgICAgY29sb3I6IGJsYWNrOyBcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzRDQUY1MDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ1dHRvbjE6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9jZXNzQmFye1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserLevelListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-user-level-list',
                templateUrl: './user-level-list.component.html',
                styleUrls: ['./user-level-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_5__["FormGlobalDataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, { matPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/setting/libraries/user-levels/user-levels-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/setting/libraries/user-levels/user-levels-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: UserLevelsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLevelsRoutingModule", function() { return UserLevelsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_level_entry_user_level_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-level-entry/user-level-entry.component */ "./src/app/pages/setting/libraries/user-levels/user-level-entry/user-level-entry.component.ts");
/* harmony import */ var _user_level_list_user_level_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-level-list/user-level-list.component */ "./src/app/pages/setting/libraries/user-levels/user-level-list/user-level-list.component.ts");






const routes = [
    {
        path: 'list',
        component: _user_level_list_user_level_list_component__WEBPACK_IMPORTED_MODULE_3__["UserLevelListComponent"],
    },
    {
        path: ':id',
        component: _user_level_entry_user_level_entry_component__WEBPACK_IMPORTED_MODULE_2__["UserLevelEntryComponent"],
        pathMatch: 'full'
    }
];
class UserLevelsRoutingModule {
}
UserLevelsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: UserLevelsRoutingModule });
UserLevelsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function UserLevelsRoutingModule_Factory(t) { return new (t || UserLevelsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserLevelsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserLevelsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/setting/libraries/user-levels/user-levels.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/setting/libraries/user-levels/user-levels.module.ts ***!
  \***************************************************************************/
/*! exports provided: UserLevelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLevelsModule", function() { return UserLevelsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_levels_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-levels-routing.module */ "./src/app/pages/setting/libraries/user-levels/user-levels-routing.module.ts");
/* harmony import */ var _user_level_list_user_level_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-level-list/user-level-list.component */ "./src/app/pages/setting/libraries/user-levels/user-level-list/user-level-list.component.ts");
/* harmony import */ var _user_level_entry_user_level_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-level-entry/user-level-entry.component */ "./src/app/pages/setting/libraries/user-levels/user-level-entry/user-level-entry.component.ts");
/* harmony import */ var app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/component/shared-component.module */ "./src/app/shared/component/shared-component.module.ts");
/* harmony import */ var app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/shared-material/shared-material.module */ "./src/app/shared/shared-material/shared-material.module.ts");








class UserLevelsModule {
}
UserLevelsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: UserLevelsModule });
UserLevelsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function UserLevelsModule_Factory(t) { return new (t || UserLevelsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_levels_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserLevelsRoutingModule"],
            app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
            app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserLevelsModule, { declarations: [_user_level_list_user_level_list_component__WEBPACK_IMPORTED_MODULE_3__["UserLevelListComponent"], _user_level_entry_user_level_entry_component__WEBPACK_IMPORTED_MODULE_4__["UserLevelEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_levels_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserLevelsRoutingModule"],
        app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
        app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserLevelsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_level_list_user_level_list_component__WEBPACK_IMPORTED_MODULE_3__["UserLevelListComponent"], _user_level_entry_user_level_entry_component__WEBPACK_IMPORTED_MODULE_4__["UserLevelEntryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _user_levels_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserLevelsRoutingModule"],
                    app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
                    app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=user-levels-user-levels-module-es2015.js.map