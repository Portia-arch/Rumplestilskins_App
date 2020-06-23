import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Search/navbar';
import Landing from './components/Landing/landing';
import Movie from './components/List_Movie/movie';
import store from "./store";
// import MovieList from './components/List_Movie/movielist';
// import Categories from './components/Category/category';
// import SearchBar from './components/Search/search';
import './App.css';

function App() { 
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          {/* <SearchBar />
          <Categories />
          <MovieList /> */}
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
