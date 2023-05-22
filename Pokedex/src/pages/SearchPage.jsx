import React from 'react'
import UsePokeContext from '../hooks/UsePokeContext'
import { useLocation } from 'react-router-dom';
import Cards from '../components/Cards';
import { TrashPokemons } from '../components/TrashPokemons';

export const SearchPage = () => {
  const location = useLocation();
  const {globalPokemons, filteredPokemons} = UsePokeContext();

  let filtered = [];
  if (filteredPokemons.length === 0) {
    filtered = globalPokemons.filter(pokemon => pokemon.name.includes(location.state));
  } else {
    if (location.state !== "" || location.state !== null) {
      filtered = filteredPokemons.filter(pokemon => pokemon.name.includes(location.state))
    } else {
      filtered = [];
    }
  }

  return (
    <>
    <TrashPokemons/>
    <span className='filterSpan'>Se encontraron {filtered.length !== 0? filtered.length : filteredPokemons.length} resultados:</span>
    <div className='List'>
      { 
      filtered.length !== 0 ?
        (filtered.map(pokemon => (
          <Cards
          key={pokemon.name}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          weight={pokemon.weight}
          types={pokemon.types}
          />
        )))
        :
        (
          filteredPokemons.map(pokemon => (
            <Cards
            key={pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            weight={pokemon.weight}
            types={pokemon.types}
            />
          ))
        )
      }
    </div>
    </>
  )
}
