import { useState } from "react";
import axios from "axios";

// Custom hook for flipping a card
export function useFlip() {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(oldFlipState => !oldFlipState);
    };

    return [isFlipped, toggleFlip];
}

// Custom hook for using axios
export function useAxios(baseUrl) {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (urlSuffix = "") => {
        try {
            const fullUrl = baseUrl + urlSuffix;
            const response = await axios.get(fullUrl);
            setResponses(data => [...data, response.data]);
        } catch (error) {
            console.error("Axios request failed:", error);
            // Additional error handling can be implemented here if needed
        }
    };

    return [responses, addResponseData];
}
