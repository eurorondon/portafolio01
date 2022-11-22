import React from "react";
import icon from "../img/icon.png";

const Navbar = () => {
  return (
    <div className=" " style={{ background: "#29284A" }}>
      <div
        className=" container text-white d-flex justify-content-between align-items-center p-1 "
        style={{ background: "#29284A" }}
      >
        <div>
          <p className="bigText">Repositorio</p>
        </div>
        <div>
          <p className="phone">+507 65246747</p>
        </div>
      </div>
      <nav class="  navbar bg-light">
        <div className="container">
          <nav class="navbar bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img className="icon" src={icon} alt="" />
              </a>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
