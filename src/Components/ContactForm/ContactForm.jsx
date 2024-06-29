import React from 'react'

import './ContactForm.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">
        How can we Help?
      </h1>
      <form className="contact-form">
        <div className="contact-form row">
          <label>
            First Name:
            <input type="text" name="first-name" placeholder="First Name" />
          </label>
        </div>
        <div className="contact-form row">
          <label>
            Last Name:
            <input type="text" name="last-name" placeholder="Last Name"/>
          </label>
        </div>
        <div className="contact-form row">
          <label>
            Email:
            <input type="email" name="email" placeholder="E-mail" />
          </label>
        </div>
        <div className="contact-form row">
          <label>
            <textarea type="text" placeholder="Enter your comments here..." className="comment-box"/>
          </label>
        </div>
        <button type="submit" className="contact-button">Submit</button>
      </form>
      </div>
  )
}

export default Contact;