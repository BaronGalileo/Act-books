import React, { useEffect, useRef, useState } from 'react';
import myGifButterfly from '../../images/Бабочка02.gif';
import myGifStars from '../../images/stars.gif';
import myGifTreeB from '../../images/tree-b.gif'
import myGifTreeFront from '../../images/tree-f.gif'
import myGifRabbitBook from '../../images/rabbit-book.gif'
import myGifBoy from '../../images/boy.gif'
import myGifStar from '../../images/gif_star.gif'
import classNames from 'classnames';
import './styles.css'
import { useDispatch } from 'react-redux';



export const GifComponents = ({classWrapper="", functionInteractiv=false, static_element=false,  mirror=false, stoped=false, fixed=false, foto=false, gif="myGifButterfly", className="", clear=false}) => {

  const dict_gif = {
    "myGifButterfly": myGifButterfly,
    "myGifStars": myGifStars,
    "myGifTreeB": myGifTreeB,
    "myGifTreeFront": myGifTreeFront,
    "myGifRabbitBook": myGifRabbitBook,
    "myGifBoy": myGifBoy,
    "myGifStar": myGifStar,
  }

  const dispatch = useDispatch()
  

  const blockRef = useRef(null);

  const [position, setPosition] = useState(null);

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth
  })

  const [isCartoon, setIsCartoon] = useState(false) // проверяем есть ли анимация у classesWrapper

  const [gifSrc, setGifSrc] = useState(foto? foto : dict_gif[gif])

  const [isMounting, setIsMounting] = useState(true)

  const [isMoving, setIsMoving] = useState(false);

  const [isTurn, setIsTurn] = useState(mirror)

  const isMobileScreen = screenSize.width <= 450;

  const getPosition = () => {
    if (blockRef.current&&!static_element) {
      const rect = blockRef.current.getBoundingClientRect();
      if(isMobileScreen&&isMounting) {
        setPosition({
          top: rect.top + 17,
          left: rect.left +18,
          width: rect.width,
          height: rect.height,
        })
      } else {
        setPosition({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
      }
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
    setIsMounting(false) // чтобы после движения картинка оставалась на том же месте

  
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


  const handleMouseLeave = () => {
    if(!isMoving&&foto) {
      setGifSrc(foto);
    }
    else if(!isCartoon) {
      setTimeout(() => {
        setGifSrc(foto? foto: dict_gif[gif]);
      }, 1000);
    }
    
  };


  return (
    <div 
      onMouseEnter={functionInteractiv ? () => dispatch(functionInteractiv) : null} 
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
