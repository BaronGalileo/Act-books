import React, { useState } from 'react';
import myGif from '../../images/belka4.gif';

// const GifComponent = () => {
//   const [isPlaying, setIsPlaying] = useState(true);

//   const togglePlay = () => setIsPlaying(!isPlaying);

//   return (
//     <div>
//       <img className='img squirrel-img'
//         src={myGif} 
//         alt="Анимация GIF"
//         // style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} 
//       />
//     </div>
//   );
// };

// export default GifComponent;

const GifComponent = () => {
  // Состояние для хранения пути к изображению
  const [gifSrc, setGifSrc] = useState(myGif); // Исходный GIF

  // Функция для запуска анимации (перезагружаем GIF)
  const handleMouseEnter = () => {
    setGifSrc(myGif); // Перезагружаем GIF
  };

  // Функция для остановки анимации (заменяем на статичную картинку)
  const handleMouseLeave = () => {
    setGifSrc("../images/Белка-статик.png"); // Заменяем на статичную картинку
  };

  return (
    <div className="container">
      <img
        src={gifSrc}
        alt="Animated GIF"
        className="img squirrel-img"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default GifComponent;