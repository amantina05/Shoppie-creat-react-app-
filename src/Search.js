import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import Results from './Results';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const API_KEY = process.env.REACT_APP_API_KEY;
// const fetchUrl = `http://www.omdbapi.com/?s=${keyword}&apikey=${API_KEY}&`;

function Search() {
  const [{ q = '' }, dispatch] = useStateValue();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [q, setQuery] = useState('batman');
  const [input, setInput] = useState('');

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
          console.log('in search', response.Search);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, []);
  // console.log(data);

  const search = (event) => {
    // event.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    setInput('');
  };

  return (
    <div>
      <div className="search">
        <br></br>
        <h3 className="search_title">Movie Title</h3>
        <form className="search_form" onSubmit={submit}>
          <div className="search_input">
            <SearchIcon className="search_inputIcone" />
            <input
              value={input}
              // onSubmit={}
              onChange={(e) => setInput(e.target.value)}
              onClick={search}
            />
            {/* <Results data={data} /> */}
          </div>
        </form>
      </div>

      <div>
        <Results data={data} />
      </div>
    </div>
  );
}

export default Search;
