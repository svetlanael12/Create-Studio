import React from 'react'
import OpeningBlock from '../opening-block';
import styles from './index.module.css';
import styl from '../opening-block/index.module.css'

export default function Main() {
  return (
    <div className={styles.main}>
      <OpeningBlock>
        <h1>Create Studio</h1>
        <div className={styl.wrpText}>
          <p><strong>Веб-студия - полного цикла</strong></p>
          <p className='pg-light'>Мы оказываем полный спектр услуг по разработке веб-сайтов, их дальнейшему продвижению и поддержке.</p>
          <div className={styl.btnWrap}>
            <button className='blue-btn'>Получить консультацию</button>
          </div>
        </div>
      </OpeningBlock>
    </div>
  )
}
