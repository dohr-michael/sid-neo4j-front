import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
// import 'material-design-lite/dist/material.js';
// import 'material-design-lite/dist/material.css';
// import 'material-design-lite/dist/material-grid.css';

import './favicon.ico';
import './index.html';
import './scss/app.scss';

import React                             from 'react';
import { Router, Route, IndexRoute }     from 'react-router'
import { render }                        from 'react-dom'
import injectTapEventPlugin              from 'react-tap-event-plugin';
import { appRoute }                      from 'toolkit/annotations'


import Main                              from 'components/main/Main';
import Home                              from 'components/home/Home';
import Showroom                          from 'components/showroom/Showroom';

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin ();

// Render the main app react component into the document body.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render

render ( (
    <Router>
        <Route { ...Main }>
            <IndexRoute component={ Showroom }/>
            <Route { ...Showroom } />
        </Route>
    </Router>
), document.getElementById( 'app' ) );