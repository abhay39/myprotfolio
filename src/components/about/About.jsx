import React from 'react'
import './about.css'
import me_about from '../../assets/me_about.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'
import first from '../../assets/first.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
           <div className="about__me-image">
              <img src={first} alt='profile'/> 
            </div>
        </div>  

        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <RiAwardFill className="about__icon"/>
                <h5>Expericence</h5>
                <small>Studying B.Tech (CSE)</small>
               </article>  
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>Working As frerlancer</small>
               </article>  
              <article className="about__card">
                <VscFolderActive className="about__icon"/>
                <h5>Projects</h5>
                <small>15+ Completed Projects</small>
               </article>  
            </div>
            <p>
              I am a Software Developer with a background in Graphic Design. I have a passion for creating clean and elegant Software and mobiles applications. I am a self-motivated individual who is always looking for new challenges and opportunities.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About