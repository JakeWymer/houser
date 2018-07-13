import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepOne} from '../../ducks/reducer';

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let {name, address, city, state, zipcode} = this.props;
    this.setState({name, address, city, state, zipcode});
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleClick() {
    let {name, address, city, state, zipcode} = this.state;
    this.props.updateStepOne(name, address, city, state, zipcode);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input 
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleInput}/>
        <input 
          type="text"
          name="address"
          placeholder="address"
          value={this.state.address}
          onChange={this.handleInput}/>
        <input 
          type="text"
          name="city"
          placeholder="city"
          value={this.state.city}
          onChange={this.handleInput}/>
        <input 
          type="text"
          name="state"
          placeholder="state"
          value={this.state.state}
          onChange={this.handleInput}/>
        <input 
          type="text"
          name="zipcode"
          placeholder="zipcode"
          value={this.state.zipcode}
          onChange={this.handleInput}/>
        <Link to="/wizard/step2"><button onClick={this.handleClick()}>Next Step</button></Link>
      </div>
    );
  }
}

const mapStateToProps = ({name, address, city, state, zipcode}) => {
  return {name, address, city, state, zipcode};
};

export default connect(mapStateToProps, {updateStepOne})(StepOne);