<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import { Router, Route, hashHistory, IndexRedirect, Link } from 'react-router';

ReactDOM.render(
  <Router history={ hashHistory } >
    <Route path="/" component={AppContainer} >
      <IndexRedirect to="/albums" />
      <Route path="/albums" component={Albums} />
      <Route path="albums/:albumId" component={Album} />
    </Route>
  </Router>,
  document.getElementById('app')
=======
'use strict';

const React = require('react')
const ReactDOM = require('react-dom')
const Main = require('./Main')


ReactDOM.render((<Main />),
   document.getElementById('app')
>>>>>>> 3991cf4a3d47445730f4ba0ef6a1efc73fa5ae20
);
