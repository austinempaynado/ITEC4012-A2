import { CallToAction } from "../callToAction/callToAction";
import { DropDown } from "../language-drop-down/language";
import { FaChevronRight } from "react-icons/fa";
import Logo from "../nav/assets/netflixLogo.png";
import netflixBG from "./assets/netflixBG.jpeg";

import "./sign-in-card.css"
import { useHistory } from "react-router-dom";

export const SignInCard = () => {
  const history = useHistory();  
  
  return (
    <div
      id="sign-in-container"
      style={{ backgroundImage: `url(${netflixBG})` }}
    >
      <div id="sign-in-bar">
        <img id="logo" src={Logo} alt="" />
        <div id="sign-in-buttons">
          <DropDown text="English"></DropDown>
          <CallToAction onClick={()=>history.push("/home")} name="Sign In" type="SignIn" color="red"/>
        </div>
      </div>

      <div id="middle-captions">
        <h1 id="login-heading">
          Unlimited movies, TV <br />
          shows, and more.
        </h1>
        <h2 id="login-subheading">Watch anywhere. Cancel anytime.</h2>
        <p id="login-caption">
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <div>
          <div id="input-container">
            <input
              id="email-input"
              type="text"
              placeholder="Email address"
            ></input>
            <button id="get-started-button">
              Get Started {<FaChevronRight id="get-started-chevron" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
