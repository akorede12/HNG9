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
        <h1> Contact Me </h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
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
    )
}

export default Contact;