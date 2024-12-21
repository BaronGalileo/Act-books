import React from "react";
import './styles.css'
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";
import { ButtonPerfectBall } from "../Button/ButtonPerfectBall";
import { useDispatch } from "react-redux";
import { incrementCatalog } from "../../store/interactivSlise";


export const CardsBook = ({src='', link="", title="", contex="" }) => {

    const dispatch = useDispatch()

    return(
        <div className="cards-book-wrapper">
            <div className="cards-book-element">
                <div className="frame-book">
                    <Img className="cardsBook-img" src={src}/>
                </div>
                <div className="frame-book"></div>
                {/* <div className="umbrella"></div> */}
            </div>
            <div className="cards-book-element ">
                <Text  className="title-book">{title}</Text>
                <Text className="contex-book">{contex}</Text>
            </div>
            <div className="anchor">
                <ButtonPerfectBall onClick={() => dispatch(incrementCatalog())} href={link} className="button-cards">Хочу</ButtonPerfectBall>
            </div>
        </div>
    )
}