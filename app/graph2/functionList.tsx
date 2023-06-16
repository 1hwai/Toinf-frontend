"use client";

import React, {FormEvent, MouseEventHandler, useEffect, useRef, useState} from "react"

import dynamic from "next/dynamic";
import {MathfieldElement} from "mathlive";
import {inspect} from "util";
import styles from "../styles/functionList.module.scss";
import FunctionHandler from "@/app/graph2/FunctionHandler";
import removeHandler from "@/app/api/functionList/removeHandler";
import FunctionManager from "@/app/models/function/functionManager";

export default function FunctionList() {
    const [list, setList] = useState<JSX.Element[]>([
        <FunctionHandler id={Date.now().toString()}/>
    ]);

    const handleAddFunction = () => {
        setList([...list, <FunctionHandler id={Date.now().toString()}/>]);
    };

    const handleDeleteFunction = (id: string) => {
        const updatedTodos = list.filter((f) => f.props.id !== id);
        setList(updatedTodos);
        removeHandler(id);
    }

    return (
        <div className={styles.functionList}>
            <ul>
                {list.map((f: JSX.Element) => (
                    <li className={styles.functionHandler} key={f.props.id}>
                        {f}
                        <button onClick={() => handleDeleteFunction(f.props.id)} className={styles.delBtn}>-</button>
                    </li>
                ))}
            </ul>

            <button onClick={handleAddFunction} className={styles.addBtn}>+</button>
        </div>
    );
}