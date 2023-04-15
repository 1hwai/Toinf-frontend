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

    public addFunction(f: Function): FunctionState {
        const id: string = uuid();
        const fHandler: FunctionHandler = new FunctionHandler(id, f);
        if (this.isFunctionValid(fHandler)) {
            this.functions.set(uuid(), fHandler);
            return FunctionState.SUCCESS;
        } else {
            return FunctionState.FAIL;
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

    private isFunctionValid(fHandler: FunctionHandler): boolean {
        return fHandler !== null
    }

}