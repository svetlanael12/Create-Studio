import React, { useState } from 'react'
import './index.css'

export default function Vacancies() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [about, setAbout] = useState('');

  const [checkbox, setCheckbox] = useState(false);
  return (
    <div className='vacancies'>
      <form className='vacancies__form'>
        <input type="text" className='custom-input' placeholder='Напишите ваше имя' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" className='custom-input' placeholder='Введите электронную почту' value={mail} onChange={(e) => setMail(e.target.value)}/>
        <textarea className='custom-input' placeholder='Напишите о себе:' value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
        <div>
          <label className='custom-checkbox'>
            <input type="checkbox" className='visually-hidden' value={checkbox} onChange={(e) => setCheckbox(e.target.checked)}/>
            <span className='checkmark'></span>
            Даю согласие на обработку персональных данных
          </label>
        </div>
        <button className='blue-btn'>Отправить</button>
      </form>

      <div className='vacancies__text'>
        <p>Мы всегда ищем талантливых специалистов.</p>
        <p>
          Если Вы любите свою работу, умеете работать в команде, уважаете себя, коллег и клиентов, заинтересованы в профессиональном и карьерном росте, ориентированы на результат и качество, будем рады работать с вами.
        </p>
        <p>Заполните форму на сайте или пришлите резюме на почту: <strong><a href="mailto:mail@mail.ru">mail@mail.ru</a></strong></p>
      </div>
    </div>
  )
}
