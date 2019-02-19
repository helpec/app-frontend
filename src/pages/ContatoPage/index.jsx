import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';

class ContatoPage extends Component {
  
  _filterValue(str, name){
    let d = str.filter(s => s.name == name)[0]
    return d.value
  }
  
  constructor(props) {
    super(props);

    this.state = {
        submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    let $ = window.$;
   
    var f = $('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.attr('checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) {
      this.setState({ submitted: false });
      return false;
    }
    
    $("#sendmessage").addClass("show");
    $("#errormessage").removeClass("show");
    $('.contactForm').find("input, textarea").val("");

    
    // var str = $('.contactForm').serializeArray();
    
    // window.Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "camilabruschetta@gmail.com",
    //     Password : "camilinha1",
    //     To : 'angelmila1@gmail.com',
    //     From : this._filterValue(str,'email'),
    //     Subject : this._filterValue(str,'subject'),
    //     Body : this._filterValue(str,'message')
    // }).then(function(msg) {
        
    //     console.log(msg);
    //     if (msg == 'OK') {
    //       $("#sendmessage").addClass("show");
    //       $("#errormessage").removeClass("show");
    //       $('.contactForm').find("input, textarea").val("");
    //     } else {
    //       $("#sendmessage").removeClass("show");
    //       $("#errormessage").addClass("show");
    //       $('#errormessage').html(msg);
    //     }

    //   }
    // );

    
    this.setState({ submitted: false });
    return false;
  }
  
  render() {
    const { submitted } = this.state;
    return (
      <Fragment>
        <BasePage title="Contate-nos">

          <section id="content">
            <div className="container">
              <div className="row">
                <div className="span12">
                  <h4>Entre em contato conosco preenchendo <strong>formulário de contato abaixo</strong></h4>
      
                  <form action="" method="post" role="form" className="contactForm" onSubmit={this.handleSubmit}>
                    <div id="sendmessage">Sua mensagem foi enviada com sucesso. Obrigado!</div>
                    <div id="errormessage"></div>
      
                    <div className="row">
                      <div className="span4 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Nome" 
                               data-rule="minlen:4" data-msg="Digite seu Nome" />
                        <div className="validation"></div>
                      </div>
                      <div className="span4 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="E-mail" 
                               data-rule="email" data-msg="E-mail invalido" />
                        <div className="validation"></div>
                      </div>
                      <div className="span4 form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Assunto"
                               data-rule="minlen:4" data-msg="Assunto é obrigatorio" />
                        <div className="validation"></div>
                      </div>
                      <div className="span12 margintop10 form-group">
                        <textarea className="form-control" name="message" rows="12" data-rule="required" 
                                  data-msg="Por favor, escreva algo para nós" placeholder="Mensagem"></textarea>
                        <div className="validation"></div>
                      </div>
                      <p className="text-center">
                        <button className="btn btn-large btn-theme margintop10" disabled={(submitted ? 'disabled' : '')} >Enviar</button>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </BasePage>
      </Fragment>
    );
  }
}

export default ContatoPage;