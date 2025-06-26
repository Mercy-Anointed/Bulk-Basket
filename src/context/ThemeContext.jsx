import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';

const ThemeContext = createContext();

 export const ThemeProvider = ({children}) => {
    const getInitialTheme = () => {
        if (typeof window === 'undefined') return "light";

        const stored = localStorage.getItem("theme");
        if (!stored || stored === "system"){
            const prefersDark= window.matchMedia("(prefers-color-scheme:dark)").matches;
            prefersDark ? "dark" : "light"
        }
        return stored;
    }

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "system"
    })

    //apply the theme class to <body>
    useEffect(() => {
        const body= document.body;
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const appiedTheme = theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme

        body.classList.remove("light", "dark");
        body.classList.add(appiedTheme);
        localStorage.setItem("theme", theme)
    }, [theme])

    //handle system theme change dynamically
    useEffect(() => {
        if (theme !== "system") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const updateSystemTheme = (e) => {
            const newTheme = e.matches ? "dark" : "light"
           document.body.classList.remove("light", "dark");
            document.body.classList.add(newTheme);
        
        };

        mediaQuery.addEventListener("change", updateSystemTheme);
        return () => mediaQuery.removeEventListener("change", updateSystemTheme);
    }, [theme]) 


    return (
         <ThemeContext.Provider value={{theme, setTheme}}>
     {children}
    </ThemeContext.Provider>
    )
}

export const usetheme = () => useContext(ThemeContext)