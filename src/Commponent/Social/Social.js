import React from "react";
import style from "./Social.module.css";

const Social = () => {
  return (
    <div className={style.social_icon}>
      <div className={style.parent}>
        <i className="fa-solid fa-comments fa-fw"></i>
        <div className={style.box}>
          <a href="https://web.facebook.com/drhaithamofficial">
            <i className="fab fa-facebook-f fa-fw"></i>
          </a>
        </div>
        <div className={style.box}>
          <a href="https://twitter.com/ibn_badys">
            <i className="fab fa-twitter fa-fw"></i>
          </a>
        </div>
        <div className={style.box}>
          <a href="https://www.youtube.com/channel/UCLj8UFOcdFrvlh24Lw7jrgA/about">
            <i className="fab fa-youtube fa-fw"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
