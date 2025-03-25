import React from "react";
import abou_top from "../assets/abou_top.png";
import Comonbtn from "./Comonbtn";

export default function Aboutbottom({ aboutsty }) {
  return (
    <div className={aboutsty.dsm_pad}>
      <div className={`row ${aboutsty.abot_botom}`}>
        <div className="col-lg-12">
          <div className={aboutsty.abth_fle}>
            <div className={aboutsty.aou_imeg}>
              <img src={abou_top} className="img-fluid" />
            </div>
            <div className={aboutsty.abou_tocotnt}>
              <h6>
                Today, SquareUp Continues to Thrive as a Leading Digital Product
                Agency.....
              </h6>
              <p>
                Combining the power of design, engineering, and project
                management to create transformative digital experiences. They
                invite you to join them on their journey and discover how they
                can help bring your digital ideas to life.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className={aboutsty.abo_botcon}>
            <h5>Welcome to SquareUp</h5>
            <div className={aboutsty.ab_midle}>
              <p>
                Where collaboration, Expertise, and Client-Centricity Intersect
                to Shape the Future of Digital Innovation.
              </p>
            </div>
            <div className={`${aboutsty.diff_btn} ${aboutsty.diff_allbtns}`}>
              <Comonbtn child="Start Project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
