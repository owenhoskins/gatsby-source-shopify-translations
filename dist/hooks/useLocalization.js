"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useLocalization = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _defaultOptions = require("../utils/default-options");

var _context = require("../context");

var _helpers = require("../helpers");

var useLocalization = function useLocalization() {
  // const {language, defaultLang} = useContext(LocaleContext)
  var context = (0, _react.useContext)(_context.LocaleContext);
  console.log('useLocalization: ', context);
  var config = (0, _defaultOptions.withDefaults)();
  return (0, _extends2.default)({}, context, {
    prefixDefault: config.prefixDefault,
    localizedPath: _helpers.localizedPath
  });
};

exports.useLocalization = useLocalization;