"use client";

import Screen from "./screen";
import FunctionList from "@/app/graph2/functionList";
import styles from "@/app/styles/page.module.scss";
import Link from "next/link";

export default function Graph() {
    return (
        <div className={styles.main}>
            <Link href={'/'} className={styles.card}>
                back
            </Link>
            <h2>Graph2 page</h2>


            <Screen></Screen>
            <FunctionList></FunctionList>
        </div>
    );
}
