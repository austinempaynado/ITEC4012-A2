import "./carousel.css";
import { MovieCard } from "../movie-card/movie-card";
import PropTypes from "prop-types";
import thumbnailsConstants from "../../constants/thumbnails-constants";

export const MovieCarousel = (props) => {
  const { label } = props;
  return (
    <div id="carousel">
      <div id ="carousel-content">
        <h1 id="label-text">{label}</h1>
        <div id="movie-card-row">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

MovieCarousel.propTypes = {
  label: PropTypes.string,
};
