"use strict";
/**
 * 面包屑
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Breadcrumb = function (_a) {
    var State = _a.State, Dispatch = _a.Dispatch;
    var breadcrumb = State.breadcrumb;
    return (React.createElement("nav", null,
        React.createElement("ol", { className: 'breadcrumb', style: { background: '#fff' } },
            React.createElement("li", { className: 'breadcrumb-item active' },
                React.createElement("a", { href: '/' }, "HOME")),
            !!breadcrumb && React.createElement("li", { className: "breadcrumb-item" }, breadcrumb))));
};
exports.default = Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map