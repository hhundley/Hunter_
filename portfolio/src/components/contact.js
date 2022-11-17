import React,{useRef} from 'react';
import '../styles/contact.css';
import emailjs from '@emailjs/browser'
import env from "react-dotenv";

const Contact = () => {
    const form = useRef();
    const [formStatus, setFormStatus] = React.useState('Send_')
    const onSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(env.SERVICE_ID,env.TEMPLATE_ID,form.current,env.PUBLIC_KEY)
    setFormStatus('⚡ Sent ⚡')
  }
  return (
    <div className="container mt-5">
      <h2 className="contact-text mb-3">Contact</h2>
      <form ref={form} onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" name="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" required />
        </div>
        <button id="submitbtn" className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact;