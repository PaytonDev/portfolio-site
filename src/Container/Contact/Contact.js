import React, { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import { ContactForm } from './ContactForm'
import "./Contact.css"

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])
    return (
        <div className="Contact-container section" id="contact" name="contact" data-aos="fade-up">
            <p className="Contact-header">Let's Talk</p>
            <div className= 'Contact'>
                <ContactForm />
            </div>
        </div>
    )
}

export { Contact }