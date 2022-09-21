/// <reference path = "shape.ts" />
namespace Drawing {
    export class Triangle implements IShape {
        draw() {
            console.log("Triangle si drawn");
        }
    }
}