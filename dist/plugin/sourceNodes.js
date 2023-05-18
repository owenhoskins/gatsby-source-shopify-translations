"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var slugify = require("@sindresorhus/slugify");

var _require = require("../resources"),
    resources = _require.resources;

var MAX_INPUT_RANGE = 250;

function wait(ms, value) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms, value);
  });
}

function waitShopifyNodes(_x, _x2, _x3) {
  return _waitShopifyNodes.apply(this, arguments);
}

function _waitShopifyNodes() {
  _waitShopifyNodes = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(getNodesByType, resource, waitingGatsbySourceShopify) {
    var resourceNodes;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            resourceNodes = getNodesByType(resource.nodeType);

            if (!(resourceNodes.length === 0)) {
              _context2.next = 5;
              break;
            }

            _context2.next = 4;
            return wait(waitingGatsbySourceShopify);

          case 4:
            return _context2.abrupt("return", waitShopifyNodes(getNodesByType, resource, waitingGatsbySourceShopify));

          case 5:
            return _context2.abrupt("return", resourceNodes);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _waitShopifyNodes.apply(this, arguments);
}

function sourceAllNodes(_x4, _x5) {
  return _sourceAllNodes.apply(this, arguments);
}

function _sourceAllNodes() {
  _sourceAllNodes = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(gatsbyApi, pluginOptions) {
    var locales, _pluginOptions$waitin, waitingGatsbySourceShopify, shopifyConnections, actions, createContentDigest, createNodeId, getNodesByType, reporter, createNode, _loop, _iterator, _step;

    return _regenerator.default.wrap(function _callee3$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            locales = pluginOptions.locales, _pluginOptions$waitin = pluginOptions.waitingGatsbySourceShopify, waitingGatsbySourceShopify = _pluginOptions$waitin === void 0 ? 5000 : _pluginOptions$waitin, shopifyConnections = pluginOptions.shopifyConnections; // shopifyConnections: [`collections`, `shop`, `content`],

            shopifyConnections.push("product");
            actions = gatsbyApi.actions, createContentDigest = gatsbyApi.createContentDigest, createNodeId = gatsbyApi.createNodeId, getNodesByType = gatsbyApi.getNodesByType, reporter = gatsbyApi.reporter;
            createNode = actions.createNode;
            _loop = /*#__PURE__*/_regenerator.default.mark(function _loop() {
              var resource, translations, _loop2, _iterator2, _step2;

              return _regenerator.default.wrap(function _loop$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      resource = _step.value;

                      /*
                      // @TODO: this logic isn't working
                      console.log(
                        "translation resource: ",
                        resource,
                        resource.connection,
                        !shopifyConnections.some(el => el !== resource.connection)
                      )
                      if (!shopifyConnections.some(el => el === resource.connection)) {
                        continue
                      }
                      */
                      translations = [];
                      _loop2 = /*#__PURE__*/_regenerator.default.mark(function _loop2() {
                        var lang, op, resourceNodes, ids, callNumbers, i, idsTranch, _yield$op, data, newTranslations;

                        return _regenerator.default.wrap(function _loop2$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                lang = _step2.value;
                                op = resource.getOperation(pluginOptions, lang);
                                _context3.next = 4;
                                return waitShopifyNodes(getNodesByType, resource, waitingGatsbySourceShopify);

                              case 4:
                                resourceNodes = _context3.sent;
                                ids = resourceNodes.map(function (node) {
                                  return node.shopifyId;
                                });
                                callNumbers = Math.ceil(ids.length / MAX_INPUT_RANGE);
                                i = 0;

                              case 8:
                                if (!(i < callNumbers)) {
                                  _context3.next = 19;
                                  break;
                                }

                                idsTranch = ids.splice(0, MAX_INPUT_RANGE);
                                _context3.next = 12;
                                return op(idsTranch);

                              case 12:
                                _yield$op = _context3.sent;
                                data = _yield$op.data;
                                newTranslations = data.nodes.filter(function (node) {
                                  return !!node;
                                }).map(function (node) {
                                  // console.log("translations handle: ", node.title, node.handle)
                                  return (0, _extends2.default)({}, node, {
                                    // handle: slugify(node.title),
                                    // We are not taking the route of translated slugs/paths
                                    // but are using the english URL as a base
                                    handle: node.handle,
                                    shopifyId: node.id,
                                    locale: lang
                                  });
                                });
                                translations = [].concat(translations, newTranslations);

                              case 16:
                                i++;
                                _context3.next = 8;
                                break;

                              case 19:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _loop2);
                      });
                      _iterator2 = _createForOfIteratorHelperLoose(locales);

                    case 4:
                      if ((_step2 = _iterator2()).done) {
                        _context4.next = 8;
                        break;
                      }

                      return _context4.delegateYield(_loop2(), "t0", 6);

                    case 6:
                      _context4.next = 4;
                      break;

                    case 8:
                      reporter.info("Fetching translated resources type " + resource.translationsNodeType + ": " + translations.length);
                      translations.forEach(function (node) {
                        return createNode((0, _extends2.default)({}, node, {
                          id: createNodeId(resource.translationsNodeType + "-" + node.id + "-" + node.locale),
                          parent: null,
                          children: [],
                          internal: {
                            type: resource.translationsNodeType,
                            content: JSON.stringify(node),
                            contentDigest: createContentDigest(node)
                          }
                        }));
                      });

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _loop);
            });
            _iterator = _createForOfIteratorHelperLoose(resources);

          case 6:
            if ((_step = _iterator()).done) {
              _context5.next = 10;
              break;
            }

            return _context5.delegateYield(_loop(), "t0", 8);

          case 8:
            _context5.next = 6;
            break;

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee3);
  }));
  return _sourceAllNodes.apply(this, arguments);
}

exports.sourceNodes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(gatsbyApi, pluginOptions) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!pluginOptions.shopName || !pluginOptions.shopifyPassword || !pluginOptions.accessToken) {
              console.log("\nMissing configurations - shopName, shopifyPassword and shopifyAccessToken are required");
              process.exit(1);
            }

            _context.next = 3;
            return sourceAllNodes(gatsbyApi, pluginOptions);

          case 3:
            return _context.abrupt("return");

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();