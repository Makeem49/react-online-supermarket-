import React, {useContext} from 'react'
import {AppContext} from './AppContext.js'

export default function Navbar() {
    const {theme, themeToggle, currency, setCurrency} = useContext(AppContext)

    return (
        <>
        Shopping in {currency}
        <select onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUD">EUD</option>
        </select>

        - Using {theme} theme <button onClick={themeToggle}>Toggle button</button>
        <hr />
        </>
    )
}