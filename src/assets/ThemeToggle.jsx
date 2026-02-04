import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
 export default function ThemeToggle(){
    const {dark, setDark} = useContext(ThemeContext)
    return(
        <button onClick={()=> setDark(!dark)}>
            Switch Theme
        </button>
    );
 }