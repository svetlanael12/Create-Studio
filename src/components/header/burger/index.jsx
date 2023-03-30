import React, { useState } from 'react'
import Network from '../../network';
import NavigationLink from '../../../routes/NavigationLink';

import './index.css'

export default function Burger() {
  const [burger, setBurger] = useState('')
  function burgerClick() {
    if (burger.length < 1) {
      return setBurger('active');
    }
    return setBurger('');
  }
  return (
    <div className={`burger ${burger}`}>
      <div className='hamburgerLines' onClick={burgerClick}>
        <span className='line line1'></span>
        <span className='line line2'></span>
        <span className='line line3'></span>
      </div>  
      <div className="burger__menu">
        <NavigationLink className='burger__item'/>
        <li className='burger__item'>
          <Network />
        </li>
        <li className='burger__item'><button className='blue-btn'>Оставить заявку</button></li>
      </div>
    </div>
  )
}
