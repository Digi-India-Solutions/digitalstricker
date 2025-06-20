import React, { useEffect } from 'react'
import './MissionPage.css'

function MissionPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='missionpage-section'>
      <div className="container">
        <div className="bg"></div>
        <div className="mission-main-container">
            <div className="heading">
                <span>Our Mission</span>
            </div>
            <div className="main-container">
                <p>Our strength is in providing expert, professional and dedicated people who perform in any environment with integrity and distinction. As a mission-driven company, we strive to find team members who align themselves, with the company mission. Our team members are placed in roles that allow them to feel good about what they do each day while ensuring a successful job & organizational fit.</p>
                <p>Through this way, the aim is to become one of the most perfect & capable infrastructure company and a leading provider of comprehensive telecommunication solutions, engineering & support services .To accomplish this, we must maintain the highest level of integrity, honesty and communication with our clients.</p>
                <span>We Are Committed</span>
                <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> To serve our customers with quick response, time delivery, long-term productive relationship, ethics & transparency.</p>
                <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> To become customer-driven company by providing customized solutions and services to meet customer requirements.</p>
                <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> To deliver solutions covering the entire value chain of telecom infrastructure industry.</p>
                <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> To add the growth of industry by providing world-class services with state of the technology</p>
                <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> To hire, develop, retain best talent to offer utmost satisfaction to our valued customers.</p>
                <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> To use in-depth knowledge to streamline process & deliver cost-effective, valued and real world solution.</p>
                <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> To maintain strong team of qualified & skilled professionals.</p>
                <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> To maintain strengthen professional relationship with customers.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MissionPage
