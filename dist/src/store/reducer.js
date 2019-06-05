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
var reducer = function (state, action) {
    switch (action.type) {
        case 'updataInit':
            return Object.assign({}, state, __assign({}, action.value));
        case 'updataFold':
            return Object.assign({}, state, action.value);
        case 'showModal':
            console.log(action);
            return Object.assign({}, state, {
                isShowModal: true,
                currentImage: action.value
            });
        case 'hideModal':
            return Object.assign({}, state, {
                isShowModal: false,
                currentImage: null
            });
        case 'changeFold':
            return Object.assign({}, state, __assign({}, action.value));
        case 'changeCurrentImage':
            return Object.assign({}, state, {
                currentImage: action.value
            });
        case 'showEdit':
            return Object.assign({}, state, {
                isShowEdit: true
            });
    }
};
exports.default = reducer;
//# sourceMappingURL=reducer.js.map