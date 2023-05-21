import React, { createContext, useEffect, useState } from 'react';
import {ClientAxios} from '../config/ClientAxios';
import axios from 'axios';
import { useForm } from '../hooks/useForm';

const PokeContext = createContext();

const GetPokemons = ({children}) => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);

    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);

    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: "",
    });

    useEffect(() => {
        const getAllPokemons = async (limit=50) => {
            try {
                setLoading(true);

                const {data} = await ClientAxios.get(`pokemon/?limit=${limit}&offset=${offset}`, { headers: {
                        "Content-Type": "application/json",
                    }
                });

                const promises = data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    const data = await res.json();
                    return data;
                });
                const results = await Promise.all(promises);
                
                setAllPokemons(results);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        getAllPokemons();
    }, [offset]);

    useEffect(() => {
        const getGlobalPokemons = async () => {
            try {
                setLoading(true);

                const {data} = await ClientAxios.get(`pokemon/?limit=100000&offset=0`, { headers: {
                        "Content-Type": "application/json",
                    }
                });

                const promises = data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    const data = await res.json();
                    return data;
                });
                const results = await Promise.all(promises);
                setGlobalPokemons(results);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        getGlobalPokemons();
    }, [])
    
    const getPokemonById = async (id) => {
        try {
            const {data} = await ClientAxios.get(`pokemon/${id}`, { headers: {
                    "Content-Type": "application/json",
                }
            });           
            return data;

        } catch (error) {
            console.error(error);
        }
    }

    const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

    const [filteredPokemons, setfilteredPokemons] = useState([]);
    
    const handleCheckbox = (e) => {
        let targetName = e.target.name.toLowerCase();
        setTypeSelected({
            ...typeSelected,
            [targetName]: e.currentTarget.checked
        });

        if (e.target.checked) {
            const filteredResults = globalPokemons.filter(pokemon => pokemon.types
                .map(type => type.type.name)
                .includes(targetName)
            );

            if (filteredPokemons.includes(filteredResults)) {
                const filteredResults = filteredResults.filter((pokemon, i) => pokemon.name !== filteredPokemons[i].name);
                setfilteredPokemons([...filteredPokemons, ...filteredResults]);
            }else{
                setfilteredPokemons([...filteredPokemons, ...filteredResults]);
            }
            
        } else {
            const filteredResults = filteredPokemons.filter(pokemon => !pokemon.types
                .map(type => type.type.name)
                .includes(targetName)
            );
            setfilteredPokemons([...filteredResults]);
        }

    }

    const nextPag = () => setOffset(offset + 50);
    const prevPag = () => setOffset(offset - 50);

  return (
    <PokeContext.Provider
      value={
        {
            loading,
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonById,
            nextPag,
            prevPag,
            handleCheckbox,
            typeSelected,
            filteredPokemons,
      }
    }
    >
      {children}
    </PokeContext.Provider>
  )
}

export {
    GetPokemons,
    PokeContext
};
