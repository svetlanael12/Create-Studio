import React from 'react';
import './index.css';

export default function OurProgress() {
  return (
    <div className='ourProgress_wrp'>
      <span className='linear-progress'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((elem, ind) => {
            return <svg key={ind} className='linear-progress__circle' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" transform="rotate(-90 10 10)" fill="white"/>
            </svg>
          })
        }
      </span>
      <ul className='our-progress'>
        <li className='our-progress__item'>
          <h2>08/2014</h2>
          <p className='pg-light'>мы заявили о себе на рынке графического дизайна и иллюстрирования</p>
        </li>
        <li className='our-progress__item'>
          <h2>2015</h2>
          <p className='pg-light'>запустили направление по дизайну полиграфической продукции и упаковки</p>
        </li>
        <li className='our-progress__item'>
          <h2>2016</h2>
          <p className='pg-light'>дорабатывали сайты и занимались разработкой наружной рекламы</p>
        </li>
        <li className='our-progress__item'>
          <h2>06/2017</h2>
          <p className='pg-light'>запустили направление по web-разработке (front-end)</p>
        </li>
        <li className='our-progress__item'>
          <h2>10/2017</h2>
          <p className='pg-light'>запустили направлениепо back-end разработке</p>
        </li>
        <li className='our-progress__item'>
          <h2>2018</h2>
          <p className='pg-light'>расширили перечень предоставляемых услуг в сфере веб-разработки</p>
        </li>
        <li className='our-progress__item'>
          <h2>11/2019</h2>
          <p className='pg-light'>запустили направление по сопровождению проектов клиентов</p>
        </li>
        <li className='our-progress__item'>
          <h2>2020</h2>
          <p className='pg-light'>запустили направление по разработке интернет-магазинов</p>
        </li>
        <li className='our-progress__item'>
          <h2>2022</h2>
          <p className='pg-light'>запустили направление по сео-продвижению</p>
        </li>
      </ul>
    </div>
  )
}
