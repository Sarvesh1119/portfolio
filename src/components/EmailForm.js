import React,{useRef} from 'react'
import "../css/email.css"
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_jgmrz0k', 'template_tp7403k', form.current, '6WLJrybWByx8AEodz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    }
    return (
        <form ref={form} className="form" onSubmit={handleSubmit}>
            <input className="user-input" placeholder="Name" type="text" name="from_name"/>
            <input className="user-input" placeholder="Email Address" type="text" name="from_email"/>
            <input className="user-input" placeholder="Subject" type="text" name="subject"/>
            <textarea className="user-textarea" placeholder="Your Message" name="message"/>
            <button>Send Message</button>
        </form>
    )
}

export default EmailForm