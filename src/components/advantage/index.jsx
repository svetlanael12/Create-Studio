import React from 'react'
import styles from './index.module.css';

export default function Advantage({children}) {
  return (
    <ul className={styles.advantageWrp}>
      {children}
    </ul>
  )
}
