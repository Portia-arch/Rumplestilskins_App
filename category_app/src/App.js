import React from 'react';
import MovieList from './components/List_Movie/movielist';
import Categories from './components/Category/category';
import SearchBar from './components/Search/search';
import './App.css';

function App() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <MovieList />
    </div>
  );
}

export default App;
