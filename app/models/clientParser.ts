import FunctionHandler, { Function } from "./function/function";

export default class ClientParser {
    //Prototype

    public toTex(f: FunctionHandler): string {
        return 'e^{x} + \sin{\left(\pi x \right)}'
    }

    public toJS(latex: string): Function {
        return (x) => Math.exp(x) + Math.sin(Math.PI * x);
    }
}