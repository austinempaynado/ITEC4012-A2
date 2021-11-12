import "./movie-card.css";
import PropTypes from "prop-types";
import Thumbnail from "./assets/communityThumbnail.jpg";
import { useEffect, useState, useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export const MovieCard = (props) => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const { name, genre, image } = props;

  return (
    <div id="card">
      <img className="movie-photo" src={Thumbnail} alt={name + "image"} />
      <div
        id="button-container"
        onMouseOver={() => setIsPreviewMode(true)}
        onMouseOut={() => setIsPreviewMode(false)}
      >
        <button className="preview-button" id="play-button">
          <FaPlay />
        </button>
        <button className="preview-button">
          <FaPlus />
        </button>
        <button className="preview-button">
          <FaThumbsUp />
        </button>
        <button className="preview-button">
          <FaThumbsDown />
        </button>
        <div id="movie-info-container">
          <button className="preview-button" id="more-info">
            <FaAngleDown />
          </button>
        </div>
      </div>

      <p className="details">Comedy</p>
    </div>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};
