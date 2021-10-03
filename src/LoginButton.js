import React, {useState} from "react";
import {render} from "react-dom";
import StoreFront from './StoreFront.js'
import "index.css"

export default function LoginButton() {
    const [login , setLogin] = useState(false)

    function setLoggedIn(bool){
        if (login) {
            setLogin(false)
        } else {
            setLogin(true)
        }
    }

    if (!login) {
        return (
            <>
                 <h2>Please login</h2>
                <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
            </>
        )
    }

    return (
        <>
            <StoreFront/>
            <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
        </>
    );
}

