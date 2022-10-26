import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="main">
        <Link to="/signin">
          <p>signin</p>
        </Link>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/board1">
          <p>Board1</p>
        </Link>
        <Link to="/board2">
          <p>Board2</p>
        </Link>
        <Link to="/chat">
          <p>Chat</p>
        </Link>
      </div>
    </>
  );
}

export default Main;
