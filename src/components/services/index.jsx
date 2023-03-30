import React from 'react'
import styles from './index.module.css';

export default function Services({children}) {
  return (
    <ul className={styles.services}>
      {children}
    </ul>
  )
}

