import React, { useEffect } from 'react'
import './CompanyOverView.css'
import s1 from './s1.jpg'
import s2 from './s2.jpg'
import s3 from './s3.jpg'
import s4 from './s4.jpg'

function CompanyOverView() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <section className='companyoverview-section'>
      <div className="container">
        <div className='bg'></div>
        <div className="company-main-container">
          <div className="heading">
            <span>About Us</span>
          </div>
          <div className="main-container">
            <span>“An MSME registered & ISO 9001:2015 Certified Company”</span>
            <p>Its said by some employee that whenever 2 employees met after working hours they discuss about being future business partner with a lot of dreams and then OUR story took place. On 18th September 2015, 2 colleague being employee for almost 8 years working together for 3 back to back companies finally 1 GOOD/BAD evening under the lamppost just in front of Radisson Hotel in Delhi, decided to start their own business on the same platform with almost 000 paisa in their pocket, as in their last job because of lack of fund their salary was not credited for last 3 months.
            </p>
            <div className="img-box">
              <img src={s1} alt="" />
              <img src={s2} alt="" />
              <img src={s3} alt="" />
              <img src={s4} alt="" />
            </div>
            <p>Some how they managed some money and started the new venture who will work as an infrastructure provider. On October 2015 the company gets registered and come into existence, and since then we have worked hard to fulfill our dreams which we have seen during our employment.
            </p>
            <p>Incorporated in the year 2015, we finally get chances to work for Reliance Jio in Punjab followed  by Delhi, Uttrakhand, the same stereotype job till 2020. while our major client was  RJIO, we also worked for other telecom major along with OYO hotels.
            </p>
            <p>Again in December 2021 we have seen the growth and scatterings of fiber business in ndia we plan to move into this and startred a new company with the name of <span>DIGITAL STRIKER PVT LTD.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverView
