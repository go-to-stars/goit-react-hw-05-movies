import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { BsSearch } from 'react-icons/bs';
import { searchMovies } from '../../services/apiService';
import {
  ContainerMovies,
  FormContainer,
  Input,
  Button,
  ListMovies,
  ListItemMovies,
  ErrorTextMovies,
  ButtonText,
} from './Movies.styled';

const queryRegex = /^[a-zA-Zа-яА-Я]*$/; // регулярний вираз для запиту

const schema = Yup.object().shape({
  query: Yup.string()
    .matches(queryRegex, 'Query is not valid!')
    .max(15, 'Too Long!')
    .trim(),
}); // валідація полів форми

const INITIAL_STATE = {
  query: '',
}; // ініціалізація полів форми

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [listMovies, setListMovies] = useState([]);
  const location = useLocation();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // виклик хука useState створює стан isLoading і метод setIsLoading, який змінює його значення

  useEffect(() => {
    if (query !== '') {
      try {
        setIsLoading(true); // записуємо true в стан isLoading (показати лоадер)
        searchMovies(query)
          .then(respons => {
            const data = respons;
            setListMovies(data); // записуємо отримані дані в стан ListMovies
            setIsLoading(false); // записуємо false в стан isLoading (сховати лоадер)

            if (data.length === 0) {
              Notiflix.Notify.failure(
                'There are no movies for this request. Please try another query.'
              );
            } // при пустому масиві у відповіді, виводимо відповідне повідомлення
          })
          .catch(error => {
            setError(error); // записуємо помилку error в стан error
            Notiflix.Notify.failure(
              'Oops, sorry, there were problems with the download. Please try again.'
            );
            console.log('Error', error.message);
          }); //передача вмісту запиту query і номера сторінки page в фукцію "searchMovies" та очікування на відповідь; при правильній відповіді додаємо її в відповідні стани, при помилці виводимо відповідне повідомлення
      } catch (error) {
        setError(error); // записуємо помилку error в стан error
        Notiflix.Notify.failure(
          'Oops, sorry, there were problems with the download. Please try again.'
        );
        console.log('Error', error.message);
      }
    } // якщо поле query пусте, то запит на сервер не робимо
  }, [query]); // якщо змінився запит (query) то виконуємо запит на сервер, при позитивній відповіді додаємо її в стан ListMovies

  const inputChange = e => setSearchQuery(e.target.value.toLowerCase());

  const formSubmit = e => {
    // e.preventDefault();    
    searchQuery && setSearchParams({ query: searchQuery });
    e.target = '';
  };

  return (
    <ContainerMovies>
      <Formik
        initialValues={INITIAL_STATE}
        validationSchema={schema}
        onSubmit={formSubmit}
      >
        <FormContainer>
          <Input
            type="text"
            name="query"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            onChange={inputChange}
          />
          <Button type="submit">
            <BsSearch />
            <ButtonText>Search</ButtonText>
          </Button>
          {error && <ErrorTextMovies>{error.message}</ErrorTextMovies>}
        </FormContainer>
      </Formik>
      {isLoading && <Loader />}
      <ListMovies>
        {listMovies.map(movie => (
          <ListItemMovies key={movie.id} className={'content'}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </ListItemMovies>
        ))}
      </ListMovies>
    </ContainerMovies>
  );
};

export default Movies;
