import React from 'react';
import './style.css';



function Card(props) {
  return (
      <div className="card">
        <img src={props.image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-center">{props.name}</h5>
          {/* <p className="card-text">Lorem ipsum text long</p> */}
        </div>
      </div>
  );
}

export default Card;
