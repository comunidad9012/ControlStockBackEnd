"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tablinks_tablinks_module_ts"],{

/***/ 3030:
/*!*****************************************************!*\
  !*** ./src/app/tablinks/tablinks-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPageRoutingModule": () => (/* binding */ TablinksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tablinks_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablinks.page */ 7056);




const routes = [
    {
        path: 'tablinks',
        component: _tablinks_page__WEBPACK_IMPORTED_MODULE_0__.TablinksPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: 'arching',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_arching_arching_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../arching/arching.module */ 9738)).then(m => m.ArchingPageModule)
            },
            {
                path: '',
                redirectTo: '/tablinks/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tablinks/home',
        pathMatch: 'full'
    }
];
let TablinksPageRoutingModule = class TablinksPageRoutingModule {
};
TablinksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TablinksPageRoutingModule);



/***/ }),

/***/ 2616:
/*!*********************************************!*\
  !*** ./src/app/tablinks/tablinks.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPageModule": () => (/* binding */ TablinksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tablinks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablinks-routing.module */ 3030);
/* harmony import */ var _tablinks_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablinks.page */ 7056);







let TablinksPageModule = class TablinksPageModule {
};
TablinksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tablinks_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablinksPageRoutingModule
        ],
        declarations: [_tablinks_page__WEBPACK_IMPORTED_MODULE_1__.TablinksPage]
    })
], TablinksPageModule);



/***/ }),

/***/ 7056:
/*!*******************************************!*\
  !*** ./src/app/tablinks/tablinks.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPage": () => (/* binding */ TablinksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tablinks_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablinks.page.html?ngResource */ 3462);
/* harmony import */ var _tablinks_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablinks.page.scss?ngResource */ 4567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TablinksPage = class TablinksPage {
    constructor() { }
    ngOnInit() {
    }
};
TablinksPage.ctorParameters = () => [];
TablinksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tablinks',
        template: _tablinks_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tablinks_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TablinksPage);



/***/ }),

/***/ 4567:
/*!********************************************************!*\
  !*** ./src/app/tablinks/tablinks.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsaW5rcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3462:
/*!********************************************************!*\
  !*** ./src/app/tablinks/tablinks.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"arching\">\n      <ion-icon name=\"reader-outline\"></ion-icon>\n      <ion-label>Arqueo</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button>\n      <ion-icon name=\"document-outline\"></ion-icon>\n      <ion-label>File</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"barcode-outline\"></ion-icon>\n      <ion-label>Escaner</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_tablinks_tablinks_module_ts.js.map