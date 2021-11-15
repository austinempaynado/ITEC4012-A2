import { PropTypes } from "prop-types";
import { useState } from "react";
import "./callToAction.css";

export const CallToAction = (props) => {
  const { name, icon, type, color, hasIcon } = props;

  const [isIconic, setIsIcon] = useState(true);

  return (
    <div id="buttonContainer">
      {isIconic ? (
        <button id="callToAction" className={`${type} ${color}`} onClick={props.onClick}>
          {hasIcon && <div className="callToActionContent">{icon}</div>}
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
  color: PropTypes.string,
  hasIcon: PropTypes.string
};
