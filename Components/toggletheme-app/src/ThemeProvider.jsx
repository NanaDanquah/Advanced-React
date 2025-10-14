import { useState } from "react";
import {ThemeContext} from './ThemeContext'

function ThemeProvider({children}){
    const [theme, setTheme] = useState('light');

    //Function to toggle theme
    const toggleTheme = ()=> {
        setTheme((currentTheme)=> (currentTheme === 'light' ? 'dark' : 'light'));
    }

    //share both theme varaible and toggle function
    const value = {theme, toggleTheme};

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider;