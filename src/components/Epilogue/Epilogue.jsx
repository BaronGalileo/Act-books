import React from "react";
import "./styles.css"
import { Text } from "../Text/Text";
import { ButtonPerfectBall } from "../Button/ButtonPerfectBall";
import { Img } from "../Img/Img";
import {GifComponents} from "../GifComponent/GifComponents";


export const Epilogue = () => {

    return(
        <div className="epilogue-wrapper">
            <Text className="epilogue-txt">Какой событие навсегда может запомниться вашему ребенку? Конечно же незабываемое 
                путешествие в волшебный мир сказок. Серия “Самая удивительная книга с объемными 
                картинками” открывает перед читателем в прямом смысле сказочные миры, позволяя стать 
                участником событий и получить ни с чем не сравнимые эмоции</Text>
            <ButtonPerfectBall href="https://ast.ru/series/samaya-udivitelnaya-kniga-s-obemnymi-kartinkami-7e485f/?SORT=NEW_SORT&SORT_BY=DESC"  className="epilogue-btn">Выбрать книгу</ButtonPerfectBall>
            <Img className="malvina" src="../images/malvina.png"></Img>
            <Text as="h1" className="bond red-text txt-footer">ПОДАРИ КНИГУ — ПОДАРИ ВОЛШЕБСТВО</Text>
            <Img className="present" src="../images/подарки.png"/>
            <GifComponents clear    classWrapper="butterfly-non-stop" className="img butterfly-img epilog"/>
        </div>
    )
}