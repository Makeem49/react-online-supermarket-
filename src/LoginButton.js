import React, {useState} from "react";
import StoreFront from './StoreFront.js';
import "store-css/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from './ProductDetails.js'


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
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <StoreFront />
                </Route>
                <Route exact path='/products/:id'>
                    <ProductDetails />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
};

