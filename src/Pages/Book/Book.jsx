import React, { useEffect, useRef, useState } from "react";
import "./styles.css"
import { useDispatch, useSelector } from "react-redux";
import { Cover } from "../../components/Cover/Cover";
import { BookPresentation } from "../../components/BookPresentation/BookPresentation"
import { Reviews } from "../../components/Reviews/Reviews";
import axios from 'axios';
import { AdminPanel } from "../../components/AdminPanel/AdminPanel";
import { Catalog } from "../../components/Catalog/Catalog";
import { TeamOfWizards } from "../../components/TeamOfWizards/TeamOfWizards";
import { Epilogue } from "../../components/Epilogue/Epilogue";
import { setBooks } from "../../store/booksSlice";
import { VideoComponent } from "../../components/VideoComponent/VideoComponent";
import { removeInteractiv, setReferer, setUserIp } from "../../store/interactivSlise";



export const Book = () => {

    const isAuth = useSelector(state => state.auth)

    const interactivStatistica = useSelector(state => state.events)

    const books = useSelector(state => state.book)

    const dispatch = useDispatch();

    const pathActiviti = 'http://world.life.destiny.fvds.ru/backend/api/activity'

    const interactivRef = useRef(interactivStatistica);
    interactivRef.current = interactivStatistica;  // Обновляем реф на новое состояние




    useEffect(() => {
        const isConsentGiven = window.confirm("Вы согласны на сбор данных?");
        if (isConsentGiven&&!isAuth.isAuth) {
            const referrerUrl = document.referrer;
            const formattedDate = new Date().toISOString();

            fetch('http://ip-api.com/json')
                .then(response => response.json())
                .then(data => {
                    dispatch(setUserIp(data.query))
                    dispatch(setReferer(referrerUrl))
                    const dataForService = [
                        {
                          userIp: `${data.query}`,
                          eventType: "ENTER",
                          referer: `${referrerUrl}`,
                          timestamp: `${formattedDate}`,
                          countEvent: 1,
                        },
                      ];
                    axios.post(pathActiviti, dataForService, isAuth.confermAut )
                    .then(res => {
                        console.log("statistica", res.data)
                    })
                    .catch(err => {
                        console.log("ERRROR",dataForService, err)
                    })
            })
            .catch(error => {
                console.log('Error fetching IP address:', error);
          }); 
        }

        // const path = "http://world.life.destiny.fvds.ru/backend/api/books"
        // axios.get(path)
        // .then(res => {
        //     dispatch(setBooks(res.data))
        //     })
        //     .catch(error => {
        //         console.log("Error fetching books:", error);
        //     });


        const handleBeforeUnload = (event) => {
            const currentStatistica = interactivRef.current;
            const pageUrl = event.target.activeElement.href
            const pageUrlIsShop = pageUrl === "https://www.chitai-gorod.ru/publisher/ast-118732?page=1&filters%5Bcategories%5D=110090"
            if(isConsentGiven&&!isAuth.isAuth) {
                const formattedDate = new Date().toISOString();

                const dataInteractiv = [
                    {
                        "userIp": `${interactivStatistica.userIp}`,
                        "eventType": "BUTTER_FLY_COUNT",
                        "timestamp": `${formattedDate}`,
                        "countEvent": `${currentStatistica.butterflyCount}`
                    },
                    {
                        "userIp": `${interactivStatistica.userIp}`,
                        "eventType": "TREE_COUNT",
                        "timestamp": `${formattedDate}`,
                        "countEvent": `${currentStatistica.treeCount}`
                    },
                    {
                        "userIp": `${interactivStatistica.userIp}`,
                        "eventType": "CUB_COUNT",
                        "timestamp": `${formattedDate}`,
                        "countEvent": `${currentStatistica.cubCount}`
                    },
                    {
                        "userIp": `${currentStatistica.userIp}`,
                        "eventType": "COMMENT_COUNT",
                        "eventDetails": "commentCount",
                        "timestamp": `${formattedDate}`,
                        "countEvent": `${currentStatistica.commentCount}`
                    },
                    {
                        "userIp": `${currentStatistica.userIp}`,
                        "eventType": "CATALOG_COUNT",
                        "eventDetails": "catalogCount",
                        "timestamp": `${formattedDate}`,
                        "countEvent": `${currentStatistica.catalogCount}`
                    },
                    {
                        "userIp": `${currentStatistica.userIp}`,
                        "eventType": "CONTENT_COUNT",
                        "eventDetails": "contentCount",
                        "timestamp": `${formattedDate}`,
                        "countEvent": `${currentStatistica.contentCount}`
                    },
                    {
                        "userIp": `${currentStatistica.userIp}`,
                        "eventType": "EXIT",
                        "pageUrl": `${pageUrl}`,
                        "timestamp": `${formattedDate}`,
                        "countEvent": 1
                    }
                ]               
                
                if (pageUrl) {
                    dataInteractiv.push({
                        "userIp": `${currentStatistica.userIp}`,
                        "eventType": `${pageUrlIsShop ? "MAIN_SHOP" : "VIEW"}`,
                        "pageUrl": `${pageUrl}`,
                        "timestamp": `${formattedDate}`,
                        "countEvent": 1
                    });
                }

                dispatch(removeInteractiv())
                const blob = new Blob([JSON.stringify(dataInteractiv)], { type: 'application/json' });
                if (navigator.sendBeacon) {
                    navigator.sendBeacon(pathActiviti, blob);
                  } else {
                    axios.post(pathActiviti, dataInteractiv)
                      .then(res => {
                        console.log(res.data);
                      })
                      .catch(err => {
                        console.log("ERR", err);
                      });
                  }
                };
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
            {!isAuth.isAuth && 
            <div className="item item-admin" >
                <AdminPanel/>
            </div>}
            <div id="cover" className="item cover" >
                <Cover/>
            </div>
            <div id="book-presentation" className="item bookPresentation" >
               <BookPresentation/> 
            </div>
            <div id="video" className="item video-item" >
                <VideoComponent/>                
            </div>
            <div id="reviews" className="item reviews-item" >
                <Reviews/>
            </div>
            <div id="catalog" className="item-catalog" >
                <Catalog/>
            </div>
            <div id="team-wizards" className="item" >
                <TeamOfWizards/>
                
            </div>
            <div id="epilogue" className="item epilogue-item" >
                <Epilogue/>
            </div>
        </div>
    )
}