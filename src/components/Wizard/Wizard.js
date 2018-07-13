import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
    this.addHouse = this.addHouse.bind(this);
  }
  
  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  addHouse() {
    let {name, address, city, state, zipcode} = this.state;
    axios.post('/api/houses', {name, address, city, state, zipcode})
      .then(() => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          name="name"
          onChange={this.handleInput}/>
        <input 
          type="text"
          name="address"
          onChange={this.handleInput}/>
        <input 
          type="text"
          name="city"
          onChange={this.handleInput}/>
        <input 
          type="text"
          name="state"
          onChange={this.handleInput}/>
        <input 
          type="text"
          name="zipcode"
          onChange={this.handleInput}/>

        <button onClick={this.addHouse}>Complete</button>
        <Link to="/"><button>Cancel</button></Link>
      </div>
    );
  }
}

export default Wizard;