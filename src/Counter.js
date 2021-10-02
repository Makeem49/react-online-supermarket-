
   
import React, {useState} from "react";

export default function Counter() {
    const [count , setCount ] = useState(0)
    let disableIncrease = false;
    let disableDecrease = false;
    {/*this function increase the count button*/}
    {/*this function is able to access the count due to closure*/}
    function handleIncreaseClick() {
        if (count <= 10) {
            setCount(count + 1)
        }
    }
    
    {/*this function decrease the count button*/}
    {/*this function is able to access the count due to closure*/}
    function handleDecreaseClick() {
        if (count > 0) {
            setCount(count - 1)
        }
    }


    {/* Creating a function that will Change the disbaleIncrease and disableDecrease 
                            varibale base on count condition to disable the buttons */}

    function disableDecreaseFunction() {
        if (count === 0) {
            disableDecrease = true
        }
    }

    disableDecreaseFunction()

    function disableIncreaseFunction() {
        if (count === 10) {
            disableIncrease = true
        }
    }

    disableIncreaseFunction()

    return (
        <>
            {/* Display count */}
            <h1>{count} times click</h1>

            {/* Increase button */}
            <button onClick={handleIncreaseClick} disabled={disableIncrease} >Increase count </button>
            {/* Decrease button */}
            <button onClick={handleDecreaseClick} disabled={disableDecrease} >Decrease count </button>
        </>

    )
}
