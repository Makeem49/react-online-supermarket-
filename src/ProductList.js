import React from "react";
import Product from "./Product.js";


export default function ProductList(props) {
    console.log(props.items)
    // const itemList = 

    function handleRemoveProduct(index) {
        props.onDeleteItem(index)
    }

    const listItems = props.items.map((product, index) => {
        return <React.Fragment key={product.id}> 
                <li key={product.id}> <Product details={product}/> 
                <button onClick={()=>handleRemoveProduct(index)}>Delete</button>
                
                </li> 
            </React.Fragment>
    });

    return listItems;
}