import React, { useEffect, useRef, useState } from "react";
import { Text } from "../Text/Text";
import { motion } from 'framer-motion';
import './styles.css';
import {GifComponents} from "../GifComponent/GifComponents";
import { ButtonPerfectBall } from "../Button/ButtonPerfectBall";
import { incrementButterfly, incrementTree } from "../../store/interactivSlise";
import { useDispatch } from "react-redux";


export const Cover = () => {
    const [isVisible, setIsVisible] = useState(false); // Состояние для отслеживания видимости
    const ref = useRef(null); // Реф для привязки к элементу

    const dispatch = useDispatch()
  
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
    }, []); 



    return(
        <div className="cover-wrapper">
                <div 
                    className='butterfly'
                    ref={ref}
                >
                    <GifComponents functionInteractiv={incrementButterfly()} clear stoped  fixed={isVisible} foto="../images/Бабочка-статик.png"  classWrapper="butterfly-cover" className="img butterfly-img"/>
                    <GifComponents functionInteractiv={incrementButterfly()} clear stoped foto="../images/Бабочка-статик.png" static_element classWrapper="butterfly-cover-static" className="img butterfly-img-static"/>
                </div>
            <Text className="red-text bond cover-txt for-h1" >САМАЯ УДИВИТЕЛЬНАЯ КНИГА С ОБЪЁМНЫМИ КАРТИНКАМИ</Text>
            <ButtonPerfectBall className="cover-btn" href="https://ast.ru/series/samaya-udivitelnaya-kniga-s-obemnymi-kartinkami-7e485f/?SORT=NEW_SORT&SORT_BY=DESC">Погрузись в чудо</ButtonPerfectBall>
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
                  <GifComponents functionInteractiv={incrementTree()} gif="myGifTreeB"  foto="../images/tree-b.png" clear stoped static_element classWrapper="tree-cover-static left-tree-back" className="tree-b-img"/>
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
                    <GifComponents functionInteractiv={incrementTree()} gif="myGifTreeFront"  foto="../images/tree-f.png" clear stoped static_element classWrapper="tree-cover-static front-left-tree" className="tree-f-img"/>
                </motion.div>
                </div>
                <div className="conteiner-image">
                <div className="static-book-rabbit">
                  <GifComponents gif="myGifRabbitBook" foto="../images/книга+буратино+кролик.png" mirror clear  static_element classWrapper="rabbit-static" className="rabbit-book-img"/>
                </div>
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
                    <GifComponents functionInteractiv={incrementTree()} gif="myGifTreeFront"  foto="../images/tree-f.png" clear mirror stoped static_element classWrapper="tree-cover-static front-left-right" className="tree-f-img"/>
                </motion.div>
                </div>
                <div className="conteiner-image">
                  <div className="static-tree ">
                    <GifComponents functionInteractiv={incrementTree()}  gif="myGifTreeB" foto="../images/tree-b.png" clear mirror stoped static_element classWrapper="tree-cover-static right-tree-b" className="tree-b-img"/>
                  </div>
                </div>

            </div>
    </div>

    )
}