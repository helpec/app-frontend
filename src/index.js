import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router,Route, browserHistory} from 'react-router';

import { store } from './engine/helpers';


import App from './App';
import LoginPage from './pages/Login';

// import Login from './componentes/Login';
// import Logout from './componentes/Logout';

// import {matchPattern} from 'react-router/lib/PatternUtils';
// import thunkMiddleware from 'redux-thunk';

// import {timeline} from './reducers/timeline';
// import {notificacao} from './reducers/header';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/login" component={LoginPage}/>
        
        {/* 
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/quemsomos' component={QuemSomosPage}/>
        <Route exact path='/mitos' component={MitosPage}/>
        <Route exact path='/sobre' component={AboutPage}/>
        <Route exact path='/socorros' component={SocorrosPage}/>
        <Route exact path='/saibamais' component={ReadPage}/>
        <Route exact path='/contato' component={ContatoPage}/>
        <PrivateRoute exact path="/profile/edit" component={ProfileEditPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        */}
        
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
