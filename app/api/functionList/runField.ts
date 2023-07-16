import Graph from "@/app/models/graph";
import {isLatexString} from "@cortex-js/compute-engine/dist/types/compute-engine/boxed-expression/utils";
import FunctionManager from "@/app/models/function/functionManager";
import FunctionHandler, { Function }from "@/app/models/function/function";

export default function runField(id: string, latex: string) {
    const fm: FunctionManager = Graph.get.getFM;
    const r = Math.random();
    console.log(`test before run: (${r},${parser.eval(r)})`);
    fm.addFunction(id,
        (x) => {
            parser.eval(x);
        }
    );
}
