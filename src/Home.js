import React from 'react';
import './Home.css';
import Search from './Search';
import Results from './Results';
import Nominations from './Nominations';

function Home() {
  return (
    <div className="home">
      <Search />
      {/* <Results /> */}
      <Nominations />
    </div>
  );
}

export default Home;
