import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hearder from './components/Hearder';
import { PokemonPage } from './pages/PokemonPage';
import Home from './pages/Home';
import { SearchPage } from './pages/searchPage';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Hearder/>}>
            <Route index element={<Home/>}/>
            <Route path='/pokemon/:id' element={<PokemonPage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
        </Route>
        <Route path='*' element={''}/>
    </Routes>
  )
}
