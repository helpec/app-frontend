import React, { Component, Fragment } from 'react';

import BaseProfilePage from '../BaseProfilePage';
import {getSessionUser} from '../../utils';

class UserContactPage extends Component {
    constructor(props) {
        super(props);

        let user = getSessionUser();
        this.state = {
            user: user
        };

    }
  
  render() {
    let contacts = [
      {
        name:"Cesar Augusto",
        email:'cesarabruschetta@gmail.com',
        tephone:'11 991631305'
      }
    ];
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
                  <table class="table table-hover table-striped">
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
export default UserContactPage;