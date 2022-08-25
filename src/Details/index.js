import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetails } from '../services/requests/moves';
import { Container } from './style';

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const fetchDetailsMovies = async (id) => {
    try {
      const { data } = await getDetails(id);
      setMovie(data);
    } catch (error) {
      alert('Ops, não foi possível carregar as informações');
    }
  };

  useEffect(() => {
    fetchDetailsMovies(id);
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <Link to="/">
          <button>◀</button>
        </Link>

        <img src={movie.image} alt={movie.description} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse</span>
          <p>{movie.description}</p>
          <span className="info">
            <b>Diretor:</b> {movie.director} <br />
            <b>Produtor:</b> {movie.producer}
          </span>
        </div>
      </div>
    </Container>
  );
}

export default Details;
