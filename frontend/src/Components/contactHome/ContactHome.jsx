import React, { useState } from 'react'
import './contact.css'
import axios from 'axios'
import toast from 'react-hot-toast'

function ContactHome() {

    const [formdata,setformdata] = useState({
        Name : '',
        Email : '' ,
        PhoneNumber : '',
        Message : ''
    })

    const handlechange = (e) =>{
        const { name, value } = e.target;
        setformdata((prevData) => ({
            ...prevData,
           [name]: value,
        }))
    }

    const formdatafetch = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.post('https://api.digitalstriker.in/api/createcontact',formdata);
            toast.success('Message Sent Successfully!')
            console.log(response)
        } catch (error) {
            console.log(error)
            toast.error("Error Occured")
        }
    }

    return (
        <div className='form-section'>
            <div className="container">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="topic">Address</div>
                            <div className="text-one">E-148, Mangolpuri Industrial area phase 2 pocket e</div>
                            <div className="text-two">New Delhi 110034( INDIA )</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Phone</div>
                            <div className="text-one">+91 8447168967</div>
                            <div className="text-two">+91 9999780986</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div>
                            <div className="text-one">baijnath@digitalstriker.in</div>
                            <div className="text-one">deepak@digitalstriker.in</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>If you have any work from me or any types of quries related to Our Product, you can send me message from here. It's my pleasure to help you.</p>
                        <form onSubmit={formdatafetch} action="#">
                            <div className="input-box">
                            <input type="text" value={formdata.Name} placeholder='Name' name='Name' onChange={handlechange} required />
                            </div>
                            <div className="input-box">
                            <input type="email" placeholder='Email' value={formdata.Email} name='Email' onChange={handlechange} required />
                            </div>
                            <div className="input-box">
                            <input type="text" placeholder='Phone No.' value={formdata.PhoneNumber} name='PhoneNumber' onChange={handlechange} required />
                            </div>
                            <div className="input-box message-box">
                            <textarea placeholder='Message' value={formdata.Message} name='Message' onChange={handlechange} required></textarea>
                            </div>
                            <div className="button">
                                <button className='btn-style' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHome
