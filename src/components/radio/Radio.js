import React, {useState} from 'react';

/**
 * Este componente será implementado no futuro
 * e tera como funcionalidad filtrar os tipos de pokemons
 */
function Radio() {
  return(
    <div className="col-md-12 my-5" id="form">
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="grass" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Grama
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="poison" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Veneno
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Fire" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Fogo
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Flying" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Voador
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Water" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Água
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Bug" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Inseto
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Normal" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Normal
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Eletric" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Elétrico
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Ground" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Solo
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Fighting" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Lutador
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Psychic" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Psíquico
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Rock" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Pedra
      <input className="form-check-input" type="radio" name="pokemonRadioOptions" value="Ice" onChange={(e)=>(alert("Clicou: " +e.target.value))} /> Gelo
    </div>
  )
}

export default Radio;

// Grama, Veneno, Fogo, Voar, Água, Inseto, Normal, Elétrico, Solo, Luta, Psíquico, Pedra, Gelo
// Grass, Poison, Fire, Flying, Water, Bug, Normal, Eletric, Ground, Fighting, Psychic, Rock, Ice