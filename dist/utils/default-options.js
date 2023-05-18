"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var defaultLanguage = "en";

function withDefaults(themeOptions) {
  if (!themeOptions) {
    console.log("withDefaults no themeOptions!");
    return {
      defaultLanguage: defaultLanguage,
      prefixDefault: true
    };
  }

  return (0, _extends2.default)({}, themeOptions, {
    configPath: themeOptions.configPath,
    defaultLanguage: themeOptions.defaultLanguage || defaultLanguage,
    prefixDefault: themeOptions.prefixDefault ? themeOptions.prefixDefault : false,
    locales: themeOptions.locales || null,
    sourceOnlyMode: themeOptions.sourceOnlyMode ? themeOptions.sourceOnlyMode : false
  });
}

module.exports = {
  defaultLanguage: defaultLanguage,
  withDefaults: withDefaults
};