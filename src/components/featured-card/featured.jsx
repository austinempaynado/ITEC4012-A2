import "./featured.css";
import featuredPhoto from "./assets/community.jpg";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export const FeaturedCard = () => {
  return (
    <div id="featuredContainer">
      <img
        id="featuredShowPhoto"
        src={featuredPhoto}
        alt="featured show picture"
      />
      <div id="featuredButtonContainer">
        <h1 id="featuredHeader">Community</h1>
        <p id="featuredDescription">
          A suspended lawyer is forced to enroll in a community college with an
          eccentric staff and student body.
        </p>
        <button id="playButton" className="featuredButtons">
          <FaPlay id="playIcon" /> Play
        </button>
        <button id="moreInfo" className="featuredButtons">
          <FaInfoCircle id="infoIcon" /> More information
        </button>
      </div>
    </div>
  );
};
