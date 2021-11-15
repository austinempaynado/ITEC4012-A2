import "./featured.css";
import featuredPhoto from "./assets/community.jpg";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { CallToAction } from "../callToAction/callToAction";

export const FeaturedCard = () => {
  return (
    <div id="featuredContainer">
      <img
        id="featuredShowPhoto"
        src={featuredPhoto}
        alt="featured show picture"
      />
      <div id="featuredDescriptionContainer">
        <h1 id="Header">Community</h1>
        <p id="Description">
          A suspended lawyer is forced to enroll in a community college with an
          eccentric staff and student body.
        </p>
        <div id="CTAcontainer">
          <CallToAction type="Primary" name="Play" icon={<FaPlay />} hasIcon />
          <CallToAction
            type="Secondary"
            name="More Information"
            icon={<FaInfoCircle />}
            hasIcon
          />
        </div>
      </div>
    </div>
  );
};
