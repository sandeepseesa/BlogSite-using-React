import { useEffect, useState } from 'react';

const useFetch = (url) => {
    
    const [blogs, setBlogs] = useState(null); 
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null); 
    
    useEffect(() => {
        setTimeout(()=> {
        fetch(url)
        .then(res => {
            // can use below this this just to throw error or can use not found .js to say error and redirect link
            // if(!res.ok){
            //     throw Error('could not fetch the data for that resource');
            // };
            return res.json();
        })
        .then(data => {
            setIsPending(false);
            setBlogs(data);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
    }, 1000 );
    }, [url]);  

    return {blogs, error, isPending};
}
 
export default useFetch;