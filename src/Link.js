import React from "react";
import clsx from "clsx";

export default function Link(props) {
    const {className, children, ...rest} = props;
    const classes = clsx({
        "ui-link":true,
    }, className)
    return <a {...rest} className={classes}> {children} </a>
}