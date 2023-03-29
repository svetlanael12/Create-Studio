import React, { useState } from 'react'
import styles from './index.module.css';
import './index.css'
import { NAVIGATION } from '../../../constants/navigation';
import Network from '../../network';

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
        {NAVIGATION.map((nav, ind) => <li className='burger__item' key={ind}><a href="#">{nav}</a></li>)}
        <li className='burger__item'>
          <Network />
        </li>
        <li className='burger__item'><button className='blue-btn'>Оставить заявку</button></li>
      </div>
    </div>
  )
}
