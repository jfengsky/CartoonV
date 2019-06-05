"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var breadcrumb = '';
var urlHash = location.hash;
if (urlHash) {
    breadcrumb = urlHash.replace('#', '');
}
var hash = location.hash;
var isShowEdit = false;
switch (hash) {
    case '#edit':
        isShowEdit = true;
        break;
}
var initalState = {
    cartoonfold: '',
    isShowEdit: isShowEdit,
    breadcrumb: breadcrumb,
    isShowModal: false,
    currentImage: null
};
exports.default = initalState;
//# sourceMappingURL=initalState.js.map