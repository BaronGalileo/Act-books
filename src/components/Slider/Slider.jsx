import React, { useState } from 'react';
import './styles.css'
import { TextInBall } from '../TextInBall/TextInBall';
import { Img } from '../Img/Img';

export const Slider = () => {
    const slides = [
        'Отзывы покупателей. трям трям, тили мили трямдия!!!',
        'kjghasdlhkadh;kashd',
        'asdqpojjlllmc',
        'wqqwdl;lk',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider-reviews-wrapper">
            <TextInBall text={slides[currentSlide]}/>
            <button className='btn-reviews-slider left'
                onClick={prevSlide}
            >
                <Img src='../images/кнопка л.png'/>
            </button>
            <button className='btn-reviews-slider right'
                onClick={nextSlide}
            >
                <Img src='../images/кнопка п.png'/>
            </button>
        </div>

    );
};