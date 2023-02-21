import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signupUser } from "../../redux/states/user/slice";
import { PartialUser } from "../../types/user";
import styles from "./Signup.module.css";

const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<PartialUser>({
    name: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitRegisterHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(signupUser(user) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container_signin}>
      <div className={styles.container_form}>
        <form className={styles.form}>
          <div className={styles.header_signin}>
            <h2 className={styles.title_signin}>Registrarse</h2>
          </div>
          <div className={styles.container_inputs_signin}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Nombre</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Apellido</label>
              <input
                type="text"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
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
              <button type="submit" className={styles.Button}>
                Acceder
              </button>
            </div>
          </div>
        </form>

        <p className={styles.signup_link}>
          ya tienes una cuenta,{" "}
          <Link to={"/signup"}>
            <strong>Inicia sesion</strong>{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
