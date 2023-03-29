import React from 'react'
import styles from './index.module.css';
import { NAVIGATION } from '../../constants/navigation';
import NavItem from './nav-item';

export default function Navigation({header}) {
  return (
    <ul className={header ? styles.headerNav : styles.footerNav}>
      {
        NAVIGATION.map((nav, ind) => <NavItem key={ind} text={nav}/>)
      }
    </ul>
  )
}