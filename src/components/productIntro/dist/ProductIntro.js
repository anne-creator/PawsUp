"use strict";
exports.__esModule = true;
exports.ProductIntro = void 0;
var ProductIntro_module_css_1 = require("./ProductIntro.module.css");
var react_1 = require("react");
var antd_1 = require("antd");
var columns = [
    {
        title: "title",
        dataIndex: "title",
        key: "title",
        align: "left",
        width: 120
    },
    {
        title: "description",
        dataIndex: "description",
        key: "description",
        align: "center"
    },
];
exports.ProductIntro = function (_a) {
    var title = _a.title, shortDescription = _a.shortDescription, price = _a.price, coupons = _a.coupons, discount = _a.discount, rating = _a.rating, pictures = _a.pictures;
    var tableDataSource = [
        {
            key: 0,
            title: "路线名称",
            description: title
        },
        {
            key: 1,
            title: "价格",
            description: (react_1["default"].createElement(react_1["default"].Fragment, null,
                "\u00A5",
                " ",
                react_1["default"].createElement(antd_1.Typography.Text, { type: "danger", strong: true }, price)))
        },
        {
            key: 2,
            title: "限时抢购折扣",
            description: discount ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                "\u00A5 ",
                react_1["default"].createElement(antd_1.Typography.Text, { "delete": true }, price),
                " ",
                react_1["default"].createElement(antd_1.Typography.Text, { type: "danger", strong: true },
                    "\u00A5 ",
                    discount))) : ("暂无折扣")
        },
        {
            key: 2,
            title: "领取优惠",
            description: coupons ? discount : "无优惠券可领"
        },
        {
            key: 2,
            title: "线路评价",
            description: (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(antd_1.Rate, { allowHalf: true, defaultValue: +rating }),
                react_1["default"].createElement(antd_1.Typography.Text, { style: { marginLeft: 10 } },
                    rating,
                    " \u661F")))
        },
    ];
    return (react_1["default"].createElement("div", { className: ProductIntro_module_css_1["default"]["intro-container"] },
        react_1["default"].createElement(antd_1.Typography.Title, { level: 4 }, title),
        react_1["default"].createElement(antd_1.Typography.Text, null, shortDescription),
        react_1["default"].createElement("div", { className: ProductIntro_module_css_1["default"]["intro-detail-content"] },
            react_1["default"].createElement(antd_1.Typography.Text, { style: { marginLeft: 20 } },
                "\u00A5 ",
                react_1["default"].createElement("span", { className: ProductIntro_module_css_1["default"]["intro-detail-strong-text"] }, price),
                " ",
                "/\u4EBA\u8D77"),
            react_1["default"].createElement(antd_1.Typography.Text, { style: { marginLeft: 50 } },
                react_1["default"].createElement("span", { className: ProductIntro_module_css_1["default"]["intro-detail-strong-text"] }, rating),
                " ",
                "\u5206")),
        react_1["default"].createElement(antd_1.Carousel, { autoplay: true, slidesToShow: 3 }, pictures.map(function (p) { return (react_1["default"].createElement(antd_1.Image, { height: 150, src: p })); })),
        react_1["default"].createElement(antd_1.Table, { columns: columns, dataSource: tableDataSource, size: "small", bordered: false, pagination: false, showHeader: false })));
};
