import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
   // get initial value from localstorage
    const [value, setValue] = useState(()=>{
     const saved = localStorage.getItem(key);
     return saved ? JSON.parse(saved) : initialValue;
});

// Update localstorage whenever value changes
useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
}, [key,value]);

return [value, setValue];
}