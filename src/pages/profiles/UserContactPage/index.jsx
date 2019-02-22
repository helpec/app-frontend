import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import BaseProfilePage from 'pages/bases/BaseProfilePage';
import { userContactActions } from 'engine/actions';

class UserContactPage extends Component {

  render() {
    const { contacts } = this.props;
    return (
      <Fragment>
        <BaseProfilePage title="Meus Contatos">

            <article>
              <div className="row">
                <div className="span8">
                  <div className="post-image">
                    <div className="post-heading">
                      <h3>Meus contatos de emergencia</h3>
                    </div>
                  </div>
                  <table className="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                      </tr>
                    </thead>
                    <tbody>
                     {contacts.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td>{i}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.tephone}</td>
                          </tr>
                        )
                     })}
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

        </BaseProfilePage>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
    const { user, contacts } = state.user_contact;
    return {
        user,
        contacts
    };
}
const mapDispatchToProps = dispatch => {
  return {
    get_contacts : () => {
      dispatch(userContactActions.contacts(this.props.user));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContactPage);
