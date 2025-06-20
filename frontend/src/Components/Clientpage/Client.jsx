import React, { useEffect } from 'react'
import './Client.css'
import s1 from './c1.png'
import s2 from './c2.png'
import s3 from './c3.png'
import s4 from './c4.png'
import s5 from './c5.png'
import s6 from './c6.png'
import s7 from './c7.png'
import s8 from './c8.png'
import s9 from './c9.png'
import s10 from './s10.png'
import s11 from './c11.png'
import s12 from './s12.png'

function Client() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='clientpage-section'>
            <div className="container">
                <div className="bg"></div>
                <div className="client-main-container">
                    <div className="heading">
                        <span>Our Clients</span>
                    </div>
                    <div className="main-container">
                        <div className="col-1 same-col">
                            <img src={s1} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s2} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s3} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s4} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s5} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s6} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s7} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s8} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s9} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s10} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s11} alt="" />
                        </div>
                        <div className="col-1 same-col">
                            <img src={s12} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client
