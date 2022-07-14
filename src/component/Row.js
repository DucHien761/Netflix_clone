import React, {useState} from 'react'

function Row( {title, fetchURL} ) {

    const [moives, setMovies] = useState([]);

  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}

export default Row