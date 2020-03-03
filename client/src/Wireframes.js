import React from 'react';
import styled from 'styled-components';
import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  // Switch,
  // Route
  Link
  // useParams,
  // useLocation,
  // Redirect,
  // useRouteMatch
} from 'react-router-dom';

const routes = [
  {
    title: 'https://grobel.com/:user',
    path: '/wireframes/:user'
  },
  {
    title: 'https://grobel.com/:user/time/:timeId',
    path: '/wireframes/:user/time/:timeId'
  },
  {
    title: 'https://grobel.com/:user/status/:urlId/:postId',
    path: '/wireframes/:user/status/:urlId/:postId'
  },
  {
    title: 'https://grobel.com/:user/status/:urlId/:postId/photo/1',
    path: '/wireframes/:user/status/:urlId/:postId/photo/1'
  },
  {
    title: 'https://grobel.com/:user/status/:urlId/history',
    path: '/wireframes/:user/status/:urlId/history'
  }
];

export default function Wireframes() {
  return (
    <div>
      <div>Wireframes!</div>
      <StyledNav>
        <ul>
          {routes.map(r => (
            <li key={r.title}>
              <Link to={r.path}>{r.title}</Link>
            </li>
          ))}
        </ul>
      </StyledNav>
    </div>
  );
}

const StyledNav = styled.nav`
  padding: 1.5rem;
  li {
    display: block;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  h1 {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-weight: bold;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;
