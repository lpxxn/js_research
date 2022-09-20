interface IPoint {
    x: number,
    y: number
}

function addPoint(a: IPoint, b: IPoint): IPoint {
    const x = a.x + b.x;
    const y = a.y + b.y;
    return {x: x, y: y};
}

console.log(addPoint({x: 1, y: 2}, {x: 2, y: 5}));