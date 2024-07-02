import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FilmSelection() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFilms = async () => {
            let allFilms = [];

            try {
                const response = await fetch("https://swapi.dev/api/films")
                const data = await response.json();
                data.results.forEach(film => {
                    allFilms.push(film)
                });
            } catch (error) {
                console.error(`Error fetching Films:`, error)
            }
            setFilms(allFilms);
            setLoading(false);
        };

        fetchFilms();
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
            <h1 className='Header1'>Select a Star Wars Film</h1>
            <ul>
                {films.map(film => (
                    <li key={film.title} className='Lists'>
                        <Link to={`/FilmInformation/${film.title}`}>
                        {film.title.toUpperCase()}
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

export default FilmSelection;