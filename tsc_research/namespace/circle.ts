/// <reference path = "shape.ts" />
namespace Drawing {
    export class Circle implements IShape {
        draw() {
            console.log("Circle is drawn");
        }
    }
}