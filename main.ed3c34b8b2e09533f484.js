/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal)\n/* harmony export */ });\nconst closeModal = () => {\r\n  const modalShell = document.querySelector(\"modal-shell\");\r\n  document.body.removeChild(modalShell);\r\n};\r\n\n\n//# sourceURL=webpack://web-components-roy-tutorial/./src/common/index.js?");

/***/ }),

/***/ "./src/components/AddedMessage.js":
/*!****************************************!*\
  !*** ./src/components/AddedMessage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common/index.js\");\n\r\n\r\nconst template = document.createElement(\"template\");\r\ntemplate.innerHTML = `\r\n<style>\r\n\r\n.container {\r\n  text-align: center;\r\n}\r\n\r\n.message {\r\n  margin-top: 36px;\r\n  margin-bottom: 36px;\r\n  font-size: 27px;\r\n  font-weight: 700;\r\n}\r\n\r\n</style>\r\n\r\n<div class=\"container\">\r\n  <p class=\"message\">商品已加入您的購物車</p>\r\n  <button is=\"submit-button\">前往結賬</button>\r\n  <button is=\"normal-button\" class=\"continue-purchase\">繼續購物</button>\r\n</div>\r\n\r\n`;\r\n\r\nclass AddedMessage extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n\r\n    this.showInfo = true;\r\n\r\n    this.attachShadow({ mode: \"open\" });\r\n    this.shadowRoot.appendChild(template.content.cloneNode(true));\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.shadowRoot\r\n      .querySelector(\".continue-purchase\")\r\n      .addEventListener(\"click\", _common__WEBPACK_IMPORTED_MODULE_0__.closeModal);\r\n  }\r\n\r\n  disconnectedCallback() {\r\n    this.shadowRoot\r\n      .querySelector(\".continue-purchase\")\r\n      .removeEventListener(\"click\", _common__WEBPACK_IMPORTED_MODULE_0__.closeModal);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddedMessage);\r\n\n\n//# sourceURL=webpack://web-components-roy-tutorial/./src/components/AddedMessage.js?");

/***/ }),

/***/ "./src/components/ModalShell.js":
/*!**************************************!*\
  !*** ./src/components/ModalShell.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common/index.js\");\n\r\n\r\nconst template = document.createElement(\"template\");\r\ntemplate.innerHTML = `\r\n<style>\r\n.modal-shell {\r\n  width: 95%;\r\n  border-radius: 9px;\r\n  border: solid 2px black;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .modal-shell {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  justify-content: end;\r\n  border-bottom: solid 2px black;\r\n}\r\n\r\n.close {\r\n  padding: 9px;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-content {\r\n  padding: 9px;\r\n}\r\n\r\n</style>\r\n\r\n<div class=\"modal-shell\">\r\n  <div class=\"modal-header\">\r\n    <span class=\"close\">X</span>\r\n  </div>\r\n  <div class=\"modal-content\">\r\n    <slot name=\"modal-content\" />\r\n  </div>\r\n</div>\r\n`;\r\n\r\nclass ModalShell extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n\r\n    this.showInfo = true;\r\n\r\n    this.attachShadow({ mode: \"open\" });\r\n    this.shadowRoot.appendChild(template.content.cloneNode(true));\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.shadowRoot\r\n      .querySelector(\".close\")\r\n      .addEventListener(\"click\", _common__WEBPACK_IMPORTED_MODULE_0__.closeModal);\r\n  }\r\n\r\n  disconnectedCallback() {\r\n    this.shadowRoot\r\n      .querySelector(\".close\")\r\n      .removeEventListener(\"click\", _common__WEBPACK_IMPORTED_MODULE_0__.closeModal);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalShell);\r\n\n\n//# sourceURL=webpack://web-components-roy-tutorial/./src/components/ModalShell.js?");

/***/ }),

/***/ "./src/components/PurchaseQuestionnaire.js":
/*!*************************************************!*\
  !*** ./src/components/PurchaseQuestionnaire.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst template = document.createElement(\"template\");\r\ntemplate.innerHTML = `\r\n<style>\r\n\r\nfieldset {\r\n  margin-bottom: 9px;\r\n  border-radius: 9px;\r\n  border: solid 2px black;\r\n}\r\n\r\n.button-container {\r\n  text-align: center;\r\n}\r\n\r\n</style>\r\n\r\n<div class=\"container\">\r\n  <form>\r\n    <fieldset>\r\n      <legend>購買原因</legend>\r\n\r\n      <input type=\"radio\" id=\"self\" name=\"q1\" required />\r\n      <label for=\"self\">自己用</label><br />\r\n\r\n      <input type=\"radio\" id=\"family&friend\" name=\"q1\" required />\r\n      <label for=\"family&friend\">幫家人朋友購買</label><br />\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n      <legend>是否了解購買須知</legend>\r\n\r\n      <input type=\"radio\" id=\"yes\" name=\"q2\" required />\r\n      <label for=\"yes\">了解</label><br />\r\n\r\n      <input type=\"radio\" id=\"no\" name=\"q2\" required />\r\n      <label for=\"no\">不了解</label><br />\r\n    </fieldset>\r\n\r\n    <div class=\"button-container\">\r\n      <button is=\"submit-button\" type=\"submit\">送出</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n`;\r\n\r\nclass PurchaseQuestionnaire extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n\r\n    this.showInfo = true;\r\n\r\n    this.attachShadow({ mode: \"open\" });\r\n    this.shadowRoot.appendChild(template.content.cloneNode(true));\r\n  }\r\n\r\n  addToCart(event) {\r\n    event.preventDefault();\r\n    console.log(\"add product to cart...\");\r\n    document.querySelector('div[slot=\"modal-content\"]').innerHTML =\r\n      \"<added-message />\";\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.shadowRoot\r\n      .querySelector(\"form\")\r\n      .addEventListener(\"submit\", this.addToCart);\r\n  }\r\n\r\n  disconnectedCallback() {\r\n    this.shadowRoot\r\n      .querySelector(\"form\")\r\n      .removeEventListener(\"submit\", this.addToCart);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseQuestionnaire);\r\n\n\n//# sourceURL=webpack://web-components-roy-tutorial/./src/components/PurchaseQuestionnaire.js?");

/***/ }),

/***/ "./src/components/button/NormalButton.js":
/*!***********************************************!*\
  !*** ./src/components/button/NormalButton.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NormalButton extends HTMLButtonElement {\r\n  constructor() {\r\n    self = super();\r\n    self.style.cssText = `\r\n        font-weight: 700;\r\n        border-radius: 9px;\r\n        background-color: white;\r\n        padding: 9px 18px;\r\n        cursor: pointer;\r\n    `;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NormalButton);\r\n\n\n//# sourceURL=webpack://web-components-roy-tutorial/./src/components/button/NormalButton.js?");

/***/ }),

/***/ "./src/components/button/SubmitButton.js":
/*!***********************************************!*\
  !*** ./src/components/button/SubmitButton.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NormalButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NormalButton */ \"./src/components/button/NormalButton.js\");\n\r\n\r\nclass SubmitButton extends _NormalButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    self = super();\r\n    self.style.backgroundColor = 'aqua';\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitButton);\r\n\n\n//# sourceURL=webpack://web-components-roy-tutorial/./src/components/button/SubmitButton.js?");

/***/ }),

/***/ "./src/components/productInfo/ProductInfo.js":
/*!***************************************************!*\
  !*** ./src/components/productInfo/ProductInfo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst template = document.createElement(\"template\");\r\ntemplate.innerHTML = `\r\n<style>\r\n\r\n.product-image {\r\n  max-width: 200px;\r\n}\r\n\r\n.product-name {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n.product-price {\r\n  font-weight: 700;\r\n  margin-bottom: 36px\r\n}\r\n\r\n.button-container {\r\n  text-align: center;\r\n}\r\n\r\n</style>\r\n\r\n<img class=\"product-image\" />\r\n<p class=\"product-name\"></p>\r\n<p class=\"product-price\"></p>\r\n<div class=\"button-container\">\r\n  <button is=\"submit-button\" class=\"add-to-cart\">加入購物車</button>\r\n</div>\r\n`;\r\n\r\nclass ProductInfo extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    \r\n    this.attachShadow({ mode: \"open\" });\r\n    this.shadowRoot.appendChild(template.content.cloneNode(true));\r\n\r\n    this.shadowRoot.querySelector(\".product-image\").src =\r\n      this.getAttribute(\"product-image\");\r\n    this.shadowRoot.querySelector(\".product-name\").innerText =\r\n      this.getAttribute(\"product-name\");\r\n    this.shadowRoot.querySelector(\r\n      \".product-price\"\r\n    ).innerText = `￥${this.getAttribute(\"product-price\")} (含稅)`;\r\n  }\r\n\r\n  static get observedAttributes() {\r\n    return [\"product-image\", \"product-name\", \"product-price\"];\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.shadowRoot\r\n      .querySelector(\".add-to-cart\")\r\n      .addEventListener(\"click\", this.addToCart);\r\n  }\r\n\r\n  disconnectedCallback() {\r\n    this.shadowRoot\r\n      .querySelector(\".add-to-cart\")\r\n      .removeEventListener(\"click\", this.addToCart);\r\n  }\r\n\r\n  attributeChangedCallback(name, oldValue, newValue) {\r\n    switch (name) {\r\n      case \"product-image\":\r\n        if (oldValue === newValue) break;\r\n        this.shadowRoot.querySelector(\".product-image\").src = newValue;\r\n        break;\r\n\r\n      case \"product-name\":\r\n        if (oldValue === newValue) break;\r\n        this.shadowRoot.querySelector(\".product-name\").innerText = newValue;\r\n\r\n      case \"product-price\":\r\n        if (oldValue === newValue) break;\r\n        this.shadowRoot.querySelector(\r\n          \".product-price\"\r\n        ).innerText = `￥${newValue} (含稅)`;\r\n        break;\r\n\r\n      default:\r\n        break;\r\n    }\r\n  }\r\n\r\n  addToCart() {\r\n    console.log(\"add product to cart...\");\r\n    document.querySelector('div[slot=\"modal-content\"]').innerHTML =\r\n      \"<added-message />\";\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInfo);\r\n\n\n//# sourceURL=webpack://web-components-roy-tutorial/./src/components/productInfo/ProductInfo.js?");

/***/ }),

/***/ "./src/components/productInfo/ProductInfoGetSet.js":
/*!*********************************************************!*\
  !*** ./src/components/productInfo/ProductInfoGetSet.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst template = document.createElement(\"template\");\r\ntemplate.innerHTML = `\r\n<style>\r\n\r\n.product-image {\r\n  max-width: 200px;\r\n}\r\n\r\n.product-name {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n.product-price {\r\n  font-weight: 700;\r\n  margin-bottom: 36px\r\n}\r\n\r\n.button-container {\r\n  text-align: center;\r\n}\r\n\r\n</style>\r\n\r\n<img class=\"product-image\" />\r\n<p class=\"product-name\"></p>\r\n<p class=\"product-price\"></p>\r\n<div class=\"button-container\">\r\n  <button is=\"submit-button\" class=\"add-to-cart\">加入購物車</button>\r\n</div>\r\n`;\r\n\r\nclass ProductInfoGetSet extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n\r\n    this._addToCart = this.defaultAddToCart;\r\n\r\n    this.attachShadow({ mode: \"open\" });\r\n    this.shadowRoot.appendChild(template.content.cloneNode(true));\r\n\r\n    this.shadowRoot.querySelector(\".product-image\").src =\r\n      this.getAttribute(\"product-image\");\r\n    this.shadowRoot.querySelector(\".product-name\").innerText =\r\n      this.getAttribute(\"product-name\");\r\n    this.shadowRoot.querySelector(\r\n      \".product-price\"\r\n    ).innerText = `￥${this.getAttribute(\"product-price\")} (含稅)`;\r\n  }\r\n\r\n  static get observedAttributes() {\r\n    return [\"product-image\", \"product-name\", \"product-price\"];\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.shadowRoot\r\n      .querySelector(\".add-to-cart\")\r\n      .addEventListener(\"click\", this._addToCart);\r\n  }\r\n\r\n  disconnectedCallback() {\r\n    this.shadowRoot\r\n      .querySelector(\".add-to-cart\")\r\n      .removeEventListener(\"click\", this._addToCart);\r\n  }\r\n\r\n  attributeChangedCallback(name, oldValue, newValue) {\r\n    switch (name) {\r\n      case \"product-image\":\r\n        if (oldValue === newValue) break;\r\n        this.shadowRoot.querySelector(\".product-image\").src = newValue;\r\n        break;\r\n\r\n      case \"product-name\":\r\n        if (oldValue === newValue) break;\r\n        this.shadowRoot.querySelector(\".product-name\").innerText = newValue;\r\n\r\n      case \"product-price\":\r\n        if (oldValue === newValue) break;\r\n        this.shadowRoot.querySelector(\r\n          \".product-price\"\r\n        ).innerText = `￥${newValue} (含稅)`;\r\n        break;\r\n\r\n      default:\r\n        break;\r\n    }\r\n  }\r\n\r\n  defaultAddToCart() {\r\n    console.log(\"add product to cart...\");\r\n    document.querySelector('div[slot=\"modal-content\"]').innerHTML =\r\n      \"<added-message />\";\r\n  }\r\n\r\n  get addToCart() {\r\n    return this._addToCart;\r\n  }\r\n  set addToCart(newAddToCart) {\r\n    this._addToCart = newAddToCart;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInfoGetSet);\r\n\n\n//# sourceURL=webpack://web-components-roy-tutorial/./src/components/productInfo/ProductInfoGetSet.js?");

/***/ }),

/***/ "./src/components/productInfo/SundrugProductInfo.js":
/*!**********************************************************!*\
  !*** ./src/components/productInfo/SundrugProductInfo.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductInfo */ \"./src/components/productInfo/ProductInfo.js\");\n\r\n\r\nclass SundrugProductInfo extends _ProductInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n  }\r\n\r\n  addToCart() {\r\n    document.querySelector('div[slot=\"modal-content\"]').innerHTML =\r\n      \"<purchase-questionnaire />\";\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SundrugProductInfo);\r\n\n\n//# sourceURL=webpack://web-components-roy-tutorial/./src/components/productInfo/SundrugProductInfo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_button_SubmitButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button/SubmitButton */ \"./src/components/button/SubmitButton.js\");\n/* harmony import */ var _components_button_NormalButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button/NormalButton */ \"./src/components/button/NormalButton.js\");\n/* harmony import */ var _components_ModalShell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ModalShell */ \"./src/components/ModalShell.js\");\n/* harmony import */ var _components_productInfo_ProductInfoGetSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/productInfo/ProductInfoGetSet */ \"./src/components/productInfo/ProductInfoGetSet.js\");\n/* harmony import */ var _components_productInfo_ProductInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/productInfo/ProductInfo */ \"./src/components/productInfo/ProductInfo.js\");\n/* harmony import */ var _components_productInfo_SundrugProductInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/productInfo/SundrugProductInfo */ \"./src/components/productInfo/SundrugProductInfo.js\");\n/* harmony import */ var _components_AddedMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AddedMessage */ \"./src/components/AddedMessage.js\");\n/* harmony import */ var _components_PurchaseQuestionnaire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PurchaseQuestionnaire */ \"./src/components/PurchaseQuestionnaire.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.customElements.define(\"submit-button\", _components_button_SubmitButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n  extends: \"button\",\r\n});\r\nwindow.customElements.define(\"normal-button\", _components_button_NormalButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\r\n  extends: \"button\",\r\n});\r\n\r\nwindow.customElements.define(\"modal-shell\", _components_ModalShell__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\nwindow.customElements.define(\"product-info-get-set\", _components_productInfo_ProductInfoGetSet__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\nwindow.customElements.define(\"product-info\", _components_productInfo_ProductInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\nwindow.customElements.define(\"sundrug-product-info\", _components_productInfo_SundrugProductInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\nwindow.customElements.define(\"added-message\", _components_AddedMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\nwindow.customElements.define(\"purchase-questionnaire\", _components_PurchaseQuestionnaire__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\n\r\nconst updateProduct = () => {\r\n  const isModalOpen = !!document.querySelector(\"modal-shell\");\r\n  if (!isModalOpen) return;\r\n\r\n  const sundrugProductInfo = document.querySelector(\"product-info-get-set\");\r\n  sundrugProductInfo.setAttribute(\r\n    \"product-image\",\r\n    \"https://ec.sundrug.co.jp/eccontents/img/commodity/shop/00000000/commodity/4987107614704_common.jpg?NoPhoto=true\"\r\n  );\r\n  sundrugProductInfo.setAttribute(\r\n    \"product-name\",\r\n    \"【指定第2類医薬品】プレコール持続性カプセル 36カプセル 【セルフメディケーション税制対象】\"\r\n  );\r\n  sundrugProductInfo.setAttribute(\"product-price\", \"1,304\");\r\n};\r\ndocument\r\n  .querySelector(\".update-product\")\r\n  .addEventListener(\"click\", () => updateProduct());\r\n\r\nconst openModal = () => {\r\n  const isModalOpen = !!document.querySelector(\"modal-shell\");\r\n  if (isModalOpen) return;\r\n\r\n  const sundrugProductInfo = document.createElement(\"product-info-get-set\");\r\n  // override\r\n  sundrugProductInfo.addToCart = () => {\r\n    document.querySelector('div[slot=\"modal-content\"]').innerHTML =\r\n      \"<purchase-questionnaire />\";\r\n  }\r\n  sundrugProductInfo.setAttribute(\r\n    \"product-image\",\r\n    \"https://ec.sundrug.co.jp/eccontents/img/commodity/shop/00000000/commodity/4987306045156_common.jpg?NoPhoto=true\"\r\n  );\r\n  sundrugProductInfo.setAttribute(\r\n    \"product-name\",\r\n    \"【指定第2類医薬品】パブロンゴールドA微粒 44包 【セルフメディケーション税制対象】\"\r\n  );\r\n  sundrugProductInfo.setAttribute(\"product-price\", \"1,508\");\r\n\r\n  const slot = document.createElement(\"div\");\r\n  slot.setAttribute(\"slot\", \"modal-content\");\r\n  slot.appendChild(sundrugProductInfo);\r\n\r\n  const modalShell = document.createElement(\"modal-shell\");\r\n  modalShell.appendChild(slot);\r\n\r\n  document.body.appendChild(modalShell);\r\n};\r\ndocument\r\n  .querySelector(\".open-modal\")\r\n  .addEventListener(\"click\", () => openModal());\r\n\n\n//# sourceURL=webpack://web-components-roy-tutorial/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;