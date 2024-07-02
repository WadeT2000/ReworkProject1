import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Vehicle() {
    const { vehicle1 } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        const fetchVehicle = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/vehicles/?search=${vehicle1}`)
                const data = await response.json();
                if (data.results.length > 0) {
                    setVehicle(data.results[0]);
                }
            } catch (error) {
                console.error('Error fetching vehicle:', error);
            }
        };
        fetchVehicle();
    }, [vehicle1]);

    if(!vehicle) {
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
            <h1>{vehicle.name.toUpperCase()}</h1>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
            <p>Cost in Credits: {vehicle.cost_in_credits}</p>
            <p>Length: {vehicle.length}</p>
            <p>Maximum Speed: {vehicle.max_atmosphering_speed}</p>
            <p>Crew: {vehicle.crew}</p>
            <p>Passengers: {vehicle.passengers}</p>
            <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
            <p>Consumables: {vehicle.consumables}</p>
            <p>Vehicle Class: {vehicle.vehicle_class}</p>
        </div>
            <button>
            <Link to={`/VehicleSelection`}>
              Back
            </Link>
            </button>
        </>
    )
}

export default Vehicle;