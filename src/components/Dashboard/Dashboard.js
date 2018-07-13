import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }
  
  componentDidMount() {
    this.getHouses();
  }

  async getHouses() {
    let results = await axios.get('/api/houses');
    this.setState({houses: results.data});
  }

  async deleteHouse(id) {
    axios.delete(`/api/house/${id}`)
      .then(() => {
        this.getHouses()
      });
  }

  render() {
    let houseArr = this.state.houses.map((house, i) => {
      return <House 
              key={i} 
              house={house}
              deleteHouse={this.deleteHouse}/>
    });

    return (
      <div>
        DASHBOARD
        <Link to="/wizard/step1"><button>Add New Property</button></Link>

        {houseArr}
      </div>
    );
  }
}

export default Dashboard;