import React from "react";
import abou_left from "../assets/abou_left.png";
export default function Aboutheader({ aboutsty }) {
  return (
    <div className={aboutsty.dsm_pad}>
      <div className={`row ${aboutsty.abo_pad}`}>
        <div className="col-lg-6">
          <div className={aboutsty.abou_left}>
            <h4>About SquareUp</h4>
            <p>
              SquareUp is a digital product agency that is passionate about
              crafting exceptional digital experiences. We specialize in design,
              engineering, and project management, helping businesses thrive in
              the digital landscape. At SquareUp, we follow a structured and
              collaborative process to ensure the successful delivery of
              exceptional digital products. Our process combines industry best
              practices, creative thinking, and a client-centric approach.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={aboutsty.abou_right}>
            <img src={abou_left} className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
