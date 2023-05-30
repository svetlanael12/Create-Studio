import React from 'react'
import './index.css'

export default function StagesOfCreation() {
  const stages = [
    'Заполнение брифа', 
    'Заключение договора', 
    'Разработка технического задания и прототипа',
    'Разработка дизайн-макетов страниц',
    'Осуществление вёрстки и программирование',
    'Перенос сайта на Ваш хостинг и домен'
  ]
  return (
    <div className='stages-of-creation'>
      {
        stages.map((elem, ind) => {
          return (
            <div className='stages-of-creation__stage' key={ind}>
              <div className='stages-of-creation__number'>
                {ind + 1}
              </div>
              <div className='stages-of-creation__text'>
                {elem}
              </div>
            </div>
          )
        })
      }
      <div className='stages-of-creation__line'>
        {
          stages.map((elem, ind) => {
            return (
              <svg key={ind} className='stages-of-creation__circle' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" transform="rotate(-90 10 10)" fill="white"/>
              </svg>
            )
          })
        }
      </div>
    </div>
  )
}
