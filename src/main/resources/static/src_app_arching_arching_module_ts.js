"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_arching_arching_module_ts"],{

/***/ 4750:
/*!***************************************************!*\
  !*** ./src/app/arching/arching-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchingPageRoutingModule": () => (/* binding */ ArchingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _arching_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arching.page */ 8314);




const routes = [
    {
        path: '',
        component: _arching_page__WEBPACK_IMPORTED_MODULE_0__.ArchingPage
    }
];
let ArchingPageRoutingModule = class ArchingPageRoutingModule {
};
ArchingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArchingPageRoutingModule);



/***/ }),

/***/ 9738:
/*!*******************************************!*\
  !*** ./src/app/arching/arching.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchingPageModule": () => (/* binding */ ArchingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _arching_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arching-routing.module */ 4750);
/* harmony import */ var _arching_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arching.page */ 8314);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 5642);








let ArchingPageModule = class ArchingPageModule {
};
ArchingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _arching_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArchingPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_arching_page__WEBPACK_IMPORTED_MODULE_1__.ArchingPage]
    })
], ArchingPageModule);



/***/ }),

/***/ 8314:
/*!*****************************************!*\
  !*** ./src/app/arching/arching.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchingPage": () => (/* binding */ ArchingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _arching_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arching.page.html?ngResource */ 5203);
/* harmony import */ var _arching_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arching.page.scss?ngResource */ 2772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ArchingPage = class ArchingPage {
    constructor() {
        this.page = true;
    }
    ngOnInit() {
    }
    changePage() {
        if (this.page) {
            this.page = false;
        }
        else {
            this.page = true;
        }
    }
};
ArchingPage.ctorParameters = () => [];
ArchingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-arching',
        template: _arching_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_arching_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArchingPage);



/***/ }),

/***/ 2772:
/*!******************************************************!*\
  !*** ./src/app/arching/arching.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNoaW5nLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5203:
/*!******************************************************!*\
  !*** ./src/app/arching/arching.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main-color\">\n    <ion-title *ngIf=\"page\">Arqueo Actual</ion-title>\n    <ion-title *ngIf=\"!page\">Historial de arqueos</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"changePage()\">\n        <ion-icon *ngIf=\"page\" slot=\"icon-only\" name=\"time-outline\"></ion-icon>\n        <ion-icon *ngIf=\"!page\" slot=\"icon-only\" name=\"play-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main\" *ngIf=\"page\">\n    <div>\n      <app-actually-arching></app-actually-arching>\n    </div>\n    <div>\n      <app-detail-arching></app-detail-arching>\n    </div>\n  </div>\n  <app-history-arching *ngIf=\"!page\"></app-history-arching>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_arching_arching_module_ts.js.map