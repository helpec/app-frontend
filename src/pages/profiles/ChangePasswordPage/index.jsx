import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import BaseProfilePage from 'pages/bases/BaseProfilePage';
import InputForm from 'components/InputForm';
import { userActions } from 'engine/actions';

class ChangePasswordPage extends Component {

  constructor(props) {
        super(props);

       this.state = {
            password1: '',
            password2: '',
            submitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveValue = this.saveValue.bind(this);
  }

  saveValue(data) {
      this.setState(data);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { password1, password2 } = this.state;
    const { dispatch } = this.props;
    if ( password1 == password2 ) {
        dispatch(userActions.changePassword(password1));
    }
  }


  render() {
    const { changeIn } = this.props;
    const { password1, password2, submitted } = this.state;
    return (
        <Fragment>
            <BaseProfilePage title="Alterar Senha" notUserNav={true}>
              <div className="modal-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <InputForm name='password1' label="Senha" value={password1}
                            submitted={submitted} callbeack={this.saveValue}/>
                    <InputForm name='password2' label="Confirmar Senha" value={password2}
                            submitted={submitted} callbeack={this.saveValue}/>

                  <div className="control-group">
                    <div className="controls">
                      <button type="submit" className="btn" disabled={(changeIn ? 'disabled' : '')}>Alterar senha</button>
                    </div>
                  </div>
                </form>
              </div>
            </BaseProfilePage>
        </Fragment>
    );
  }
}
function mapStateToProps(state) {
    const { changeIn } = state.change_password;
    return {
        changeIn
    };
}

export default connect(mapStateToProps)(ChangePasswordPage);
