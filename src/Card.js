import React from "react";
import 'card.css'
import Description from "./Description.js";


export default function Card(props) {
    const {children} = props;

    const details = [{
        image : "https://res.cloudinary.com/djrjvd4hd/image/upload/v1633215662/samples/shoe_osnro4.jpg",
        name : 'Louis Vuiton',
        price : 200,
        discount : '50%'
    },
    {
        image : "https://res.cloudinary.com/djrjvd4hd/image/upload/v1633219732/samples/t-shirt_rssy8s.jpg",
        name : 'T-shirt',
        price : 30,
        discount : '50%'
    },
    {
        image : "https://res.cloudinary.com/djrjvd4hd/image/upload/c_scale,h_200,w_200/v1633219846/samples/polo_x3da7y.jpg",
        name : 'Louis Vuiton',
        price : 20,
        discount : '50%'
    },
    {
        image : "https://res.cloudinary.com/djrjvd4hd/image/upload/c_scale,h_200,w_200/v1633219978/samples/watch_rcuxy1.jpg",
        name : 'All star',
        price : 150,
        discount : '50%'
    },
    {
        image : "https://res.cloudinary.com/djrjvd4hd/image/upload/c_fit,h_200,w_200/v1633220337/samples/waist_beed_gdejrb.jpg",
        name : 'waist beed',
        price : 10,
        discount : '50%'
    },
]

    return (
        <div className='cards'>
            <div className='card'>
                <Description content={details[0]}></Description>
            </div>
            <div className='card'>
                <Description content={details[1]}></Description>
            </div>
            <div className='card'>
                <Description content={details[2]}></Description>
            </div>
            <div className='card'>
                <Description content={details[3]}></Description>
            </div>
            <div className='card'>
                <Description content={details[4]}></Description>
            </div>
        </div>
    );
}