import React, { Component, Fragment } from 'react';

import BaseProfilePage from '../BaseProfilePage';


class ProfilePage extends Component {
  
  render() {
    return (
      <Fragment>
        <BaseProfilePage title="Meu Perfil">

            <article>
              <div className="row">
                <div className="span8">
                  <div className="post-image">
                    <div className="post-heading">
                      <h3>Bem vindo ao Helpec - seu site de ajuda</h3>
                    </div>
                  </div>
                  <p>
                    Crie seu espaço personalizado para acompanhar suas crises com o histórico, cadastre seus contatos para serem notificados ao clicar no botão de pânico. Conte conosco e nos ajude a melhorar sempre!
                    
                  </p>
                  
                </div>
              </div>
            </article>

        </BaseProfilePage>
      </Fragment>
    );
  }
}

export default ProfilePage;