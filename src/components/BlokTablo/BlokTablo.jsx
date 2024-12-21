import React from "react";
import './styles.css'
import { Text } from "../Text/Text";
import { Img } from "../Img/Img";
import classNames from 'classnames';


export const BlokTablo = ({clean=false, title, contex, src, classNameWrapper="", classNameElement}) => {

    const classesWrapper = clean ? classNames(
        classNameWrapper) : classNames(
                    'blok-tablo-wrapper',
                    classNameWrapper,
                )

    const classesElement = classNames(
        'blok-tablo-element',
        classNameElement)



    return(
        <div className={classesWrapper}>
            <div className="blok-tablo-element">
                <Img className="logo-admin" src={src}/>
                <Text as="h2">{title}</Text>
            </div>
            {contex&&
            <div className="blok-tablo-element">
                <Text>{contex}</Text>
            </div>}

        </div>
    )
}