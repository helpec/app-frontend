import React, { Component, Fragment } from 'react';

import BaseProfilePage from 'pages/bases/BaseProfilePage';
import InputForm from 'components/InputForm';
import { userActions } from 'engine/actions';

class ResetPasswordPage extends Component {

  constructor(props) {
        super(props);

       this.state = {
            email: '',
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
    const { email } = this.state;
    const { dispatch } = this.props;
    if ( email ) {
        dispatch(userActions.resetPassword(email));
    }
  }


  render() {
    const { resetIn } = this.props;
    const { email, submitted } = this.state;
    return (
        <Fragment>
            <BaseProfilePage title="Resetar Senha" notUserNav={true}>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 id="myResetModalLabel">Reset your <strong>password</strong></h4>
              </div>
              <div className="modal-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <InputForm name='email' label="E-mail" value={email}
                    submitted={submitted} callbeack={this.saveValue}/>

                  <div className="control-group">
                    <div className="controls">
                      <button type="submit" className="btn" disabled={(resetIn ? 'disabled' : '')}>Reset password</button>
                    </div>
                    <p className="aligncenter margintop20">
                      We will send instructions on how to reset your password to your inbox
                    </p>
                  </div>
                </form>
              </div>
            </BaseProfilePage>
        </Fragment>
    );
  }
}
function mapStateToProps(state) {
    const { resetIn } = state.reset_password;
    return {
        resetIn
    };
}

export default connect(mapStateToProps)(ResetPasswordPage);
