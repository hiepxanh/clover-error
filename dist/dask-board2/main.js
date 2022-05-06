"use strict";
(self["webpackChunkDaskBoard2"] = self["webpackChunkDaskBoard2"] || []).push([["main"],{

/***/ 1852:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7362);
/* harmony import */ var _pages_page_coin_page_coin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-coin/page-coin.component */ 2273);
/* harmony import */ var _pages_page_dash_board_page_dash_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-dash-board/page-dash-board.component */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7403);





const routes = [
    {
        path: '',
        component: _pages_page_dash_board_page_dash_board_component__WEBPACK_IMPORTED_MODULE_1__.PageDashBoardComponent,
    },
    {
        path: 'coin',
        component: _pages_page_coin_page_coin_component__WEBPACK_IMPORTED_MODULE_0__.PageCoinComponent,
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 8674:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7362);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 463);



class AppComponent {
    constructor() {
        this.title = 'DaskBoard2';
        this.a = 0.259;
        this.b = 1.3495;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 32, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " sao n\u00E0o? ko hi\u1EC3u? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.a), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 9, ctx.a, "CAD"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 12, ctx.a, "CAD", "code"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("B: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](12, 16, ctx.b, "CAD", "symbol", "4.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("B: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](15, 21, ctx.b, "CAD", "symbol-narrow", "4.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("B: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 26, ctx.b, "CLP"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("B: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 29, ctx.b, "CZK"), "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9923:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 8311);
/* harmony import */ var _atomics_atoms_atom_icon_atom_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomics/atoms/atom-icon/atom-icon.component */ 946);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 1852);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 8674);
/* harmony import */ var _atomics_atoms_atom_btn_search_atom_btn_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atomics/atoms/atom-btn-search/atom-btn-search.component */ 5145);
/* harmony import */ var _atomics_atoms_atom_input_atom_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./atomics/atoms/atom-input/atom-input.component */ 4398);
/* harmony import */ var _atomics_atoms_atom_menu_list_atom_menu_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./atomics/atoms/atom-menu-list/atom-menu-list.component */ 7512);
/* harmony import */ var _atomics_molecs_molec_box_molec_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atomics/molecs/molec-box/molec-box.component */ 5821);
/* harmony import */ var _atomics_molecs_molec_list_molec_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./atomics/molecs/molec-list/molec-list.component */ 2544);
/* harmony import */ var _atomics_molecs_molec_search_molec_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./atomics/molecs/molec-search/molec-search.component */ 7083);
/* harmony import */ var _atomics_organs_group_box_group_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./atomics/organs/group-box/group-box.component */ 9893);
/* harmony import */ var _atomics_organs_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./atomics/organs/group-list/group-list.component */ 5883);
/* harmony import */ var _atomics_organs_group_header_group_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./atomics/organs/group-header/group-header.component */ 1236);
/* harmony import */ var _atomics_organs_group_left_group_left_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./atomics/organs/group-left/group-left.component */ 2463);
/* harmony import */ var _pages_page_coin_page_coin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-coin/page-coin.component */ 2273);
/* harmony import */ var _atomics_atoms_atom_btn_coin_atom_btn_coin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./atomics/atoms/atom-btn-coin/atom-btn-coin.component */ 5188);
/* harmony import */ var _atomics_molecs_molec_header_coin_molec_header_coin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./atomics/molecs/molec-header-coin/molec-header-coin.component */ 2455);
/* harmony import */ var _atomics_molecs_molec_main_coin_molec_main_coin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./atomics/molecs/molec-main-coin/molec-main-coin.component */ 8090);
/* harmony import */ var _atomics_organs_group_coin_group_coin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./atomics/organs/group-coin/group-coin.component */ 7044);
/* harmony import */ var _atomics_teamplates_teamplate_coin_teamplate_coin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./atomics/teamplates/teamplate-coin/teamplate-coin.component */ 8035);
/* harmony import */ var _pages_page_dash_board_page_dash_board_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/page-dash-board/page-dash-board.component */ 4666);
/* harmony import */ var _atomics_teamplates_teamplate_dash_board_teamplate_dash_board_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./atomics/teamplates/teamplate-dash-board/teamplate-dash-board.component */ 2661);
/* harmony import */ var _nguniversal_common_clover__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @nguniversal/common/clover */ 3094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 7403);


























// import { MAT_DATE_LOCALE } from '@angular/material/core';
// import { registerLocaleData } from '@angular/common';
// import localeCs from '@angular/common/locales/cs';
// registerLocaleData(localeCs);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [
    // {provide: LOCALE_ID, useValue: 'cs' },
    // { provide: DEFAULT_CURRENCY_CODE, useValue: 'CZK' },
    // { provide: MAT_DATE_LOCALE, useValue: 'cs' },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule.withServerTransition({
                appId: 'myapp',
            }),
            _nguniversal_common_clover__WEBPACK_IMPORTED_MODULE_21__.RendererModule.forRoot(),
            _nguniversal_common_clover__WEBPACK_IMPORTED_MODULE_21__.TransferHttpCacheModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _atomics_atoms_atom_icon_atom_icon_component__WEBPACK_IMPORTED_MODULE_0__["default"],
        _atomics_atoms_atom_btn_search_atom_btn_search_component__WEBPACK_IMPORTED_MODULE_3__.AtomBtnSearchComponent,
        _atomics_atoms_atom_input_atom_input_component__WEBPACK_IMPORTED_MODULE_4__.AtomInputComponent,
        _atomics_atoms_atom_menu_list_atom_menu_list_component__WEBPACK_IMPORTED_MODULE_5__.AtomMenuListComponent,
        _atomics_molecs_molec_box_molec_box_component__WEBPACK_IMPORTED_MODULE_6__.MolecBoxComponent,
        _atomics_molecs_molec_list_molec_list_component__WEBPACK_IMPORTED_MODULE_7__.MolecListComponent,
        _atomics_molecs_molec_search_molec_search_component__WEBPACK_IMPORTED_MODULE_8__.MolecSearchComponent,
        _atomics_organs_group_box_group_box_component__WEBPACK_IMPORTED_MODULE_9__.GroupBoxComponent,
        _atomics_organs_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_10__.GroupListComponent,
        _atomics_organs_group_header_group_header_component__WEBPACK_IMPORTED_MODULE_11__.GroupHeaderComponent,
        _atomics_organs_group_left_group_left_component__WEBPACK_IMPORTED_MODULE_12__.GroupLeftComponent,
        _pages_page_coin_page_coin_component__WEBPACK_IMPORTED_MODULE_13__.PageCoinComponent,
        _atomics_atoms_atom_btn_coin_atom_btn_coin_component__WEBPACK_IMPORTED_MODULE_14__.AtomBtnCoinComponent,
        _atomics_molecs_molec_header_coin_molec_header_coin_component__WEBPACK_IMPORTED_MODULE_15__.MolecHeaderCoinComponent,
        _atomics_molecs_molec_main_coin_molec_main_coin_component__WEBPACK_IMPORTED_MODULE_16__.MolecMainCoinComponent,
        _atomics_organs_group_coin_group_coin_component__WEBPACK_IMPORTED_MODULE_17__.GroupCoinComponent,
        _atomics_teamplates_teamplate_coin_teamplate_coin_component__WEBPACK_IMPORTED_MODULE_18__.TeamplateCoinComponent,
        _pages_page_dash_board_page_dash_board_component__WEBPACK_IMPORTED_MODULE_19__.PageDashBoardComponent,
        _atomics_teamplates_teamplate_dash_board_teamplate_dash_board_component__WEBPACK_IMPORTED_MODULE_20__.TeamplateDashBoardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _nguniversal_common_clover__WEBPACK_IMPORTED_MODULE_21__.RendererModule, _nguniversal_common_clover__WEBPACK_IMPORTED_MODULE_21__.TransferHttpCacheModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule] }); })();


/***/ }),

/***/ 5188:
/*!************************************************************************!*\
  !*** ./src/app/atomics/atoms/atom-btn-coin/atom-btn-coin.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtomBtnCoinComponent": () => (/* binding */ AtomBtnCoinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7403);

class AtomBtnCoinComponent {
    constructor() { }
    ngOnInit() {
    }
}
AtomBtnCoinComponent.ɵfac = function AtomBtnCoinComponent_Factory(t) { return new (t || AtomBtnCoinComponent)(); };
AtomBtnCoinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AtomBtnCoinComponent, selectors: [["app-atom-btn-coin"]], inputs: { word: "word" }, decls: 2, vars: 1, consts: [[1, "rounded-lg", "m-2", "border", "text-green-900", "border-green-900", "flex", "justify-center", "items-center", "px-4", "py-2", "cursor-pointer", "hover:text-white", "hover:bg-green-900"]], template: function AtomBtnCoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.word, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdG9tLWJ0bi1jb2luLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5145:
/*!****************************************************************************!*\
  !*** ./src/app/atomics/atoms/atom-btn-search/atom-btn-search.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtomBtnSearchComponent": () => (/* binding */ AtomBtnSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7403);

class AtomBtnSearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
AtomBtnSearchComponent.ɵfac = function AtomBtnSearchComponent_Factory(t) { return new (t || AtomBtnSearchComponent)(); };
AtomBtnSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AtomBtnSearchComponent, selectors: [["app-atom-btn-search"]], decls: 3, vars: 0, consts: [["type", "submit"], [1, "bg-[#438ffe]", "px-5", "py-1.5", "transform", "motion-safe:hover:scale-110", "text-white"]], template: function AtomBtnSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdG9tLWJ0bi1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 946:
/*!****************************************************************!*\
  !*** ./src/app/atomics/atoms/atom-icon/atom-icon.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AtomIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 463);


class AtomIconComponent {
    constructor() {
        this.color1 = '';
        this.color2 = '';
        this.checkIcon = true;
        this.bg = '';
    }
    ngOnInit() {
    }
}
AtomIconComponent.ɵfac = function AtomIconComponent_Factory(t) { return new (t || AtomIconComponent)(); };
AtomIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AtomIconComponent, selectors: [["app-atom-icon"]], inputs: { name: "name", color1: "color1", color2: "color2", checkIcon: "checkIcon", bg: "bg" }, decls: 1, vars: 4, consts: [["aria-hidden", "true", 1, "cursor-pointer", 3, "ngClass"]], template: function AtomIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.checkIcon ? ctx.color1 : ctx.color2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".icon-color-blue[_ngcontent-%COMP%] {\n  color: #438ffe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0b20taWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJhdG9tLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1jb2xvci1ibHVle1xyXG4gICAgY29sb3I6ICM0MzhmZmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4398:
/*!******************************************************************!*\
  !*** ./src/app/atomics/atoms/atom-input/atom-input.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtomInputComponent": () => (/* binding */ AtomInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7403);

class AtomInputComponent {
    constructor() { }
    ngOnInit() {
    }
}
AtomInputComponent.ɵfac = function AtomInputComponent_Factory(t) { return new (t || AtomInputComponent)(); };
AtomInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AtomInputComponent, selectors: [["app-atom-input"]], decls: 3, vars: 0, consts: [[1, "bg-[#f5f7f9]", "px-1", "py-1.5"], ["aria-hidden", "true", 1, "fa", "fa-search", "px-1", "text-[#c1c6d0]"], ["type", "text", "placeholder", "Search for transaction, item, etc", "size", "50", 1, "text-sm", "bg-[#f5f7f9]", "focus:outline-none"]], template: function AtomInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdG9tLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7512:
/*!**************************************************************************!*\
  !*** ./src/app/atomics/atoms/atom-menu-list/atom-menu-list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtomMenuListComponent": () => (/* binding */ AtomMenuListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7403);

class AtomMenuListComponent {
    constructor() { }
    ngOnInit() {
    }
}
AtomMenuListComponent.ɵfac = function AtomMenuListComponent_Factory(t) { return new (t || AtomMenuListComponent)(); };
AtomMenuListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AtomMenuListComponent, selectors: [["app-atom-menu-list"]], decls: 11, vars: 0, consts: [[1, "grid", "grid-cols-10", "pt-4", "pb-2", "px-8", "gap-x-4", "font-bold", "text-lg"], [1, "col-span-1"], [1, "col-span-5", "ml-24"], [1, "col-span-2"]], template: function AtomMenuListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdG9tLW1lbnUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5821:
/*!*****************************************************************!*\
  !*** ./src/app/atomics/molecs/molec-box/molec-box.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MolecBoxComponent": () => (/* binding */ MolecBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7403);

class MolecBoxComponent {
    constructor() { }
    ngOnInit() {
    }
}
MolecBoxComponent.ɵfac = function MolecBoxComponent_Factory(t) { return new (t || MolecBoxComponent)(); };
MolecBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MolecBoxComponent, selectors: [["app-molec-box"]], inputs: { box: "box" }, decls: 11, vars: 11, consts: [[1, "bg-white", "hover:bg-[#438FFE]", "w-full", "px-4", "pt-4", "pb-2", "text-black", "hover:text-white", "box", "cursor-pointer"], [1, "flex", "justify-between", "items-center"], [1, "flex", "justify-center", "items-center", "h-12", "w-12", "bg-[#f4f9f4]", "box1"], ["aria-hidden", "true"], [1, "py-1"], [1, "font-semibold", "text-xl"], [1, "border-t", "pt-2", "mt-6"]], template: function MolecBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("fa ", ctx.box.icon1, " ", ctx.box.color1, " text-2xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("fa ", ctx.box.icon2, " ", ctx.box.color2, " text-5xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.box.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.box.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.box.title);
    } }, styles: [".box[_ngcontent-%COMP%]:hover   .box1[_ngcontent-%COMP%] {\n  background-color: #559afe;\n  color: white;\n}\n\n.box[_ngcontent-%COMP%]:hover   .box1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.box[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.icon-color-green[_ngcontent-%COMP%] {\n  color: #8bc38a;\n}\n\n.icon-color-red[_ngcontent-%COMP%] {\n  color: #fe7d54;\n}\n\n.icon-color-blue[_ngcontent-%COMP%] {\n  color: #438ffe;\n}\n\n.icon-color-lightGreen[_ngcontent-%COMP%] {\n  color: #83bcbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbGVjLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtBQU9KIiwiZmlsZSI6Im1vbGVjLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3g6aG92ZXIgLmJveDEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OWFmZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYm94OmhvdmVyIC5ib3gxIGkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ib3g6aG92ZXIgaSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmljb24tY29sb3ItZ3JlZW57XHJcbiAgICBjb2xvcjogIzhiYzM4YTtcclxufVxyXG4uaWNvbi1jb2xvci1yZWR7XHJcbiAgICBjb2xvcjogI2ZlN2Q1NDtcclxufVxyXG4uaWNvbi1jb2xvci1ibHVle1xyXG4gICAgY29sb3I6ICM0MzhmZmU7XHJcbn1cclxuLmljb24tY29sb3ItbGlnaHRHcmVlbntcclxuICAgIGNvbG9yOiAjODNiY2JkO1xyXG59Il19 */"] });


/***/ }),

/***/ 2455:
/*!*********************************************************************************!*\
  !*** ./src/app/atomics/molecs/molec-header-coin/molec-header-coin.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MolecHeaderCoinComponent": () => (/* binding */ MolecHeaderCoinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7403);

class MolecHeaderCoinComponent {
    constructor() { }
    ngOnInit() {
    }
}
MolecHeaderCoinComponent.ɵfac = function MolecHeaderCoinComponent_Factory(t) { return new (t || MolecHeaderCoinComponent)(); };
MolecHeaderCoinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MolecHeaderCoinComponent, selectors: [["app-molec-header-coin"]], decls: 5, vars: 0, consts: [[1, "flex", "items-center", "py-6", "justify-center", "relative"], [1, "text-5xl", "text-green-900"], [1, "bg-green-500", "absolute", "px-6", "py-2", "rounded-full", "text-white", "right-20", "cursor-pointer"]], template: function MolecHeaderCoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Danh S\u00E1ch Mua Coin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2xlYy1oZWFkZXItY29pbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2544:
/*!*******************************************************************!*\
  !*** ./src/app/atomics/molecs/molec-list/molec-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MolecListComponent": () => (/* binding */ MolecListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7403);

class MolecListComponent {
    constructor() { }
    ngOnInit() {
    }
}
MolecListComponent.ɵfac = function MolecListComponent_Factory(t) { return new (t || MolecListComponent)(); };
MolecListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MolecListComponent, selectors: [["app-molec-list"]], inputs: { item: "item" }, decls: 14, vars: 6, consts: [[1, "font-semibold", "grid", "grid-cols-10", "px-4", "gap-x-4"], [1, "col-span-1", "pl-1", "flex", "items-center"], [1, "col-span-5", "flex"], [1, "w-20"], ["alt", "", 1, "w-full", 3, "src"], [1, "ml-4", "flex", "items-center"], [1, "col-span-2", "flex", "items-center", "text-[#7eb2fc]"], [1, "col-span-1", "flex", "items-center"]], template: function MolecListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.no);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.item.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.book, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.sold);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.view);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2xlYy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8090:
/*!*****************************************************************************!*\
  !*** ./src/app/atomics/molecs/molec-main-coin/molec-main-coin.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MolecMainCoinComponent": () => (/* binding */ MolecMainCoinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 463);
/* harmony import */ var _atoms_atom_btn_coin_atom_btn_coin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/atom-btn-coin/atom-btn-coin.component */ 5188);



function MolecMainCoinComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menu_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menu_r3.menu);
} }
function MolecMainCoinComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r4.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.money);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.time);
} }
function MolecMainCoinComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-atom-btn-coin", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const icon_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("word", icon_r5.name);
} }
class MolecMainCoinComponent {
    constructor() {
        this.items = [
            {
                userName: 'Username: hiepxanh',
                code: 'Mã nạp tiền: 7c2gtf',
                money: 'Số tiền: đ10,000 (Bank)',
                time: 'Thời gian: 01/03/2022 15:09'
            }
        ];
        this.menu = [
            {
                menu: 'Chưa Giải Quyết',
            },
            {
                menu: 'Có Vấn Đề',
            },
            {
                menu: 'Lưu Trữ',
            },
            {
                menu: 'Đã Nạp',
            }
        ];
        this.icons = [
            {
                name: 'Nhả Coi'
            },
            {
                name: 'Lưu Trữ'
            },
            {
                name: 'Thừa Tiền'
            },
            {
                name: 'Thiếu Tiền'
            },
        ];
    }
    ngOnInit() {
    }
}
MolecMainCoinComponent.ɵfac = function MolecMainCoinComponent_Factory(t) { return new (t || MolecMainCoinComponent)(); };
MolecMainCoinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MolecMainCoinComponent, selectors: [["app-molec-main-coin"]], decls: 9, vars: 3, consts: [[1, "bg-slate-300", "h-screen", "mx-40", "overflow-auto"], [1, "flex", "py-3", "font-bold", "text-2xl", "bg-slate-200", "text-slate-600"], [4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-10", "my-6", "mx-10"], [1, "col-span-6", "bg-green-900", "rounded-l-lg", "text-white", "pl-4", "py-1"], ["class", "py-2", 4, "ngFor", "ngForOf"], [1, "col-span-4", "bg-slate-200", "rounded-r-lg", "flex", "justify-center", "items-center"], [1, "grid", "grid-cols-12"], ["class", "col-span-6", 4, "ngFor", "ngForOf"], [1, "pl-5"], [1, "py-2"], [1, "py-1"], [1, "col-span-6"], [3, "word"]], template: function MolecMainCoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MolecMainCoinComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MolecMainCoinComponent_div_5_Template, 9, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MolecMainCoinComponent_div_8_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.icons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _atoms_atom_btn_coin_atom_btn_coin_component__WEBPACK_IMPORTED_MODULE_0__.AtomBtnCoinComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2xlYy1tYWluLWNvaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7083:
/*!***********************************************************************!*\
  !*** ./src/app/atomics/molecs/molec-search/molec-search.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MolecSearchComponent": () => (/* binding */ MolecSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _atoms_atom_input_atom_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/atom-input/atom-input.component */ 4398);
/* harmony import */ var _atoms_atom_btn_search_atom_btn_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/atom-btn-search/atom-btn-search.component */ 5145);



class MolecSearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
MolecSearchComponent.ɵfac = function MolecSearchComponent_Factory(t) { return new (t || MolecSearchComponent)(); };
MolecSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MolecSearchComponent, selectors: [["app-molec-search"]], decls: 3, vars: 0, consts: [[1, "flex", "items-center"]], template: function MolecSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-atom-input")(2, "app-atom-btn-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_atoms_atom_input_atom_input_component__WEBPACK_IMPORTED_MODULE_0__.AtomInputComponent, _atoms_atom_btn_search_atom_btn_search_component__WEBPACK_IMPORTED_MODULE_1__.AtomBtnSearchComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2xlYy1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9893:
/*!*****************************************************************!*\
  !*** ./src/app/atomics/organs/group-box/group-box.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupBoxComponent": () => (/* binding */ GroupBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 463);
/* harmony import */ var _molecs_molec_box_molec_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../molecs/molec-box/molec-box.component */ 5821);



function GroupBoxComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-molec-box", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const box_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("box", box_r1);
} }
class GroupBoxComponent {
    constructor() {
        this.boxs = [
            {
                icon1: 'fa-eye',
                icon2: 'fa-line-chart',
                total: 'total Views',
                number: '308.402',
                title: 'Start from 1 Jan 2021',
                color1: 'icon-color-green',
                color2: 'icon-color-red'
            },
            {
                icon1: 'fa-shopping-bag',
                icon2: 'fa-line-chart',
                total: 'total Book',
                number: '10.820',
                title: 'Add new Project',
                color1: 'icon-color-green',
                color2: 'icon-color-red'
            },
            {
                icon1: 'fa-user',
                icon2: 'fa-line-chart',
                total: 'total Users',
                number: '8425',
                title: 'New user noted every week',
                color1: 'icon-color-blue',
                color2: 'icon-color-green'
            },
            {
                icon1: 'fa-shopping-cart',
                icon2: 'fa-line-chart',
                total: 'total Sells',
                number: '1.028.623',
                title: 'Start from 1 Jan 2021',
                color1: 'icon-color-lightGreen',
                color2: 'icon-color-green'
            }
        ];
    }
    ngOnInit() {
    }
}
GroupBoxComponent.ɵfac = function GroupBoxComponent_Factory(t) { return new (t || GroupBoxComponent)(); };
GroupBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupBoxComponent, selectors: [["app-group-box"]], decls: 4, vars: 1, consts: [[1, "font-medium", "text-xl", "py-6"], [1, "grid", "grid-cols-12", "gap-x-12"], ["class", "col-span-3", 4, "ngFor", "ngForOf"], [1, "col-span-3"], [3, "box"]], template: function GroupBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " DashBoard\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GroupBoxComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.boxs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _molecs_molec_box_molec_box_component__WEBPACK_IMPORTED_MODULE_0__.MolecBoxComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1ib3guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7044:
/*!*******************************************************************!*\
  !*** ./src/app/atomics/organs/group-coin/group-coin.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupCoinComponent": () => (/* binding */ GroupCoinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _molecs_molec_header_coin_molec_header_coin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../molecs/molec-header-coin/molec-header-coin.component */ 2455);
/* harmony import */ var _molecs_molec_main_coin_molec_main_coin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../molecs/molec-main-coin/molec-main-coin.component */ 8090);



class GroupCoinComponent {
    constructor() { }
    ngOnInit() {
    }
}
GroupCoinComponent.ɵfac = function GroupCoinComponent_Factory(t) { return new (t || GroupCoinComponent)(); };
GroupCoinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GroupCoinComponent, selectors: [["app-group-coin"]], decls: 2, vars: 0, template: function GroupCoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-molec-header-coin")(1, "app-molec-main-coin");
    } }, directives: [_molecs_molec_header_coin_molec_header_coin_component__WEBPACK_IMPORTED_MODULE_0__.MolecHeaderCoinComponent, _molecs_molec_main_coin_molec_main_coin_component__WEBPACK_IMPORTED_MODULE_1__.MolecMainCoinComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1jb2luLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1236:
/*!***********************************************************************!*\
  !*** ./src/app/atomics/organs/group-header/group-header.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupHeaderComponent": () => (/* binding */ GroupHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _atoms_atom_icon_atom_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/atom-icon/atom-icon.component */ 946);
/* harmony import */ var _molecs_molec_search_molec_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../molecs/molec-search/molec-search.component */ 7083);



class GroupHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
GroupHeaderComponent.ɵfac = function GroupHeaderComponent_Factory(t) { return new (t || GroupHeaderComponent)(); };
GroupHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GroupHeaderComponent, selectors: [["app-group-header"]], decls: 11, vars: 4, consts: [[1, "h-24", "bg-white", "relative", "flex", "items-center", "border-b-2"], [1, "w-24", "flex", "justify-center", "text-xl"], [1, "text-[#438ffe]", "cursor-pointer", "-ml-2", 3, "name"], [1, "absolute", "w-1.5", "h-1.5", "bg-[#fe764b]", "rounded-full", 2, "right", "188px", "top", "34px"], [1, "absolute", "w-1.5", "h-1.5", "bg-[#fe764b]", "rounded-full", 2, "right", "152px", "top", "34px"], [1, "pl-14"], [1, "absolute", "right-20", "flex", "text-[#c2c6d1]", "text-xl"], [1, "mr-4", 3, "name"], [3, "name"], ["src", "assets/img/manh.jpg", "width", "30px", "height", "30px", "alt", "", 1, "rounded-full", "mx-4", "cursor-pointer"]], template: function GroupHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-atom-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "app-molec-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-atom-icon", 7)(8, "app-atom-icon", 8)(9, "img", 9)(10, "app-atom-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "fa-square-o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "fa-commenting-o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "fa-bell-o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "fa-angle-down");
    } }, directives: [_atoms_atom_icon_atom_icon_component__WEBPACK_IMPORTED_MODULE_0__["default"], _molecs_molec_search_molec_search_component__WEBPACK_IMPORTED_MODULE_1__.MolecSearchComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2463:
/*!*******************************************************************!*\
  !*** ./src/app/atomics/organs/group-left/group-left.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupLeftComponent": () => (/* binding */ GroupLeftComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _atoms_atom_icon_atom_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/atom-icon/atom-icon.component */ 946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 463);



function GroupLeftComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-atom-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", icon_r2);
} }
function GroupLeftComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-atom-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", icon_r3);
} }
class GroupLeftComponent {
    constructor() {
        this.icons = [
            'fa-shopping-cart', 'fa-file-text', 'fa-cog'
        ];
        this.icons2 = [
            'fa-circle', 'fa-sign-out'
        ];
    }
    ngOnInit() {
    }
}
GroupLeftComponent.ɵfac = function GroupLeftComponent_Factory(t) { return new (t || GroupLeftComponent)(); };
GroupLeftComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupLeftComponent, selectors: [["app-group-left"]], decls: 6, vars: 3, consts: [[1, "w-24", "h-full", "bg-white", "relative", "text-xl", "-ml-0.5"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "cursor-pointer", "text-[#438ffe]", "py-4", "mt-3", 3, "name"], ["class", "py-4 text-[#abb1bf]", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "text-[#abb1bf]", "absolute", "bottom-5"], ["class", "py-5", 4, "ngFor", "ngForOf"], [1, "py-4", "text-[#abb1bf]"], [1, "cursor-pointer", 3, "name"], [1, "py-5"], [3, "name"]], template: function GroupLeftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-atom-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GroupLeftComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GroupLeftComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "fa-plus-square-o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.icons);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.icons2);
    } }, directives: [_atoms_atom_icon_atom_icon_component__WEBPACK_IMPORTED_MODULE_0__["default"], _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5883:
/*!*******************************************************************!*\
  !*** ./src/app/atomics/organs/group-list/group-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupListComponent": () => (/* binding */ GroupListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _atoms_atom_menu_list_atom_menu_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/atom-menu-list/atom-menu-list.component */ 7512);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 463);
/* harmony import */ var _molecs_molec_list_molec_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../molecs/molec-list/molec-list.component */ 2544);




function GroupListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-molec-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1);
} }
class GroupListComponent {
    constructor() {
        this.items = [
            {
                no: '1',
                img: 'anh1.jpg',
                book: 'News Mobile App UI KIT F.',
                author: 'Cam Thuong',
                sold: '10',
                view: '320'
            },
            {
                no: '2',
                img: 'anh2.jpg',
                book: 'News Mobile App UI KIT F.',
                author: 'Cam Thuong',
                sold: '10',
                view: '320'
            },
            {
                no: '3',
                img: 'anh3.jpg',
                book: 'News Mobile App UI KIT F.',
                author: 'Cam Thuong',
                sold: '10',
                view: '320'
            },
            {
                no: '4',
                img: 'anh4.jpg',
                book: 'News Mobile App UI KIT F.',
                author: 'Cam Thuong',
                sold: '10',
                view: '320'
            },
        ];
    }
    ngOnInit() {
    }
}
GroupListComponent.ɵfac = function GroupListComponent_Factory(t) { return new (t || GroupListComponent)(); };
GroupListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GroupListComponent, selectors: [["app-group-list"]], decls: 3, vars: 1, consts: [[1, "bg-white", "pb-2"], ["class", "bg-[#f5f7f9] my-4 py-2 mx-4", 4, "ngFor", "ngForOf"], [1, "bg-[#f5f7f9]", "my-4", "py-2", "mx-4"], [3, "item"]], template: function GroupListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-atom-menu-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, GroupListComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_atoms_atom_menu_list_atom_menu_list_component__WEBPACK_IMPORTED_MODULE_0__.AtomMenuListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _molecs_molec_list_molec_list_component__WEBPACK_IMPORTED_MODULE_1__.MolecListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8035:
/*!*******************************************************************************!*\
  !*** ./src/app/atomics/teamplates/teamplate-coin/teamplate-coin.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamplateCoinComponent": () => (/* binding */ TeamplateCoinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _organs_group_coin_group_coin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../organs/group-coin/group-coin.component */ 7044);


class TeamplateCoinComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamplateCoinComponent.ɵfac = function TeamplateCoinComponent_Factory(t) { return new (t || TeamplateCoinComponent)(); };
TeamplateCoinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TeamplateCoinComponent, selectors: [["app-teamplate-coin"]], decls: 1, vars: 0, template: function TeamplateCoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-group-coin");
    } }, directives: [_organs_group_coin_group_coin_component__WEBPACK_IMPORTED_MODULE_0__.GroupCoinComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtcGxhdGUtY29pbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2661:
/*!*******************************************************************************************!*\
  !*** ./src/app/atomics/teamplates/teamplate-dash-board/teamplate-dash-board.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamplateDashBoardComponent": () => (/* binding */ TeamplateDashBoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _organs_group_header_group_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../organs/group-header/group-header.component */ 1236);
/* harmony import */ var _organs_group_left_group_left_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../organs/group-left/group-left.component */ 2463);
/* harmony import */ var _organs_group_box_group_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organs/group-box/group-box.component */ 9893);
/* harmony import */ var _organs_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organs/group-list/group-list.component */ 5883);





class TeamplateDashBoardComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamplateDashBoardComponent.ɵfac = function TeamplateDashBoardComponent_Factory(t) { return new (t || TeamplateDashBoardComponent)(); };
TeamplateDashBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TeamplateDashBoardComponent, selectors: [["app-teamplate-dash-board"]], decls: 11, vars: 0, consts: [[1, "bg-[#f8f8f8]"], [1, "grid", "grid-cols-10"], [1, "col-span-1"], [1, "col-span-9", "pr-12"], [1, "grid", "grid-cols-11", "gap-x-6", "mt-8"], [1, "col-span-7"], [1, "col-span-4"]], template: function TeamplateDashBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-group-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-group-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-group-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-group-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } }, directives: [_organs_group_header_group_header_component__WEBPACK_IMPORTED_MODULE_0__.GroupHeaderComponent, _organs_group_left_group_left_component__WEBPACK_IMPORTED_MODULE_1__.GroupLeftComponent, _organs_group_box_group_box_component__WEBPACK_IMPORTED_MODULE_2__.GroupBoxComponent, _organs_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_3__.GroupListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtcGxhdGUtZGFzaC1ib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2273:
/*!********************************************************!*\
  !*** ./src/app/pages/page-coin/page-coin.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageCoinComponent": () => (/* binding */ PageCoinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _atomics_teamplates_teamplate_coin_teamplate_coin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atomics/teamplates/teamplate-coin/teamplate-coin.component */ 8035);


class PageCoinComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageCoinComponent.ɵfac = function PageCoinComponent_Factory(t) { return new (t || PageCoinComponent)(); };
PageCoinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageCoinComponent, selectors: [["app-page-coin"]], decls: 1, vars: 0, template: function PageCoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-teamplate-coin");
    } }, directives: [_atomics_teamplates_teamplate_coin_teamplate_coin_component__WEBPACK_IMPORTED_MODULE_0__.TeamplateCoinComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4666:
/*!********************************************************************!*\
  !*** ./src/app/pages/page-dash-board/page-dash-board.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDashBoardComponent": () => (/* binding */ PageDashBoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _atomics_teamplates_teamplate_dash_board_teamplate_dash_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atomics/teamplates/teamplate-dash-board/teamplate-dash-board.component */ 2661);


class PageDashBoardComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageDashBoardComponent.ɵfac = function PageDashBoardComponent_Factory(t) { return new (t || PageDashBoardComponent)(); };
PageDashBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageDashBoardComponent, selectors: [["app-page-dash-board"]], decls: 1, vars: 0, template: function PageDashBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-teamplate-dash-board");
    } }, directives: [_atomics_teamplates_teamplate_dash_board_teamplate_dash_board_component__WEBPACK_IMPORTED_MODULE_0__.TeamplateDashBoardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWRhc2gtYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4193:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8303:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 8311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7403);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 9923);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4193);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8303)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map