import shape = require("./IShape")

export class Circle implements shape.IShape {
    draw() {
        console.log("Circle is drawn (external module)");
    }
}