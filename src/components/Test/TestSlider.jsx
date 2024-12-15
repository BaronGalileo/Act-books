import React, { useState } from 'react';
import './styles.css'
import { Img } from '../Img/Img';
import GifComponent from './GifCompon';
import TestGif from './TestGif';
import { GifComponents } from '../GifComponent/GifComponents';
// import { TextInBall } from '../TextInBall/TextInBall';
// import { Img } from '../Img/Img';

// export const Slider = () => {
//     const slides = [
//         'Отзывы покупателей. трям трям, тили мили трямдия!!!',
//         'kjghasdlhkadh;kashd',
//         'asdqpojjlllmc',
//         'wqqwdl;lk',
//     ];

//     const [currentSlide, setCurrentSlide] = useState(0);

//     const nextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
//     };

//     return (
//         <div className="slider-reviews-wrapper">
//             <TextInBall text={slides[currentSlide]}/>
//             {/* <img
//                 src={slides[currentSlide]}
//                 alt={`Slide ${currentSlide + 1}`}
//                 style={{ width: '100%', transition: 'transform 0.5s ease-in-out' }}
//             /> */}
//             <button className='btn-reviews-slider'
//                 onClick={prevSlide}
//                 // style={{
//                 //     position: 'absolute',
//                 //     top: '50%',
//                 //     left: '10px',
//                 //     transform: 'translateY(-50%)',
//                 //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 //     color: 'white',
//                 //     border: 'none',
//                 //     padding: '10px',
//                 // }}
//             >
//                 Prev
//             </button>
//             <button
//                 onClick={nextSlide}
//                 style={{
//                     position: 'absolute',
//                     top: '50%',
//                     right: '10px',
//                     transform: 'translateY(-50%)',
//                     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                     color: 'white',
//                     border: 'none',
//                     padding: '10px',
//                 }}
//             >
//                 <Img src='../images/кнопка п.png'/>
//             </button>
//         </div>

//     );
// };

export const TestSlider = () => {

    return(
        <div className='test-wrapper'>
            <GifComponents gif="myGifStars" classWrapper="test-wrapper"/>
        </div>

    )
}
