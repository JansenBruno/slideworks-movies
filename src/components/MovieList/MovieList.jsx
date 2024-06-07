import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../themeContext';
import { FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import './MovieList.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3]);
  const { isDarkMode } = useContext(ThemeContext);

 
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(`https://movies.slideworks.cc/movies?page=${page}&limit=12`);
        const data = await response.json();
        setMovies(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [page]);

  useEffect(() => {
    const newPageNumbers = [];
    if (page <= 3) {
      newPageNumbers.push(1, 2, 3);
    } else if (page >= 19) {
      newPageNumbers.push(19, 20, 21);
    } else {
      newPageNumbers.push(page - 1, page, page + 1);
    }
    setPageNumbers(newPageNumbers);
  }, [page]);

  function handlePageClick(newPage) {
    setPage(newPage);
  }

  function handleSearchInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function filteredMovies() {
    return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  return (
    <div className={isDarkMode ? 'dark-mode movies' : 'movies'}>
      <div className='search-bar'>
        <input
          type='text'
          className='search-input'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <button className='search-button' onClick={() => handleSearch()}>Search</button>
      </div>
      <ul className='movies-list'>
        {filteredMovies().map(movie => (
          <li key={movie.title} className='movie-item'>
            <div className='movie-container'>
              <img src={movie.image_url} alt={movie.title} />
              <h3>{movie.title}</h3>
              <span>Ano de lançamento: {movie.year}</span>
              <p>{movie.crew}</p>
              <span><FaStar /> {movie.rating}/10</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={isDarkMode ? 'dark-mode pagination' : 'pagination'}>
        <button
          className={isDarkMode ? 'dark-mode paginationArrow' : 'paginationArrow'}
          onClick={() => handlePageClick(page - 1)}
          disabled={page === 1}
        >
          <FaChevronLeft />
        </button>
        {pageNumbers.map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`${pageNumber === page ? 'active' : ''} ${isDarkMode ? 'dark-mode' : ''}`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className={isDarkMode ? 'dark-mode paginationArrow' : 'paginationArrow'}
          onClick={() => handlePageClick(page + 1)}
          disabled={page === 21}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default MovieList;
