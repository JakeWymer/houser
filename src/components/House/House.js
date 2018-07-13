import React from 'react';

const House = (props) => {
  return (
    <div>
      <p>{props.house.name}</p>
      <p>{props.house.address}</p>
      <p>{props.house.city}</p>
      <p>{props.house.state}</p>
      <p>{props.house.zipcode}</p>
      <p>{props.house.image}</p>
      <p>{props.house.mortgage}</p>
      <p>{props.house.rent}</p>
      <button onClick={() => props.deleteHouse(props.house.id)}>Delete House</button>
    </div>
  );
};

export default House;