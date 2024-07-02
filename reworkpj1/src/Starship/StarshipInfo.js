import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Starship() {
    const {starship1} = useParams();
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        const fetchStarship = async () => {
            try {
                const response = await fetch (`https://swapi.dev/api/starships/?search=${starship1}`)
                const data = await response.json();
                if(data.results.length > 0) {
                    setStarship(data.results[0]);
                }
            } catch (error) {
                console.error(`Error fetching starship:`, error);
            }
        };

        fetchStarship();
    }, [starship1])


if(!starship) {
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
        <h1>{starship.name.toUpperCase()}</h1>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Cost in credits: {starship.cost_in_credits}</p>
        <p>Length: {starship.length}</p>
        <p>Maximum Speed: {starship.max_atmosphering_speed}</p>
        <p>Crew: {starship.crew}</p>
        <p>Passengers: {starship.passengers}</p>
        <p>Cargo Capacity: {starship.cargo_capacity}</p>
        <p>Consumables: {starship.consumables}</p>
        <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
        <p>MGLT: {starship.MGLT}</p>
        <p>Starship Class: {starship.starship_class}</p>
    </div>
        <button>
            <Link to={`/StarshipSelection`}>
            Back
            </Link>
        </button>
    </>
)
}

export default Starship;