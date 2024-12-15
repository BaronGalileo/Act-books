import React from "react";
import './styles.css'
import { CubeSlider } from "../CubeSlider/CubeSlider";
import { Img } from "../Img/Img";


export const BookPresentation = () => {

    return(
        <>
        <Img  className="baner" src="../images/Баннер 1.png"/>
        <div className="book-present-wrapper">
            <CubeSlider/>
        </div>
        </>
    )
}