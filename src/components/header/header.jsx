import React from 'react';
import './header.css';
import CTA from './cta';
import ME from '../../assets/me.jpeg';
import Headersocials from './Headersocials';
const header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Tanmay Mittal</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA/>
            <Headersocials/>
            <div className='me'>
              <img src={ME} alt=''/>
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default header
