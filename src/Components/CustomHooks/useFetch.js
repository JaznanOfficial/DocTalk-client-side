import React, { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
       
        fetch(url)
                
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(res.statusText);
                    }
                    return res.json();
                })
                .then((data) => {
                    setLoading(false);
                    setData(data);
                })
                .catch((error) => {
                    setLoading(false);
                    setError(error);
                });
        
    }, [url]);

    

    return {
        data,
        loading,
        error,
        setError,
    };
};

export default useFetch;
