import React, {useState} from "react";

import styles from "../styles/functionList.module.scss";
import Graph from "@/app/models/graph";
import runHandler from "@/app/api/functionList/runHandler";

export type FunctionHandlerProps = {
    id: string;
    value?: string;
}

export default function FunctionHandler(props: FunctionHandlerProps) {
    const [inputValue, setInputValue] = useState<string>('');

    const style = {
        margin: "32px",
        padding: "5px",
        width: "60vw",
        height: "40px",
        background: "white",
        color: "black",
        fontsize: "1.4em",
        border: "0px",
        borderRadius: "10px",
        boxShadow: "0 1em 2em 1em #afafaf",
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <div>
            <input style={style} value={props.value} onChange={handleInputChange}/>
            <button onClick={() => runHandler(props.id, inputValue)} className={styles.runBtn}>*</button>
        </div>
    )

}