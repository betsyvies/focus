import React, {Component} from 'react';
import '../../css/select.css';

class Select extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => e => {
    this.props.setValue(name, e.target.value, '');
  }

  render() {
    const { options, value, name } = this.props;

    return (
      <div className="select">
        <select className="select-text" value={value} onChange={this.handleChange(name)}>
          {options.map(elem => (<option key={elem.id} value={elem.id}>{elem.name}</option>))}
        </select>
        <span className="select-highlight"></span>
        <span className="select-bar"></span>
      </div>
    );
  }
}

export default Select;