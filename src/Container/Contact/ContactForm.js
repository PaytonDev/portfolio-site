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
            <div className="form-container">
            <form onSubmit={handleSubmit}>
            <div className="ContactForm-name">
                <label htmlFor="full-name">
                    Full Name
                </label>
                 <input 
                    type="text" 
                    name="name" 
                    id="full-name" 
                    placeholder="First and Last" 
                    required
                />
            </div>
            <div className="ContactForm-email">
                <label htmlFor="email">
                    Email Address:
                </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
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
                    rows="5"
                    placeholder="Message" 
                    >
                        
                </textarea>
            </div>
            <button 
                type="submit" 
                disabled={state.submitting}>
                Submit
            </button>
            </form>
            </div>
        </div>
    )
}

export { ContactForm };