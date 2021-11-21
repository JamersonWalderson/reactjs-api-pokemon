import React from 'react';

function Radio() {

  return(
    <div>
      <input className="form-check-input mx-1" type="radio" name="pokemonRadioOptions" id="pokemonRadio1" value="option1" /> Terra
      <input className="form-check-input mx-1" type="radio" name="pokemonRadioOptions" id="pokemonRadio2" value="option2" /> Vento
      <input className="form-check-input mx-1" type="radio" name="pokemonRadioOptions" id="pokemonRadio3" value="option3" /> Lama
    </div>
  )
}

export default Radio;