import React, { Component } from 'react';
import {Link} from 'react-router';

// import { getUser } from '../../_helpers';

class Header extends Component {
  
 constructor(props) {
    super(props);

    this.state = {
      is_authentication: false
    }
      
  }
  componentDidMount() {
    
    let user = null;
    if (user){
       this.setState({
            is_authentication: true
         
       })
    }
    
  }  
  
  render() {
    return (
    <header>
      <div className="container ">
        <div className="row nomargin">
          <div className="span12">
            { this.state.is_authentication ? (
              
              <div className="headnav">
						    <ul className="navbar-right">
				  				<li className="dropdown">
					          <a href="#" className="dropdown-toggle profile-image" data-toggle="dropdown">
					            <img src="http://placehold.it/30x30" className="img-circle special-img" />Seu Perfil<b className="caret"></b>
				            </a>
          					<ul className="dropdown-menu">
          						<li>
          						  <Link to="/profile"><i className="fa fa-cog"></i>Seu dados</Link>
        						  </li>
          						<li><a href="#"><i className="fa fa-sign-out"></i>Sair</a></li>
          					</ul>
				          </li>
			          </ul>
		          </div>
              

            ) : (
            <div>
              <div className="headnav">
                <ul>
                  <li><Link to="/register" ><i className="icon-user"></i> Registrar</Link></li>
                  <li><Link to="/login" >Login</Link></li>
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
              <h1>Helpec - Help Epilepsia e Convulsão </h1>
            </div>
          </div>
          <div className="span8">
            <div className="navbar navbar-static-top">
              <div className="navigation">
                <nav>
                <ul className="nav topnav">
                <li className="dropdown">
                    <Link to="/quemsomos"><i className="fa fa-cog"></i>Quem somos</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/mitos"><i className="fa fa-cog"></i> Mitos e Lendas</Link>
                  </li>
                  <li className="dropdown">
                      <Link to="/sobre"><i className="fa fa-cog"></i>Falando Sobre</Link>
                  </li>
                  <li className="dropdown">
                      <Link to="/socorros"><i className="fa fa-cog"></i>Primeiros Socorros</Link>
                  </li>
                  <li className="dropdown">
                      <Link to="/saibamais"><i className="fa fa-cog"></i>Saiba Mais</Link>
                  </li>
                  <li className="dropdown">
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