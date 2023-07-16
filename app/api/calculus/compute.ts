import axios from "axios";

type resultType = {
    data: { result: { latex: string, menu: string, variable: string }}
}

export default async function compute(menu: string, variable: string, latex: string): Promise<string> {
    latex = `$$ ${latex} $$`;
    console.log('before posting: latex: ' + latex);
    const result: resultType =
        await axios.post(
            `http://localhost:8000/${menu}`,
            {
                'menu': menu,
                'variable': variable,
                'latex': latex,
            }
        );
    return result.data.result.latex;
    /**
     * $$ e^{x} $$
     * $$ \sin\left(x\right) $$
     */
}