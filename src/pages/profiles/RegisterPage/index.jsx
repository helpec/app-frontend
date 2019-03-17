import React, {Fragment} from 'react';
import { connect } from 'react-redux';


import BaseProfilePage from 'pages/bases/BaseProfilePage';
import InputForm from 'components/InputForm';
import { userActions } from 'engine/actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                email: '',
                password1: '',
                password2: ''
            },
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveValue = this.saveValue.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;

        if (user.username && user.email && user.password1 && user.password2) {
            console.log("registrando");
            dispatch(userActions.register(user));
        }
    }
    saveValue(data) {
        this.setState({ user: { ...this.state.user, ...data}});
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <Fragment>
                <BaseProfilePage title="Registre-se" notUserNav={true}>
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 id="mySignupModalLabel">Criar novo <strong>perfil</strong></h4>
                  </div>

                  <div className="modal-body">
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>

                        <InputForm name='username' label="Username" value={user.username}
                                submitted={submitted} callbeack={this.saveValue}/>
                        <InputForm name='email' label="E-mail" value={user.email}
                                submitted={submitted} callbeack={this.saveValue}/>
                        <InputForm name='password1' label="Senha" value={user.password1}
                                submitted={submitted} callbeack={this.saveValue}/>
                        <InputForm name='password2' label="Confirmar Senha" value={user.password2}
                                submitted={submitted} callbeack={this.saveValue}/>


                        <div className="control-group">
                          <div className="controls">
                            <button type="submit" className="btn" disabled={(registering ? 'disabled' : '')} >Cadastrar</button>
                          </div>

                        </div>
                    </form>
                  </div>
                </BaseProfilePage>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}
export default connect(mapStateToProps)(RegisterPage);
