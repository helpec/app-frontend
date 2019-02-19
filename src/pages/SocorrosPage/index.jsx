import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';
import Dicas from './dicas.jpeg';

import './socorros.css'

class SocorrosPage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Primeiros Socorros">
         <div className="container ">
            <div className="row nomargin">
                <div className="span12">
                 <h5 className="atitudes"><strong> O que fazer:</strong></h5>
            <p className = "fazer"> Afastar a vítima de lugares perigosos, como por exemplo, áreas com piscina e com
objetos cortantes.</p>
            <p className = "fazer"> Retirar objetos pessoais como: óculos, colares, anéis etc...</p>
            <p className = "fazer"> Proteger a cabeça, mas deixando-a livre para agitar-se à vontade.</p>
            <p className = "fazer"> Manter a vítima de barriga para cima (decúbito dorsal) e a cabeça lateralizada, para
evitar engasgos.</p>
            <p className = "fazer"> Proteger a boca, observando se a língua não está sendo mordida. Caso os dentes
estejam cerrados, não forçar a abertura da boca.</p>
            <p className = "fazer"> Afrouxar as roupas, se necessário.</p>
            <p className = "fazer"> Observar a respiração durante e após a crise.</p>
            <p className = "fazer"> Encaminhar ao serviço de saúde, após a crise.</p>
           <div className="container">
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
                    </div>
            <h5 className="atitudes"> <strong>O que não fazer:</strong></h5>
           
            <p className = "fazer"> Não jogar água no rosto da vítima ou oferecer-lhe algo para cheirar durante a crise.</p>
            <p className = "fazer">Não introduzir os dedos, mão ou qualquer tipo de objeto no interior da boca do
indivíduo durante a convulsão.</p>
            <p className = "fazer">É fundamental procurar assistência médica no primeiro episódio de convulsão da
vida do indivíduo a fim de estabelecer um diagnóstico preciso e tratamento adequado.</p>
            <div className="container">
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
            </div>
            
            <h5 className="atitudes"><strong>Procure serviço de emergência - SAMU 192 se:</strong></h5>

            <p className = "fazer"> Ocorrer convulsão por motivo desconhecido.</p>
            <p className = "fazer"> A convulsão durar mais de cinco minutos.</p>
            <p className = "fazer"> A vítima não recuperar-se rapidamente ou apresentar novo episódio de convulsão.</p>
            <p className = "fazer"> A vítima apresentar dificuldade respiratória.</p>
            <p className = "fazer"> A vítima estiver grávida.</p>
            <p className = "fazer"> A vítima apresentar outros problemas médicos.</p>
            <p className = "fazer"> Houver qualquer sinal de trauma.</p>
            
            <div className="container">
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
                    </div>
            
            <div className="margin-img">
                <img src= {Dicas} className="Dicas de Primeiros Socorros" alt="Dicas"/>
            </div>
            <div className="container">
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
                    </div>
            
            </div>
            </div>         
         </div>
        </BasePage>
      </Fragment>
    );
  }
}

export default SocorrosPage;