import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import Calculator from "@/app/graph/page";
import {inspect} from "util";

import styles from "@/app/styles/page.module.scss";

import toinfMainImg from "@/app/images/toinf_main.png";

export default function Home() {
    return (
        <div className={styles.main}>
            <div>
                <h2 className={styles.card}>Toin∲ → ∞ </h2>
            </div>
            <div>
                <Image src={toinfMainImg} alt={"toinf_main_img"}/>
            </div>
            <div className={styles.grid}>
                <Link className={styles.card} href="/graph">Graph</Link>
                <Link className={styles.card} href="/graph2">Graph2</Link>
                <Link className={styles.card} href="/calculus">Calculus</Link>
            </div>
        </div>
    );
}
