import React, { Component, Fragment } from 'react';

import BaseProfilePage from '../BaseProfilePage';
import {getSessionUser} from '../../utils';

class ProfileEditPage extends Component {
    constructor(props) {
        super(props);

        let user = getSessionUser();
        
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                telephone: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        
        if (user) {
            console.log("SALVANDO")
            alert("Perfil salvo com sucesso")
        }
    }  
  
  render() {
    const { savingProfile } = this.props;
    const { user, submitted } = this.state;
    return (
      <Fragment>
        <BaseProfilePage title="Editar Meu Perfil">
            
            <article>
              <div className="row">
                <div className="span8">
                  <div className="post-image">
                    <div className="post-heading">
                      <h3>Alterar dados do meu perfil</h3>
                    </div>
                  </div>
                    <form onSubmit={this.handleSubmit}>
                      <div classNameName={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label for="firstName">Nome</label> 
                        <input id="firstName" name="firstName" placeholder="Seu Nome" type="text" required="required" classNameName="form-control here" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div classNameName="help-block">First Name is required</div>
                        }
                      </div>
                      <div classNameName={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label for="lastName">Sobrenome</label> 
                        <input id="lastName" name="lastName" placeholder="Seu Sobrenome" type="text" required="required" classNameName="form-control here" value={user.lastName} onChange={this.handleChange}/>
                        {submitted && !user.lastName &&
                            <div classNameName="help-block">First Name is required</div>
                        }
                      </div>
                      <div classNameName={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label for="email">E-mail</label> 
                        <input id="email" name="email" placeholder="Seu E-mail" type="text" required="required" classNameName="form-control here" value={user.email} onChange={this.handleChange}/>
                        {submitted && !user.email &&
                            <div classNameName="help-block">First Name is required</div>
                        }
                      </div>
                      <div classNameName={'form-group' + (submitted && !user.telephone ? ' has-error' : '')}>
                        <label for="telephone">Telefone</label> 
                        <input id="telephone" name="telephone" placeholder="Seu telefone" type="text" required="required" classNameName="form-control here" value={user.telephone} onChange={this.handleChange}/>
                        {submitted && !user.telephone &&
                            <div classNameName="help-block">First Name is required</div>
                        }
                      </div> 
                      <div classNameName='form-group'>
                        <button name="submit" type="submit" classNameName="btn btn-primary" disabled={(savingProfile ? 'disabled' : '')} >Submit</button>
                      </div>
                    </form>

                </div>
              </div>
            </article>

        </BaseProfilePage>
      </Fragment>
    );
  }
}
export default ProfileEditPage;