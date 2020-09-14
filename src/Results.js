import React, { useState } from 'react';
import './Results.css';

function Results({ data }) {
  console.log('in results', data);

  return (
    <div className="results">
      <div className="results_">
        <h3>Results for</h3>
        <ul>
          {data !== null &&
            data.length > 0 &&
            data?.map((result, index) => (
              <li key={result.imdbID}>
                <p>
                  {result.Title} ({result.Year})
                </p>
                <img src={result.Poster} height="50" width="40" />
              </li>
            ))}
        </ul>
      </div>

      <br></br>
      <br></br>
    </div>
  );
}

export default Results;
