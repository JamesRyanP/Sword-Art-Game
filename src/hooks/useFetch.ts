import { useEffect, useState } from "react";


export const useFetch = (url: string) => {
    const [response, setResponse] = useState({});
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, [url]);

    return { response, error };
};