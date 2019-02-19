import React, { Component, Fragment } from 'react';
import {AreaChart, Area, XAxis, YAxis, } from 'recharts';

import BaseProfilePage from '../BaseProfilePage';
import {getSessionUser} from '../../utils';

class OcorrenciaPage extends Component {
    constructor(props) {
        super(props);

        let user = getSessionUser();
        this.state = {
            user: user,
        };
    }

  render() {
    
    const mS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'];
    let data = [];
    
    mS.map((m, i) => {
      let max = 10, min = 1;
      data.push(
        {
          name: m,
          count: Math.floor(Math.random()*(max-min+1)+min)
        }
      )
    });
    
    return (
      <Fragment>
        <BaseProfilePage title="Meu historico">
            
            <article>
              <div className="row">
                <div className="span8">
                  <div className="post-image">
                    <div className="post-heading">
                      <h3>Gráfico com minhas ocorrências</h3>
                    </div>
                  </div>

                	<AreaChart width={600} height={400} data={data}
                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Area type='monotone' dataKey='count' stroke='#8884d8' fill='#8884d8' />
                  </AreaChart>
       
                </div>
              </div>
            </article>

        </BaseProfilePage>
      </Fragment>
    );
  }
}
export default OcorrenciaPage;