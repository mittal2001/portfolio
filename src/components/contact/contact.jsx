import React from 'react';
import './contact.css';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g6vemkp', 'template_lttc7q7', form.current, 'IaldQ3H16QTx_yoJM')
     
e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
           <GoMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tanmay.mittal117@gmail.com</h5>
            <a href="mailto:tanmay.mittal117@gmail.com" target="__blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>tanmaymittal</h5>
            <a href="http://m.me/tanmay.mittal.3532" target="__blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+917061896788</h5>
            <a href="https://api.whatsapp.com/send?phone=+917061896788">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name='name' placeholder='Your Full Name' required/>

          <input type="email" name='email' placeholder='Your Email' required/>

          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>

          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
