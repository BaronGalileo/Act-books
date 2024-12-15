import React from "react";
import classNames from 'classnames';
import './ButtonBallCandy.css';


export const ButtonBallCandy = ({children = 'Default button', onClick =() => {}, className = '', disabled = false, active = false, clean = false, ...restProps}) => {

    function onClikAction(e){
        if (disabled){
            e.preventDefault();
        } else {
            return onClick(e);
        }
    }
    
    const classes = clean ? classNames(
            className,
            { active }) : classNames(
                'button-ball',
                className,
                { active },
            )


    const Tag = restProps.href ? 'a' : 'button';

    return(
        <Tag
            {...restProps}
            className={classes}
            disabled={disabled}
            onClick={onClikAction}
            >{children}</Tag>
    );
};