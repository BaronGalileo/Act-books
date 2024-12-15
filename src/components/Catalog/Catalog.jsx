import React, { useEffect, useRef, useState } from "react";
import './styles.css'
import { Text } from '../Text/Text'
import { CardsBook } from '../CardsBook/CardsBook'
import { Img } from "../Img/Img";


export const Catalog = () => {

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); 
  const [contentHeight, setContentHeight] = useState(700); 

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); 
    }
  }, []); 

  const toggleContent = () => {
    const show = document.querySelector(".item-catalog");
    if(!isOpen) {
        show.style.height=`${contentHeight + 300}px`
    }
    else show.style.height=`${90}vh`
    setIsOpen(!isOpen);
  };

    return(
        <div className="catalog-wrapper">
            <Text className="red-text bond for-h1">Каталог</Text>
            <div className="catalog-element" ref={contentRef}
            style={{
                height: isOpen ? `${contentHeight}px` : "700px",
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
                {isOpen ? <Img src='../images/not-select-grin.png'/> : <Img src='../images/select-grin.png'/>}
            </button>
            
        </div>
    )
}