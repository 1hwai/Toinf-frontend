"use client";

import React, {FormEvent, MouseEventHandler, useEffect, useRef, useState} from "react"

import dynamic from "next/dynamic";
import {MathfieldElement} from "mathlive";
import {inspect} from "util";
import styles from "../styles/functionList.module.scss";

const MathField = dynamic(() => import("@/app/utils/mathlive/MathField"), {
    ssr: false
})

export default function FunctionList() {
    const [list, setList] = useState<JSX.Element[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const mainRef = useRef<MathfieldElement | null>(null);

    const customSetInputValue = (latex: string) => {
        setInputValue(latex);

    }

    const handleInputChange = (latex: string) => {
        console.log(latex);
        setInputValue(latex);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setList([...list, <MathField id={Date.now().toString()} value={inputValue} onChange={handleInputChange} key={null}/>]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (id: number) => {
        const updatedTodos = list.filter((f) => f.props.id !== id);
        setList(updatedTodos);
    }

    return (
        <div className={styles.functionList}>
            <MathField
                id={'main'}
                value={""}
                onChange={handleInputChange}
                ref={mainRef}
            />
            <button className={styles.addBtn} onClick={handleAddTodo}>+</button>
            <ul>
                {list.map((f:JSX.Element) => (
                    <li className={styles.functionHandler} key={f.props.id}>
                        {f}
                        <button onClick={() => handleDeleteTodo(f.props.id)} className={styles.delBtn}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}