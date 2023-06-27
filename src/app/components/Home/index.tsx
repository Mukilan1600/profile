"use client";

import style from "./home.module.css";
import HomeTitle from "./HomeTitle";

function Home() {
  return (
    <div className={style.home_container}>
      <div>socials</div>
      <HomeTitle />
      <p className={style.scroll_text_container}>
        <span className={style.scroll_text}>
          “Amazing problem solver” - “Very quick learner” - “Saved my dog from a
          fire” - “Amazing problem solver” - “Very quick learner” - “Saved my
          dog from a fire” -&nbsp;
        </span>
        <span className={`${style.scroll_text} ${style.scroll_text2}`}>
          “Amazing problem solver” - “Very quick learner” - “Saved my dog from a
          fire” - “Amazing problem solver” - “Very quick learner” - “Saved my
          dog from a fire” -&nbsp;
        </span>
      </p>
    </div>
  );
}

export default Home;
