import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./HomePage/Home";
import CharacterSelection from "./Character/CharacterSelection";
import Character from './Character/CharacterInfo';
import VehicleSelection from "./Vehicle/VehicleList";
import Vehicle from "./Vehicle/VehicleInfo";
import StarshipSelection from './Starship/StarshipSelection';
import Starship from './Starship/StarshipInfo';
import PlanetSelection from './Planets/PlanetSelection';
import Planet from './Planets/PlanetInformation';
import FilmSelection from './Films/FilmSelection';
import Film from './Films/FilmInformation';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CharacterSelection" element={<CharacterSelection />} />
          <Route path="CharacterInformation/:name" element={<Character />} />
          <Route path="VehicleSelection" element={<VehicleSelection />} />
          <Route path="VehicleInformation/:vehicle1" element={<Vehicle />} />
          <Route path="StarshipSelection" element={<StarshipSelection />} />
          <Route path="StarshipInformation/:starship1" element={<Starship />} />
          <Route path="PlanetSelection" element={<PlanetSelection />} />
          <Route path="PlanetInformation/:planet1" element={<Planet />} />
          <Route path="FilmSelection" element={<FilmSelection />} />
          <Route path="FilmInformation/:film1" element={<Film />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);