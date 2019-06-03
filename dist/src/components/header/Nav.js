"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Nav = function (_a) {
    var State = _a.State, Dispatch = _a.Dispatch;
    return (React.createElement("nav", { className: 'navbar navbar-expand-lg navbar-light bg-light' },
        React.createElement("a", { className: "navbar-brand", href: "/" }, "CartoonV"),
        React.createElement("div", { className: 'collapse navbar-collapse' },
            React.createElement("div", { className: 'navbar-nav' },
                React.createElement("a", { href: '#edit', className: 'nav-item nav-link active', onClick: function () { return Dispatch({ type: 'showEdit' }); } }, "\u7F16\u8F91"),
                React.createElement("a", { href: 'javascript:;', className: 'nav-item nav-link' }, "...")))));
};
exports.default = Nav;
//# sourceMappingURL=Nav.js.map