import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import './styles.css';
import { removeAuth } from '../../store/authSlice';
import { Img } from '../Img/Img';




export const Header = () => {

    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth)

    const del = () => {
        dispatch(removeAuth())
    }


    return(
        <div className='header-wrapper'>
            <div>
                <Img className="logo" src="../images/image 3.png"/>
                <Img className="logo" src="../images/Лого Поп ап-01 1.png"/>
            </div>
            <Img className="logo" src="../images/Лого Поп ап-01 1.png"/>
        </div>
    )
}
