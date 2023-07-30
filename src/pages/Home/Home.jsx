import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from '../../services/apiService';
import {
  ContainerHome,
  TitleHome,
  ListHome,
  ListItemHome,
  ErrorTextHome,
} from './Home.styled';

const Home = () => {
  const [listMovies, setListMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getTrending()
      .then(respons => {
        const data = respons;
        setListMovies(data);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <ContainerHome>
      <TitleHome>Trending today</TitleHome>
      <ListHome>
        {error && <ErrorTextHome>{error.message}</ErrorTextHome>}

        {listMovies.map(movie => (
          <ListItemHome key={movie.id}>
            <Link
              to={`movies/${movie.id}`}
              state={{ from: location }}
              className={'content'}
            >
              {movie.title}
            </Link>
          </ListItemHome>
        ))}
      </ListHome>
    </ContainerHome>
  );
};

export default Home;
