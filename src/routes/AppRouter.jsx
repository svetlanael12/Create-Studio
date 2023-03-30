import React from 'react';
import { useRoutes } from 'react-router-dom';
import Articles from '../pages/Articles';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Development from '../pages/Development';

import { ARTICLES_ROUTE, DEVELOPMENT_ROUTE, ABOUT_ROUTE, PORTFOLIO_ROUTE } from '../constants/routes';

export default function AppRouter () {
      let publicRoutes = useRoutes([
        {
          path: ARTICLES_ROUTE,
          element: <Articles />,
        },
        {
          path: ABOUT_ROUTE,
          element: <About />,
        },
        {
            path: DEVELOPMENT_ROUTE,
            element: <Development />,
        },
        {
            path: PORTFOLIO_ROUTE,
            element: <Portfolio />,
        }
      ]);
    return (
      <>
      {publicRoutes}
      </>
    );
};
