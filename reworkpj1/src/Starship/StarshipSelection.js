import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StarshipSelection() {
    const [starships, setStarships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStarships = async () => {
            let allStarships = [];
            const url = "https://swapi.dev/api/starships/?page=";

            for (let i = 1; i <= 4; i++) {
                try {
                    const response = await fetch(`${url}${i}`)
                    const data = await response.json();
                    data.results.forEach(starship => {
                        allStarships.push(starship);
                    });
                } catch (error) {
                    console.error(`Error fetching Starship ${i}:`, error)
                }
            }
            setStarships(allStarships);
            setLoading(false);
        };

        fetchStarships();
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
                <h1 className='Header1'>Select a Star Wars Starship</h1>
                <ul>
                    {starships.map(starship => (
                        <li key={starship.name} className='Lists'>
                            <Link to={`/StarshipInformation/${starship.name}`}>
                            {starship.name.toUpperCase()}
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

export default StarshipSelection;