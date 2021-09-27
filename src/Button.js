import React from "react";

export default function Button(props) {
    return (
        <>
            <button type={props.type} disabled={props.disabled} className='ui-button'> {props.children} </button>
        </>
    )
}