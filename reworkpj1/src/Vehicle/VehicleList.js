import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VehicleSelection() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
        const fetchVehicles = async () => {
            let allVehicles = [];
            const url = "https://swapi.dev/api/vehicles/?page=";
  
            for (let i = 1; i <= 4; i++) {
            try {
                    const response = await fetch(`${url}${i}`);
                    const data = await response.json();
                    data.results.forEach(vehicle => { 
                        allVehicles.push(vehicle);
                    });
                } catch (error) {
                    console.error(`Error fetching character ${i}:`, error);
                }
        }
        setVehicles(allVehicles);
        setLoading(false);
    };

    fetchVehicles();
}, [])

if (loading) {
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
      <h1 className='Header1'>Select a Star Wars Vehicle</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.url} className='Lists'>
             <Link to={`/VehicleInformation/${vehicle.name}`}> 
              {vehicle.name.toUpperCase()}
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
  );
}

export default VehicleSelection;