import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Planet() {
    const {planet1} = useParams();
    const [planet, setPlanet] = useState(null)

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/planets/?search=${planet1}`)
                const data = await response.json();
                if(data.results.length > 0) {
                    setPlanet(data.results[0]);
                }
            } catch (error) {
                console.error(`Error fetching Planet:`, error);
            }
        };

        fetchPlanet();
    }, [planet1])

    if(!planet) {
        return (
            <div className='LoadingMain'>
            <div className='Loading'>
              <img src='https://t4.ftcdn.net/jpg/03/16/15/47/360_F_316154790_pnHGQkERUumMbzAjkgQuRvDgzjAHkFaQ.jpg' alt='Loading' height={1000} width={1000}></img>
           </div> 
           <h2 className='loading'>Loading...</h2>
           </div>
          )
    }

    return (
        <>
        <div>
        <h1>{planet.name.toUpperCase()}</h1>
        <p>Rotation Period: {planet.rotation_perion}</p>
        <p>Orbital Period: {planet.orbital_perion}</p>
        <p>Diameter: {planet.diameter}</p>
        <p>Climate: {planet.climate}</p>
        <p>Gravity: {planet.gravity}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Surface Water: {planet.surface_water}</p>
        <p>Population: {planet.population}</p>
        </div>
        <button>
            <Link to={`/PlanetSelection`}>
            Back
            </Link>
        </button>
        </>
    )
}

export default Planet;