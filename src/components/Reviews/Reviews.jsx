import React from "react";
import './styles.css'
import { Slider } from "../Slider/Slider";
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";


export const Reviews = () => {

    return(
        <div className="reviews-wrapper">
            <Text  className="title-reviews bond for-h1">МАГИЯ СТРАНИЦ ГЛАЗАМИ МАМ</Text>
            <Img className="background-balls" src="../images/шары с веревочками 1.png"/>
            <Slider/>
        </div>
    )
}