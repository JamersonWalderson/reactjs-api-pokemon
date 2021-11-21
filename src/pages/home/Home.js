import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/card/Card.js';
import Radio from '../../components/radio/Radio.js';

// var pokemon = fetch('https://www.canalti.com.br/api/pokemons.json')
//     .then(r => r.json())
//     .then(result => {pokemon = result})

// Grass, Poison, Fire, Flying, Water, Bug, Normal, Eletric, Ground, Fighting, Psychic, Rock, Ice
// pokemon.pokemon.find((data) => data['type'] === 'Fire')

const solvingCorsProblem = 'http://cors-anywhere.herokuapp.com/';
const baseURL = solvingCorsProblem+'https://www.canalti.com.br/api/pokemons.json';

function Home() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPokemon(response.data.pokemon);
        console.log(response.data.pokemon);
      });
  }, [])

  return (
    <div  className="container my-3">
      <div className="row">
        <section className="d-flex justify-content-center col-md-12 justify-content-center my-5" id="form">
          <Radio />
        </section>
      </div>

      <section className="row justify-content-center" id="pokemon-cards">
        {pokemons.map((pokemon)=>(
          <div className="col-md-2 m-1">
            <Card name={pokemon.name} image={pokemon.img} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home;