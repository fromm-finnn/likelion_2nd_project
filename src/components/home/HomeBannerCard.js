import React from "react";
import "../../css/HomeBannerCard.css";

function HomeBannerCard(props) {
  return (
    <div className="home-banner-card">
      <div className="img-box">
        <img className="banner-img" alt="bannaerimg" src={props.img}></img>
      </div>
      <p className="baaner-title">{props.title}</p>
    </div>
  );
}

export default HomeBannerCard;
