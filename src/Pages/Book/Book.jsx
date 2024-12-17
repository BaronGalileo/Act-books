import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import "./styles.css"
import { useSelector } from "react-redux";
import { Cover } from "../../components/Cover/Cover";
import { BookPresentation } from "../../components/BookPresentation/BookPresentation"
import { Reviews } from "../../components/Reviews/Reviews";
import axios from 'axios';
import { TestSlider} from '../../components/Test/TestSlider'
import { AdminPanel } from "../../components/AdminPanel/AdminPanel";
import { Catalog } from "../../components/Catalog/Catalog";
import { TeamOfWizards } from "../../components/TeamOfWizards/TeamOfWizards";
import { Epilogue } from "../../components/Epilogue/Epilogue";



export const Book = () => {

    const isAuth = useSelector(state => state.auth)

    const [referrer, setReferrer] = useState('');

    const [ipAddress, setIpAddress] = useState('');

    const [startTime, setStartTime] = useState(Date.now());

    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const referrerUrl = document.referrer;
        const formattedDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
        setStartTime(Date.now());
        setReferrer(referrerUrl);
        axios.get("http://world.life.destiny.fvds.ru/backend/api/books")
            .then(res => {
            // Проверяем успешный ответ и выводим данные в консоль
            console.log("Books data:", res.data);
        })
        .catch(error => {
            // Обрабатываем ошибки, если запрос не удался
            console.error("Error fetching books:", error);
        });

        fetch('http://ip-api.com/json')
          .then(response => response.json())
          .then(data => {
            setIpAddress(data.query);
            console.log("ip", data.query, data)
          })
          .catch(error => {
            console.log('Error fetching IP address:', error);
          });
        const sendTimeToServer = (timeSpent) => {
            console.log("вышел", timeSpent)
        }


        const handleBeforeUnload = (event) => {
            const timeSpent = Date.now() - startTime; // Вычисляем прошедшее время
            sendTimeToServer(timeSpent); // Отправляем время на сервер
            console.log("event", event?.target.activeElement.href)
        }

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
          };
    }, []);

    const hideBlock = () => {
        const modal = document.querySelector('.modal-menu-book');
        const blurredBackground = document.querySelector('.blurred-background');
        modal.style.display = 'none';
        blurredBackground.style.display = 'none';
    }




    const show = () => {
        console.log("referrer",referrer )
        console.log("ipAddress",ipAddress )
    }

    return(
        <div className="book">
            <div className="modal-menu-book">
                <div className="navigation-links">
                    <div className="navigation-links-element">
                        <div className="stars-book-content"></div>
                        <a  className="book-content" href="#cover" onClick={hideBlock}>Самая удивительная книга с объемными картинками</a>
                        <div className="stars-book-content"></div>
                        <a className="book-content" href="#book-presentation" onClick={hideBlock}>Открой для себя мир волшебства</a>
                        <div className="stars-book-content"></div>
                        <a className="book-content" href="#video" onClick={hideBlock}>Видео</a>
                        <div className="stars-book-content"></div>
                    </div>
                    <div className="navigation-links-element">
                        <div className="stars-book-content"></div>
                        <a className="book-content" href="#reviews" onClick={hideBlock}>Магия страниц глазами мам</a>
                        <div className="stars-book-content"></div>
                        <a className="book-content" href="#catalog" onClick={hideBlock}>Каталог</a>
                        <div className="stars-book-content"></div>
                        <a className="book-content" href="#team-wizards" onClick={hideBlock}>Команда волшебников</a>
                        <div className="stars-book-content"></div>
                        <a className="book-content" href="#epilogue" onClick={hideBlock}>Подари книгу - подари волшебство</a>
                        <div className="stars-book-content"></div>
                    </div>
                </div>
            </div>
            <div class="blurred-background"></div>
            {isAuth.isAuth && 
            <div className="item item-admin" >
                <AdminPanel/>
            </div>}
            <div id="cover" className="item cover" >
                <Cover/>
            </div>
            <div id="book-presentation" className="item bookPresentation" >
               <BookPresentation/> 
            </div>
            <div id="video" className="item" >
                <TestSlider/>
                
            </div>
            <div id="reviews" className="item" >
                <Reviews/>
            </div>
            <div id="catalog" className="item-catalog" >
                <Catalog/>
            </div>
            <div id="team-wizards" className="item" >
                <TeamOfWizards/>
                
            </div>
            <div id="epilogue" className="item" >
                <Epilogue/>
            </div>
        </div>
    )
}