import React from "react";
import '../../css/HomeBoardCard.css'

function HomeBoardCard(props) {
  return (
    <div className="home-board-card">
      <div className="board-title-box">
        <p className="board-title">{props.title}</p>
        <p className="board-subtitle">{props.subtitle}</p>
        <p className="plus-btn">+</p>
      </div>
      <div className="board-content-box">
        <p className="board-content">글1</p>
        <p className="board-content">글2</p>
        <p className="board-content">글3</p>
        <p className="board-content">글4</p>
      </div>
    </div>
  );
}

export default HomeBoardCard;
