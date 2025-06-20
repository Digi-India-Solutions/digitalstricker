import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from './logo1.png'

function Header() {

    const [isActiveAbout, setIsActiceAbout] = useState(false)
    const [isActiveService, setIsActiceService] = useState(false)
    const [isActiveCareer, setIsActicecareer] = useState(false)
    const [isActiveclient, setIsActiceclient] = useState(false)
    const [isActiveMenuDropdown, setIsActiveMenuDropDown] = useState(false)

    const handleActiveAbout = () => {
        setIsActiceAbout(!isActiveAbout)
    }

    const handleDeActiveAbout = () => {
        setIsActiceAbout(false)
    }

    const handleActiveService = () => {
        setIsActiceService(!isActiveService)
    }

    const handleDeActiveService = () => {
        setIsActiceService(false)
    }

    const handleActiveCareer = () => {
        setIsActicecareer(!isActiveCareer)
    }

    const handleDeActiveCareer = () => {
        setIsActicecareer(false)
    }

    const handleActiveClient = () => {
        setIsActiceclient(!isActiveclient)
    }

    const handleDeActiveClient = () => {
        setIsActiceclient(false)
    }

    const handleActiveMenuDropDown = () => {
        setIsActiveMenuDropDown(!isActiveMenuDropdown)
    }

    const handleDeActiveMenuDropDown = () => {
        setIsActiveMenuDropDown(false)
    }

    return (
        <header className='header'>
            <div className="container">
                <Link onClick={handleDeActiveMenuDropDown} to={'/'} className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <nav>
                    <ul className={`main-ul ${isActiveMenuDropdown ? 'mainmenudropdown' : ''}`}>
                        <li>
                            <Link className='for-white' onClick={handleDeActiveMenuDropDown} to={'/'}>Home</Link>
                        </li>
                        <li onMouseEnter={handleActiveAbout} onMouseLeave={handleDeActiveAbout} className='about-pointer'>
                            <Link className='for-white' >About Us</Link>
                            <ul className={`about-hover ${isActiveAbout ? 'active-about-hover' : ''}`}>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/about'}>Company Overview</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/mission'}>Our Mission</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/vision'}>Our Vision & Values</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/managment'}>Management Team</Link>
                            </ul>
                        </li>
                        <li onMouseEnter={handleActiveService} onMouseLeave={handleDeActiveService} className='services-pointer'>
                            <Link className='for-white'>Products</Link>
                            <ul className={`services-hover ${isActiveService ? 'active-service-hover' : ''}`}>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/active-product'}>Active Produts</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/passive-product'}>Passive Products</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/fiber-product'}>Optical Fiber Tools</Link>
                                {/* <Link onClick={handleDeActiveMenuDropDown} to={'/solar'}>Solar Services</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/project-managment'}>Project Mangament Services</Link> */}
                            </ul>
                        </li>
                        <li className='career-pointer' onMouseEnter={handleActiveCareer} onMouseLeave={handleDeActiveCareer}>
                            <Link className='for-white'>Career</Link>
                            <ul className={`career-hover ${isActiveCareer ? 'active-career-hover' : ''}`}>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/why-join'}>Why Join Us</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/resources'}>Human Resources & Development</Link>
                            </ul>
                        </li>
                        <li className='client-pointer' onMouseEnter={handleActiveClient} onMouseLeave={handleDeActiveClient}>
                            <Link className='for-white'>Our Clients</Link>
                            <ul className={`client-hover ${isActiveclient ? 'active-client-hover' : ''}`}>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/client'}>Clients</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/presence'}>Our Presence</Link>
                            </ul>
                        </li>
                        <li>
                            <Link onClick={handleDeActiveMenuDropDown} className='for-white' to={'/events'}>Events</Link>
                        </li>
                        <li>
                            <Link onClick={handleDeActiveMenuDropDown} className='for-white' to={'/contact'}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={handleActiveMenuDropDown} className="menu-bar">
                    <i class="ri-menu-line"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
