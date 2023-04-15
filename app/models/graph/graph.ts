import FunctionManager from "@/app/models/function/functionManager";
import FunctionHandler, { Function } from "@/app/models/function/function";
import {number} from "prop-types";


export default class Graph {
    private readonly functionManager: FunctionManager = new FunctionManager();

    public static readonly ACCURACY = Math.pow(10, 3);

    constructor() {
    }

    public get getFM(): FunctionManager {
        return this.functionManager;
    }

}
