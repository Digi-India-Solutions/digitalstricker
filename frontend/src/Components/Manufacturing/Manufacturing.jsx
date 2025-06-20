import React, { useEffect, useState } from 'react'
import './Manufacturing.css'


import axios from 'axios'
import { Link } from 'react-router-dom'

function Manufacturing() {
    const [allProduct , setAllProduct] = useState([])


    useEffect(()=>{
        const fetchdata = async()=>{
            try {
                const response = await axios.get('https://api.digitalstriker.in/api/allproduct')
                // console.log(response.data.data)
                setAllProduct(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    },[])

    const passiveProduct = allProduct.filter((item)=>{
        return item.category == "Passive Product"
    })

    // console.log(passiveProduct)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='FiberCable-section'>
            <div className="container">
                <div className="bg"></div>
                <div className="fibercable-main-container">
                    <div className="heading">
                        <span>Passive Products</span>
                    </div>
                    <div className="main-container">
                        <div className="same-row row-1 wire-row">
                            <div className="bottom">
                                {
                                    passiveProduct && passiveProduct.map((item,index)=>(
                                        <Link to={`singleProduct/${item._id}`} className="col">
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

export default Manufacturing
