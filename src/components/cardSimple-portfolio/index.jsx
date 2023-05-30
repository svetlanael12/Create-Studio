import React from 'react'

export default function CardSimplePortfolio({card}) {
  const {title, img, href} = card;
  return (
    <li className="our-portfolio__item">
      <a href={href} target='_blank' rel='noreferrer'>
        <div className='our-portfolio__imgWrp'>
          <img src={img} alt="portfolio" className='our-portfolio__img'/>
        </div>
        <p><strong>{title}</strong></p>
      </a>
    </li>
  )
}
