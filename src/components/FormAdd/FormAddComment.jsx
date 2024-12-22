import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "../Input/Input";
import { useFormContext } from "react-hook-form";
import './styles.css'
import axios from "axios";
import { ButtonBallCandy } from "../Button/ButtonBallCandy";





export const FormAddComment = () => {


    const isAuth = useSelector(state => state.auth)

    
    const { handleSubmit, reset, formState: { isValid } } = useFormContext();

    const path = "http://world.life.destiny.fvds.ru/backend/api/comments" 

    const onSubmit = (data) => {

        axios.post(path, data, isAuth.confermAut).then(res=>{
            alert("Комментарий успешно добавлен")
            reset()
        })
        .catch(err => {
            if(err.request.status === 401){
                alert("Вы ошиблись! Проверьте Логин и Пароль");
                reset()
            }
            else if(err.request.status >= 500) {
                alert("Извените, проблема с сервером, попробуйте зайти позже!");
                reset()
            }
            else {
                alert("Извените, что-то пошло не так!")
                reset()
            }
        })

        
    }
    

    return (
        <>

        <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="contener-add-book">
                <div className="data-book-add-element">
                    <Input name="content" message="Обязательно заполнить!">Комментарий</Input>
                    <Input name="author" message="Обязательно заполнить!">Автор комментария</Input>
                    <ButtonBallCandy disabled={!isValid} className="add-book">Добавить комментарий</ButtonBallCandy>
                </div>
            </div>
        </form>
        </>
    )
}