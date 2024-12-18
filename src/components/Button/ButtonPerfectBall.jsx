import React from "react";
import classNames from 'classnames';
import './ButtonBall.css';


export const ButtonPerfectBall = ({children = 'Default button', onClick =() => {}, className = '', disabled = false, active = false, clean = false, ...restProps}) => {

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
                'button-ball-perfect',
                className,
                { active },
            )


    const Tag = restProps.href ? 'a' : 'button';

    return(
        <div className="center">
            <Tag
                {...restProps}
                className={classes}
                disabled={disabled}
                onClick={onClikAction}
                >{children}
                <div className="spot"></div>
                <div className="spot-circ"></div>
                <div className="spot-right"></div>
                <div className="spot-ellipse"></div>
                </Tag>
        
        </div>
    );
};