import React from "react";
import style from "./SwitchChanall.module.css";
import aboAmar from "../JSON/AboAmar.json";

const AboAmar = () => {
  console.log("AboAmar");
  document.title = "أبو عمر الباحث";
  return (
    <div className={style.videos}>
      {aboAmar.items.map((ele) => {
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

export default AboAmar;
