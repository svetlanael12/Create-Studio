import React from 'react';
import Advantage from '../components/advantage';
import Header from '../components/header'
import Main from '../components/main';
import Services from '../components/services';
import OpeningBlock from '../components/opening-block';
import styl from '../components/opening-block/index.module.css';
import './index.css';
import CMS from '../components/CMS';
import OurProgress from '../components/our-progress';
import OurPortfolio from '../components/portfolio';

export default function About({scroll}) {
  return (
    <div className="App app-about">
      <Header scroll={scroll}/>
      <Main>
        <OpeningBlock>
          <h1>Create Studio</h1>
          <div className={styl.wrpText}>
            <p><strong>Веб-студия - полного цикла</strong></p>
            <p className='pg-light'>Мы оказываем полный спектр услуг по разработке веб-сайтов, их дальнейшему продвижению и поддержке.</p>
            <div className={styl.btnWrap}>
              <button className='blue-btn'>Получить консультацию</button>
            </div>
          </div>
        </OpeningBlock>
      </Main>
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
      <h2>Мы работаем с CMS:</h2>
      <CMS />
      <h2>Портфолио</h2>
      <OurPortfolio />
      <h2>Наше развитие</h2>
      <OurProgress />
    </div>
  )
}
