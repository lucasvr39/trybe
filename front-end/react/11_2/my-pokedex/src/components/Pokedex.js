import React, { Component } from 'react'

import '../Pokedex.css'
import pokemons from './data';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  render() {
    return (
      <div className="content">
        <h1>Pokedex</h1>
        <div>
          {pokemons.map((pokemon, index) =>
            <Pokemon key={index} pokemonList={pokemon} />
          )}
        </div>
      </div>
    )
  }
}
