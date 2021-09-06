"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.post = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  baseURL: 'https://www.fastmock.site/mock/7a59e5d43064ecbb6b89a5db099376b2/adopt',
  timeout: 10000
});

var post = function post(url) {
  var data,
      result,
      _args = arguments;
  return regeneratorRuntime.async(function post$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

          result = function result(resolve, reject) {
            instance.post(url, data, {
              headers: {
                'Content-Type': 'application/jason'
              }
            }).then(function (res) {
              return resolve(res.data);
            })["catch"](function (err) {
              return reject(err);
            });
          };

          return _context.abrupt("return", result);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.post = post;

var get = function get(url) {
  var params,
      result,
      _args2 = arguments;
  return regeneratorRuntime.async(function get$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          params = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
          _context2.next = 3;
          return regeneratorRuntime.awrap(instance.get(url, {
            params: params
          }));

        case 3:
          result = _context2.sent;
          return _context2.abrupt("return", result.data.data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.get = get;