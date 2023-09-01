"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var _require = require("@apollo/client"),
    gql = _require.gql;

exports.translatedProductsQuery = function (ids) {
  return {
    query: gql(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n      query translatedThings($ids: [ID!]!) {\n        nodes(ids: $ids) {\n          ... on Product {\n            __typename\n            id\n            title\n            description\n            descriptionHtml\n            handle\n            productType\n            collections(first: 10) {\n              edges {\n                node {\n                  id\n                  title\n                }\n              }\n            }\n            options {\n              __typename\n              name\n              values\n            }\n            variants(first: 30) {\n              edges {\n                node {\n                  id\n                  title\n                  availableForSale\n                  selectedOptions {\n                    name\n                    value\n                  }\n                }\n              }\n            }\n            metafields(\n              identifiers: [\n                { namespace: \"custom\", key: \"subtitle\" }\n                { namespace: \"custom\", key: \"excerpt\" }\n                { namespace: \"custom\", key: \"detail_1\" }\n                { namespace: \"custom\", key: \"detail_2\" }\n                { namespace: \"custom\", key: \"detail_3\" }\n              ]\n            ) {\n              id\n              key\n              value\n              description\n            }\n          }\n        }\n      }\n    "]))),
    variables: {
      ids: ids
    }
  };
};

exports.translatedCollectionsQuery = function (ids) {
  return {
    query: gql(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n      query translatedThings($ids: [ID!]!) {\n        nodes(ids: $ids) {\n          ... on Collection {\n            __typename\n            id\n            title\n            description\n            descriptionHtml\n            handle\n          }\n        }\n      }\n    "]))),
    variables: {
      ids: ids
    }
  };
};

exports.translatedPagesQuery = function (ids) {
  return {
    query: gql(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n      query translatedThings($ids: [ID!]!) {\n        nodes(ids: $ids) {\n          ... on Page {\n            __typename\n            id\n            title\n            body\n            bodySummary\n            handle\n            metafields(\n              identifiers: [{ namespace: \"custom\", key: \"stockist\" }]\n            ) {\n              type\n              namespace\n              key\n              value\n              id\n              description\n            }\n          }\n        }\n      }\n    "]))),
    variables: {
      ids: ids
    }
  };
};

exports.translatedShopPoliciesQuery = function (ids) {
  return {
    query: gql(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2.default)(["\n      query translatedThings($ids: [ID!]!) {\n        nodes(ids: $ids) {\n          ... on ShopPolicy {\n            __typename\n            id\n            title\n            body\n            handle\n          }\n        }\n      }\n    "]))),
    variables: {
      ids: ids
    }
  };
};

exports.translatedMenusQuery = function (ids) {
  return {
    query: gql(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2.default)(["\n      query translatedThings($ids: [ID!]!) {\n        nodes(ids: $ids) {\n          ... on Menu {\n            __typename\n            id\n            handle\n            title\n            items {\n              title\n              type\n              items {\n                title\n                type\n              }\n            }\n          }\n        }\n      }\n    "]))),
    variables: {
      ids: ids
    }
  };
};