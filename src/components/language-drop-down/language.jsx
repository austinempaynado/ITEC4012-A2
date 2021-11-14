import {PropTypes} from "prop-types"

export const DropDown = (props) => {
    
    const {text, icon} = props;

    return(
    <div>
        <button>{icon}{text}</button>        
    </div>)
};

DropDown.propTypes={
    text: PropTypes.isRequired,
    icon: PropTypes.isRequired
}