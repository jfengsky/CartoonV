"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var header_1 = require("./components/header");
var main_1 = require("./components/main");
// import Modal from './components/modal'
var initalState_1 = require("./store/initalState");
var reducer_1 = require("./store/reducer");
var useReducer = React.useReducer;
var App = function () {
    var _a = useReducer(reducer_1.default, initalState_1.default), state = _a[0], dispatch = _a[1];
    var isShowEdit = state.isShowEdit;
    return (React.createElement("section", { className: 'container-fluid' },
        React.createElement(header_1.default, { State: state, Dispatch: dispatch }),
        React.createElement(main_1.default, { State: state, Dispatch: dispatch })));
};
exports.default = App;
//# sourceMappingURL=App.js.map