import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { getMovieCredits } from '../../services/apiService';
import defaultImg from '../../img/defaultImgActor.png'; // картинка за замовчування
import defaultImgFemale from '../../img/defaultImgFemale.png'; // картинка за замовчування
import defaultImgMale from '../../img/defaultImgMale.png'; // картинка за замовчування
import {
  ListCast,
  ListCastItem,
  ErrorTextCast,
  BoxImg,
  Img,
  TextCast,
  TextCastInfo,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [listCasts, setListCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // виклик хука useState створює стан isLoading і метод setIsLoading, який змінює його значення
  const [error, setError] = useState(null);
  const URL = 'https://image.tmdb.org/t/p/w500'; // базова адреса

  const defImg = gender => {
    let imgDefault = '';
    switch (gender) {
      case '1':
        imgDefault = defaultImgFemale;
        break;
      case '2':
        imgDefault = defaultImgMale;
        break;
      default:
        imgDefault = defaultImg;
        break;
    }
    return imgDefault;
  };

  useEffect(() => {
    if (movieId !== '') {
      try {
        setIsLoading(true); // записуємо true в стан isLoading (показати лоадер)
        getMovieCredits(movieId)
          .then(respons => {
            const data = respons;
            setListCasts(data); // записуємо отримані дані в стан listCasts
            setIsLoading(false); // записуємо false в стан isLoading (сховати лоадер)
          })
          .catch(error => {
            setError(error); // записуємо помилку error в стан error
            Notiflix.Notify.failure(
              'Oops, sorry, there were problems with the download. Please try again.'
            );
            console.log('Error', error.message);
          }); //передача вмісту запиту Id в фукцію "getMovieCredits" та очікування на відповідь; при правильній відповіді додаємо її в відповідні стани, при помилці виводимо відповідне повідомлення
      } catch (error) {
        setError(error); // записуємо помилку error в стан error
        Notiflix.Notify.failure(
          'Oops, sorry, there were problems with the download. Please try again.'
        );
        console.log('Error', error.message);
      }
    } // якщо немає Id, то запит на сервер не робимо
  }, [movieId]); // якщо змінився Id-фільму (movieId) то виконуємо запит на сервер, при позитивній відповіді додаємо її в стан listCast

  return (
    <>
      {isLoading && <Loader />}

      {error && <ErrorTextCast>{error.message}</ErrorTextCast>}

      {listCasts && listCasts.length > 0 ? (
        <ListCast>
          {listCasts.map(val => (
            <ListCastItem key={val.id}>
              <BoxImg>
                <Img
                  src={
                    val.profile_path && val.profile_path !== null
                      ? `${URL}${val.profile_path}`
                      : defImg(val.gender)
                  }
                  alt={val.name ? val.name : 'actor'}
                />
              </BoxImg>
              <TextCast>{val.name}</TextCast>
              <TextCast>Character: {val.character}</TextCast>
              <TextCast>Popularity: {val.popularity}</TextCast>
            </ListCastItem>
          ))}
        </ListCast>
      ) : (
        <div>
          <TextCastInfo>No actors for this Movie</TextCastInfo>
        </div>
      )}
    </>
  );
};

export default Cast;
