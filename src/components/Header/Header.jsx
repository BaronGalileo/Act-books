import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'; 
import { Img } from '../Img/Img';
import './styles.css';
import { incrementContent } from '../../store/interactivSlise';





export const Header = () => {

    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth)

    const location = useLocation();


    useEffect(() => {
        window.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' || event.key === 'Esc') {
                const modal = document.querySelector('.modal-menu-book');
                const blurredBackground = document.querySelector('.blurred-background');
                modal.style.display = 'none';
                blurredBackground.style.display = 'none';
                document.activeElement.blur()
            }
          })

    }, [])



    const showModalBook = () => {
        if(location.pathname !== "/admin") {
            dispatch(incrementContent())
            const modal = document.querySelector('.modal-menu-book');
            const blurredBackground = document.querySelector('.blurred-background');
            if (modal&&blurredBackground) {
                modal.style.display = 'block';
                blurredBackground.style.display = 'block';
            } else {
                console.error('Элемент не найден');
            }
            // modal.style.display = 'block';
            // blurredBackground.style.display = 'block';

        }
    }


    return(
        <div className='header-wrapper'>
            <div>
                <Img className="logo" src="../images/image 3.png"/>
                <Img className="logo" src="../images/Лого Поп ап-01 1.png"/>
            </div>

            <button onClick={showModalBook} className='header-btn'><Img className="show-modal-btn" src="../../images/menu-btn.png"/></button>
        </div>
    )
}
