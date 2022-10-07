// Components
import Layout from "../../components/Layout";
// import { AppConsumer } from "../../data/context/AppContext";
// import useAppData from "../../data/hook/useAppData";

const Notifications: React.FC = () => {
  // const { theme, toggleTheme } = useAppData();

  /* ⬇ acessar usando o consumer ⬇ */
  /* <AppConsumer>{(data) => <h3>{context.theme}</h3>}</AppConsumer> */

  /* ⬇ acessar usando o hook ⬇ */
  /* <h3>{theme}</h3>
  <button onClick={toggleTheme}>Click</button> */

  return (
    <Layout title="Notifications" subtitle="Here you see the notifications">
      <h1>Notifications</h1>
    </Layout>
  );
};

export default Notifications;
