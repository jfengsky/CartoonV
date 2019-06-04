"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducer = function (state, action) {
    switch (action.type) {
        case 'updataInit':
            return Object.assign({}, state, action.value);
        case 'updataFold':
            return Object.assign({}, state, action.value);
        case 'showEdit':
            return Object.assign({}, state, {
                isShowEdit: true
            });
    }
};
exports.default = reducer;
//# sourceMappingURL=reducer.js.map