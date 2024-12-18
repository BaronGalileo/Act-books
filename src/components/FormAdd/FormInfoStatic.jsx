import React from "react";
import "./styles.css"
import { ButtonBallCandy } from "../Button/ButtonBallCandy";
import { useSelector } from "react-redux";


export const FormInfoStatic = () => {

    const isAuth = useSelector(state => state.auth)

    const show = () => {
        console.log("SHOW", isAuth)

    }



    return(
        <div className="contener-add-book">
           FormInfoStatic 
           <ButtonBallCandy onClick={show} className="add-book">Посмотреть</ButtonBallCandy>
        </div>
    )
}

