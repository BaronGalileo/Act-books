import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import './CubeSlider.css';
import { Img } from '../Img/Img';
import { Text } from '../Text/Text';
import { Button } from "../Button/Button";


export const CubeSlider = () => {


  return (
    <div className="cube-wrapper">
      <Swiper
        className="cube-slider swiper"
        effect={"cube"} // Включаем 3D-куб эффект
        grabCursor={true} // Курсор захвата
        loop={true} // Зацикливание слайдера
        speed={2000} // Скорость перехода между слайдами
        autoplay={{
          delay: 2600, // Задержка перед переходом к следующему слайду
          pauseOnMouseEnter: true, // Приостановить автопрокрутку на паузе при наведении
        }}
        cubeEffect={{
          shadow: true, // Включаем тень для куба
          slideShadows: true, // Включаем тени на слайде
          shadowOffset: 33, // Отступ тени
          shadowScale: 1, // Масштаб тени
        }}
        lazy={true}
        modules={[EffectCube, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className="cube-slider">
            <Img src="../images/разворотАлиса (1).png" alt="photo" />
            <div className="cube-top">1</div>
            <div className="cube-bottom">
              <Text>Описание книги</Text>
              <Button href="https://ast.ru/" clear className="btn">Хочу</Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cube-slider">
            <Img src="../images/ВетерВИвах.png" alt="photo" />
            <div className="cube-top">2</div>
            <div className="cube-bottom">
              <Text>Описание книги, там тарам!</Text>
              <Button href="https://ast.ru/" clear className="btn">Хочу</Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cube-slider">
            <Img src="../images/разворотАлисаВ зазер (1).png" alt="photo" />
            <div className="cube-top">3</div>
            <div className="cube-bottom">
              <Text>Ветер в ивах это увлекательные приключения братцев бурундуков в Америке. Красочные картинки и веселые истории не оставят ровнодушным никого</Text>
              <Button href="https://ast.ru/" clear className="btn">Хочу</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};