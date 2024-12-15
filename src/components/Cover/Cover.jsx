import React, { useEffect, useRef, useState } from "react";
import { Text } from "../Text/Text";
import { motion } from 'framer-motion';
import './styles.css';
import { BallonButton } from "../Button/BallonButton";
import {GifComponents} from "../GifComponent/GifComponents";
import { ButtonBallCandy } from "../Button/ButtonBallCandy";


export const Cover = () => {
    const [isVisible, setIsVisible] = useState(false); // Состояние для отслеживания видимости
    const ref = useRef(null); // Реф для привязки к элементу
  
    useEffect(() => {
      // Функция для обновления состояния видимости
      const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Если элемент видим, обновляем состояние
            setIsVisible(true);
          } else {
            // Если элемент не видим, обновляем состояние
            setIsVisible(false);
          }
        });
      };
  
      // Создаём новый IntersectionObserver
      const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Относительно всего окна
        rootMargin: '3px', // Устанавливаем маржин, чтобы немного раньше или позже замечать элемент
        threshold: 0.1, // 10% элемента должно быть видимо
      });
  
      // Наблюдаем за элементом
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      // Очистка при размонтировании компонента
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []); // Пустой массив зависимостей, чтобы observer был настроен только один раз



    return(
        <div className="cover-wrapper">
                <div 
                    className='butterfly'
                    ref={ref}
                >
                    <GifComponents clear stoped  fixed={isVisible} foto="../images/Бабочка-статик.png"  classWrapper="butterfly-cover" className="img butterfly-img"/>
                    <GifComponents clear stoped foto="../images/Бабочка-статик.png" static_element classWrapper="butterfly-cover-static" className="img butterfly-img"/>
                </div>
            <Text className="red-text bond cover-txt for-h1" >САМАЯ УДИВИТЕЛЬНАЯ КНИГА С ОБЪЕМНЫМИ КАРТИНКАМИ</Text>
            <ButtonBallCandy href="https://ast.ru/series/samaya-udivitelnaya-kniga-s-obemnymi-kartinkami-7e485f/?SORT=NEW_SORT&SORT_BY=DESC">Погрузись в чудо</ButtonBallCandy>
            <div className="conteiners-images">
                <div className="conteiner-image">
                <motion.div
                style={{
                position: 'absolute',  
                bottom: '-36%',            
                left: '-32%',
                zIndex: 0,          
                }}
                initial={{ x: '20%' }}            
                animate={{ x: '0%' }}         
                transition={{ duration: 2 }}
                >
                  <GifComponents gif="myGifTreeB" foto="../images/tree-b.png" clear stoped static_element classWrapper="tree-cover-static" className="tree-b-img"/>
                </motion.div>
                </div>
                <div className="conteiner-image">
                <motion.div
                style={{
                position: 'absolute', 
                bottom: '-51%',            
                left: '-2%',
                zIndex: 1,
                overflowY: 'visible',         
                }}
                initial={{ x: '20%' }}            
                animate={{ x: '0%' }}         
                transition={{ duration: 3 }}>
                    <GifComponents gif="myGifTreeFront"  foto="../images/tree-f.png" clear stoped static_element classWrapper="tree-cover-static" className="tree-f-img"/>
                    {/* <Img className="tree one" src="../images/дерево 1 л.png"/> */}
                </motion.div>
                {/* <Img  className="squirrel-img" src="../images/png-clipart.png"></Img> */}
                </div>
                <div className="conteiner-image">
                <div className="static-book-rabbit">
                  <GifComponents gif="myGifRabbitBook" foto="../images/книга+буратино+кролик.png" mirror clear  static_element classWrapper="rabbit-static" className="rabbit-book-img"/>
                </div>
                {/* <motion.div
                style={{
                position: 'absolute',  
                top: '-12%',                  
                left: '-1vw',                
                width: 'auto',               
                height: 'auto',              
                zIndex: 2,
                overflowY: 'visible',         
                }}
                initial={{ y: '100%',
                    opacity: 0, 
                    scale: 0 }}            
                animate={{ y: '0%',
                    opacity: 1, 
                    scale: 1,
                 }}         
                transition={{ duration: 3 }}>
                    <GifComponents gif="myGifRabbitBook"  clear  static_element classWrapper="tree-cover-static" className="rabbit-book-img"/>
                    <Img className="rabbit-book" src="../images/книга+буратино+кролик.png"/>
                </motion.div> */}
                </div>
                <div className="conteiner-image">
                <motion.div
                style={{
                position: 'absolute', 
                bottom: '-42%',            
                left: '27%',
                zIndex: 1,          
                }}
                initial={{ x: '-20%' }}            
                animate={{ x: '0%' }}         
                transition={{ duration: 2 }}>
                    <GifComponents gif="myGifTreeFront"  foto="../images/tree-f.png" clear mirror stoped static_element classWrapper="tree-cover-static" className="tree-f-img"/>
                </motion.div>
                </div>
                <div className="conteiner-image">
                  <div className="static-tree ">
                    <GifComponents gif="myGifTreeB" foto="../images/tree-b.png" clear mirror stoped static_element classWrapper="tree-cover-static right-tree-b" className="tree-b-img"/>
                  </div>
                {/* <motion.div
                style={{
                position: 'absolute',  
                bottom: '-13%',            
                right: '-106%',
                zIndex: 0,
                overflowX: 'hidden',           
                overflowY: 'visible',          
                }}
                initial={{ x: '0' }}            
                animate={{ x: '20%' }}         
                transition={{ duration: 3 }} 
                >
                  <GifComponents gif="myGifTreeB" foto="../images/tree-b.png" clear mirror stoped static_element classWrapper="tree-cover-static" className="tree-b-img"/>
                </motion.div> */}
                </div>

            </div>
    </div>

    )
}