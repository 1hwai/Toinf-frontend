import FunctionHandler, { Function }from "@/app/models/function/function";
import Graph from "@/app/models/graph";

export default class FourierTransform {
    constructor(f?: FunctionHandler) {
        const g: Function = (x: number) => {
            let freq = 3;
            return f!.f(x) * Math.cos(2*Math.PI*freq*x);
        };
        Graph.get.getFM.addFunction(g);
    }


}