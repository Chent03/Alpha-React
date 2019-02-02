import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMovie, addFavorites, updateFavorite } from '../../store/actions';

import { MovieDetails, Loading } from '../../ui';

import './MoviePoster.scss';

class MoviePoster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: 0,
            review: '',
        }
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movie)
    }

    componentWillReceiveProps(nextProps) {
        const { movie } = nextProps;
        console.log(movie, 'wtf');
        if(movie.ID) {
            this.setState({stars: movie.rating, review: movie.review })
        }
        console.log(this.state);
    }

    onHandleInput = (e, {data}) => {
        if(e.target.name === 'star') {
            this.setState({stars: e.target.value})
        } else {
            this.setState({review: e.target.value})
        }
    }

    handleSubmit = () => {
        const { movie } = this.props;
        this.props.addFavorites({
            ...movie,
            rating: this.state.stars,
            review: this.state.review
        })
        this.props.history.push('/favorite')
    }

    handleEdit = () => {
        const { movie } = this.props;
        this.props.updateFavorite(movie.ID, this.state.stars, this.state.review)
        this.props.history.push('/favorite');
    }
    
    handleRate = (stars) => {
        this.setState({stars: stars})
    }

    renderContent = () => {
        const { movie } = this.props
        if(movie && (movie.Response)) {
            const {Poster, Year, Title, Plot } = movie;
            return (
                <MovieDetails 
                    Poster={Poster}
                    Year={Year}
                    Title={Title}
                    Plot={Plot}
                    ID={movie.ID? movie.ID : false}
                    stars={this.state.stars}
                    review={this.state.review}
                    handleInput={this.onHandleInput}
                    handleRate={this.handleRate}
                    handleEdit={this.handleEdit}
                    handleSubmit={this.handleSubmit}
                />
            )
        } else if(movie && (!movie.Response)) {
            return (
                <div>
                    <h2>{movie.errorMsg}</h2>
                </div>
            )
        }
    }

    render() {
        return (
            <Loading active={this.props.loading}>
                <Fragment>
                    {this.renderContent()}
                </Fragment>
            </Loading>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.imdb.movie,
        loading: state.imdb.loading,
        errorLoading: state.imdb.errorLoading,
        list: state.favoritesList.movieList
    }
}

export default connect(mapStateToProps, { fetchMovie, addFavorites, updateFavorite })(MoviePoster);