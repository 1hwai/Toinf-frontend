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

    public addFunction(id: string, f: Function): string {
        const fHandler: FunctionHandler = new FunctionHandler(id, f);
        if (this.isFunctionValid(id, f)) {
            this.functions.set(id, fHandler);
            console.log('fm.addFunction successful: ' + id + ' f: ' + fHandler.f);
            this.setFunctionVisibility(id, true);
            return id;
        } else {
            console.log('Invalid FunctionHandler: FunctionManager already has its function id')
            return "Invalid FunctionHandler";
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

    public initFunctions(): void {
        this.functions.clear();
    }

    public setFunctionVisibility(id: string, visible: boolean): void {
        this.getFunction(id)!.visibility = visible;
    }

    private isFunctionValid(id: string, f: Function): boolean {
        return (!this.functions.has(id))
            || (this.functions.has(id) && this.functions.get(id).f !== f)
    }

}