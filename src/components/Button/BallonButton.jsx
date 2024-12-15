import React from "react";
import classNames from 'classnames';
import './styles.css';


export const BallonButton = ({children = 'Default ballon',  className = '',  active = false, clean = false, ...restProps}) => {
    
    const classes = clean ? classNames(
            className,
            { active }) : classNames(
                'balloon-button',
                className,
                { active },
            )

    return(

        <a
            {...restProps}
            className={classes}
            >{children}</a>
    );
};