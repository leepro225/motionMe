"use strict";
var modalType = 'imageBtn';
var clickAddBtn = function (id) {
    var modal = document.getElementById('modal');
    var viewType = document.getElementById('viewType');
    modalType = id;
    viewType === null || viewType === void 0 ? void 0 : viewType.classList.remove('none');
    modal === null || modal === void 0 ? void 0 : modal.classList.remove('none');
};
/**
 * 팝업을 초기화 하고, 닫는다.
 */
var clickCloseBtn = function () {
    var modal = document.getElementById('modal');
    var viewType = document.getElementById('viewType');
    var viewTypeInput = viewType === null || viewType === void 0 ? void 0 : viewType.getElementsByTagName('input');
    Array.prototype.forEach.call(viewTypeInput, function (elem) {
        elem.value = '';
    });
    viewType === null || viewType === void 0 ? void 0 : viewType.classList.add('none');
    modal === null || modal === void 0 ? void 0 : modal.classList.add('none');
};
var clickSaveBtn = function () {
    var html;
    var body = document.getElementById('body');
    var title = document.getElementById('title');
    var contents = document.getElementById('contents');
    switch (modalType) {
        case 'imageBtn':
            html = imageContainer(title.value, contents.value);
            break;
        case 'videoBtn':
            html = videoContainer(title.value, contents.value);
            break;
        case 'noteBtn':
            html = noteContainer(title.value, contents.value);
            break;
        case 'taskBtn':
            html = todoContainer(title.value, contents.value);
            break;
        default:
            break;
    }
    body.innerHTML += html;
    clickCloseBtn();
};
var clickRemoveBtn = function (e) {
    var body = document.getElementById('body');
    body.removeChild(e.target.parentElement.parentElement);
};
var imageContainer = function (title, contents) {
    var html = "<div class=\"contents-container\">\n                <div class=\"contents\"><img src=\"" + contents + "\"></div>\n                <div class=\"title\">" + title + "</div>\n                <div class=\"close\"><a onclick=\"clickRemoveBtn(event)\">X</a></div>\n            </div>";
    return html;
};
var videoContainer = function (title, contents) {
    var html = "<div class=\"contents-container\">\n               <div class=\"contents\">\n                    <iframe width=\"100%\" height=\"100%\" src=\"" + contents + "\" title=\"YouTube video player\"\n                        frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n                        allowfullscreen></iframe>\n                 </div>\n                <div class=\"title\">" + title + "</div>\n                <div class=\"close\"><a onclick=\"clickRemoveBtn(event)\">X</a></div>\n            </div>";
    return html;
};
var noteContainer = function (title, contents) {
    var html = "<div class=\"contents-container\">\n                <div class=\"title\">" + title + "</div>\n                <div class=\"body\">" + contents + "</div>\n                <div class=\"close\"><a onclick=\"clickRemoveBtn(event)\">X</a></div>\n            </div>";
    return html;
};
var todoContainer = function (title, contents) {
    var html = "<div class=\"contents-container\">\n                <div class=\"title\">" + title + "</div>\n                <div class=\"body\"><input type=\"checkbox\"><label>" + contents + "</label></div>\n                <div class=\"close\"><a onclick=\"clickRemoveBtn(event)\">X</a></div>\n            </div>";
    return html;
};
//# sourceMappingURL=index.js.map