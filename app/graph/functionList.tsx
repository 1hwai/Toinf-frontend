"use client";

import React, {FormEvent, MouseEventHandler, useEffect, useState} from "react"

import styles from "../styles/functionList.module.scss";
import Function from "@/app/graph/function";
import dynamic from "next/dynamic";
import {Mathfield} from "mathlive";

const MathField = dynamic(() => import("@/app/utils/mathlive/MathField"), {
    ssr: false
})


type Todo = {
    id: number;
    text: string;
};

export default function FunctionList() {

    /**const [list, setList] = useState<Array<JSX.Element>>([

    ]);

    const addFunction = (e: any) => {
    }

    return (
        <div>
            <MathField className={styles.mathfield} value={""} onChange={() => {}}/>
            { list.map((v,i) => {
                return (v);
            }) }

            <button onClick={addFunction}>+</button>
        </div>
    )**/

    const [list, setList] = useState<JSX.Element[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (latex: string) => {
        console.log(latex);
        setInputValue(latex);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            console.log('input: ' + inputValue)
            setList([...list, <MathField id={Date.now()} value={inputValue} onChange={handleInputChange} key={null}/>]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (id: number) => {
        const updatedTodos = list.filter((f) => f.props.id !== id);
        setList(updatedTodos);
    }

    return (
        <div>
            {/**<input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {list.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>**/}
            <div>
                <MathField
                    id={1}
                    value={""}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddTodo}>Add</button>
                <ul>
                    {list.map((f:JSX.Element) => (
                        <li key={f.props.id}>
                            <MathField id={f.props.id} value={f.props.value} onChange={handleInputChange}></MathField>
                            <button onClick={() => handleDeleteTodo(f.props.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}