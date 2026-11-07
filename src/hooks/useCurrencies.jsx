import {useEffect, useState} from "react";
import { getExchangeList } from "../services/getServices.js";


function useCurrencies() {
    const [ currencyList, setCurrencyList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState("");
    
    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                setIsLoading(true)
                setCurrencyList(await getExchangeList());
            } catch (error) {
                console.error("Error whilst getting currencies: ", error);
                setError("Unable to load currencies.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCurrencies();
    }, []);

    return { currencyList, isLoading, error }
}

export default useCurrencies;