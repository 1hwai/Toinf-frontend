"use client";

import { useEffect, useRef } from "react";
import ScreenManager from "../models/screenManager";

// import styles from "../styles/screen.module.scss";
import styles from "../styles/screen.module.scss";

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