export default class Vector2d {
    private readonly x: number;
    private readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public get getX(): number{
        return this.x;
    }

    public get getY(): number {
        return this.y;
    }

}