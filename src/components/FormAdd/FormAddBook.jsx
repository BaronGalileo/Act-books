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

    const isAuth = useSelector(state => state.auth)

    const path_book = "http://world.life.destiny.fvds.ru/backend/api/books"

    const path_images = "http://world.life.destiny.fvds.ru/backend/api/images"

    const { handleSubmit, reset, formState: { isValid } } = useFormContext();

    const [fileData, setFileData] = useState(null)

    useEffect(() => {

        if(fileData) {
            axios.post(path_images, fileData,  {
                headers: {
                    'Authorization': `Bearer ${isAuth.auth_token}`,
                    'Content-Type': 'multipart/form-data', 
                }
                
            })
            .then(res => {
                reset()
            })
            .catch(error => {
                console.log("eRRORRR", error)
                reset()
            })
        }

    }, [fileData])


    const dispatch = useDispatch();
   

    const onSubmit = (dataForm) => {
        const dataBook = {
            "author": dataForm.author,
            "description": dataForm.description,
            "url": dataForm.url,
            "title": dataForm.title
        }
        axios.post(path_book, dataBook, isAuth.confermAut)
        .then(res=>{
            const dataImage = {
                "file": dataForm.file[0],
                "bookId": res.data.id,
                "fileName": dataForm.fileName,
                "imageType": dataForm.imageType
            }
            setFileData(dataImage)
        })
        .catch(err => {
            reset()

        })        
    }

    

    return (
        <>

        <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="contener-add-book">
                <div className="data-book-add-element">
                    <Input name="title" message="Обязательно заполнить!">Название книги</Input>
                    <Input name="author" message="Обязательно заполнить!">Автор книги</Input>
                    <Input name="description" message="Обязательно заполнить!">Описание книги</Input>
                    <Input name="url" message="Обязательно заполнить!">Ссылка на книгу</Input>
                </div>
                <div className="data-book-add-element">
                    <ImageUpload name="file" message="Обязательно заполнить" nameFile="Тест" imageType="COVER">Изображение обложки</ImageUpload>
                    <ButtonBallCandy disabled={!isValid} className="add-book">Добавить книгу</ButtonBallCandy>
                </div>
            </div>
        </form>
        </>
    )
}
