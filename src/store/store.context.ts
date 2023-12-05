import {createContext} from "react";
import {CountryStore} from "./country";

type StoreContextProps = {
    countryStore: CountryStore
}

const countryStore = new CountryStore()

export const StoreContext = createContext<StoreContextProps>({
    countryStore,
})
