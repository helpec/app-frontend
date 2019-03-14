import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import BasePage from 'pages/bases/BasePage';
import Slider from 'components/Slider';

import './home.css'
import Grafico from './grafico.jpeg'
import Alerta from './panico.jpeg'
import Home from './home.jpeg'

class HomePage extends Component {

  render() {
    return (
      <Fragment>
        <BasePage title="Seu site de ajuda">

            <section id="header">
            <div className="container">
              <div className="row">
                <div className="span12">
                  <h2 className="introducao">Helpec - <strong>Help Epilepsia e Convulsão</strong></h2>
                  <p className="apresentacao">A Helpec surgiu com a proposta de diseminar informações, esclarecer dúvidas sobre convulsões e epilepsias, buscando assim ajudar tanto pacientes, como familiares e amigos e dessa forma podendo diminuir e até evitar todo o preconceito referente ao assunto.</p><br/>
                  <p className="apresentacao">Além disso, através do nosso site o usuário cadastrado poderá consultar material de primeiros socorros, principais características e informações de crises convulsivas e epiléticas, como também artigos e links externos relacionados ao assunto e ainda na página de perfil poderá editar seu perfil com maiores informações ou alteração de senha e nome, cadastrar os contatos para receber a mensagem de notificação de pânico e também registrar as ocorrências de crises mensais ou anuais expressa através de gráfico</p><br/>


                       <div className="row">
                          <div className="span6">
                            <img src= {Grafico} className="Grafico" />
                          </div>
                          <div className="span6">
                            <img src= {Alerta} className="Grafico" />
                          </div>
                       </div>
                  <p className="apresentacao">Temos como meta para 2019 disponibilizar nosso protótipo como aplicativo tanto Android como IOS a fim de ajudar aos pacientes com um simples toque no botão de pânico, o responsável ou a pessoa cadastrada receberá a notificação da ocorrência e assim poder prestará ajudar e tomar as medidas necessárias para melhor socorrer.</p>
                </div>
              </div>
            </div>
            </section>

            <div className="container">
            <div className="row">
              <div className="span12">
                <div className="solidline">
                </div>
              </div>
            </div>
            </div>

            <section id="content">
              <div className="container">
                <div className="row">
                  <div className="span12">
                    <div className="row">
                      <div className="span4">
                        <div className="box aligncenter">
                          <div className="aligncenter icon">
                            <i className="icon-group icon-circled icon-64 active"></i>
                          </div>
                          <div className="text">
                            <h6>Missão</h6>
                            <p>
                              Nossa missão e disseminar e esclarecer dúvidas, primeiros socorros...
                            </p>
                            <Link to="/quemsomos">Saiba Mais</Link>                        </div>
                        </div>
                      </div>
                      <div className="span4">
                        <div className="box aligncenter">
                          <div className="aligncenter icon">
                            <i className="icon-heart icon-circled icon-64 active"></i>
                          </div>
                          <div className="text">
                            <h6>Visão</h6>
                            <p>
                              Como visão estamos propondo o uso da tecnologia a nosso favor com a criação...
                            </p>
                             <Link to="/quemsomos">Saiba Mais</Link>
                          </div>
                        </div>
                      </div>
                      <div className="span4">
                        <div className="box aligncenter">
                          <div className="aligncenter icon">
                            <i className="icon-trophy icon-circled icon-64 active"></i>
                          </div>
                          <div className="text">
                            <h6>Valores</h6>
                            <p>
                              Dentre nossos valores estão a respeito e diminuir o preconceito contra os portadores...
                            </p>
                             <Link to="/quemsomos">Saiba Mais</Link>                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="container">
            <div className="row">
              <div className="span12">
                <div className="solidline">
                </div>
              </div>
            </div>
            </div>

            <section id="featured">
             <div className="container">
                <div className="row">
                  <div className="span5">
                 <img src= {Home} className="Helpec" />
                  </div>
                  <div className="span7 featured-slide">
                    <Slider />
                  </div>
                </div>
                </div>
            </section>
          </BasePage>
      </Fragment>
    );
  }
}

export default HomePage;