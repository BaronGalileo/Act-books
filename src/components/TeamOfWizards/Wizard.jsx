import React from "react";
import './styles.css'
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";


export const Wizard = ({src="", contex="", to_the_right=false}) => {

    return(
        <div className={to_the_right ? "mirrored-team-of-wizards-element" : "team-of-wizards-element"}>
            <Img src={src} className="wizard-foto"/>
            <div className={to_the_right ? "text-bolus-wizard-right" : "text-bolus-wizard"}>
                <Text className={to_the_right ? "txt-bolus txt-mirror" : "txt-bolus"}>{contex}</Text>
            </div>
        </div>
    )
}