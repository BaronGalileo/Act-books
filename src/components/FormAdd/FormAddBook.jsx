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





export const FormAddBook = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

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

    // const methods = useForm();
  

    const dispatch = useDispatch();

    useEffect(() => {

    }, [formSubmitted])

    // const path = "http://127.0.0.1:8000/auth/token/login/"

    // const pach_user_role = "http://127.0.0.1:8000/users/role/"


    


    const onSubmit = (data) => {
        setFormSubmitted(true)

        const path = "http://world.life.destiny.fvds.ru/backend/api/books"
        console.log("data", data)

        // axios.post(path, data, {
        //     headers: {
        //         'Authorization': `Bearer ${isAuth.auth_token}`,
        //         'Content-Type': 'application/json'
        //     }
        // } ).then(res=>{
        //     console.log("post", path, data, isAuth.confermAut )
        //     console.log("res.data", res.data)
        // })
        // .catch(err => {
        //     if(err.request.status === 401){
        //         alert("Вы ошиблись! Проверьте Логин и Пароль");
        //         reset()
        //     }
        //     else if(err.request.status >= 500) {
        //         alert("Извените, проблема с сервером, попробуйте зайти позже!");
        //         reset()
        //     }
        //     else {
        //         console.log("err", err)
        //         console.log("post", path, data, isAuth.confermAut )
        //     }
        // })

        
    }
// 'Content-Type': 'multipart/form-data',
    

    return (
        <>

        <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="contener-add-book">
                <div className="data-book-add-element">
                    <Input name="book.title" message="Обязательно заполнить!">Название книги</Input>
                    <Input name="book.author" message="Обязательно заполнить!">Автор книги</Input>
                    <Input name="book.description" message="Обязательно заполнить!">Описание книги</Input>
                    <Input name="book.url" message="Обязательно заполнить!">Ссылка на книгу</Input>
                </div>
                <div className="data-book-add-element">
                    <ImageUpload name="cover" >Изображение обложки</ImageUpload>
                    <ImageUpload name="book_image" >Изображение обложки</ImageUpload>
                    <ButtonBallCandy disabled={!isValid} className="add-book">Добавить книгу</ButtonBallCandy>
                </div>
            </div>
        </form>
        </>
    )
}
