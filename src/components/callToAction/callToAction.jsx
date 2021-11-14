import { PropTypes } from "prop-types";
import { useState } from "react";
import "./callToAction.css";

export const CallToAction = (props) => {
  const { name, icon, type } = props;

  const [isIconic, setIsIcon] = useState(true);

  

  
  return (
    <div id="buttonContainer">
      {isIconic ? (
        <button id="callToAction" className={type}>
          <div className="callToActionContent">{icon}</div>
          <div className="callToActionContent">{name}</div>
        </button>
      ) : (
        <button id="callToAction" className={type}>
          <div className="callToActionContent">{name}</div>
        </button>
      )}
    </div>
  );
};

CallToAction.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
};
