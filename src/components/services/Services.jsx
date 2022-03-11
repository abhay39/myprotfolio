import React from 'react'
import './services.css'
import {BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id ='services'>
      <h5>What I Offer</h5>  
      <h2>Services</h2>

      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>  
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Offer comprehensive UI/UX services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Include branding, responsive web design, mobile app design,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Promotional designs using the latest tools and technologies.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>  
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Business analysis and consulting.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Quality assurance..</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web solution engineering.</p>
            </li>
           
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>  
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom iOS and Android app development..</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Progressive Web App development and Cross-platform development..</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI/UX design services.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services