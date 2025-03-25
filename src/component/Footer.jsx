import React from "react";
import { Link } from "react-router-dom";
import call from "../assets/call.png";
import email from "../assets/email.png";
import location from "../assets/location.png";
import sqoar from "../assets/sqoar.png";
import footstyl from "../style/Footer.module.css";
import FuterStay from "./FuterStay";

export default function Footer() {
  return (
    <div className={`${footstyl.header} ${footstyl.plusfooter}`}>
      <div className="container cus_container">
        <div className="row">
          <nav className={`navbar ${footstyl.topnav} navbar-expand-lg`}>
            <div className={footstyl.foot_bar}>
              {/* <!-- logo --> */}
              <Link className="navbar-brand" to="#">
                <img
                  className={`${footstyl.logo} ${footstyl.futlogo} img-fluid`}
                  src={sqoar}
                />
              </Link>
              {/* <!-- hr in lg to col --> */}

              {/* <!-- nav item --> */}
              <div
                className={`collapse navbar-collapse ${footstyl.navb} ${footstyl.footb}`}
                id="nav_cus"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li
                    className={`nav-item ${footstyl.custom_btn} ${footstyl.btn_10}`}
                  >
                    <Link className="nav-link " aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${footstyl.custom_btn} ${footstyl.btn_10}`}
                  >
                    <Link className="nav-link" to="/Servic">
                      Services
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${footstyl.custom_btn} ${footstyl.btn_10}`}
                  >
                    <Link className="nav-link" to="/Work">
                      Work
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${footstyl.custom_btn} ${footstyl.btn_10}`}
                  >
                    <Link className="nav-link" to="/Process">
                      Process
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${footstyl.custom_btn} ${footstyl.btn_10}`}
                  >
                    <Link className="nav-link" to="/About">
                      About
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${footstyl.custom_btn} ${footstyl.btn_10}`}
                  >
                    <Link className="nav-link" to="/">
                      Careers
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${footstyl.custom_btn} ${footstyl.btn_10}`}
                  >
                    <Link className="nav-link" to="/Contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* <!-- contact btn --> */}
                <FuterStay />
              </div>
            </div>
          </nav>
        </div>
        <hr className={footstyl.footer_hr} />
        <div className={`row ${footstyl.f_bottom}`}>
          <div className="col-lg-12 p-0">
            <div className={footstyl.fot_copyright}>
              <div className={footstyl.main_fl}>
                <div className={footstyl.fbo_mail}>
                  <img src={email} />
                  <Link to="#">hello@squareup.com</Link>
                </div>
                <div className={footstyl.fbo_mail}>
                  <img src={call} />
                  <Link to="#">+91 91813 23 2309</Link>
                </div>
                <div className={footstyl.fbo_mail}>
                  <img src={location} />
                  <Link to="#">Somewhere in the World</Link>
                </div>
              </div>
              <div className={footstyl.fot_subcopy}>
                <Link to="#">© 2023 SquareUp. All rights reserved.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
