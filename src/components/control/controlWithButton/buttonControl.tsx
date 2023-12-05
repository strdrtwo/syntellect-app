import React from 'react';

import {Input} from "../../general/input/input";
import {Button} from "../../general/button/button";

import styles from "../control.module.css";


interface ButtonProps {
    value: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    lButton?: {
        title: string
        handle: () => void
    }[]
    rButton?: {
        title: string
        handle: () => void
    }[]
}

export const ButtonControl: React.FC<ButtonProps> = ({value, handleChange, lButton, rButton}) => {
    return (
        <>
            <div className={styles.button_control}>
                {lButton?.map(({title, handle}) => (
                    <Button key={title} title={title} handle={handle}/>
                ))}
                <Input className={styles.input} value={value} handleChange={handleChange}/>
                {rButton?.map(({title, handle}) => (
                    <Button key={title} title={title} handle={handle}/>
                ))}
            </div>
        </>
    )
}