webpackJsonp([0],{

/***/ "../../../../../src/app/units/medicamentos/medicamento-create/medicamento-create.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-page-title></app-page-title>\n\n<div class=\"row\" *ngIf=\"!preloaderService.getPendingRequests()\">\n  <div class=\"col-sm-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body border-bottom\">\n        <form #f=\"ngForm\" (ngChange)=\"onChange(f)\" (ngSubmit)=\"onSubmit(f)\" autocomplete=\"off\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-lg-6\">\n              <h3 class=\"no-margin\">{{ dataService.getPage().title }}</h3>\n            </div>\n            <div class=\"col-xs-9 col-lg-3\" *ngIf=\"!preloaderService.getPendingRequests()\">\n              <button type=\"button\" class=\"btn btn-block btn-default\" (click)=\"cancel()\">\n                {{ 'ACTIONS.CANCEL' | translate }}\n              </button>\n            </div>\n            <div class=\"col-xs-9 col-lg-3\" *ngIf=\"!preloaderService.getPendingRequests()\">\n              <button type=\"submit\" class=\"btn btn-block btn-primary\" [disabled]=\"!f.valid\">\n                {{ 'ACTIONS.SAVE' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"tab-content\" *ngIf=\"!preloaderService.getPendingRequests()\">\n          <app-medicamento-form [item]=\"dataService.data.medicamentos.item.data\"></app-medicamento-form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-debug-data *ngIf=\"!preloaderService.getPendingRequests()\"></app-debug-data>\n\n"

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-create/medicamento-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-create/medicamento-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_data_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_preloader_preloader_service__ = __webpack_require__("../../../../../src/app/shared/components/preloader/preloader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domains_pages_page_model__ = __webpack_require__("../../../../../src/app/domains/pages/page.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domains_medicamentos_medicamento_model__ = __webpack_require__("../../../../../src/app/domains/medicamentos/medicamento.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentoCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MedicamentoCreateComponent = (function () {
    /**
     *
     * @param translate
     * @param dataService
     * @param toastr
     * @param preloaderService
     * @param route
     * @param router
     */
    function MedicamentoCreateComponent(translate, dataService, toastr, preloaderService, route, router) {
        this.translate = translate;
        this.dataService = dataService;
        this.toastr = toastr;
        this.preloaderService = preloaderService;
        this.route = route;
        this.router = router;
        this.view = '';
        this.config = {};
        this.data = {};
        this.item = new __WEBPACK_IMPORTED_MODULE_7__domains_medicamentos_medicamento_model__["a" /* Medicamento */]();
    }
    MedicamentoCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.config = _this.dataService.config;
            _this.dataService.startApi('medicamentos');
            _this.item = _this.dataService.data.medicamentos.item;
            _this.dataService.setPage(new __WEBPACK_IMPORTED_MODULE_6__domains_pages_page_model__["a" /* Page */]({
                slug: 'medicamentos-edit',
                title: 'Editando Apresentações Alopáticos',
            }));
            _this.dataService.getItem(params.id);
            _this.data = _this.dataService.data;
            if (params.id) {
                _this.dataService.setView('edit');
            }
        });
        window.scrollTo(0, 0);
    };
    MedicamentoCreateComponent.prototype.onChange = function (form) {
        // console.log(form.value);
    };
    MedicamentoCreateComponent.prototype.cancel = function () {
        console.log('canceled');
        this.dataService.setView('list');
    };
    MedicamentoCreateComponent.prototype.onSubmit = function (form) {
        this.dataService.saveItem();
    };
    return MedicamentoCreateComponent;
}());
MedicamentoCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-medicamento-create',
        template: __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-create/medicamento-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/units/medicamentos/medicamento-create/medicamento-create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_data_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_components_preloader_preloader_service__["a" /* PreloaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_components_preloader_preloader_service__["a" /* PreloaderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _f || Object])
], MedicamentoCreateComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=medicamento-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-edit/medicamento-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-page-title></app-page-title>\n\n<div class=\"row\" *ngIf=\"!preloaderService.getPendingRequests()\">\n  <div class=\"col-sm-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body border-bottom\">\n        <form #f=\"ngForm\" (ngChange)=\"onChange(f)\" (ngSubmit)=\"onSubmit(f)\" autocomplete=\"off\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-lg-6\">\n              <h3 class=\"no-margin\">{{ dataService.getPage().title }}</h3>\n            </div>\n            <div class=\"col-xs-9 col-lg-3\" *ngIf=\"!preloaderService.getPendingRequests()\">\n              <button type=\"button\" class=\"btn btn-block btn-default\" (click)=\"cancel()\">\n                {{ 'ACTIONS.CANCEL' | translate }}\n              </button>\n            </div>\n            <div class=\"col-xs-9 col-lg-3\" *ngIf=\"!preloaderService.getPendingRequests()\">\n              <button type=\"button\" class=\"btn btn-block btn-primary\"\n                      [disabled]=\"!f.valid\"\n                      (click)=\"updateItem()\"\n                      *ngIf=\"!data.medicamentos.item.data.deleted_at\">\n                {{ 'ACTIONS.SAVE' | translate }}\n              </button>\n            </div>\n            <div class=\"col-xs-9 col-lg-3\" *ngIf=\"!preloaderService.getPendingRequests()\">\n              <button type=\"button\" class=\"btn btn-block btn-success\"\n                      *ngIf=\"data.medicamentos.item.data.deleted_at\"\n                      (click)=\"restoreItem()\">\n                {{ 'ACTIONS.RESTORE' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"panel-body border-top\">\n        <div class=\"tab-content animated fadeIn\" *ngIf=\"!preloaderService.getPendingRequests()\">\n          <app-medicamento-form [item]=\"data.medicamentos.item.data\"></app-medicamento-form>\n        </div>\n      </div>\n      <div class=\"panel-body border-top\" *ngIf=\"data.medicamentos.item.data.history\">\n        <button class=\"btn btn-default\" (click)=\"dataService.toggleHistoryShowHistory()\"\n                *ngIf=\"!dataService.config.system.app.crud.showHistory\">\n            <span *ngIf=\"!dataService.getItemConfig().showHistory\">\n            {{ 'ACTIONS.SHOW_HISTORY' | translate }}\n            <span>\n              ({{ data.medicamentos.item.data.history.data.length }} alterações)\n            </span>\n            </span>\n          <span *ngIf=\"dataService.getItemConfig().showHistory\">\n              {{ 'ACTIONS.HIDE_HISTORY' | translate }}\n            </span>\n        </button>\n      </div>\n      <div class=\"panel-body border-top\" *ngIf=\"dataService.getItemConfig().showHistory\">\n        <h4 class=\"no-margin\">Histórico</h4>\n      </div>\n      <div class=\"panel-body no-padding-top\" *ngIf=\"dataService.getItemConfig().showHistory\">\n        <app-medicamento-history [item]=\"data.medicamentos.item.data\">\n        </app-medicamento-history>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-debug-data *ngIf=\"!preloaderService.getPendingRequests()\"></app-debug-data>\n\n"

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-edit/medicamento-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-edit/medicamento-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domains_pages_page_model__ = __webpack_require__("../../../../../src/app/domains/pages/page.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_data_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_components_preloader_preloader_service__ = __webpack_require__("../../../../../src/app/shared/components/preloader/preloader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentoEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MedicamentoEditComponent = (function () {
    /**
     *
     * @param translate
     * @param dataService
     * @param vcr
     * @param toastr
     * @param preloaderService
     * @param route
     * @param router
     */
    function MedicamentoEditComponent(translate, dataService, vcr, toastr, preloaderService, route, router) {
        this.translate = translate;
        this.dataService = dataService;
        this.vcr = vcr;
        this.toastr = toastr;
        this.preloaderService = preloaderService;
        this.route = route;
        this.router = router;
        /**
         * Configurações globais
         */
        this.config = {};
        /**
         * Dados globais
         */
        this.data = {};
        this.toastr.setRootViewContainerRef(vcr);
    }
    MedicamentoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.route.params
            .subscribe(function (params) {
            _this.config = _this.dataService.config;
            _this.dataService.startApi('medicamentos');
            _this.item = _this.dataService.data.medicamentos.item.data;
            _this.dataService.setPage(new __WEBPACK_IMPORTED_MODULE_3__domains_pages_page_model__["a" /* Page */]({
                slug: 'medicamentos-edit',
                title: 'Editando Apresentações Alopáticos',
            }));
            _this.dataService.getItem(params.id);
            _this.data = _this.dataService.data;
        });
        window.scrollTo(0, 0);
        this.dataService.debug();
    };
    MedicamentoEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    /**
     * Cancela a edição e retorna para a coleção de itens
     */
    MedicamentoEditComponent.prototype.cancel = function () {
        this.dataService.setView('list');
        this.router.navigate(['/medicamentos']);
    };
    MedicamentoEditComponent.prototype.updateItem = function () {
        this.dataService.updateItem();
        this.dataService.setView('list');
        // this.dataService.updateItem(this.data.medicamentos.item.data.deleted_at);
        // this.router.navigate(['/medicamentos']);
        // this.dataService.notificationService.showSuccess('Registro atualizado com sucesso.');
    };
    MedicamentoEditComponent.prototype.restoreItem = function () {
        this.dataService.restoreItem(this.data.medicamentos.item.data.id);
        this.router.navigate(['/medicamentos']);
        this.dataService.setView('list');
    };
    return MedicamentoEditComponent;
}());
MedicamentoEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-medicamento-edit',
        template: __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-edit/medicamento-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/units/medicamentos/medicamento-edit/medicamento-edit.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_data_data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_data_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_components_preloader_preloader_service__["a" /* PreloaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_components_preloader_preloader_service__["a" /* PreloaderService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _g || Object])
], MedicamentoEditComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=medicamento-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-form/medicamento-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" [ngClass]=\"{\n      'has-error': dataService.getItemHasErrors('nome')}\">\n  <label class=\"control-label\" for=\"nome\">{{ 'DOMAINS.MEDICAMENTO.NOME' | translate }}</label>\n  <input type=\"text\"\n         class=\"form-control\"\n         id=\"nome\"\n         name=\"nome\"\n         [(ngModel)]=\"item.nome\"\n         [disabled]=\"item.deleted_at\"\n         aria-describedby=\"nomeHelpBlock\"\n         placeholder=\"{{ 'DOMAINS.MEDICAMENTO.NOME' | translate }}\">\n  <span class=\"form-control-feedback\" aria-hidden=\"true\"></span>\n  <span id=\"nomeHelpBlock\" class=\"help-block\" *ngIf=\"dataService.getItemHasErrors('nome')\">\n      {{ dataService.getItemFieldErrors('nome')[0] }}</span>\n</div>\n\n<div class=\"form-group\" [ngClass]=\"{\n      'has-error': dataService.getItemHasErrors('ggrem')}\">\n  <label class=\"control-label\" for=\"ggrem\">{{ 'DOMAINS.MEDICAMENTO.GGREM' | translate }}</label>\n  <input type=\"text\"\n         class=\"form-control\"\n         id=\"ggrem\"\n         name=\"ggrem\"\n         [(ngModel)]=\"item.ggrem\"\n         [disabled]=\"item.deleted_at\"\n         aria-describedby=\"ggremHelpBlock\"\n         placeholder=\"{{ 'DOMAINS.MEDICAMENTO.GGREM' | translate }}\">\n  <span class=\"form-control-feedback\" aria-hidden=\"true\" ></span>\n  <span id=\"ggremHelpBlock\" class=\"help-block\" *ngIf=\"dataService.getItemHasErrors('ggrem')\">\n      {{ dataService.getItemFieldErrors('ggrem')[0] }}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-form/medicamento-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-form/medicamento-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_data_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentoFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedicamentoFormComponent = (function () {
    function MedicamentoFormComponent(dataService) {
        this.dataService = dataService;
    }
    MedicamentoFormComponent.prototype.ngOnInit = function () {
    };
    return MedicamentoFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MedicamentoFormComponent.prototype, "item", void 0);
MedicamentoFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-medicamento-form',
        template: __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-form/medicamento-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/units/medicamentos/medicamento-form/medicamento-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_data_data_service__["a" /* DataService */]) === "function" && _a || Object])
], MedicamentoFormComponent);

var _a;
//# sourceMappingURL=medicamento-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-history/medicamento-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive animated fadeIn no-margin no-border\">\n  <table class=\"table no-margin\">\n    <tbody>\n    <tr *ngFor=\"let history of item.history.data\">\n      <td>\n        <p class=\"no-margin\">\n          <span class=\"text-muted\">{{ history.causer.data.username }}</span>\n          <span [ngClass]=\"{\n                'text-danger': history.description === 'deleted',\n                'text-warning': history.description === 'updated',\n                'text-success': history.description === 'created' || history.description === 'restored'}\">\n                {{ 'history.' + history.description | uppercase | translate }},\n              </span>\n          <span *ngIf=\"history.description !== 'deleted'\">\n                <span *ngFor=\"let property of history.properties.modified\">\n                  <strong>{{ property }}</strong>\n                  <span class=\"text-muted\">de</span>\n                  <span class=\"warning\">{{ history.properties.old[property] || 'nulo' }}</span>\n                  <span class=\"text-muted\">para</span>\n                  <span>{{ history.properties.attributes[property] }}</span>,\n                </span>\n              </span>\n          <span class=\"text-muted\">em {{ history.created_at | date: 'dd/MM/y HH:mm:ss' }}</span>\n        </p>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-history/medicamento-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-history/medicamento-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domains_medicamentos_medicamento_model__ = __webpack_require__("../../../../../src/app/domains/medicamentos/medicamento.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentoHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedicamentoHistoryComponent = (function () {
    function MedicamentoHistoryComponent() {
    }
    MedicamentoHistoryComponent.prototype.ngOnInit = function () {
    };
    return MedicamentoHistoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__domains_medicamentos_medicamento_model__["a" /* Medicamento */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__domains_medicamentos_medicamento_model__["a" /* Medicamento */]) === "function" && _a || Object)
], MedicamentoHistoryComponent.prototype, "item", void 0);
MedicamentoHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-medicamento-history',
        template: __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-history/medicamento-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/units/medicamentos/medicamento-history/medicamento-history.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MedicamentoHistoryComponent);

var _a;
//# sourceMappingURL=medicamento-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list-table/medicamento-list-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover no-margin\">\n  <thead>\n  <tr>\n    <th>{{ 'DOMAINS.MEDICAMENTO.NOME' | translate }}</th>\n    <th>{{ 'DOMAINS.MEDICAMENTO.GGREM' | translate }}</th>\n    <th>{{ 'DOMAINS.CREATED_AT' | translate }}</th>\n    <th>{{ 'DOMAINS.UPDATED_AT' | translate }}</th>\n    <th *ngIf=\"!dataService.showCountActive()\">\n      {{ 'DOMAINS.DELETED_AT' | translate }}\n    </th>\n    <th class=\"th-for-btn\"></th>\n    <th class=\"th-for-btn\"></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let medicamento of collection.data\">\n    <td>{{ medicamento.nome }}</td>\n    <td>{{ medicamento.ggrem }}</td>\n    <td>{{ medicamento.created_at | date: 'dd/MM/y HH:mm:ss' }}</td>\n    <td>{{ medicamento.updated_at | date: 'dd/MM/y HH:mm:ss' }}</td>\n    <td *ngIf=\"medicamento.deleted_at !== null\">\n      {{ medicamento.deleted_at | date: 'dd/MM/y HH:mm:ss' }}\n    </td>\n    <td class=\"td-for-btn\">\n      <!--<a [routerLink]=\"['/medicamentos', medicamento.id]\" class=\"btn btn-sm btn-link\">-->\n        <!--<i class=\"fa fa-edit\"></i>-->\n      <!--</a>-->\n      <button (click)=\"editItem(medicamento.id)\"\n              title=\"Editar\"\n              class=\"btn btn-sm btn-link\">\n        <i class=\"fa fa-edit\"></i>\n      </button>\n    </td>\n\n    <td class=\"td-for-btn\" *ngIf=\"medicamento.deleted_at === null\">\n      <button (click)=\"removeItem(medicamento.id)\"\n              title=\"Deletar\"\n              class=\"btn btn-sm btn-link\">\n        <i class=\"fa fa-times text-danger\"></i>\n      </button>\n    </td>\n    <td class=\"td-for-btn\" *ngIf=\"medicamento.deleted_at !== null\">\n      <button (click)=\"restoreItem(medicamento.id)\"\n              title=\"Restaurar\"\n              class=\"btn btn-sm btn-link\">\n        <i class=\"fa fa-recycle text-success\"></i>\n      </button>\n    </td>\n    <td class=\"td-for-btn\" *ngIf=\"medicamento.deleted_at !== null\">\n      <button (click)=\"forceRemoveItem(medicamento.id)\"\n              title=\"Deletar permanentemente\"\n              class=\"btn btn-sm btn-link\">\n        <i class=\"fa fa-times text-danger\"></i>\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list-table/medicamento-list-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-row {\n  margin: 30px 0 0 0; }\n  .header-row .title {\n    margin: 0; }\n\ntable .th-for-btn {\n  width: 20px;\n  padding: 0; }\n\ntable .td-for-btn {\n  width: 20px;\n  padding: 3px 3px 0 0; }\n  table .td-for-btn .btn:hover {\n    background: #f1f1f1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list-table/medicamento-list-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_preloader_preloader_service__ = __webpack_require__("../../../../../src/app/shared/components/preloader/preloader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_config_core__ = __webpack_require__("../../../../@ngx-config/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentoListTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MedicamentoListTableComponent = (function () {
    function MedicamentoListTableComponent(configService, translate, dataService, preloaderService, route, router) {
        this.configService = configService;
        this.translate = translate;
        this.dataService = dataService;
        this.preloaderService = preloaderService;
        this.route = route;
        this.router = router;
    }
    MedicamentoListTableComponent.prototype.ngOnInit = function () {
    };
    MedicamentoListTableComponent.prototype.editItem = function (id) {
        this.dataService.getItem(id);
        this.router.navigate(['/medicamentos', id]);
        this.dataService.setView('edit');
    };
    MedicamentoListTableComponent.prototype.removeItem = function (id) {
        this.dataService.removeItem(id);
    };
    MedicamentoListTableComponent.prototype.forceRemoveItem = function (id) {
        this.dataService.forceRemoveItem(id);
    };
    MedicamentoListTableComponent.prototype.restoreItem = function (id) {
        this.dataService.restoreItem(id);
    };
    return MedicamentoListTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MedicamentoListTableComponent.prototype, "collection", void 0);
MedicamentoListTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-medicamento-list-table',
        template: __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list-table/medicamento-list-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list-table/medicamento-list-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_config_core__["c" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_config_core__["c" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_data_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_components_preloader_preloader_service__["a" /* PreloaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_components_preloader_preloader_service__["a" /* PreloaderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _f || Object])
], MedicamentoListTableComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=medicamento-list-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-page-title></app-page-title>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body border-bottom\">\n        <div class=\"col-xs-12 col-lg-6\">\n          <h3 class=\"no-margin\">{{ dataService.getPage().title }}</h3>\n        </div>\n        <div class=\"col-xs-9 col-lg-4\">\n          <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" autocomplete=\"off\">\n            <input type=\"text\"\n                   [(ngModel)]=\"dataService.searchFilter.search\"\n                   (keyup)=\"dataService.onFilterChange($event)\"\n                   name=\"search\"\n                   class=\"form-control\"\n                   placeholder=\"Pesquisar...\">\n          </form>\n        </div>\n        <div class=\"col-xs-3 col-lg-2 no-padding\">\n          <button class=\"btn btn-primary btn-block pull-right\" (click)=\"createItem()\">Cadastrar</button>\n        </div>\n      </div>\n      <div class=\"panel-body border-bottom\">\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n          <li role=\"presentation\" [ngClass]=\"{'active': !dataService.searchFilter.onlyTrashed}\">\n            <a href=\"#active\" aria-controls=\"active\" role=\"tab\" data-toggle=\"tab\"\n               (click)=\"dataService.toggleTrashed(false, $event)\">\n              {{ 'DOMAINS.ACTIVE_PLURAL' | translate }}\n              <span *ngIf=\"!dataService.searchFilter.onlyTrashed\">\n            <span>\n              ({{ data.medicamentos.collection.data.length }})\n            </span>\n          </span>\n            </a>\n          </li>\n          <li role=\"presentation\" [ngClass]=\"{'active': dataService.searchFilter.onlyTrashed}\">\n            <a href=\"#trashed\" aria-controls=\"trashed\" role=\"tab\" data-toggle=\"tab\"\n               (click)=\"dataService.toggleTrashed(true, $event)\">\n              {{ 'DOMAINS.TRASHED_PLURAL' | translate }}\n              <span *ngIf=\"dataService.searchFilter.onlyTrashed\">\n            <span *ngIf=\"!preloaderService.getPendingRequests()\">\n              ({{ data.medicamentos.collection.data.length }})\n            </span>\n          </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"tab-content animated fadeIn\" *ngIf=\"!preloaderService.getPendingRequests()\">\n          <app-medicamento-list-table [collection]=\"data.medicamentos.collection\"\n                                      *ngIf=\"data.medicamentos.collection.meta?.pagination.total > 0\">\n          </app-medicamento-list-table>\n          <app-pagination class=\"text-center\"\n                          *ngIf=\"data.medicamentos.collection.length>0\"\n                          [totalRegistros]=\"totalRegistros\"\n                          [qtdPorPagina]=\"qtdPorPagina\"\n                          (onPaginate)=\"paginar($event)\"></app-pagination>\n\n          <div *ngIf=\"data.medicamentos.collection.data.length==0\" class=\"text-center no-collection-div\">\n            <i>Nenhum registro encontrado.</i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-row {\n  margin: 30px 0 0 0; }\n  .header-row .title {\n    margin: 0; }\n\n.collection-row .tab-content {\n  margin: 20px 0; }\n\n.collection-row table .th-for-btn {\n  width: 20px;\n  padding: 0; }\n\n.collection-row table .td-for-btn {\n  width: 20px;\n  padding: 3px 3px 0 0; }\n  .collection-row table .td-for-btn .btn:hover {\n    background: #f1f1f1; }\n\n.no-collection-div {\n  line-height: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_config_core__ = __webpack_require__("../../../../@ngx-config/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_preloader_preloader_service__ = __webpack_require__("../../../../../src/app/shared/components/preloader/preloader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domains_pages_page_model__ = __webpack_require__("../../../../../src/app/domains/pages/page.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MedicamentoListComponent = (function () {
    function MedicamentoListComponent(configService, dataService, preloaderService, route, router) {
        this.configService = configService;
        this.dataService = dataService;
        this.preloaderService = preloaderService;
        this.route = route;
        this.router = router;
    }
    MedicamentoListComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.data;
        this.config = this.configService.getSettings();
        this.dataService.startApi('medicamentos');
        this.dataService.setPage(new __WEBPACK_IMPORTED_MODULE_5__domains_pages_page_model__["a" /* Page */]({
            slug: 'medicamentos',
            title: 'Apresentações Alopáticos',
        }));
        this.dataService.setSearchParams();
        this.dataService.getCollection();
        window.scrollTo(0, 0);
    };
    MedicamentoListComponent.prototype.createItem = function () {
        this.dataService.setView('create');
    };
    return MedicamentoListComponent;
}());
MedicamentoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-medicamento-list',
        template: __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_config_core__["c" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_config_core__["c" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_data_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_components_preloader_preloader_service__["a" /* PreloaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_components_preloader_preloader_service__["a" /* PreloaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object])
], MedicamentoListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=medicamento-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-list/medicamento-search-filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_data_searchable_entity_filter_service__ = __webpack_require__("../../../../../src/app/shared/services/data/searchable-entity-filter.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentoSearchFilterService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MedicamentoSearchFilterService = (function (_super) {
    __extends(MedicamentoSearchFilterService, _super);
    function MedicamentoSearchFilterService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.search = '';
        _this.include = '';
        _this.onlyTrashed = false;
        _this.orderBy = 'created_at';
        _this.sortedBy = 'desc';
        _this.layout = 'list';
        return _this;
    }
    MedicamentoSearchFilterService.prototype.getFields = function () {
        return [
            'search',
            'include',
            'onlyTrashed',
            'orderBy',
            'sortedBy',
            'layout',
        ];
    };
    MedicamentoSearchFilterService.prototype.reset = function () {
        return Object.assign(this, {
            search: '',
            include: '',
            onlyTrashed: false,
            orderBy: 'created_at',
            sortedBy: 'desc',
            layout: 'list',
        });
    };
    return MedicamentoSearchFilterService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_data_searchable_entity_filter_service__["a" /* SearchableEntityFilterService */]));
MedicamentoSearchFilterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MedicamentoSearchFilterService);

//# sourceMappingURL=medicamento-search-filter.service.js.map

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-view-switch/medicamento-view-switch.component.html":
/***/ (function(module, exports) {

module.exports = "<preloader></preloader>\n<notification></notification>\n\n<div [ngSwitch]=\"dataService.getView()\">\n  <app-medicamento-edit   *ngSwitchCase=\"'edit'\"></app-medicamento-edit>\n  <app-medicamento-create *ngSwitchCase=\"'create'\"></app-medicamento-create>\n  <app-medicamento-list   *ngSwitchCase=\"'list'\"></app-medicamento-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-view-switch/medicamento-view-switch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamento-view-switch/medicamento-view-switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_data_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_config_core__ = __webpack_require__("../../../../@ngx-config/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentoViewSwitchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicamentoViewSwitchComponent = (function () {
    function MedicamentoViewSwitchComponent(configService, dataService, vcr, toastr) {
        this.configService = configService;
        this.dataService = dataService;
        this.vcr = vcr;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    MedicamentoViewSwitchComponent.prototype.ngOnInit = function () {
        this.view = this.dataService.data.view;
        this.data = this.dataService.data;
        this.config = this.configService.getSettings();
        this.dataService.startApi('medicamentos');
        this.dataService.setSearchParams();
        this.dataService.getCollection();
        window.scrollTo(0, 0);
    };
    return MedicamentoViewSwitchComponent;
}());
MedicamentoViewSwitchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-medicamento-view-switch',
        template: __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-view-switch/medicamento-view-switch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/units/medicamentos/medicamento-view-switch/medicamento-view-switch.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_config_core__["c" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_config_core__["c" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_data_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]) === "function" && _d || Object])
], MedicamentoViewSwitchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=medicamento-view-switch.component.js.map

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamentos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicamento_view_switch_medicamento_view_switch_component__ = __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-view-switch/medicamento-view-switch.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentosRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var medicamentosRoutes = [
    {
        path: ':id',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__medicamento_view_switch_medicamento_view_switch_component__["a" /* MedicamentoViewSwitchComponent */]
    },
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__medicamento_view_switch_medicamento_view_switch_component__["a" /* MedicamentoViewSwitchComponent */],
    },
];
var MedicamentosRoutingModule = (function () {
    function MedicamentosRoutingModule() {
    }
    return MedicamentosRoutingModule;
}());
MedicamentosRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(medicamentosRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], MedicamentosRoutingModule);

//# sourceMappingURL=medicamentos-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/units/medicamentos/medicamentos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medicamentos_routing_module__ = __webpack_require__("../../../../../src/app/units/medicamentos/medicamentos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medicamento_edit_medicamento_edit_component__ = __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-edit/medicamento-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__medicamento_list_medicamento_list_component__ = __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__medicamento_form_medicamento_form_component__ = __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-form/medicamento-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__medicamento_history_medicamento_history_component__ = __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-history/medicamento-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__medicamento_list_medicamento_search_filter_service__ = __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-list/medicamento-search-filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__medicamento_list_medicamento_list_table_medicamento_list_table_component__ = __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-list/medicamento-list-table/medicamento-list-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__medicamento_create_medicamento_create_component__ = __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-create/medicamento-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__medicamento_view_switch_medicamento_view_switch_component__ = __webpack_require__("../../../../../src/app/units/medicamentos/medicamento-view-switch/medicamento-view-switch.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentosModule", function() { return MedicamentosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DECLARATIONS_MEDICAMENTOS = [
    __WEBPACK_IMPORTED_MODULE_5__medicamento_list_medicamento_list_component__["a" /* MedicamentoListComponent */],
    __WEBPACK_IMPORTED_MODULE_10__medicamento_create_medicamento_create_component__["a" /* MedicamentoCreateComponent */],
    __WEBPACK_IMPORTED_MODULE_4__medicamento_edit_medicamento_edit_component__["a" /* MedicamentoEditComponent */],
    __WEBPACK_IMPORTED_MODULE_6__medicamento_form_medicamento_form_component__["a" /* MedicamentoFormComponent */],
    __WEBPACK_IMPORTED_MODULE_7__medicamento_history_medicamento_history_component__["a" /* MedicamentoHistoryComponent */],
    __WEBPACK_IMPORTED_MODULE_9__medicamento_list_medicamento_list_table_medicamento_list_table_component__["a" /* MedicamentoListTableComponent */],
    __WEBPACK_IMPORTED_MODULE_11__medicamento_view_switch_medicamento_view_switch_component__["a" /* MedicamentoViewSwitchComponent */],
];
var MedicamentosModule = (function () {
    function MedicamentosModule() {
    }
    return MedicamentosModule;
}());
MedicamentosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__medicamentos_routing_module__["a" /* MedicamentosRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: DECLARATIONS_MEDICAMENTOS.slice(),
        exports: DECLARATIONS_MEDICAMENTOS.slice(),
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__medicamento_list_medicamento_search_filter_service__["a" /* MedicamentoSearchFilterService */],
        ]
    })
], MedicamentosModule);

//# sourceMappingURL=medicamentos.module.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map