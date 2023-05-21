import React from 'react'
import UsePokeContext from '../hooks/UsePokeContext'
import { useLocation } from 'react-router-dom';
import Cards from '../components/Cards';

export const SearchPage = () => {
  const location = useLocation();
  const {globalPokemons} = UsePokeContext();

  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()));

  return (
    <>
    <span className='filterSpan'>Se encontraron {filteredPokemons.length} resultados:</span>
    <div className='List'>
      {
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
      }
    </div>
    </>
  )
}
