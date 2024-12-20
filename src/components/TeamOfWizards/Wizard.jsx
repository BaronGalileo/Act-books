import React from "react";
import './styles.css'
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";


export const Wizard = ({src="", contex="", mirror=false}) => {

    return(
        <>
        {!mirror ?
            <div className="team-of-wizards-element">
                <div className="wizard-foto-container">
                    <Img src={src} className="wizard-foto"/>
                </div>
                <div className="text-bolus-wizard">
                    <Text className="txt-bolus">{contex}</Text>
                </div>
            </div> :
            <div className="team-of-wizards-element">
                <div className="text-bolus-wizard">
                    <Text className="txt-bolus">{contex}</Text>
                </div>
                <div className="wizard-foto-container">
                    <Img src={src} className="wizard-foto"/>
                </div>
            </div>}

        </>
    )
}