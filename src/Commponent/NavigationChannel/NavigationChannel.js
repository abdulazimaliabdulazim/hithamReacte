import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavigationChannel.module.css";
import img1 from "../images/challen/unnamed (4).jpg";
import img2 from "../images/challen/unnamed (2).jpg";
import img3 from "../images/challen/unnamed (3).jpg";
import img4 from "../images/challen/unnamed (9).jpg";
import img5 from "../images/challen/unnamed (6).jpg";
import img6 from "../images/challen/unnamed.jpg";
import img7 from "../images/challen/unnamed (8).jpg";
import img8 from "../images/challen/unnamed (7).jpg";
import img9 from "../images/challen/unnamed (1).jpg";
import img10 from "../images/challen/download (6).jpg";
import img11 from "../images/challen/unnamed (5).jpg";

const NavigationChannel = ({ functionGetIDJson }) => {
  return (
    <div className={style.info}>
      <NavLink to="/">
        <h3>رجوع للرئيسية</h3>
      </NavLink>
      <NavLink to="/Videos_Hitham">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img7} alt="د/هيثم طلعت" />
            <label htmlFor="Hitham">د/هيثم طلعت</label>
          </div>
        </div>
      </NavLink>
      <NavLink to="/Videos_Iiad">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img8} alt="د/إياد قنيبي" />
            <label htmlFor="Iiad">د/إياد قنيبي</label>
          </div>
        </div>
      </NavLink>
      <NavLink to="/Videos_AbuOmar">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img1} alt="ابو عمر الباحث" />
            <label htmlFor="AboAmar">ابو عمر الباحث</label>
          </div>
        </div>
      </NavLink>
      <NavLink to="/Videos_AhmedSubai">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img9} alt="أحمد سبيع" />
            <label htmlFor="AhmedSubai">أحمد سبيع</label>
          </div>
        </div>
      </NavLink>
      <NavLink to="/Videos_HassanHusseini">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img10} alt="الشيخ حسن الحسيني" />
            <label htmlFor="HassanHusseini">الشيخ حسن الحسيني</label>
          </div>
        </div>
      </NavLink>
      <NavLink to="/Videos_MahmoudDaoud">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img2} alt="معاذ عليان" />
            <label htmlFor="MahmoudDaoud">معاذ عليان</label>
          </div>
        </div>
      </NavLink>
      <NavLink to="/Videos_MahmoudDaoud">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img3} alt="محمود داود" />
            <label htmlFor="MahmoudDaoud">محمود داود</label>
          </div>
        </div>
      </NavLink>
      <NavLink to="/Videos_TamerLabban">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img4} alt="تامر اللبان" />
            <label htmlFor="TamerLabban">تامر اللبان</label>
          </div>
        </div>
      </NavLink>
      <NavLink to="/Videos_SamiAmiri">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img5} alt="د/سامي عامري" />
            <label htmlFor="SamiAmiri">د/سامي عامري</label>
          </div>
        </div>
      </NavLink>
      <NavLink to="/Videos_Saqqara">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img11} alt="د/منقذ السقار" />
            <label htmlFor="Saqqara">د/منقذ السقار</label>
          </div>
        </div>
      </NavLink>
      <NavLink to="/Videos_MohammedShaheen">
        <div className={style.box}>
          <div className={style.informationBox}>
            <img src={img6} alt="محمد شاهين" />
            <label htmlFor="MohammedShaheen">محمد شاهين</label>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default NavigationChannel;
