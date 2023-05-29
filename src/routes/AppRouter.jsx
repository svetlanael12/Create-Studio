import React from 'react';
import { useRoutes } from 'react-router-dom';
import Articles from '../pages/Articles';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Development from '../pages/Development';

import { ARTICLES_ROUTE, DEVELOPMENT_ROUTE, ABOUT_ROUTE, PORTFOLIO_ROUTE } from '../constants/routes';
import Header from '../components/header';
import Footer from '../components/footer';

export default function AppRouter ({scroll}) {
      let publicRoutes = useRoutes([
        {
          path: ARTICLES_ROUTE,
          element: <Articles scroll={scroll}/>,
        },
        {
          path: ABOUT_ROUTE,
          element: <About scroll={scroll}/>,
        },
        {
            path: DEVELOPMENT_ROUTE,
            element: <Development scroll={scroll}/>,
        },
        {
            path: PORTFOLIO_ROUTE,
            element: <Portfolio scroll={scroll}/>,
        }
      ]);
    return (
      <>
      <Header scroll={scroll}/>
      {publicRoutes}
      <Footer />
      </>
    );
};
