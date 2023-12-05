import React from "react";
import styles from "./countries.module.css";

interface CountryProps {
    countryName: string;
    countryFullName: string;
    flag: string;
}


export const Countries = ({ countryName, countryFullName, flag }: CountryProps): JSX.Element => (
    <div className={styles.wrapper}>
        <img className={styles.flag} src={flag} alt={countryName} />
        <div>
            <h6 className={styles.fullname}>{countryFullName}</h6>
            <span className={styles.name}>{countryName}</span>
        </div>
    </div>
)
