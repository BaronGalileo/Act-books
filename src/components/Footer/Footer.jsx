import React from 'react';
import './styles.css'
import { Img } from '../Img/Img';


export const Footer = () => {
    return(
            <div className='footer-wrapper'>
                <a className='btn-footer' href="https://ast.ru/">
                <Img className="img-link" src="../../images/teleg.png" alt="Описание картинки"/>
                </a>
                <a className='btn-footer' href="https://ast.ru/">
                <Img className="img-link" src="../../images/youtube.png" alt="Описание картинки"/>
                </a>
                <a className='btn-footer' href="https://ast.ru/">
                <Img className="img-link" src="../../images/vk.png" alt="Описание картинки"/>
                </a>
                <a className='btn-footer' href="https://ast.ru/">
                <Img className="img-link" src="../../images/4.png" alt="Описание картинки"/>
                </a>
                <a className='btn-footer' href="https://ast.ru/">
                <Img className="img-link" src="../../images/5.png" alt="Описание картинки"/>
                </a>
                <a className='btn-footer' href="https://ast.ru/">
                <Img className="img-link" src="../../images/6.png" alt="Описание картинки"/>
                </a>
            </div>
    )
}
