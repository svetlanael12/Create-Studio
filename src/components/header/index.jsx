import React, { useEffect } from 'react'
import Logo from '../logo';
import Navigation from '../navigation';
import Burger from './burger';
import styles from './index.module.css';

export default function Header({scroll}) {
  return (
    <div className={`${styles.header} ${scroll < 50 ? "" : styles.scroll}`}>
      <Logo />
      <Navigation header/>
      <p>
        <a href="" type='tel:+79897654321'>+7 (989) 765 43 21</a>
      </p>
      <div className={styles.btnWrp}>
        <a href='#application' className='blue-btn'>Оставить заявку</a>
      </div>
      <Burger />
    </div>
  )
}
