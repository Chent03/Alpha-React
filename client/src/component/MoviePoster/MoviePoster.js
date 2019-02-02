import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMovie, addFavorites, updateFavorite } from '../../store/actions';

import { MovieDetails, Loading, ErrorMsg } from '../../ui';

import './MoviePoster.scss';

class MoviePoster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields : {
                stars: 0,
                review: ''
            },
            errors: {
                review: '',
            }
        }
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movie)
    }

    componentWillReceiveProps(nextProps) {
        const { movie } = nextProps;
        let fields = this.state.fields;
        if(movie.ID) {
            fields.stars = movie.rating
            fields.review = movie.review
            this.setState({fields})
        }
    }

    onHandleInput = (e, {data}) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        })
    }

    handleSubmit = () => {
        const { movie } = this.props;
        let fields = this.state.fields;
        if(this.validate()){
            this.props.addFavorites({
                ...movie,
                rating: fields.stars,
                review: fields.review
            })
            this.props.history.push('/favorite')
        }
    }

    handleEdit = () => {
        const { movie } = this.props;
        let fields = this.state.fields;
        if(this.validate()) {
            this.props.updateFavorite(movie.ID, fields.stars, fields.review)
            this.props.history.push('/favorite');
        }
    
    }
    
    handleRate = (stars) => {
        let fields = this.state.fields;
        fields.stars = stars;
        this.setState({fields})
    }

    validate = () => {
        let fields =  this.state.fields;
        let errors = {};
        let isValid = true;
        if(!fields.review) {
            isValid = false;
            errors['review'] = "Please enter a review"
        }
        this.setState({errors})
        return isValid;
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
                    errors={this.state.errors}
                    ID={movie.ID? movie.ID : false}
                    stars={this.state.fields.stars}
                    review={this.state.fields.review}
                    handleInput={this.onHandleInput}
                    handleRate={this.handleRate}
                    handleEdit={this.handleEdit}
                    handleSubmit={this.handleSubmit}
                />
            )
        } else if(movie && (!movie.Response)) {
            return (
                <div>
                    <ErrorMsg text={movie.errorMsg} size={"large"}/>
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