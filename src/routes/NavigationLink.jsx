import React from 'react'
import { NavLink } from 'react-router-dom';
import { DEVELOPMENT_ROUTE, PORTFOLIO_ROUTE, ARTICLES_ROUTE } from '../constants/routes';

export default function NavigationLink({className}) {
  return (
    <>
      <NavLink to={DEVELOPMENT_ROUTE}>
        <li className={className}>
          Разработка сайтов
        </li>
      </NavLink>
      <NavLink to={PORTFOLIO_ROUTE}>
        <li className={className}>
          Портфолио
        </li>
      </NavLink>
      <NavLink to={ARTICLES_ROUTE}>
        <li className={className}>
          Статьи
        </li>
      </NavLink>
    </>
  )
}
