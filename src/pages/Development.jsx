import React from 'react'
import Main from '../components/main';
import OpeningBlock from '../components/opening-block';
import Advantage from '../components/advantage';
import styl from '../components/opening-block/index.module.css';
import Services from '../components/services';
import DevelopmentServices from '../components/services/developmentServices';
import OurPortfolio from '../components/portfolio';
import Application from '../components/application';
import StagesOfCreation from '../components/stages-of-creation';

export default function Development() {
  return (
    <div className='App'>
      <Main>
        <OpeningBlock>
          <h1>Разработка и сопровождение сайтов </h1>
          <div className={styl.wrpText}>
            <p className='pg-light'>Выполним проекты любой сложности «под ключ» в строго оговоренные сроки</p>
            <div className={styl.btnWrap}>
              <button className='blue-btn'>Рассчитать стоимость</button>
            </div>
          </div>
        </OpeningBlock>
      </Main>
      <h2>Какие сайты мы создаем</h2>
      <Services>
        <DevelopmentServices />
      </Services>
      <h2>Сайт для бизнеса — это:</h2>
      <Advantage>
        <li><p><strong className='text-blue'>Важнейший </strong>инструмент развития</p></li>
        <li><p><strong className='text-blue'>Способ поиска </strong>новых клиентов</p></li>
        <li><p><strong className='text-blue'>Имидж и доверие </strong>пользователей</p></li>
        <li><p><strong className='text-blue'>Место для рекламы </strong>и новостей</p></li>
      </Advantage>
      <h2>Уже готовые проекты</h2>
      <OurPortfolio />
      <h2>Этапы создания сайта</h2>
      <StagesOfCreation />
      <h2>Мы берем проекты <span className='text-blue'>любой</span> сложности</h2>
      <p>Мы готовы обсудить ваш проект. Вместе с вами сформулируем цели и поставим задачи. Мы ответим на все ваши вопросы и составим индивидуальное предложение. Для этого <a className='text-blue' href="#application">оставьте заявку</a> на сайте или позвоните по номеру: <a href="tel:+79263000000" className='text-blue'>8 (926) 300 00 00</a></p>
      <h2>Оставить заявку на консультацию</h2>
      <Application />
    </div>
  )
}
