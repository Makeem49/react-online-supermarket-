import React, {useState} from "react";
import Product from "./Product.js"
import ProductForm from "./ProductForm.js";
import ProductList from "./ProductList.js"
import "store-css/index.css"

export default function StoreFront() {
    
    const [items, setItimes] = useState([]);
    const [name , setName] = useState('');
    const [description, setDescription] = useState('');
    const [messageValidate, setMessageValidate] = useState('');



    function handleAddProduct(event) {
        
        event.preventDefault()

        if (!name) {
            setMessageValidate('Please enter a name')
            return null;
        }

        if (!description) {
            setMessageValidate("Please enter a description")
            return null;
        }
        let addProduct = {
            id : items.length,
            name : name,
            description : description,
            image : "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649400/react-tutorial/products/milk.png",
        }
        setItimes([...items, addProduct]);
        setName('');
        setDescription('');
        setMessageValidate('')
        // console.log("done")
    }

    
    function handleRemoveProduct(indexItem) {
        let filteredProduct = items.filter((product, index )=> indexItem !== index)
        setItimes([...filteredProduct])   
    }

    return <>
            <ProductForm onhandleForm={handleAddProduct} name={name} description={description} messageValidate={messageValidate} setName={setName} setDescription={setDescription}/>

            <div className="store-front">
                {/* render the two Products here */}
                <ProductList items={items} onDeleteItem={handleRemoveProduct}/>
            </div>;
       </> 
}
