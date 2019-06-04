"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterTempFile = function (data) {
    var disfiles = ['.DS_Store', '.localized'];
    var tempList = [];
    data.map(function (item) {
        if (disfiles.indexOf(item) < 0) {
            tempList.push(item);
        }
    });
    return tempList;
};
//# sourceMappingURL=filter.js.map