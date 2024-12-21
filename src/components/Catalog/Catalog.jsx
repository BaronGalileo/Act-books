import React, { useEffect, useRef, useState } from "react";
import './styles.css'
import { Text } from '../Text/Text'
import { CardsBook } from '../CardsBook/CardsBook'
import { Img } from "../Img/Img";
import { useDispatch } from "react-redux";
import { incrementCatalog } from "../../store/interactivSlise";


export const Catalog = () => {

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); 
  let visibleHeight = document.documentElement.clientHeight >=800
  const [mobileHeight, setMobileHeight] = useState(700)

  const [contentHeight, setContentHeight] = useState(visibleHeight? 700 : 450); 

  const dispatch = useDispatch()

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); 
    }
    if(!visibleHeight) {
      setMobileHeight(450)
    }
  }, []); 

  useEffect(() => {

  }, [isOpen])

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
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/>
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
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/>
            </div>
            <button id="toggleButton" className='btn-catalog-more'
                onClick={toggleContent}
            >
                {isOpen ? <Img  className="btn-catalog-more pull" src='../images/not-select-grin.png'/> : <Img className="btn-catalog-more add" src='../images/select-grin.png'/>}
            </button>
            
        </div>
    )
}