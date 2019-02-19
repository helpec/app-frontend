import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';

import './mitos.css'

class MitosPage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Mitos e Verdades">
         <section id="content">
                  <div className="container">
                  <div className="row">
                      <div className="span12">
                        <h5 className="pergunta">A epilepsia é uma doença contagiosa?</h5>
                        <p className="resposta"><strong> Mito!</strong> A epilepsia é uma doença neurológica e não contagiosa. Portanto, a doença não é transmissível.</p><br/>
                        
                         <h5 className="pergunta">Durante uma crise convulsiva, deve-se segurar os braços e a língua da pessoa?</h5>
                        <p className="resposta"><strong> Mito!</strong> Durante uma crise o ideal é colocar o paciente deitado com a cabeça de lado para facilitar a saída de possíveis secreções e evitar a aspiração de vômito. A cabeça deverá ser apoiada sobre uma superfície confortável, como uma almofada ou um travesseiro. É importante não introduzir qualquer objeto na boca, não tentar interromper os movimentos dos membros.</p><br/>
                        
                        <h5 className="pergunta">Toda convulsão é epilepsia?</h5>
                        <p className="resposta"><strong> Mito!</strong> A crise convulsiva é uma crise epiléptica na qual existe abalo motor. Para considerar que uma pessoa tem epilepsia ela deverá ter repetição de suas crises epilépticas, portanto a pessoa poderá ter uma crise epiléptica (convulsiva ou não) e não ter o diagnóstico de epilepsia.</p><br/>
                        
                        <h5 className="pergunta">Epilepsia é uma doença mental?</h5>
                        <p className="resposta"><strong> Mito!</strong> Assim como dito no primeiro item, a epilepsia é uma doença neurológica e não mental.</p><br/>
                        
                        
                        
                        <h5 className="pergunta">O paciente com epilepsia não podem dirigir?</h5>
                        <p className="resposta"><strong> Mito!</strong>  Segundo a Associação Brasileira de Educação de Trânsito, o paciente com epilepsia, que utiliza medicação antiepiléptica, poderá dirigir se estiver há um ano sem crise epiléptica – dado que deve ser apresentado através de um laudo médico. Caso o paciente esteja em retirada da medicação antiepiléptica, ele poderá dirigir se estiver há, no mínimo, dois anos sem crises epilépticas e ficar por mais seis meses sem medicação e sem crise. Já a direção de motos é proibida.</p><br/>
                        
                        <h5 className="pergunta">A epilepsia é uma doença contagiosa?</h5>
                        <p className="resposta"><strong> Mito!</strong> A epilepsia é uma doença neurológica e não contagiosa. Portanto, a doença não é transmissível.</p><br/>
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
                   <div className="row">
                      <div className="span12">
                        <h5 className="pergunta">É possível manter a consciência durante uma crise de epilepsia?</h5>
                        <p className="resposta"><strong> Verdade!</strong> Sim, é possível. A manifestação clínica da crise epiléptica relaciona-se com a área do cérebro de onde a crise é gerada. As crises epilépticas APRESENTAM-SE de diferentes maneiras: podem ser rápidas ou prolongadas; com ou sem alteração da consciência; com fenômeno motor, sensitivo ou sensorial; únicas ou em salvas; exclusivamente em vigília ou durante o sono.</p><br/>
                        
                         <h5 className="pergunta">O estresse é um fator desencadeador de crises de epilepsia?</h5>
                        <p className="resposta"><strong> Verdade!</strong> O estresse é um dos fatores que pode deflagrar uma crise epiléptica..</p><br/>
                        
                        <h5 className="pergunta">Existem medicamentos capazes de controlar totalmente a incidência das crises?</h5>
                        <p className="resposta"><strong> Verdade!</strong> Cerca de 70% dos casos de epilepsia são de fácil controle após o uso do medicamento adequado.  Os 30% restantes são classificados como epilepsias refratárias de difícil controle.</p><br/>
                        
                        <h5 className="pergunta">A epilepsia pode acometer todas as idades?</h5>
                        <p className="resposta"><strong> Verdade!</strong>  A epilepsia acomete desde o período neonatal até o idoso, e pode ter início em qualquer período da vida.</p><br/>
                
                        <h5 className="pergunta">O paciente com epilepsia não podem dirigir?</h5>
                        <p className="resposta"><strong> Mito!</strong>  Segundo a Associação Brasileira de Educação de Trânsito, o paciente com epilepsia, que utiliza medicação antiepiléptica, poderá dirigir se estiver há um ano sem crise epiléptica – dado que deve ser apresentado através de um laudo médico. Caso o paciente esteja em retirada da medicação antiepiléptica, ele poderá dirigir se estiver há, no mínimo, dois anos sem crises epilépticas e ficar por mais seis meses sem medicação e sem crise. Já a direção de motos é proibida.</p><br/>
                        
                        <h5 className="pergunta">O paciente com epilepsia pode ter uma vida normal?</h5>
                        <p className="resposta"><strong> Verdade!</strong> Pacientes com epilepsia, desde que controlados, podem e devem ser inseridos completamente na sociedade, ou seja, devem trabalhar, estudar, praticar esportes, se divertir.</p><br/>
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
            </div>
        </section>
        </BasePage>
      </Fragment>
    );
  }
}

export default MitosPage;