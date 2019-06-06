"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var fetch_1 = require("../../store/fetch");
var useState = React.useState, useEffect = React.useEffect;
var modalStyle = {
    background: '#333',
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    top: 0,
    left: 0,
    color: '#fff'
};
var fr = {
    float: 'right'
};
var conStyle = {
    background: '#fff',
    width: 400,
    height: 600,
    opacity: 0.01
};
var leftStyle = Object.assign({}, conStyle, { float: 'left' });
var rightStyle = Object.assign({}, conStyle, { float: 'right' });
var Modal = function (_a) {
    var State = _a.State, Dispatch = _a.Dispatch;
    var _b = useState(false), isFull = _b[0], setFull = _b[1];
    var fullScreen = function () {
        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if (typeof rfs != "undefined" && rfs) {
            rfs.call(el);
            setFull(true);
        }
        ;
        return;
    };
    var currentImage = State.currentImage, breadcrumb = State.breadcrumb;
    var prevImage = function () { return changeImage('prev'); };
    var nextImage = function () { return changeImage('next'); };
    var changeImage = function (type) {
        var fileList = State.fileList, currentImage = State.currentImage;
        var index = null;
        fileList.some(function (item, idx) {
            if (currentImage === item) {
                index = idx;
                return true;
            }
        });
        if (index >= 0) {
            if (type === 'prev') {
                index--;
                if (index < 0) {
                    return;
                }
            }
            else if (type === 'next') {
                index++;
                if (index === fileList.length) {
                    return;
                }
            }
            Dispatch({ type: 'changeCurrentImage', value: fileList[index] });
        }
    };
    useEffect(function () {
        window.addEventListener('keyup', function (e) {
            if (e.keyCode === 37) {
                prevImage();
            }
            else if (e.keyCode === 39) {
                nextImage();
            }
        }, false);
    }, []);
    useEffect(function () {
        fetch_1.FETCH_SAVE_FOLD({
            type: 'saveFoldFile',
            fold: breadcrumb,
            page: currentImage
        });
    }, [currentImage]);
    return (React.createElement("div", { style: modalStyle },
        !isFull && React.createElement("div", { className: 'modal-header' },
            React.createElement("span", { style: fr, onClick: function () { return Dispatch({ type: 'hideModal' }); } }, "\u5173\u95ED"),
            React.createElement("span", { style: fr, onClick: function () { return fullScreen(); } }, "\u5168\u5C4F")),
        React.createElement("div", { style: { position: 'absolute', zIndex: 1 } },
            React.createElement("img", { src: "//" + location.host + "/Cartoon" + (breadcrumb ? "/" + breadcrumb : '') + "/" + currentImage, width: '100%' })),
        React.createElement("div", { style: { position: 'fixed', zIndex: 10, width: '100%' } },
            React.createElement("a", { href: 'javascript:;', onClick: prevImage, style: leftStyle }),
            React.createElement("a", { href: 'javascript:;', onClick: nextImage, style: rightStyle }))));
};
exports.default = Modal;
//# sourceMappingURL=index.js.map