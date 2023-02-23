import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signin.module.css";
import SigninGoogle from "./google-login";
import { PartialUser, SigninProps } from "../../types/user";
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "../../redux/states/user/slice";
import { AppStore } from "../../redux/store";
import swal from "sweetalert";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success } = useSelector((state: AppStore) => state.user);
  const [user, setUser] = useState<SigninProps>({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitSigninHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(signinUser(user) as any);
    } catch (err: any) {
      const { message } = err.response.data;
      console.log("ES ESTE", message);
      swal("Usuario o contraseña incorrectos", {
        icon: "warning",
        buttons: ["OK!"],
        dangerMode: true,
      });
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/categories", { replace: true });
    }
  }, [user, success, navigate, dispatch]);

  return (
    <div className={styles.container_signin}>
      <div className={styles.container_form}>
        <form className={styles.form} onSubmit={submitSigninHandler}>
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
                value={user.email}
                onChange={handleChange}
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
                value={user.password}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.Button}>
                Acceder
              </button>
            </div>
            <div className={styles.signin_options}>
              <label>
                <input type="checkbox" name="" id="" className={styles.input} />
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
