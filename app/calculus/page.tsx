"use client";

import integral from "@/app/api/backend/integral";
import styles from "../styles/mathfield.module.scss";
import dynamic from "next/dynamic";
import {MathfieldComponent} from "react-mathlive";

const MathField = dynamic(() => import("@/app/utils/mathlive/MathField"), {
    ssr: false
})

export default function Calculus() {
    const onIntegralClick = (e: any) => {
       console.log(integral("sdfsf"));
    }
    return (
        <div>
            <MathField id={1} className={styles.mathfield} value={""} onChange={() => {}}/>
            <button onClick={onIntegralClick}>click</button>
        </div>
    );
}
