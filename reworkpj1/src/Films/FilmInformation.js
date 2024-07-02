import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Film() {
    const {film1} = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const response = await fetch (`https://swapi.dev/api/films/?search=${film1}`)
                const data = await response.json();
                if(data.results.length > 0) {
                    setFilm(data.results[0]);
                }
            } catch (error) {
                console.error('Error fetching Film:', error)
            }
        };
        fetchFilm();
    }, [film1])

    if(!film) {
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
            <h1>{film.title.toUpperCase()}</h1>
            <p>Episode: {film.episode_id}</p>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
            <p>Release Date: {film.release_date}</p>
            <p>Opening Crawl: {film.opening_crawl}</p>
        </div>
        <button>
            <Link to={`/FilmSelection`}>
            Back
            </Link>
        </button>
        </>
    )
}

export default Film;