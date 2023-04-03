"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _require = require("./operations"),
    createOperations = _require.createOperations;

var SHOPIFY_PRODUCT = "ShopifyProduct";
var SHOPIFY_COLLECTION = "ShopifyCollection";
var SHOPIFY_PAGE = "ShopifyPage";
var SHOPIFY_SHOPPOLICY = "ShopifyShopPolicy";
var SHOPIFY_MENU = "ShopifyMenu";
var SHOPIFY_TRANSLATED_PRODUCT = "ShopifyTranslatedProduct";
var SHOPIFY_TRANSLATED_COLLECTION = "ShopifyTranslatedCollection";
var SHOPIFY_TRANSLATED_PAGE = "ShopifyTranslatedPage";
var SHOPIFY_TRANSLATED_SHOPPOLCIY = "ShopifyTranslatedShopPolicy";
var SHOPIFY_TRANSLATED_MENU = "ShopifyTranslatedMenu";
exports.resources = [{
  id: "Product",
  connection: "product",
  nodeType: SHOPIFY_PRODUCT,
  translationsNodeType: SHOPIFY_TRANSLATED_PRODUCT,
  getOperation: function getOperation(pluginOptions, lang) {
    var _createOperations = createOperations((0, _extends2.default)({}, pluginOptions, {
      language: lang
    })),
        createTranslatedProductsOperation = _createOperations.createTranslatedProductsOperation;

    return createTranslatedProductsOperation;
  }
}, {
  id: "Collection",
  connection: "collection",
  nodeType: SHOPIFY_COLLECTION,
  translationsNodeType: SHOPIFY_TRANSLATED_COLLECTION,
  getOperation: function getOperation(pluginOptions, lang) {
    var _createOperations2 = createOperations((0, _extends2.default)({}, pluginOptions, {
      language: lang
    })),
        createTranslatedCollectionsOperation = _createOperations2.createTranslatedCollectionsOperation;

    return createTranslatedCollectionsOperation;
  }
}, {
  id: "Page",
  connection: "content",
  nodeType: SHOPIFY_PAGE,
  translationsNodeType: SHOPIFY_TRANSLATED_PAGE,
  getOperation: function getOperation(pluginOptions, lang) {
    var _createOperations3 = createOperations((0, _extends2.default)({}, pluginOptions, {
      language: lang
    })),
        createTranslatedPagesOperation = _createOperations3.createTranslatedPagesOperation;

    return createTranslatedPagesOperation;
  }
}, {
  id: "ShopPolicy",
  connection: "shop",
  nodeType: SHOPIFY_SHOPPOLICY,
  translationsNodeType: SHOPIFY_TRANSLATED_SHOPPOLCIY,
  getOperation: function getOperation(pluginOptions, lang) {
    var _createOperations4 = createOperations((0, _extends2.default)({}, pluginOptions, {
      language: lang
    })),
        createTranslatedShopPoliciesOperation = _createOperations4.createTranslatedShopPoliciesOperation;

    return createTranslatedShopPoliciesOperation;
  }
}, {
  id: "Menu",
  connection: "navigation",
  nodeType: SHOPIFY_MENU,
  translationsNodeType: SHOPIFY_TRANSLATED_MENU,
  getOperation: function getOperation(pluginOptions, lang) {
    var _createOperations5 = createOperations((0, _extends2.default)({}, pluginOptions, {
      language: lang
    })),
        createTranslatedMenusOperation = _createOperations5.createTranslatedMenusOperation;

    return createTranslatedMenusOperation;
  }
}];