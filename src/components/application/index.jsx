import React, { useState } from 'react'
import './index.css';

export default function Application() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [tel, setTel] = useState('');

  const [checkbox, setCheckbox] = useState(false);
  return (
    <form id={'application'}>
      <p>
        Заполните ваши данные. В ближайшее время мы с вами свяжемся и ответим на все вопросы
      </p>
      <input type="text" className='custom-input' placeholder='Напишите ваше имя' value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" className='custom-input' placeholder='Введите электронную почту' value={mail} onChange={(e) => setMail(e.target.value)}/>
      <input type="text" className='custom-input' placeholder='+7 (___) ___ - __ - __' value={tel} onChange={(e) => setTel(e.target.value)}/>
      <label className='custom-checkbox'>
        <input type="checkbox" className='visually-hidden' value={checkbox} onChange={(e) => setCheckbox(e.target.checked)}/>
        <span className='checkmark'></span>
        Даю согласие на обработку персональных данных
      </label>
      <button className='blue-btn'>Отправить</button>
    </form>
  )
}
