import React, {useEffect, useState} from 'react'
import axios from './axios';
import row from '../style/row.css';

const base_url = 'http://image.tmdb.org/t/p/original/';

function Row( {title, fetchURL} ) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchURL);

      //https://api.themoviedb.org/3/discover/tv?api_key=3d028677c99adb2a0492fff4113ec0bb&with_networks=213
      
      setMovies(requests.data.results);
      return requests;
      console.log(requests);
    }
    fetchData();
  },[fetchURL]);

  console.table(movies);

  return (
    <div className='row'>

        <h2>{title}</h2>
        <div className='row__posters'>
            {movies.map((movie) => (
              <img className='row__poster' src={`${base_url}${movie?.poster_path}`} alt={movie.name}/> 
            ))}
        </div>

        
    </div>
  )
}

export default Row