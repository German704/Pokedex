import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UsePokeContext from '../hooks/UsePokeContext'
import { ChaoticOrbit } from '@uiball/loaders'

export const PokemonPage = () => {
  const {getPokemonById} = UsePokeContext();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const data = async () => {
      const result = await getPokemonById(id);
      setPokemon(result);
      setLoading(false);
    }

    data();
  }, [])

  return (
    <main className='main-pokemon'>
    {loading ?
      (<div className='loading'>
        <ChaoticOrbit
          size={50}
          speed={1.5}  
          color="black" 
        />
      </div>) 
      : 
      (
				<>
					<div className='header-main-pokemon'>
						<div className='container-img-pokemon'>
							<img
								src={pokemon.sprites.front_default}
								alt={`Pokemon ${pokemon?.name}`}
							/>
						</div>

						<div className='container-info-pokemon'>
							<h1><span className='number-pokemon'>#{pokemon.id}</span> {pokemon.name}</h1>
							<div className='card-types info-pokemon-type'>
								{pokemon.types.map(type => (
									<span key={type.type.name} className={`${type.type.name}`}>
										{type.type.name}
									</span>
								))}
							</div>
							<div className='info-pokemon'>
								<div className='group-info'>
									<p>Altura</p>
									<span>{pokemon.height}</span>
								</div>
								<div className='group-info'>
									<p>Peso</p>
									<span>{pokemon.weight}KG</span>
								</div>
								<div className='group-info'>
									<p>Habilidades</p>
                  {pokemon.abilities.map(value => (
									<span key={value.ability.name}>{value.ability.name}</span>
                  ))}
								</div>
							</div>
						</div>
					</div>

					<div className='container-stats'>
						<h1>Estadísticas</h1>
						<div className='stats'>
							<div className='stat-group'>
								<span>Hp</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[0].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Attack</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[1].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Defense</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[2].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Attack</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[3].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Defense</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[4].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Speed</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[5].base_stat}
								</span>
							</div>
						</div>
					</div>
				</>
			)
    }
    </main>
  )
}
