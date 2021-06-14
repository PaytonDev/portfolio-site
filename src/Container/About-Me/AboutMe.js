import React from 'react';
import "./AboutMe.css"


const AboutMe = () => {
    return (
        <div className="AboutMe section" id="about-me">
            <div className="AboutMe-copy">
            <p className="AboutMe-header">About Me</p>
            <p className="AboutMe-text">
                I am a Front End Engineer living in Tulsa, OK 
                with a strong passion for problem solving and beautiful sounds. 
                I've probably solved 100 jigsaws in my life, but can't play an instrument. 
                I'm currently focused on better understanding concepts that can help me build data 
                visualisation and e-commerce tools for musicians since touring was heavily affected 
                by Covid-19.
            </p>
            </div>
        </div>
    )

}

export { AboutMe }