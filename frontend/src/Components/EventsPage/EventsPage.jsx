import React from 'react'
import './EventsPage.css'

import e1 from './e1.jpg'
import e2 from './e2.jpg'
import e3 from './e3.jpg'
import e4 from './e4.jpg'
import e5 from './e5.jpg'
import e6 from './e6.jpg'
import e7 from './e7.jpg'
import e8 from './e8.jpg'

function EventsPage() {
    const data = [
        {
            id : 1,
            img:e1
        },
        {
            id : 2,
            img:e2
        },
        {
            id : 3,
            img:e3
        },
        {
            id : 4,
            img:e4
        },
        {
            id : 5,
            img:e5
        },
        {
            id : 6,
            img:e6
        },
        {
            id : 7,
            img:e7
        },
        {
            id : 8,
            img:e8
        },
    ]
  return (
    <section className='event-section'>
      <div className="container">
        <div className="bg"></div>
        <div className="event-main-container">
            <div className="heading">
                <span>Events</span>
            </div>
            <div className="main-container">
                {
                    data && data.map((item,index)=>(
                        <div className="col" key={index}>
                            <img src={item.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default EventsPage
