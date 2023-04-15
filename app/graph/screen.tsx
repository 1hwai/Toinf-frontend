"use client";

import { useEffect, useRef } from "react";
import ScreenManager from "../models/ScreenManager";

import styles from "../styles/graph.module.scss";

export default function Screen() {

    const canvasRef = useRef(null);

    useEffect(() => {
        new ScreenManager(canvasRef.current!);
    });

    return (
        <div>
            <canvas className={styles.canvas} ref={canvasRef}></canvas>
        </div>
    );
}