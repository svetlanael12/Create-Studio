import React from 'react'
import Header from '../components/header'
import Main from '../components/main';
import OpeningBlock from '../components/opening-block';
import Advantage from '../components/advantage';
import styl from '../components/opening-block/index.module.css';
import Services from '../components/services';
import DevelopmentServices from '../components/services/developmentServices';

export default function Development() {
  return (
    <div className='App'>
      <Header />
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
    </div>
  )
}
