import React, { useEffect } from 'react'
import './OurPresence.css'
import img from './map.png'

function OurPresence() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='presence-section'>
            <div className="container">
                <div className="bg"></div>
                <div className="presence-main-container">
                    <div className="heading">
                        <span>Our Presence</span>
                    </div>
                    <p className='color-light-white'>Project Running In Under Mentioned States</p>
                </div>
                <div className="main-container">
                    <div className="map-box">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPresence
