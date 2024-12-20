import React from "react";
import classNames from "classnames";
import "./styles.css"

export const Img = ({ className, clear, imageData=false,  src = "defaultNoData.png", alt = "testImg", ...restProps }) => {

    const imageUrl = `data:image/png;base64,${imageData}`;

    const classes = classNames(
        !clear? 'img' : null,
        className,
    )

    return <img className={classes}
                src={imageData ? imageUrl :src} 
                alt={alt} 
                {...restProps} 
                loading={"lazy"}/>
}