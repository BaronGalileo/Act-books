import React from "react";
import './styles.css'
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { removeAuth } from "../../store/authSlice";
import { Text } from "../Text/Text";
import { FormAdmin } from "../FormAdmin/FormAdmin";
import { ButtonBallCandy } from "../Button/ButtonBallCandy";


export const AdminPanel = () => {

    const dispatch = useDispatch();

    const del = () => {
        dispatch(removeAuth())

    }

    return(
        <div className="admin-wrapper">
            <Text className="red-text" as='h2'>Админ понель</Text>
            <FormAdmin/>
            <ButtonBallCandy onClick={del} className="add-book">Выйти</ButtonBallCandy>
        </div>
    )
}