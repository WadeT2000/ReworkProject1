import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PlanetSelection() {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlanets = async () => {
            let allPlanets = [];
            const url = "https://swapi.dev/api/planets/?page="

            for(let i = 1; i <= 6; i++) {
                try {
                    const response = await fetch(`${url}${i}`)
                    const data = await response.json();
                    data.results.forEach(planet => {
                        allPlanets.push(planet);
                    });
                } catch (error) {
                    console.error(`Error fetching Planet ${i}:`, error)
                }
            }
            setPlanets(allPlanets);
            setLoading(false);
        };

        fetchPlanets();
    }, []);

    if(loading) {
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
            <h1 className='Header1'>Select a Star Wars Planet</h1>
            <ul>
                {planets.map(planet => (
                    <li key={planet.name} className='Lists'>
                        <Link to={`/PlanetInformation/${planet.name}`}>
                        {planet.name.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <button>
            <Link to={`/`}>
            Back
            </Link>
        </button>
        </>
    )
}

export default PlanetSelection;