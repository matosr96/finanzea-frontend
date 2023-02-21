import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import styles from "./Google.module.css";

const SigninGoogle = () => {
  const navigate = useNavigate();
  const clientID = import.meta.env.VITE_CLIENT_ID as string;
  console.log(import.meta.env.VITE_CLIENT_ID);
  const [user, setUser] = useState({});

  const onSuccess = (response: any) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    console.log(response);
    setUser(response.profileObj);
    navigate("/welcome", { replace: true });
  };

  const onFailure = () => {
    console.log("ALGO SALIO MAL");
  };

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };

    gapi.load("client:auth2", start);
  }, []);
  return (
    <GoogleLogin
      clientId={clientID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_policy"}
    />
  );
};

export default SigninGoogle;
