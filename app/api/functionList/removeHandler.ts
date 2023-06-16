import Graph from "@/app/models/graph";
import FunctionManager from "@/app/models/function/functionManager";

export default function removeHandler(id: string) {
    const fm: FunctionManager = Graph.get.getFM;
    fm.removeFunction(id);
}