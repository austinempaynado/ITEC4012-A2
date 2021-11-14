import "./carousel.css";
import { MovieCard } from "../movie-card/movie-card";
import PropTypes from "prop-types";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export const MovieCarousel = (props) => {
  const { label } = props;
  return (
    <div id="carousel">
      <div id="carousel-content">
        <h1 id="carousel-name">{label}</h1>
        <div id="movie-card-container">
          <div className="button-container">
            {<FaChevronLeft className="chevron" />}
          </div>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <div className="button-container" id ="right-chevron">
            {<FaChevronRight className="chevron" />}
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCarousel.propTypes = {
  label: PropTypes.string,
};
