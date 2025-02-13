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

    const books = useSelector(state => state.book.books)

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
            setReferersArray(res.data)
        })
        .catch(err=> {
            console.log("referersArray", err)
        })
        //время проведенное на сайте
        axios.get(path_time_on_site, isAuth.confermAut)
        .then(res => {
            setTimeOnSite(res.data)
        })
        .catch(err=> {
            console.log("path_time_on_site", err)
        })
        //ссылка на магазин
        axios.get(path_link_star, isAuth.confermAut)
        .then(res => {
            setLinkStar(res.data)
        })
        .catch(err=> {
            console.log("error setLinkStar", err)
        })

        //ссылка на страницы
        axios.get(path_link_page, isAuth.confermAut)
        .then(res => {
            setLinkPage(res.data)
        })
        .catch(err=> {
            console.log("error setLinkPage", err)
        })
         //интерактивные элементы
        axios.get(path_events, isAuth.confermAut)
        .then(res => {
            setInteractivElements(res.data)
        })
        .catch(err=> {
            console.log("error setInteractivElements", err)
        })


    }, [])

    const convertTime = (milliseconds) => {
        const totalSeconds = milliseconds / 1000;  // Переводим миллисекунды в секунды
        const hours = Math.floor(totalSeconds / 3600);  // Получаем количество полных часов
        const minutes = Math.floor((totalSeconds % 3600) / 60);  // Получаем количество полных минут
        const seconds = Math.floor(totalSeconds % 60);  // Получаем оставшиеся секунды
    
        // Возвращаем результат в формате "часы:минуты:секунды"
        return `${hours}h ${minutes}m ${seconds}s`;
    }


    const handleModalOpen = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
        setModalContent("");
      };


    const dict_books_links = {
        'https://ast.ru/series/samaya-udivitelnaya-kniga-s-obemnymi-kartinkami-7e485f/?SORT=NEW_SORT&SORT_BY=DESC':"Главная страница серии книг АСТ",
        'https://ast.ru/book/alisa-v-strane-chudes-ill-m-mitrofanova-834090/': "Алиса в Стране Чудес ",
        'https://ast.ru/book/volshebnik-izumrudnogo-goroda-risunki-v-chelaka-839979/': "Волшебник Изумрудного города",
        'https://ast.ru/book/veter-v-ivakh-ris-o-ionaytis-846821/': "Ветер в ивах",
        'https://ast.ru/book/snezhnaya-koroleva-shchelkunchik-gospozha-metelitsa-853202/': "Снежная королева. Щелкунчик. Госпожа Метелица",
        'https://ast.ru/book/zimnyaya-skazka-867810/': "Зимняя сказка",
        'https://ast.ru/book/skazka-o-tsare-saltane-ris-v-chelaka-855360/': "Сказка о царе Салтане",
        'https://ast.ru/book/alisa-v-zazerkale-ill-m-mitrofanova-851448/': "Алиса в Зазеркалье",
        'https://ast.ru/book/dvenadtsat-mesyatsev-slavyanskaya-skazka-ris-v-shvarova-i-e-almazovoy-853856/': "Двенадцать месяцев",
        'https://ast.ru/book/priklyucheniya-buratino-ili-zolotoy-klyuchik-risunki-l-vladimirskogo-844251/': "Приключения Буратино, или Золотой ключик",
        'https://ast.ru/book/koshkin-dom-illyustratsii-o-ionaytis-849304/': "Кошкин дом",
        'https://ast.ru/book/vsye-o-krolike-pitere-851481/': "Всё о кролике Питере",
        'https://ast.ru/book/skazki-859286/': "Сказки",
        'https://t.me/izdatelstvoast': "Telegram",
        'https://www.youtube.com/user/AstIzdatelstvo': "youtube",
        'https://vk.com/izdatelstvoast': "VK",
        'https://dzen.ru/izdatelstvoast?utm_referrer=ast.ru': "dzen",
        'https://ok.ru/izdatelstvoast': "Одноклассники",
        'https://tenchat.ru/izdatelstvoast': "TenChat"

    }

    const dict_activiti = {
        'CATALOG_COUNT': "Нажатие на меню",
        'COMMENT_COUNT': "Просмотр комментариев",
        'TREE_COUNT': "Взаимодействие с деревьями",
        'BUTTER_FLY_COUNT': "Взаимодействие с бабочками",
        'CUB_COUNT': "Взаимодействие с кубом"
    }



    return(
        <div className="statistica-wrapper">
            <div className="statistica-element">
            <BlokTablo title="Число пользователей промо-сайта" src="./images/iconsUsers.png" contex={countUsers}/>
            </div>
            <div className="statistica-element" onClick={() => handleModalOpen(referersArray ? <>
                <BlokTablo classNameWrapper="blok-raw" title="Ссылки, по которым к нам пришли" header  contex="Количество" src="./images/iconsLink.png"/> 
                {referersArray.map((item, index) => (
                    <BlokTablo key={index} classNameWrapper="blok-raw" title={item.source ? item.source: "Источник трафика не определен"} contex={item.visit}/>
                    ))}
                </>
            : "Извините, Проблема с сервером")}>
            <BlokTablo title="Ссылки, по которым к нам пришли" src="./images/iconsLink.png"/>
            </div>
            <div className="statistica-element">
                <BlokTablo title="Время, проведенное на сайте" src="./images/iconsTime.png"/>

                <div className="statistica-element-row">
                    {timeOnSite?.timeOnSite&&
                    <BlokTablo  classNameWrapper="blok-raw" title="Общее" contex={convertTime(timeOnSite?.timeOnSite)}/>}
                    {timeOnSite?.avgTimeOnSite&&
                    <BlokTablo  classNameWrapper="blok-raw" title="Среднее" contex={convertTime(timeOnSite?.avgTimeOnSite)}/>}
                </div>
            </div>
            <div className="statistica-element">
                <BlokTablo title="Количество переходов на основной магазин" src="./images/iconsStore.png"/>
                {linkStar&&
                <BlokTablo  classNameWrapper="blok-raw" title={<a className="txt admin-txt-h2" href={linkStar[0]?.linkId}>Основной магазин</a>} contex={linkStar[0]?.clicks}/>}
            </div>
            <div className="statistica-element" onClick={() => handleModalOpen(linkPage ? <>
                <BlokTablo classNameWrapper="blok-raw" title="Популярные страницы" header  contex="Количество переходов" src="./images/iconsPages.png"/> 
                {linkPage.map((item, index) => (
                        <BlokTablo key={index} classNameWrapper="blok-raw" title={<a className="txt admin-txt-h2" href={item.pageUrl}>{dict_books_links[item.pageUrl]}</a>} contex={item.views}/>
                    ))}
                </> : "Извините, Проблема с сервером")}>

                <BlokTablo title="Популярные страницы" src="./images/iconsPages.png"/>
            </div>
            <div className="statistica-element" onClick={() => handleModalOpen(interactivElements ? <>
                <BlokTablo classNameWrapper="blok-raw" title="Взаимодействие с элементом" header  contex="Количество нажатий" src="./images/iconsMouse.png"/> 
                {interactivElements.map((item, index) => (
                    <BlokTablo key={index} classNameWrapper="blok-raw" title={dict_activiti[item.typeElement]} contex={item.interactions}/>
                    ))}
                </> : "Извините, Проблема с сервером")}>
                <BlokTablo title="Интерактивность" src="./images/iconsMouse.png"/>
            </div>
      {isModalOpen && (
        <ModalWindows onClose={handleModalClose} content={modalContent} />
      )}

        </div>
    )
}

