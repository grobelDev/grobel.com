import React, { Fragment } from 'react';
import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // useParams,
  // useLocation,
  // Redirect,
  // useRouteMatch
} from 'react-router-dom';

import Navbar from './Navbar';
import Wireframes from './Wireframes';
import WireframesUserPage from './Wireframes.UserPage';
import WireframesUserDayPage from './Wireframes.UserDayPage';
import WireframesUserPostPage from './Wireframes.UserPostPage';
import WireframesUserPostPhotoPage from './Wireframes.UserPostPhotoPage';
import WireframesUserPostHistoryPage from './Wireframes.UserPostHistoryPage';

export default function App() {
  return (
    <Fragment>
      {/* <Navbar></Navbar> */}
      <Switch>
        {/* <Layout> */}
        <Route exact path='/'>
          <div>Welcome to the HomePage</div>
        </Route>
        <Route exact path='/login'>
          <div>Welcome to the Login Page</div>
        </Route>
        <Route exact path='/signup'>
          <div>Welcome to the Signup Page</div>
        </Route>
        {/* </Layout> */}

        <Route exact path='/wireframes'>
          <Wireframes></Wireframes>
        </Route>
        <Route exact path='/wireframes/:user'>
          <WireframesUserPage></WireframesUserPage>
        </Route>
        <Route exact path='/wireframes/:user/time/:timeId'>
          <WireframesUserDayPage></WireframesUserDayPage>
        </Route>
        <Route exact path='/wireframes/:user/status/:urlId/history'>
          <WireframesUserPostHistoryPage></WireframesUserPostHistoryPage>
        </Route>
        <Route exact path='/wireframes/:user/status/:urlId/:postId'>
          <WireframesUserPostPage></WireframesUserPostPage>
        </Route>
        <Route exact path='/wireframes/:user/status/:urlId/:postId/photo/1'>
          <WireframesUserPostPhotoPage></WireframesUserPostPhotoPage>
        </Route>

        <Route path='/'>
          <div>404 Error!</div>
        </Route>
      </Switch>
      {/* <Navbar></Navbar>
      <ResourceContext.Provider value={fetchArticles()}>
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route exact path='/articles'>
            <ArticlesDirectory></ArticlesDirectory>
          </Route>
          <Route path='/contact'>
            <ContactPage></ContactPage>
          </Route>
          <Route path='/:slug'>
            <ArticlePage2></ArticlePage2>
          </Route>
          <Route path='/'>404 Error!</Route>
        </Switch>
      </ResourceContext.Provider> */}
    </Fragment>
  );
}

function Layout({ children }) {
  return (
    <div>
      <div className='pt-24 lg:pt-0'>
        <div className='relative w-full max-w-screen-xl px-6 pt-16 pb-40 mx-auto md:pb-24'>
          <div className='-mx-6'>
            <div className='max-w-3xl px-6 mx-auto text-left'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LayoutTwo({ children }) {
  return (
    <div>
      <div className='pt-24 lg:pt-0'>
        <div className='relative w-full max-w-screen-xl px-6 pt-16 pb-40 mx-auto md:pb-24'>
          <div className='-mx-6'>
            <div className='max-w-3xl px-6 mx-auto text-left'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
