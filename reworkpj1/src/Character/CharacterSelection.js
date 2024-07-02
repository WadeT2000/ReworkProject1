import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CharacterSelection() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      let allCharacters = [];
      const url = "https://swapi.dev/api/people/?page=";

      for (let i = 1; i <= 9; i++) {
        try {
          const response = await fetch(`${url}${i}`);
          const data = await response.json();
          data.results.forEach(character => {
            allCharacters.push(character);
        });
         } catch (error) {
           console.error(`Error fetching character ${i}:`, error);
         }
      }

      setCharacters(allCharacters);
      setLoading(false);
    };

    fetchCharacters();
  }, []);

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
      <h1 className='Header1'>Select a Star Wars Character</h1>
      <ul>
        {characters.map(character => (
          <li key={character.url} className='Lists'>
            <Link to={`/CharacterInformation/${character.name}`}>
              {character.name.toUpperCase()}
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

export default CharacterSelection;