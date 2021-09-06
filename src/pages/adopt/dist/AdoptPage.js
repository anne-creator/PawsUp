"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AdoptPage = void 0;
var react_1 = require("react");
var AdoptPage_module_scss_1 = require("./AdoptPage.module.scss");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
var request_1 = require("../../utils/request");
exports.AdoptPage = function (props, State) {
    var _a = react_1.useState([]), catList = _a[0], setCatList = _a[1];
    var _b = react_1.useState(), error = _b[0], setError = _b[1];
    react_1.useEffect(function () {
        // NOTE: adding extra function inside useEffect coz useEffect cannot revceive promises but object or void.
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, request_1.get('/catList')];
                    case 1:
                        res = _a.sent();
                        // const data = await res.data;
                        // NOTE: add petList into the component state: catList
                        setCatList(res);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        setError(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, []);
    var menuAge = (react_1["default"].createElement(antd_1.Menu, null,
        react_1["default"].createElement(antd_1.Menu.Item, { key: "0" }, "ANY"),
        react_1["default"].createElement(antd_1.Menu.Divider, null),
        react_1["default"].createElement(antd_1.Menu.Item, { key: "1" }, "Kitten"),
        react_1["default"].createElement(antd_1.Menu.Divider, null),
        react_1["default"].createElement(antd_1.Menu.Item, { key: "3" }, "Adult")));
    var Meta = antd_1.Card.Meta;
    var history = react_router_dom_1.useHistory();
    return (react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt-container'] },
        react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt'] },
            react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__filter'] },
                react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__filter-primary'] },
                    react_1["default"].createElement("button", { className: AdoptPage_module_scss_1["default"]['adopt__button-group'] },
                        react_1["default"].createElement(antd_1.Button, { className: AdoptPage_module_scss_1["default"]['adopt__button-selected'] }, "All Pets"),
                        react_1["default"].createElement(antd_1.Button, { className: AdoptPage_module_scss_1["default"]['adopt__button'] }, "Cat"),
                        react_1["default"].createElement(antd_1.Button, { className: AdoptPage_module_scss_1["default"]['adopt__button'] }, "Dog"))),
                react_1["default"].createElement(antd_1.Divider, null),
                react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__filter-secondary'] },
                    react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__sub-filter'] },
                        react_1["default"].createElement("h4", null, "AGE"),
                        react_1["default"].createElement(antd_1.Dropdown, { className: AdoptPage_module_scss_1["default"]['adopt__sub-filter__drop-down'], overlay: menuAge, trigger: ['click'] },
                            react_1["default"].createElement("a", { className: "ant-dropdown-link", onClick: function (e) { return e.preventDefault(); } },
                                "any ",
                                react_1["default"].createElement(icons_1.DownCircleOutlined, { className: AdoptPage_module_scss_1["default"]['icon'] })))),
                    react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__sub-filter'] },
                        react_1["default"].createElement("h4", null, "AGE"),
                        react_1["default"].createElement(antd_1.Dropdown, { className: AdoptPage_module_scss_1["default"]['adopt__sub-filter__drop-down'], overlay: menuAge, trigger: ['click'] },
                            react_1["default"].createElement("a", { className: "ant-dropdown-link", onClick: function (e) { return e.preventDefault(); } },
                                "Any ",
                                react_1["default"].createElement(icons_1.DownCircleOutlined, { className: AdoptPage_module_scss_1["default"]['icon'] })))),
                    react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__sub-filter'] },
                        react_1["default"].createElement("h4", null, "AGE"),
                        react_1["default"].createElement(antd_1.Dropdown, { className: AdoptPage_module_scss_1["default"]['adopt__sub-filter__drop-down'], overlay: menuAge, trigger: ['click'] },
                            react_1["default"].createElement("a", { className: "ant-dropdown-link", onClick: function (e) { return e.preventDefault(); } },
                                "any ",
                                react_1["default"].createElement(icons_1.DownCircleOutlined, { className: AdoptPage_module_scss_1["default"]['icon'] })))),
                    react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__sub-filter'] },
                        react_1["default"].createElement("h4", null, "AGE"),
                        react_1["default"].createElement(antd_1.Dropdown, { className: AdoptPage_module_scss_1["default"]['adopt__sub-filter__drop-down'], overlay: menuAge, trigger: ['click'] },
                            react_1["default"].createElement("a", { className: "ant-dropdown-link", onClick: function (e) { return e.preventDefault(); } },
                                "any ",
                                react_1["default"].createElement(icons_1.DownCircleOutlined, { className: AdoptPage_module_scss_1["default"]['icon'] }))))),
                react_1["default"].createElement(antd_1.Divider, null)),
            react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__cards'] }, catList.map(function (item) { return (react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__card'], key: item.Pet_Name, onClick: function () { return history.push("/adopt/pet/" + item.Pet_ID); } },
                react_1["default"].createElement("img", { src: item.photo, className: AdoptPage_module_scss_1["default"]['adopt__card__img'] }),
                react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__card__content'] },
                    react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__card__title'] },
                        react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__card__name'] }, item.Pet_Name),
                        react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__card__age'] }, item.Age)),
                    react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__card__hair'] }, item.Primary_Breed),
                    react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__card__location'] }, item.Shelter_Name),
                    react_1["default"].createElement(antd_1.Divider, { className: AdoptPage_module_scss_1["default"]['adopt__card__divider'] }),
                    react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__card__detail'] },
                        react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__card__size-and-gender'] },
                            react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__card__size'] },
                                "Size: ",
                                item.Size,
                                " "),
                            react_1["default"].createElement("span", { className: AdoptPage_module_scss_1["default"]['adopt__card__color'] }, item.Gender)),
                        react_1["default"].createElement("span", null,
                            " Color: ",
                            item.Primary_color))))); }))),
        react_1["default"].createElement("div", { className: AdoptPage_module_scss_1["default"]['adopt__loading'] })));
};
