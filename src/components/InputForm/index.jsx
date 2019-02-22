import React from 'react';


class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValuer: props.value,
            submitted: props.submitted
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      const { value } = e.target;
      this.setState({ inputValuer: value });
      this.props.callbeack({ [this.props.name]: value })
    }
    
    render() {
        const { inputValuer } = this.state;
        const { name, label, submitted } = this.props;
        return (
          <div className={'control-group' + (submitted && !inputValuer ? ' has-error' : '')}>
              <label className="control-label" htmlFor={name}> {label} </label>
              <div className="controls">
                  <input type="text" className="form-control" name={name} 
                         value={inputValuer} onChange={this.handleChange} />
                  {submitted && !inputValuer &&
                      <div className="help-block">O campo {label} é obrigatorio</div>
                  }
              </div>
          </div>
        );
    }
}
export default InputForm