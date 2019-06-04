"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hash = location.hash;
var isShowEdit = false;
switch (hash) {
    case '#edit':
        isShowEdit = true;
        break;
}
var initalState = {
    isShowEdit: isShowEdit,
    breadcrumb: '',
    isShowModal: false
};
exports.default = initalState;
//# sourceMappingURL=initalState.js.map