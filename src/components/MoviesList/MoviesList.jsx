import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItem } from './MoviesList.styled';

const MoviesList = ({ listMovies, pathLink, location }) => {
  return (
    <List>
      {listMovies.map(movie => (
        <ListItem key={movie.id} className={'content'}>
          <Link
            to={`${pathLink}${movie.id}`}
            state={{ from: location }}
            className={'content'}
          >
            {movie.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}; // функція ListMovies повертає для рендеру розмітку компоненту ListMovies (список фільмів)

MoviesList.propTypes = {
  listMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  pathLink: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
}; // типізація (опис типів) пропсів функції ListMovies

export default MoviesList; // дефолтний експорт функції ListMovies
