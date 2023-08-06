import React from "react";
import style from "../Bocks/Bocks.module.css";

const BockChild = ({ paragraph, link, icon, src, text }) => {
  return (
    <div className={style.bock}>
      <div className={style.images}>
        <img src={src} alt={paragraph} />
      </div>
      <div className={style.text}>
        <p>{paragraph}</p>
        <a className={style.download} href={link} target="_blanck">
          {text}
          <i className={icon}></i>
        </a>
      </div>
    </div>
  );
};

export default BockChild;
