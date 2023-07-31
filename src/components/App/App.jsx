import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Container } from './App.styled';
import Layout from '../Layout/Layout';


const Home = lazy(() => import('../../pages/Home/Home')); // розділення коду за допомогою динамічного імпорту сторінки Home
const Movies = lazy(() => import('../../pages/Movies/Movies')); // розділення коду за допомогою динамічного імпорту сторінки Movies
const MovieDetails = lazy(
  () => import('../../pages/MovieDetails/MovieDetails') 
); // розділення коду за допомогою динамічного імпорту сторінки MovieDetails
const Cast = lazy(() => import('../Cast/Cast')); // розділення коду за допомогою динамічного імпорту компонента Cast
const Reviews = lazy(() => import('../Reviews/Reviews')); // розділення коду за допомогою динамічного імпорту компонента Reviews

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
}; // функція App повернення для рендеру розмітку застосунку "Пошук фільмів" (сторінки Home, Movies, MovieDetails та компоненти Layout, Cast та Reviews)

export default App; // дефолтний експорт функції App  
