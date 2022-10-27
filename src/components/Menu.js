import React, { useState } from "react";
import "../css/Menu.css";
import menu_close from "../images/menu-close.png";

function Menu(props){
  const { open, close } = props;

  return (
    <div className={open ? "openMenu menu" : "menu"}>
      {open ? (
        <section>
          <section className="menu-userbox">
            <img className="menu-close" onClick={close} src={menu_close}></img>
          </section>
        </section>
      ) : null}
    </div>
  );
};
export default Menu;
