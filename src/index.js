import './errorReporting';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Switch } from 'react-router-dom'

import { store, history } from './engine/helpers';
import { PrivateRoute } from './components';
import Pages from './pages';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
    
    componentDidMount(){
      window.load_all_components(window.$);
    }
  
    componentDidUpdate(prevProps) {
      window.load_all_components(window.$);
    }

    render() {
        return (
          <Provider store={store}>
            <Router history={history}>
              <Switch>
        
                <Route exact path='/' component={Pages.HomePage}/>
                <Route exact path='/falandosobre' component={Pages.FalandoSobrePage}/>
                <Route exact path='/quemsomos' component={Pages.AboutPage}/>
                <Route exact path='/mitos' component={Pages.MitosPage}/>
                <Route exact path='/socorros' component={Pages.SocorrosPage}/>
                <Route exact path='/contato' component={Pages.ContatoPage}/>
        
                {/* BLOG  */}
                <Route exact path='/saibamais' component={Pages.ReadPage}/>
                <Route exact path='/saibamais/:categorie_uid/' component={Pages.CategoriePage}/>
                <Route exact path='/saibamais/:categorie_uid/:post_uid/' component={Pages.BlogPost}/>
        
                {/* PROFILE */}
                <Route exact path="/login" component={Pages.LoginPage}/>
                <Route exact path="/registro" component={Pages.RegisterPage}/>
                <Route exact path="/reset-password" component={Pages.ResetPasswordPage}/>
                <PrivateRoute exact path="/profile" component={Pages.ProfilePage} />
                <PrivateRoute exact path="/profile/mudar-senha" component={Pages.ChangePasswordPage} />
                <PrivateRoute exact path="/profile/edit" component={Pages.ProfileEditPage} />
                <PrivateRoute exact path="/profile/contatos" component={Pages.UserContactPage} />
                <PrivateRoute exact path="/profile/contatos/:contact_uid/" component={Pages.UserContactEditPage} />
                <PrivateRoute exact path="/profile/historico" component={Pages.OcorrenciaPage} />
                <PrivateRoute exact path="/profile/sair" component={Pages.Logout} />
        
                <Route component={Pages.NotFound}/>
              </Switch>
            </Router>
          </Provider>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
