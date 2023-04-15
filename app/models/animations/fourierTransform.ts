import GraphManager from "@/app/models/graph/graphManager";
import FunctionHandler, { Function }from "@/app/models/function/function";

export default class FourierTransform {
    constructor(f?: FunctionHandler) {
        const g: Function = (x: number) => {
            let freq = 3;
            return f?.f(x) * Math.cos(2*Math.PI*freq*x);
        };
        GraphManager.getMain.getFM.addFunction(g);
    }


}