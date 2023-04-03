"use strict";

var _require = require("@apollo/client"),
    ApolloClient = _require.ApolloClient,
    InMemoryCache = _require.InMemoryCache,
    HttpLink = _require.HttpLink;

var fetch = require("node-fetch");

exports.createClient = function (_ref) {
  var shopName = _ref.shopName,
      accessToken = _ref.accessToken,
      _ref$apiVersion = _ref.apiVersion,
      apiVersion = _ref$apiVersion === void 0 ? "2021-10" : _ref$apiVersion,
      language = _ref.language;
  var url = "https://" + shopName + "/api/" + apiVersion + "/graphql.json";
  return new ApolloClient({
    link: new HttpLink({
      uri: url,
      headers: {
        "X-Shopify-Storefront-Access-Token": accessToken,
        "Accept-Language": language
      },
      fetch: fetch
    }),
    cache: new InMemoryCache()
  });
};