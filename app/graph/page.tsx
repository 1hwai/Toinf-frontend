"use client";

import Screen from "./screen";
import FunctionList from "@/app/graph/functionList";
import styles from "@/app/styles/page.module.scss";

export default function Graph() {
    return (
        <div className={styles.main}>
            <div>Cal page</div>

            <Screen></Screen>
            <FunctionList></FunctionList>
        </div>
    );
}
