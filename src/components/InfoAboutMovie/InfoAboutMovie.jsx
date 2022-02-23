import { useEffect, useState } from 'react';
import { getMovieById } from '../../shared/services/movies';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';

import styles from './info-about-movie.module.css'

const InfoAboutMovie = () => {
  const [info, setInfo] = useState(null);
  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await getMovieById(movieId);
        setInfo(data);
      } catch (err) {}
    };

    fetchInfo();
  }, [movieId]);

  const genres = info?.genres.map(genre => genre.name).join(', ')

  const goBack = ()=> navigate(from)

  return (
    <>
      {info && (
        <div className={styles.card}>
          <div className={styles.movieImage}>
          <img
            className={styles.image}
            src={info.poster_path ? `https://image.tmdb.org/t/p/w500${info.poster_path}` : 'https://picsum.photos/200/300'}
            alt=""
          />
          </div>
          <div className={styles.movieInfo}>
          <h2 className={styles.title}>{info.title}</h2>
          <p className={styles.text}>Vote: {info.vote_average}</p>
          <p className={styles.text}>Popularity: {info.popularity}</p>
          <p className={styles.text}>Genres: {genres}</p>
          <h2 className={styles.title} >Overview</h2>
          <p className={styles.text}>{info.overview}</p>
          </div>
        </div>
      )}
      <div className={styles.buttonWrapper}>
      <button className={styles.button} onClick={goBack} type='button'>Snap back to reality</button> 

      </div>

      <ul className={styles.menu}>
        <li>
          <Link className={styles.link} to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link className={styles.link} to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default InfoAboutMovie;
