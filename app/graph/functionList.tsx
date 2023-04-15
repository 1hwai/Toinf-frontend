"use client";

import React, {FormEvent, useEffect, useState} from "react"

import styles from "../styles/functionList.module.scss";
import Function from "@/app/graph/function";

export default function FunctionList() {

    const [list, setList] = useState<Array<JSX.Element>>([
        <Function/>
    ]);

    return (
        <div>
            {/*{ list.map((v,i) => {*/}
            {/*    return (v);*/}
            {/*}) }*/}
            <button>+</button>
        </div>
    )
}