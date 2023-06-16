import Graph from "@/app/models/graph";
import {isLatexString} from "@cortex-js/compute-engine/dist/types/compute-engine/boxed-expression/utils";
import FunctionManager from "@/app/models/function/functionManager";

export default function runHandler(id: string, input: string) {
    const fm: FunctionManager = Graph.get.getFM;
    fm.addFunction(id,
        (x: number) => {
            // new Function(input);
            // return Math.sin(x);
            return eval(input);
        }
    );
}