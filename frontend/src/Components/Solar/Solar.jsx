import React, { useEffect } from 'react'
import './Solar.css'

function Solar() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='solar-section'>
      <div className="container">
        <div className="bg"></div>
        <div className="solar-main-box">
            <div className="heading">
                <span>Solar Services</span>
            </div>
            <div className="main-container">
                <p className='color-light-white'>Starting from delivering small-scale projects in the Delhi/NCR Since 2016, we quickly expanded our presence across INDIA, Our mission is to be the lowest-cost Service provider in India Since inception, we have achieved a substantial reduction in service cost, which includes a significant decrease in balance of systems costs due in part to our value engineering, design and procurement efforts. As the lowest cost service provider in India, we believe that we are a well-established brand that has grown alongside the rapidly growing Indian solar market. We have proven to be a reliable service partner with successful and expedient execution of our development pipeline. Our in-house Procurment capabilities enhance our ability to be flexible with our choices of Material & accessories, which allows us to choose high quality equipment while optimizing the combination of total cost and yield. Our in-house O&M capabilities maximize project yield and performance through proprietary system monitoring and adjustments.</p>
                <p className='color-light-white'>We have already worked for ADDWATT power, ASUN SOLAR, Sterling and Wilson, Mytrah energy pvt. Ltd. Yutaka India etc. We have also worked as a supply chain partner for such Solar companies.</p>
                <p className='color-light-white'>In a nut shell till date we have completed approx 45 MW PAN INDIA.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Solar
