import React, { useState, useEffect } from "react";
import type { ThemeContextType, Theme } from "../types";

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(()=>{
        const stored = localStorage.getItem("theme") as Theme | null;
        return stored ?? 'light';
    })

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);


    return (
        <ThemeContext value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext>
    )
}

export default ThemeContext;