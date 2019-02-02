import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Card} from 'semantic-ui-react';

import { MovieCard, Loading } from '../../ui';

import { fetchFavorites, deleteFavorite } from '../../store/actions';

import './Favorites.scss';

class Favorites extends Component {
    componentDidMount() {
        this.props.fetchFavorites();
    }

    handleDelete = (id) => {
        this.props.deleteFavorite(id);
    }

    handleEdit = (title, id) => {
        this.props.history.push(`/movie/${title}`)
    }

    renderContent = () => {
        if(this.props.list.length > 0) {
            return this.props.list.map((movie) => {
                return (
                    <MovieCard
                        key={movie._id}
                        movie={movie}
                        editHandler={this.handleEdit}
                        deleteHandler={this.handleDelete}
                    />
                )
            })
        }
    }
    render() {
        return(
            <Loading active={this.props.loading}>
                <Card.Group className="cardGroup">
                    {this.renderContent()}
                </Card.Group>
            </Loading>
            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.favoritesList.movieList,
        loading: state.favoritesList.loading,
        errorLoading: state.favoritesList.errorLoading
    }
}

export default connect(mapStateToProps, { fetchFavorites, deleteFavorite})(Favorites);