import React from "react";
import './styles.css'
import { Text } from "../Text/Text";
import { Img } from "../Img/Img";
import classNames from 'classnames';


export const BlokTablo = ({clean=false, title, contex, header=false,  src=false, classNameWrapper="", classNameElement=""}) => {

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
            <div className={classesElement}>
                {src&&<Img className="logo-admin" src={src}/>}
                <Text className="admin-txt-h2" as="h2">{title}</Text>
            </div>
            {contex&&
            <div className={classesElement}>
                {!header ? <Text>{contex}</Text> : <Text className="admin-txt-h2" as="h2">{contex}</Text>}
            </div>}

        </div>
    )
}