import React from "react";
import { Link, NavLink } from "react-router-dom";
import sqoar from "../assets/sqoar.png";
import navsty from "../style/Nav.module.css";
export default function Nav() {
  return (
    <div className={navsty.header}>
      <div className="container cus_container">
        <div className="row">
          <nav className={`navbar ${navsty.topnav} navbar-expand-lg`}>
            <div className="container-fluid">
              {/* <!-- logo --> */}
              <Link className="navbar-brand" to="/">
                <img className={`${navsty.logo} img-fluid`} src={sqoar} />
              </Link>
              {/* <!-- toggle btn --> */}
              <button
                className={`navbar-toggler ${navsty.nav_togle}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#nav_cus"
                aria-controls="nav_cus"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Link to="#">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.25 9.5625C4.25 8.9757 4.7257 8.5 5.3125 8.5H28.6875C29.2743 8.5 29.75 8.9757 29.75 9.5625C29.75 10.1493 29.2743 10.625 28.6875 10.625H5.3125C4.7257 10.625 4.25 10.1493 4.25 9.5625ZM4.25 17C4.25 16.4132 4.7257 15.9375 5.3125 15.9375H28.6875C29.2743 15.9375 29.75 16.4132 29.75 17C29.75 17.5868 29.2743 18.0625 28.6875 18.0625H5.3125C4.7257 18.0625 4.25 17.5868 4.25 17ZM15.9375 24.4375C15.9375 23.8507 16.4132 23.375 17 23.375H28.6875C29.2743 23.375 29.75 23.8507 29.75 24.4375C29.75 25.0243 29.2743 25.5 28.6875 25.5H17C16.4132 25.5 15.9375 25.0243 15.9375 24.4375Z"
                      fill="#D8FF99"
                    />
                  </svg>
                </Link>
              </button>
              {/* <!-- nav item --> */}
              <div
                className={`collapse navbar-collapse nav_colpss ${navsty.navb}`}
                id="nav_cus"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li
                    className={`nav-item ${navsty.custom_btn} ${navsty.btn_10}`}
                  >
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item ${navsty.custom_btn} ${navsty.btn_10}`}
                  >
                    <NavLink className="nav-link" to="/Servic">
                      Services
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item ${navsty.custom_btn} ${navsty.btn_10}`}
                  >
                    <NavLink className="nav-link" to="/Work">
                      Work
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item ${navsty.custom_btn} ${navsty.btn_10}`}
                  >
                    <NavLink className="nav-link" to="/Process">
                      Process
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item ${navsty.custom_btn} ${navsty.btn_10}`}
                  >
                    <NavLink className="nav-link" to="/About">
                      About
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item ${navsty.custom_btn} ${navsty.btn_10}`}
                  >
                    <NavLink className="nav-link" to="/Carear">
                      Careers
                    </NavLink>
                  </li>
                </ul>
                {/* <!-- contact btn --> */}
                <button className={`${navsty.contact_btn} ${navsty.btn_14}`}>
                  Contact Us
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
