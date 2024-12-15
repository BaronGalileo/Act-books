import React, { useEffect, useRef, useState } from 'react';
import myGifButterfly from '../../images/Бабочка02.gif';
import myGifStars from '../../images/stars.gif';
import myGifTreeB from '../../images/tree-b.gif'
import myGifTreeFront from '../../images/tree-f.gif'
import myGifRabbitBook from '../../images/rabbit-book.gif'
import myGifBoy from '../../images/boy.gif'
import classNames from 'classnames';
import './styles.css'



export const GifComponents = ({classWrapper="", static_element=false, mirror=false, stoped=false, fixed=false, foto=false, gif="myGifButterfly", className="", clear=false}) => {

  const dict_gif = {
    "myGifButterfly": myGifButterfly,
    "myGifStars": myGifStars,
    "myGifTreeB": myGifTreeB,
    "myGifTreeFront": myGifTreeFront,
    "myGifRabbitBook": myGifRabbitBook,
    "myGifBoy": myGifBoy,
  }
  

  const blockRef = useRef(null);

  const [position, setPosition] = useState(null);

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth
  })

  const [isCartoon, setIsCartoon] = useState(false) // проверяем есть ли анимация у classesWrapper

  const [gifSrc, setGifSrc] = useState(foto)

  const [isMoving, setIsMoving] = useState(false);

  const [isTurn, setIsTurn] = useState(mirror)

  const getPosition = () => {
    if (blockRef.current&&!static_element) {
      const rect = blockRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    } else if (static_element) {
      setPosition(null)
    }
  };

  useEffect(() => {
    // Получаем позицию при монтировании компонента
    if(!stoped) {
      handleMouseEnter()

    }
    getPosition();
  
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });

    };

    window.removeEventListener('resize', handleResize);
    
    // Отслеживаем изменение размера окна
    window.addEventListener('resize', getPosition);
    return () => {
      window.removeEventListener('resize', getPosition);
      window.addEventListener('resize', handleResize);
    };
  }, []);

  const classesWrapper = classNames(
          !clear ? "container-gif" : null,
          classWrapper,
      )

  const classesImg = classNames(
    isTurn ? 'mirror' : null, 
    className,
    )

  // Функция для запуска анимации (перезагружаем GIF)
  const handleMouseEnter = () => {
    setIsMoving(true)
    setGifSrc(dict_gif[gif])
  };

  const handleAnimationEnd = () => {
    stoped=true
    setTimeout(() => {
      getPosition()
      foto ? setGifSrc(foto) : setGifSrc(dict_gif[gif]); 
      setIsMoving(false);
      setIsTurn(res=>!res)
      
    }, 1000);

  };
  // проверяем есть ли анимация у classesWrapper
  const handleAnimationStart = () => {
    setIsCartoon(true)
    stoped=false
  }

  // Функция для остановки анимации (заменяем на статичную картинку)
  const handleMouseLeave = () => {
    if(!isMoving&&foto) {
      setGifSrc(foto);
    }
    else if(!isCartoon&&foto){
      setTimeout(() => {
        setGifSrc(foto);
      }, 2000)

    }
  };


  return (
    <div  
      ref={blockRef} 
      className={`${classesWrapper} ${isMoving&&!isTurn ? 'move' : ''} ${isMoving&&isTurn ? 'back' : ''}`}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      style ={
        position&&fixed ? { top: `${position.top}px`, left: `${position.left}px`, position: 'fixed' } : {position:"relative"}}
    >
      <img
        src={gifSrc}
        alt="Animated GIF"
        className={classesImg}

        onMouseEnter={stoped ? handleMouseEnter : null}
        onMouseLeave={stoped ? handleMouseLeave : null}
      />
    </div>
  );
};
