import React from 'react'
import './index.css'

export default function CardPortfolio({card}) {
  const {title, description, year, technology, img, href} = card;
  return (
    <li className='card-portfolio__item'>
      <a href={href}>
        <div className='card-portfolio__wrapper-img'>
          <img src={img} alt="portfolio" className='card-portfolio__img'/>
        </div>
        <div className='card-portfolio__wrapper'>
          <p className='card-portfolio__title'><strong>{title}</strong></p>
          <div className='card-portfolio__wrapper-content'>
            <p className='pg-light'>{description}</p>
            <div className='card-portfolio__footer'>
              <p className='pg-light'>{technology}</p>
              <p className='text-blue pg-light'>{year}</p>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}
