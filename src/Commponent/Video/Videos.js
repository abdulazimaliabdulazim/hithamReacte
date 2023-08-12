import React from "react";
import { Link } from "react-router-dom";
import style from "./Videos.module.css";
import appStyle from "../App/App.module.css";
import chanallHitham from "../JSON/Hitham.json";

const Videos = () => {
  console.log("Videos");
  return (
    <div className={style.parent} id="videos">
      <h2 class={appStyle.main_title}>المرئيات</h2>
      <div className={style.box_all}>
        {chanallHitham.items.map((allData) => {
          return (
            <div className={style.box}>
              <iframe
                key={allData.id.videoId}
                src={`https://www.youtube.com/embed/${allData.id.videoId}?rel=0`}
                title={allData.snippet.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
          );
        })}
      </div>
      <div class={style.iconVideo}>
        <i class="fa-solid fa-caret-left iconLeft"></i>
        <i class="fa-solid fa-caret-right iconRight"></i>
      </div>
      <Link to="/Videos_Hitham">
        <p class={style.video_all}>المزيد من الفيديوهات</p>
      </Link>
    </div>
  );
};

export default Videos;
