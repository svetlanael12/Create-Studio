import React from 'react'
import CardPortfolio from '../components/card-portfolio';

import { PORTFOLIO } from '../constants/portfolio';
import Application from '../components/application';

export default function Portfolio() {
  return (
    <div className='App app-portfolio'>
      <h2>Выполненные проекты</h2>
      <ul className='card-portfolio'>
        {
          PORTFOLIO.map((card, ind) => <CardPortfolio key={ind} card={card} />)
        }
      </ul>
      <h2>Мы берем проекты <span className='text-blue'>любой</span> сложности</h2>
      <p>Мы готовы обсудить ваш проект. Вместе с вами сформулируем цели и поставим задачи. Мы ответим на все ваши вопросы и составим индивидуальное предложение. Для этого <a className='text-blue' href="#application">оставьте заявку</a> на сайте или позвоните по номеру: <a href="tel:+79263000000" className='text-blue'>8 (926) 300 00 00</a></p>
      <h2>Оставить заявку на консультацию</h2>
      <Application />
    </div>
  )
}
