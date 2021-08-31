"use strict";
exports.__esModule = true;
exports.PetPage = void 0;
var react_1 = require("react");
var PetPage_module_scss_1 = require("./PetPage.module.scss");
var antd_1 = require("antd");
// export interface PetPageProps {
// }
exports.PetPage = function () {
    return (react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet'] },
        react_1["default"].createElement("main", { className: PetPage_module_scss_1["default"]['pet__detail'] },
            react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet__header'] },
                react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet__header__top'] },
                    react_1["default"].createElement("h1", null, "Luna"),
                    react_1["default"].createElement(antd_1.Button, null, "Adopt FAQ ")),
                react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet__header__down'] }, "Kitten  |  Male  |  Medium  |  Black")),
            react_1["default"].createElement(antd_1.Divider, null),
            react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet__about'] },
                react_1["default"].createElement("h2", null, "About"),
                react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet__about__content'] },
                    react_1["default"].createElement("p", { className: PetPage_module_scss_1["default"]['pet__about__content-item'] }, "HOUSE-TRAINED:\u00A0\u00A0\u00A0\u00A0Yes"),
                    react_1["default"].createElement("p", { className: PetPage_module_scss_1["default"]['pet__about__content-item'] }, "HEALTH:\u00A0\u00A0\u00A0\u00A0Vaccinations up to date"),
                    react_1["default"].createElement("p", { className: PetPage_module_scss_1["default"]['pet__about__content-item'] }, "GOOD IN A HOME WITH:\u00A0\u00A0\u00A0\u00A0Other cats"),
                    react_1["default"].createElement("p", { className: PetPage_module_scss_1["default"]['pet__about__content-item'] }, "Coat Length:\u00A0\u00A0\u00A0\u00A0Short"))),
            react_1["default"].createElement(antd_1.Divider, null),
            react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet__detail'] },
                react_1["default"].createElement("h2", null, "Meet Luna"),
                react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet__detail__content'] },
                    react_1["default"].createElement("p", null, "This is Luna. He is one of the trio rescued from outdoors. He is a little shy like his brother, Poppy but is still playful and cuddly. He would really like to be adopted with one of his siblings if possible or to a home with another young cat."),
                    react_1["default"].createElement("p", null, "Poppy, Piper and Luna are available for adoption through Grand River All Breed Rescue. The adoption donation is $200 per cat. All of our cats are spayed or neutered, microchipped, and vaccinated as part of their adoption. If you\u2019d like to adopt, please fill out an application. You can also reach us by email at GrandRiverRescue@hotmail.com.")))),
        react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet__side'] },
            react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet__photo'] }),
            react_1["default"].createElement("div", { className: PetPage_module_scss_1["default"]['pet__sponsor'] }))));
};
