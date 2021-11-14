import "./movie-card.css";
import PropTypes from "prop-types";
import { useState } from "react";

//assets
import Thumbnail from "./assets/communityThumbnail.jpg";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { IconButton } from "../iconButton/iconButton";

export const MovieCard = (props) => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const { name, genre, image } = props;

  return (
    <div
      id="card"
      onMouseEnter={() => {
        setIsPreviewMode((prevPreview) => !prevPreview);
        console.log(isPreviewMode);
      }}
      onMouseLeave={() => {
        setIsPreviewMode((prevPreview) => !prevPreview);
      }}
    >
      {isPreviewMode ? (
        <div >
          <div>
            <img className="movie-photo" src={Thumbnail} alt={name + "image"} />
          </div>
          <div id="button-container">
            <IconButton icon={<FaPlay />} type="Primary" />
            <IconButton icon={<FaPlus />} type="Secondary" />
            <IconButton icon={<FaThumbsUp />} type="Secondary" />
            <IconButton icon={<FaThumbsDown />} type="Secondary" />
            <div id="movie-info-container">
              <IconButton icon={<FaAngleDown />} type="Secondary" />
            </div>
          </div>
          <p className="details">Comedy</p>
        </div>
      ) : (
        <div>
          <img className="movie-photo" src={Thumbnail} alt={name + "image"} />
        </div>
      )}
    </div>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  genre: PropTypes.string,
};
