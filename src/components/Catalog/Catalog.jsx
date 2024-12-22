import React, { useEffect, useRef, useState } from "react";
import './styles.css'
import { Text } from '../Text/Text'
import { CardsBook } from '../CardsBook/CardsBook'
import { Img } from "../Img/Img";
import { useDispatch } from "react-redux";
import { incrementCatalog } from "../../store/interactivSlise";
import axios from "axios";


export const Catalog = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [books, setBooks] = useState([null])
  const contentRef = useRef(null); 
  let visibleHeight = document.documentElement.clientHeight >=800
  const [mobileHeight, setMobileHeight] = useState(700)

  const [contentHeight, setContentHeight] = useState(visibleHeight? 700 : 450); 

  const path = "http://world.life.destiny.fvds.ru/backend/api/books"

  const dispatch = useDispatch()

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); 
    }
    if(!visibleHeight) {
      setMobileHeight(450)
    }
    axios.get(path)
    .then(res => {
        setBooks(res.data)
        dispatch(setBooks(res.data))
        })
        .catch(error => {
            console.log("Error fetching books:", error);
        });
  }, []); 

  useEffect(() => {

  }, [isOpen])

  // Функция для получения URL для изображения из массива файлов
  const getImageUrl = (imageFiles) => {
    if (imageFiles && imageFiles.length > 0 && imageFiles[0] instanceof File) {
      return URL.createObjectURL(imageFiles[0]);  // Создаем URL для первого файла
    }
    return '';  // Если нет файлов или файловый объект не найден
  };

  const toggleContent = () => {
    dispatch(incrementCatalog())

    const show = document.querySelector(".item-catalog");
    if(!isOpen) {
        show.style.height=`${contentHeight + 300}px`
    }
    else show.style.height=`${90}vh`
    setIsOpen(!isOpen);
  };

    return(
        <div className="catalog-wrapper">
            <Text className="red-text bond for-h1 front-txt">КАТАЛОГ</Text>
            <div className="girlyandoch-ka"></div>
            <div className="catalog-element" ref={contentRef}
            style={{
                height: isOpen ? `${contentHeight}px` : `${mobileHeight}px`,
                overflow: "hidden",
                transition: "height 0.2s ease",
              }}>
                {/* {books&&books.map((item, index) => (
                  <CardsBook link={item.url} src={item.books.images[0]} title={item.title} contex={item.author}/>
                ))}                */}
                {/* <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/12 месяцев.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Волшебник изум.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Все о кролике.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/> */}
            </div>
            <button id="toggleButton" className='btn-catalog-more'
                onClick={toggleContent}
            >
                {isOpen ? <Img  className="btn-catalog-more pull" src='../images/not-select-grin.png'/> : <Img className="btn-catalog-more add" src='../images/select-grin.png'/>}
            </button>
            
        </div>
    )
}