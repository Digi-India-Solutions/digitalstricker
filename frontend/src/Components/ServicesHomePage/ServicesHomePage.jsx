import React from 'react'
import './ServicesHomePage.css'
import s1 from './s1.jpg'
import s2 from './s2.jpg'
import s3 from './s3.jpg'
import s4 from './s4.jpg'
import s5 from './s5.jpg'
import { Link } from 'react-router-dom'

function ServicesHomePage() {
    return (
        <section className='services-home-section'>
            <div className="container">
                <div className="heading">
                    <span>Our Services</span>
                </div>
                <div className="service-box">
                    <div className="same-col col-4">
                        <div className="img">
                            <img src={s4} alt="" />
                        </div>
                        <div className="detail">
                            <h2>Optical Fiber Works </h2>
                            <p>We plan, deploy and manage client's optical networks covering project management, operational support</p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                        </div>
                    </div>
                    <div className="same-col col-2">
                        <div className="img">
                            <img src={s2} alt="" />
                        </div>
                        <div className="detail">
                            <h2>Manufacturing</h2>
                            <p> We are leading manufacturer of OFC Equipment, Ribbon Fiber sleeve(Half round), Joint closure, BJC (Bamboo) Etc.</p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                        </div>
                    </div>
                    <div className="same-col col-1">
                        <div className="img">
                            <img src={s1} alt="" />
                        </div>
                        <div className="detail">
                            <h2>Import</h2>
                            <p>We import machinery specialized for fiber work to enhance productivity and precision in our manufacturing processes.</p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesHomePage
