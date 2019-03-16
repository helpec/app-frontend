import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BaseProfilePage from 'pages/bases/BaseProfilePage';
import { userContactActions } from 'engine/actions';

class UserContactPage extends Component {

  constructor(props) {
    super(props);
    this.props.get_contacts();
    
  }
  
  componentDidMount(){
    this.props.get_contacts();
  }

  render() {
    const contacts = this.props.contacts;
    
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
                  
                  <Link to="/profile/contatos/add">Criar contato</Link>
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
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><Link to={`/profile/contatos/${item.id}`}>{item.name}</Link></td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
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
    const { contacts } = state.user_contact;
    return {
        contacts
    };
}
const mapDispatchToProps = dispatch => {
  return {
    get_contacts : () => {
      dispatch(userContactActions.contacts());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContactPage);
