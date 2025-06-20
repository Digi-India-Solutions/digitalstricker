import React from 'react'
import icon from './icon.png'
import './whatsapp.css'
const Whatasaap = () => {
  return (
    <div className='whatsapp'>
      <div>
        <a target='_blank' href="https://api.whatsapp.com/send?phone=918447168967"><img src={icon} width={55} alt="" /></a>
      </div>
    </div>
  )
}

export default Whatasaap
