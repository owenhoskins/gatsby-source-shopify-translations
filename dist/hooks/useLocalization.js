"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useLocalization = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _context = require("../context");

var _helpers = require("../helpers");

var _defaultOptions = require("../utils/default-options");

var useLocalization = function useLocalization() {
  var context = (0, _react.useContext)(_context.LocaleContext); // language, defaultLang

  var config = (0, _defaultOptions.withDefaults)(); // console.log("useLocalization: config ", config)

  return (0, _extends2.default)({}, context, {
    prefixDefault: config.prefixDefault,
    localizedPath: _helpers.localizedPath
  });
};

exports.useLocalization = useLocalization;