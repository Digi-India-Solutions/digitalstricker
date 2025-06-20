import React from 'react'
import bg from './about.jpg'
import s1 from './srv-1.png'
import s2 from './srv-2.png'
import s3 from './srv-3.png'
import s4 from './srv-4.png'
import s5 from './srv-5.png'
import { Link } from 'react-router-dom'
import './AboutHomePage.css'

function AboutHomePage() {
  return (
    <section className='about-home-section'>
      <div className="container">
        <div className="heading">
            <span>About Us</span>
        </div>
        <div className="about-main">
            <div className="left">
                <img src={bg} alt="" />
            </div>
            <div className="right">
                <span>An MSME registered & ISO 9001:2015 Certified Company</span>
                <p> Its said by some employee that whenever 2 employees met after working hours they discuss about being future business partner with a lot of dreams and then OUR story took place. On 18th September 2015, 2 colleague being employee for almost 8 years working together for 3 back to back companies finally 1 GOOD/BAD evening under the lamppost just in front of Radisson Hotel in Delhi, decided to start their own business on the same platform with almost 000 paisa in their pocket, as in their last job because of lack of fund their salary was not credited for last 3 months.</p>
                <div className="service-img">
                    <img src={s1} alt="" />
                    <img src={s2} alt="" />
                    <img src={s3} alt="" />
                    <img src={s4} alt="" />
                    <img src={s5} alt="" />
                </div>
                <p>Some how they managed some money and started the new venture who will work as an infrastructure provider. On October 2015 the company gets registered and come into existence, and since then we have worked hard to fulfill our dreams which we have seen during our employment.</p>
                <Link className='main-button about-btn' to={'/about'}>Read More</Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHomePage
