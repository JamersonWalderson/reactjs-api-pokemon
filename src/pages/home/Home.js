import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/card/Card.js';
import Radio from '../../components/radio/Radio.js';
import DataList from '../../components/input/dataList.js';
import Search from '../../components/search/Search.js';


const solvingCorsProblem = 'http://cors-anywhere.herokuapp.com/';
const baseURL = solvingCorsProblem+'https://www.canalti.com.br/api/pokemons.json';

function Home() {
  const [pokemons, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPokemon(response.data.pokemon);
        console.log(response.data.pokemon);
      });

    if (search) {
      console.log(search);
      
    }
  }, [search])

  return (
    <div  className="container my-3">
      <div className="row d-flex justify-content-center">
        <h1 className="text-center text-uppercase mt-5">Consulta de api Pokemon</h1>
        <div className="col-md-10 m-5">
            <input 
              type="search"
              className="form-control p-4"
              placeholder="Procurar..."
              onChange={(event) => setSearch(event.target.value)}
            />
        </div>
        
        {/* <Radio /> */}
      </div>

      <section className="row justify-content-center" id="pokemon-cards">
        {pokemons.filter((pokemonFound) => {
          if(search === "") {
            return pokemons;
          } else if (pokemonFound.name.toLowerCase().includes(search.toLowerCase())) {
            return pokemons;
          }
        }).map((pokemon)=>(
          <div className="col-lg-2 m-1" key={pokemon.id}>
            <Card 
              name={pokemon.name}
              image={pokemon.img}
              type={pokemon.type}
              weaknesses={pokemon.weaknesses}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home;