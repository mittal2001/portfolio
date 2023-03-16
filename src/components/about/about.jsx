import React from 'react';
import './about.css';
import ME from '../../assets/me.jpeg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
const about = () => {
  return (
     <section id='about'>
  
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icons'/>
              <h5>Clients</h5>
              <small>200+ working Cients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icons'/>
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae praesentium delectus molestias vitae repellendus illum eius placeat nihil et explicabo, rem ducimus dolorem adipisci tenetur quia tempora ullam reiciendis ipsum?</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      
     </section>
  )
}

export default about
