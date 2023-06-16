import axios from "axios";

export default async function compute(menu: string, variable: string, latex: string) {
    // const result =
    //     await axios.post(
    //         "http://localhost:8000/parse",
    //         {
    //             'content': latex,
    //         }
    //     );
    const result =
        await axios.post(
            "http://localhost:8000/derivative",
            {
                'menu': menu,
                'variable': variable,
                'latex': '$$ \\sin\\left(x\\right) $$',
            }
        );
    console.log(result.data);
}