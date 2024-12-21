import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import './CubeSlider.css';
import { Img } from '../Img/Img';
import { Text } from '../Text/Text';
import { useDispatch } from 'react-redux';
import { incrementCub } from '../../store/interactivSlise';

export const CubeSlider = () => {
  const [direction, setDirection] = useState('next'); // Управляем направлением автопрокрутки
  const swiperRef = useRef(null); // Ссылка на Swiper, чтобы контролировать его

  const dispatch = useDispatch()

  const handleSlideChange = (swiper) => {
    const isLastSlide = swiper.isEnd;  // Проверяем, достиг ли слайдер последнего слайда

    if (isLastSlide) {
      setDirection('prev'); // Если достигнут последний слайд, меняем направление на обратное
    } else if (swiper.isBeginning) {
      setDirection('next'); // Если на первом слайде, ставим прокрутку в обычном направлении
    }
  };

  return (
    <div className="cube-wrapper">
      <Swiper
        className="cube-slider swiper"
        effect={"cube"}
        grabCursor={true}
        loop={false} // Зацикливание слайдера
        speed={2600} // Скорость перехода между слайдами
        autoplay={{
          delay: 1000, // Задержка перед переходом к следующему слайду
          pauseOnMouseEnter: true, // Приостановить автопрокрутку на паузе при наведении
          reverseDirection: direction === 'prev', // Меняем направление в зависимости от состояния
        }}
        cubeEffect={{
          shadow: true,
          shadowOffset: 10, // уменьшение отступа тени
          slideShadows: true,
          shadowScale: 0.94, // уменьшение масштаба тени
        }}
        lazy={false}
        modules={[EffectCube, Autoplay]}
        onSlideChange={handleSlideChange} // Слушаем событие изменения слайда
        ref={swiperRef} // Получаем доступ к самому Swiper
      >
        <SwiperSlide key="slide1">
          <div className="cube-slider">
            <Img  onMouseEnter={() => dispatch(incrementCub())} src="../images/cub1.png" alt="photo" />
            <div className="cube-top"><Text>Яркие картинки</Text></div>
          </div>
        </SwiperSlide>
        <SwiperSlide key="slide2">
          <div className="cube-slider">
            <Img onMouseEnter={() => dispatch(incrementCub())} src="../images/cub2.png" alt="photo" />
            <div className="cube-top"><Text>Качественные иллюстрации</Text></div>
          </div>
        </SwiperSlide>
        <SwiperSlide key="slide3">
          <div className="cube-slider">
            <Img onMouseEnter={() => dispatch(incrementCub())} src="../images/cub3.png" alt="photo" />
            <div className="cube-top"><Text>Интерактивные элементы</Text></div>
          </div>
        </SwiperSlide>
        <SwiperSlide key="slide4">
          <div className="cube-slider">
            <Img  onMouseEnter={() => dispatch(incrementCub())} src="../images/cub5.png" alt="photo" />
            <div className="cube-top"><Text>Театр у вас дома</Text></div>
          </div>
        </SwiperSlide>
        <SwiperSlide key="slide5">
          <div className="cube-slider">
            <Img onMouseEnter={() => dispatch(incrementCub())} src="../images/cub4.png" alt="photo" />
            <div className="cube-top"><Text>Развитие воображения</Text></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};