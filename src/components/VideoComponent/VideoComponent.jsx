import React from "react";
import "./VideoComponent.css"


export const VideoComponent = () => {

    const isMobileScreen = document.documentElement.clientWidth <= 450;

    return(
        <div className="video-container">
            <video 
                controls 
                autoPlay 
                loop 
                muted
                className="video-slide"
            >
            {!isMobileScreen 
            ? <source src="../video/Desctop.mp4" type="video/mp4" />
            : <source src="../video/NewYear.mp4" type="video/mp4" />}
                Ваш браузер не поддерживает тег video.
              </video>
              <div className="position-video-container">
                <div className="gif-Pinocchio"></div>
            </div>
        </div>
    )
}