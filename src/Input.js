import React from "react";


export default function Input(props) {
    return <input type={props.type  || 'text'} placeholder={props.placeholder} className='ui-textfield'/>
}