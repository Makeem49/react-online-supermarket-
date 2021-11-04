import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import useFetch from './useFetch.js'
import Loader from './Loader.js'

export default function ProductDetails() {
    const [loading , setLoading ] = useState(true)
    const [product, setProduct] = useState({})
    const params = useParams()
    const {get} = useFetch('https://react-tutorial-demo.firebaseio.com/')
    
    console.log(params)

    useEffect(() => {
        get(`productdetails/id${params.id}.json`)
        .then(data => {
            setLoading(false)
            setProduct(data)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
    }, [product])
    

    return <div>
    <Link to='/'>Back home</Link>
        {loading ? <Loader /> : ''}
        {product && <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <img src={product.image} width="100" />
        </div>}
    </div>
    ;
}

