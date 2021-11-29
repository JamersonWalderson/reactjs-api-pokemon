import React from 'react';
import './style.css';

function Card(props) {
  return (
    <div className="row">
      <div className="col-6 col-lg-12 text-center text-lg-center">
        <img 
          src={props.image}
          className="img-fluid"
        />
      </div>
      <div className="col-6 card-body text-lg-center">
        <h5 className="card-title text-left"><strong>{props.name}</strong></h5>
        Tipo: {props.type}<br/>
      </div>
    </div>
  );
}

export default Card;
