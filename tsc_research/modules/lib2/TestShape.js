"use strict";
exports.__esModule = true;
var circle = require("./Circle");
var triangle = require("./Triangle");
debugger;
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
