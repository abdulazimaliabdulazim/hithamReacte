import React from "react";
import style from "./English.module.css";
import Container from "../Container/Container";

const Header = () => {
  return (
    <Container>
      <div className={style.head}>
        <div className={style.logo}>
          <a href="f">
            <h3>Haitham Talaat's</h3>
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="n">Home</a>
            </li>
            <li>
              <a href="Visuals">Visuals</a>
            </li>
            <li>
              <a href="Bock">Bock</a>
            </li>
            <li>
              <a href="Articles">Articles</a>
            </li>
            <li>
              <a href="عربي">عربي</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.parentIcon}>
        <div className="allIcon one one-three"></div>
        <div className="allIcon two two-four"></div>
        <div className="allIcon three one-three"></div>
        <div className="allIcon four two-four"></div>
      </div>
    </Container>
  );
};

const English = () => {
  return <Header />;
};

export default English;
