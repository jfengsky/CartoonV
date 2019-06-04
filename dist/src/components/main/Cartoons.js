"use strict";
/**
 * 漫画目录
 */
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
var useState = React.useState, useEffect = React.useEffect;
var CartoonFold = function (_a) {
    var data = _a.data, Dispatch = _a.Dispatch, State = _a.State;
    var changeFold = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var cartoonfold, fetchFolds, _a, dirList, fileList, state;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartoonfold = State.cartoonfold;
                    return [4 /*yield*/, fetch_1.FETCH_FOLD({ type: 'getfold', fold: cartoonfold + "/" + data })];
                case 1:
                    fetchFolds = _b.sent();
                    _a = fetchFolds.data, dirList = _a.dirList, fileList = _a.fileList, state = fetchFolds.state;
                    Dispatch({
                        type: 'updataFold', value: {
                            dirList: dirList,
                            fileList: fileList,
                            breadcrumb: data
                        }
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: 'card' },
        React.createElement("div", { className: 'card-body' },
            React.createElement("h5", { className: "card-text" },
                React.createElement("a", { href: 'javascript:;', onClick: function () { return changeFold(data); } }, data))),
        React.createElement("div", { className: "card-footer" },
            React.createElement("small", { className: "text-muted" }, "readed"))));
};
var CartoonImg = function (_a) {
    var data = _a.data, State = _a.State, Dispatch = _a.Dispatch;
    var breadcrumb = State.breadcrumb;
    var showModal = function () {
        Dispatch({ type: 'showModal' });
    };
    return (React.createElement("div", { className: 'card', onClick: showModal },
        React.createElement("img", { className: "card-img-top", src: "//" + location.host + "/Cartoon" + (breadcrumb ? "/" + breadcrumb : '') + "/" + data, alt: "" }),
        React.createElement("div", { className: 'card-body' },
            React.createElement("h5", { className: "card-text" }, data))));
};
var Cartoons = function (_a) {
    var State = _a.State, Dispatch = _a.Dispatch;
    var dirList = State.dirList, fileList = State.fileList;
    return (React.createElement("div", { className: 'card-group' },
        !!dirList && !!dirList.length && dirList.map(function (item, index) { return React.createElement(CartoonFold, { key: index, data: item, State: State, Dispatch: Dispatch }); }),
        !!fileList && !!fileList.length && fileList.map(function (item, index) { return React.createElement(CartoonImg, { key: index, data: item, State: State, Dispatch: Dispatch }); })));
};
exports.default = Cartoons;
//# sourceMappingURL=Cartoons.js.map