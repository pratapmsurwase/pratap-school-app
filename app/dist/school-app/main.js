(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    /* MessagesComponent's private CSS styles */\r\n    h2 {\r\n        color: red;\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-weight: lighter;\r\n      }\r\n    body {\r\n        margin: 2em;\r\n      }\r\n    body, input[text], button {\r\n        color: crimson;\r\n        font-family: Cambria, Georgia;\r\n      }\r\n    button.clear {\r\n        font-family: Arial;\r\n        background-color: #eee;\r\n        border: none;\r\n        padding: 5px 10px;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n        cursor: hand;\r\n      }\r\n    button:hover {\r\n        background-color: #cfd8dc;\r\n      }\r\n    button:disabled {\r\n        background-color: #eee;\r\n        color: #aaa;\r\n        cursor: auto;\r\n      }\r\n    button.clear {\r\n        color: #888;\r\n        margin-bottom: 12px;\r\n      }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">School Data</h1>\n<nav>\n  <a routerLink=\"/admin\" routerLinkActive=\"active\">Admin Login</a>\n  <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n  <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n   <a routerLink=\"/login\" routerLinkActive=\"active\">Individual Login</a>\n  </nav>\n\n<div>\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'school-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _school_school_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./school/school.component */ "./src/app/school/school.component.ts");
/* harmony import */ var _school_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./school/home/home.component */ "./src/app/school/home/home.component.ts");
/* harmony import */ var _school_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./school/contact/contact.component */ "./src/app/school/contact/contact.component.ts");
/* harmony import */ var _school_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./school/admin/admin.component */ "./src/app/school/admin/admin.component.ts");
/* harmony import */ var _user_student_student_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/student/student.component */ "./src/app/user/student/student.component.ts");
/* harmony import */ var _user_standard_standard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/standard/standard.component */ "./src/app/user/standard/standard.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_progressdata_progressdata_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/progressdata/progressdata.component */ "./src/app/user/progressdata/progressdata.component.ts");
/* harmony import */ var _user_student_reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/student/reportcard/reportcard.component */ "./src/app/user/student/reportcard/reportcard.component.ts");
/* harmony import */ var _user_dataadd_dataadd_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/dataadd/dataadd.component */ "./src/app/user/dataadd/dataadd.component.ts");
/* harmony import */ var _user_userdatatedit_userdatatedit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/userdatatedit/userdatatedit.component */ "./src/app/user/userdatatedit/userdatatedit.component.ts");
/* harmony import */ var _user_standard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/standard.service */ "./src/app/user/standard.service.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/admin.guard */ "./src/app/auth/admin.guard.ts");
/* harmony import */ var _auth_admin_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/admin.interceptor */ "./src/app/auth/admin.interceptor.ts");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
/* harmony import */ var _user_taskedit_taskedit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user/taskedit/taskedit.component */ "./src/app/user/taskedit/taskedit.component.ts");
/* harmony import */ var _studentdetail_allstudnet_allstudnet_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./studentdetail/allstudnet/allstudnet.component */ "./src/app/studentdetail/allstudnet/allstudnet.component.ts");
/* harmony import */ var _studentdetail_studentdetail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./studentdetail/studentdetail.component */ "./src/app/studentdetail/studentdetail.component.ts");
/* harmony import */ var _studentdetail_alltask_alltask_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./studentdetail/alltask/alltask.component */ "./src/app/studentdetail/alltask/alltask.component.ts");
/* harmony import */ var _user_taskadd_taskadd_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./user/taskadd/taskadd.component */ "./src/app/user/taskadd/taskadd.component.ts");
/* harmony import */ var _user_taskview_taskview_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/taskview/taskview.component */ "./src/app/user/taskview/taskview.component.ts");
/* harmony import */ var _user_task_task_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user/task/task.component */ "./src/app/user/task/task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                _user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _school_school_component__WEBPACK_IMPORTED_MODULE_7__["SchoolComponent"],
                _school_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _school_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _school_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _user_student_student_component__WEBPACK_IMPORTED_MODULE_11__["StudentComponent"],
                _user_standard_standard_component__WEBPACK_IMPORTED_MODULE_12__["StandardComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _user_progressdata_progressdata_component__WEBPACK_IMPORTED_MODULE_20__["ProgressdataComponent"],
                _user_student_reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_21__["ReportcardComponent"],
                _user_dataadd_dataadd_component__WEBPACK_IMPORTED_MODULE_22__["DataaddComponent"],
                _user_userdatatedit_userdatatedit_component__WEBPACK_IMPORTED_MODULE_23__["UserdatateditComponent"],
                _user_taskedit_taskedit_component__WEBPACK_IMPORTED_MODULE_28__["TaskeditComponent"],
                _studentdetail_allstudnet_allstudnet_component__WEBPACK_IMPORTED_MODULE_29__["AllstudnetComponent"],
                _studentdetail_studentdetail_component__WEBPACK_IMPORTED_MODULE_30__["StudentdetailComponent"],
                _studentdetail_alltask_alltask_component__WEBPACK_IMPORTED_MODULE_31__["AlltaskComponent"],
                _user_taskadd_taskadd_component__WEBPACK_IMPORTED_MODULE_32__["TaskaddComponent"],
                _user_taskview_taskview_component__WEBPACK_IMPORTED_MODULE_33__["TaskviewComponent"],
                _user_task_task_component__WEBPACK_IMPORTED_MODULE_34__["TaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_13__["appRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                    multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                    useClass: _auth_admin_interceptor__WEBPACK_IMPORTED_MODULE_26__["AdminInterceptor"],
                    multi: true },
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AdminGuard"], _shared_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_27__["AdminserviceService"], _user_standard_service__WEBPACK_IMPORTED_MODULE_24__["StandardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/admin.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/admin.guard.ts ***!
  \*************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(userservice, router) {
        this.userservice = userservice;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (!this.userservice.isLoggedIn()) {
            this.router.navigateByUrl('/admin');
            this.userservice.delteToken();
            return false;
        }
        return true;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/admin.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/admin.interceptor.ts ***!
  \*******************************************/
/*! exports provided: AdminInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInterceptor", function() { return AdminInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminInterceptor = /** @class */ (function () {
    function AdminInterceptor(adminService, router, userServise) {
        this.adminService = adminService;
        this.router = router;
        this.userServise = userServise;
    }
    AdminInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('NoAuthAdmin')) {
            var clonederq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userServise.getToken())
            });
            return next.handle(clonederq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { }, function (err) {
                if (err.auth == false) {
                    _this.router.navigateByUrl('/admin');
                }
            }));
        }
        else {
            return next.handle(req.clone());
        }
    };
    AdminInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_adminservice_service__WEBPACK_IMPORTED_MODULE_4__["AdminserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminInterceptor);
    return AdminInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userservice, router) {
        this.userservice = userservice;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.userservice.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.userservice.delteToken();
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth')) {
            var clonederq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonederq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/login');
                }
            }));
        }
        else {
            return next.handle(req.clone());
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/divison/divison.ts":
/*!************************************!*\
  !*** ./src/app/divison/divison.ts ***!
  \************************************/
/*! exports provided: STD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STD", function() { return STD; });
// export const STD: Branch[] = [
//   {standard: 1, branch: { A:'1A', B:'1B', C:'1C', D:'1D' } },
//   {standard: 2, branch:{ A:'2A', B:'2B', C:'2C', D:'2D'}},
//   {standard: 3, branch:{ A:'3A', B:'3B', C:'3C', D:'3D'}},
//   {standard: 4, branch:{ A:'4A', B:'4B', C:'4C', D:'4D'}},
//   {standard: 5, branch:{ A:'5A', B:'5B', C:'5C', D:'5D'}},
//   {standard: 6, branch:{ A:'6A', B:'6B', C:'6C', D:'6D'}},
//   {standard: 7, branch:{ A:'7A', B:'7B', C:'7C', D:'7D'}},
//   {standard: 8, branch:{ A:'8A', B:'8B', C:'8C', D:'8D'}},
//   {standard: 9, branch:{ A:'9A', B:'9B', C:'9C', D:'9D'}},
// ]
var STD = [
    { standard: 1, branch: { A: '1A', B: '1B', C: '1C', D: '1D' } },
    { standard: 2, branch: { A: '2A', B: '2B', C: '2C', D: '2D' } },
    { standard: 3, branch: { A: '3A', B: '3B', C: '3C', D: '3D' } },
    { standard: 4, branch: { A: '4A', B: '4B', C: '4C', D: '4D' } },
    { standard: 5, branch: { A: '5A', B: '5B', C: '5C', D: '5D' } },
    { standard: 6, branch: { A: '6A', B: '6B', C: '6C', D: '6D' } },
    { standard: 7, branch: { A: '7A', B: '7B', C: '7C', D: '7D' } },
    { standard: 8, branch: { A: '8A', B: '8B', C: '8C', D: '8D' } },
    { standard: 9, branch: { A: '9A', B: '9B', C: '9C', D: '9D' } },
    { standard: 10, branch: { A: '10A', B: '10B', C: '10C', D: '10D' } }
];


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- <div class=\"navbar-header\">\n        <a href=\"#\" class=\"navbar-brand\">School</a>\n      </div> -->\n  \n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/admin\">Admin</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/contact\">Contact</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/studentdata\">studentdata</a></li>\n        </ul>\n        <router-outlet></router-outlet>    \n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _user_student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/student/student.component */ "./src/app/user/student/student.component.ts");
/* harmony import */ var _user_standard_standard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/standard/standard.component */ "./src/app/user/standard/standard.component.ts");
/* harmony import */ var _school_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./school/home/home.component */ "./src/app/school/home/home.component.ts");
/* harmony import */ var _school_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./school/contact/contact.component */ "./src/app/school/contact/contact.component.ts");
/* harmony import */ var _school_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./school/admin/admin.component */ "./src/app/school/admin/admin.component.ts");
/* harmony import */ var _user_progressdata_progressdata_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/progressdata/progressdata.component */ "./src/app/user/progressdata/progressdata.component.ts");
/* harmony import */ var _user_student_reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/student/reportcard/reportcard.component */ "./src/app/user/student/reportcard/reportcard.component.ts");
/* harmony import */ var _user_userdatatedit_userdatatedit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/userdatatedit/userdatatedit.component */ "./src/app/user/userdatatedit/userdatatedit.component.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/admin.guard */ "./src/app/auth/admin.guard.ts");
/* harmony import */ var _studentdetail_studentdetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./studentdetail/studentdetail.component */ "./src/app/studentdetail/studentdetail.component.ts");
/* harmony import */ var _studentdetail_allstudnet_allstudnet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./studentdetail/allstudnet/allstudnet.component */ "./src/app/studentdetail/allstudnet/allstudnet.component.ts");
/* harmony import */ var _studentdetail_alltask_alltask_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./studentdetail/alltask/alltask.component */ "./src/app/studentdetail/alltask/alltask.component.ts");
/* harmony import */ var _user_taskadd_taskadd_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/taskadd/taskadd.component */ "./src/app/user/taskadd/taskadd.component.ts");
/* harmony import */ var _user_taskview_taskview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/taskview/taskview.component */ "./src/app/user/taskview/taskview.component.ts");
/* harmony import */ var _user_taskedit_taskedit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/taskedit/taskedit.component */ "./src/app/user/taskedit/taskedit.component.ts");
/* harmony import */ var _user_task_task_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/task/task.component */ "./src/app/user/task/task.component.ts");




















var appRoutes = [
    { path: 'studentdata', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"], children: [
            { path: 'register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'divison', component: _user_standard_standard_component__WEBPACK_IMPORTED_MODULE_5__["StandardComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'standard/:std', component: _user_progressdata_progressdata_component__WEBPACK_IMPORTED_MODULE_9__["ProgressdataComponent"],
                canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'student/:userId', component: _user_userdatatedit_userdatatedit_component__WEBPACK_IMPORTED_MODULE_11__["UserdatateditComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'studentdetail', component: _studentdetail_studentdetail_component__WEBPACK_IMPORTED_MODULE_13__["StudentdetailComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'allstudent', component: _studentdetail_allstudnet_allstudnet_component__WEBPACK_IMPORTED_MODULE_14__["AllstudnetComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'alltasks', component: _studentdetail_alltask_alltask_component__WEBPACK_IMPORTED_MODULE_15__["AlltaskComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'alltasks', component: _studentdetail_alltask_alltask_component__WEBPACK_IMPORTED_MODULE_15__["AlltaskComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'addtasks', component: _user_taskadd_taskadd_component__WEBPACK_IMPORTED_MODULE_16__["TaskaddComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'studenttask/:_id', component: _user_task_task_component__WEBPACK_IMPORTED_MODULE_19__["TaskComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'taskview/:_id', component: _user_taskview_taskview_component__WEBPACK_IMPORTED_MODULE_17__["TaskviewComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'taskedit/:_id', component: _user_taskedit_taskedit_component__WEBPACK_IMPORTED_MODULE_18__["TaskeditComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
            { path: 'taskadd/:_id', component: _user_taskadd_taskadd_component__WEBPACK_IMPORTED_MODULE_16__["TaskaddComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
        ]
    },
    //Path for Individual Login
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'student', component: _user_student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'progress/:userId', component: _user_student_reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_10__["ReportcardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'admin', component: _school_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: 'contact', component: _school_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'home', component: _school_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
];


/***/ }),

/***/ "./src/app/school/admin/admin.component.css":
/*!**************************************************!*\
  !*** ./src/app/school/admin/admin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/school/admin/admin.component.html":
/*!***************************************************!*\
  !*** ./src/app/school/admin/admin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src={{imageadd}}  id=\"icon\" alt=\"User Icon\"/>\n</div>\n<form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n    <input type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Student ID\" \n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\">\n    <!-- <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n      <label class=\"validation-message\">Invalid Student ID.</label>\n    </div> -->\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"password\" required minlength=\"4\">\n    <!-- <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n      <label class=\"validation-message\">Minimum 4 characters.</label>\n    </div> -->\n    <input type=\"submit\" value=\"Sign In\">\n</form>\n\n\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n</div>"

/***/ }),

/***/ "./src/app/school/admin/admin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/school/admin/admin.component.ts ***!
  \*************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(adminService, userService, router) {
        this.adminService = adminService;
        this.userService = userService;
        this.router = router;
        // imageadd = 'http://hyperxchange.com/Inventory/User_login.png';
        this.imageadd = 'https://image.flaticon.com/icons/png/512/295/295128.png';
        this.model = {
            email: '',
            password: ''
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.adminService.adminlogin(form.value).subscribe(function (res) {
            _this.user = res;
            _this.userService.setToken(res['token']);
            _this.router.navigateByUrl('/studentdata');
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/school/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/school/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_adminservice_service__WEBPACK_IMPORTED_MODULE_3__["AdminserviceService"], _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/school/contact/contact.component.css":
/*!******************************************************!*\
  !*** ./src/app/school/contact/contact.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/school/contact/contact.component.html":
/*!*******************************************************!*\
  !*** ./src/app/school/contact/contact.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/school/contact/contact.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/school/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/school/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/school/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/school/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/school/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/school/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/school/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Wel come home</h1>"

/***/ }),

/***/ "./src/app/school/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/school/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/school/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/school/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/school/school.component.css":
/*!*********************************************!*\
  !*** ./src/app/school/school.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/school/school.component.html":
/*!**********************************************!*\
  !*** ./src/app/school/school.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  school works!\n</p>\n"

/***/ }),

/***/ "./src/app/school/school.component.ts":
/*!********************************************!*\
  !*** ./src/app/school/school.component.ts ***!
  \********************************************/
/*! exports provided: SchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolComponent", function() { return SchoolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchoolComponent = /** @class */ (function () {
    function SchoolComponent() {
    }
    SchoolComponent.prototype.ngOnInit = function () {
    };
    SchoolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-school',
            template: __webpack_require__(/*! ./school.component.html */ "./src/app/school/school.component.html"),
            styles: [__webpack_require__(/*! ./school.component.css */ "./src/app/school/school.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SchoolComponent);
    return SchoolComponent;
}());



/***/ }),

/***/ "./src/app/shared/adminservice.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/adminservice.service.ts ***!
  \************************************************/
/*! exports provided: AdminserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminserviceService", function() { return AdminserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AdminserviceService = /** @class */ (function () {
    function AdminserviceService(http) {
        this.http = http;
        this.selectedUser = {
            _id: '',
            userId: '',
            fullName: '',
            email: '',
            password: '',
            DOB: '',
            Address: '',
            ParentPhone1: '',
            ParentPhone2: '',
            Standard: '',
            timestamps: ''
        };
        this.noAutheader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuthAdmin': 'True' }) };
    }
    AdminserviceService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    AdminserviceService.prototype.adminlogin = function (adminCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/adminlogin', adminCredentials, this.noAutheader);
    };
    AdminserviceService.prototype.postUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/register', user, this.noAutheader);
    };
    AdminserviceService.prototype.modifyUser = function (id, userId, fullName, email, DOB, Address, ParentPhone1, ParentPhone2, Standard) {
        var kk = {
            userId: userId,
            fullName: fullName,
            email: email,
            DOB: DOB,
            Address: Address,
            ParentPhone1: ParentPhone1,
            ParentPhone2: ParentPhone2,
            Standard: Standard
        };
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + ("/userUpdate/" + id), kk, this.noAutheader);
    };
    AdminserviceService.prototype.modifyTask = function (_id, userId, fullName, English, Matha, Hindi) {
        var task = {
            userId: userId,
            fullName: fullName,
            English: English,
            Matha: Matha,
            Hindi: Hindi
        };
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + ("/studentTask/" + _id), task, this.noAutheader);
    };
    AdminserviceService.prototype.getIndividualUser = function (_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + ("/userData/" + _id), this.noAutheader);
    };
    AdminserviceService.prototype.getIndividualByUserID = function (userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + ("/userDataUserID/" + userId), this.noAutheader);
    };
    AdminserviceService.prototype.addTask = function (studentId, userId, fullName, English, Matha, Hindi) {
        var studentdat = {
            userId: userId,
            fullName: fullName,
            English: English,
            Matha: Matha,
            Hindi: Hindi
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + ("/studentTask/" + studentId), studentdat, this.noAutheader);
    };
    //get task by Task Id
    AdminserviceService.prototype.getTaskById = function (_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + ("/useridtask/" + _id), this.noAutheader);
    };
    //Get task by studnetID
    AdminserviceService.prototype.getTask = function (taskId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + ("/studentTask/" + taskId), this.noAutheader);
    };
    AdminserviceService.prototype.getDataStandard = function (Standard) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + ("/getStd/" + Standard), this.noAutheader);
    };
    AdminserviceService.prototype.allData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/allusers', this.noAutheader);
    };
    AdminserviceService.prototype.getAllTask = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/getAllTask', this.noAutheader);
    };
    AdminserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminserviceService);
    return AdminserviceService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _divison_divison__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../divison/divison */ "./src/app/divison/divison.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        //  inddata: StudentD = { 
        //     _id:'',
        //   userId:'',
        //   fullName: '',
        //   email: '',
        //    DOB: '',
        //   Address : '',
        //   ParentPhone1 : '',
        //  }
        this.studentData = {
            userId: '',
            fullName: '',
            DateAt: '',
            English: '',
            Matha: '',
            Hindi: ''
        };
        this.noAutheader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    UserService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    //  stData(student: Student ) {
    //   return this.http.post(environment.apiBaseUrl+ '/DataOfStudent', student)
    //  }
    //HTTP methods working as per new code
    UserService.prototype.login = function (authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/login', authCredentials, this.noAutheader);
    };
    UserService.prototype.logout = function () {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/logoutAll', this.noAutheader);
    };
    //HTTP methods working as per new code
    UserService.prototype.userData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/users/me', this.noAutheader);
    };
    //HTTP methods working as per new code
    UserService.prototype.taskData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/studentTask');
    };
    UserService.prototype.getnewStandard = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_divison_divison__WEBPACK_IMPORTED_MODULE_4__["STD"]);
    };
    //Helper Methods
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.delteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else {
            return null;
        }
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload) {
            return userPayload.exp > Date.now() / 1000;
        }
        else {
            false;
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/studentdetail/allstudnet/allstudnet.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/studentdetail/allstudnet/allstudnet.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/studentdetail/allstudnet/allstudnet.component.html":
/*!********************************************************************!*\
  !*** ./src/app/studentdetail/allstudnet/allstudnet.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table\">\n        <thead class=\"thead-dark\">  \n <th>Student Progress Data</th>\n           <tr>\n          <th>UserId</th>\n          <th>Name of Student</th>\n          <th>Email Address</th>\n          <th>Standard</th>\n          <th>Creation Date</th>\n          <th>Date Of Birth</th>\n          <th>Address</th>\n          <th>ParentPhone1</th>\n          <th>ParentPhone2</th>\n          <th>Updated</th>\n          </tr>\n         </thead>\n          <tbody>\n          <tr *ngFor=\"let user of users\">\n          <td>{{user.userId}}</td>\n          <td>{{user.fullName}}</td>\n          <td>{{user.email}}</td> \n          <td>{{user.Standard}}\n          <td>{{user.createdAt}}</td> \n          <td>{{user.DOB}}</td> \n          <td>{{user.Address}}</td>\n          <td>{{user.ParentPhone1}}</td>\n          <td>{{user.ParentPhone2}}</td>\n          <td>{{user.updatedAt}}</td>\n               </tr>\n      </tbody> \n      </table>\n </div>\n   <button class=\"btn btn-primary\" (click)=\"goBack()\">go back</button>"

/***/ }),

/***/ "./src/app/studentdetail/allstudnet/allstudnet.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/studentdetail/allstudnet/allstudnet.component.ts ***!
  \******************************************************************/
/*! exports provided: AllstudnetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllstudnetComponent", function() { return AllstudnetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllstudnetComponent = /** @class */ (function () {
    function AllstudnetComponent(adminService, location) {
        this.adminService = adminService;
        this.location = location;
    }
    AllstudnetComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AllstudnetComponent.prototype.getData = function () {
        var _this = this;
        this.adminService.allData().subscribe(function (res) {
            _this.users = res;
        });
    };
    AllstudnetComponent.prototype.goBack = function () {
        this.location.back();
    };
    AllstudnetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allstudnet',
            template: __webpack_require__(/*! ./allstudnet.component.html */ "./src/app/studentdetail/allstudnet/allstudnet.component.html"),
            styles: [__webpack_require__(/*! ./allstudnet.component.css */ "./src/app/studentdetail/allstudnet/allstudnet.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_adminservice_service__WEBPACK_IMPORTED_MODULE_1__["AdminserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AllstudnetComponent);
    return AllstudnetComponent;
}());



/***/ }),

/***/ "./src/app/studentdetail/alltask/alltask.component.css":
/*!*************************************************************!*\
  !*** ./src/app/studentdetail/alltask/alltask.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/studentdetail/alltask/alltask.component.html":
/*!**************************************************************!*\
  !*** ./src/app/studentdetail/alltask/alltask.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table\">\n        <thead class=\"thead-dark\">  \n <th>Student Progress Data</th>\n           <tr>\n          <th>Student Id</th>\n          <th>User Id</th>\n          <th>Student Name</th>\n          <th>Creation Date</th>\n          <th>English</th>\n          <th>Mathamatics</th>\n          <th>Hindi</th>\n          <th>Updated</th>\n          </tr>\n         </thead>\n          <tbody>\n          <tr *ngFor=\"let user of users\">\n           <td>{{user.studentId}}</td>\n           <td>{{user.userId}}</td>\n           <td>{{user.fullName}}</td>\n          <td>{{user.createdAt}}</td> \n          <td>{{user.English}}</td> \n          <td>{{user.Matha}}</td>\n          <td>{{user.Hindi}}</td>\n          <td>{{user.updatedAt}}</td>\n               </tr>\n      </tbody> \n      </table>\n </div>\n   <button class=\"btn btn-primary\" (click)=\"goBack()\">go back</button>\n\n"

/***/ }),

/***/ "./src/app/studentdetail/alltask/alltask.component.ts":
/*!************************************************************!*\
  !*** ./src/app/studentdetail/alltask/alltask.component.ts ***!
  \************************************************************/
/*! exports provided: AlltaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlltaskComponent", function() { return AlltaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlltaskComponent = /** @class */ (function () {
    function AlltaskComponent(adminService, location) {
        this.adminService = adminService;
        this.location = location;
    }
    AlltaskComponent.prototype.ngOnInit = function () {
        this.gettaskAll();
    };
    AlltaskComponent.prototype.gettaskAll = function () {
        var _this = this;
        this.adminService.getAllTask().subscribe(function (res) {
            _this.users = res;
        });
    };
    AlltaskComponent.prototype.goBack = function () {
        this.location.back();
    };
    AlltaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alltask',
            template: __webpack_require__(/*! ./alltask.component.html */ "./src/app/studentdetail/alltask/alltask.component.html"),
            styles: [__webpack_require__(/*! ./alltask.component.css */ "./src/app/studentdetail/alltask/alltask.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_adminservice_service__WEBPACK_IMPORTED_MODULE_1__["AdminserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AlltaskComponent);
    return AlltaskComponent;
}());



/***/ }),

/***/ "./src/app/studentdetail/studentdetail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/studentdetail/studentdetail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/studentdetail/studentdetail.component.html":
/*!************************************************************!*\
  !*** ./src/app/studentdetail/studentdetail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n \n  <nav>\n      <h1 class=\"title\">Well come to Studnet Data</h1>\n    <a routerLink=\"/studentdata/allstudent\" routerLinkActive=\"active\">All Student Data</a>\n    <a routerLink=\"/studentdata/alltasks\" routerLinkActive=\"active\">All Task Data</a>\n   </nav>\n  \n  <div>\n      <router-outlet></router-outlet>\n  </div>\n \n   \n   "

/***/ }),

/***/ "./src/app/studentdetail/studentdetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/studentdetail/studentdetail.component.ts ***!
  \**********************************************************/
/*! exports provided: StudentdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentdetailComponent", function() { return StudentdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentdetailComponent = /** @class */ (function () {
    function StudentdetailComponent() {
    }
    StudentdetailComponent.prototype.ngOnInit = function () {
    };
    StudentdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-studentdetail',
            template: __webpack_require__(/*! ./studentdetail.component.html */ "./src/app/studentdetail/studentdetail.component.html"),
            styles: [__webpack_require__(/*! ./studentdetail.component.css */ "./src/app/studentdetail/studentdetail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentdetailComponent);
    return StudentdetailComponent;
}());



/***/ }),

/***/ "./src/app/user/dataadd/dataadd.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/dataadd/dataadd.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/dataadd/dataadd.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/dataadd/dataadd.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n        <div class=\"card-body\">\n          <form [formGroup]=\"studentForm\"> \n                <div class=\"form-group\">\n                        <label class=\"col-md-4\">Student ID</label>\n                <input type=\"text\" class=\"form-control\"  formControlName=\"_id\" #_id  [(ngModel)] = \"studentData._id\" />\n                          </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-4\">User ID</label>\n      <input type=\"text\" class=\"form-control\"  formControlName=\"userId\" #userId  [(ngModel)] = \"studentData.userId\" />\n                </div>\n               <div class=\"form-group\">\n                <label class=\"col-md-4\">Full Name</label>\n        <input type=\"text\" class=\"form-control\"  formControlName=\"fullName\"  [(ngModel)] = \"studentData.fullName\" />\n                  </div>\n         <div class=\"form-group\">\n                      <label class=\"col-md-4\">English</label>\n                  <input type=\"text\" class=\"form-control\"  formControlName=\"English\"  [(ngModel)] = \"English\" placeholder=\"English\" />\n                </div> \n                <div class=\"form-group\">\n                    <label class=\"col-md-4\">Hindi</label>\n            <input type=\"text\" class=\"form-control\"  formControlName=\"Hindi\"  [(ngModel)] = \"Hindi\" placeholder=\"Hindi\" />\n                      </div>\n                      <div class=\"form-group\">\n                          <label class=\"col-md-4\">Mathametics</label>\n                  <input type=\"text\" class=\"form-control\"  formControlName=\"Matha\"  [(ngModel)] = \"Matha\" placeholder=\"Matha\" />\n                            </div>\n         \n          <div class=\"form-group\">\n          <button (click)=\"modifyData(studentData.userId, studentData.fullName, English, Hindi,Matha)\"\n           class=\"btn btn-primary\">Add Student Task</button>\n        </div>\n    \n            </form>\n        </div> \n        <div>\n          <button (click)=\"onclick()\" >Back</button>\n        </div>\n              \n          </div>    "

/***/ }),

/***/ "./src/app/user/dataadd/dataadd.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/dataadd/dataadd.component.ts ***!
  \***************************************************/
/*! exports provided: DataaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataaddComponent", function() { return DataaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { UserService } from 'src/app/shared/user.service';

// import { Student } from 'src/app/shared/student.model';


var DataaddComponent = /** @class */ (function () {
    function DataaddComponent(route, adminservice, location) {
        this.route = route;
        this.adminservice = adminservice;
        this.location = location;
        this.taskForm();
    }
    DataaddComponent.prototype.taskForm = function () {
        this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            English: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            Matha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            Hindi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    DataaddComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myid = this.route.snapshot.paramMap.get('studentId');
        this.adminservice.getIndividualUser(myid).subscribe(function (res) {
            _this.studentData = res;
        });
    };
    DataaddComponent.prototype.modifyData = function (userId, fullName, English, Matha, Hindi) {
        var _this = this;
        var oo = this.studentData._id;
        this.adminservice.addTask(this.studentData._id, userId, fullName, English, Matha, Hindi).subscribe(function (res) {
            _this.userddd = res;
        });
    };
    DataaddComponent.prototype.goBack = function () {
        this.location.back();
    };
    DataaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dataadd',
            template: __webpack_require__(/*! ./dataadd.component.html */ "./src/app/user/dataadd/dataadd.component.html"),
            styles: [__webpack_require__(/*! ./dataadd.component.css */ "./src/app/user/dataadd/dataadd.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_4__["AdminserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], DataaddComponent);
    return DataaddComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src={{imageadd}}  id=\"icon\" alt=\"User Icon\"/>\n</div>\n<form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n    <input type=\"text\" name=\"userId\" #userId=\"ngModel\" [(ngModel)]=\"model.userId\" placeholder=\"Student ID\" \n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !userId.valid }\">\n    <div *ngIf=\"signInForm.submitted && userId.errors?.pattern\">\n      <label class=\"validation-message\">Invalid Student ID.</label>\n    </div>\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"password\" required minlength=\"4\">\n    <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n      <label class=\"validation-message\">Minimum 4 characters.</label>\n    </div>\n    <input type=\"submit\" value=\"Sign In\">\n</form>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.imageadd = 'http://hyperxchange.com/Inventory/User_login.png';
        this.model = {
            userId: '',
            // // email : '',
            password: ''
        };
    }
    // emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    LoginComponent.prototype.ngOnInit = function () {
        // if(this.userService.isLoggedIn()) 
        //  this.router.navigateByUrl('/studentdata/student');
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.login(form.value).subscribe(function (res) {
            // this.user = res
            // console.log(res)
            _this.userService.setToken(res['token']);
            _this.router.navigateByUrl('/student'); //StudentComponent
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/progressdata/progressdata.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/progressdata/progressdata.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/progressdata/progressdata.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/progressdata/progressdata.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Student With Standard Data</h3>\r\n<div class=\"grid grid-pad\"> \r\n    \r\n \r\n     <!-- <a class=\"col-1-4\">\r\n  <div class=\"module user\">\r\n <h3><span class=\"badge\"> FullName {{user.fullName}}</span>{{user.Standard}}</h3>   \r\n <span class=\"badge\">{{user.fullName}}</span>{{user.Standard}} \r\n  </div>\r\n  </a> -->\r\n    <table class=\"table table-striped\">\r\n       <thead class=\"thead-dark\">  \r\n          <tr>\r\n         <th>Student Id</th>\r\n         <th>Full Name</th>\r\n         <th>Standard</th>\r\n         <th>Address</th>\r\n         <th>Parent Phone1</th>\r\n         <th>Parent Phone2</th>\r\n         <th>DOB</th>\r\n         <th>Email Address</th>\r\n         <th>Creation Date</th>\r\n         <th>Edit Student Data</th>\r\n         </tr>\r\n        </thead>\r\n         <tbody>\r\n         <tr *ngFor=\"let user of Users\">\r\n        <a routerLink=\"/studentdata/studenttask/{{user._id}}\"><td>{{user._id }}</td></a>\r\n         <td>{{user.fullName}}</td>\r\n         <td>{{user.Standard}}</td> \r\n         <td>{{user.Address}}</td> \r\n         <td>{{user.ParentPhone1}}</td>\r\n         <td>{{user.ParentPhone2}}</td>\r\n         <td>{{user.DOB}}</td>\r\n         <td>{{user.email}}</td>\r\n         <td>{{user.CreationDateAt}}</td>\r\n       <a routerLink=\"/studentdata/student/{{user.userId}}\"><td>{{user.userId}}</td></a>\r\n         </tr>\r\n     </tbody> \r\n     </table>\r\n</div> \r\n<button class=\"btn btn-primary\" (click)=\"goBack()\">go back</button>"

/***/ }),

/***/ "./src/app/user/progressdata/progressdata.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/progressdata/progressdata.component.ts ***!
  \*************************************************************/
/*! exports provided: ProgressdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressdataComponent", function() { return ProgressdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Student } from 'src/app/shared/student.model';

// import { User } from 'src/app/shared/user.model';


var ProgressdataComponent = /** @class */ (function () {
    function ProgressdataComponent(adminService, route, location) {
        this.adminService = adminService;
        this.route = route;
        this.location = location;
    }
    ProgressdataComponent.prototype.ngOnInit = function () {
        this.getStd();
    };
    ProgressdataComponent.prototype.getStd = function () {
        var _this = this;
        var Standard = this.route.snapshot.paramMap.get('std');
        this.adminService.getDataStandard(Standard).subscribe(function (res) {
            _this.Users = res;
        });
    };
    ProgressdataComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProgressdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progressdata',
            template: __webpack_require__(/*! ./progressdata.component.html */ "./src/app/user/progressdata/progressdata.component.html"),
            styles: [__webpack_require__(/*! ./progressdata.component.css */ "./src/app/user/progressdata/progressdata.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_adminservice_service__WEBPACK_IMPORTED_MODULE_3__["AdminserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ProgressdataComponent);
    return ProgressdataComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.badge {\r\n    display: inline-block;\r\n    border-bottom: 2px solid #5fbae9;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    min-width: 16px;\r\n    text-align: right;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  \r\n  .form-control,.input-group-text{\r\n    border:1px solid #0080ff;\r\n}\r\n  \r\n  form div.input-field input{\r\n    padding-left: 15px !important;\r\n    color: #25a297;\r\n}\r\n  \r\n  input[type=button], input[type=submit], input[type=reset]  {\r\n    cursor: pointer;\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\n  input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n    -webkit-transform: scale(0.95);\r\n    transform: scale(0.95);\r\n  }\r\n  \r\n  input[type=submit]:disabled{\r\n    background-color: grey;\r\n    color: white;\r\n  }\r\n  \r\n  input[type=text],input[type=password] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  input[type=text]:focus,input[type=password]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  input[type=text]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  input[type=text].invalid-textbox,input[type=password].invalid-textbox{\r\n  border-bottom: 2px solid #ed5558;\r\n  }\r\n  \r\n  label.validation-message{\r\n    color:#ed5558;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/user/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <img src=\"/assets/image/user.JPG\" id=\"icon\" alt=\"User Icon\"/>\n</div> -->\n<form  #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\"> \n  <div class=\"row\"> \n      <input type=\"text\" #userId=\"ngModel\" [(ngModel)]=\"adminService.selectedUser.userId\" name=\"userId\" placeholder=\"userId\"\n   required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !userId.valid }\">\n   <div *ngIf=\"signUpForm.submitted && userId.valid\">\n   <label class=\"validation-message\">This field is required.</label>  \n    </div>\n     \n  </div>\n  <div class=\"row\">\n          <input type=\"text\" #fullName=\"ngModel\" [(ngModel)] = \"adminService.selectedUser.fullName\" name=\"fullName\" placeholder=\"fulll Name\"\n      required [ngClass] =\"{'invalid-textbox' :signUpForm.submitted && !fullName.valid}\" >\n     <div *ngIf=\"signUpForm.submitted && !fullName.valid\" >\n     <label class=\"Validators.required\">This Field is Required</label>\n     </div>\n  </div>\n  <div class=\"row\">\n        <input type=\"text\"  #email=\"ngModel\" [(ngModel)] = \"adminService.selectedUser.email\" name=\"email\" placeholder=\"Email\" \n      [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid}\">\n     <div  *ng If=\"signUpForm.submitted && email.errors\" >\n       <label *ngIf=\"email.errors.required\" class=\"validation-message\">This Field is Required</label>\n       <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n     </div>\n  </div>\n  <div class=\"row\">\n       <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"adminService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n      minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n      <div *ngIf=\"signUpForm.submitted && password.errors\">\n        <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n    </div>\n  </div>\n  <div class=\"row\">\n       <input type=\"text\" #DOB=\"ngModel\" [(ngModel)] = \"adminService.selectedUser.DOB\" name=\"DOB\" placeholder=\"Date Of Birth\"\n      required [ngClass] =\"{'invalid-textbox' :signUpForm.submitted && !DOB.valid}\">\n     <div *ngIf=\"signUpForm.submitted && DOB.valid\">\n       <label class=\"validation-message\">This field is required.</label>\n       </div>\n  </div>\n  <div class=\"row\">\n       <input type=\"text\" #Address=\"ngModel\" [(ngModel)]=\"adminService.selectedUser.Address\" name=\"Address\" placeholder=\"Address\"\n      required [ngClass] =\"{'invalid-textbox' :signUpForm.submitted && !Address.valid}\">\n        <div *ngIf=\"signUpForm.submitted && !Address.valid\">\n        <label class=\"validation-message\">This field is required.</label>\n        </div>\n  </div>  \n  <div class=\"row\">\n   <input type=\"text\" #ParentPhone1=\"ngModel\" [(ngModel)]=\"adminService.selectedUser.ParentPhone1\" name=\"ParentPhone1\" placeholder=\"ParentPhone1\"\n   required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !ParentPhone1.valid }\">\n   <div *ngIf=\"signUpForm.submitted && ParentPhone1.valid\">\n   <label class=\"validation-message\">This field is required.</label>    \n    </div>\n  </div>\n  <div class=\"row\">\n       <input type=\"text\" #ParentPhone2=\"ngModel\" [(ngModel)]=\"adminService.selectedUser.ParentPhone2\" name=\"ParentPhone2\" placeholder=\"ParentPhone2\"\n      required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !ParentPhone2.valid }\">\n      <div *ngIf=\"signUpForm.submitted && ParentPhone2.valid\">\n          <label class=\"validation-message\">This field is required.</label> \n    </div>\n    </div>\n <div class=\"row\">\n    <input type=\"text\" #Standard=\"ngModel\" [(ngModel)]=\"adminService.selectedUser.Standard\" name=\"Standard\" placeholder=\"Standard\"\n    required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !Standard.valid }\">\n    <div *ngIf=\"signUpForm.submitted && Standard.valid\">\n        <label class=\"validation-message\">This field is required.</label>  \n  </div>\n </div>\n   <input type=\"submit\" value=\"Sign-Up\" >\n  </form>\n  \n  <!-- Success message -->\n  \n  <div class=\"success\" *ngIf=\"showSuccessMessage\">\n     \n  <h2>User Added successfully</h2> \n\n  </div>\n    <!-- Error message -->\n  <div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    <h2>{{serverErrorMessages}}</h2>  \n    </div>\n     \n  \n    "

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    //  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    function RegisterComponent(adminService) {
        this.adminService = adminService;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.adminService.postUser(form.value).subscribe(function (res) {
            _this.showSuccessMessage = true;
            setTimeout(function () { return _this.showSuccessMessage = false; }, 6000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 400) {
                _this.serverErrorMessages = 'username already used';
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong';
        });
    };
    RegisterComponent.prototype.resetForm = function (form) {
        form.resetForm();
        this.serverErrorMessages = '';
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_adminservice_service__WEBPACK_IMPORTED_MODULE_1__["AdminserviceService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/standard.service.ts":
/*!******************************************!*\
  !*** ./src/app/user/standard.service.ts ***!
  \******************************************/
/*! exports provided: StandardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardService", function() { return StandardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;
// import { environment } from 'src/environments/environment';


var StandardService = /** @class */ (function () {
    // selectedUser : User = {
    //   _id:'',
    //   userId:'',
    //   fullName: '',
    //   email: '',
    //   password: '',
    //   DOB: '',
    //   Address : '',
    //   ParentPhone1 : '',
    //   ParentPhone2 : '',
    //   Standard :'' 
    //     }
    function StandardService(http) {
        this.http = http;
    }
    // let headers = new HttpHeaders()
    // .append('Content-Type' , 'application/json');
    StandardService.prototype.updateUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/userUpdate', user, httpOptions);
    };
    StandardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StandardService);
    return StandardService;
}());



/***/ }),

/***/ "./src/app/user/standard/standard.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/standard/standard.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .std {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .std li {\r\n    position: relative;\r\n    cursor: pointer;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .std li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  } \r\n    \r\n  .std a {\r\n    color: #888;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n  }\r\n  \r\n  .std a:hover {\r\n    color:#607D8B;\r\n  }\r\n\r\n.std {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 10em;\r\n  }\r\n\r\n  std.badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    min-width: 16px;\r\n    text-align: right;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  .std li.selected {\r\n    background-color: #CFD8DC;\r\n    color: white;\r\n  }\r\n  .std li.selected:hover {\r\n    background-color: #BBD8DC;\r\n  }\r\n   */"

/***/ }),

/***/ "./src/app/user/standard/standard.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/standard/standard.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Standard Detail</h2> \n<div class=\"container-content\"> \n    <div class=\"row\">\n            <div class=\"col-md-2\"> \n                 <a *ngFor=\"let st of std\"\n                    routerLink=\"/studentdata/standard/{{st.branch.A}}\"> \n            <li class=\"std\">\n                  <span class=\"badge\"><h4>{{st.branch.A}}</h4></span>\n            </li>  </a>\n             </div>\n             <div class=\"col-md-2\">\n                    <a *ngFor=\"let st of std\"\n                    routerLink=\"/studentdata/standard/{{st.branch.B}}\"> \n            <li class=\"std\">\n               <span class=\"badge\"><h4>{{st.branch.B}}</h4></span>\n            </li>\n                   \n                   <!-- <h4>{{st.branch.B}}</h4></a> -->\n             </a>\n             </div> \n             <div class=\"col-md-2\">\n                    <a *ngFor=\"let st of std\"\n                    routerLink=\"/studentdata/standard/{{st.branch.C}}\"> \n            <li class=\"std\">\n              <span class=\"badge\"><h4>{{st.branch.C}}</h4></span>\n            </li>\n           \n                   <!-- <h4>{{st.branch.C}}</h4></a> -->\n                  </a>  \n             </div> \n             <div class=\"col-md-2\"> \n                    <a *ngFor=\"let st of std\"\n                    routerLink=\"/studentdata/standard/{{st.branch.D}}\"> \n            <li class=\"std\">\n                        <span class=\"badge\"><h4>{{st.branch.D}}</h4></span>\n            </li>\n                  \n                   <!-- <h4>{{st.branch.D}}</h4></a> -->\n                  </a>     \n             </div>\n            </div> \n      </div>\n\n<div class=\"col-md-2\">\n <button class=\"btn btn-primary\" (click)=\"goBack()\">go back</button>\n</div>\n\n  \n\n\n <!-- routerLink=\"/standard/{{st.branch.D}}\">    -->"

/***/ }),

/***/ "./src/app/user/standard/standard.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/standard/standard.component.ts ***!
  \*****************************************************/
/*! exports provided: StandardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardComponent", function() { return StandardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { User } from 'src/app/shared/user.model';



// import { Divison } from 'src/app/divison/STD';
var StandardComponent = /** @class */ (function () {
    // div = '7D'
    function StandardComponent(userService, router, location) {
        this.userService = userService;
        this.router = router;
        this.location = location;
        this.std = [];
    }
    StandardComponent.prototype.ngOnInit = function () {
        this.onResult();
    };
    StandardComponent.prototype.onResult = function () {
        var _this = this;
        // this.userService.getStandard(this.div).subscribe(
        //   (res) => {
        //    this.User = res 
        //    console.log(this.User)
        //    } )
        this.userService.getnewStandard().subscribe((function (std) {
            _this.std = std;
            // console.log(this.std)
        }));
    };
    StandardComponent.prototype.goBack = function () {
        this.location.back();
    };
    StandardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-standard',
            template: __webpack_require__(/*! ./standard.component.html */ "./src/app/user/standard/standard.component.html"),
            styles: [__webpack_require__(/*! ./standard.component.css */ "./src/app/user/standard/standard.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], StandardComponent);
    return StandardComponent;
}());



/***/ }),

/***/ "./src/app/user/student/reportcard/reportcard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/student/reportcard/reportcard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Poppins');\n/* You can add global styles to this file, and also import other style files */\n/* BASIC */\nhtml {\r\n  background-color: #56baed;\r\n}\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px; \r\n  color: #cccccc;\r\n}\n/* STRUCTURE */\n.wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column; \r\n  justify-content: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\n#formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\n/* TABS */\nh2.inactive {\r\n  color: #cccccc;\r\n}\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  cursor: pointer;\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\ninput[type=submit]:disabled{\r\n  background-color: grey;\r\n  color: white;\r\n}\ninput[type=text],input[type=password] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\ninput[type=text]:focus,input[type=password]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{\r\nborder-bottom: 2px solid #ed5558;\r\n}\nlabel.validation-message{\r\n  color:#ed5558;\r\n}\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\n/* OTHERS */\n*:focus {\r\n    outline: none;\r\n}\n#icon {\r\n  width:50%;\r\n}\n* {\r\n  box-sizing: border-box;\r\n}\n.alert {\r\n  padding: 20px;\r\n  background-color: #f44336; /* Red */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n.success{\r\n  padding: 20px;\r\n  background-color:#249424; /* Green */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n/* Table Styles */\n.table-fill {\r\n  background: rgb(63, 235, 20);\r\n  border-radius:3px;\r\n  border-collapse: collapse;\r\n  height: 320px;\r\n  margin: auto;\r\n  max-width: 600px;\r\n  padding:5px;\r\n  width: 100%;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n  -webkit-animation: float 5s infinite;\r\n          animation: float 5s infinite;\r\n}\nth {\r\n  color:#D5DDE5;;\r\n  background:#1b1e24;\r\n  border-bottom:4px solid #9ea7af;\r\n  border-right: 1px solid #343a45;\r\n  font-size:23px;\r\n  font-weight: 100;\r\n  padding:24px;\r\n  text-align:left;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  vertical-align:middle;\r\n}\nth:first-child {\r\n  border-top-left-radius:3px;\r\n}\nth:last-child {\r\n  border-top-right-radius:3px;\r\n  border-right:none;\r\n}\ntr {\r\n  border-top: 1px solid #C1C3D1;\r\n  /* border-bottom-: 1px solid #C1C3D1; */\r\n  color:#666B85;\r\n  font-size:16px;\r\n  font-weight:normal;\r\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\r\n}\ntr:first-child {\r\n  border-top:none;\r\n}\ntr:last-child {\r\n  border-bottom:none;\r\n}\ntr:nth-child(odd) td {\r\n  background:#EBEBEB;\r\n}\ntr:last-child td:first-child {\r\n  border-bottom-left-radius:3px;\r\n}\ntr:last-child td:last-child {\r\n  border-bottom-right-radius:3px;\r\n}\ntd {\r\n  background:#FFFFFF;\r\n  padding:20px;\r\n  text-align:left;\r\n  vertical-align:middle;\r\n  font-weight:300;\r\n  font-size:18px;\r\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n  border-right: 1px solid #C1C3D1;\r\n}\ntd:last-child {\r\n  border-right: 0px;\r\n}\nth.text-left {\r\n  text-align: left;\r\n}\nth.text-center {\r\n  text-align: center;\r\n}\nth.text-right {\r\n  text-align: right;\r\n}\ntd.text-left {\r\n  text-align: left;\r\n}\ntd.text-center {\r\n  text-align: center;\r\n}\ntd.text-right {\r\n  text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/user/student/reportcard/reportcard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/student/reportcard/reportcard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table\">\n        <thead class=\"thead-dark\">  \n <th>Student Progress Data</th>\n           <tr>\n          <th>Student Id</th>\n          <th>User Id</th>\n          <th>Student Name</th>\n          <th>Creation Date</th>\n          <th>English</th>\n          <th>Mathamatics</th>\n          <th>Hindi</th>\n          <th>Updated</th>\n          </tr>\n         </thead>\n          <tbody>\n          <tr *ngFor=\"let user of studentData\">\n           <td>{{user.studentId}}</td>\n           <td>{{user.userId}}</td>\n           <td>{{user.fullName}}</td>\n          <td>{{user.createdAt}}</td> \n          <td>{{user.English}}</td> \n          <td>{{user.Matha}}</td>\n          <td>{{user.Hindi}}</td>\n          <td>{{user.updatedAt}}</td>\n               </tr>\n      </tbody> \n      </table>\n </div>\n   <button class=\"btn btn-primary\" (click)=\"goBack()\">go back</button>\n\n"

/***/ }),

/***/ "./src/app/user/student/reportcard/reportcard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/student/reportcard/reportcard.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReportcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportcardComponent", function() { return ReportcardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Student } from 'src/app/shared/student.model';



var ReportcardComponent = /** @class */ (function () {
    function ReportcardComponent(route, userService, location) {
        this.route = route;
        this.userService = userService;
        this.location = location;
    }
    ReportcardComponent.prototype.ngOnInit = function () { this.onStudent(); };
    ReportcardComponent.prototype.onStudent = function () {
        var _this = this;
        var userId = this.route.snapshot.paramMap.get('userId');
        this.userService.taskData().subscribe(function (res) {
            _this.studentData = res;
        });
    };
    ReportcardComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReportcardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reportcard',
            template: __webpack_require__(/*! ./reportcard.component.html */ "./src/app/user/student/reportcard/reportcard.component.html"),
            styles: [__webpack_require__(/*! ./reportcard.component.css */ "./src/app/user/student/reportcard/reportcard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ReportcardComponent);
    return ReportcardComponent;
}());



/***/ }),

/***/ "./src/app/user/student/student.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/student/student.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Poppins');\n/* You can add global styles to this file, and also import other style files */\n/* BASIC */\nhtml {\r\n  background-color: #56baed;\r\n}\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px; \r\n  color: #cccccc;\r\n}\n/* STRUCTURE */\n.wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column; \r\n  justify-content: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\n#formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\n/* TABS */\nh2.inactive {\r\n  color: #cccccc;\r\n}\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  cursor: pointer;\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\ninput[type=submit]:disabled{\r\n  background-color: grey;\r\n  color: white;\r\n}\ninput[type=text],input[type=password] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\ninput[type=text]:focus,input[type=password]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{\r\nborder-bottom: 2px solid #ed5558;\r\n}\nlabel.validation-message{\r\n  color:#ed5558;\r\n}\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\n/* OTHERS */\n*:focus {\r\n    outline: none;\r\n}\n#icon {\r\n  width:50%;\r\n}\n* {\r\n  box-sizing: border-box;\r\n}\n.alert {\r\n  padding: 20px;\r\n  background-color: #f44336; /* Red */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n.success{\r\n  padding: 20px;\r\n  background-color:#249424; /* Green */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n/* Table Styles */\n.table-fill {\r\n  background: rgb(63, 235, 20);\r\n  border-radius:3px;\r\n  border-collapse: collapse;\r\n  height: 320px;\r\n  margin: auto;\r\n  max-width: 600px;\r\n  padding:5px;\r\n  width: 100%;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n  -webkit-animation: float 5s infinite;\r\n          animation: float 5s infinite;\r\n}\nth {\r\n  color:#D5DDE5;;\r\n  background:#1b1e24;\r\n  border-bottom:4px solid #9ea7af;\r\n  border-right: 1px solid #343a45;\r\n  font-size:23px;\r\n  font-weight: 100;\r\n  padding:24px;\r\n  text-align:left;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  vertical-align:middle;\r\n}\nth:first-child {\r\n  border-top-left-radius:3px;\r\n}\nth:last-child {\r\n  border-top-right-radius:3px;\r\n  border-right:none;\r\n}\ntr {\r\n  border-top: 1px solid #C1C3D1;\r\n  /* border-bottom-: 1px solid #C1C3D1; */\r\n  color:#666B85;\r\n  font-size:16px;\r\n  font-weight:normal;\r\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\r\n}\ntr:first-child {\r\n  border-top:none;\r\n}\ntr:last-child {\r\n  border-bottom:none;\r\n}\ntr:nth-child(odd) td {\r\n  background:#EBEBEB;\r\n}\ntr:last-child td:first-child {\r\n  border-bottom-left-radius:3px;\r\n}\ntr:last-child td:last-child {\r\n  border-bottom-right-radius:3px;\r\n}\ntd {\r\n  background:#FFFFFF;\r\n  padding:20px;\r\n  text-align:left;\r\n  vertical-align:middle;\r\n  font-weight:300;\r\n  font-size:18px;\r\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n  border-right: 1px solid #C1C3D1;\r\n}\ntd:last-child {\r\n  border-right: 0px;\r\n}\nth.text-left {\r\n  text-align: left;\r\n}\nth.text-center {\r\n  text-align: center;\r\n}\nth.text-right {\r\n  text-align: right;\r\n}\ntd.text-left {\r\n  text-align: left;\r\n}\ntd.text-center {\r\n  text-align: center;\r\n}\ntd.text-right {\r\n  text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/user/student/student.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/student/student.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n <table>         \n    <thead>\n    <tr>\n      <th colspan=\"2\" class=\"text-center\" >Student Profile</th>\n    </tr>\n    </thead>\n    <tbody> \n    <a routerLink=\"/progress/{{userDetails.userId}}\">\n    <tr>\n    <td class=\"btn btn-primary\"> Student ID </td>\n    <td class=\"btn btn-secondary\">{{userDetails.userId}}</td>\n    </tr>\n  </a>\n    <!-- <tr>\n        <td> First Name</td>\n        <td>{{userDetails.fullName.split(' ')[0]}}</td>\n        </tr>\n    <tr>\n        <td>Last Name</td>\n        <td>{{userDetails.fullName.split(' ')[1]}}</td>\n    </tr>  -->\n    <tr>\n        <td>Student Name</td>\n        <td>{{userDetails.fullName}}</td>\n    </tr> \n\n    <tr>\n        <td>Standard</td>\n        <td>{{userDetails.Standard}}</td>\n      </tr>\n    <tr>\n    <td>Creation Date</td>\n    <td>{{userDetails.createdAt }}</td>\n    </tr>\n    \n    <tr>\n    <td>Email</td>\n    <td>{{userDetails.email}}</td>\n    </tr>\n    <tr>\n    <td>Date Of Birth</td>\n    <td>{{userDetails.DOB}}</td>\n    </tr>\n    <tr>\n      <td>Address</td>\n      <td>{{userDetails.Address}}</td>\n      </tr>\n      <tr>\n        <td>Parent Phone Number</td>\n        <td>{{userDetails.ParentPhone1}}</td>\n        </tr>\n        <tr>\n          <td>Parent Phone Number2</td>\n          <td>{{userDetails.ParentPhone2}}</td>\n        </tr>\n        <tr>\n          <td>Modified Date</td>\n          <td>{{userDetails.updatedAt}}</td>\n        </tr>\n        <tr>\n            <td colspan=\"2\" class=\"text-center\"  >\n            <input type=\"button\" (click) =\"onLogout()\" value=\"Logout\"/>\n            </td>\n            </tr>\n      </tbody>\n    </table>\n  \n  </div>\n\n  \n"

/***/ }),

/***/ "./src/app/user/student/student.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/student/student.component.ts ***!
  \***************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { User } from 'src/app/shared/user.model';
// import { Student } from 'src/app/shared/student.model';
var StudentComponent = /** @class */ (function () {
    function StudentComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.userData().subscribe(function (res) {
            _this.userDetails = res;
        });
    };
    StudentComponent.prototype.onLogout = function () {
        this.user.logout().subscribe();
        this.user.delteToken();
        this.router.navigate(['/login']);
    };
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/user/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/user/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/user/task/task.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/task/task.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/task/task.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/task/task.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a routerLink=\"/studentdata/taskview/{{_id}}\" routerLinkActive=\"active\">Task View</a>\n  <a routerLink=\"/studentdata/taskadd/{{_id}}\" routerLinkActive=\"active\">Task Add </a>\n    <a routerLink=\"/studentdata/taskedit/{{_id}}\" routerLinkActive=\"active\">Task Edit</a>\n  \n  </nav>\n    \n <div> \n      <router-outlet></router-outlet>\n  </div>  "

/***/ }),

/***/ "./src/app/user/task/task.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/task/task.component.ts ***!
  \*********************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskComponent = /** @class */ (function () {
    function TaskComponent(route, adminService, location) {
        this.route = route;
        this.adminService = adminService;
        this.location = location;
    }
    TaskComponent.prototype.ngOnInit = function () {
        var kk = this.route.snapshot.paramMap.get('_id');
        this._id = kk;
        console.log('the iD is ', this._id);
    };
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/user/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/user/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_2__["AdminserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/user/taskadd/taskadd.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/taskadd/taskadd.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/taskadd/taskadd.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/taskadd/taskadd.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"studentForm\"> \n          <div class=\"form-group\">\n                  <label class=\"col-md-4\">Student ID</label>\n          <input type=\"text\" class=\"form-control\"  formControlName=\"_id\" #_id  [(ngModel)] = \"studentData._id\" />\n                    </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">User ID</label>\n<input type=\"text\" class=\"form-control\"  formControlName=\"userId\"   [(ngModel)] = \"studentData.userId\" />\n          </div>\n         <div class=\"form-group\">\n          <label class=\"col-md-4\">Full Name</label>\n  <input type=\"text\" class=\"form-control\"  formControlName=\"fullName\"  [(ngModel)] = \"studentData.fullName\" />\n            </div>\n   <div class=\"form-group\">\n                <label class=\"col-md-4\">English</label>\n            <input required type=\"text\" class=\"form-control\"  formControlName=\"English\"    [(ngModel)] = \"English\" placeholder=\"English\"/>\n            <div class=\"alert alert-danger\" *ngIf=\"!English\">\n            </div>\n          </div> \n          <div class=\"form-group\">\n              <label class=\"col-md-4\">Hindi</label>\n      <input type=\"text\" class=\"form-control\"  formControlName=\"Hindi\"    [(ngModel)] = \"Hindi\" placeholder=\"Hindi\" />\n      <div class=\"alert alert-danger\" *ngIf=\"!Hindi\">\n      </div>\n      </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-4\">Mathametics</label>\n            <input type=\"text\" class=\"form-control\"  formControlName=\"Matha\"   [(ngModel)] = \"Matha\" placeholder=\"Matha\" />\n            <div class=\"alert alert-danger\" *ngIf=\"!Matha\">\n            </div>           \n          </div>\n   \n    <div class=\"form-group\">\n    <button (click)=\"modifyData(English, Matha,Hindi)\"\n     class=\"btn btn-primary\">Add Student Task</button>\n  </div>\n\n      </form>\n  </div> \n  <div>\n    <button (click)=\"onclick()\" >Back</button>\n  </div>\n        \n    </div>    "

/***/ }),

/***/ "./src/app/user/taskadd/taskadd.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/taskadd/taskadd.component.ts ***!
  \***************************************************/
/*! exports provided: TaskaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskaddComponent", function() { return TaskaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Student } from 'src/app/shared/student.model';


var TaskaddComponent = /** @class */ (function () {
    function TaskaddComponent(route, adminservice, location) {
        this.route = route;
        this.adminservice = adminservice;
        this.location = location;
        this.taskForm();
    }
    TaskaddComponent.prototype.taskForm = function () {
        this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            English: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            Matha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            Hindi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    TaskaddComponent.prototype.ngOnInit = function () {
        var _this = this;
        var kk = this.route.snapshot.paramMap.get('_id');
        this.studentId = kk;
        console.log('the id ', kk);
        this.adminservice.getIndividualUser(kk).subscribe(function (res) {
            _this.studentData = res;
            console.log(_this.studentData);
        });
    };
    TaskaddComponent.prototype.modifyData = function (English, Matha, Hindi) {
        var _this = this;
        var oo = this.studentId;
        console.log(oo);
        this.adminservice.addTask(this.studentId, this.studentData.userId, this.studentData.fullName, English, Matha, Hindi).subscribe(function (res) {
            _this.userddd = res;
        });
    };
    TaskaddComponent.prototype.goBack = function () {
        this.location.back();
    };
    TaskaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskadd',
            template: __webpack_require__(/*! ./taskadd.component.html */ "./src/app/user/taskadd/taskadd.component.html"),
            styles: [__webpack_require__(/*! ./taskadd.component.css */ "./src/app/user/taskadd/taskadd.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_4__["AdminserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], TaskaddComponent);
    return TaskaddComponent;
}());



/***/ }),

/***/ "./src/app/user/taskedit/taskedit.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/taskedit/taskedit.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/taskedit/taskedit.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/taskedit/taskedit.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"studentForm\"> \n          <div class=\"form-group\">\n                  <label class=\"col-md-4\">Student ID</label>\n          <input type=\"text\" class=\"form-control\"  formControlName=\"_id\" #_id  [(ngModel)] = \"studentData._id\" />\n                    </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">User ID</label>\n<input type=\"text\" class=\"form-control\"  formControlName=\"userId\" #userId  [(ngModel)] = \"studentData.userId\" />\n          </div>\n         <div class=\"form-group\">\n          <label class=\"col-md-4\">Full Name</label>\n  <input type=\"text\" class=\"form-control\"  formControlName=\"fullName\" #fullName [(ngModel)] = \"studentData.fullName\" />\n            </div>\n   <div class=\"form-group\">\n                <label class=\"col-md-4\">English</label>\n            <input type=\"text\" class=\"form-control\"  formControlName=\"English\" #English [(ngModel)] = \"studentData.English\" placeholder=\"English\" />\n          </div> \n          <div class=\"form-group\">\n              <label class=\"col-md-4\">Hindi</label>\n      <input type=\"text\" class=\"form-control\"  formControlName=\"Hindi\" #Hindi  [(ngModel)] = \"studentData.Hindi\" placeholder=\"Hindi\" />\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-4\">Mathametics</label>\n            <input type=\"text\" class=\"form-control\"  formControlName=\"Matha\" #Matha [(ngModel)] = \"studentData.Matha\" placeholder=\"Matha\" />\n                      </div>\n   \n    <div class=\"form-group\">\n    <button (click)=\"modifyData(userId.value, fullName.value, English.value, Hindi.value, Matha.value )\"\n     class=\"btn btn-primary\">Edit Student Task</button>\n  </div>\n\n      </form>\n  </div> \n  <div>\n    <button (click)=\"onclick()\" >Back</button>\n  </div>\n    </div>    "

/***/ }),

/***/ "./src/app/user/taskedit/taskedit.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/taskedit/taskedit.component.ts ***!
  \*****************************************************/
/*! exports provided: TaskeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskeditComponent", function() { return TaskeditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskeditComponent = /** @class */ (function () {
    function TaskeditComponent(route, adminService, location) {
        this.route = route;
        this.adminService = adminService;
        this.location = location;
        this.modifyFrom();
    }
    TaskeditComponent.prototype.modifyFrom = function () {
        this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            English: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Matha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Hindi: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    };
    TaskeditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myid = this.route.snapshot.paramMap.get('_id');
        this.id = myid;
        console.log(myid);
        this.adminService.getTaskById(myid).subscribe(function (res) {
            _this.studentData = res;
            console.log(_this.studentData);
        });
    };
    TaskeditComponent.prototype.modifyData = function (userId, fullName, English, Matha, Hindi) {
        var _this = this;
        this.adminService.modifyTask(this.id, userId, fullName, English, Matha, Hindi).subscribe(function (res) {
            _this.userddd = res;
            console.log(_this.userddd);
        });
    };
    TaskeditComponent.prototype.onclick = function () {
        this.location.back();
    };
    TaskeditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskedit',
            template: __webpack_require__(/*! ./taskedit.component.html */ "./src/app/user/taskedit/taskedit.component.html"),
            styles: [__webpack_require__(/*! ./taskedit.component.css */ "./src/app/user/taskedit/taskedit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_2__["AdminserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], TaskeditComponent);
    return TaskeditComponent;
}());



/***/ }),

/***/ "./src/app/user/taskview/taskview.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/taskview/taskview.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/taskview/taskview.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/taskview/taskview.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <table class=\"table\">\n        <thead class=\"thead-dark\">  \n <th>Student Progress Data</th>\n           <tr>\n          <th>Student ID</th>\n          <th>User Id</th>\n          <th>Student Name</th>\n          <th>Creation Date</th>\n          <th>English</th>\n          <th>Mathamatics</th>\n          <th>Hindi</th>\n          <th>Updated</th>\n          <th>Edit</th>\n          </tr>\n         </thead>\n          <tbody>\n          <tr *ngFor=\"let user of tasks\">\n        <!-- <a routerLink=\"/studentdata/taskadd/{{user._id}}\"><td>{{user._id }}</td></a> -->\n        <td>{{user.studentId}}</td>\n        <td>{{user.userId }}</td>\n          <td>{{user.fullName}}</td>\n          <td>{{user.createdAt}}</td> \n          <td>{{user.English}}</td> \n          <td>{{user.Matha}}</td>\n          <td>{{user.Hindi}}</td>\n          <td>{{user.updatedAt}}</td>\n         <a routerLink=\"/studentdata/taskedit/{{user._id}}\"><td>{{user._id }}</td></a>\n               </tr>\n      </tbody> \n      </table>\n </div>\n   <button class=\"btn btn-primary\" (click)=\"goBack()\">go back</button>\n\n"

/***/ }),

/***/ "./src/app/user/taskview/taskview.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/taskview/taskview.component.ts ***!
  \*****************************************************/
/*! exports provided: TaskviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskviewComponent", function() { return TaskviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskviewComponent = /** @class */ (function () {
    function TaskviewComponent(route, adminService, location) {
        this.route = route;
        this.adminService = adminService;
        this.location = location;
    }
    TaskviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myid = this.route.snapshot.paramMap.get('_id');
        console.log('the iD is ', myid);
        this.adminService.getTask(myid).subscribe(function (res) {
            _this.tasks = res;
            console.log(_this.tasks);
        });
    };
    TaskviewComponent.prototype.goBack = function () {
        this.location.back();
    };
    TaskviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskview',
            template: __webpack_require__(/*! ./taskview.component.html */ "./src/app/user/taskview/taskview.component.html"),
            styles: [__webpack_require__(/*! ./taskview.component.css */ "./src/app/user/taskview/taskview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_2__["AdminserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], TaskviewComponent);
    return TaskviewComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    min-width: 16px;\r\n    text-align: right;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\"> \n  <div class=\"row\">\n      <div class=\"col-10\">      \n          <nav> \n          <ul> \n           <a routerLink=\"/studentdata/register\" routerLinkActive=\"active\">Registration Form</a>\n           <a routerLink=\"/studentdata/divison\" routerLinkActive=\"active\">Standard Detail</a>\n           <a routerLink=\"/studentdata/studentdetail\" routerLinkActive=\"active\">Studdent Detail</a>\n          </ul>\n        </nav>\n             \n      </div> \n    \n      <div class=\"col-2\">\n          <input type=\"button\" class=\"btn btn-secondary\" (click) =\"onLogout()\" value=\"Logout\"/>\n        </div>\n   </div>\n\n</div>\n\n    \n \n <div> \n      <router-outlet></router-outlet>\n  </div>  \n  "

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.onLogout = function () {
        this.userService.delteToken();
        this.router.navigate(['/admin']);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/userdatatedit/userdatatedit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/userdatatedit/userdatatedit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/userdatatedit/userdatatedit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/userdatatedit/userdatatedit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n      <form [formGroup]=\"studentForm\"> \n        <div class=\"form-group\">\n          <label class=\"col-md-4\">User ID</label>\n  <input type=\"text\" class=\"form-control\"  formControlName=\"userId\" #userId [(ngModel)] = \"studentData.userId\" />\n            </div>\n           <div class=\"form-group\">\n            <label class=\"col-md-4\">Full Name</label>\n    <input type=\"text\" class=\"form-control\"  formControlName=\"fullName\" #fullName [(ngModel)] = \"studentData.fullName\" />\n              </div>\n     <div class=\"form-group\">\n                  <label class=\"col-md-4\">Email</label>\n              <input type=\"text\" class=\"form-control\"  formControlName=\"email\" #email [(ngModel)] = \"studentData.email\" />\n            </div> \n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Date Of Birth</label>\n        <input type=\"text\" class=\"form-control\"  formControlName=\"DOB\" #DOB [(ngModel)] = \"studentData.DOB\" />\n                  </div>\n                  <div class=\"form-group\">\n                      <label class=\"col-md-4\">Person Name</label>\n              <input type=\"text\" class=\"form-control\"  formControlName=\"Address\" #Address [(ngModel)] = \"studentData.Address\" />\n                        </div>\n     <div class=\"form-group\">\n                            <label class=\"col-md-4\">ParentPhone1 </label>\n                    <input type=\"text\" class=\"form-control\"  formControlName=\"ParentPhone1\" #ParentPhone1 [(ngModel)] = \"studentData.ParentPhone1\" />\n       </div>\n       <div class=\"form-group\">\n          <label class=\"col-md-4\">ParentPhone2</label>\n  <input type=\"text\" class=\"form-control\"  formControlName=\"ParentPhone2\" #ParentPhone2 [(ngModel)] = \"studentData.ParentPhone2\"/>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"col-md-4\">Standard</label>\n  <input type=\"text\" class=\"form-control\"  formControlName=\"Standard\" #Standard [(ngModel)] = \"studentData.Standard\"/>\n      </div> \n      <div class=\"form-group\">\n      <button (click)=\"modifyData(userId.value, fullName.value, email.value, DOB.value,Address.value,\n      ParentPhone1.value,ParentPhone2.value,Standard.value)\"\n       class=\"btn btn-primary\">Update Student Data</button>\n    </div>\n\n        </form>\n      </div> \n \n      <button (click)=\"onclick()\" >Back</button>\n    </div>"

/***/ }),

/***/ "./src/app/user/userdatatedit/userdatatedit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/userdatatedit/userdatatedit.component.ts ***!
  \***************************************************************/
/*! exports provided: UserdatateditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdatateditComponent", function() { return UserdatateditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/adminservice.service */ "./src/app/shared/adminservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { User } from 'src/app/shared/user.model';



var UserdatateditComponent = /** @class */ (function () {
    function UserdatateditComponent(route, user, location, adminService, fb, router) {
        this.route = route;
        this.user = user;
        this.location = location;
        this.adminService = adminService;
        this.fb = fb;
        this.router = router;
        this.modifyFrom();
    }
    UserdatateditComponent.prototype.modifyFrom = function () {
        this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            ParentPhone1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            ParentPhone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Standard: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    };
    UserdatateditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myid = this.route.snapshot.paramMap.get('userId');
        this.id = myid;
        console.log(myid);
        this.adminService.getIndividualByUserID(myid).subscribe(function (res) {
            _this.studentData = res;
        });
    };
    UserdatateditComponent.prototype.modifyData = function (userId, fullName, email, DOB, Address, ParentPhone1, ParentPhone2, Standard) {
        this.adminService.modifyUser(this.id, userId, fullName, email, DOB, Address, ParentPhone1, ParentPhone2, Standard).subscribe(function (res) {
        });
    };
    UserdatateditComponent.prototype.onclick = function () {
        this.location.back();
    };
    UserdatateditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userdatatedit',
            template: __webpack_require__(/*! ./userdatatedit.component.html */ "./src/app/user/userdatatedit/userdatatedit.component.html"),
            styles: [__webpack_require__(/*! ./userdatatedit.component.css */ "./src/app/user/userdatatedit/userdatatedit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _shared_adminservice_service__WEBPACK_IMPORTED_MODULE_5__["AdminserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserdatateditComponent);
    return UserdatateditComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular-codeadmin\school-app\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map