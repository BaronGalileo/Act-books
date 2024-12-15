import React from "react";
import classNames from 'classnames';
import './styles.css';


export const Button = ({children = 'Default button', onClick =() => {}, className = '', disabled = false, active = false, clean = false, ...restProps}) => {

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
                'glass-btn',
                className,
                { active },
            )


    const Tag = restProps.href ? 'a' : 'button';

    return(
        <div className="glass-btn glass-btn-green">
        <Tag
            {...restProps}
            className={classes}
            disabled={disabled}
            onClick={onClikAction}
            >{children}</Tag>
        </div>
    );
};