import FunctionHandler, { Function }from "@/app/models/function/function";
import { v4 as uuid } from "uuid";
import {FunctionState} from "@/app/models/function/functionState";
import {Property} from "csstype";
import Color = Property.Color;

export default class FunctionManager {
    private readonly functions: Map<string, FunctionHandler> = new Map<string, FunctionHandler>();
    private readonly functionColors: Map<string, Color> = new Map<string, Color>();

    constructor() {
    }

    public addFunction(f: Function): string {
        const id: string = uuid();
        const fHandler: FunctionHandler = new FunctionHandler(id, f);
        if (this.isFunctionValid(fHandler)) {
            this.functions.set(id, fHandler);
            this.setFunctionVisibility(id, true);
            return id;
        } else {
            return "Invalid Function";
        }
    }

    public removeFunction(id: string): void {
        this.functions.delete(id);
    }

    public getFunction(id: string): FunctionHandler | undefined {
        return this.functions.get(id);
    }

    public getFunctions(): Array<FunctionHandler> {
        return Array.from(this.functions.values());
    }

    public setFunctionVisibility(id: string, visible: boolean): void {
        this.getFunction(id)!.visibility = visible;
    }

    private isFunctionValid(fHandler: FunctionHandler): boolean {
        return fHandler !== null
    }

}