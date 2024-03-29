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
var file_1 = require("../file");
var initPath = '../../init/index.json';
exports.default = (function (_a) {
    var data = _a.data;
    return __awaiter(_this, void 0, void 0, function () {
        var type, value, fold, page, readed, data_1, data_2, data_3, data_4, data_5, data_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    type = data.type, value = data.value, fold = data.fold, page = data.page, readed = data.readed;
                    if (!(type === 'get')) return [3 /*break*/, 2];
                    return [4 /*yield*/, file_1.readfile({ path: initPath })];
                case 1:
                    data_1 = _b.sent();
                    return [2 /*return*/, data_1];
                case 2:
                    if (!(type === 'save')) return [3 /*break*/, 4];
                    return [4 /*yield*/, file_1.writefile({ path: initPath, key: 'cartoonfold', value: value })];
                case 3:
                    data_2 = _b.sent();
                    return [2 /*return*/, data_2];
                case 4:
                    if (!(type === 'getfold')) return [3 /*break*/, 6];
                    return [4 /*yield*/, file_1.readfold({ fold: fold })];
                case 5:
                    data_3 = _b.sent();
                    return [2 /*return*/, data_3];
                case 6:
                    if (!(type === 'saveFold')) return [3 /*break*/, 8];
                    return [4 /*yield*/, file_1.writeFold({ path: initPath, fold: fold })];
                case 7:
                    data_4 = _b.sent();
                    return [2 /*return*/, data_4];
                case 8:
                    if (!(type === 'saveFoldFile')) return [3 /*break*/, 10];
                    return [4 /*yield*/, file_1.writeFoldfile({ path: initPath, fold: fold, page: page })];
                case 9:
                    data_5 = _b.sent();
                    return [2 /*return*/, data_5];
                case 10:
                    if (!(type === 'changeReaded')) return [3 /*break*/, 12];
                    return [4 /*yield*/, file_1.writeFoldReaded({ path: initPath, fold: fold, readed: readed })];
                case 11:
                    data_6 = _b.sent();
                    return [2 /*return*/, data_6];
                case 12: return [2 /*return*/, {}];
            }
        });
    });
});
//# sourceMappingURL=foldInfo.js.map