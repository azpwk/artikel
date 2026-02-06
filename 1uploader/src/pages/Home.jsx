import React, { useState, useEffect } from "react";

import "../css/Home.css";
import "../css/alert.css";
import Alert from "../assets/alert.svg";
import News from "./News";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-home">
        <h1 className="hero-title">
          BiBit<span style={{ color: "red" }}>ID</span> <br />
          {/* Masa Depan Pertanian */}
        </h1>
        <p className="hero-title" style={{ color: "black" }}>
          Info Seputar Pertanian
        </p>
        <br />
        <button className="btn btn-primary hero-title">Mulai Sekarang</button>
      </section>
      <h2 className="alert" style={{ borderBottom: "1px solid black" }}>
        News <img src={Alert} alt="" className="bergoyang" />
        <img src={Alert} alt="" className="bergoyang2" />
        <img src={Alert} alt="" className="bergoyang3" />
      </h2>
      <br />
      <News />
      <br />
    </div>
  );
};

export default Home;
