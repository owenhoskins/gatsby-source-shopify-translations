"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var defaultLang = "en";

function withDefaults(themeOptions) {
  if (!themeOptions) {
    return {
      defaultLang: defaultLang,
      prefixDefault: true
    };
  }

  return (0, _extends2.default)({}, themeOptions, {
    configPath: themeOptions.configPath,
    defaultLang: themeOptions.defaultLang || defaultLang,
    prefixDefault: themeOptions.prefixDefault ? themeOptions.prefixDefault : false,
    locales: themeOptions.locales || null,
    sourceOnlyMode: themeOptions.sourceOnlyMode ? themeOptions.sourceOnlyMode : false
  });
}

module.exports = {
  defaultLang: defaultLang,
  withDefaults: withDefaults
};