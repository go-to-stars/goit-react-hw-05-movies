import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { BiArrowBack } from 'react-icons/bi';
import { getMovieDetails } from '../../services/apiService';
import {
  ContainerMovieDetails,
  ButtonBack,
  ButtonBackText,
  ErrorTextMovieDetails,
  MovieCard,
  BoxImg,
  Img,
  BoxDescription,
  DescriptionTitle,
  DescriptionText,
  DescriptionSubTitle,
  ListAdditionalDescr,
  ListAdditionalDescrItem,
  ListAdditionalDescrNav,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams(); // виклик хука useParams повертає об’єкт пар ключ/значення динамічних параметрів із поточної URL-адреси, які відповідають <Route path>.
  const [isLoading, setIsLoading] = useState(false); // виклик хука useState створює стан isLoading і метод setIsLoading, який змінює його значення
  const [movieDetails, setMovieDetails] = useState(null); // виклик хука useState створює стан movieDetails і метод setМovieDetails, який змінює його значення
  const [error, setError] = useState(null); // виклик хука useState створює стан error і метод setError, який змінює його значення
  let location = useLocation(); //  хук useLocation повертає поточний location об'єкт
  let linkLocationReference = useRef(location.state?.from ?? '/movies'); // хук useRef повертає змінний об’єкт посилання, .current властивість якого ініціалізовано переданим аргументом ( initialValue). Повернений об’єкт зберігатиметься протягом повного життя компонента.
  const URL = 'https://image.tmdb.org/t/p/w500'; // базова адреса
  const defaultImg = '../../img/defaultImg.png'; // картинка за замовчування

  useEffect(() => {
    if (movieId !== '') {
      try {
        setIsLoading(true); // записуємо true в стан isLoading (показати лоадер)
        getMovieDetails(movieId)
          .then(respons => {
            const data = respons;
            setMovieDetails(data); // записуємо отримані дані в стан MovieDetails
            setIsLoading(false); // записуємо false в стан isLoading (сховати лоадер)

            if (data.length === 0) {
              Notiflix.Notify.failure(
                'There are no movie for this request. Please try another movie.'
              );
            } // при пустому масиві у відповіді, виводимо відповідне повідомлення
          })
          .catch(error => {
            setError(error); // записуємо помилку error в стан error
            Notiflix.Notify.failure(
              'Oops, sorry, there were problems with the download. Please try again.'
            );
            console.log('Error', error.message);
          }); //передача вмісту запиту Id в фукцію "setMovieDetails" та очікування на відповідь; при правильній відповіді додаємо її в відповідні стани, при помилці виводимо відповідне повідомлення
      } catch (error) {
        setError(error); // записуємо помилку error в стан error
        Notiflix.Notify.failure(
          'Oops, sorry, there were problems with the download. Please try again.'
        );
        console.log('Error', error.message);
      }
    } // якщо немає Id-фільму, то запит на сервер не робимо
  }, [movieId]); // якщо змінився Id-фільму (movieId) то виконуємо запит на сервер, при позитивній відповіді додаємо її в стан MovieDetails

  return (
    <ContainerMovieDetails>
      <ButtonBack to={linkLocationReference.current}>
        <BiArrowBack />
        <ButtonBackText>Go back</ButtonBackText>
      </ButtonBack>

      {isLoading && <Loader />}

      {error && <ErrorTextMovieDetails>{error.message}</ErrorTextMovieDetails>}

      {movieDetails && (
        <MovieCard>
          <BoxImg>
            {movieDetails.poster_path && (
              <Img
                src={
                  movieDetails.poster_path
                    ? `${URL}${movieDetails.poster_path}`
                    : defaultImg
                }
                alt={
                  movieDetails.original_title
                    ? movieDetails.original_title
                    : 'poster'
                }
              />
            )}
          </BoxImg>
          <BoxDescription>
            <DescriptionTitle>
              {movieDetails.original_title}
              {' ('}
              {movieDetails.release_date &&
                movieDetails.release_date.slice(0, 4)}
              {')'}
            </DescriptionTitle>
            <DescriptionText>
              User score: {Math.round(movieDetails.vote_average * 10)}%
            </DescriptionText>
            <DescriptionSubTitle>Overview</DescriptionSubTitle>
            <DescriptionText>{movieDetails.overview}</DescriptionText>
            <DescriptionSubTitle>Genres</DescriptionSubTitle>
            <DescriptionText>
              {movieDetails.genres &&
                movieDetails.genres.map(val => val.name + ' ')}
            </DescriptionText>
          </BoxDescription>
        </MovieCard>
      )}
      <DescriptionSubTitle>Additional information</DescriptionSubTitle>
      <ListAdditionalDescr>
        <ListAdditionalDescrItem>
          <ListAdditionalDescrNav
            to="cast"
            state={{ from: location.state?.from ?? '/' }}
          >
            Cast
          </ListAdditionalDescrNav>
        </ListAdditionalDescrItem>
        <ListAdditionalDescrItem>
          <ListAdditionalDescrNav
            to="reviews"
            state={{ from: location.state?.from ?? '/' }}
          >
            Reviews
          </ListAdditionalDescrNav>
        </ListAdditionalDescrItem>
      </ListAdditionalDescr>
      <Suspense fallback={<Loader />}>
        <Suspense>
          <Outlet />
        </Suspense>
      </Suspense>
    </ContainerMovieDetails>
  );
};

export default MovieDetails;

// return (
//   <ContainerMovieDetails>  // контейнер сторіки
//     <ButtonBack to={linkLocationReference.current}>
//       <BiArrowBack />  // svg кнопки "повенутися назад"
//       <ButtonBackText>Go back</ButtonBackText>  // текст кнопки "повенутися назад"
//     </ButtonBack> // кнопка "повенутися назад"

//     {isLoading && <Loader />} // якщо йде завантаження, показуємо спіннер

//     {error && <ErrorTextMovieDetails>{error.message}</ErrorTextMovieDetails>} // якщо є помилка, виводимо повідомлення з її тестом

//     {movieDetails && (
//       <MovieCard>
//         <BoxImg>
//           {movieDetails.poster_path && (
//             <Img
//               src={
//                 movieDetails.poster_path
//                   ? `${URL}${movieDetails.poster_path}`
//                   : defaultImg
//               } якщо немає посилання на зображення, завантажуємо зображення по замовчуванню
//               alt={
//                 movieDetails.original_title
//                   ? movieDetails.original_title
//                   : 'poster'
//               } якщо немає підпису зображення, завантажуємо підпис по замовчуванню
//             /> // рендер зображення постеру
//           )}
//         </BoxImg> // тумба (контейнер) малюнку
//         <BoxDescription>
//           <DescriptionTitle>
//             {movieDetails.original_title}
//             {' ('}
//             {movieDetails.release_date && movieDetails.release_date.slice(0, 4)}
//             {')'}
//           </DescriptionTitle> // заголовок фільму з датою виходу
//           <DescriptionText>
//             User score: {Math.round(movieDetails.vote_average * 10)}%
//           </DescriptionText> // статистика глядацького голосування
//           <DescriptionSubTitle>Overview</DescriptionSubTitle> // заголовок огляду фільму
//           <DescriptionText>{movieDetails.overview}</DescriptionText> // огляд фільму
//           <DescriptionSubTitle>Genres</DescriptionSubTitle> // заголовок жанрів фільму
//           <DescriptionText>
//             {movieDetails.genres &&
//               movieDetails.genres.map(val => val.name + ' ')}
//           </DescriptionText> // жанри фільму
//         </BoxDescription> // контейнер деталей фільму
//       </MovieCard> // контейнер картки фільму
//     )}
//     <DescriptionSubTitle>Additional information</DescriptionSubTitle>
//     <ListAdditionalDescr>
//       <ListAdditionalDescrItem>
//         <ListAdditionalDescrNav to="cast">Cast</ListAdditionalDescrNav>
//       </ListAdditionalDescrItem>
//       <ListAdditionalDescrItem>
//         <ListAdditionalDescrNav to="reviews">Reviews</ListAdditionalDescrNav>
//       </ListAdditionalDescrItem>
//     </ListAdditionalDescr>
//     <Suspense fallback={<Loader />}>
//       <Outlet />
//     </Suspense>
//   </ContainerMovieDetails>
// );
