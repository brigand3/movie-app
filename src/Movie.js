import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
            </div>
            <p className="Movie__Synopsis">
                {synopsis}
            </p>            
        </div>
    )
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"></img>
    )
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired,
    title: propTypes.string.isRequired
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

MovieGenre.propTypes = {
    genre: propTypes.string.isRequired
}
  
export default Movie;
