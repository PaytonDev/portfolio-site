import React from 'react'
import { ContactForm } from './ContactForm'
import "./Contact.css"

const Contact = () => {
    return (
        <div className="Contact-container section" id="contact">
            <p className="Contact-header">CONTACT</p>
            <div className= 'Contact'>
                <ContactForm />
            </div>
        </div>
    )
}

export { Contact }