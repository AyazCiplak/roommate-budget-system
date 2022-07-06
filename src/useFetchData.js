import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const abort = new AbortController(); 

        fetch(url, { signal: abort.signal })
        .then(res => {
            if(!res.ok) {
                throw Error('Error: Could not fetch data.');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('Fetch aborted.');
            } else {
                setIsPending(false);
                setError(err.message);
            }
        })

        return () => abort.abort();
    }, [url]);   

    return { data, isPending, error }

}

export default useFetchData;