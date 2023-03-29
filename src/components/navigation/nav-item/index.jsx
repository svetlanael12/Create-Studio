import React from 'react'
import styles from './index.module.css';

export default function NavItem({text}) {
  return (
    <li className={styles.item}>
      <a href="#">{text}</a>
    </li>
  )
}