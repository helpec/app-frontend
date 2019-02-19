import React, { Component, Fragment } from 'react';
import BasePage from '../BasePage';

import Autora from './autora.jpg';
import Logo from './logo.png';
import './aboutpage.css';

class AboutPage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Quem Somos">
            <section id="content">
                  <div className="container">
                  <div className="row">
                      <div className="span12">
                        <h5 className="introducao">Helpec - <strong>Help Epilepsia e Convulsão</strong></h5>
                        
                        <p className="apresentacao"> Muitos devem estar se perguntando o porque de termos escolhido essa causa para apoiar? </p>
                        <p className="apresentacao"> A resposta é simples pela falta ou dificuldade em encontrar informações quando precisei, já tive caso familiar e amigos que sofreram do assunto e não encontravam nada sobre o assunto.Além disso a falta de informação do assunto causa a criação de preconceitos e mitos sobre o assunto.</p>
                        <p className="apresentacao"> Helpec veio propor um mundo mais empático em que as pessoas possam compreendem a condição do próximo.</p>
                        <p className="apresentacao">Temos como objetivo a saúde dos pacientes de Epilepsia e Convulsão através da distribuição de conteúdos para a ajuda, prevenção e primeiros socorros aos pacientes, e suporte aos familiares.</p>
                        <p className="apresentacao">Acreditamos que a tecnologia é uma ferramenta capaz de revolucionar a saúde e uma ferramenta para conectar pessoas!</p>
                        <p className="apresentacao">Somos uma ferramenta para conectar pessoas. Conectamos os pacientes durante uma crise epilética e/ou convulsiva aos seus primeiros socorros (familiares e amigos) através do botão de pânico.</p>
                      </div>
                    </div>
                <div className="container">
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
                    </div>
          
                    <div className="container">
                    <div className="row">
                    <div className="span2 text-center">
                        <img src= {Logo} className="visao" alt="Missão"/>
                        <div className="valores">
                          <h6 className="valor">Missão</h6>
                        </div>
                      </div>
                      <div className="span10">
                        <div className="valores">
                          <p className="valores">Nossa missão e disseminar e esclarecer dúvidas, primeiros socorros, materiais para consulta voltados a ajudar dos portadores, familiares e amigos que sofrem com Epilepsia e Convulsão.</p>
                        </div>
                      </div>
                    </div>
                    </div>
                   
                    <div className="container">
                    <div className="row">
                    <div className="span2 text-center">
                        <img src= {Logo} className="visao" alt="Missão"/>
                        <div className="valores">
                          <h6 className="valor">Visão</h6>
                        </div>
                      </div>
                      <div className="span10">
                        <div className="valores">
                          <p className="valores">Como visão estamos propondo o uso da tecnologia a nosso favor com a criação e elaboração de um aplicativo mobile que a pessoa que estiver passando mal poderá enviar notificação aos contatos cadastrados ao acionar o botão de pânico.</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    
                  <div className="container">
                    <div className="row">
                    <div className="span2 text-center">
                        <img src= {Logo} className="visao" alt="Missão"/>
                        <div className="valores">
                          <h6 className="valor">Valores</h6>
                        </div>
                      </div>
                      <div className="span10">
                        <div className="valores">
                          <p className="valores">Dentre nossos valores estão a respeito e diminuir o preconceito contra os portadores de epilepsia e convulsão oferecendo materiais informativos, dicas de primeiros socorros e o uso do aplicativo a fim de facilitar a vida das pessoas.</p>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="container">
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
                    </div>
                    
                    <div className="container">
                    <div className="row">
                      <div className="span12">
                        <h4>Colaboradora</h4>
                      </div>
                      
                      <div className="span3">
                        <img src= {Autora} alt="Foto Camila Perfil"/>
                        <div className="roles">
                          <p className="lead">
                            <strong>Camila Lima</strong>
                          </p>
                        </div>
                      </div>
                      <div className="span9">
                        <div className="roles">
                          <p className="colaboradora">
                            Estudante em formação para desenvolvimento FullStack, buscando aprender e desenvolver oferecendo através da tecnologia maior facilidade e ajuda com diversos temas.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                </section>
        </BasePage>
      </Fragment>
    );
  }
}

export default AboutPage;