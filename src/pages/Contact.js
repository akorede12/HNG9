// firstName, lastName, email, message 
import React from 'react';
import { useState } from "react"
import './contact.css'

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
        <div className=''>
        <div className='headingandsupportingtext'>
        <span className='text'>
        <span className='displaymd-semibold'> Contact Me </span>
        </span>
        <span className='text02'>
        <span className='textxl-normal'>Hi there, contact me to ask me about anything you have in mind.</span>
        </span>
        </div>
        <div className='form'>
        <form>
        <div className='formfields'>
        <div className='namerow'>
        <div className='firstname'>
        <div className='inputwithlabel'>
        
        <label> first name
            <input
            id='first_name'
            type="text"
            placeholder="Enter your first name"
            onChange={ e => setUserInput({...userInput, firstName: e.target.value}) }

            />
        </label>
        </div>
        </div>
        </div>
        <div className='lastname'>
        <div className='inputwithlabel1'>
        <label className='text08'> last name
            <input
            id='last_name'
            className='input1'
            type="text"
            placeholder= "Enter your last name"
            onChange={ e => setUserInput({...userInput, lastName: e.target.value}) }

            />
        </label>
        </div>
        </div>
        <div className='email'>
        <div className='inputwithlabel12'>
        <label className='text12'> Email
            <input
            id='email'
            className='input2'
            type="text" 
            placeholder= "yourname@email.com"
            onChange={ e => setUserInput({...userInput, Email: e.target.value})}

            />
        </label>
        </div>
        </div>
        <div className='textareainputfield'>
        <div className='inputwithlabel13'>
        <label className='text16'> Message
            <textarea
            id='message'
            className='input3'
            type="text"
            placeholder= "Send me a message and I'll reply you as soon as possible..."
            onChange={ e => setUserInput({...userInput, Message: e.target.value})}

            />
        </label>
        </div>
        </div>
        <div className='checkbox'></div>
        <div className='input4'></div>
        <label> You agree to providing your data to name who may contact you.
            <input type="radio" value = "checkbox" />
        </label>
        </div>
        </form>
        <div className='btnsubmit'>

        <button
        id='btn_submit'
        onClick={handleSubmit}>
            Send message
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Contact;