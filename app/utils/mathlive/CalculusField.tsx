import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import { MathfieldElement, MathfieldOptions } from "mathlive";
import styles from "@/app/styles/functionList.module.scss";
import compute from "@/app/api/calculus/compute";

export type CalculusFieldProps = {
    options?: Partial<MathfieldOptions>;
    id: string;
    value?: string;
    className?: string;
};

export enum Menu {
    DERIVATIVE = 'derivative',
    INTEGRAL = 'integral',
    SERIES = 'series'
}

export default function CalculusField(props: CalculusFieldProps) {
    const ref = useRef<MathfieldElement>();
    const resultRef = useRef<MathfieldElement>();

    const [menu, setMenu] = useState<string>(Menu.DERIVATIVE);
    const [variable, setVariable] = useState<string>('x');
    const [result, setResult] = useState<string>();

    const mathFieldStyle = {
        margin: "32px",
        padding: "5px",
        width: "50vw",
        height: "40px",
        background: "white",
        color: "black",
        fontsize: "32px",
        border: "0px",
        borderRadius: "10px",
        boxShadow: "0 1em 2em 1em #afafaf",
    }

    const handleVariableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setVariable(e.target.value);
    }

    const onMenuChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        setMenu(e.target.value);
    }

    const showResult = async () => {
        const res: string = await compute(menu, variable, ref.current?.value!);
        console.log(res);
        setResult(res);
        if (resultRef.current) {
            resultRef.current?.setValue(res);
        }
    }

    return (
        <div>
            <select onChange={onMenuChange} className={styles.menu}>
                <option value={Menu.DERIVATIVE}>d/dx</option>
                <option value={Menu.INTEGRAL}>∫ dx</option>
                <option value={Menu.SERIES}>∑</option>
            </select>
            <input onChange={handleVariableChange} className={styles.varMenu} size={1} placeholder={'x'}/>
            <math-field style={mathFieldStyle} ref={ref}></math-field>
            <button onClick={showResult} className={styles.runBtn}>{menu.slice(0,1)}</button>
            <br></br>
            <math-field style={mathFieldStyle} ref={resultRef}></math-field>
        </div>
    );
}