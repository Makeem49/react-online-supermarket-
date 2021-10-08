import React, {useState} from "react";
import "store-css/index.css"

export default function Product(props) {
    const [count , setCount ] = useState(0);
    let disableCount = false;

    function handleCountIncreaseClick() {
        setCount(count + 1)
    }

    function handleCountDecreaseClick() {
        setCount(count - 1)
    }

    if (!count) {
        disableCount = true
    }

    return <div className="product">
        <img width="50" alt="" src={props.details.image}/>
        <div className="product-info">
            <h2>{props.details.name}</h2>
            <p>{props.details.description}</p>
        </div>
        <div className="product-buttons">
            <button className="product-sub" onClick={handleCountDecreaseClick } disabled={disableCount}>-</button>
            <h3 className="product-count">{(count) ? count : null}</h3>
            <button className="product-add" onClick={handleCountIncreaseClick }>+</button>
        </div>
    </div>
}
