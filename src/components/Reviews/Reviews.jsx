import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { getMovieReviews } from '../../services/apiService';
import defaultImg from '../../img/defaultImgActor.png'; // картинка за замовчування
import {
  ListReviews,
  ListReviewsItem,
  ErrorTextReviews,
  ReviewCard,
  BoxImg,
  Img,
  AutorReview,
  TextReview,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [listReviews, setListReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // виклик хука useState створює стан isLoading і метод setIsLoading, який змінює його значення
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId !== '') {
      try {
        setIsLoading(true); // записуємо true в стан isLoading (показати лоадер)
        getMovieReviews(movieId)
          .then(respons => {
            const data = respons;
            setListReviews(data); // записуємо отримані дані в стан MovieDetails
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
    } // якщо немає Id, то запит на сервер не робимо
  }, [movieId]); // якщо змінився Id-фільму (movieId) то виконуємо запит на сервер, при позитивній відповіді додаємо її в стан MovieDetails
  console.log(listReviews);

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
                      val.author_details.avatar_path !== null
                        ? val.author_details.avatar_path.substring(1)
                        : defaultImg
                    }
                    alt={val.author ? val.author : 'author'}
                  />
                </BoxImg>
                <AutorReview>Author: {val.author}</AutorReview>
                <TextReview>{val.content}</TextReview>
              </ReviewCard>
              {/* <AutorReview>Author: {val.author}</AutorReview>
              <TextReview>{val.content}</TextReview> */}
            </ListReviewsItem>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ListReviews>
    </>
  );
};

export default Reviews;
