import React, { useEffect, useState } from 'react'
import './SinglePage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SinglePage() {
    const [allProduct , setAddProduct] = useState([])
    const {id} = useParams()
    // console.log(id)

    useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
  }, [])

    useEffect(()=>{
        const fectchdata = async ()=>{
            try {
                const response = await axios.get(`https://api.digitalstriker.in/api/singleProduct/${id}`)
                console.log(response.data.data)
                setAddProduct(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
        fectchdata()
    },[])
  return (
    <section className='singlepage-section'>
      <div className="container">
        <div className="heading">
          <span>Product Detail</span>
        </div>
        <div className="main-container">
          <div className="img">
            <img src={allProduct.img} alt={allProduct.name} />
          </div>
          <div className="product-detail">
            <h2>{allProduct.name}</h2>
            <p>{allProduct.des}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SinglePage
