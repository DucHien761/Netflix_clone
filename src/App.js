import Row  from './component/Row';
import './App.css';
import React from 'react';
import requests from './component/request';

function App() {
  return (
    <div className="App">
        <h1> NETFLIX  </h1>
        <Row title="NETFLIX ORIGINAL" fetchURL={requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Row title="Top Rate" fetchURL={requests.fetchTopRate}/>
        <Row title="Action movies" fetchURL={requests.fetchActionMovies}/>
        <Row title="Comedy movies" fetchURL={requests.fetchComedyMovies}/>
        <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies}/>
        <Row title="Romance movies" fetchURL={requests.fetchRomanceMovies}/>
        <Row title="Documentation movies" fetchURL={requests.fetchDocumentariesMovies}/>
    </div>
  );
}

export default App;
