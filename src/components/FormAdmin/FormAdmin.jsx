import React from "react";
import './styles.css'
import { ButtonBallCandy } from "../Button/ButtonBallCandy";
import {GifComponents} from "../GifComponent/GifComponents";


export const FormAdmin = () => {

    return(
        <div className="form-admin-wrapper">
            <GifComponents clear gif="myGifBoy" foto="../images/boy.png" static_element classWrapper="boy-wrapper" className="img boy-img"/>
            <div>dsfsdfs</div>
            <div>sfsfsd</div>
            <div>sfsdfsdf</div>
            <ButtonBallCandy className="add-book" >Добавить книгу</ButtonBallCandy>

        </div>
    )
}