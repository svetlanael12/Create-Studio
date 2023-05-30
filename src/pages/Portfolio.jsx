import React from 'react'
import CardPortfolio from '../components/card-portfolio';

import { PORTFOLIO } from '../constants/portfolio';

export default function Portfolio() {
  return (
    <div className='App app-portfolio'>
    <h2>Выполненные проекты</h2>
      <ul className='card-portfolio'>
        {
          PORTFOLIO.map((card, ind) => <CardPortfolio key={ind} card={card} />)
        }
      </ul>
    </div>
  )
}
