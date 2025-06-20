import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import CompanyOverView from './Components/CompanyOverView/CompanyOverView'
import MissionPage from './Components/MissionPage/MissionPage'
import VisionPage from './Components/VisionPage/VisionPage'
import ManagmentTeamPage from './Components/ManagmentTeamPage/ManagmentTeamPage'
import Telecom from './Components/Telecom/Telecom'
import Manufacturing from './Components/Manufacturing/Manufacturing'
import Solar from './Components/Solar/Solar'
import ProjectManagment from './Components/ProjectManagment/ProjectManagment'
import FiberCable from './Components/FiberCable/FiberCable'
import WhyJoin from './Components/WhyJoin/WhyJoin'
import HumanResources from './Components/HumanResources/HumanResources'
import Client from './Components/Clientpage/Client'
import OurPresence from './Components/OurPresence/OurPresence'
import Contact from './Components/Contact/Contact'
import EventsPage from './Components/EventsPage/EventsPage'
import Auth from './Components/Auth/Auth'
import SinglePage from './Components/Single-page/SinglePage'
import { Toaster } from 'react-hot-toast'
import Login from './Components/Auth/Login'


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<CompanyOverView />} />
          <Route path='/mission' element={<MissionPage />} />
          <Route path='/vision' element={<VisionPage />} />
          <Route path='/managment' element={<ManagmentTeamPage />} />
          <Route path='/fiber-product' element={<Telecom />} />
          <Route path='/passive-product' element={<Manufacturing />} />
          <Route path='/solar' element={<Solar />} />
          <Route path='/project-managment' element={<ProjectManagment />} />
          <Route path='/active-product' element={<FiberCable />} />
          <Route path='/why-join' element={<WhyJoin />} />
          <Route path='/resources' element={<HumanResources />} />
          <Route path='/client' element={<Client />} />
          <Route path='/presence' element={<OurPresence />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/admin/owner-access' element={<Auth />} />
          <Route path='/auth/owner-login' element={<Login />} />
          <Route path='/active-product/singleProduct/:id' element={<SinglePage />} />
          <Route path='/passive-product/singleProduct/:id' element={<SinglePage />} />
          <Route path='/fiber-product/singleProduct/:id' element={<SinglePage />} />
        </Routes>
        <Footer />
        <Toaster/>
      </Router>

    </>
  )
}

export default App
