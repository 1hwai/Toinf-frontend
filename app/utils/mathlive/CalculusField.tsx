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
    DERIVATIVE = 'Derivative',
    INTEGRAL = 'Integral',
    SERIES = 'Series'
}

export default function CalculusField(props: CalculusFieldProps) {
    const ref = useRef<MathfieldElement>();
    const [mathFieldValue, setMathFieldValue] = useState<string>('');
    const [menu, setMenu] = useState<string>(Menu.DERIVATIVE);
    const [variable, setVariable] = useState<string>('');


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

    const handleMathFieldChange = (e) => {
        console.log(e.target.value);
        setMathFieldValue(e.target.value);
    };

    const handleVariableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setVariable(e.target.value);
    }

    const onMenuChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        setMenu(e.target.value);
    }


    return (
        <div>
            <select onChange={onMenuChange} className={styles.menu}>
                <option value={Menu.DERIVATIVE}>d/dx</option>
                <option value={Menu.INTEGRAL}>∫ dx</option>
                <option value={Menu.SERIES}>∑</option>
            </select>
            <input onChange={handleVariableChange} className={styles.varMenu} size={1} placeholder={'x'}/>
            <math-field onChange={handleMathFieldChange} style={mathFieldStyle} ref={ref}>{props.value}</math-field>
            <button onClick={() => compute(menu, variable, mathFieldValue)} className={styles.runBtn}>{menu.slice(0,1)}</button>
        </div>
    );
}