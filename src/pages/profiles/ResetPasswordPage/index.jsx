import React, { Component, Fragment } from 'react';

import BaseProfilePage from 'pages/bases/BaseProfilePage';
import InputForm from 'components/InputForm';
import { userActions } from 'engine/actions';

class ResetPasswordPage extends Component {
  render() {
    return (
        <Fragment>
            <BaseProfilePage title="Resetar Senha" notUserNav={true}>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 id="myResetModalLabel">Reset your <strong>password</strong></h4>
              </div>
              <div className="modal-body">
                <form className="form-horizontal">
                  <div className="control-group">
                    <label className="control-label" for="inputResetEmail">Email</label>
                    <div className="controls">
                      <input type="text" id="inputResetEmail" placeholder="Email" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="controls">
                      <button type="submit" className="btn">Reset password</button>
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

export default ResetPasswordPage;


