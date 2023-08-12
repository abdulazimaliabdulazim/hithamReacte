import React from "react";
import style from "./SwitchChanall.module.css";
import hitham from "../JSON/Hitham.json";

const Hitham = () => {
  console.log("Hitham");
  document.title = "هيثم طلعت";
  return (
    <div className={style.videos}>
      {hitham.items.map((ele) => {
        return (
          <div className={style.box}>
            <p>{ele.snippet.title}</p>
            <iframe
              key={ele.id.videoId}
              src={`https://www.youtube.com/embed/${ele.id.videoId}?rel=0`}
              title={ele.snippet.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default Hitham;
