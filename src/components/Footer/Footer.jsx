import React from 'react';
import './styles.css'
import { Img } from '../Img/Img';


export const Footer = () => {
    return(
            <div className='footer-wrapper'>
                <a className='btn-footer' href="https://t.me/izdatelstvoast">
                <Img className="img-link" src="../../images/telegram.png" alt="Описание картинки"/>
                </a>
                <a className='btn-footer' href="https://www.youtube.com/user/AstIzdatelstvo">
                <Img className="img-link" src="../../images/youtube.png" alt="Описание картинки"/>
                </a>
                <a className='btn-footer' href="https://vk.com/izdatelstvoast">
                <Img className="img-link" src="../../images/vk.png" alt="Описание картинки"/>
                </a>
                <a className='btn-footer' href="https://dzen.ru/izdatelstvoast?utm_referrer=ast.ru">
                <Img className="img-link" src="../../images/4.png" alt="Описание картинки"/>
                </a>
                <a className='btn-footer' href="https://ok.ru/izdatelstvoast">
                <Img className="img-link" src="../../images/5.png" alt="Описание картинки"/>
                </a>
                <a className='btn-footer' href="https://tenchat.ru/izdatelstvoast">
                <Img className="img-link" src="../../images/6.png" alt="Описание картинки"/>
                </a>
            </div>
    )
}
