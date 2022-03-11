import React from 'react'
import './protfolio.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.png'

const Protfolio = () => {
  return (
    <section id='protfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container protofoli__container">
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image1} alt="image1" />
            </div>
            <h3>ENews App</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/abhay39/ENewsApp' className='btn' target='_blank'>Github</a>
              <a href='https://imgur.com/a/tpx2JQc' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image2} alt="image1" />
            </div>
            <h3>Instagram Clone</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/abhay39/instagramCLone' className='btn' target='_blank'>Github</a>
              <a href='hhttps://imgur.com/a/R2lY5Yc' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image3} alt="image1" />
            </div>
            <h3>Tinder Clone</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/abhay39/find-your-match' className='btn' target='_blank'>Github</a>
              <a href='https://imgur.com/a/doTcU7i' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image4} alt="image1" />
            </div>
            <h3>Post Box Office Management System</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/abhay39/Post-Office-Management-System' className='btn' target='_blank'>Github</a>
              <a href='https://imgur.com/a/pMbjPRF' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image5} alt="image1" />
            </div>
            <h3>Income Expense Manager</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/abhay39/Income-Expanse-Manager' className='btn' target='_blank'>Github</a>
              <a href='https://imgur.com/a/IYHVJLy' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image6} alt="image1" />
            </div>
            <h3>Kaun Banega Crorepati</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/abhay39/KBC' className='btn' target='_blank'>Github</a>
              <a href='https://imgur.com/a/vPHC49a' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Protfolio