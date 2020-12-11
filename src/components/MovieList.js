
import MovieCard from './MovieCard';


const MovieList = ({ filtredMovie }) => {

    return (
        <div className='cardGroup'>
            { filtredMovie.map((el, i) =>
                <MovieCard key={i}
                    title={el.title}
                    description={el.description}
                    posterUrl={el.posterUrl}
                    rate={el.rate} />)}
        </div>

    );
}
export default MovieList;