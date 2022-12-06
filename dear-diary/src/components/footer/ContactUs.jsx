// import styled from "styled-components";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';


const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3gno5zf', 'template_syywlb3', form.current, 'JG-X1tG-aeEGYVbaq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return <div className="contact-form">
        <p className="font-medium">WRITE TO US!</p>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    </div>
};

export default ContactUs;