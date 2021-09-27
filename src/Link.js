import React from "react";


export default function Link(props) {
    return <a href={props.href} className='ui-link'> {props.children} </a>
}