import React, { useState } from 'react';
import './styles.css'
import { TextInBall } from '../TextInBall/TextInBall';
import { Img } from '../Img/Img';
import { useDispatch } from 'react-redux';
import { incrementComment } from '../../store/interactivSlise';

export const Slider = () => {
    const slides = [
        'Отзывы покупателей. трям трям, тили мили трямдия!!!',
        'kjghasdlhkadh;kashd',
        'asdqpojjlllmc',
        'wqqwdl;lk',
    ];

    const dispatch = useDispatch()

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        dispatch(incrementComment())
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        dispatch(incrementComment())
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider-reviews-wrapper">
            <TextInBall text={slides[currentSlide]}/>
            <button className='btn-reviews-slider left'
                onClick={prevSlide}
            >
                <Img className="btn-slider-reviews" src='../images/кнопка л.png'/>
            </button>
            <button className='btn-reviews-slider right'
                onClick={nextSlide}
            >
                <Img className="btn-slider-reviews" src='../images/кнопка п.png'/>
            </button>
        </div>

    );
};