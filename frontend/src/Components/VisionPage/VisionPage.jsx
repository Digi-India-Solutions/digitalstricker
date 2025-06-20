import React, { useEffect } from 'react'
import './VisionPage.css'

function VisionPage() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <section className='visionPage-section'>
      <div className="container">
        <div className="bg"></div>
        <div className="vision-main-container">
            <div className="heading">
                <span>Our Vision & Values</span>
            </div>
            <div className="main-container">
                <div className="one">
                <h4>Digital Striker's Vision</h4>
                <p>To be recognized as a leading manufacturing and services company, enabling our customers to gain and sustain their competitive edge by leveraging emerging technologies and skills that support new business paradigms.</p>
                <p>To be the acknowledge provider of exceptional quality, reliability & risk mitigation services.</p>
                <p>To be an organization that is nimble and quick to market with new solutions, creating flexible technology platforms that increase access across our user network.</p>
                <p>To be a highly rated place to work, where employees are empowered, encouraged, inspired and rewarded within a meritocracy.</p>
                </div>
                <div className="two">
                    <h4>Digital Striker's values</h4>
                    <span><i class="ri-arrow-right-double-fill"></i> Customer Service</span>
                    <p>All our team focuses on delivering the highest level of service to our customers.</p>
                    <span><i class="ri-arrow-right-double-fill"></i> Environment Safety</span>
                    <p>We develop environmentally friendly technologies. Our solutions are designed to protect the environment. We work safely in a manner that protect & promotes the health & well-being of individuals & environment.</p>
                    <span><i class="ri-arrow-right-double-fill"></i> Integrity</span>
                    <p>We are open, honest and trustworthy in dealing with customers, suppliers, shareholders & the communities where we have an impact.</p>
                    <span><i class="ri-arrow-right-double-fill"></i> Caring About People</span>
                    <p>We show respect for all of our partners (clients, suppliers & employees). We are committed to creating a healthy working environment.</p>
                    <span><i class="ri-arrow-right-double-fill"></i> Caring Customer's Trust</span>
                    <p>Our honesty, loyalty, openness and fairness make us a trustworthy long-term partner for our customers.</p>
                    <span><i class="ri-arrow-right-double-fill"></i> Caring Excellence</span>
                    <p>We relentlessly pursue excellence in everything we do, every day.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default VisionPage
