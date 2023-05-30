import React from 'react'
import './index.css'

import { NavLink } from 'react-router-dom';
import { PORTFOLIO_ROUTE } from '../../constants/routes';

import { PORTFOLIO } from '../../constants/portfolio';
import CardSimplePortfolio from '../cardSimple-portfolio';

export default function OurPortfolio() {
  return (
    <div className='our-portfolio'>
      <ul className='our-portfolio__list'>
        {
          PORTFOLIO.map((card, ind) => {
            return <CardSimplePortfolio key={ind} card={card} />
          })
        }
      </ul>
      <NavLink to={PORTFOLIO_ROUTE}>
        <button className='blue-btn'>Смотреть другие проекты</button>
      </NavLink>
    </div>
  )
}
