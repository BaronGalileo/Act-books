import React from "react";
import "./styles.css"
import { Text } from "../Text/Text";

export const TextInBall = ({text}) => {

    return(
        <div className="text-in-ball">
            <Text className="txt-comment-mobile">{text}</Text>
        </div>
    )
}