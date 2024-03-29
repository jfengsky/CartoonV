"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Nav_1 = require("./Nav");
var Breadcrumb_1 = require("./Breadcrumb");
var Header = function (props) {
    return (React.createElement("header", null,
        React.createElement(Nav_1.default, __assign({}, props)),
        React.createElement(Breadcrumb_1.default, __assign({}, props))));
};
exports.default = Header;
//# sourceMappingURL=index.js.map