import React, {forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import { MathfieldElement, MathfieldOptions } from "mathlive";

export type MathFieldProps = {
    options?: Partial<MathfieldOptions>;
    id: string;
    value: string;
    onChange: (latex: string) => void;
    className?: string;
};

export default function MathField(props: MathFieldProps) {
    const ref = useRef<MathfieldElement>();

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

    useEffect(() => {
        const mathField: MathfieldElement | null = ref.current!;
        if (mathField) {
            mathField.addEventListener("input", handleInputChange);
        }

        return () => {
            if (mathField) {
                mathField.removeEventListener("input", handleInputChange);
            }
        };
    }, []);

    const handleInputChange = () => {
        const mathField: MathfieldElement | null = ref.current!;
        if (mathField) {
            const value: string = mathField.getValue();
            props.onChange(value);
            mathField.setValue(value);
        }
    };

    return (
        <div>
            <math-field style={mathFieldStyle} ref={ref}>{props.value}</math-field>
        </div>
    );
}