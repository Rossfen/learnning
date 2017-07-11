/**
 * Created by chenwangfa on 2017/7/8.
 */
function init() {
    var ifr = document.getElementById("editor");
    var doc = ifr.contentDocument || ifr.contentWindow.document; // W3C || IE
    doc.designMode = "on";
    doc.contentEditable = true;
    doc.open();
    doc.write('<html><head><style>body{ margin:3px; word-wrap:break-word; word-break: break-all; }</style></head><body></body></html>');
    var win = document.getElementById("editor").contentWindow;
    win.focus();
    justifyLeft();
    doc.close();
};
function setBold() {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("bold", false, null);
    win.focus();
};
function setItalic() {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("italic", false, null);
    win.focus();
};
function cut() {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("cut", false, null);
    win.focus();
};
function copy() {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("copy", false, null);
    win.focus();
};
function paste() {
    var win = document.getElementById("editor").contentWindow;
    win.focus();
    win.document.execCommand("paste", false, null);
};
function myDelete() {
    var win = document.getElementById("editor").contentWindow;
    win.focus();
    win.document.execCommand("delete", false, null);
    win.focus();
};
function selectAll() {
    // var iframeDocument =document.getElementById("editor").contentWindow||document.getElementById("editor").contentDocument || document.getElementById("editor").contentWindow.document;
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("selectAll", false, null);
    // win.focus();
};
function setUnderline() {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("underline", false, null);
    win.focus();
};
function insertOrderedList() {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("insertOrderedList", false, null);
    win.focus();
};
function justifyLeft() {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("justifyLeft", false, null);
};
function justifyRight() {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("justifyRight", false, null);
};
function justifyCenter() {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("justifyCenter", false, null);
};
function insertImage(link) {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("insertImage", false, link);
};
function setHeading(title) {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("heading", false, title);
};
function setFontsize(value) {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("fontsize", false, value);
};
function setBackColor(value) {
    var win =document.getElementById("editor").contentWindow||document.getElementById("editor").contentDocument || document.getElementById("editor").contentWindow.document;
    // var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("hiliteColor", false, value);
};
function setFontName(value) {
    var win = document.getElementById("editor").contentWindow;
    win.document.execCommand("fontname", false, value);
};
