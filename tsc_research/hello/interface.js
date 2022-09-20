function addPoint(a, b) {
    var x = a.x + b.x;
    var y = a.y + b.y;
    return { x: x, y: y };
}
console.log(addPoint({ x: 1, y: 2 }, { x: 2, y: 5 }));
