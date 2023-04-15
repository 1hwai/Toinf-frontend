"use client";
import {useState} from "react";

export default function Function() {
    const [ func, setFunc ] = useState('');
    return (
        <div>
            <math-field virtual-keyboard-mode="auto"></math-field>
        </div>
    );
}