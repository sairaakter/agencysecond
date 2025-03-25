import React from "react";
import hbnsty from "../style/Hbanner.module.css";
import Comonbtn from "./Comonbtn";
export default function Hbannar() {
  return (
    <div className={hbnsty.banner}>
      <div className="container cus_container">
        <div className="row">
          <div className="col-lg-12">
            <div className={hbnsty.banar_content}>
              <h1>
                A Digital Product Studio
                <br />
                that will Work
              </h1>
              <div className={hbnsty.startup}>
                <div className={hbnsty.start_first}>
                  <p>
                    For startups, enterprise leaders, media & publishers, and
                    social good.
                  </p>
                </div>
                <div className={hbnsty.start_secon}>
                  <button type="button" className={hbnsty.color_7}>
                    Startups
                  </button>
                  <button type="button" className={hbnsty.color_7}>
                    Enterprise leaders
                  </button>
                  <button type="button" className={hbnsty.color_7}>
                    Media & Publishers
                  </button>
                  <button type="button" className={hbnsty.color_7}>
                    Social Good
                  </button>
                </div>
              </div>
              <div className={hbnsty.ban_comonbtn}>
                <div className={`${hbnsty.custom_btnfiv} ${hbnsty.btn_5}`}>
                  <Comonbtn child="Our Works" />
                </div>
                <div className={`${hbnsty.custom_btnfiv} ${hbnsty.btn_5}`}>
                  <Comonbtn child="Contact Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
