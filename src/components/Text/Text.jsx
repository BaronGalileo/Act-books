import React from "react";
import classNames from "classnames";
import "./styles.css"




export const Text = ({ children, clear, className = "", as, ...restProps}) => {

    const classes = classNames(
        !clear? 'txt' : null,
        className,
    )
    const Component = as || "p";

    return (
        <Component 
            {...restProps}
            className={classes}
        >{children}
        </Component>

    );
};
