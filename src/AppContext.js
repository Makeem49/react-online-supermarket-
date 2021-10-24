import React, {createContext, useState} from "react";

const AppContext = createContext()


function AppProvider(props) {
    const [theme , setTheme] = useState('dark')
    const [currency, setCurrency] = useState('USD')

    function themeToggle() {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }


    const value = {
        theme : theme,
        themeToggle : themeToggle,
        currency : currency,
        setCurrency : setCurrency 
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}