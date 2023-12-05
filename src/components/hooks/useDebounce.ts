import { useEffect, useState } from "react";

export const useDebounce = <T = string> (value: T, delay = 300): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(handler)
    }, [value])

    return debouncedValue
}
