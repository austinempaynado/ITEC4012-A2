import {PropTypes} from "prop-types"
import "./iconButton.css"
export const IconButton = (props) => {
    
    return(
        <button className={type} >{icon}</button>
    )
    

}

IconButton.PropTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}