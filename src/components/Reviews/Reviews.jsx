import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { getMovieReviews } from '../../services/apiService';
import defaultImg from '../../img/defaultImgAuthor.png'; // картинка за замовчування
import {
  ListReviews,
  ListReviewsItem,
  ErrorTextReviews,
  ReviewCard,
  BoxImg,
  Img,
  AutorReview,
  TextReview,
  ErrorTextReview,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams(); // виклик хука useParams повертає об’єкт пар ключ/значення динамічних параметрів із поточної URL-адреси, які відповідають <Route path>.
  const [listReviews, setListReviews] = useState([]); // виклик хука useState створює стан listReviews і метод setListReviews, який змінює його значення
  const [isLoading, setIsLoading] = useState(false); // виклик хука useState створює стан isLoading і метод setIsLoading, який змінює його значення
  const [error, setError] = useState(null); // виклик хука useState створює стан error і метод setError, який змінює його значення

  useEffect(() => {
    if (movieId !== '') {
      try {
        setIsLoading(true); // записуємо true в стан isLoading (показати лоадер)
        getMovieReviews(movieId)
          .then(respons => {
            const data = respons;
            setListReviews(data); // записуємо отримані дані в стан listReviews
            setIsLoading(false); // записуємо false в стан isLoading (сховати лоадер)
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
    <>
      {isLoading && <Loader />}

      {error && <ErrorTextReviews>{error.message}</ErrorTextReviews>}

      <ListReviews>
        {listReviews.length > 0 ? (
          listReviews.map(val => (
            <ListReviewsItem key={val.id}>
              <ReviewCard>
                <BoxImg>
                  <Img
                    src={
                      val.author_details.avatar_path &&
                      val.author_details.avatar_path !== null &&
                      val.author_details.avatar_path.slice(1, 6) === 'https'
                        ? val.author_details.avatar_path.substring(1)
                        : defaultImg
                    }
                    alt={val.author ? val.author : 'author'}
                  />
                </BoxImg>
                <AutorReview>Author: {val.author}</AutorReview>
                <TextReview>{val.content}</TextReview>
              </ReviewCard>
            </ListReviewsItem>
          ))
        ) : (
          <ErrorTextReview>
            We don't have any reviews for this movie.
          </ErrorTextReview>
        )}
      </ListReviews>
    </>
  );
}; // функція Reviews повертає для рендеру розмітку на сторінку Movie компонента Reviews (відгуки на фільм)

export default Reviews; // дефолтний експорт функції Reviews
