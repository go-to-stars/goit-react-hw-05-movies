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
  const [listMovies, setListMovies] = useState([]); // виклик хука listMovies створює стан error і метод setListMovies, який змінює його значення
  const [error, setError] = useState(null); // виклик хука useState створює стан error і метод setError, який змінює його значення
  const location = useLocation(); //стек історії навігації описаний об'єктом розташування (location) знабором властивостей, які зберігають повну інформацію про URL

  useEffect(() => {
    getTrending()
      .then(respons => {
        const data = respons;
        setListMovies(data);
      })
      .catch(error => setError(error));
  }, []); // при кожному рендері сторінки виконуємо запит на сервер, при позитивній відповіді додаємо її в стан listMovies

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
}; // функція Home повертає для рендеру розмітку сторінки Home (список головних трендів цього дня)

export default Home; // дефолтний експорт функції Home
