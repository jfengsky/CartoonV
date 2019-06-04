"use strict";
/**
 * 面包屑
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Breadcrumb = function (_a) {
    var State = _a.State, Dispatch = _a.Dispatch;
    return (React.createElement("nav", null,
        React.createElement("ol", { className: 'breadcrumb', style: { background: '#fff' } },
            React.createElement("li", { className: 'breadcrumb-item active' },
                React.createElement("a", { href: '#' }, "HOME")),
            React.createElement("li", { className: "breadcrumb-item" }, "Library"))));
};
exports.default = Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map