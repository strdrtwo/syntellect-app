import {makeAutoObservable} from "mobx";
import {getCountryByName} from "../api/apiService";

export interface CountryInfo {
    name: string;
    fullName: string;
    flag: string;
}

export class CountryStore {
    countriesList: Array<CountryInfo> = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchCountry = async (countryPart: string, size?: number) => {
        try {
            const result = await getCountryByName(countryPart)
            // @ts-ignore
            const uniqCountries = [...new Set(result)]
            const countries = uniqCountries.slice(0, size)

            return this.countriesList = [...countries]

        } catch (err) {
            throw err
        }
    }
}