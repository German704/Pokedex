import React from 'react'
import { PokemonList } from '../components/PokemonList';
import { TrashPokemons } from '../components/TrashPokemons';

export default function Home() {

  return (
    <>
    <div className='home'>
      <TrashPokemons/>
      <PokemonList/>
    </div>
    </>
  )
}
