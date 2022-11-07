// firstName, lastName, email, message 
import React from 'react';
import { useState } from "react"

function Contact(){
    const[ userInput, setUserInput] = useState({
        firstName: "", 
        lastName: "",
        Email: "",
        Message: ""
        })

    const handleSubmit = () => {
        alert("form was submitted")
    }
    
    return(
        <div>
        <div className='contactpageheader'>
        <div className='container1'> 
        <div className='content'>
        <div className='content1'>
        <div className='headingandsupportingtext'>
        <span className='text'>
        <span className='displaymd-semibold'> Contact Me </span>
        </span>
        <span className='text02'>
        <span className='textxl-normal'>Hi there, contact me to ask me about anything you have in mind.</span>
        </span>
        </div>
        <form>
        <label> first name
            <input
            type="text"
            placeholder="Enter your first name"
            onChange={ e => setUserInput({...userInput, firstName: e.target.value}) }

            />
        </label>
        <label> last name
            <input
            type="text"
            placeholder= "Enter your last name"
            onChange={ e => setUserInput({...userInput, lastName: e.target.value}) }

            />
        </label>
        <label> Email
            <input
            type="text" 
            placeholder= "yourname@email.com"
            onChange={ e => setUserInput({...userInput, Email: e.target.value})}

            />
        </label>
        <label> Message
            <textarea
            type="text"
            placeholder= "Send me a message and I'll reply you as soon as possible..."
            onChange={ e => setUserInput({...userInput, Message: e.target.value})}

            />
        </label>
        <label> You agree to providing your data to name who may contact you.
            <input type="radio" value = "checkbox" />
        </label>
        </form>

        <button onClick={handleSubmit}>
            Send message
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Contact;