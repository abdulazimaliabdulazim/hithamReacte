import React, { Fragment } from "react";
import Container from "../Container/Container";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("Header");
  return (
    <Fragment>
      <header>
        <Container>
          <div className={style.head}>
            <div className={style.logo}>
              <Link to="/">
                <h3>هيثم طلعت</h3>
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">الرئيسية</Link>
                </li>
                <li>
                  <Link to="/">المرئيات</Link>
                </li>
                <li>
                  <Link to="/">الكتب</Link>
                </li>
                <li>
                  <Link to="/">المقالات</Link>
                </li>
                <li>
                  <Link to="/">English</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.parentIcon}>
            <div
              className={`${style.allIcon} ${style.one} ${style.one_three}`}></div>
            <div
              className={`${style.allIcon} ${style.two} ${style.two_four}`}></div>
            <div
              className={`${style.allIcon} ${style.three} ${style.one_three}`}></div>
            <div
              className={`${style.allIcon} ${style.four} ${style.two_four}`}></div>
          </div>
        </Container>
      </header>
    </Fragment>
  );
};

export default Header;
