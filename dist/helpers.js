"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isDefaultLang(locale, defaultLang) {
  return locale === defaultLang;
}

function localizedPath(_ref) {
  var defaultLang = _ref.defaultLang,
      prefixDefault = _ref.prefixDefault,
      locale = _ref.locale,
      path = _ref.path;

  // The default language isn't prefixed
  if (isDefaultLang(locale, defaultLang) && !prefixDefault) {
    return path;
  }

  var _path$split = path.split("/"),
      base = _path$split[1]; // If for whatever reason we receive an already localized path
  // (e.g. if the path was made with location.pathname)
  // just return it as-is.


  if (base === locale) {
    return path;
  } // If it's another language, prefix with the locale


  return "/" + locale + path;
}

function getLanguages(_ref2) {
  var locales = _ref2.locales,
      localeStr = _ref2.localeStr;

  // If "localeStr" is not defined, return the list of locales from the i18n config file
  if (!localeStr) {
    return locales;
  }

  var langs = [];

  var _loop = function _loop() {
    var code = _step.value;
    var lang = locales.find(function (lang) {
      return lang.code === code;
    });

    if (!lang) {
      throw new Error("Invalid localed provided: " + code + ". See your i18n config file for a list of available locales.");
    }

    langs.push(lang);
  };

  for (var _iterator = _createForOfIteratorHelperLoose(localeStr), _step; !(_step = _iterator()).done;) {
    _loop();
  }

  return langs;
}

function getDefaultLanguage(_ref3) {
  var locales = _ref3.locales,
      defaultLang = _ref3.defaultLang;
  return locales.find(function (locale) {
    return locale.code === defaultLang;
  });
}

module.exports = {
  localizedPath: localizedPath,
  getLanguages: getLanguages,
  getDefaultLanguage: getDefaultLanguage
};