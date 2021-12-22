import React, {useState} from 'react'
import './ContactForm.css'
import axios from 'axios'


const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const messageHandler = (e) => {
        setMessage(e.target.value)
    }

    const resetForm = () => {
        setName("")
        setEmail("")
        setTitle("")
        setMessage("")
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        const body = {
            name, email, title, message
        }

        resetForm()

        const response = await axios({
            method: "POST",
            url: "/send",
            data: body
        })

        if (response.data.status === 'success'){
            alert("Message Sent."); 
        }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
        }

    }


    return (
        <div className="contactform">
            <form  onSubmit={submitHandler} className="contactform-form">
                <div className="form-item">
                    <label for="name" className="form-label">Name</label>
                    <input value={name} onChange={nameHandler} required name="name" 
                    id="name" type="text" placeholder="Your Name" className="form-input"/>
                </div>
                <div className="form-item">
                    <label for="email" className="form-label">Email</label>
                    <input value={email} onChange={emailHandler} required name="email" 
                    id="email" type="email" placeholder="Your Email" className="form-input"/>
                </div>
                <div className="form-item">
                    <label for="title" className="form-label">Title</label>
                    <input value={title} onChange={titleHandler} name="title" id="title" type="text" placeholder="Title" className="form-input"/>
                </div>
                <div className="form-item">
                    <label for="message" className="form-label">Message</label>
                    <textarea value={message} onChange={messageHandler} required 
                    rows="10" cols="25" name="message" id="message" type="text" placeholder="Message" className="form-input"/>
                </div>
                <div className="form-item form-item-btn">
                    <button className="btn form-btn" type="submit">SEND</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm