import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepThree, clearState} from '../../ducks/reducer';

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: '',
      rent: ''
    };
    this.handleRent = this.handleRent.bind(this);
    this.handleMortgage = this.handleMortgage.bind(this);
    this.addHouse = this.addHouse.bind(this);
  }

  componentDidMount() {
    let {mortgage, rent} = this.props;
    this.setState({mortgage, rent});
  }

  handleRent(e) {
    this.setState({rent: e.target.value});
    this.props.updateStepThree(this.state.mortgage, this.state.rent)
  }

  handleMortgage(e) {
    this.setState({mortgage: e.target.value});
    this.props.updateStepThree(this.state.mortgage, this.state.rent);
  }

  addHouse() {
    let {name, address, city, state, zipcode, image, mortgage, rent} = this.props
    axios.post('/api/houses', {name, address, city, state, zipcode, image, mortgage, rent})
      .then(() => {
        this.props.clearState();
        this.props.history.push('/');
      });
  }

  render() {
    let {mortgage, rent} = this.state;
    return (
      <div>
        <input 
          type="text"
          name="mortgage"
          placeholder="mortgage"
          value={this.state.mortgage}
          onChange={this.handleMortgage}/>
        <input 
          type="text"
          name="rent"
          placeholder="rent"
          value={this.state.rent}
          onChange={this.handleRent}/>
        <Link to="/wizard/step2"><button onClick={() => this.props.updateStepThree(mortgage, rent)}>Previous Step</button></Link>
        <button onClick={this.addHouse}>Complete</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {updateStepThree, clearState})(StepThree);