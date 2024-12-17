import React, { useState } from "react";
import './styles.css'
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth } from "../../store/authSlice";
import { Text } from "../Text/Text";
import { FormAdmin } from "../FormAdmin/FormAdmin";
import { ButtonBallCandy } from "../Button/ButtonBallCandy";
import { FormAddBook } from "../FormAdd/FormAddBook";
import { FormInfoStatic } from "../FormAdd/FormInfoStatic";
import { FormAddComment } from "../FormAdd/FormAddComment";


export const AdminPanel = () => {

    const isAuth = useSelector(state => state.auth)

    const [isInfo, setIsInfo] = useState(true)

    const [isBookAdd, setIsBookAdd] = useState(false)

    const [isCommit, setIsCommit] = useState(false)

    const dispatch = useDispatch();

    const del = () => {
        dispatch(removeAuth())

    }

    function change(e) {
        if(e.target.className === "button-ball add-book info-statistic"){
            setIsInfo(true)
            setIsBookAdd(false)
            setIsCommit(false)
        }
        else if(e.target.className === "button-ball add-book book-add-bnt"){
            setIsInfo(false)
            setIsBookAdd(true)
            setIsCommit(false)
        }
        else if(e.target.className === "button-ball add-book comments-add"){
            setIsInfo(false)
            setIsBookAdd(false)
            setIsCommit(true)
            // del()
        }
        const btns = document.querySelectorAll(".add-book");
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active-btn");
          }
        return e.currentTarget.classList.add("active-btn")
    }

    const show = () => {
        console.log("isAuth", isAuth)
    }

    return(
        <div className="admin-wrapper">
            <div className="admin-element">
                <ButtonBallCandy onClick={change} className="add-book info-statistic active-btn">Показать статистику</ButtonBallCandy>
                <ButtonBallCandy onClick={change} className="add-book book-add-bnt">Добавить книгу</ButtonBallCandy>
                <ButtonBallCandy onClick={change} className="add-book comments-add">Добавить комментарий</ButtonBallCandy>
                <ButtonBallCandy onClick={del} className="add-book delete-btn">Выйти из Админки</ButtonBallCandy>
            </div>
            <div className="admin-element">
                {isBookAdd&&
                <FormAddBook/>}
                {isInfo&&
                <FormInfoStatic/>}
                {isCommit&& 
                <FormAddComment/>}
            </div>
        </div>
    )
}

{/* <Button className="all-info"onClick={change} active>Общая информация</Button>
<Button className="TO" onClick={change}>{!isTargetMachine?"Техническое обслуживание всех машин": "ТО выбранной машины"}</Button>
<Button className="reclam" onClick={change} >{!isTargetMachine?"Рекламация всей техники": "Рекламация выбранной машины"}</Button> */}


// function change(e) {
//     if(e.target.className === "add-book info"){
//         console.log("add-book info")
//     }
//     else if(e.target.className === "add-book book"){
//         console.log("add-book book")

//     }
//     else if(e.target.className === "add-book ccomments"){
//         console.log("add-book ccomments")
//     }
//     const btns = document.querySelectorAll(".add-book");
//     for (let i = 0; i < btns.length; i++) {
//         btns[i].classList.remove("active");
//       }
//     return e.currentTarget.classList.add("active")
// }