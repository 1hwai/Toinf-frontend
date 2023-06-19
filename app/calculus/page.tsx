"use client";

import dynamic from "next/dynamic";
import {MathfieldComponent} from "react-mathlive";
import {useState} from "react";
import Link from "next/link";
import Screen from "@/app/graph/screen";
import FunctionList from "@/app/calculus/functionList";

import styles from "@/app/styles/page.module.scss";

const MathField = dynamic(() => import("@/app/utils/mathlive/MathField"), {
    ssr: false
})

export default function Calculus() {
    return (
        <div className={styles.main}>
            <Link href={'/'} className={styles.card}>
                back
            </Link>
            <Link href={'/graph2'} target={'_blank'} className={styles.card}>
                open Graph2 page in a new tab
            </Link>
            <h2>Calculus page</h2>

            <FunctionList></FunctionList>
        </div>
    );
}
