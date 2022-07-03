import MovieItem from '@/components/MovieItem/MovieItem'
import styles from '@/styles/Home.module.css'

import {
    useAppSelector,
} from '../store/hook'

import {
    selectBookmarkData,
} from '../store/features/bookmarkSlice'

const Bookmark = () => {
    const bookmarkData = useAppSelector(selectBookmarkData);

    const bookmarkedMovies = Object.keys(bookmarkData)
        .filter(key => bookmarkData[key].active)
        .map((key) => bookmarkData[key].movie)
  
    return (
        <div className={styles.home}>
            <h3 className={styles.title}>Bookmerked</h3>

            <div className={styles.movies}>
                {bookmarkedMovies.map(movie => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Bookmark
