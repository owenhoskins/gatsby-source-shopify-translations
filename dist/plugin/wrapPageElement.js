"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.wrapPageElement = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

var _context = require("../context");

var wrapPageElement = function wrapPageElement(_ref, _ref2) {
  var _data$localeJsonNodeN;

  var element = _ref.element,
      props = _ref.props;
  var locales = _ref2.locales,
      sourceOnlyMode = _ref2.sourceOnlyMode,
      _ref2$localeJsonNodeN = _ref2.localeJsonNodeName,
      localeJsonNodeName = _ref2$localeJsonNodeN === void 0 ? "locales" : _ref2$localeJsonNodeN;
  if (!props || sourceOnlyMode) return;
  var data = props.data,
      pageContext = props.pageContext;
  var language = pageContext.language,
      languages = pageContext.languages,
      originalPath = pageContext.originalPath,
      defaultLanguage = pageContext.defaultLanguage,
      path = pageContext.path; // console.log("wrapPageElement: pageContext: ", props.path, pageContext)

  var localeNodes = (data === null || data === void 0 ? void 0 : (_data$localeJsonNodeN = data[localeJsonNodeName]) === null || _data$localeJsonNodeN === void 0 ? void 0 : _data$localeJsonNodeN.edges) || [];

  if (locales.length > 1 && localeNodes.length === 0 && process.env.NODE_ENV === "development") {
    console.error("No translations were found in \"" + localeJsonNodeName + "\"\n      You need to add a graphql query to every page like this:\n        \n        export const query = graphql`\n          query($language: String!) {\n            " + localeJsonNodeName + ": allLocale(language: {eq: $language}}) {\n              edges {\n                node {\n                  ns\n                  data\n                  language\n                }\n              }\n            }\n          }\n      `;\n    ");
  }

  var namespaces = localeNodes.map(function (_ref3) {
    var node = _ref3.node;
    return node.ns;
  });
  var defaultNS = "translation";
  var fallbackNS = namespaces.filter(function (ns) {
    return ns !== defaultNS;
  });
  var resources = localeNodes.reduce(function (res, _ref4) {
    var node = _ref4.node;
    var parsedData = JSON.parse(node.data);
    if (!(node.language in res)) res[node.language] = {};
    res[node.language][node.ns] = parsedData;
    return res;
  }, {});

  _i18next.default.use(_reactI18next.initReactI18next).init({
    debug: process.env.NODE_ENV === "development",
    resources: resources,
    lng: language,
    fallbackLng: "en",
    fallbackNS: fallbackNS,
    react: {
      useSuspense: true
    }
  });
  /*
  console.log(
    "wrapPageElement change language? | i18n.language: ",
    i18n.language,
    " | language: ",
    language
  )
  */


  if (_i18next.default.language !== language) {
    _i18next.default.changeLanguage(language);
  }

  var context = {
    language: language,
    languages: languages,
    originalPath: originalPath,
    defaultLanguage: defaultLanguage,
    path: path
  };
  return /*#__PURE__*/_react.default.createElement(_context.LocaleContext.Provider, {
    value: context
  }, element);
}; // exports.wrapPageElement = wrapPageElement


exports.wrapPageElement = wrapPageElement;