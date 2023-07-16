import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import { MathfieldElement, MathfieldOptions } from "mathlive";
import styles from "@/app/styles/functionList.module.scss";
import runField from "@/app/api/functionList/runField";

export type MathFieldProps = {
    options?: Partial<MathfieldOptions>;
    id: string;
    value?: string;
    className?: string;
};

export default function MathField(props: MathFieldProps) {
    const ref = useRef<MathfieldElement>();
    const [inputValue, setInputValue] = useState<string>('');

    const mathFieldStyle = {
        margin: "32px",
        padding: "5px",
        width: "60vw",
        height: "40px",
        background: "white",
        color: "black",
        fontsize: "32px",
        border: "0px",
        borderRadius: "10px",
        boxShadow: "0 1em 2em 1em #afafaf",
    }

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const run = () => {
        const latex = ref.current?.value!;
        console.log(latex);
        runField(props.id, latex);
    }

    return (
        <div>
            <math-field onChange={handleInputChange} style={mathFieldStyle} ref={ref}>{props.value}</math-field>
            <button onClick={run} className={styles.runBtn}>*</button>
        </div>
    );
}