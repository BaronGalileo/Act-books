import React, { useEffect, useState } from "react";
import "./styles.css"
import { ButtonBallCandy } from "../Button/ButtonBallCandy";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


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

    // const butterflyCount = useSelector((state) => state.events.butterflyCount);
    // const treeCount = useSelector((state) => state.events.treeCount);
    // const cubCount = useSelector((state) => state.events.cubCount);

    const show = () => {
        // console.log("SHOW", isAuth)
        console.log("test", test)
        // dispatch(removeInteractiv())

    }

    // const redux = () => {
    //     const x = 1
    //     dispatch(incrementButterfly({"butterfly":{"countEvent": x}}))
    // }



    return(
        <div className="contener-add-book">

    {/* <h1>Счётчики событий</h1>
      <p>Butterfly: {butterflyCount}</p>
      <p>Tree: {treeCount}</p>
      <p>Cub: {cubCount}</p> */}
           FormInfoStatic 
           <ButtonBallCandy onClick={show} className="add-book">Посмотреть</ButtonBallCandy>
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

