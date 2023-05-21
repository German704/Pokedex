import React, { useState } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import UsePokeContext from '../hooks/UsePokeContext';

export const FilterBar = () => {
  const {handleCheckbox, typeSelected} = UsePokeContext()
  
  let checked = Object.values(typeSelected);
  console.log(checked);

  const types = ["grass","normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","electric","psychic","ice","dragon","dark","fairy","unknow","shadow"];

  return (
    <>
    <span>Search by Type</span>
    <ButtonGroup className="mb-2">
    {types.map((type, i) => (
      <div className={type + i}>
        <ToggleButton
          key={type}
          id={`${type}`}
          type="checkbox"
          variant="secondary"
          checked={checked[i]}
          name={type}
          // value={`${i+1}`}
          onChange={handleCheckbox}
        >
          {type}
        </ToggleButton>
        </div>
        ))}
      </ButtonGroup>
    </>
  )
}
