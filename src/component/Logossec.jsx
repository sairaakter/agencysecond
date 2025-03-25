import React from "react";
import adobe from "../assets/adobe.png";
import amazon from "../assets/amazon.png";
import shopfy from "../assets/shopfy.png";
import slack from "../assets/slack.png";
import zap from "../assets/zap.png";
import zoom from "../assets/zoom.png";
import logsty from "../style/Logossec.module.css";
import Comonbtn from "./Comonbtn";

export default function Logossec() {
  return (
    <div className={logsty.logos_sec}>
      <div className="container cus_container">
        <div className="row">
          <div className="col-lg-12">
            <div className={logsty.logos_content}>
              <div
                className={`${logsty.logos_btn} ${logsty.logos_btnfiv} ${logsty.btn_9}`}
              >
                <Comonbtn child="Trusted By 250+ Companies" />
              </div>
              <div className={`${logsty.logos_logo} row`}>
                <div
                  className={`col-6 col-sm-6 col-md-4 col-lg-2 ${logsty.last}`}
                >
                  <img src={zap} className="img-fluid" />
                </div>
                <div
                  className={`col-6 col-sm-6 col-md-4 col-lg-2 ${logsty.last}`}
                >
                  <img src={shopfy} className="img-fluid" />
                </div>
                <hr className={logsty.after_two} />
                <div
                  className={`col-6 col-sm-6 col-md-4 col-lg-2 ${logsty.last}`}
                >
                  <img src={zoom} className="img-fluid" />
                </div>
                <hr className={logsty.after_three} />
                <div
                  className={`col-6 col-sm-6 col-md-4 col-lg-2 ${logsty.last}`}
                >
                  <img src={slack} className="img-fluid" />
                </div>
                <hr className={logsty.after_two} />
                <div
                  className={`col-6 col-sm-6 col-md-4 col-lg-2 ${logsty.last}`}
                >
                  <img src={amazon} className="img-fluid" />
                </div>
                <div
                  className={`col-6 col-sm-6 col-md-4 col-lg-2 ${logsty.last}`}
                >
                  <img src={adobe} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
