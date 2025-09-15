import { useState, useEffect } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, SetError] = useState(null);

useEffect(()=>{
    if (!url) return;

    setLoading(true);
    SetError(null);

    fetch(url)
      .then((res)=>{
        if(!res.ok) throw new Error("Failed to fetch data!!");
        return res.json();
      })
      .then((data)=> setData(data))
      .catch((err)=> SetError(err.message))
      .finally(()=> setLoading(false));
}, [url]);

return {data, loading, error};
}