import { Link } from 'react-router-dom';

function Home() {
    return (
    <div className='Home'>
            <h1 className='HomePage'>Home Page</h1>
            <div className='HomeOptions'>
            <div className='CharacterSelection'>
            <h3 className='Selection'>Character Selection</h3>
            <Link to="/CharacterSelection"><img src="https://cdn.europosters.eu/image/750/posters/star-wars-characters-i4731.jpg" alt='Star Wars Characters' height={500} width={450} /></Link>
            </div>
            <div className='VehicleSelection'>
            <h3 className='Selection'> Vehicle Selection </h3>
            <Link to="/VehicleSelection"><img src="https://i.pinimg.com/564x/d8/8b/db/d88bdbfa53f4d065f2faed193e9861e7.jpg" alt='Star Wars Characters' height={500} width={450} /></Link>
            </div>
            <div className='StarshipSelection'>
            <h3 className='Selection'>Starship Selection</h3>
            <Link to="/StarshipSelection"><img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/star-wars-largest-starships-ranked.jpg" alt='Star Wars Characters' height={300} width={450} /></Link>
            </div>
            <div className='PlanetSelection'>
            <h3 className='Selection'>Planet Selection</h3>
            <Link to="/PlanetSelection"><img src="https://i.redd.it/rb8c6t9fluja1.jpg" alt='Star Wars Characters' height={500} width={450} /></Link>
            </div>
            <div className='FilmSelection'>
            <h3 className='Selection'>Film Selection</h3>
            <Link to="/FilmSelection"><img src="https://m.media-amazon.com/images/I/719Ls6agJ2L._AC_UF894,1000_QL80_.jpg" alt='Star Wars Characters' height={500} width={450} /></Link>
            </div>
            </div>
    </div>
    );
  }
  
  export default Home;