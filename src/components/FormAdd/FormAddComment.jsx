import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/authSlice"
import { Input } from "../Input/Input";
import {  useForm, useFormContext } from "react-hook-form";
import './styles.css'
import axios from "axios";
import { ImageUpload } from "../Input/ImageUpload";
import { ButtonBallCandy } from "../Button/ButtonBallCandy";





export const FormAddComment = () => {


    const isAuth = useSelector(state => state.auth)

    

    // useEffect(() => {
    //     if(isAuth.confermAut){
    //         axios.get(pach_user_role, isAuth.confermAut)
    //         .then(res => {
    //             res.data.roles.map(val => {
    //                 if(val[0]){
    //                     const accountAdd = {
    //                         name: val[0]?.name,
    //                         username: isAuth.username,
    //                         confermAut : isAuth.confermAut,
    //                         user_role: val[0]?.role,
    //                         auth_token: isAuth.auth_token,
    //                     }
    //                     return dispatch(setAuth(accountAdd))
    //                 }
    //                 return null
    //             })
    //         })
    //     }
    // }, [isAuth])
    const { handleSubmit, reset, formState: { isValid } } = useFormContext();

    const path = "http://world.life.destiny.fvds.ru/backend/api/comment" 

    const dispatch = useDispatch();

    // const path = "http://127.0.0.1:8000/auth/token/login/"

    // const pach_user_role = "http://127.0.0.1:8000/users/role/"


    


    const onSubmit = (data) => {
        console.log("data", data, isAuth.confermAut)
        debugger

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
// 'Content-Type': 'multipart/form-data',
    

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