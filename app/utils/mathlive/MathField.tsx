import React, { useEffect, useRef } from "react";
import { MathfieldElement, MathfieldOptions } from "mathlive";

export type MathFieldProps = {
    options?: Partial<MathfieldOptions>;
    id: number;
    value: string;
    onChange: (latex: string) => void;
    className?: string;
};

export default function MathField(props: MathFieldProps) {
    const ref = useRef<MathfieldElement>();

    useEffect(() => {
        const mathField: MathfieldElement = ref.current!;
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
        const mathField: MathfieldElement = ref.current!;
        if (mathField) {
            const value: string = mathField.getValue();
            props.onChange(value);
        }
    };

    return (
        <div>
            <math-field ref={ref}></math-field>
        </div>
    );
}