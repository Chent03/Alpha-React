import React from 'react';
import {Image, Rating, TextArea, Form, Button} from 'semantic-ui-react';

const MovieDetail = ({Poster, Title, Year, ID, Plot, stars, review, handleInput, handleRate, handleEdit, handleSubmit}) => {
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
                    <Form onSubmit={ID ? handleEdit : handleSubmit}>
                        <Rating 
                            icon="star"
                            size="huge"
                            name="star"
                            maxRating={5}
                            rating={stars}
                            onRate={(e, data) => handleRate(data.rating)}
                        />
                        <TextArea 
                            autoHeight
                            name="review"
                            placeholder='Add a review'
                            value={review}
                            onChange={handleInput}
                        />
                        <Button type="submit" primary>{ID ? 'Save' : 'Add to favorites'}</Button>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default MovieDetail;