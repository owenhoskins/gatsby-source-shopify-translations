"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _require = require("../helpers"),
    localizedPath = _require.localizedPath,
    getLanguages = _require.getLanguages;

var _require2 = require("../utils/default-options"),
    withDefaults = _require2.withDefaults;

exports.onCreatePage = function (_ref, pluginOptions) {
  var page = _ref.page,
      actions = _ref.actions;
  if (pluginOptions.sourceOnlyMode) return;
  var createPage = actions.createPage,
      deletePage = actions.deletePage,
      createRedirect = actions.createRedirect;

  var _withDefaults = withDefaults(pluginOptions),
      configPath = _withDefaults.configPath,
      defaultLanguage = _withDefaults.defaultLanguage,
      locales = _withDefaults.locales,
      prefixDefault = _withDefaults.prefixDefault;

  var isEnvDevelopment = process.env.NODE_ENV === "development";

  var configLocales = require(configPath);

  var languages = getLanguages({
    locales: configLocales,
    localeStr: locales
  }); // Exclude all pages yet translated

  var pageLocale = page.path.match(/^\/(.*?)\//);

  if (pageLocale && pageLocale[1]) {
    if (locales.includes(pageLocale[1])) {
      deletePage(page);
      var locale = languages.find(function (lang) {
        return lang.code === page.context.locale;
      });
      var newPage = (0, _extends2.default)({}, page, {
        context: (0, _extends2.default)({}, page.context, {
          language: locale.code,
          languages: languages,
          defaultLanguage: defaultLanguage,
          hrefLang: locale.hrefLang,
          dateFormat: locale.dateFormat
        })
      });
      createPage(newPage);
      return;
    }
  }

  var originalPath = page.path; // If 404 page I don't delete or home

  if (page.path.indexOf("404") === -1 && page.path !== "/") {
    deletePage(page);
  } else {
    deletePage(page);

    var _newPage = (0, _extends2.default)({}, page, {
      context: (0, _extends2.default)({}, page.context, {
        languages: languages,
        defaultLanguage: defaultLanguage,
        originalPath: originalPath
      })
    });

    createPage(_newPage);
  } // Exclude product page  exit
  // @TODO: What is the purpose of this redirect?
  // well, its not running because `isAlreadyTranslated` is indeed `undefined` and should not run

  /*
  if (page.context?.isAlreadyTranslated) {
    languages.forEach(locale => {
      createRedirect({
        fromPath: originalPath,
        toPath: `/${locale.code}${originalPath}`,
        Language: locale.code,
        isPermanent: false,
        redirectInBrowser: isEnvDevelopment,
        statusCode: 301,
      })
    })
    return
  }
  */


  languages.forEach(function (locale) {
    // If page defined in config file I use that path
    var newPath = originalPath;
    var pageUrl = locale.pages.find(function (page) {
      return page.originalPath === originalPath;
    });

    if (pageUrl) {
      newPath = pageUrl.path;
    }

    var newPage = (0, _extends2.default)({}, page, {
      path: localizedPath({
        defaultLanguage: defaultLanguage,
        prefixDefault: prefixDefault,
        locale: locale.code,
        path: newPath
      }),
      matchPath: page.matchPath ? localizedPath({
        defaultLanguage: defaultLanguage,
        prefixDefault: prefixDefault,
        locale: locale.code,
        path: page.matchPath
      }) : page.matchPath,
      context: (0, _extends2.default)({}, page.context, {
        language: locale.code,
        languages: languages,
        defaultLanguage: defaultLanguage,
        hrefLang: locale.hrefLang,
        originalPath: originalPath,
        dateFormat: locale.dateFormat
      })
    }); // Check if the page is a localized 404

    if (newPage.path.match(/^\/[a-z]{2}\/404\/$/)) {
      // Match all paths starting with this code (apart from other valid paths)
      newPage.matchPath = "/" + locale.code + "/*";
    } // If 404 I don't redirect
    // @TODO: What is this doing here?

    /*
    if (page.path.indexOf("404") === -1 && page.path !== "/") {
      createRedirect({
        fromPath: newPath,
        toPath: newPage.path,
        Language: locale.code,
        isPermanent: false,
        redirectInBrowser: isEnvDevelopment,
        statusCode: 301,
      })
    }
    */


    createPage(newPage);
  });
};