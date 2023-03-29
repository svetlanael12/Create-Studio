import React from 'react'
import Logo from '../logo';
import Navigation from '../navigation';
import Burger from './burger';
import styles from './index.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation header/>
      <p>
        <a href="" type='tel:+79897654321'>+7 (989) 765 43 21</a>
      </p>
      <div className={styles.btnWrp}>
        <button className='blue-btn'>Оставить заявку</button>
      </div>
      <Burger />
    </div>
  )
}
