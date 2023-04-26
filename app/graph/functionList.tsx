"use client";

import React, {FormEvent, MouseEventHandler, useEffect, useState} from "react"

import styles from "../styles/functionList.module.scss";
import Function from "@/app/graph/function";

export default function FunctionList() {

    const [list, setList] = useState<Array<JSX.Element>>([
        <Function/>
    ]);

    const addFunction = (e: any) => {
        // fetch("/api/add?todo=" + )
        const list2 = list;
        list2.push(<Function></Function>)
        setList(list2);
    }

    return (
        <div>
            { list.map((v,i) => {
                return (v);
            }) }

            <button onClick={addFunction}>+</button>
        </div>
    )
}