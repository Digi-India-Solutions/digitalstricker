import React, { useEffect, useState } from 'react'
// import './FiberCable.css'
import './FIberCable.css'

import axios from 'axios'
import { Link } from 'react-router-dom'


function FiberCable() {
    const [allProduct, setAllProduct] = useState([])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    useEffect(() => {
        const allproduct = async () => {
            try {
                const response = await axios.get('https://api.digitalstriker.in/api/allproduct')
                console.log(response.data.data)
                setAllProduct(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
        allproduct()
    }, [])

    const activeProduct = allProduct.filter((item) => {
        return item.category == 'Active Product';
    });

    console.log(activeProduct)

    return (
        <section className='FiberCable-section'>
            <div className="container">
                <div className="bg"></div>
                <div className="fibercable-main-container">
                    <div className="heading">
                        <span>Active Produts</span>
                    </div>
                    <div className="main-container">
                        <div className="same-row row-1">
                            <div className="bottom">
                                {
                                    activeProduct && activeProduct.map((item, index) => (
                                        <Link to={`singleProduct/${item._id}`} className="col" key={index}>
                                            <div className="img">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                            <div className="detail">
                                                <p>{item.name}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                                
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FiberCable
