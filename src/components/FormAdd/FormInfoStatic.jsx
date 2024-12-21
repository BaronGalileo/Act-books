import React, { useEffect, useState } from "react";
import "./styles.css"
import { ButtonBallCandy } from "../Button/ButtonBallCandy";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Text } from "../Text/Text";
import { ModalWindows } from "../ModalWindows/ModalWindows";
import { BlokTablo } from "../BlokTablo/BlokTablo";


export const FormInfoStatic = () => {

    const isAuth = useSelector(state => state.auth)

    const test = useSelector(state => state.events)

    const dispatch = useDispatch()

    const path_count_Users = "http://world.life.destiny.fvds.ru/backend/api/analytics/unique-visitors"

    const path_referers_array = "http://world.life.destiny.fvds.ru/backend/api/analytics/traffic-sources"

    const path_time_on_site = "http://world.life.destiny.fvds.ru/backend/api/analytics/time-on-site"

    const path_link_star = "http://world.life.destiny.fvds.ru/backend/api/analytics/store-link-stats"

    const path_link_page = "http://world.life.destiny.fvds.ru/backend/api/analytics/popular-pages"

    const path_events = "http://world.life.destiny.fvds.ru/backend/api/analytics/interactive-elements"

    const [countUsers, setCountUsers] = useState(null)

    const [referersArray, setReferersArray] = useState(null)

    const [timeOnSite, setTimeOnSite] = useState(null)

    const [linkStar, setLinkStar] = useState(null)

    const [linkPage, setLinkPage] = useState(null)

    const [interactivElements, setInteractivElements] = useState(null)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(""); // Содержимое модалки
  

    useEffect(() => {
        //колличество пользователей
        axios.get(path_count_Users, isAuth.confermAut)
        .then(res => {
            setCountUsers(res.data?.count)
        })
        .catch(err=> {
            console.log("error count users", err)
        })
        //массив ссылок от куда пришли на промо-страницу
        axios.get(path_referers_array, isAuth.confermAut)
        .then(res => {
            console.log("referersArray", res.data)
            setReferersArray(res.data?.count)
        })
        .catch(err=> {
            console.log("referersArray", err)
        })
        //время проведенное на сайте
        axios.get(path_time_on_site, isAuth.confermAut)
        .then(res => {
            console.log("path_time_on_site", res.data)
            setTimeOnSite(res.data?.count)
        })
        .catch(err=> {
            console.log("path_time_on_site", err)
        })
        //ссылка на магазин
        axios.get(path_link_star, isAuth.confermAut)
        .then(res => {
            console.log("setLinkStar", res.data)
            setLinkStar(res.data)
        })
        .catch(err=> {
            console.log("error setLinkStar", err)
        })

        //ссылка на страницы
        axios.get(path_link_page, isAuth.confermAut)
        .then(res => {
            console.log("setLinkPage", res.data)
            setLinkPage(res.data)
        })
        .catch(err=> {
            console.log("error setLinkPage", err)
        })
         //интерактивные элементы
        axios.get(path_events, isAuth.confermAut)
        .then(res => {
            console.log("setInteractivElements", res.data)
            setInteractivElements(res.data)
        })
        .catch(err=> {
            console.log("error setInteractivElements", err)
        })


    }, [])

    const show = () => {
        // console.log("SHOW", isAuth)
        console.log("test", test)
        // dispatch(removeInteractiv())

    }

    const handleModalOpen = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
        setModalContent("");
      };

    const clicka = () => {
        console.log("КЛИКА")
    }



    return(
        <div className="statistica-wrapper">
            <div className="statistica-element">
            <BlokTablo title="Число пользователей промо-сайта" src="./images/iconsUsers.png" contex="4"/>
            </div>
            <div className="statistica-element" onClick={() => handleModalOpen(<BlokTablo title="Ссылки по которым к нам пришли" src="./images/iconsLink.png"/>)}>
            <BlokTablo title="Ссылки по которым к нам пришли" src="./images/iconsLink.png"/>
            </div>
            <div className="statistica-element">
                <BlokTablo title="Время проведенное на сайте" src="./images/iconsTime.png"/>
                <div className="statistica-element-row">
                    <div>
                        <Text>Обшее время</Text>
                        <Text className="inform-txt-statistica"></Text>
                        <div className="tablo-static">
                            <Text className="inform-txt-statistica">4</Text>
                        </div>
                    </div>
                    <div>
                        <Text>Среднее время</Text>
                        <Text className="inform-txt-statistica"></Text>
                        <div className="tablo-static">
                            <Text className="inform-txt-statistica">4</Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className="statistica-element">
                <BlokTablo title="Колличество переходов на основной магазин" src="./images/iconsStore.png" contex="100"/>
            </div>
            <div className="statistica-element" onClick={() => handleModalOpen(<BlokTablo title="Любимая книга (ссылка на заинтересовавшую книгу)" src="./images/iconsBook.png" contex="список ссылок"/>)}>
                <BlokTablo title="Любимая книга (ссылка на заинтересовавшую книгу)" src="./images/iconsBook.png"/>
            </div>
            <div className="statistica-element" onClick={() => handleModalOpen(
                <BlokTablo title="Интерактивность" src="./images/iconsMouse.png" contex="вид кликов и счетчик"/>
            )}>
                <BlokTablo title="Интерактивность" src="./images/iconsMouse.png"/>
                <Text as="h2">Интерактивность</Text>
                <Text>Выпадающий список</Text>
            </div>
      {isModalOpen && (
        <ModalWindows onClose={handleModalClose} content={modalContent} />
      )}

           {/* <ButtonBallCandy onClick={show} className="add-book">Посмотреть</ButtonBallCandy> */}
           {/* <ButtonBallCandy onClick={redux} className="add-book">redux</ButtonBallCandy> */}

           {/* <button onClick={() => dispatch(incrementButterfly())}>Клик по Butterfly</button>
      <button onClick={() => dispatch(incrementTree())}>Клик по Tree</button>
      <button onClick={() => dispatch(incrementCub())}>Клик по Cub</button>
      <button onClick={() => dispatch(incrementComment())}>Клик по Cub</button>
      <button onClick={() => dispatch(incrementCatalog())}>Клик по Cub</button>
      <button onClick={() => dispatch(incrementContent())}>Клик по Cub</button> */}
        </div>
    )
}

