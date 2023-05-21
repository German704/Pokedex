import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './AppRouter';
import { GetPokemons } from './context/GetPokemons';

function App() {

  return (
    <GetPokemons>
      <AppRouter/>;
    </GetPokemons>
  )
}

export default App
