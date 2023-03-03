import CardDashboard from "../../components/Dashboard/Card";
import NavigationMenu from "../../components/Dashboard/navigationMenu";
import styles from "./Welcome.module.css";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { Saving } from "../../types/saving";
import { useEffect } from "react";
import { savingsListThunks } from "../../redux/states/saving/thunks";
import { DivisaFormater } from "../../utils/DivisaFormater";
import ProgressBar from "../../components/Saving/ProgressBar";
import PieChart from "../../components/Dashboard/PieChart";
import { expenseList } from "../expenses/data/data";
import { Expense } from "../../types/expense";
import TimeAgo from "../../components/Timeago";

const Welcome = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";
  const { email, name, imageUrl, givenName } = user;
  const dispatch = useDispatch();
  const {
    savings = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.savings);
  const { items } = savings;
  const Savinglist = items?.filter((saving: Saving) => {
    return saving.user_email === user.email;
  });
  const data = [
    ["Task", "Hours per Day"],
    ["Usados", 5.04],
    ["Restante", 5],
  ];

  const options = {
    is3D: true,
  };
  useEffect(() => {
    dispatch(savingsListThunks() as any);
  }, [dispatch, success]);
  return (
    <Layout>
      <div className={styles.container_dashboard}>
        <h2 className={styles.welcome_message}>
          Bienvenido, {name} <i className="bx bxs-hand"></i>
        </h2>
        <NavigationMenu />
        <div className={styles.sections_dashboard}>
          <CardDashboard>
            <div className={styles.card_plans}>
              <h4>Plan de ahorros</h4>
              {Savinglist?.map((saving: Saving) => (
                <div className={styles.savings_card}>
                  <div className={styles.header_saving}>
                    <div className={styles.image_saving}>
                      <img src={"./dashboard/saving.png"} />
                    </div>
                    <div className={styles.info_header}>
                      <h5>{saving.title}</h5>
                      <span>
                        ahorrado : {DivisaFormater(saving.amount_saved)}
                      </span>
                    </div>
                  </div>
                  <ProgressBar
                    totalAmount={saving.goal}
                    currentAmount={saving.amount_saved}
                  />
                </div>
              ))}
            </div>
          </CardDashboard>

          <div className={styles.section_two}>
            <div className={styles.flex}>
              <CardDashboard>
                <div className={styles.info_details}>
                  <div className={styles.incomes}>
                    <div className={styles.info_header_incomes}>
                      <span>Ingresos totales</span>
                      <div className={styles.ctn_icons}>
                        <i className="bx bx-wallet"></i>
                      </div>
                    </div>
                    <h2>$10,456.00</h2>
                    <p>
                      <strong>$3,000.00</strong> ingresaron esta semana
                    </p>
                  </div>
                  <div className={styles.incomes}>
                    <div className={styles.info_header_incomes}>
                      <span>Gastos totales</span>
                      <div className={styles.ctn_icons_expense}>
                        <i className="bx bxs-wallet"></i>
                      </div>
                    </div>
                    <h2>$50,456.00</h2>
                    <p>
                      <strong>$5,000.00</strong> gastos de esta semana
                    </p>
                  </div>
                </div>
              </CardDashboard>
              <CardDashboard>
                <div className={styles.table_expenses}>
                  <h3>Lista de gastos</h3>
                  <img src="./dashboard/gastos.svg" />
                  <table className={styles.table}>
                    <thead className={styles.thead}>
                      <tr>
                        <th>Titulo</th>
                        <th>Gastado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {expenseList?.map((expense: Expense) => (
                        <tr key={expense.uuid}>
                          <td>{expense.title}</td>

                          <td>{expense.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardDashboard>
            </div>
          </div>
          <div className={styles.section_three}>
            <CardDashboard>
              <div className={styles.data_expenses}>
                <h3>Consejos que pueden servirte</h3>
                <img src="./dashboard/consejos.svg" />
                <div>
                  <h4>1. Haz un presupuesto:</h4>
                  <p>
                    Crea un presupuesto mensual para saber exactamente cuánto
                    dinero entra y sale de tu cuenta bancaria. Anota tus
                    ingresos y gastos fijos, como el alquiler, la comida, la
                    electricidad y el gas. Luego, identifica los gastos
                    discrecionales, como salir a cenar o ir al cine, y trata de
                    reducirlos.
                  </p>
                  <h4>2. Sé paciente y disciplinado</h4>
                  <p>
                    Ahorrar dinero puede llevar tiempo y esfuerzo. Pero si te
                    mantienes disciplinado y paciente, puedes alcanzar tus
                    objetivos financieros a largo plazo.
                  </p>
                  <h4>3. Compara precios antes de comprar</h4>
                  <p>
                    Siempre compara precios
                    antes de hacer una compra importante. Puedes usar
                    aplicaciones o sitios web para comparar precios de productos
                    similares. Esto te ayudará a encontrar la mejor oferta y
                    ahorrar dinero.
                  </p>
                </div>
              </div>
            </CardDashboard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
