import { Container, List, Movie } from './style';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies, updateDatabase } from '../../services/requests/moves';

function Home() {
  const [moviesData, setMoviesData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (page = 1) => {
    try {
      setLoading(true);
      const { data } = await getMovies({ page });
      setMoviesData(data);
      setLoading(false);
    } catch (error) {
      alert('Ops, não foi possível carregar as informações');
    }
  };

  const fetchUpdateDatabase = async () => {
    try {
      await updateDatabase();
      fetchMovies();
    } catch (error) {
      alert('Ops, não foi possível carregar as informações');
    }
  };

  const onPaginationClick = (isNext) => {
    try {
      const currentPage = parseInt(moviesData.currentPage, 10);
      const totalPages = parseInt(moviesData.totalPages, 10);
      if (currentPage === 1 && !isNext) return;
      else if (currentPage === totalPages && isNext) return;
      fetchMovies(isNext ? currentPage + 1 : currentPage - 1);
    } catch (error) {
      alert('Ops, não foi possivel carregar!');
    }
  };

  useEffect(() => {
    if (!moviesData) fetchMovies();
  }, [moviesData]);

  return (
    <Container>
      <header>
        <button onClick={() => fetchUpdateDatabase()} className="reflesh">
          Atualizar
        </button>
      </header>

      <h1>Animao</h1>
      {loading && <p className="loading">Carregando...</p>}
      <List>
        {moviesData?.posts.map((movie) => {
          return (
            <Movie key={movie._id}>
              <Link to={`/details/${movie._id}`}>
                <img src={movie.image} alt={movie.title} />
              </Link>
              <div className="title">
                <span>{movie.title}</span>
              </div>
            </Movie>
          );
        })}
      </List>
      <div>
        <button
          className="buttonPagination"
          onClick={() => onPaginationClick()}
        >
          {'<'}
        </button>
        <p>{moviesData?.currentPage}</p>
        <button
          className="buttonPagination"
          onClick={() => onPaginationClick(true)}
        >
          {'>'}
        </button>
      </div>
    </Container>
  );
}
export default Home;
