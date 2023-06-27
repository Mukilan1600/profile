"use client";
import style from "./home.module.css";
import { motion, useIsPresent } from "framer-motion";
import HomeTitle from "./HomeTitle";
import React from "react";

function Home() {
  const isPresent = useIsPresent();

  return (
    <React.Fragment>
      <div className={style.home_container}>
        <div>socials</div>
        <HomeTitle />
        <p className={style.scroll_text_container}>
          <span className={style.scroll_text}>
            “Amazing problem solver” - “Very quick learner” - “Saved my dog from
            a fire” - “Amazing problem solver” - “Very quick learner” - “Saved
            my dog from a fire” -&nbsp;
          </span>
          <span className={`${style.scroll_text} ${style.scroll_text2}`}>
            “Amazing problem solver” - “Very quick learner” - “Saved my dog from
            a fire” - “Amazing problem solver” - “Very quick learner” - “Saved
            my dog from a fire” -&nbsp;
          </span>
        </p>
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy_screen"
      />
    </React.Fragment>
  );
}

export default Home;
