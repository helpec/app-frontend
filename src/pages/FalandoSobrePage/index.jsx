import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';

import Crises from './crises.jpeg';
import Infografico from './infografico.jpeg';
import './falandosobre.css'

class FalandoSobrePage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Falando Sobre">
          <section id="content">
            <div className="container">
              <div className="row">
                  <div className="span12">
                    <h5 className="sobrediferenca"><strong>Convulsão e Epilepsia é a mesma coisa?</strong></h5>
                    <p className="definicao">Não, pois uma pessoa pode ter uma ou duas convulsões pontuais durante sua vida toda; neste caso, dizemos que o paciente teve crises, convulsão, mas não tem epilepsia.</p>
                    <p className="definicao">A convulsão acontece por causa de uma falha na condução elétrica no cérebro, levando à maior atividade elétrica em algum ponto suscetível deste, o que provoca os sintomas da crise convulsiva (abalos musculares, perda da consciência, salivação, e em alguns casos diurese e evacuação espontânea durante as crises).</p>
                    <p className="definicao">A epilepsia se caracteriza por crises epilépticas de repetição. É uma doença frequente que acomete cerca de 1 a 2% da população geral. Além disto, cerca de 4% das pessoas,  já apresentou pelo menos uma crise convulsiva na vida.  Na crise epiléptica, por algum motivo, um agrupamento de células cerebrais se comporta de maneira anormal, como se fosse um curto-circuito.
                        O diagnóstico de epilepsia é dado geralmente quando um mesmo indivíduo apresenta duas ou mais convulsões acompanhados de avaliação médica e exames.</p><br/>
            
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
                <h5 className="sobrediferenca"><strong>Convulsões </strong></h5>
                <p className= "sobreconvulsao"> São contrações musculares involuntárias de parte ou de todo o corpo, decorrentes do funcionamento anormal do cérebro. Têm duração aproximada de 3 a 5 minutos.</p>
                <p className= "sobreconvulsao"> Características:</p><br/>
                <p className="sobreconvulsao"><strong>Fase Tônica:</strong>
                    <li> Manifesta-se pela contratura generalizada da musculatura (rigidez do corpo e dentes cerrados).</li>
                </p>
                <p className="sobreconvulsao"><strong>Fase Clônica:</strong>
                    <li> Manifesta-se por abalos musculares, salivação excessiva, perda ou não do controle dos esfíncteres da bexiga (músculo que controla a saída da urina).</li>
                </p>
                <p className="sobreconvulsao"><strong>Fase Pós-Convulsão:</strong>
                    <li>Caracterizada por sonolência e confusão mental.</li>
                </p>
                <p className="sobreconvulsao"> Sinais e Sintomas:</p><br/>
                
                  <li>Perda da consciência e queda ao solo.</li>
                  <li>Contrações musculares violentas.</li>
                  <li>Podem ocorrer palidez intensa e lábios azulados.</li>
                  <li>Pode haver eliminação de fezes e urina.</li>
                 <li>Dentes travados e salivação abundante ('baba').</li>
                 
                 <div className="crises">
                            <img src={Crises} alt="Tipos de crises" align="center"/> 
                  </div>     
                
                  <div className="container">
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
                </div>
               <div className="row">
                  <div className="span12">
                <h5 className="sobrediferenca"><strong>Epilepsias</strong></h5>
                <p className="sobrepilepsia">A Epilepsia é um distúrbio do cérebro, não transmissível, em que as atividades das células nervosas são perturbadas. Isso causa uma atividade excessiva e anormal nas células cerebrais, gerando crises epilépticas. .</p>
                <p className="sobrepilepsia"> Tipos de Crises:</p><br/>
                <p className="sobrepilepsia"><strong>Crises de ausência:</strong>
                    <li> É conhecida como “desligamento”, pois a pessoa fica com o olhar fixo e perde o contato com o meio por alguns segundos, como se estivesse desligada.</li>
                </p>
                 <p className="sobrepilepsia"><strong>Crises tônico-clônicas:</strong>
                    <li> Conhecida como convulsão, o indivíduo perde a consciência e pode chegar a cair, ficando com o corpo rígido, além de apresentar contrações musculares em todo o corpo, morder a língua, salivar intensamente, respirar ofegante e, às vezes, pode liberar até urina ou fezes.</li>
                </p>
                 <p className="sobrepilepsia"><strong>Crises parciais simples:</strong>
                    <li> Não altera a consciência do indivíduo, porém consiste na convulsão de um membro ou formigações no mesmo, além de movimentos descontrolados de uma parte do corpo..</li>
                </p>
                 <p className="sobrepilepsia"><strong>Crise parcial complexa:</strong>
                    <li>O indivíduo perde a consciência, ficando confuso ou fazendo gestos automáticos, como mastigação ou continuar o que estava fazendo.</li>
                </p>
                 <p className="sobrepilepsia"><strong>Crises mioclônicas:</strong>
                    <li>Consistem em tremores rápidos no corpo.</li>
                </p>
                <p className="sobrepilepsia"><strong>Crises clônicas:</strong>
                    <li>Consistem em movimentos de flexão e estiramento dos membros de forma repetitiva.</li>
                </p>
                <p className="sobrepilepsia"><strong>Crises tônicas:</strong>
                    <li>Consistem em contrações musculares repentinas e duradouras.</li>
                </p>
                  <p className="sobrepilepsia"><strong>Crises atônicas:</strong>
                    <li>Consistem em uma crise contínua e com quedas, podendo durar até 5 segundos</li>
                </p>
                  <p className="sobrepilepsia"><strong>Estado de mal epiléptico:</strong>
                    <li>onsiste em crises prolongadas ou repetitivas, sem recuperação da memória do paciente.</li>
                </p>
                <p className="sobreconvulsao"> Sinais e Sintomas:</p><br/>
                
                  <li>Tremores na face ou outros membros</li>
                  <li>Distúrbios sensoriais, como alucinações</li>
                  <li>Mudanças de humor e perda de memória</li>
                  <li>Mal estar, palpitações, salivação, suor ou rubor</li>
                  <li>Formigamento na boca e nas mãos</li>
                
                    </div>
                </div>
            </div>
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
       
                  
          </section>
          <div className = "infografico">
            <img src={Infografico} alt="Infografico de Epilepsia" align="center"/>
          </div>
        </BasePage>
      </Fragment>
    );
  }
}

export default FalandoSobrePage;