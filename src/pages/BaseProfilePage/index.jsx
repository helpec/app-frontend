import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../BasePage';
import HeadLine from '../../components/HeadLine';
import LastestPosts from '../../components/LastestPosts';


class BaseProfilePage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Meu Perfil">
         
          <HeadLine />
    
          <section id="content">
            <div className="container">
              <div className="row">
                <div className="span4">
                  <aside className="left-sidebar">
                    <div className="widget">
                      <h5 className="widgetheading">NOME</h5>
                      <ul className="cat">
                        <li><i className="icon-angle-right"></i><Link to="/profile">DashBoard</Link></li>
                        <li><i className="icon-angle-right"></i><Link to="/profile/edit">Editar Perfil</Link></li>
                        <li><i className="icon-angle-right"></i><a href="#">Quem Avisar</a></li>
                        <li><i className="icon-angle-right"></i><a href="#">Historio de Ocorenciasr</a></li>
                        <li><i className="icon-angle-right"></i><a href="#">Sair</a></li>
                      </ul>
                    </div>
                    
                    <LastestPosts />
                  </aside>
                </div>
                <div className="span8">
                  { this.props.children }
                </div>
              </div>
            </div>
          </section>
        </BasePage>
      </Fragment>
    );
  }
}

export default BaseProfilePage;