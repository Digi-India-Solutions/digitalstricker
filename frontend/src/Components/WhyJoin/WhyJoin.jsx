import React, { useEffect } from 'react'
import './WhyJoin.css'

function WhyJoin() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='whyJoin-section'>
      <div className="container">
        <div className="bg"></div>
        <div className="whyJoin-main-container">
            <div className="heading">
                <span>Why Join Us</span>
            </div>
            <div className="main-container">
                <p className='color-light-white'>Working in this company means being a part of an organization that offers constant support, both professionally and personally. The environment at Digital Striker encourages leadership, and provides an opportunity to succeed through a tradition of teamwork.</p>
                <div className="box-1 same-box">
                    <span>Why we ?</span>
                    <p className='color-light-white'>Digital Striker is a company with wide operations, a strong vision and a focused business model to sustain its growth in a dynamic and challenging global market! You will find a wealth of opportunities to meet your career aspirations. Come with us and build the dream career you always wanted!</p>
                </div>
                <div className="box-2 same-box">
                    <span>Work culture ?</span>
                    <p className='color-light-white'>At Digital Striker, the work environment consists of strong coordination and spirited teamwork, active and full of zeal. The idea is to make work as interesting as possible. We provide our employees a working culture that is full of opportunities and logical positivism. Coupled with the cutting-edge infrastructure and technology, It makes life more stimulating and enriching experience for an employee.</p>
                    <p className='color-light-white'>We build every relationship with trust and integrity - be it our clients or our employees. We enable the delivery of exceptional service to the customer so that it is viewed not as an exception, but as "the way we do business".</p>
                </div>
                <div className="box-2 same-box">
                    <span>What we offer ?</span>
                    <p className='color-light-white'>Digital Striker offers you one of the best environments for career development and progression. A strong performance culture and a fully automated in-house appraisal system ensure that your career is chalked out and defined in line with your individual growth, and the overall growth of the organization.</p>
                    <p className='color-light-white'>Digital Striker ensures that career development activities are aligned with organizational objectives to achieve growth for both employees and the company. The company provides immense opportunities to its employees to upgrade their skills and thereby achieve their career goals.</p>
                </div>
                <div className="box-4 same-box">
                    <span>How to Build an Digital Striker Career?</span>
                    <h5>If You</h5>
                    <div className="list">
                    <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> Have the ability to translate business objectives into technical solutions, technical skills to build the vision, and Project skills to deliver on time.</p>
                    <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> Have commitment to be a top performer in delivering to our clients.</p>
                    <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> Have strong communication skills.</p>
                    <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> Have a team spirit.</p>
                    <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> Have a college degree or a significant experience in telecom field.</p>
                    </div>
                    <p className='color-light-white'>We are committed to being a highly respected company in the field, in the eyes of our customers, shareholders, communities and employees. To accomplish this bold objective, we require talented, highly motivated people with diverse perspectives who will focus on customers, excellence and growth. If you are interested in learning new things, this is a great place to start, If you already have experience in the industry, it may be a place to take your career to the next level.</p>
                    <h3>We have started hiring for various positions across our organization.</h3>
                    <p className='color-light-white'>Your new career is just a few steps away.</p>
                    <p className='color-light-white'>Send Ur CV at <a href="mailto: Baijnath@digitalstriker.in">Baijnath@digitalstriker.in</a></p>
                    <p className='color-light-white'>You can also contact at the address and communication details given on contact us page.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJoin
