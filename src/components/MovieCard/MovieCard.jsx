import {
  MovieCardBox,
  BoxImg,
  Img,
  BoxDescription,
  DescriptionTitle,
  DescriptionText,
  DescriptionSubTitle,
} from './MovieCard.styled';

const MovieCard = ({ movieDetails }) => {
    const URL = 'https://image.tmdb.org/t/p/w500'; // базова адреса
    const defaultImg = '../../img/defaultImg.png'; // картинка за замовчування
    
  return (
    <MovieCardBox>
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
          {movieDetails.release_date && movieDetails.release_date.slice(0, 4)}
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
    </MovieCardBox>
  );
}; // функція MovieCard повертає для рендеру розмітку картки фільму на сторінку Movie

export default MovieCard; // дефолтний експорт функції Cast
