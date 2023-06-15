import Graph from "@/app/models/graph";
import {isLatexString} from "@cortex-js/compute-engine/dist/types/compute-engine/boxed-expression/utils";

export default class FunctionRunner {
    private static readonly graph: Graph = Graph.get;
    public static run(id: string, latex: string): void {
        if (isLatexString(latex)) {
            latex_to_js(latex);
        }
        this.graph.getFM.addFunction(id, (x: number) => {
            return Math.abs(Math.sin(x));
        });
    }
}