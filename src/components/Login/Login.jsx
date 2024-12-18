import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth, setAuth } from "../../store/authSlice"
import { Input } from "../Input/Input";
import {  useFormContext } from "react-hook-form";
import './styles.css'
import axios from "axios";
import { ButtonBallCandy } from "../Button/ButtonBallCandy";





function Login() {

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

    const {
        handleSubmit,
        reset,
        formState: {isValid}
    } = useFormContext()
  

    const dispatch = useDispatch();
   


    const onSubmit = (data) => {
        console.log("data", data)

        // dispatch(setAuth(data))

        const path = "http://world.life.destiny.fvds.ru/backend/api/auth/login"
        axios.post(path, data).then(res=>{
            console.log("res.data", res.data)
            if(res.data.token){
                const accountAdd = {
                    username: data.username,
                    auth_token: res.data.token,
                    confermAut : {headers: {"Authorization" : `Bearer ${res.data.token}`}},
                    }
                    reset()
                    return dispatch(setAuth(accountAdd))
                    
            }
        })
        .catch(err => {
            if(err.request.status === 401){
                dispatch(removeAuth())
                alert("Вы ошиблись! Проверьте Логин и Пароль");
                reset()
            }
            else if(err.request.status >= 500) {
                dispatch(removeAuth())
                alert("Извените, проблема с сервером, попробуйте зайти позже!");
                reset()
            }
            else {
                dispatch(removeAuth())
                console.log("errrr", err)
            }
        })

        
        // console.log("data",data)
        // const accountAdd = {
        //     username: data.username,
        //     }
        //     return dispatch(setAuth(accountAdd))


        // axios.post(path, data)
        // .then(res => {
        //     const account = {
        //         username: data.username,
        //         auth_token: res.data.auth_token,
        //         confermAut : {headers: {"Authorization" : `Token ${res.data.auth_token}`}},               
        //         ...res.data}
        //     dispatch(setAuth(account))
        //     reset()
        
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

        // })
    }


    if(isAuth.isAuth) return <Navigate to="/"/>
    

    return (
        <>
        <div className="conteyner_form">
            <div className="form-login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="username" message="Обязательно заполнить!">Логин:</Input>
                <Input name="password" type="password" message="Обязательно заполнить!">Пароль:</Input>
                <ButtonBallCandy disabled={!isValid} className="add-book">Войти</ButtonBallCandy>
            </form>
            </div>
        </div>
        </>
    )
}
export {Login}