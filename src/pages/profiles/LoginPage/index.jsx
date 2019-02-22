import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import BasePage from 'pages/bases/BasePage';
import { userActions } from 'engine/actions';


class LoginPage extends Component {

  constructor(props) {
        super(props);

       this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
        dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;

    return (
      <Fragment>
        <BasePage title="Login">

          <div className="modal-body">
            <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
              <div className={'control-group' + (submitted && !username ? ' has-error' : '')}>
                <label className="control-label" htmlFor="username">Username</label>
                <div className="controls">
                  <input type="text" name='username' placeholder="E-mail" value={username} onChange={this.handleChange} />
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
                <p className="aligncenter margintop20">
                  Esqueceu a senha? <a href="#myReset" data-dismiss="modal" aria-hidden="true" data-toggle="modal">Reset</a>
                </p>
              </div>
            </form>
          </div>

        </BasePage>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(LoginPage);
