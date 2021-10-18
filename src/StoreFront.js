import React, {useState, useEffect} from "react";
import Product from "./Product.js"
import Loader from "./Loader.js";
import "store-css/index.css"

export default function StoreFront() {
    
    const [items, setItimes] = useState([]);
    const [isLoading , setIsLoading ] = useState(true);
    console.log({isLoading})


    useEffect(() => {
        fetch('https://react-tutorial-demo.firebaseio.com/products.json')
        .then(response => response.json() )
        .then(data => {
            console.log(data)
            setItimes(data)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    })

    {/*Fetch data using async/await*/}

    // useEffect(() => {
    //     (
    //         async () => {

    //             try {
    //                 const response = await fetch('https://react-tutorial-demo.firebaseio.com/products.json');
    //                 const data = await response.json()
    //                 console.log(data)
    //                 setItimes(data)
    //             } catch(error) {
    //                 console.error(error)
    //             } finally{
    //                 console.log('Done')
    //             }
    //         }
    //     )
    // }, [])

    console.log(items)
    const listItems = items.map(item => {
        return <Product details={item} key={item.id}/>
    })

    return <>
            <div className="store-front">
                {/* render the two Products here */}
                {(isLoading) ? <Loader />: ''}

                {listItems}
            </div>;
       </> 
}
