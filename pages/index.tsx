import MovieItem from '../components/MovieItem/MovieItem'
import SlideRow from '../components/SlideRow/SlideRow'
import styles from '../styles/Home.module.css'
import { Movie } from '../typings'
import request from '../utils/request'

interface Props {
  trendingMovies: Movie[];
  movies: Movie[];
}

const Home = ({
  movies,
  trendingMovies,
}: Props) => {
  
  return (
    <div className={styles.home}>
      <SlideRow title='Trending' movies={trendingMovies} />

      <h3 className={styles.title}>Recommended for you</h3>

      <div className={styles.movies}>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const moviesRes = await fetch(request.fetchNetflixOriginals);
  const movies = await moviesRes.json();

  const trendingMoviesRes = await fetch(request.fetchTrending);
  const trendingMovies = await trendingMoviesRes.json();

  return {
    props: {
      movies: movies.results,
      trendingMovies: trendingMovies.results,
    }
  }
}

export default Home
