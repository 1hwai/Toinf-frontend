"use client";

import React, {FormEvent, MouseEventHandler, useEffect, useRef, useState} from "react"

import dynamic from "next/dynamic";
import {MathfieldElement} from "mathlive";
import {inspect} from "util";
import styles from "../styles/functionList.module.scss";
import FunctionManager from "@/app/models/function/functionManager";

const MathField = dynamic(() => import("@/app/utils/mathlive/MathField"), {
    ssr: false
})

export default function FunctionList() {
    const [list, setList] = useState<JSX.Element[]>([
        <MathField id={Date.now().toString()}/>
    ]);

    const handleAddFunction = () => {
        setList([...list, <MathField id={Date.now().toString()}/>]);
    };

    const handleDeleteFunction = (id: number) => {
        const updatedTodos = list.filter((f) => f.props.id !== id);
        setList(updatedTodos);
    }

    return (
        <div className={styles.functionList}>
            <ul>
                {list.map((f:JSX.Element) => (
                    <li className={styles.functionHandler} key={f.props.id}>
                        {f}
                        <button onClick={() => handleDeleteFunction(f.props.id)} className={styles.delBtn}>-</button>
                    </li>
                ))}
            </ul>
            <button className={styles.addBtn} onClick={handleAddFunction}>+</button>
        </div>
    );
}