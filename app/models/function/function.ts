import ScreenManager from "@/app/models/ScreenManager";
import Graph from "@/app/models/graph/graph";
import Point2d from "@/app/models/point2d";
import {Exception} from "sass";

export default class FunctionHandler {
    private id: string;
    public f: Function;

    constructor(id: string, func: Function) {
        this.id = id;
        this.f = func;
    }

    /**
     * @description calcFor() : this method is only for y=f(x) shape of function. 1 param, explicit function.
     * */
    public calcFor(x0: number, x1: number): Array<Point2d> {
        //this should never happen.
        if (x0 > x1) return [new Point2d(0, 0)];
        const domain: Array<number> = [x0, x1];
        const points: Array<Point2d> = new Array<Point2d>();

        const dx: number = (x1 - x0) / Graph.ACCURACY;
    
        // @ts-ignore
        for (let x: number = domain.at(0); x < domain.at(1); x+=dx) {
            points.push(new Point2d(x, this.f(x)));
        }

        return points;
    }

}

export interface Function {
    (...variables: number[]): number;
}