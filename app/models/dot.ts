import Vector2d from "@/app/models/vector2d";
import {Colors} from "@/app/models/colors";

export default class Dot2d extends Vector2d {
    private readonly color: Colors;

    constructor(color: Colors, x: number, y: number) {
        super(x, y);
        this.color = color;
    }

    public get getColor(): Colors {
        return this.color;
    }

}