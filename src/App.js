import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movie, setMovie] = useState([
    {
      title: "Divergent",
      description: "In a futuristic Chicago, society is divided into 5 factions. Abnegation the selfless, Dauntless the brave, Erudite the intelligent, Candor the honest, and Amity the peaceful. When all teenagers reach the age of 16, they must choose to either stay in their faction of birth, or transfer into another faction.",
      posterUrl: "https://img.yts.mx/assets/images/movies/Divergent_2014/medium-cover.jpg",
      rate: 3
    },
    {
      title: "The Theory of Everything",
      description: "The Theory of Everything is the story of the most brilliant and celebrated physicist of our time, Stephen Hawking, and Jane Wilde the arts student he fell in love with whilst studying at Cambridge in the 1960s.",
      posterUrl: "https://img.yts.mx/assets/images/movies/the_theory_of_everything_2014/medium-cover.jpg",
      rate: 5
    },
    {
      title: "Jumanji: The Next Level",
      description: "The gang is back but the game has changed. As they return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored, from the arid deserts to the snowy mountains, in order to escape the world's most dangerous game.",
      posterUrl: "https://img.yts.mx/assets/images/movies/jumanji_the_next_level_2019/medium-cover.jpg",
      rate: 2
    },
    {
      title: "Coco",
      description: "12-year-old boy named Miguel who is accidentally transported to the Land of the Dead, where he seeks the help of his deceased musician great-great-grandfather to return him to his family among the living and to reverse his family's ban on music.",
      posterUrl: "https://www.chroniquedisney.fr/imgAnimation/2010/2017-coco-01-big.jpg",
      rate: 1
    }
  ]);
  const [rateValue, setRateValue] = useState(0)
  const [searchValue, setSearchValue] = useState('');
  const [filtredMovie, setFiltredMovie] = useState(movie);
  const [formDisplay, setFormDisplay] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [moviePosterUrl, setMoviePosterUrl] = useState('');
  const [movieRate, setMovieRate] = useState('');

  useEffect(() => {
    setFiltredMovie(movie.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()) && el.rate >= rateValue))
  }, [searchValue, rateValue, movie]);

  const handleSubmit = () => {
    setMovie([...movie, { title: movieTitle, description: movieDescription, posterUrl: moviePosterUrl, rate: movieRate }]);
    setFormDisplay(false);
  }


  return (
    <div className="App">

      {formDisplay ? (
        <AddMovie setMovieTitle={setMovieTitle} setMoviePosterUrl={setMoviePosterUrl} setMovieRate={setMovieRate} setMovieDescription={setMovieDescription} setFormDisplay={setFormDisplay} handleSubmit={handleSubmit} />
      ) : (
          <>
            <div className="header" >
              <button className="addMovie" onClick={() => setFormDisplay(true)}>ADD MOVIE</button>
              <Filter setSearchValue={setSearchValue} setRateValue={setRateValue} rateValue={rateValue} />
            </div>

            <MovieList filtredMovie={filtredMovie} />

          </>
        )
      }
    </div >
  );
}

export default App;
