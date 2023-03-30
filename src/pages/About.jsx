import React from 'react';
import Advantage from '../components/advantage';
import Header from '../components/header'
import Main from '../components/main';
import Services from '../components/services';

export default function About() {
  return (
    <div className="App">
      <Header />
      <Main />
      <h2>Наши преимущества</h2>
      <Advantage>
        <li><p><strong className='text-blue'>Более 300 </strong>реализованных проектов</p></li>
        <li><p><strong className='text-blue'>90% проектов </strong>сданы в оговоренные сроки</p></li>
        <li><p><strong className='text-blue'>95% клиентов </strong>возвращаются к нам снова</p></li>
        <li><p><strong className='text-blue'>5 лет </strong>на рынке веб-разработки</p></li>
      </Advantage>
      <h2>Услуги</h2>
      <Services>
        <li><p><strong>Создание CRM и CMS</strong></p></li>
        <li><p><strong>Разработка сайта</strong></p></li>
        <li><p><strong>Редизайн и доработка</strong></p></li>
        <li><p><strong>SEO-продвижение</strong></p></li>
        <li><p><strong>Техническая поддержка сайта</strong></p></li>
      </Services>
    </div>
  )
}
