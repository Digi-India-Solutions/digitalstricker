import React, { useEffect } from 'react'
import './ManagmentTeamPage.css'

function ManagmentTeamPage() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <section className='managmentTeam-section'>
      <div className="container">
        <div className="bg"></div>
        <div className="managment-main-container">
            <div className="heading">
                <span>Management Team</span>
            </div>
            <div className="main-container">
                <p className='color-light-white'>Our personnel are our strength and represent wide spectrum of disciplines namely engineering, operation and maintenance, Infrastructure and Network planning.</p>
                <p className='color-light-white'>Our technical team has years of extensive experience in providing management services for both public & private organizations.</p>
                <p className='color-light-white'>We have the capability of providing innovative solutions for even the most complex and challenging assignments considering the vast wealth of technical expertise and experience gathered over number years coupled with continual training.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ManagmentTeamPage
