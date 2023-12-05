import React from 'react';
import styles from './button.module.css';


interface ButtonProps {
    title: string
    handle: () => void
}

export const Button: React.FC<ButtonProps> = ({title, handle}) => {
    return (
        <div>
            <button className={styles.button} onClick={handle}>{title}</button>
        </div>
    )
}
