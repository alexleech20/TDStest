import { useState } from "react";
import { getConversionRate } from "../services/getServices.js";

function useConversion() {
    const [ result, setResult ] = useState("");
    const [ isConverting, setIsConverting ] = useState(false);
    const [ error, setError ] = useState("");

    const convert = async (from, to, amount) => {
        if (!from || !to || amount <= 0) {
            setError("Please select both currencies and enter a valid figure.");
            return;
        }

        try {
            setError("");
            setIsConverting(true);
            setResult(await getConversionRate(from, to, amount));
        } catch (err) {
            console.error("Conversion failure: ", err);
            setError("Conversion failed. Please try again.");
        } finally {
            setIsConverting(false);
        }
    };

    const clearResult = () => { 
        setResult(""),
        setError("")
    };

    return { result, isConverting, error, convert, clearResult };
}

export default useConversion;