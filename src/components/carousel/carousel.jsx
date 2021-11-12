import "./carousel.css";
import { MovieCard } from "../movie-card/movie-card";
import PropTypes from "prop-types";

export const MovieCarousel = (props) => {
  const { label } = props;
  return (
    <div id="carousel">
      <div id="right-button" className="button-container"></div>
      <div id="left-button" className="buttin-container"></div>
      <div id="carousel-content">
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
    </div>
  );
};

MovieCarousel.propTypes = {
  label: PropTypes.string,
};
