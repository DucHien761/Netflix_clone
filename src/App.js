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
    </div>
  );
}

export default App;
