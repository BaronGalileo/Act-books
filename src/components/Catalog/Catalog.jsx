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

  const dataBooksNotServer = [
    {
      "author":"Кэрролл Льюис",
      "title": "Алиса в Стране Чудес",
      "url": "https://ast.ru/book/alisa-v-strane-chudes-ill-m-mitrofanova-834090/",
      "images": "../images/Обложки/11.png"
    },
    {
      "author":"Волков Александр Мелентьевич",
      "title": "Волшебник Изумрудного города",
      "url": "https://ast.ru/book/volshebnik-izumrudnogo-goroda-risunki-v-chelaka-839979/",
      "images": "../images/Обложки/1.png"
    },
    {
      "author":"Грэм Кеннет",
      "title": "Ветер в ивах",
      "url": "https://ast.ru/book/veter-v-ivakh-ris-o-ionaytis-846821/",
      "images": "../images/Обложки/2.png"
    },
    {
      "author":"Андерсен Ганс Христиан, Гофман Эрнст Теодор Амадей,  Гримм Вильгельм, Гримм Якоб",
      "title": "Снежная королева. Щелкунчик. Госпожа Метелица",
      "url": "https://ast.ru/book/snezhnaya-koroleva-shchelkunchik-gospozha-metelitsa-853202/",
      "images": "../images/Обложки/3.png"
    },
    {
      "author":"Пикулева Нина Васильевна",
      "title": "Зимняя сказка",
      "url": "https://ast.ru/book/zimnyaya-skazka-867810/",
      "images": "../images/Обложки/4.png"
    },
    {
      "author":"Пушкин Александр Сергеевич",
      "title": "Сказка о царе Салтане",
      "url": "https://ast.ru/book/skazka-o-tsare-saltane-ris-v-chelaka-855360/",
      "images": "../images/Обложки/5.png"
    },    {
      "author":"Кэрролл Льюис",
      "title": "Алиса в Зазеркалье",
      "url": "https://ast.ru/book/alisa-v-zazerkale-ill-m-mitrofanova-851448/",
      "images": "../images/Обложки/6.png"
    },    {
      "author":"Маршак Самуил Яковлевич",
      "title": "Двенадцать месяцев",
      "url": "https://ast.ru/book/dvenadtsat-mesyatsev-slavyanskaya-skazka-ris-v-shvarova-i-e-almazovoy-853856/",
      "images": "../images/Обложки/7.png"
    },    {
      "author":"Толстой Алексей Николаевич",
      "title": "Приключения Буратино, или Золотой ключик",
      "url": "https://ast.ru/book/priklyucheniya-buratino-ili-zolotoy-klyuchik-risunki-l-vladimirskogo-844251/",
      "images": "../images/Обложки/8.png"
    },    {
      "author":"Маршак Самуил Яковлевич",
      "title": "Кошкин дом",
      "url": "https://ast.ru/book/koshkin-dom-illyustratsii-o-ionaytis-849304/",
      "images": "../images/Обложки/9.png"
    },    {
      "author":"Сутеев Владимир Григорьевич",
      "title": "Сказки",
      "url": "https://ast.ru/book/skazki-859286/",
      "images": "../images/Обложки/12.png"
    },    {
      "author":"Поттер Беатрис",
      "title": "Всё о кролике Питере",
      "url": "https://ast.ru/book/vsye-o-krolike-pitere-851481/",
      "images": "../images/Обложки/10.png"
    },
  ]

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
                // Возвращаем пустую строку, если изображения нет
                {!isBooks&&dataBooksNotServer.map((item, index) => (
                  <CardsBook key={item} title={item.title} link={item.url} src={item.images} contex={item.author}/>
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