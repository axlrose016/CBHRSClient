(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "./src/app/auth/auth-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
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


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/auth/login/login.component.ts");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register/register.component */
      "./src/app/auth/register/register.component.ts");

      var routes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthRoutingModule, [{
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
    "./src/app/auth/auth.module.ts":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthModule */

    /***/
    function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
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


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-routing.module */
      "./src/app/auth/auth-routing.module.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/auth/login/login.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/shared-material/shared-material.module */
      "./src/app/shared/shared-material/shared-material.module.ts");
      /* harmony import */


      var app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/component/shared-component.module */
      "./src/app/shared/component/shared-component.module.ts");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthModule
      });
      AuthModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_10__["SharedComponentModule"], app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["SharedMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_10__["SharedComponentModule"], app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["SharedMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], app_shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_10__["SharedComponentModule"], app_shared_shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["SharedMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/login/login.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent, MyErrorStateMatcher */

    /***/
    function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
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


      var app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/service/auth.service */
      "./src/app/shared/service/auth.service.ts");
      /* harmony import */


      var app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/service/formGlobalData.service */
      "./src/app/shared/service/formGlobalData.service.ts");
      /* harmony import */


      var app_shared_service_library_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/service/library.service */
      "./src/app/shared/service/library.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shared/component/app-loader/app-loader.component */
      "./src/app/shared/component/app-loader/app-loader.component.ts");

      function LoginComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter your new password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LoginComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Passwords do not match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LoginComponent_axl_app_loader_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "axl-app-loader");
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, libraryserve, authserv, router, frmglobalserv) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.libraryserve = libraryserve;
          this.authserv = authserv;
          this.router = router;
          this.frmglobalserv = frmglobalserv;
          this.hide = true;
          this.hideRegister = true;
          this.matcher = new MyErrorStateMatcher();
          this.signInForm = this.fb.group({
            Username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.registerForm = this.fb.group({
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validators: this.checkPasswords
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var el = document.getElementById('nb-global-spinner');

            if (el) {
              el.style['display'] = 'none';
            }

            this.error$ = this.authserv.err$;
            this.showLoadingProgressBar$ = this.authserv.showLoadingProgressBar$;
          }
        }, {
          key: "checkPasswords",
          value: function checkPasswords(group) {
            var _password = group.get('password').value;
            var _confirmPassword = group.get('confirmPassword').value;
            return _password === _confirmPassword ? true : {
              notSame: true
            };
          }
        }, {
          key: "signIn",
          value: function signIn() {
            if (this.signInForm.valid) this.authserv.login(this.signInForm.value);
          }
        }, {
          key: "register",
          value: function register() {
            var _this = this;

            if (this.registerForm.valid) {
              ;
              this.authserv.showLoadingProgressBar$.next(true);
              this.frmglobalserv.updateRecordWOToken(this.registerForm.value, 'User/PostUser').subscribe(function (response) {
                _this.authserv.showLoadingProgressBar$.next(false);

                _this.authserv.err$.next(null);

                _this.frmglobalserv.openSnackBar();

                _this.showRegisterForm();
              }, function (error) {
                if (error.status == "409") {
                  _this.authserv.showLoadingProgressBar$.next(false);

                  _this.authserv.err$.next("User Name already exist, Please try another.");
                } else {
                  _this.authserv.showLoadingProgressBar$.next(false);

                  _this.authserv.err$.next("Connection error, Please check your network or the server may be down.");
                }
              });
            }
          }
        }, {
          key: "showRegisterForm",
          value: function showRegisterForm() {
            this.hideRegister = this.hideRegister == false ? true : false;
            this.authserv.err$.next(null);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.authserv.logout();
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_shared_service_library_service__WEBPACK_IMPORTED_MODULE_5__["LibraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["ngx-login"]],
        decls: 70,
        vars: 25,
        consts: [[1, "bg"], [1, "header", "col-sm-4"], ["id", "a1", 1, "col-sm-4"], ["id", "a2", 1, "col-sm-4"], [1, "title"], [3, "hidden"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "mat-fullWidth"], ["formControlName", "Username", "matInput", "", "type", "text"], ["formControlName", "Password", "matInput", "", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["id", "a3"], ["href", ""], [1, "mat-fullWidth"], ["mat-raised-button", "", "color", "primary", "id", "a4", 1, "mat-fullWidth"], ["mat-raised-button", "", "color", "primary", "id", "a4", 1, "mat-fullWidth", 3, "click"], ["formControlName", "userName", "matInput", "", "type", "text"], ["formControlName", "password", "matInput", "", 3, "type"], [4, "ngIf"], ["formControlName", "confirmPassword", "matInput", "", 3, "type", "errorStateMatcher"], ["id", "a_link", 3, "click"], [2, "color", "red"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "loud-based ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " HR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "S");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "ystem ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_16_listener() {
              return ctx.signIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "User name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_25_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "small", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_34_listener() {
              return ctx.showRegisterForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_37_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "User name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, LoginComponent_mat_error_46_Template, 2, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_47_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, LoginComponent_mat_error_54_Template, 2, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_55_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_a_click_59_listener() {
              return ctx.showRegisterForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "small", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Already have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, LoginComponent_axl_app_loader_64_Template, 1, 0, "axl-app-loader", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](65, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](69, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.hideRegister);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.signInForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.hideRegister);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.hasError("required", "_password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hide ? "password" : "text")("errorStateMatcher", ctx.matcher);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.hasError("notSame"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](65, 21, ctx.showLoadingProgressBar$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](69, 23, ctx.error$));
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutColumnComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _shared_component_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_12__["AppLoaderComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
        styles: [".bg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/assets/images/doh_office.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.mat-fullWidth[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 2%;\n}\n\n#a1[_ngcontent-%COMP%] {\n  height: 35%;\n  background-color: white;\n  text-align: center;\n  background-image: url(\"/assets/images/DOHLogo.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 200px 200px;\n}\n\n#a2[_ngcontent-%COMP%] {\n  height: 63%;\n  background-color: white;\n}\n\n#a3[_ngcontent-%COMP%] {\n  text-align: right;\n  font-style: italic;\n  color: #0c81ff;\n}\n\n#a4[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\ndiv.title[_ngcontent-%COMP%] {\n  font-size: 150%;\n  text-align: center;\n  padding-bottom: 1em;\n}\n\n#a_link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0RBQXNEO0VBQ3RELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSx1QkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7QUFDZDs7QUFFQTtFQUNJLFdBQVc7RUFFWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1EQUFtRDtFQUNuRCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUFoQzs7QUFHQTtFQUNJLFdBQVc7RUFFWCx1QkFBdUI7QUFEM0I7O0FBSUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFEbEI7O0FBSUE7RUFDSSxjQUFjO0FBRGxCOztBQUlBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBa0I7QUFEdEI7O0FBSUE7RUFDSSxlQUFlO0VBQ2YsMEJBQTBCO0FBRDlCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9kb2hfb2ZmaWNlLnBuZycpOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWZ1bGxXaWR0aHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMiU7XHJcbn1cclxuXHJcbiNhMXtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL0RPSExvZ28ucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAyMDBweDtcclxuICAgIFxyXG59XHJcbiNhMntcclxuICAgIGhlaWdodDogNjMlO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTEzLCAxMTMsIDAuOCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2Eze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogIzBjODFmZjtcclxufVxyXG5cclxuI2E0e1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbmRpdi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxZW07XHJcbn1cclxuXHJcbiNhX2xpbms6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_service_library_service__WEBPACK_IMPORTED_MODULE_5__["LibraryService"]
          }, {
            type: app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_service_formGlobalData_service__WEBPACK_IMPORTED_MODULE_4__["FormGlobalDataService"]
          }];
        }, null);
      })();

      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
            var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
            return invalidCtrl || invalidParent;
          }
        }]);

        return MyErrorStateMatcher;
      }();
      /***/

    },

    /***/
    "./src/app/auth/register/register.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/auth/register/register.component.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent() {
          _classCallCheck(this, RegisterComponent);
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var el = document.getElementById('nb-global-spinner');

            if (el) {
              el.style['display'] = 'none';
            }
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.??fac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)();
      };

      RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RegisterComponent,
        selectors: [["ngx-register"]],
        decls: 2,
        vars: 0,
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "register works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map