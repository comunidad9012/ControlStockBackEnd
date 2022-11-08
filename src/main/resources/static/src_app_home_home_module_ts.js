"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 6194:
/*!*****************************************************!*\
  !*** ./src/app/components/alerts/alerts.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsService": () => (/* binding */ AlertsService)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_jeroalvarez1_MyProyects_ControlStock_ControlStock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_controller_scanner_scanner_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/controller/scanner/scanner-request.service */ 431);
/* harmony import */ var src_app_services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/scanner-service/scanner.service */ 9500);






let AlertsService = class AlertsService {
  constructor(alertController, scannerRequestService, scannerService) {
    this.alertController = alertController;
    this.scannerRequestService = scannerRequestService;
    this.scannerService = scannerService;
  }

  enterBack() {
    var _this = this;

    return (0,C_Users_Admin_jeroalvarez1_MyProyects_ControlStock_ControlStock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Ya ingreso este producto',
        buttons: [{
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar');
          }
        }, {
          text: 'Actualizar',
          handler: () => {
            console.log('Actualizar cantidad');
          }
        }]
      });
      yield alert.present();
    })();
  }

  deleteScannedProduct(id) {
    var _this2 = this;

    return (0,C_Users_Admin_jeroalvarez1_MyProyects_ControlStock_ControlStock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: '¿Eliminar producto? ',
        buttons: [{
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            _this2.scannerRequestService.deleteScannedProduct(id).subscribe(data => {
              console.log('Eliminado', data);

              _this2.scannerRequestService.getAllScannedProduct().subscribe(requestData => {
                console.log('Toda la lista es: ', requestData);

                _this2.scannerService.triggerUpdatedListScanned.emit(requestData);
              });
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

  productUpdate(scannedProduct) {
    var _this3 = this;

    return (0,C_Users_Admin_jeroalvarez1_MyProyects_ControlStock_ControlStock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Actualizar cantidad',
        inputs: [{
          placeholder: 'Cantidad',
          name: 'amount',
          type: 'number'
        }],
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Actualizar',
          handler: alertData => {
            const productUpdated = {
              id: scannedProduct.id,
              amount: alertData.amount,
              fileProduct: scannedProduct.fileProduct
            };

            _this3.scannerRequestService.updateScannedProduct(scannedProduct.id, productUpdated).subscribe(data => {
              _this3.scannerRequestService.getAllScannedProduct().subscribe(returnData => {
                _this3.scannerService.triggerUpdatedListScanned.emit(returnData);
              });

              console.log('Producto actualizado', data);
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

  linkedProduct() {
    var _this4 = this;

    return (0,C_Users_Admin_jeroalvarez1_MyProyects_ControlStock_ControlStock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: 'Este producto ya esta vinculado con otro',
        buttons: [{
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar');
          }
        }, {
          text: 'Actualizar vinculo',
          handler: () => {
            console.log('Actualizar');
          }
        }]
      });
      yield alert.present();
    })();
  }

  whitOutCod() {
    var _this5 = this;

    return (0,C_Users_Admin_jeroalvarez1_MyProyects_ControlStock_ControlStock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        header: 'Debe ingresar un codigo',
        subHeader: 'Puede ingresar el codigo manualmente',
        inputs: [{
          placeholder: 'Codigo',
          name: 'cod'
        }],
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Aceptar',
          handler: alertData => {
            _this5.scannerService.triggerSendCod.emit(alertData.cod);
          }
        }]
      });
      yield alert.present();
    })();
  }

};

AlertsService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}, {
  type: src_app_controller_scanner_scanner_request_service__WEBPACK_IMPORTED_MODULE_1__.ScannerRequestService
}, {
  type: src_app_services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_2__.ScannerService
}];

AlertsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], AlertsService);


/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sccaner_sccaner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sccaner/sccaner.component */ 9477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _scanned_product_list_scanned_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scanned-product-list/scanned-product-list.component */ 1906);
/* harmony import */ var _file_product_confirm_list_file_product_confirm_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-product-confirm-list/file-product-confirm-list.component */ 9958);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _new_file_product_new_file_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-file-product/new-file-product.component */ 46);











let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _sccaner_sccaner_component__WEBPACK_IMPORTED_MODULE_0__.SccanerComponent,
            _scanned_product_list_scanned_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ScannedProductListComponent,
            _file_product_confirm_list_file_product_confirm_list_component__WEBPACK_IMPORTED_MODULE_2__.FileProductConfirmListComponent,
            _new_file_product_new_file_product_component__WEBPACK_IMPORTED_MODULE_4__.NewFileProductComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ],
        exports: [
            _sccaner_sccaner_component__WEBPACK_IMPORTED_MODULE_0__.SccanerComponent,
            _scanned_product_list_scanned_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ScannedProductListComponent,
            _file_product_confirm_list_file_product_confirm_list_component__WEBPACK_IMPORTED_MODULE_2__.FileProductConfirmListComponent,
            _new_file_product_new_file_product_component__WEBPACK_IMPORTED_MODULE_4__.NewFileProductComponent
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ComponentsModule);



/***/ }),

/***/ 9958:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/file-product-confirm-list/file-product-confirm-list.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileProductConfirmListComponent": () => (/* binding */ FileProductConfirmListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _file_product_confirm_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-product-confirm-list.component.html?ngResource */ 9187);
/* harmony import */ var _file_product_confirm_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-product-confirm-list.component.scss?ngResource */ 128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_controller_codes_codes_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/controller/codes/codes-request.service */ 4762);
/* harmony import */ var src_app_controller_scanner_scanner_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/controller/scanner/scanner-request.service */ 431);
/* harmony import */ var src_app_services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/scanner-service/scanner.service */ 9500);







let FileProductConfirmListComponent = class FileProductConfirmListComponent {
    constructor(scannerService, codesRequestService, scannerRequestService) {
        this.scannerService = scannerService;
        this.codesRequestService = codesRequestService;
        this.scannerRequestService = scannerRequestService;
        this.isModalOpen = false;
        this.searchby = true; // busqueda por cod o nombre, true === cod
        this.varNewFileProduct = false;
    }
    ngOnInit() {
        this.scannerService.triggerOpenModal.subscribe((data) => {
            console.log(data);
            this.setOpen();
        });
        // Espera a que se le envie la cantidad y el codigo a relacionar con un ScannedProduct
        this.scannerService.triggerSendScannedProductAmount.subscribe((data) => {
            console.log('Datos entrantes', data.cod, data.amount, data.chekingByValue);
            this.chekingBy = data.chekingByValue;
            if (!this.chekingBy) {
                this.searchby = false;
            }
            this.newFileProduct(false); // Hace que no se muestre el newFileProduct
            this.getAllFileProductsByCodesId(data.cod); // Llama a obtener todos los FileProducts que coincidan con el codigo
            this.cod = {
                id: data.cod
            };
            console.log('El id es', this.cod);
            this.getAllFileProducts(); // Llama a todos los fileProductF
            // Almacena la cantidad a ingresar en scanned product en la variable scannerProductAmount
            this.scannerProductAmount = {
                amount: data.amount
            };
        });
        this.scannerService.triggerSelectItem.subscribe((data) => {
            this.selectItem(data);
        });
    }
    setOpen() {
        if (!this.isModalOpen) {
            this.isModalOpen = true;
        }
        else {
            this.isModalOpen = false;
        }
    }
    getAllFileProductsByCodesId(data) {
        // Guarda en fileProducts los FileProducts que coincidan con el codigo
        this.codesRequestService
            .getAllFileProductsByCodesId(data)
            .subscribe((requestData) => {
            this.fileProducts = requestData;
        });
    }
    getAllFileProducts() {
        // LLama a todos los FileProducts y los almacena en allFileProducts
        this.codesRequestService.getAllFileProducts().subscribe((data) => {
            this.allFileProducts = data;
        });
    }
    // Vincula al nuevo scanned product a un file product
    // Si ya estan viculados simplemente actualiza la cantidad de ScannedProduct
    selectItem(fileProductId) {
        this.scannerRequestService
            .newOrUpdateScannedProduct(fileProductId, this.scannerProductAmount)
            .subscribe(d => {
            console.log(d);
            if (this.cod.id !== '') {
                this.codesRequestService.addCode(fileProductId, this.cod).subscribe(() => { });
            }
            this.scannerRequestService
                .getAllScannedProduct()
                .subscribe((data) => {
                this.scannerService.triggerUpdatedListScanned.emit(data);
            });
            this.setOpen();
        }, (err) => {
            console.error('Error', err);
        });
    }
    searchBy() {
        this.newFileProduct(false);
        if (this.searchby) {
            this.searchby = false;
        }
        else {
            this.searchby = true;
        }
        ;
    }
    newFileProduct(value) {
        if (this.varNewFileProduct === true) {
            this.varNewFileProduct = false;
        }
        else {
            this.varNewFileProduct = value;
        }
    }
};
FileProductConfirmListComponent.ctorParameters = () => [
    { type: src_app_services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_4__.ScannerService },
    { type: src_app_controller_codes_codes_request_service__WEBPACK_IMPORTED_MODULE_2__.CodesRequestService },
    { type: src_app_controller_scanner_scanner_request_service__WEBPACK_IMPORTED_MODULE_3__.ScannerRequestService }
];
FileProductConfirmListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-file-product-confirm-list',
        template: _file_product_confirm_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_file_product_confirm_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FileProductConfirmListComponent);



/***/ }),

/***/ 46:
/*!***************************************************************************!*\
  !*** ./src/app/components/new-file-product/new-file-product.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewFileProductComponent": () => (/* binding */ NewFileProductComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_file_product_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-file-product.component.html?ngResource */ 6388);
/* harmony import */ var _new_file_product_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-file-product.component.scss?ngResource */ 6324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_controller_fileProduct_file_product_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/controller/fileProduct/file-product-request.service */ 9962);
/* harmony import */ var src_app_services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scanner-service/scanner.service */ 9500);







let NewFileProductComponent = class NewFileProductComponent {
    constructor(fileProductRequestService, scannerService) {
        this.fileProductRequestService = fileProductRequestService;
        this.scannerService = scannerService;
        this.newFileProdcuctForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            mark: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
    }
    ngOnInit() { }
    saveFileProduct() {
        const form = this.newFileProdcuctForm.value;
        const fileProduct = {
            productName: form.productName,
            mark: form.mark,
            amount: form.amount
        };
        this.fileProductRequestService.newFileProduct(fileProduct).subscribe(data => {
            this.scannerService.triggerSelectItem.emit(data.id);
        });
    }
};
NewFileProductComponent.ctorParameters = () => [
    { type: src_app_controller_fileProduct_file_product_request_service__WEBPACK_IMPORTED_MODULE_2__.FileProductRequestService },
    { type: src_app_services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_3__.ScannerService }
];
NewFileProductComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-new-file-product',
        template: _new_file_product_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_file_product_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewFileProductComponent);



/***/ }),

/***/ 1906:
/*!***********************************************************************************!*\
  !*** ./src/app/components/scanned-product-list/scanned-product-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScannedProductListComponent": () => (/* binding */ ScannedProductListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _scanned_product_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanned-product-list.component.html?ngResource */ 7286);
/* harmony import */ var _scanned_product_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scanned-product-list.component.scss?ngResource */ 5464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_controller_scanner_scanner_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/controller/scanner/scanner-request.service */ 431);
/* harmony import */ var src_app_services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scanner-service/scanner.service */ 9500);
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alerts/alerts.service */ 6194);







let ScannedProductListComponent = class ScannedProductListComponent {
    constructor(scannerService, scannerRequestService, alertsService) {
        this.scannerService = scannerService;
        this.scannerRequestService = scannerRequestService;
        this.alertsService = alertsService;
    }
    ngOnInit() {
        this.scannerRequestService.getAllScannedProduct().subscribe(data => {
            this.listProductsScanneds = data;
        });
        this.scannerService.triggerUpdatedListScanned.subscribe(data => {
            console.log('Scanned Updated', data);
            this.listProductsScanneds = data;
        });
    }
    deleteProduct(id) {
        this.alertsService.deleteScannedProduct(id);
    }
    productUpdate(scannedProduct) {
        this.alertsService.productUpdate(scannedProduct);
    }
};
ScannedProductListComponent.ctorParameters = () => [
    { type: src_app_services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_3__.ScannerService },
    { type: src_app_controller_scanner_scanner_request_service__WEBPACK_IMPORTED_MODULE_2__.ScannerRequestService },
    { type: _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_4__.AlertsService }
];
ScannedProductListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-scanned-product-list',
        template: _scanned_product_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scanned_product_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScannedProductListComponent);



/***/ }),

/***/ 9477:
/*!*********************************************************!*\
  !*** ./src/app/components/sccaner/sccaner.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SccanerComponent": () => (/* binding */ SccanerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sccaner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sccaner.component.html?ngResource */ 174);
/* harmony import */ var _sccaner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sccaner.component.scss?ngResource */ 6320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);
/* harmony import */ var src_app_services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scanner-service/scanner.service */ 9500);
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alerts/alerts.service */ 6194);



/* eslint-disable @typescript-eslint/member-ordering */





let SccanerComponent = class SccanerComponent {
    constructor(barcodeScanner, scannerService, alertsService) {
        this.barcodeScanner = barcodeScanner;
        this.scannerService = scannerService;
        this.alertsService = alertsService;
        this.cod = ''; // Codigo de escaneo
        this.chekingByValue = true; // Indica si la busqueda sera con o sin COD. True === con
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''), // Inicia vacio sin valor por default
        });
    }
    // Se ejecuta cada vez que Angular detecta un cambio en la vista del componente y al inicio
    ngAfterViewChecked() {
        if (!this.focusIsSet) {
            // Si focusIsSet es falso le da el foco al amountInput
            this.amountInput.setFocus();
            setTimeout(() => {
                this.focusIsSet = true;
            }, 1000); // Luego de un segundo cambia this.focusIsSet a verdero
        }
    }
    // Se ejecuta solo una vez despues del contructor
    ngOnInit() {
        // Queda a la escucha de cambios en chekingByValue de HomePage
        this.scannerService.triggerCheking.subscribe((data) => {
            this.chekingByValue = data;
        });
        this.scannerService.triggerSendCod.subscribe((data) => {
            this.cod = data;
        });
    }
    scan() {
        this.barcodeScanner
            .scan()
            .then((barcodeData) => {
            this.cod = barcodeData.text;
        })
            .catch((err) => {
            console.log('Error', err);
        });
    }
    pushProduct() {
        this.scannerService.triggerOpenModal.emit(true);
        if (!this.chekingByValue) {
            this.cod = '';
        }
        // Trae los valores del formulario amount
        const form = this.productForm.value;
        if (!form.amount) {
            // Si el amount === null entonces le pone 1 como default
            form.amount = 1;
        }
        // Convierte el valor del form amount en un objeto del tipo ScannerProduct
        const scannerProduct = {
            amount: form.amount,
        };
        // Envia a FileProductConfirmListComponent el codigo y la catidad
        this.scannerService.triggerSendScannedProductAmount.emit({
            cod: this.cod,
            amount: scannerProduct.amount,
            chekingByValue: this.chekingByValue,
        });
        this.setDefaultValue();
    }
    setDefaultValue() {
        //vuelve al imput amount vacio devuelta
        this.productForm.setValue({
            amount: '',
        });
    }
    // Es usada por el html
    presentAlert() {
        this.alertsService.whitOutCod();
    }
};
SccanerComponent.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: src_app_services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_3__.ScannerService },
    { type: _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_4__.AlertsService }
];
SccanerComponent.propDecorators = {
    amountInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['amountInput', { static: false },] }]
};
SccanerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sccaner',
        template: _sccaner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sccaner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
    //Clase que sirve para hacer el alta con o sin COD
], SccanerComponent);



/***/ }),

/***/ 4762:
/*!***********************************************************!*\
  !*** ./src/app/controller/codes/codes-request.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodesRequestService": () => (/* binding */ CodesRequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let CodesRequestService = class CodesRequestService {
    //baseURL = 'http://localhost:8888/api';
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = 'http://34.176.209.24:8888/api';
    }
    getAllFileProductsByCodesId(codesId) {
        return this.httpClient.get(this.baseURL + '/codes/' + codesId + '/file-products');
    }
    getAllFileProducts() {
        return this.httpClient.get(this.baseURL + '/file-products');
    }
    addCode(fileProductId, codesRequest) {
        return this.httpClient.post(this.baseURL + '/file-products/' + fileProductId + '/codes', codesRequest);
    }
};
CodesRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
CodesRequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CodesRequestService);



/***/ }),

/***/ 9962:
/*!************************************************************************!*\
  !*** ./src/app/controller/fileProduct/file-product-request.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileProductRequestService": () => (/* binding */ FileProductRequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let FileProductRequestService = class FileProductRequestService {
    //baseURL = 'http://localhost:8888/api';
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = 'http://34.176.209.24:8888/api';
    }
    //Post File Product
    newFileProduct(fileProduct) {
        return this.httpClient.post(this.baseURL + '/file-products/new', fileProduct);
    }
};
FileProductRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
FileProductRequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FileProductRequestService);



/***/ }),

/***/ 431:
/*!***************************************************************!*\
  !*** ./src/app/controller/scanner/scanner-request.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScannerRequestService": () => (/* binding */ ScannerRequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let ScannerRequestService = class ScannerRequestService {
    //baseURL = 'http://localhost:8888/api';
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = 'http://34.176.209.24:8888/api';
    }
    //Post or Update
    newOrUpdateScannedProduct(fileProdcutId, scannerProduct) {
        return this.httpClient.post(this.baseURL + '/scanned-product/new-update/' + fileProdcutId, scannerProduct);
    }
    //Put
    updateScannedProduct(scannedProductId, scannedProduct) {
        return this.httpClient.put(this.baseURL + '/scanned-product/' + scannedProductId, scannedProduct);
    }
    //Get of ScannedProducts
    getAllScannedProduct() {
        return this.httpClient.get(this.baseURL + '/scanned-product');
    }
    //Delete ScannedProduct
    deleteScannedProduct(id) {
        return this.httpClient.delete(this.baseURL + '/scanned-product/' + id);
    }
};
ScannerRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ScannerRequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ScannerRequestService);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 5642);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/scanner-service/scanner.service */ 9500);





let HomePage = class HomePage {
    constructor(scannerService) {
        this.scannerService = scannerService;
        this.cheking = 'con';
        this.chekingByValue = true; // "chekingByValue" indica si la busqueda sera con o sin COD. True === con
        // eslint-disable-next-line max-len
        this.variable = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3355381.863232432!2d-68.53111545!3d-34.7873176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1667088803589!5m2!1ses!2sar';
    }
    // La funcion chenkingBy() se usa para seleccionar si ingresar un producto por codigo o sin codigo
    chekingBy() {
        if (this.chekingByValue) { // El alta de scannedProduct sera con codigo
            this.chekingByValue = false;
            this.cheking = 'sin';
        }
        else { // El alta de scannedProduct sera sin codigo
            this.chekingByValue = true;
            this.cheking = 'con';
        }
        // Envia a FileProductConfirmListComponent y a SccanerComponent si el alta sera con o sin COD. True o False
        this.scannerService.triggerCheking.emit(this.chekingByValue);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_scanner_service_scanner_service__WEBPACK_IMPORTED_MODULE_2__.ScannerService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 9500:
/*!*************************************************************!*\
  !*** ./src/app/services/scanner-service/scanner.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScannerService": () => (/* binding */ ScannerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


let ScannerService = class ScannerService {
    constructor() {
        //Envio scanned product amount
        this.triggerSendScannedProductAmount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        //emite la lista de  productos actualizada
        this.triggerUpdatedListScanned = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); //Objeto de la clase EventEmitter
        //hacer cheking by cod o by name
        this.triggerCheking = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        //select item
        this.triggerSelectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        //Send cod
        this.triggerSendCod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        //Open Modal
        this.triggerOpenModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
};
ScannerService.ctorParameters = () => [];
ScannerService.propDecorators = {
    triggerSendScannedProductAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    triggerUpdatedListScanned: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    triggerCheking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    triggerSelectItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    triggerSendCod: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    triggerOpenModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
ScannerService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    })
], ScannerService);



/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



class Ng2SearchPipe {
  /**
   * @param {?} items object from array
   * @param {?} term term's search
   * @return {?}
   */
  transform(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe.filter(items, term);
  }
  /**
   *
   * @param {?} items List of items to filter
   * @param {?} term  a string term to compare with every property of the list
   *
   * @return {?}
   */


  static filter(items, term) {
    const
    /** @type {?} */
    toCompare = term.toLowerCase();
    /**
     * @param {?} item
     * @param {?} term
     * @return {?}
     */

    function checkInside(item, term) {
      for (let
      /** @type {?} */
      property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }

        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }

        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }

}

Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
  return new (t || Ng2SearchPipe)();
};

Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: Ng2SearchPipe,
  pure: false
});
Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Ng2SearchPipe,
  factory: Ng2SearchPipe.ɵfac
});
/**
 * @nocollapse
 */

Ng2SearchPipe.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class Ng2SearchPipeModule {}

Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
  return new (t || Ng2SearchPipeModule)();
};

Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2SearchPipeModule
});
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */

Ng2SearchPipeModule.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 128:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/file-product-confirm-list/file-product-confirm-list.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXByb2R1Y3QtY29uZmlybS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6324:
/*!****************************************************************************************!*\
  !*** ./src/app/components/new-file-product/new-file-product.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctZmlsZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 5464:
/*!************************************************************************************************!*\
  !*** ./src/app/components/scanned-product-list/scanned-product-list.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2FubmVkLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 6320:
/*!**********************************************************************!*\
  !*** ./src/app/components/sccaner/sccaner.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2NhbmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 9187:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/file-product-confirm-list/file-product-confirm-list.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-modal [isOpen]=\"isModalOpen\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar color=\"main-color\">\n        <ion-buttons slot=\"secondary\">\n          <ion-button (click)=\"newFileProduct(true)\">\n            <ion-icon slot=\"icon-only\" name=\"add-circle-outline\"></ion-icon>\n          </ion-button>\n          <ion-button *ngIf=\"chekingBy\" (click)=\"searchBy()\">\n            <ion-icon slot=\"icon-only\" name=\"repeat\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"setOpen(false)\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ng-container *ngIf=\"searchby; then cod; else name\"></ng-container>\n        <ng-template #cod>\n          <ion-title>Buscar por COD</ion-title>\n        </ng-template>\n        <ng-template #name>\n          <ion-title>Buscar por NOMBRE</ion-title>\n        </ng-template>\n      </ion-toolbar>\n      <ion-toolbar *ngIf=\"!searchby\" color=\"main-color\">\n        <ion-searchbar placeholder=\"Search\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar>\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content *ngIf=\"searchby && !varNewFileProduct\">\n      <div *ngIf=\"fileProducts\">\n      <ion-list *ngFor=\"let fileProduct of fileProducts\">\n          <ion-item button (click)=\"selectItem(fileProduct.id)\">\n            <ion-label>\n              <h2><b>Nombre:</b> {{fileProduct.productName}}</h2>\n              <p><b>Marca:</b> {{fileProduct.mark}}</p>\n              <p><b>Cantidad:</b> {{fileProduct.amount}}</p>\n            </ion-label>\n            <ion-badge color=\"success\" *ngIf=\"fileProduct.scannedProduct\">Escanneado</ion-badge>\n            <ion-badge color=\"danger\" *ngIf=\"!fileProduct.scannedProduct\">No Escanneado</ion-badge>\n          </ion-item>\n      </ion-list>\n    </div>\n    <div *ngIf=\"!fileProducts\">\n      <ion-item>\n        <ion-label>\n          No hay productos que coincidan con el codigo\n        </ion-label>\n        <ion-icon name=\"information-circle\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </div>\n    </ion-content>\n\n    <ion-content *ngIf=\"!searchby && !varNewFileProduct\">\n      <ion-list *ngFor=\"let allFileProduct of allFileProducts | filter: filterTerm\"> \n        <ion-item button (click)=\"selectItem(allFileProduct.id)\">\n          <ion-label>\n            <h2><b>Nombre:</b> {{allFileProduct.productName}}</h2>\n            <p><b>Marca:</b> {{allFileProduct.mark}}</p>\n            <p><b>Cantidad:</b> {{allFileProduct.amount}}</p>\n          </ion-label>\n          <ion-badge color=\"success\" *ngIf=\"allFileProduct.scannedProduct\">Escanneado</ion-badge>\n          <ion-badge color=\"danger\" *ngIf=\"!allFileProduct.scannedProduct\">No Escanneado</ion-badge>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n\n    <ion-content *ngIf=\"varNewFileProduct\">\n      <app-new-file-product></app-new-file-product>\n    </ion-content>\n        \n  </ng-template>\n</ion-modal>";

/***/ }),

/***/ 6388:
/*!****************************************************************************************!*\
  !*** ./src/app/components/new-file-product/new-file-product.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\n  <ion-card-header>\n    <ion-card-title>Nuevo FileProduct</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <form [formGroup]=\"newFileProdcuctForm\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item fill=\"outline\" >\n            <ion-label position=\"floating\">Nombre</ion-label>\n            <ion-input formControlName=\"productName\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item fill=\"outline\" >\n            <ion-label position=\"floating\">Marca</ion-label>\n            <ion-input formControlName=\"mark\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item fill=\"outline\" >\n            <ion-label position=\"floating\">Cantidad</ion-label>\n            <ion-input formControlName=\"amount\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button expand=\"block\" color=\"main-color\" (click)=\"saveFileProduct()\">\n            <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n            Agregar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-card-content>\n</ion-card>";

/***/ }),

/***/ 7286:
/*!************************************************************************************************!*\
  !*** ./src/app/components/scanned-product-list/scanned-product-list.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"cardControl height98\">\r\n  <div class=\"main\">\r\n    <div>\r\n      <div>\r\n        <ion-item class=\"searchBar width100\" lines=\"none\">\r\n          <ion-label><ion-icon name=\"search-outline\"></ion-icon></ion-label>\r\n          <ion-input placeholder=\"Search\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n    <div class=\"table\">\r\n      <ion-content>\r\n        <ion-list *ngFor=\"let listProductsScanned of listProductsScanneds | filter: filterTerm\">\r\n          <ion-item>\r\n            <ion-label>\r\n              <h2><b>Nombre:</b> {{listProductsScanned.fileProduct.productName}}</h2>\r\n              <p><b>Marca:</b> {{listProductsScanned.fileProduct.mark}}</p>\r\n              <p><b>Cantidad escaneada:</b> {{listProductsScanned.amount}}</p>\r\n            </ion-label>\r\n            <ion-button shape=\"round\" title=\"Borrar cliente\" color=\"danger\"\r\n              (click)=\"deleteProduct(listProductsScanned.id)\">\r\n              <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button shape=\"round\" title=\"Editar cliente\" color=\"warning\" (click)=\"productUpdate(listProductsScanned)\">\r\n              <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-content>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 174:
/*!**********************************************************************!*\
  !*** ./src/app/components/sccaner/sccaner.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\n  <ion-card-content>\n    <ion-row>\n      <ion-col> <!-- Muestra uno u otro dependiendo de si es con o sin COD-->\n        <ng-container *ngIf=\"chekingByValue === true; then with; else withOut\"></ng-container>\n        <ng-template #with>\n          <ion-item button lines=\"none\" detail=\"true\" detail-icon=\"create-outline\" (click)=\"presentAlert()\">\n            <ion-label *ngIf=\"cod !== ''\">\n              <h1>Codigo: {{cod}}</h1>\n            </ion-label>\n            <ion-label *ngIf=\"cod === ''\">\n              <h1>Codigo: xxxxxxxxxxxx</h1>\n            </ion-label>\n          </ion-item>\n        </ng-template>\n        <ng-template #withOut>\n          <ion-label>\n            <h1>Alta sin codigo</h1>\n          </ion-label>\n        </ng-template>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"productForm\">\n      <ion-row>\n        <ion-col>\n          <ion-item fill=\"outline\">\n            <ion-label position=\"floating\">Cantidad</ion-label>\n            <ion-input #amountInput type=\"number\" formControlName=\"amount\" placeholder=\"1\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=auto>\n          <ng-container *ngIf=\"(cod !== '' && chekingByValue) || (cod === '' && !chekingByValue) || (cod !== '' && !chekingByValue); then push; else alert\"></ng-container>\n          <ng-template #push>\n            <ion-button size=\"large\" color=\"main-color\" (click)=\"pushProduct()\">\n              <ion-icon name=\"caret-forward\"></ion-icon>\n            </ion-button>\n          </ng-template>\n          <ng-template #alert>\n            <ion-button size=\"large\" color=\"main-color\" (click)=\"presentAlert()\">\n              <ion-icon name=\"caret-forward\"></ion-icon>\n            </ion-button>\n          </ng-template>\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-row *ngIf=\"chekingByValue\">\n      <ion-col>\n        <ion-button expand=\"block\" color=\"main-color\" (click)=\"scan()\">Escanear<ion-icon name=\"scan\" slot=\"start\">\n          </ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n<app-file-product-confirm-list></app-file-product-confirm-list>";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"navBar\" color=\"main-color\">\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button (click)=\"chekingBy()\">\r\n        <ion-icon slot=\"icon-only\" name=\"repeat\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Checking {{cheking}} COD\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main\">\r\n    <div>\r\n      <app-sccaner></app-sccaner>\r\n    </div>\r\n    <div>\r\n      <app-scanned-product-list></app-scanned-product-list>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map