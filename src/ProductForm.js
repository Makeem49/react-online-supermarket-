import React from "react";

export default function ProductForm(props) {
    
    function handleProductForm(e) {
        e.preventDefault()
        props.onhandleForm(e)
    }


    return <form onSubmit={handleProductForm}>
    <label htmlFor="">Name</label> <br/>
    <input type='text' id='text'  value={props.name} onChange={(e) => props.setName(e.target.value)}/> <br />
    <label htmlFor="description">Description</label> <br/>
    <input type='text' id='description' value={props.description} onChange={e => props.setDescription(e.target.value)}/>
    <p>{props.messageValidate}</p>
    <button >Add Item</button>
</form> 
}