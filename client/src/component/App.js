import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NavBar } from './Navbar';

import './App.scss';
import { Home } from './Home';
import { Favorites } from './Favorites';
import MoviePoster from './MoviePoster/MoviePoster';
import { connect } from 'react-redux';
import { fetchFavorites } from '../store/actions';


class App extends Component {
    componentDidMount() {
        this.props.fetchFavorites();
    }
    
    render() {
        console.log(this.props);
        return (
            <BrowserRouter>
                <Fragment>
                    <NavBar/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/favorite" component={Favorites} />
                            <Route path="/movie/:movie" component={MoviePoster} />
                            <Redirect to="/"/>
                        </Switch>
                    </div>        
                </Fragment>
            </BrowserRouter>
        )
    }
}

App = connect(null, {fetchFavorites})(App);

export default App;
