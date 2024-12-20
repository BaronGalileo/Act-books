import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import "./styles.css"
import { useDispatch, useSelector } from "react-redux";
import { Cover } from "../../components/Cover/Cover";
import { BookPresentation } from "../../components/BookPresentation/BookPresentation"
import { Reviews } from "../../components/Reviews/Reviews";
import axios from 'axios';
import { TestSlider} from '../../components/Test/TestSlider'
import { AdminPanel } from "../../components/AdminPanel/AdminPanel";
import { Catalog } from "../../components/Catalog/Catalog";
import { TeamOfWizards } from "../../components/TeamOfWizards/TeamOfWizards";
import { Epilogue } from "../../components/Epilogue/Epilogue";
import ImageComponent from "../../components/Test/ImageData";
import { Img } from "../../components/Img/Img";
import { de } from "date-fns/locale";
import { setBooks } from "../../store/booksSlice";



export const Book = () => {

    const isAuth = useSelector(state => state.auth)

    const books = useSelector(state => state.book)

    const dispatch = useDispatch();

    const [referrer, setReferrer] = useState('');

    const [ipAddress, setIpAddress] = useState('');

    const [startTime, setStartTime] = useState(Date.now());

    const [elapsedTime, setElapsedTime] = useState(0);

    const [imageData, setImageData] = useState(null)

    const [consent, setConsent] = useState(null); //согласие на сбор данных


    useEffect(() => {
        const isConsentGiven = window.confirm("Вы согласны на сбор данных?");
        if (isConsentGiven&&!isAuth.isAuth) {
            setConsent(true); 
        } else {
            setConsent(false); 
        }
        const path = "http://world.life.destiny.fvds.ru/backend/api/books"
        axios.get(path)
        .then(res => {
            dispatch(setBooks(res.data))
            })
            .catch(error => {
                console.log("Error fetching books:", error);
            });
        axios.get(path)
        .then(res => {
            const testImage = res.data[0].images[0].imageData
            setImageData(testImage)



        })
        .catch(error => {
            console.log("Error fetching books:", error);
        });

        const sendTimeToServer = (timeSpent) => {
            console.log("вышел", timeSpent)
        }


        const handleBeforeUnload = (event) => {
            const timeSpent = Date.now() - startTime; // Вычисляем прошедшее время
            sendTimeToServer(timeSpent); // Отправляем время на сервер
        }

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
          };
    }, []);

    useEffect(() => {
        if(consent) {
            const referrerUrl = document.referrer;
            const formattedDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
            setStartTime(Date.now());
            setReferrer(referrerUrl);

            fetch('http://ip-api.com/json')
                .then(response => response.json())
                .then(data => {
                setIpAddress(data.query);
                console.log("ip", data.query, data)
            })
            .catch(error => {
                console.log('Error fetching IP address:', error);
          });
        }

    }, [consent])

    const hideBlock = () => {
        const modal = document.querySelector('.modal-menu-book');
        const blurredBackground = document.querySelector('.blurred-background');
        modal.style.display = 'none';
        blurredBackground.style.display = 'none';
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
            {/* <div id="video" className="item" >
                <TestSlider/>
                
            </div> */}
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