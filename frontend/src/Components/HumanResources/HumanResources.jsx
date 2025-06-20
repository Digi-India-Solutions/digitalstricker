import React, { useEffect } from 'react'
import './HumanResources.css'

function HumanResources() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='HumanResources-section'>
            <div className="container">
                
            <div className="bg"></div>
            <div className="humanresources-main-container">
                <div className="heading">
                    <span>Human Resources & Development</span>
                </div>
                <div className="main-container">
                    <div className="box-1 same-box">
                        <span>Recruitment Policies and Procedures</span>
                        <p className='color-light-white'>Technically qualified Graduate Engineers with more than 5-6 Years of field experience are selected as Supervisors for Installation and O & M activities.</p>
                        <p className='color-light-white'>Every Team has 80% experienced and 20% fresher who are undergoing ON THE JOB TRAINING. Once this on job training is completed the candidates are re-evaluated with feedback from the Supervisors and other team mates and if found satisfactory he is inducted as a regular team member.</p>
                    </div>
                    <div className="box-2 same-box">
                        <h3>Fresh Candidates Selected Direct From Colleges Undergo A Written Test And Interview. The Selection Criterion Is Given Below:</h3>
                        <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> a.) Engineering Degree Holders 60%</p>
                        <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> b.) Diploma Holders 30%</p>
                        <p className='color-light-white'><i class="ri-arrow-right-double-fill"></i> c.) ITI/Polytechnic 10%</p>
                        <p className='color-light-white'>Non technical personnel selected for outdoor installation and manual jobs and are not technically qualified are subjected to oral test. They are assessed through Identification of tools, Operational efficiency of crimping tools, Power tools, Awareness skill of Site Installation Procedures, Tower Climbing experience, Knowledge of Safety Devices, etc.</p>
                    </div>
                    <div className="box-2 same-box">
                        <span>On Job Training</span>
                        <p className='color-light-white'>All fresher and new recruits are allocated to existing team Supervisors for on job training, for a month where they are mostly observing daily activities or working under the strict supervision of Supervisors. They are also provided classroom trainings by our Engineers on best practices to be followed while working on sites and the quality standards to be maintained.</p>
                    </div>
                    <div className="box-2 same-box">
                        <span>Internal Trainings</span>
                        <p className='color-light-white'>Regular trainings and workshops are conducted by professional trainers and senior employees to update and refine the skills and knowledge base of all employees.</p>
                    </div>
                    <div className="box-2 same-box">
                        <span>What we offer ?</span>
                        <p className='color-light-white'>Digital Striker offers you one of the best environments for career development and progression. A strong performance culture and a fully automated in-house appraisal system ensure that your career is chalked out and defined in line with your individual growth, and the overall growth of the organization.</p>
                        <p className='color-light-white'>Digital Striker ensures that career development activities are aligned with organizational objectives to achieve growth for both employees and the company. The company provides immense opportunities to its employees to upgrade their skills and thereby achieve their career goals.</p>
                    </div>
                </div>
            </div>
            </div>
            
        </section>
    )
}

export default HumanResources
