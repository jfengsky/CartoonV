"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var fetch_1 = require("../../store/fetch");
var useEffect = React.useEffect, useState = React.useState;
var Edit = function (_a) {
    var State = _a.State, Dispatch = _a.Dispatch;
    var isShowEdit = State.isShowEdit, cartoonfold = State.cartoonfold;
    var _b = useState(cartoonfold), foldValue = _b[0], setFold = _b[1];
    useEffect(function () {
        setFold(cartoonfold);
    }, [cartoonfold]);
    var saveFold = function () { return __awaiter(_this, void 0, void 0, function () {
        var saveData, state, writeState;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch_1.FETCH_PATCH({ type: 'save', value: foldValue })];
                case 1:
                    saveData = _a.sent();
                    state = saveData.state, writeState = saveData.data.writeState;
                    if (!state && writeState === 'success') {
                        // Dispatch
                        alert('success');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "form-group" },
            React.createElement("label", null, "\u672C\u5730\u8DEF\u5F84:"),
            React.createElement("input", { type: "text", className: "form-control", value: foldValue, onChange: function (e) { return setFold(e.target.value); }, placeholder: "" })),
        React.createElement("button", { type: "button", className: "btn btn-primary", onClick: saveFold }, "\u4FDD\u5B58")));
};
exports.default = Edit;
//# sourceMappingURL=Edit.js.map