import React, { useEffect, useState } from 'react'
import './Contact.css'
import contactBG from './contact-bg.jpg'
import axios from 'axios'
import toast from 'react-hot-toast'

function Contact() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

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
    <section className='contactPage-section'>
      <div className="container">
        <div className="bg"></div>
        <div className="contact-main-container">
            <div className="heading">
                <span>Get in touch</span>
            </div>
            <div className="main-container">
                <div className="up">
                <div className="left">
                    <img src={contactBG} alt="" />
                </div>
                <form action="" onSubmit={formdatafetch}>
                    <div className="name same-field">
                        <input type="text" value={formdata.Name} placeholder='Name' name='Name' onChange={handlechange} required />
                    </div>
                    <div className="name same-field">
                        <input type="email" placeholder='Email' value={formdata.Email} name='Email' onChange={handlechange} required />
                    </div>
                    <div className="name same-field">
                        <input type="text" placeholder='Phone No.' value={formdata.PhoneNumber} name='PhoneNumber' onChange={handlechange} required />
                    </div>
                    <div className="textarea same-field">
                        <textarea placeholder='Message' value={formdata.Message} name='Message' onChange={handlechange} required></textarea>
                    </div>
                    <button className='contact-btn' type='submit'>Submit</button>
                </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
