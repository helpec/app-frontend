import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import InputForm from 'components/InputForm';
import { userContactActions } from 'engine/actions';


import BaseProfilePage from 'pages/bases/BaseProfilePage';

class UserContactEditPage extends Component {

constructor(props) {
        super(props);

        // this.props.dispatch(userActions.getById());

        this.state = {
            contact: {},
            submitted: false
        };

        this.saveValue = this.saveValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    saveValue(data) {
        this.setState({ contact: { ...this.state.contact, ...data}});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { contact } = this.state;
        const { dispatch } = this.props;

        if (user) {
            console.log("SALVANDO")
            // dispatch(userActions.profileEdit(user));
            alert("Perfil salvo com sucesso")
        }
    }

  render() {
    const { savingContact } = this.props;
    const { contact, submitted } = this.state;

    return (
      <Fragment>
        <BaseProfilePage title="Editar Contatos">

            <article>
              <div className="row">
                <div className="span8">
                  <div className="post-image">
                    <div className="post-heading">
                      <h3>Editar meus contatos de emergencia</h3>
                    </div>
                  </div>

                  <form onSubmit={this.handleSubmit}>
                      <InputForm name='name' label="Nome" value={user.name}
                                submitted={submitted} callbeack={this.saveValue}/>

                      <InputForm name='email' label="E-mail" value={user.email}
                                submitted={submitted} callbeack={this.saveValue}/>

                      <InputForm name='telephone' label="Telefone" value={user.telephone}
                                submitted={submitted} callbeack={this.saveValue}/>

                      <div className='form-group'>
                        <button name="submit" type="submit" className="btn btn-primary"
                          disabled={(savingContact ? 'disabled' : '')} >Submit</button>
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
    const { user, contacts } = state.user_contact;
    return {
        user,
        contacts
    };
}

export default connect(mapStateToProps)(UserContactEditPage);
