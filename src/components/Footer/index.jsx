import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

class Footer extends Component {
  render() {
    return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="span4">
            <div className="widget">
              <h3 className="widgetheading">Nossas Páginas</h3>
                <ul className="link-list">
                <li><Link to="/quemsomos">Quem somos</Link></li>
                <li><Link to="/falandosobre">Falando Sobre</Link></li>
                <li><Link to="/socorros">Primeiro Socorros</Link></li>
              </ul>
            </div>
          </div>
           <div className="span4">
            <div className="widget">
              <h3 className="widgetheading">Fale conosco</h3>
              <p>
                <i className="icon-phone"></i> (11) 98232-6391 <br/>
                <i className="icon-envelope-alt"></i> camilam.oliveiralima@gmail.com
              </p>
              </div>
            </div>
              <div className="span4">
              <div className="widget">
             <h3 className="widgetheading">Redes Sociais</h3>
              <ul className="social-network">
                <li><a href="https://www.facebook.com/" data-placement="bottom" title="Facebook">
                  <i className="icon-facebook icon-square"></i></a></li>
                <li><a href="https://www.linkedin.com/in/camilamlima/" data-placement="bottom" title="Linkedin">
                  <i className="icon-linkedin icon-square"></i></a></li>
                 <span>&Camila Lima - Todos os direitos reservados.</span>
              </ul>
               </div>
               </div>
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;