import React from "react";
import "./adminNavbar.css";
import Navbar from "react-bootstrap/Navbar";
import logos from "../../././../assets/images/logo.png";
import { GrUserAdmin } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
export const AdminNavbar = () => {
  const navigate = useNavigate();
  const redirectLandingPage = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="nav-page-color">
        <Navbar collapseOnSelect expand="lg" className="" id="navfixed">
          <div className="col-10">
            <Navbar.Brand
              onClick={redirectLandingPage}
              style={{ cursor: "pointer" }}
              className="toggleimg"
            >
              <img src={logos} className="logoimg ms-3" alt="img"></img>
              <span className="nav-page-trade">trade</span>{" "}
              <span className="nav-page-hub">hub</span>
            </Navbar.Brand>
          </div>
          <div className="col-2 ">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav d-flex align-items-center">
              <GrUserAdmin style={{ color: "white", fontSize: "18px" }} />
              <h6 className="ms-2 text-light m-0 ">Admin</h6>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};
