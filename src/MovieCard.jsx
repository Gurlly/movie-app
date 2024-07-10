import React from 'react';
import {Col} from 'react-bootstrap';

const MovieCard = ({ currentMovie }) => {
    return (
        <Col className="col-11 col-md-5 col-xl-3 d-flex justify-content-center">
            <div className="position-relative rounded-4 border shadow-lg movie-holder">
            <img src={currentMovie.Poster !== 'N/A' ? currentMovie.Poster : "https://via.placeholder.com/400"} className="movie-image" alt={currentMovie.Title}/>
            <div className="movie-description rounded-3">
            <p className="m-0 fs-6 text-capitalize text-light">{currentMovie.Year}</p>
            <div>
                <p className="m-0 fs-6 text-uppercase text-light">{currentMovie.Type}</p>
                <p className="m-0 fs-6 text-capitalize text-light">{currentMovie.Title}</p>
            </div>
            </div>
            </div>
        </Col>
    )
}

export default MovieCard;