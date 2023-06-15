import React, {useState} from "react";

import styles from "../styles/functionList.module.scss";

export default function FunctionHandler() {

    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <div>
            <input/>
            <button className={styles.runBtn}>*</button>
        </div>
    )


}