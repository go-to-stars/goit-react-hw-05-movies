import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/'; // базовий URL
const API_KEY = 'da202acc53ecf63431320e0e34dbf559'; // ключ користувача

export const getTrending = async () => {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
  const responce = await axios(url);
  if (responce.status !== 200) {
    throw new Error(responce.status);
  } // якщо статус відповіді не дорівнює 200 (успішний запит), то прокидаємо помилку з цим статусом
  return responce.data.results;
}; // асинхронна фукція getTrending() очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (тренди сьогоднішнього дня)

export const searchMovies = async query => {
  const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`;
  const responce = await axios(url);
  if (responce.status !== 200) {
    throw new Error(responce.status);
  } // якщо статус відповіді не дорівнює 200 (успішний запит), то прокидаємо помилку з цим статусом
  return responce.data.results;
}; // асинхронна фукція searchMovies() очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (за запитом query, список фільмів)

export const getMovieDetails = async id => {
  const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
  const responce = await axios(url);
  if (responce.status !== 200) {
    throw new Error(responce.status);
  } // якщо статус відповіді не дорівнює 200 (успішний запит), то прокидаємо помилку з цим статусом
  return responce.data;
}; // асинхронна фукція getMovieDetails() очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (деталі фільму за запитом id фільму)

export const getMovieCredits = async id => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
  const responce = await axios(url);
  if (responce.status !== 200) {
    throw new Error(responce.status);
  } // якщо статус відповіді не дорівнює 200 (успішний запит), то прокидаємо помилку з цим статусом
  return responce.data.cast;
}; // асинхронна фукція getMovieDetails() очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (акторів за запитом id фільму)

export const getMovieReviews = async id => {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
  const responce = await axios(url);
  if (responce.status !== 200) {
    throw new Error(responce.status);
  } // якщо статус відповіді не дорівнює 200 (успішний запит), то прокидаємо помилку з цим статусом
  return responce.data.results;
}; // асинхронна фукція getMovieDetails() очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (відгуки за запитом id фільму)
