import FunctionManager from "@/app/models/function/functionManager";
import FunctionHandler, { Function } from "@/app/models/function/function";
import {number} from "prop-types";


export default class Graph {
    private static INSTANCE: Graph = new Graph();

    private readonly functionManager: FunctionManager = new FunctionManager();

    private readonly ACCURACY = Math.pow(10, 3);

    constructor() {
    }

    public static get get(): Graph {
        return this.INSTANCE;
    }

    public get getFM(): FunctionManager {
        return this.functionManager;
    }

    public get getAccuracy(): number {
        return this.ACCURACY;
    }

}
