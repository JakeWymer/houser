import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepTwo} from '../../ducks/reducer';

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({image: this.props.image});
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleClick() {
    this.props.updateStepTwo(this.state.image);
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          name="image"
          placeholder="image url"
          value={this.state.image}
          onChange={this.handleInput}/>
        <Link to="/wizard/step1"><button onClick={this.handleClick}>Previous Step</button></Link>        
        <Link to="/wizard/step3"><button onClick={this.handleClick}>Next Step</button></Link>        
      </div>
    );
  }
}

const mapStateToProps = ({image}) => {
  return {image};
}

export default connect(mapStateToProps, {updateStepTwo})(StepTwo);