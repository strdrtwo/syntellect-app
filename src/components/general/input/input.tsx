import React from 'react';
import styles from './input.module.css';


interface InputProps {
    value: string
    className?: string | void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({ className, value, handleChange}) => {
    return (
        <div>
            <input className={styles.input} value={value} onChange={handleChange}/>
        </div>
    )
}

