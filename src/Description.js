import React, {useState} from "react";


export default function Description(props) {
    const {image, name, price, discount} = props.content;
    const [count, setCount] = useState(0);
    let condition = false;

    function handleIncreaseCountClick() {
        setCount(count + 1)
    }

    function handleDecreaseCountClick() {
        setCount(count - 1)
    }

    if (count === 0) {
        condition = true
    }


    
    return (
        <>
            <img src={image} alt="" className='image'/>
            <div className="content">
                <h3>{name}</h3>
                <p>Amount : ${(count===1 || count ===0) ? price : price * count} ({discount} off)</p>

                <p>Quantity : { (count) ? count : null}</p>

                <div className='quantity'>
                    <button className="btn sub" onClick={handleDecreaseCountClick} disabled={condition}>-</button>
                    <button className='btn add' onClick={handleIncreaseCountClick}>+</button>
                </div>
            </div>
        </>
    )
}