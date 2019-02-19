import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
            
        <div id="myReset" className="modal styled hide fade" tabindex="-1" role="dialog" aria-labelledby="myResetModalLabel" aria-hidden="true">
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
        </div>
        
    );
  }
}

export default Footer;


