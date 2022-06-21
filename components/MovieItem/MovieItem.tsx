import Image from 'next/image';
import { Movie } from '../../typings';
import classes from './MovieItem.module.css'

import {
    BsBookmark,
    BsBookmarkFill,
} from 'react-icons/bs'

import {
    useAppDispatch,
    useAppSelector,
} from '../../store/hook'

import {
    selectBookmarkData,
    toggleBookmark,
} from '../../store/features/bookmarkSlice'
import { isBookmarded } from '../../utils';

interface Props {
    movie: Movie;
    wide?: boolean;
}

const MovieItem = ({
    movie,
    wide = false,
}: Props) => {
  const dispatch = useAppDispatch();
  const bookmarkData = useAppSelector(selectBookmarkData);

  const bookmarked = isBookmarded(movie.id, bookmarkData);

  const handleBookmark = () => {
    dispatch(toggleBookmark({
        id: movie.id,
        movie,
    }));
  }

  const mainClasses = wide 
    ? [classes.movieItem, classes.wide] 
    : [classes.movieItem];

  const date = new Date((movie?.release_date || movie?.first_air_date || '') as string);
  const year = date.getFullYear();

  const detailTexts = [];
  if (year) detailTexts.push(year);
  if (movie.media_type) detailTexts.push(movie.media_type);
  if (movie.vote_average) detailTexts.push(movie.vote_average);

  return (
    <li className={mainClasses.join(" ")}>
        <Image 
            src={`https://image.tmdb.org/t/p/w500${
                movie.backdrop_path || movie.poster_path
            }`}
            alt={movie.title}
            layout="responsive"
            width="100%"
            height={50}
            className={classes.coverImage}
        />

        <button className={classes.bookmark} onClick={handleBookmark}>
            {bookmarked ? (
                <BsBookmarkFill className={classes.icon} /> 
            ): (
                <BsBookmark className={classes.icon} />
            )}
        </button>

        <div className={classes.info}>
            <p className={classes.details}>
                {detailTexts.join(" · ")}
            </p>

            <h3 className={classes.name}>{movie.name || movie.original_name || "Name"}</h3>
        </div>
    </li>
  )
}

export default MovieItem