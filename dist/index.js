"use strict";

exports.__esModule = true;
var _exportNames = {
  Link: true,
  LocaleContext: true
};
exports.LocaleContext = exports.Link = void 0;

var _reactI18next = require("react-i18next");

Object.keys(_reactI18next).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _reactI18next[key]) return;
  exports[key] = _reactI18next[key];
});

var _LocalizedLink = require("./components/LocalizedLink");

exports.Link = _LocalizedLink.LocalizedLink;

var _useLocalization = require("./hooks/useLocalization");

Object.keys(_useLocalization).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useLocalization[key]) return;
  exports[key] = _useLocalization[key];
});

var _context = require("./context");

exports.LocaleContext = _context.LocaleContext;