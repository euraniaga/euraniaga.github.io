import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import styles from "../css/Layout.module.css";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <main className={styles.container}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Eura. All Rights Reserved</p>
      </footer>
    </Fragment>
  );
};

export default Layout;
