import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import ListMovies from '../../components/MoviesList/MoviesList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { searchMovies } from '../../services/apiService';
import { ContainerMovies, ErrorTextMovies } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // хук useSearchParams використовується для читання та зміни рядка запиту в URL для поточного розташування. useSearchParams повертає масив із двох значень: параметри пошуку поточного розташування (searchParams) та функцію, яка може бути використана для його оновлення (setSearchParams).
  const query = searchParams.get('query') ?? ''; // змінній query присвоюємо значення хука searchParams, якщо воно є, інакше пустий рядок
  const [searchQuery, setSearchQuery] = useState(''); // виклик хука useState створює стан searchQuery і метод setSearchQuery, який змінює його значення
  const [listSearchMovies, setListSearchMovies] = useState([]); // виклик хука useState створює стан listSearchMovies і метод setListSearchMovies, який змінює його значення
  const location = useLocation(); //стек історії навігації описаний об'єктом розташування (location) знабором властивостей, які зберігають повну інформацію про URL
  const [error, setError] = useState(null); // виклик хука useState створює стан error і метод setError, який змінює його значення
  const [isLoading, setIsLoading] = useState(false); // виклик хука useState створює стан isLoading і метод setIsLoading, який змінює його значення

  useEffect(() => {
    if (query !== '') {
      try {
        setIsLoading(true); // записуємо true в стан isLoading (показати лоадер)
        searchMovies(query)
          .then(respons => {
            const data = respons;
            setListSearchMovies(data); // записуємо отримані дані в стан listMovies
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
  }, [query]); // якщо змінився запит (query) то виконуємо запит на сервер, при позитивній відповіді додаємо її в стан listMovies

  const inputChange = e => setSearchQuery(e.target.value.toLowerCase()); // функція inputChange, при зміні інпуту записує його значення в стан searchQuery

  const formSubmit = e => {
    searchQuery && setSearchParams({ query: searchQuery });
    e.target = '';
  }; // функція formSubmit, записує в стан searchParams (рядка URL) значення стану searchQuery

  return (
    <ContainerMovies>
      <SearchForm
        formSubmit={formSubmit}
        searchQuery={searchQuery}
        inputChange={inputChange}
      />

      {error && <ErrorTextMovies>{error.message}</ErrorTextMovies>}

      {isLoading && <Loader />}

      <ListMovies
        listMovies={listSearchMovies}
        pathLink={''}
        location={location}
      />
    </ContainerMovies>
  );
}; // функція Movies повертає для рендеру розмітку сторінку Movies (пошуковий рядок, та список знайденого за запитом)

export default Movies; // дефолтний експорт функції Movies
