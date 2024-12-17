import React from "react";
import classNames from "classnames";
import './styles.css'
import { Text } from "../Text/Text";
import {  useFormContext } from "react-hook-form"
import { findName } from "../../helpers/findName"



function Input({name, classText,  message, valueAsNumber, children, ...restProps}) {

    const classes = classNames(
        'txt',
        'dark-color',
        classText
    )

    const {
        register,
        formState: {errors}
    } = useFormContext()

    const errorName =(errors, name) => {
        const nameError = name.split('.')
        const result = findName(errors, nameError)
        return result
    }

    const error = errorName(errors, name)?.message;

    return (
        <label className="input-wrapper">
            <Text className={classes}>{children}</Text>
            <span>{error}</span>
            <input
            {...register(name, {
                required: message? `${message}`: false,
                valueAsNumber: valueAsNumber? `${valueAsNumber}` : false
            })}
            {...restProps}
            className={(error ? "error " : "") +"input-element"}         
            />
        </label>
    )
}

export {Input}