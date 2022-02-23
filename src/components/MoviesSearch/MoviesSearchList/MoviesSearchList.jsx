import { Link } from 'react-router-dom';
import styles from './movies-search-list.module.css';

const MoviesSearchList = ({ movies, location }) => {
  const moviesList = movies.map(movie => (
    <li className={styles.item} key={movie.id}>
      <Link className={styles.link} to={`/movies/${movie.id}`} state={{from: location}}>
        <div>
          <img
            className={styles.itemImage}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://picsum.photos/200/300'}
            alt=""
          />
          <p>{movie.title ?? movie.name}</p>
        </div>
      </Link>
    </li>
  ));

  return (
    <div className={styles.section}>
      <ul className={styles.gallery}>{moviesList}</ul>
    </div>
  );
};

export default MoviesSearchList;
