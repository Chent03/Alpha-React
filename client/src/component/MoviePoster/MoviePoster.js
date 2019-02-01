import React, {Component, Fragment} from 'react';
import {Image, Rating, TextArea, Form, Button} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchMovie, addFavorites } from '../../store/actions';

import './MoviePoster.scss';

class MoviePoster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: 0,
            review: ''
        }
    }
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movie)
        
    }

    onHandleInput = (e, {data}) => {
        if(e.target.name === 'star') {
            this.setState({stars: e.target.value})
        } else {
            this.setState({review: e.target.value})
        }
    }

    handleSubmit = () => {
        const { movie } = this.props.movie;
        this.props.addFavorites({
            ...movie,
            rating: this.state.stars,
            review: this.state.review
        })

    }

    renderContent = () => {
        const { movie } = this.props.movie
        if(movie && (movie.Response)) {
            const {Poster, Year, Title, Plot } = movie;
            return (
                <div id="movieContainer">
                    <div id="posterImage">
                        <Image src={Poster} />
                    </div>
                    <div id="content">
                        <h1>{Title} ({Year})</h1>
                        <h3>Plot</h3>
                        <p>{Plot}</p>
                        <div>
                            <Form onSubmit={this.handleSubmit}>
                                <Rating 
                                    icon="star"
                                    size="huge"
                                    name="star"
                                    maxRating={5}
                                    onRate={(e, data) => this.setState({stars: data.rating})}
                                />
                                <TextArea 
                                    autoHeight
                                    name="review"
                                    placeholder='Add a review'
                                    value={this.state.review}
                                    onChange={this.onHandleInput}
                                />
                                <Button type="submit" primary>Add to favorite</Button>
                            </Form>
        
                        </div>
                    </div>
                </div>
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
            <Fragment>
                {this.renderContent()}
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.imdb
    }
}

export default connect(mapStateToProps, { fetchMovie, addFavorites })(MoviePoster);