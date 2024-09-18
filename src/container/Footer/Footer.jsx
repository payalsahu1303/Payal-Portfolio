import React, { useState, useRef } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import emailjs from 'emailjs-com';
import './Footer.scss';

const Footer = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Hire Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:123payalsahu@gmail.com" className="p-text">123payalsahu@gmail.com</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form ref={form} className="app__footer-form app__flex" onSubmit={sendEmail}>
          <input
            className="p-text"
            type="text"
            name="user_name"  
            placeholder="Your Name"
            required
          />
          <input
            className="p-text"
            type="email"
            name="user_email"  
            placeholder="Your Email"
            required
          />
          <textarea
            className="p-text"
            name="message"
            placeholder="Your Message"
            required
          />
          <input
            className="submit-text"
            type="submit"
            value={!loading ? 'Send' : 'Sending...'}
          />
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
