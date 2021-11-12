import "./carousel.css";
import { MovieCard } from "../movie-card/movie-card";
import PropTypes from "prop-types";

export const MovieCarousel = (props) => {
  const { label } = props;
  return (
    <div id="carousel-container">
      <h1 id="carousel-name">{label}</h1>
      <div id="movie-card-container">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
      </div>
    </div>
  );
};

MovieCarousel.propTypes = {
  label: PropTypes.string,
};
