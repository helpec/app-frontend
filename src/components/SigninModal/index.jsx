import React from 'react';
import { Redirect } from 'react-router';

import {getUsers, setSessionUser} from '../../utils';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        
        if (username && password) {
            console.log("logando");
            let users = getUsers().filter(u => u.username == username && u.password1 == password);
            if (users.length) {
              setSessionUser(users[0]);
              this.setState({
                redirect: true
              })
            }
        }
    }
  
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/profile' />
      }
    }
  
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div id="mySignin" className="modal styled hide fade" tabIndex="-1" role="dialog" 
                 aria-labelledby="mySigninModalLabel" aria-hidden="true">
              {this.renderRedirect()}
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 id="mySigninModalLabel">Login para seu <strong>perfil</strong></h4>
              </div>
              <div className="modal-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className={'control-group' + (submitted && !username ? ' has-error' : '')}>
                    <label className="control-label" htmlFor="username">Username</label>
                    <div className="controls">
                      <input type="text" name='username' placeholder="E-mail" value={username} onChange={this.handleChange}/>
                      {submitted && !username &&
                        <div className="help-block">E-mail é obrigatório</div>
                      }
                    </div>
                  </div>
                  <div className={'control-group' + (submitted && !password ? ' has-error' : '')}>
                    <label className="control-label" htmlFor="password">Password</label>
                    <div className="controls">
                      <input type="password" name="password" placeholder="Senha" value={password} onChange={this.handleChange} />
                      {submitted && !password &&
                        <div className="help-block">Senha é obrigatória</div>
                      }
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="controls">
                      <button type="submit" className="btn" disabled={(loggingIn ? 'disabled' : '')} >Enviar</button>
                    </div>
                    {/* 
                    <p className="aligncenter margintop20">
                      Esqueceu a senha? <a href="#myReset" data-dismiss="modal" aria-hidden="true" data-toggle="modal">Reset</a>
                    </p>
                    */}
                  </div>
                </form>
              </div>
            </div>

        );
    }
}

export default Login;