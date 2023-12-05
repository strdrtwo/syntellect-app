import {ChangeEvent, useEffect, useRef, useState,} from "react";

import styles from "../control.module.css";

import {CountryInfo, getCountryByName} from "../../../api/apiService";

import {Input} from "../../general/input/input";
import {Countries} from "./countries/countries";
import {useDebounce} from "../../hooks/useDebounce";


interface AutocompleteProps {
    limit?: number;
}

export const AutocompleteControl = ({ limit = 10 }: AutocompleteProps): JSX.Element => {
    const [searchString, setSearchString] = useState<string>("")
    const [value, setValue] = useState<string>("")
    const [countries, setCountries] = useState<CountryInfo[]>([])

    const debouncedSearchString = useDebounce(searchString)

    const autocompleteRef = useRef<HTMLDivElement>(null)

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        setSearchString(event.target.value)
    };

    const onCountryClick = (fullName: string) => {
        setValue(fullName)
        setSearchString("")
        setCountries([])
    };

    useEffect(() => {
        if (debouncedSearchString) {
            getCountryByName(debouncedSearchString).then((result) => {
                setCountries(result)
            })
        } else {
            setCountries([])
        }
    }, [debouncedSearchString])

    return (
        <div className={styles.wrapper} ref={autocompleteRef}>
            <Input value={value} handleChange={onInputChange}/>
            {!!countries.length && (
                <ul className={styles.list}>
                    {countries.map((country, index) => (
                        index < limit
                        && (
                            <li
                                key={country.name}
                                className={styles.item}
                                role="presentation"
                                tabIndex={index}
                                onClick={() => onCountryClick(country.fullName)}
                            >
                                <Countries countryName={country.name} countryFullName={country.fullName} flag={country.flag} />
                            </li>
                        )
                    ))}
                </ul>
            )}
        </div>
    )
}