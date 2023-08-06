import React, { Fragment } from "react";
import style from "./Channel.module.css";
import image1 from "../images/challen/images.jpg";
import image2 from "../images/challen/download.jpg";
import image3 from "../images/challen/download (6).jpg";
import image4 from "../images/challen/download (7).jpg";
import image5 from "../images/challen/download (3).jpg";
import { Link } from "react-router-dom";

const Channel = () => {
  return (
    <Fragment>
      <div className={style.infromition_show}>
        <Link
          className={style.data}
          id="UCLj8UFOcdFrvlh24Lw7jrgA"
          to="/Videos_Hitham">
          <span>د/هيثم طلعت</span>
          <img alt="د/هيثم طلعت" src={image1} />
        </Link>
        <Link
          className={style.data}
          id="UCahYlNszeMy_PHffYvgAOHg"
          to="/Videos_Iiad">
          <span>د/إياد قنيبي</span>
          <img alt="د/إياد قنيبي" src={image2} />
        </Link>
        <Link
          className={style.data}
          id="UC-PTiHEZnsponbqlmRIxfpw"
          to="/Videos_HassanHusseini">
          <span>د/ حسن الحسيني</span>
          <img alt="د/ حسن الحسيني" src={image3} />
        </Link>
        <Link
          className={style.data}
          id="UCF9Hx3hIbZoTT0Sf7Cw1XZQ"
          to="Videos_Saqqara">
          <span>د/ منقذ السقار</span>
          <img alt="د/ منقذ السقار" src={image4} />
        </Link>
        <Link
          className={style.data}
          id="UCh4tVr9X09Cq2o1u3JimzJQ"
          to="Videos_AhmedSubai">
          <span>أحمد سبيع</span>
          <img alt="أحمد سبيع" src={image5} />
        </Link>
      </div>
    </Fragment>
  );
};

export default Channel;
