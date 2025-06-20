import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="same-col col-1">
            <div className="heading">
              <span>Quick Links</span>
            </div>
            <ul className='footerlistsame'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About Us</Link></li>
              <li><Link to={'/client'}>Clients</Link></li>
              <li><Link to={'/presence'}>Our Presence</Link></li>
              <li><Link to={'/contact'}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="same-col col-2">
            <div className="heading">
              <span>Our Products</span>
            </div>
            <ul className='footerlistsame'>
              <li><Link to={'/active-product'}>Active Produts</Link></li>
              <li><Link to={'/passive-product'}>Passive Products</Link></li>
              <li><Link to={'/fiber-product'}>Optical Fiber Tools</Link></li>
              {/* <li><Link to={'/project-managment'}>Project Mangament Services</Link></li>
              <li><Link to={'/fiber'}>Optical Fiber Works</Link></li> */}
            </ul>
          </div>
          <div className="same-col col-3">
            <div className="heading">
              <span>Get In Touch</span>
            </div>
            <div className="adress-box footerlistsame">
              <div className="location adress-same">
                <i class="ri-map-pin-range-line"></i>
                <p>E-148, Mangolpuri Industrial area phase 2 pocket e new delhi 110034</p>
              </div>
              <div className="number adress-same">
              <i class="ri-phone-fill"></i>
                <p>8447168967 / 9999780986</p>
              </div>
              <div className="mail adress-same">
              <i class="ri-mail-fill"></i>
                <a href='mailto:baijnath@digitalstriker.in'>baijnath@digitalstriker.in</a>
              </div>
              <div className="mail-2 adress-same">
              <i class="ri-mail-fill"></i>
                <a href="mailto:deepak@digitalstriker.in">deepak@digitalstriker.in</a>
              </div>
            </div>
          </div>
          <div className="same-col col-4">
            <div className="heading">
              <span>Follow On</span>
            </div>
            <div className="footerlistsame social-link">
              <Link target='_blank' to={'https://www.facebook.com/Digitalstrikerdelhi'}><i class="ri-facebook-box-fill"></i></Link>
              <Link target='_blank' to={'https://x.com/StrikerDigital?t=o-VjG8EVJRJq47W5OJtUvg&s=09'}><i class="ri-twitter-fill"></i></Link>
              <Link target='_blank' to={'https://www.linkedin.com/in/digital-striker-private-limited-034167197/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><i class="ri-linkedin-box-fill"></i></Link>
              <Link target='_blank' to={'https://instagram.com/digital_striker_pvt_ltd?igsh=am9yYXNzd3YxNDNy'}><i class="ri-instagram-line"></i></Link>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <p>© 2024 Digital Striker. All Right Reseverd.</p>
          <p>Designed By <a href="https://digiindiasolutions.com/">Digi Solution</a></p>
        </div>
      </footer>
    </>
  )
}

export default Footer