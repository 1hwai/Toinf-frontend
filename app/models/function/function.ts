import ScreenManager from "@/app/models/screenManager";
import Graph from "@/app/models/graph";
import Vector2d from "@/app/models/vector2d";
import {Exception} from "sass";

export default class FunctionHandler {
    private readonly id: string;
    public f: Function;
    public visibility: boolean = true;

    constructor(id: string, func: Function) {
        this.id = id;
        this.f = func;
    }

    /**
     * @description calcFor() : this method is only for y=f(x) shape of function. 1 param, explicit function.
     * */
    public calcFor(x0: number, x1: number): Array<Vector2d> {
        //this should never happen.
        if (x0 > x1) return [new Vector2d(0, 0)];

        const domain: Array<number> = [x0, x1];
        const range: Array<Vector2d> = new Array<Vector2d>();

        const dx: number = (x1 - x0) / Graph.get.getAccuracy;

        try {
            // @ts-ignore
            for (let x: number = domain.at(0); x < domain.at(1); x+=dx) {
                range.push(new Vector2d(x, this.f(x)));
            }
        } catch (e) {
            console.log(e);
        }

        return range;
    }

    public get getId(): string {
        return this.id;
    }

}

export interface Function {
    (...variables: number[]): number;
}