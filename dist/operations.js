"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require("./create-client"),
    createClient = _require.createClient;

var _require2 = require("./queries"),
    translatedProductsQuery = _require2.translatedProductsQuery,
    translatedCollectionsQuery = _require2.translatedCollectionsQuery,
    translatedPagesQuery = _require2.translatedPagesQuery,
    translatedShopPoliciesQuery = _require2.translatedShopPoliciesQuery,
    translatedMenusQuery = _require2.translatedMenusQuery;

exports.createOperations = function (options) {
  var client = createClient(options);

  function createOperation(_x) {
    return _createOperation.apply(this, arguments);
  }

  function _createOperation() {
    _createOperation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(operationQuery) {
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return client.query(operationQuery);

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _createOperation.apply(this, arguments);
  }

  return {
    createTranslatedProductsOperation: function () {
      var _createTranslatedProductsOperation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(ids) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return createOperation(translatedProductsQuery(ids), "TRANSLATED_PRODUCTS");

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createTranslatedProductsOperation(_x2) {
        return _createTranslatedProductsOperation.apply(this, arguments);
      }

      return createTranslatedProductsOperation;
    }(),
    createTranslatedCollectionsOperation: function () {
      var _createTranslatedCollectionsOperation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(ids) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return createOperation(translatedCollectionsQuery(ids), "TRANSLATED_COLLECTIONS");

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createTranslatedCollectionsOperation(_x3) {
        return _createTranslatedCollectionsOperation.apply(this, arguments);
      }

      return createTranslatedCollectionsOperation;
    }(),
    createTranslatedPagesOperation: function () {
      var _createTranslatedPagesOperation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(ids) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return createOperation(translatedPagesQuery(ids), "TRANSLATED_PAGES");

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createTranslatedPagesOperation(_x4) {
        return _createTranslatedPagesOperation.apply(this, arguments);
      }

      return createTranslatedPagesOperation;
    }(),
    createTranslatedShopPoliciesOperation: function () {
      var _createTranslatedShopPoliciesOperation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(ids) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return createOperation(translatedShopPoliciesQuery(ids), "TRANSLATED_SHOPPOLICIES");

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function createTranslatedShopPoliciesOperation(_x5) {
        return _createTranslatedShopPoliciesOperation.apply(this, arguments);
      }

      return createTranslatedShopPoliciesOperation;
    }(),
    createTranslatedMenusOperation: function () {
      var _createTranslatedMenusOperation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(ids) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return createOperation(translatedMenusQuery(ids), "TRANSLATED_MENUS");

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function createTranslatedMenusOperation(_x6) {
        return _createTranslatedMenusOperation.apply(this, arguments);
      }

      return createTranslatedMenusOperation;
    }()
  };
};