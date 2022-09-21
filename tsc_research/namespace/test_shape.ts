/// <reference path = "shape.ts" />
/// <reference path = "circle.ts" />
/// <reference path = "triangle.ts" />

function drawAllShapes(shape: Drawing.IShape) {
    shape.draw();
}

drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());


// tsc --out app.js test_shape.ts
// node app.js