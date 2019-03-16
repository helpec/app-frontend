import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import InputForm from 'components/InputForm';
import { userContactActions } from 'engine/actions';
import BaseProfilePage from 'pages/bases/BaseProfilePage';


class UserContactEditPage extends Component {

  constructor(props) {
      super(props);
      
      let is_edit = true;
      if (props.match.params.contact_uid == "add"){
        is_edit = false;
      }
      

      this.saveValue = this.saveValue.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
      if (is_edit){
        this.props.get_contact(this.props.match.params.contact_uid);
      }
    
      this.state = {
          contact: {},
          submitted: false,
          is_edit: is_edit
      };
  }

  saveValue(data) {
      this.setState({ contact: { ...this.state.contact, ...data}});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { contact } = this.state;
    const { update, create } = this.props;

    if (contact) {
        console.log("SALVANDO")
        if (this.state.is_edit) {
          update(contact);
        }else{
          create(contact);
        }
        alert("contato criado com sucesso")
    }
  }

  componentDidMount(){
    if (this.state.is_edit){
      this.props.get_contact(this.props.match.params.contact_uid);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.contact != this.state.contact){          
      this.setState({contact: nextProps.contact})
    }
  }

  render() {
    const { savingContact } = this.props;
    const { submitted, contact } = this.state;
    
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
                    <InputForm name='name' label="Nome" value={contact.name}
                              submitted={submitted} callbeack={this.saveValue}/>
  
                    <InputForm name='email' label="E-mail" value={contact.email}
                              submitted={submitted} callbeack={this.saveValue}/>
  
                    <InputForm name='phone' label="Telefone" value={contact.phone}
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
    const { contact, savingContact } = state.user_contact;
    return {
        contact,
        savingContact
    };
}
const mapDispatchToProps = dispatch => {
  return {
    get_contact: (contact_uid) => {
      dispatch(userContactActions.getById(contact_uid));
    },
    update: (contact) => {
      dispatch(userContactActions.update(contact));
    },
    create: (contact) => {
      dispatch(userContactActions.create(contact));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContactEditPage);
