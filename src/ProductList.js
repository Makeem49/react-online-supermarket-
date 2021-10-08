import React from "react";
import Product from "./Product.js";


export default function ProductList(props) {
    console.log(props.items)
    // const itemList = 

    function handleRemoveProduct(index) {
        props.onDeleteItem(index)
    }

    const listItems = props.items.map((product, index) => {
        return <>
                <li key={product.id}> <Product details={product}/> 
                <button onClick={()=>handleRemoveProduct(index)}>Delete</button>
                
                </li> 
            </>
    });

    return listItems;
}