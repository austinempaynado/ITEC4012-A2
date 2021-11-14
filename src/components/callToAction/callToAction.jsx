import { PropTypes } from "prop-types";
import "./callToAction.css";

export const CallToAction = (props) => {
  const { name, icon, type } = props;
  return (
    <div id="buttonContainer">
      <button id="callToAction" className={type}>
        <div className = 'callToActionContent'>{icon}</div>
        <div className = 'callToActionContent'>{name}</div>
      </button>
    </div>
  );
};

CallToAction.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
