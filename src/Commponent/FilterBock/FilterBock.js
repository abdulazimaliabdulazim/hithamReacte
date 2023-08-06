import React from "react";
import style from "./FilterBock.module.css";

const FilterBocks = ({ filtritionBocks }) => {
  return (
    <div class={style.filter}>
      <ul className="uls_filter">
        <li
          onClick={(e) => filtritionBocks(e.target.id)}
          id="all"
          class={style.active}>
          جميع الكتب
        </li>
        <li onClick={(e) => filtritionBocks(e.target.id)} id="alhadu">
          الإلحاد
        </li>
        <li onClick={(e) => filtritionBocks(e.target.id)} id="eman">
          الإيمان
        </li>
        <li onClick={(e) => filtritionBocks(e.target.id)} id="cover">
          آخري
        </li>
      </ul>
    </div>
  );
};

export default FilterBocks;
