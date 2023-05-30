import React from 'react'
import { NavLink } from 'react-router-dom'
import { ABOUT_ROUTE } from '../constants/routes'

export default function NotFoundPage() {
  return (
    <div className='not-found-page'>
      <h2>Страница не найдена</h2>
      <NavLink to={ABOUT_ROUTE} className='blue-btn'>Вернуться на главную</NavLink>
    </div>
  )
}
