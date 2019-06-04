"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Edit_1 = require("./Edit");
var Cartoons_1 = require("./Cartoons");
var Main = function (_a) {
    var State = _a.State, Dispatch = _a.Dispatch;
    var isShowEdit = State.isShowEdit;
    return (React.createElement("main", null,
        isShowEdit && React.createElement(Edit_1.default, { State: State, Dispatch: Dispatch }),
        !isShowEdit && React.createElement(Cartoons_1.default, { State: State, Dispatch: Dispatch })));
};
exports.default = Main;
//# sourceMappingURL=index.js.map