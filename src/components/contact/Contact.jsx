import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hs0c2bh', 'template_4a9rwcj', form.current, 
    'IMHZfh-pmtw3CDcr0')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>  
            <h5>abhaygupta07788@gmail.com</h5>
            <a href="mailto:abhaygupta07788@gmail.com" target='_blank'>Send a Email</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>  
            <h5>Abhay Kumar Gupta</h5>
            <a href="https://m.me/abhay.kumar.gupta99" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>  
            <h5>Abhay Kumar Gupta</h5>
            <a href="https://api.whatsapp.com/send?phone=916284023056" target='_blank'>Send a message</a>
          </article>
        </div>  
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name'  placeholder='Your Full Name' required/>
          <input type='email' name='email'  placeholder='Your Email' required/>
          <textarea name='message' rows="7"  placeholder='Your Message' required></textarea>
          <button type='submit'  className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact