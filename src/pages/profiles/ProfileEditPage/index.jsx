import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import InputForm from 'components/InputForm';
import { userActions } from 'engine/actions';
import { getUser } from 'engine/helpers';

import BaseProfilePage from 'pages/bases/BaseProfilePage';

class ProfileEditPage extends Component {
    constructor(props) {
        super(props);

        this.props.dispatch(userActions.getById());

        this.state = {
            user: getUser(),
            submitted: false
        };

        this.saveValue = this.saveValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    saveValue(data) {
        this.setState({ user: { ...this.state.user, ...data}});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;

        if (user) {
            console.log("SALVANDO")
            dispatch(userActions.profileEdit(user));
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
                      <InputForm name='name' label="Nome" value={user.firstName}
                                submitted={submitted} callbeack={this.saveValue}/>

                      <InputForm name="lastName" label="Sobrenome" value={user.lastName}
                                submitted={submitted} callbeack={this.saveValue}/>

                      <InputForm name='email' label="E-mail" value={user.email}
                                submitted={submitted} callbeack={this.saveValue}/>

                      <InputForm name='telephone' label="Telefone" value={user.telephone}
                                submitted={submitted} callbeack={this.saveValue}/>

                      <div className='form-group'>
                        <button name="submit" type="submit" className="btn btn-primary"
                          disabled={(savingProfile ? 'disabled' : '')} >Submit</button>
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

function mapStateToProps(state) {
    const { savingProfile } = state.savingProfile;
    return {
        savingProfile
    };
}
export default connect(mapStateToProps)(ProfileEditPage);