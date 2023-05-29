import React from 'react'
import './index.css';
import Logo from '../logo';
import NavigationLink from '../../routes/NavigationLink';
import Network from '../network';
import { NavLink } from 'react-router-dom';
import { ABOUT_ROUTE } from '../../constants/routes';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__logo'>
          <Logo />
          <p className='pg-light'>© 2014-2023 Create Studio</p>
        </div>
        <div className='footer__navigation'>
          <NavLink to={ABOUT_ROUTE}><h3>Главная</h3></NavLink>
          <NavigationLink className='footer__link'/>
        </div>
        <div className='footer__contacts'>
          <h3>Контакты</h3>
          <p>Телефон:</p>
          <a href="tel:+79263000000" className='text-blue'>8 (926) 300 00 00</a>
          <p>Электронная почта:</p>
          <a href="mailto:mail@mail.ru" className='text-blue'>mail@mail.ru</a>
          <Network />
        </div>
      </div>
      <div className='footer__politish'>
        <a>Политика конфиденциальности</a>
        <a>Пользовательское соглашение</a>
      </div>
    </div>
  )
}
