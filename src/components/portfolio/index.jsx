import React from 'react'
import './index.css'

import image1 from '../assets/img/portfolio-1.png';
import image2 from '../assets/img/portfolio-2.png';
import image3 from '../assets/img/portfolio-3.png';
import { NavLink } from 'react-router-dom';
import { PORTFOLIO_ROUTE } from '../../constants/routes';

export default function OurPortfolio() {
  return (
    <div className='our-portfolio'>
      <ul className='our-portfolio__list'>
        <li className="our-portfolio__item">
          <a href="https://svetlanael12.github.io/virtual/" target='_blank' rel='noreferrer'>
            <div className='our-portfolio__imgWrp'>
              <img src={image1} alt="portfolio" className='our-portfolio__img'/>
            </div>
            <p><strong>Разработка сайта компании для аутстаффинговой компании АКР</strong></p>
          </a>
        </li>
        <li className="our-portfolio__item">
          <a href="https://svetlanael12.github.io/cloudbudget/" target='_blank' rel='noreferrer'>
            <div className='our-portfolio__imgWrp'>
              <img src={image2} alt="portfolio" className='our-portfolio__img'/>
            </div>
            <p><strong>Интернет магазин ароматических свечей</strong></p>
          </a>
        </li>
        <li className="our-portfolio__item">
          <a href="https://svetlanael12.github.io/lending-mobileApp/" target='_blank' rel='noreferrer'>
            <div className='our-portfolio__imgWrp'>
              <img src={image3} alt="portfolio" className='our-portfolio__img'/>
            </div>
            <p><strong>Дизайн для Роса Шале</strong></p>
          </a>
        </li>
        <li className="our-portfolio__item">
          <a href="https://svetlanael12.github.io/lending-mobileApp/" target='_blank' rel='noreferrer'>
            <div className='our-portfolio__imgWrp'>
              <img src={image3} alt="portfolio" className='our-portfolio__img'/>
            </div>
            <p><strong>Сайт для бригады строителей</strong></p>
          </a>
        </li>
        <li className="our-portfolio__item">
          <a href="https://svetlanael12.github.io/cloudbudget/" target='_blank' rel='noreferrer'>
            <div className='our-portfolio__imgWrp'>
              <img src={image2} alt="portfolio" className='our-portfolio__img'/>
            </div>
            <p><strong>CRM-системы для строительной компании</strong></p>
          </a>
        </li>
      </ul>
      <NavLink to={PORTFOLIO_ROUTE}>
        <button className='blue-btn'>Смотреть другие проекты</button>
      </NavLink>
    </div>
  )
}
