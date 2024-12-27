import React, { useEffect, useState } from 'react';
import './styles.css'
import { TextInBall } from '../TextInBall/TextInBall';
import { Img } from '../Img/Img';
import { useDispatch } from 'react-redux';
import { incrementComment } from '../../store/interactivSlise';
import axios from 'axios';

export const Slider = () => {

    const [slider, setSlider] = useState(null)

    const path_comments = "http://world.life.destiny.fvds.ru/backend/api/comments"

    useEffect(() => {
        axios.get(path_comments)
        .then(res=>{
            const slides = res.data.map(review => review.content);
            setSlider(slides)

        })
        .catch(err=> {
            //на случай неработающего сервера
            const dataReviewNotServ = ['Дарила книгу своей племяннице, ей она очень понрав… ребенок не любит читать, подарите ему эту книгу!',
                'Моя любимая сказка! Купила её дочке четырёх лет. М…вала иллюстрации и задавала вопросы про Буратино.',
                'Очень красивая книга с объемными иллюстрациями. Са…ая книга, особенно на подарок ребенку, рекомендую',
                'Красивая, яркая книжка с объёмными картинками и оч…онравилась. У нас уже третья книга из этой серии.',
                'Эта книга настолько обалденная, что я даже не знаю… отличный вариант для времяпровождения с ребёнком',
                'Покупала книгу в подарок для девочки 5 лет. Очень …личный вариант для подарка, особенно на Новый год']
            setSlider(dataReviewNotServ) 
            console.log("err", err)
        })
    },[])


    const dispatch = useDispatch()

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        dispatch(incrementComment())
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slider.length);
    };

    const prevSlide = () => {
        dispatch(incrementComment())
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slider.length) % slider.length);
    };

    return (
        <div className="slider-reviews-wrapper">
            {slider&&
            <TextInBall text={slider[currentSlide]}/>}
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