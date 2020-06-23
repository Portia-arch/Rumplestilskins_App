import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from '../Search/search-form';
import Loader from './loader';
import MoviesContainer from '../List_Movie/movielist';

export class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="container">
                <SearchForm />
                {loading === true ? <Loader /> : <MoviesContainer />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.movies.loading
    };
}

export default connect(mapStateToProps)(Landing);
