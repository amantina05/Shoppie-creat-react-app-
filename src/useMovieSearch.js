import React, { useState, useEffect } from 'react';
import Results from './Results';
const API_KEY = process.env.REACT_APP_API_KEY;

const useMovieSearch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQuery] = useState('batman');

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === 'False') {
          setError(response.Error);
        } else {
          setData(response.Search);
          console.log(response.Search);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [q]);
  // console.log(data);

  return (
    <div>
      {data !== null &&
        data.length > 0 &&
        data.map((result, index) => <Results {...result} />)}

      {/* <Results data={data} /> */}
      {/* {data} */}
    </div>
    // { data }
  );
};

export default useMovieSearch;
