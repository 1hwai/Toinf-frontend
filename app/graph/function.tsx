"use client";
import {useState} from "react";
import styles from "@/app/styles/functionList.module.scss"
import { MathfieldComponent } from "react-mathlive";

export default function Function() {
    return (
        <div className={styles.functionHandler}>
            <div className={styles.mathField}>
                <math-field virtual-keyboard-mode="auto">2222</math-field>
                {/*<MathfieldComponent*/}
                {/*    initialLatex="x"*/}
                {/*    mathfieldConfig={}*/}
                {/*/>*/}
            </div>
            <button className={styles.runBtn} type={"submit"}>Run</button>
        </div>
    );
}