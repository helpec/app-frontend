import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { isAuthentication } from '../../engine/helpers';
import './header.css'


class Header extends Component {
  
  render() {
    return (
    <header>
      <div className="container ">
        <div className="row nomargin">
          <div className="span12">
            { isAuthentication() ? (
              
              <div className="headnav">
						    <ul className="navbar-right">
				  				<li className="dropdown">
					          <a href="#" className="dropdown-toggle profile-image" data-toggle="dropdown">
					            <img src="http://placehold.it/30x30" className="img-circle special-img" alt="profile"/>
					              Seu Perfil<b className="caret"></b>
				            </a>
          					<ul className="dropdown-menu">
          						<li><Link to="/profile"><i className="fa fa-cog"></i>Seu dados</Link></li>
          						<li><Link to="/profile/sair"><i className="fa fa-sign-out"></i>Sair</Link></li>
          					</ul>
				          </li>
			          </ul>
		          </div>
            ) : (
            <div>
              <div className="headnav">
                <ul>
                   <li><Link to="/register" ><i className="icon-user"></i> Registrar</Link></li>
-                  <li><Link to="/login" ><i className="icon-user"></i>Login</Link></li>
                </ul>
              </div>
            </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="span4">
            <div className="logo">
              <img src="/assets/img/logo.png" alt="" className="logo" />
              <h1 className="logo h1">Helpec - Help Epilepsia e Convulsão </h1>
            </div>
          </div>
          <div className="span8">
            <div className="navbar navbar-static-top">
              <div className="navigation">
                <nav>
                <ul className="nav topnav">
                  <li>
                    <Link to="/"><i className="fa fa-cog"></i>Home</Link>
                  </li>
                  <li>
                    <Link to="/quemsomos"><i className="fa fa-cog"></i>Quem somos</Link>
                  </li>
                   <li>
                    <Link to="/falandosobre"><i className="fa fa-cog"></i>Falando sobre</Link>
                  </li>
                  <li>
                      <Link to="/socorros"><i className="fa fa-cog"></i>Primeiros Socorros</Link>
                  </li>
                  <li className="dropdown">
                    <a href="#">Saiba Mais<i className="icon-angle-down"></i></a>
                    <ul className="dropdown-menu">
                      <li><Link to="/saibamais"><i className="fa fa-cog"></i>Artigos</Link></li>
                      <li><Link to="/mitos"><i className="fa fa-cog"></i>Mitos e Verdades</Link></li>
                     </ul>
                  </li>
                  <li>
                      <Link to="/contato"><i className="fa fa-cog"></i>Contato</Link>
                  </li>
                 </ul>
                </nav>
              </div>
              {/* end navigation */}
            </div>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;