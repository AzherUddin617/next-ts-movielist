import { Movie } from 'typings';
import MovieItem from '../MovieItem/MovieItem';
import classes from './SlideRow.module.css';

interface Props {
    title: string;
    movies: Movie[];
}

const SlideRow = ({ title, movies }: Props) => {
  return (
    <div className={classes.slideRow}>
        <h2 className={classes.title}>{title}</h2>

        <div className={classes.slider}>
            <ul className={classes.list}>
                {movies?.map(movie => (
                    <MovieItem key={movie.id} movie={movie} wide={true} />
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SlideRow