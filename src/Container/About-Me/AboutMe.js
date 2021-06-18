import React, { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import "./AboutMe.css"
import { AboutMeFacts } from './AboutMeFacts';


const AboutMe = () => {
    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])
    return (
        <div className="AboutMe section" id="about-me" data-aos="fade-up">
            <div className="AboutMe-copy">
            <p className="AboutMe-header">About Me</p>
            <AboutMeFacts />
            </div>
        </div>
    )

}

export { AboutMe }