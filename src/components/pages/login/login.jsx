import "./login.css";

import { CallToAction } from "../../callToAction/callToAction";
import { Footer } from "../../footer/footer";
import Logo from "../../nav/assets/netflixLogo.png";

export const Login = () => {
  return (
    <div>
      <div id="sign-in-container">
        <img id="logo" src={Logo} alt="" />
        <div  id="sign-in-button">
          <CallToAction
            name="Sign In"
            type="Primary"
            icon=" "
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
