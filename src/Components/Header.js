import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";
const Header = () => {
  const { data, userLogout } = React.useContext(UserContext); // ctx === context
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <div className={styles.login}> 
          <Link to="conta">
            {data.nome} 
          </Link>
            <button onClick={userLogout}>Sair</button>
          </div>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
