import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from '../../services/apiService';
import MoviesList from '../../components/MoviesList/MoviesList';

import { ContainerHome, TitleHome, ErrorTextHome } from './Home.styled';

const Home = () => {
  const [listTrendingMovies, setListTrendingMovies] = useState([]); // виклик хука listTrendingMovies створює стан error і метод setListTrendingMovies, який змінює його значення
  const [error, setError] = useState(null); // виклик хука useState створює стан error і метод setError, який змінює його значення
  const location = useLocation(); //стек історії навігації описаний об'єктом розташування (location) знабором властивостей, які зберігають повну інформацію про URL

  useEffect(() => {
    getTrending()
      .then(respons => {
        const data = respons;
        setListTrendingMovies(data);
      })
      .catch(error => setError(error));
  }, []); // при кожному рендері сторінки виконуємо запит на сервер, при позитивній відповіді додаємо її в стан listMovies

  return (
    <ContainerHome>
      <TitleHome>Trending today</TitleHome>

      {error && <ErrorTextHome>{error.message}</ErrorTextHome>}

      <MoviesList
        listMovies={listTrendingMovies}
        pathLink={'movies/'}
        location={location}
      />
    </ContainerHome>
  );
}; // функція Home повертає для рендеру розмітку сторінки Home (список головних трендів цього дня)

export default Home; // дефолтний експорт функції Home
