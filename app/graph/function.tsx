"use client";
import {useState} from "react";
import styles from "@/app/styles/functionList.module.scss"
import { MathfieldComponent } from "react-mathlive";

export default function Function() {
    return (
        <div>
            <div className={styles.mathField}>
                {/*<math-field virtual-keyboard-mode="auto"></math-field>*/}
                <MathfieldComponent
                    initialLatex="x"
                />
            </div>
            <button type={"submit"}>Run</button>
        </div>
    );
}