import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Character() {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
        const data = await response.json();
        if (data.results.length > 0) {
          setCharacter(data.results[0]);
        }
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [name]);

  if (!character) {
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
    <div className='CharacterInfo'>
      <h1>{character.name.toUpperCase()}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
    </div>
        <button>
            <Link to={`/CharacterSelection`}>
              Back
            </Link>
        </button>
    </>
  );
}

export default Character;