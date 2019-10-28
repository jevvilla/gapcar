import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';
import Details from '../screens/Details';
import Compare from '../screens/Compare';
import Layout from '../common/components/Layout';

import * as path from './paths';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path={path.ROOT} component={Home} />
        <Route exact path={`/${path.DETAILS}/:id`} component={Details} />
        <Route exact path={`/${path.COMPARE}`} component={Compare} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
