import React from 'react';

class MovieCard extends React.Component{
    
    render(){
        const {imdbID, Title, Poster, Year, Type} = this.props;
        return (
            <div key={imdbID} className="myCard"  style={ {backgroundColor: Poster} }>
                <img src={Poster==='N/A'?"https://m.media-amazon.com/images/M/MV5BZjFkOTkyYzMtNWM1My00OGY3LTlhZmYtM2I0ZDNmMjVhY2RhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg":Poster} alt="movie poster"/>
            <div className="myCard-text">
                <h2>{Title}</h2>
                <h1>{Year}</h1>
                <h1>{Type}</h1>
            </div>
            </div>
        )
    }
}
export default MovieCard;