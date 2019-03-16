import React from 'react';


class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      const { value } = e.target;
      this.props.callbeack({ [this.props.name]: value })
    }
    
    render() {
        const { name, label, submitted, value } = this.props;
        return (
          <div className={'control-group' + (submitted && !value ? ' has-error' : '')}>
              <label className="control-label" htmlFor={name}> {label} </label>
              <div className="controls">
                  <input type="text" className="form-control" name={name} 
                         value={value} onChange={this.handleChange} />
                  {submitted && !value &&
                      <div className="help-block">O campo {label} é obrigatorio</div>
                  }
              </div>
          </div>
        );
    }
}
export default InputForm