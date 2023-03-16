import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className='experience__frontened'>
         <h3>Frontened Development</h3>
         <div className="experience__content">
         
         <article className='experiece__details'>
               <BsPatchCheckFill className='experience_details-icon'/>
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
               </div>
          </article>
          <article className='experiece__details'>
               <BsPatchCheckFill className='experience_details-icon'/>
               <div>
               <h4>CSS</h4>
               <small className='text-light'>Intermediate</small>
               </div>
          </article>
          <article className='experiece__details'>
               <BsPatchCheckFill className='experience_details-icon'/>
               <div>
               <h4>JavaScript</h4>
               <small className='text-light'>Experienced</small>
               </div>
          </article>
          <article className='experiece__details'>
               <BsPatchCheckFill className='experience_details-icon'/>
               <div>
               <h4>React JS</h4>
               <small className='text-light'>Intermediate</small>
               </div>
          </article>
          <article className='experiece__details'>
               <BsPatchCheckFill className='experience_details-icon'/>
               <div>
               <h4>Next JS</h4>
               <small className='text-light'>Beginner</small>
               </div>
          </article>
         </div>
      </div>

      <div className='experience__backened'>
           
      <h3>Backened Development</h3>
         <div className="experience__content">
         
         <article className='experiece__details'>
               <BsPatchCheckFill className='experience_details-icon'/>
               <div>
               <h4>Node JS</h4>
               <small className='text-light'>Intermediate</small>
               </div>
          </article>
          <article className='experiece__details'>
               <BsPatchCheckFill className='experience_details-icon'/>
               <div>
               <h4>MongoDB</h4>
               <small className='text-light'>Intermediate</small>
               </div>
          </article>
          <article className='experiece__details'>
               <BsPatchCheckFill className='experience_details-icon'/>
               <div>
               <h4>PHP</h4>
               <small className='text-light'>Intermediate</small>
               </div>
          </article>
          <article className='experiece__details'>
               <BsPatchCheckFill className='experience_details-icon'/>
               <div>
               <h4>MySQL</h4>
               <small className='text-light'>Intermediate</small>
               </div>
          </article>
         
         </div>
      </div>
    </div>
    </section>
  )
}

export default experience
