import React, { useEffect } from 'react'
import styles from './index.module.css';
import NavigationLink from '../../routes/NavigationLink';

export default function Navigation({header}) {
  return (
    <ul className={header ? styles.headerNav : styles.footerNav}>
      <NavigationLink className={styles.item}/>
    </ul>
  )
}