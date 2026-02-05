import { useState, useMemo, useCallback } from "react";
export default function OptimizedList() {
    const [count, setCount]= useState(0);
    const [search, setSearch]= useState("");
     
 const numbers = useMemo(()=>{
    console.log("Generating numbers...");
    return Array.from({length:100000}, (_, i)=>i);
 }, []);
 const filtered = useMemo(
    ()=> numbers.filter(n=>n.toString().includes(search)),
    [search, numbers]
 );
 const increment = useCallback(()=> {
    setCount(c=>c+1);
 }, [])
 return (
    <div>
        <h3>Optimized List</h3>
        <button onClick={increment}> Count:{count}</button>
        <input placeholder="search number" onChange={e=> setSearch(e.target.value)}/>
        <p> Result:  {filtered.length}</p>
    </div>
 );

}