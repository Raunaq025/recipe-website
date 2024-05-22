import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import './contactPage.css';

function ContactPage() {

    const [Full_Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Subject,setSubject]=useState('')
    const [Description,setDiscription]=useState('')

    async function submit(e){
        e.preventDefault();

        try {
            const res = await axios.post("https://recipe-website-bay-delta.vercel.app/ContactUs",{
                Full_Name, Email, Subject, Description
            });

            if (res.data.message === "success") {
                console.log("Success");
                alert("Feedback sent..Thank you!");
            }
        } 
        
        catch (e) {
            console.log("Error", e);
        }
    }

  return (
    <div>
        <div className="contact-container">
            <div className="contact-inner-container" action="#" method = 'post'>
                <div className="contact-header">
                    <h1 className="contact-title">Contact <span>Us</span></h1>
                    <p className="contact-description">Help us to know your feedback..</p>
                </div>
                <div className="contact-form-wrapper">
                    <div className="contact-form">
                        <div className="contact-form-half">
                            <div className="contact-form-group">
                                <label for="name" className="contact-label" >Name*</label>
                                <input onChange={(e) => {setName(e.target.value)}} type="text" id="name" name="name" className="contact-input" required/>
                            </div>
                        </div>
                    <div className="contact-form-half">
                <div className="contact-form-group">
                    <label for="email" className="contact-label">Email*</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="email" id="email" name="email" className="contact-input" required/>
                </div>
                </div>
                <div className="contact-form-full">
                <div className="contact-form-group">
                    <label for="subject" className="contact-label">Subject</label>
                    <input onChange={(e) => {setSubject(e.target.value)}} type="text" id="subject" name="subject" className="contact-input"/>
                </div>
                </div>
                <div className="contact-form-full">
                <div className="contact-form-group">
                    <label for="message" className="contact-label">Message*</label>
                    <textarea onChange={(e) => {setDiscription(e.target.value)}} id="message" name="message" className="contact-textarea" required></textarea>
                </div>
                </div>
                <div className="contact-form-full">
                <button onClick={submit} className="contact-button">Send</button>
                </div>

                <div className='contact-info'>
            <p>Address : <span>70D, Mohaddipur, Gorakhpur, 273008</span></p>
            <p>Email : <span>raunaqg025@gmail.com</span></p>
            <p>Phone : <span>+91 956587XXXX</span></p>
            </div>
    </div>
        </div>
            </div>

            
        </div>

    </div>
  )
}

export default ContactPage
