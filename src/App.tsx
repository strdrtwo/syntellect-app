import React, {useState} from "react";

import styles from './app.module.css';

import {AutocompleteControl} from "./components/control/autocompleteControl/autocompleteControl";
import {ButtonControl} from "./components/control/controlWithButton/buttonControl";

export const App = () => {

    const [firstValue, setFirstValue] = useState('')
    const firstHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstValue(e.target.value)
    }

    const [secondValue, setSecondValue] = useState('')
    const secondHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondValue(e.target.value)
    }
    const hello = () => {
        setFirstValue('Hello world!')
    }

    const clear = () => {
        setFirstValue('')
    }

    const checkNumber = () => {
        if (!isNaN(Number(secondValue))) {
            alert(secondValue)
        } else alert('Введите число')
    }

    const alertInput = () => {
        alert(secondValue.trim())
    }
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h2>Задание №1</h2>
                <ButtonControl value={firstValue} handleChange={firstHandle} rButton={[
                    {title: 'clear', handle: clear},
                    {title: 'hello', handle: hello}
                ]}/>
                <ButtonControl value={secondValue} handleChange={secondHandle}
                               lButton={[{title: 'number', handle: checkNumber}]}
                               rButton={[{title: 'alert', handle: alertInput}]}/>
                <div className={styles.box}>
                    <h2>Задание №2</h2>
                    <AutocompleteControl limit={3} />
                    <AutocompleteControl limit={10} />
                </div>
            </div>
        </div>
    )
}

