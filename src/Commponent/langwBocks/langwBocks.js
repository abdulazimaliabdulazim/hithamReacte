import React, { useState } from "react";
import style from "./langwBocks.module.css";

const LangwBocks = ({
  check,
  setCheck,
  filterLangwId,
  setLangwId,
  setIdBock,
}) => {
  document.querySelectorAll(".urlLangw li").forEach((li) => {
    li.addEventListener("click", () => {
      filterLangwId(li.id);
      setCheck(false);
    });
  });

  const [changeTitleLangw, setTitle] = useState("عربي");

  const handlelTitleLangw = (event) => {
    setTitle(event.target.innerHTML);
    setIdBock("all");
  };

  return (
    <div class={style.langw}>
      <button onClick={() => setCheck(!check)}>
        {changeTitleLangw}
        <i className="fa-solid fa-arrow-down"></i>
      </button>
      <ul className={`${check ? "" : style.none} urlLangw`}>
        <li onClick={(e) => handlelTitleLangw(e)} id="arbic" className="active">
          عربي
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="ordw">
          أردو
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="almany">
          ألماني
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="asbany">
          إسباني
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="englsh">
          إنجليزي
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="brtghaly">
          برتغالي
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="bshtw">
          بشتو
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="rwsy">
          روسي
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="rwmany">
          روماني
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="snhaly">
          سنهالي
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="pharsy">
          فارسي دري
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="phrnsy">
          فرنسي
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="pplbiny">
          فلبيني نجالوج
        </li>
        <li onClick={(e) => handlelTitleLangw(e)} id="phdnamy">
          فيتنامي
        </li>
      </ul>
    </div>
  );
};

export default LangwBocks;
