import React from "react";
import style from "./ImgPage.module.css";
import { useNavigate } from "react-router-dom";

const ImgPage = ({ stateImg }) => {
  const navigator = useNavigate();
  return (
    <div className={style.parent}>
      <button onClick={() => navigator("/")}>X</button>
      <h3>{stateImg.text}</h3>
      <img src={stateImg.src} alt={stateImg.text} />
    </div>
  );
};

export default ImgPage;
