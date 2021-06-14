import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import "./ContactForm.css"

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xdoyzzde");

    if (state.succeeded) {
        return <h2>Thanks for reaching out. <br /> I'll get back to you as soon as possible.</h2>
    }
        
    return (
        <div className="ContactForm">
            <div className="Contact-thankyou">
                <h4>Thanks so much for visiting. <br></br>
                Please feel free to reach out.</h4>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="ContactForm-email">
                <label htmlFor="email">
                    Email Address:
                </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className='ContactForm-message'>
                <label htmlFor="message">
                    Message:
                </label>
                <textarea 
                    name="message" 
                    id="message" 
                    cols="50" 
                    rows="5">
                </textarea>
            </div>
            <button 
                type="submit" 
                disabled={state.submitting}>
                Submit
            </button>
            </form>
        </div>
    )
}

export { ContactForm };