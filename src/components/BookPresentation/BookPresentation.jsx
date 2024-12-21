import React from "react";
import './styles.css'
import { CubeSlider } from "../CubeSlider/CubeSlider";
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";


export const BookPresentation = () => {

    return(
        <div className="book-presentation-page-wrapper">
            <div className="stars-nato"></div>
            <div className="stars-nato"></div>
        <Text className="red-text bond present-cube-txt for-h1" >ОТКРОЙТЕ ДЛЯ СЕБЯ МИР ВОЛШЕБСТВА</Text>
            <div className="book-present-wrapper">
                <CubeSlider/>
            </div>
        </div>
    )
}