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
        this.saveValue = this.saveValue.bind(this);
  }
  saveValue(data) {
      this.setState(data);
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
              <InputForm name='username' label="Username" value={username}
                submitted={submitted} callbeack={this.saveValue}/>
              <InputForm name='password' label="Senha" value={password}
                submitted={submitted} callbeack={this.saveValue}/>

              <div className="control-group">
                <div className="controls">
                  <button type="submit" className="btn" disabled={(loggingIn ? 'disabled' : '')} >Enviar</button>
                </div>
                <p className="aligncenter margintop20">
                  Esqueceu a senha? <a href="/reset-password">Resetar sua senha</a>
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
