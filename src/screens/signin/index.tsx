import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";
import SigninGoogle from "./google-login";

const Signin = () => {
  const remenberInfo = localStorage.getItem("remenberInfo")
    ? JSON.parse(localStorage.getItem("remenberInfo") || "")
    : "";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onSubmit(username, password);
  };

  const [remenber, setRemenber] = useState(
    remenberInfo ? remenberInfo.remenber : false
  );
  return (
    <div className={styles.container_signin}>
      <div className={styles.container_form}>
        <form className={styles.form}>
          <div className={styles.header_signin}>
            <h2 className={styles.title_signin}>Iniciar Sesión</h2>
          </div>
          <div className={styles.container_inputs_signin}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo electronico</label>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.Button} >Acceder</button>
            </div>
            <div className={styles.signin_options}>
              <label>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={styles.input}
                  checked={remenber}
                  onChange={({ target }) => setRemenber(target.checked)}
                />
                Recuerdame
              </label>
              <Link to="/forgot-password-admin">
                ¿Has olvidado tu contraseña?
              </Link>
            </div>
          </div>
        </form>
        <div className={styles.line}></div>
        <div className={styles.btnGroup}>
          <SigninGoogle />
        </div>
        <p className={styles.signup_link}>
          Aun no tienes una cuenta,{" "}
          <Link to={"/signup"}>
            <strong>Registrate Aqui</strong>{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signin;
