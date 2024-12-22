import React, { useEffect, useRef, useState } from "react";
import './styles.css'
import { Text } from '../Text/Text'
import { CardsBook } from '../CardsBook/CardsBook'
import { Img } from "../Img/Img";
import { useDispatch } from "react-redux";
import { incrementCatalog } from "../../store/interactivSlise";
import axios from "axios";
import { setBooks } from "../../store/booksSlice";


export const Catalog = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isBooks, setIsBooks] = useState(null)
  const contentRef = useRef(null); 
  let visibleHeight = document.documentElement.clientHeight >=800
  const [mobileHeight, setMobileHeight] = useState(700)

  const [contentHeight, setContentHeight] = useState(visibleHeight? 700 : 450); 

  const path = "http://world.life.destiny.fvds.ru/backend/api/books"

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(path)
    .then(res => {
        setIsBooks(res.data)
        dispatch(setBooks(res.data))
        })
        .catch(error => {
            console.log("Error fetching books:", error);
        });
  }, []);
  
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); 
    }
    if(!visibleHeight) {
      setMobileHeight(450)
    }

  }, [isBooks])

  useEffect(() => {

  }, [isOpen])

  // Функция для получения URL для изображения из массива файлов
  const getImageUrl = (imageFiles) => {
    if (imageFiles && imageFiles.length > 0 && imageFiles[0] instanceof File) {
      return URL.createObjectURL(imageFiles[0]);  // Создаем URL для первого файла
    }
    return '';  // Если нет файлов или файловый объект не найден
  };

  const getImageFromBase64 = (imageData) => {
    if (imageData) {
      return `data:image/png;base64,${imageData}`; // Создаем ссылку для изображения
    }
    return ''; // Возвращаем пустую строку, если изображения нет
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
                {isBooks&&isBooks.map((item, index) => (
                  <CardsBook key={item} title={item.title} link={item.url} src={getImageFromBase64(item.images[0]?.imageData)} contex={item.author}/>
                ))}               
            </div>
            <button id="toggleButton" className='btn-catalog-more'
                onClick={toggleContent}
            >
                {isOpen ? <Img  className="btn-catalog-more pull" src='../images/not-select-grin.png'/> : <Img className="btn-catalog-more add" src='../images/select-grin.png'/>}
            </button>
            
        </div>
    )
}