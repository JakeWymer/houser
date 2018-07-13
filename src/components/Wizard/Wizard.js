import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import {connect} from 'react-redux';
import {clearState} from '../../ducks/reducer';

class Wizard extends Component {
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
  }
  
  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        <Route path="/wizard/step1" component={StepOne} />
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree} />
        <Link to="/"><button onClick={() => this.props.clearState()}>Cancel</button></Link>
      </div>
    );
  }
}

export default connect(null, {clearState})(Wizard);