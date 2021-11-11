import "./movie-card.css"
import PropTypes from'prop-types'


export const MovieCard = (props) => {
    
    const {name, genre} = props;
    
    return(
        <div id="movieCardContainer">
            <img src="" alt="" />
            <h1>{name}</h1>

        </div>
    )};

MovieCard.PropTypes = {
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
}