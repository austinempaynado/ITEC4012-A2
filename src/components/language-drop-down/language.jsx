import {PropTypes} from "prop-types"
import "./language.css"

export const DropDown = (props) => {
    
    const {text, icon} = props;

    return(
    <div>
        <select id = "drop-down">
            <option value="English">English</option>
            <option value="English">French</option>
            </select>       
    </div>)
};

DropDown.propTypes={
    text: PropTypes.isRequired,
    icon: PropTypes.isRequired
}