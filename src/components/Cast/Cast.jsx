import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { getMovieCredits } from '../../services/apiService';
import defaultImg from '../../img/defaultImgActor.png'; // картинка за замовчування
import defaultImgFemale from '../../img/defaultImgFemale.png'; // картинка жінкиза замовчування
import defaultImgMale from '../../img/defaultImgMale.png'; // картинка чоловіка за замовчування
import {
  ListCast,
  ListCastItem,
  ErrorTextCast,
  BoxImg,
  Img,
  TextCastTitle,
  TextCast,
  TextCastInfo,
} from './Cast.styled';

const initStrSeparate = {
  maxLenghtFierstStr: 15,
  maxLenghtSecondStr: 26,
}; // обмеження максимальної довжини 1 та 2 рядків властивості Character

const Cast = () => {
  const { movieId } = useParams(); // виклик хука useParams повертає об’єкт пар ключ/значення динамічних параметрів із поточної URL-адреси, які відповідають <Route path>.
  const [listCasts, setListCasts] = useState([]); // виклик хука useState створює стан listCasts і метод setListCasts, який змінює його значення
  const [isLoading, setIsLoading] = useState(false); // виклик хука useState створює стан isLoading і метод setIsLoading, який змінює його значення
  const [error, setError] = useState(null); // виклик хука useState створює стан error і метод setError, який змінює його значення
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
  }; // функція defImg повертає зображення по замовчуванню (чоловік, жінка, особа без статі) в залежності від статі

  const strSeparate = (str, number) => {
    let strRezult = '';
    const findPosition = str.lastIndexOf(
      ' ',
      initStrSeparate.maxLenghtFierstStr
    ); // якщо в рядку, з початку рядка і до максимальної довжини 1-го рядка, є пробіл то знаходимо його останню позицію, інакше - "-1"

    const isPosition = findPosition === -1; // якщо в рядку немає пробілу, то isPosition = true
    const isMaxLenght = str.length > initStrSeparate.maxLenghtFierstStr; // якщо довжина всьго рядка більша за максимальну довжину 1-го рядка, то isMaxLenght = true

    if (str === 0) {
      return (strRezult = '-');
    } // якщо рядок пустий, то повертаємо '-'

    switch (number) {
      case 1:
        strRezult = str.slice(
          0,
          isMaxLenght
            ? isPosition
              ? initStrSeparate.maxLenghtFierstStr
              : findPosition
            : str.length
        ); // з рядка витягнути частину з 0 позиції по: якщо isMaxLenght = true, то (якщо isPosition = true, то до кінця максимальної довжини 1-го рядка, інакше, по позицію пробілу), інікше по довжину всього рядка
        break;
      case 2:
        strRezult = str.slice(
          isMaxLenght
            ? isPosition
              ? initStrSeparate.maxLenghtFierstStr
              : findPosition + 1
            : str.length,
          isPosition
            ? initStrSeparate.maxLenghtFierstStr +
                initStrSeparate.maxLenghtSecondStr
            : findPosition + initStrSeparate.maxLenghtSecondStr
        ); // з рядка витягнути частину з ((якщо isMaxLenght = true, то (якщо isPosition = true, то з кінця максимальної довжини 1-го рядка, інакше, з позиції пробілу + 1), інікше з довжини всього рядка) позиції (повертається пустий рядок), по: якщо isPosition = true, то по кінець максимальної довжини 2-го рядка, інакше, по позицію пробілу + максимальнона довжини 2-го рядка
        strRezult = strRezult === '' ? '-' : strRezult; // якщо рядок пустий, то повертаємо '-'
        break;
      default:
        strRezult = str.slice(
          0,
          0,
          isPosition ? initStrSeparate.maxLenghtFierstStr : findPosition
        );
        break;
    }
    return strRezult;
  }; // функція strSeparate розділяє властивість Character картки актора на 2 рядки в залежності від її довжини

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
    } // якщо немає Id-фільму, то запит на сервер не робимо
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
              <TextCastTitle>{val.name}</TextCastTitle>
              <TextCast>Character: {strSeparate(val.character, 1)}</TextCast>
              <TextCast> {strSeparate(val.character, 2)}</TextCast>
              <TextCast>Popularity: {val.popularity}</TextCast>
            </ListCastItem>
          ))}
        </ListCast>
      ) : (
        <TextCastInfo>No actors for this Movie</TextCastInfo>
      )}
    </>
  );
}; // функція Cast повертає для рендеру розмітку на сторінку Movie компонента Cast (актоський склад)

export default Cast; // дефолтний експорт функції Cast
