"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var modalStyle = {
    background: '#000',
    position: 'absolute',
    minWidth: '90%',
    minHeight: '90%',
    top: '5%',
    left: '5%',
    color: '#fff'
};
var fr = {
    float: 'right'
};
var fullScreen = function () {
    var el = document.documentElement;
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    }
    ;
    return;
};
var Modal = function (_a) {
    var State = _a.State, Dispatch = _a.Dispatch;
    var _b = React.useState(false), isFull = _b[0], setFull = _b[1];
    return (React.createElement("div", { style: modalStyle },
        React.createElement("div", { className: 'modal-header' },
            React.createElement("span", { style: fr }, "\u5173\u95ED"),
            React.createElement("span", { style: fr, onClick: function () { return fullScreen(); } }, "\u5168\u5C4F"))));
};
exports.default = Modal;
//# sourceMappingURL=index.js.map