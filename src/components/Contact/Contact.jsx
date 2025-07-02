import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="banner">
            <div className="contact-title">
                <h1>Contact Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, ratione porro doloremque repellendus blanditiis tempora fuga harum, </p>
            </div>
        </div>
        <div className="contact-box" id='contact'>
            <div className="left-box">
                <div className="left-item">
                    <i className="fa-solid fa-phone"></i>
                    <p>Phone number</p>
                    <span>+855-118 630 35</span>
                </div>
                <div className="left-item">
                    <i className="fa-solid fa-envelope"></i>
                    <p>Email Address</p>
                    <span>mengkemom@gmail.com</span>
                </div>
                <div className="left-item">
                    <i className="fa-brands fa-telegram"></i>
                    <p>Telegram</p>
                    <span>@mengke_mom</span>
                </div>
                <div className="left-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Our Office</p>
                    <span>Saint 138z, Phnom Penh</span>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.8019215198487!2d104.89276667584458!3d11.566053044131268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109510b2f4ba4d5%3A0x85115bd666252199!2sAsia%20Euro%20University!5e0!3m2!1sen!2skh!4v1717811316249!5m2!1sen!2skh"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>
            <div className="right-box">
                <h2>Contact Us</h2>
                <h1>Get In Touch</h1>
                <form class="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Your Name..." />

                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="example@yourmail.com" />

                <label for="subject">Subject:</label>
                <input type="text" id="subject" placeholder="Title..." />

                <label for="message">Message:</label>
                <textarea id="message" placeholder="Type here..."></textarea>

                <button type="submit">Send Now</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
