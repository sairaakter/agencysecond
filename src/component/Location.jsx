import React from "react";
import { Link } from "react-router-dom";
import call from "../assets/call.png";
import email from "../assets/email.png";
import location from "../assets/location.png";

export default function Location({ contastyl }) {
  return (
    <div className={contastyl.oparat}>
      <div className="container cus_container">
        <div className={contastyl.d_borderr}>
          <div className={`row ${contastyl.oparat_bord}`}>
            <div className="col-lg-12">
              <div className={contastyl.main_fl}>
                <div className={contastyl.fbo_mail}>
                  <img src={email} />
                  <Link to="#">hello@squareup.com</Link>
                </div>
                <div className={contastyl.fbo_mail}>
                  <img src={call} />
                  <Link to="#">+91 91813 23 2309</Link>
                </div>
                <div className={contastyl.fbo_mail}>
                  <img src={location} />
                  <Link to="#">Get Location</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
