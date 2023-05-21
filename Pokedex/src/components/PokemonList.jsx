import React, {useContext} from 'react'
import UsePokeContext from "../hooks/UsePokeContext";
import Cards from './Cards';
import { ChaoticOrbit } from '@uiball/loaders';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Button from 'react-bootstrap/esm/Button';


export const PokemonList = () => {
    const {loading, allPokemons, filteredPokemons, nextPag, prevPag} = UsePokeContext();

    const onClickNext = () => nextPag();
    const onClickPrev = () => prevPag();

  return (
    loading ? 
      (
        <div className='loading'>
        <ChaoticOrbit
        size={50}
        speed={1.5} 
        color="black" 
        />
        </div>
      ) 
      :
      (
        <>
        <div className='List'>
          {
            filteredPokemons.length? 
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
            :
            (
              allPokemons.map(pokemon => (
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
        <ButtonGroup>
          <Button onClick={onClickPrev}>Prev</Button>
          <Button onClick={onClickNext}>Next</Button>
        </ButtonGroup>
        </>
      )
  )
}
