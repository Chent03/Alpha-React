import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image, Rating } from 'semantic-ui-react';

import { fetchFavorites, deleteFavorite } from '../../store/actions';

import './Favorites.scss';

class Favorites extends Component {
    componentDidMount() {
        this.props.fetchFavorites();
    }

    handleDelete = (id) => {
        console.log(id);
        this.props.deleteFavorite(id);
    }

    handleEdit = (title, id) => {
        this.props.history.push(`/movie/${title}`)
    }

    renderContent = () => {
        if(this.props.list.length > 0) {
            return this.props.list.map((movie) => {
                return (
                    <Card key={movie._id}>
                        <Card.Content>
                            <Image floated="right" size="mini" src={movie.poster} />
                            <Card.Header>{movie.title} ({movie.year})</Card.Header>
                            <Card.Meta><Rating icon="star" rating={movie.rating} maxRating={5} disabled/></Card.Meta>
                            <Card.Description>
                                <p><b>Review:</b></p>
                                {movie.review}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='yellow' onClick={() => this.handleEdit(movie.title)}>
                            Edit
                            </Button>
                            <Button basic color='red' onClick={() => this.handleDelete(movie._id)}>
                            Remove
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>
                    
                )
            })
        }
    }
    render() {
        return(
            <Card.Group className="cardGroup">
                {this.renderContent()}
            </Card.Group>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.favoritesList.movieList
    }
}

export default connect(mapStateToProps, { fetchFavorites, deleteFavorite})(Favorites);