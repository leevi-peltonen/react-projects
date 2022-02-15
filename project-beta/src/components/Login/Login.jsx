import React from "react";
//import { Link } from "react-router-dom";
import ReCaptchaV2 from "react-google-recaptcha";
const Login = () => {
  return (
    <div className="login-wrapper">
      <ReCaptchaV2 sitekey={process.env.REACT_APP_SITE_KEY} />
      <h2>Kirjaudu sisään</h2>
      <p>Pääset lisäämään biisitoiveita kirjautumalla sisään</p>
      <form method="GET" action="/biisitoiveet">
        <label>
          <p>Käyttäjätunnus</p>
          <input type="text" placeholder="Käyttäjätunnus" />
        </label>
        <label>
          <p>Salasana</p>
          <input type="password" placeholder="Salasana" />
        </label>
        <div>
          <button type="submit">Kirjaudu</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
