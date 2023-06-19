import axios from "axios";

type resultType = {
    data: { result: { latex: string, menu: string, variable: string }}
}

export default async function compute(menu: string, variable: string, latex: string): Promise<string> {
    const result: resultType =
        await axios.post(
            "http://localhost:8000/derivative",
            {
                'menu': menu,
                'variable': variable,
                'latex': '$$ e^{x} $$',
            }
        );
    return result.data.result.latex;
    /**
     * $$ e^{x} $$
     *
     */
}