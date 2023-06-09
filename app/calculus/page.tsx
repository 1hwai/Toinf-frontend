"use client";

import integral from "@/app/api/backend/integral";
import styles from "../styles/mathfield.module.scss";
import dynamic from "next/dynamic";
import {MathfieldComponent} from "react-mathlive";

const Mathfield = dynamic(() => import("@/app/utils/mathlive/Mathfield"), {
    ssr: false
})

export default function Calculus() {
    const onIntegralClick = (e: any) => {
       console.log(integral("sdfsf"));
    }
    return (
        <div>
            <Mathfield  />
            <button onClick={onIntegralClick}>click</button>
        </div>
    );
}
