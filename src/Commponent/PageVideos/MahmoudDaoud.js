import React from "react";
import style from "./SwitchChanall.module.css";
import mahmoudDaoud from "../JSON/Mahmud.json";

const MahmoudDaoud = () => {
  console.log("MahmoudDaoud");
  document.title = "محمود داود";
  return (
    <div className={style.videos}>
      {mahmoudDaoud.items.map((ele) => {
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

export default MahmoudDaoud;
