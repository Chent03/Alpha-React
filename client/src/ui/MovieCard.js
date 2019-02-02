import React from 'react';
import { Button, Card, Image, Rating } from 'semantic-ui-react';

const MovieCard = ({movie, editHandler, deleteHandler}) => {
    const renderReadMore = (review, title) => {
        if(review.length <= 30) {
            return <p className="movieReview">{review}</p>
        } else {
            return <p className="movieReview">{review.substr(0, 30)}...</p>
        }
        
    }
    return (
        <Card>
            <Card.Content>
                <Image floated="right" size="mini" src={movie.poster} />
                <Card.Header>{movie.title} ({movie.year})</Card.Header>
                <Card.Meta><Rating icon="star" rating={movie.rating} maxRating={5} disabled/></Card.Meta>
                <Card.Description>
                    <p><b>Review:</b></p>
                    <section onClick={() => editHandler(movie.title)} className="reviewSection">
                        {renderReadMore(movie.review, movie.title)}
                    </section>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button basic color='yellow' onClick={() => editHandler(movie.title)}>
                Edit
                </Button>
                <Button basic color='red' onClick={() => deleteHandler(movie._id)}>
                Remove
                </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default MovieCard;