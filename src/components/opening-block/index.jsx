import React from 'react'
import styles from './index.module.css';

export default function OpeningBlock({children}) {
  return (
    <section className={styles.openingBlock}>
      {children}
    </section>
  )
}