"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LocalizedLink = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../helpers");

var _useLocalization2 = require("../hooks/useLocalization");

var _excluded = ["to", "lang"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LocalizedLink = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var to = _ref.to,
      lang = _ref.lang,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useLocalization = (0, _useLocalization2.useLocalization)(),
      defaultLanguage = _useLocalization.defaultLanguage,
      prefixDefault = _useLocalization.prefixDefault,
      language = _useLocalization.language;

  var linkLocale = lang || language;
  return /*#__PURE__*/_react.default.createElement(_gatsby.Link, (0, _extends2.default)({}, props, {
    ref: ref,
    to: (0, _helpers.localizedPath)({
      defaultLanguage: defaultLanguage,
      prefixDefault: prefixDefault,
      locale: linkLocale,
      path: to
    })
  }));
});
exports.LocalizedLink = LocalizedLink;
LocalizedLink.propTypes = {
  to: _propTypes.default.string.isRequired,
  lang: _propTypes.default.string
};