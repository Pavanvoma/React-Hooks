import {  createContext, useState } from "react";
export const ThemeContext = createContext();

export function ThemeProvider({childern}) {
    const [dark, setDark]= useState(false);
    
    return(
        <ThemeContext.Provider value = {{dark, setDark}}>
            <div className={dark? "dark bg-gray-900 text-white min-h-screen " : "bg-white text-black min-h-screen"}>
                {childern}
            </div>
        </ThemeContext.Provider>
    )
}