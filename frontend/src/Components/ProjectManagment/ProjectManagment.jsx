import React, { useEffect } from 'react'
import './ProjectManagment.css'

function ProjectManagment() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <section className='ProjectManagment-section'>
      <div className="container">
        <div className="bg"></div>
        <div className="projectmanagment-main-container">
            <div className="heading">
                <span>Project Mangament Services</span>
            </div>
            <p className='color-light-white'>PMC stands for Project Management services for Hospitality industry. Hospitality may be defined as meeting the needs of guests in a variety of establishments Since 2018 we have started our new vertical of hospitality services for end users, corporate clients, and OYO Rooms, FAB hotels etc. WE have a capable and well equipped teams for interior, exterior job like, paint work, tiles work, plaster work, wainscoting, gypsum work, all types of electrical work including CCTV wiring, fiber work, broadband wiring etc.</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectManagment
