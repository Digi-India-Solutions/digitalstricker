import React from 'react'
import './Mission.css'
import mission from './mission.jpg'
import vision from './vision.jpg'
import { Link } from 'react-router-dom'

function Mission() {
    return (
        <section className='mission-section'>
            <div className="container">
                <div className="heading">
                    <span>Mission & Vision</span>
                </div>
                <div className="mission-main-box">
                    <div className="left same">
                        <div className="img">
                            <img src={mission} alt="" />
                        </div>
                        <div className="detail">
                            <div className="detail-left">
                                <div className="icon">
                                    <i class="ri-focus-3-line"></i>
                                </div>
                            </div>
                            <div className="detail-right">
                                <h4>Mission</h4>
                                <p>Our strength is in providing expert, professional and dedicated people who perform in any environment with integrity and distinction. As a mission-driven company, we strive to find team members who align themselves, with the company mission.</p>
                                <Link to={'/mission'}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right same">
                        <div className="img">
                            <img src={vision} alt="" />
                        </div>
                        <div className="detail">
                            <div className="detail-left">
                                <div className="icon">
                                    <i class="ri-eye-fill"></i>
                                </div>
                            </div>
                            <div className="detail-right">
                                <h4>Vision</h4>
                                <p>To be recognized as a leading services and manufacturing company, enabling our customers to gain and sustain their competitive edge by leveraging emerging technologies and skills that support new business paradigms.</p>
                                <Link to={'/vision'}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission
