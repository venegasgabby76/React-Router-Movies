import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Route, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";




const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
    
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList movies={movieList}/>
      </Route>
      
     
      <Route exact path="/movie/:id">
        <Movie movies={movieList}/>
      </Route>
     
     
  
  </div>
  );
};

export default App;
