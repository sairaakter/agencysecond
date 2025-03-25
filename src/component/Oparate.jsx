import React from "react";
import FuterStay from "./FuterStay";
export default function Oparate({ contastyl }) {
  return (
    <div className={contastyl.oparat}>
      <div className="container cus_container">
        <div className={contastyl.d_borderr}>
          <div className={`row ${contastyl.oparat_bord}`}>
            <div className="col-lg-6 col-12 p-0">
              <div className={contastyl.conta_left}>
                <p>Operating Days</p>
                <div className={contastyl.fry}>
                  <p>Monday to Friday</p>
                </div>
              </div>
            </div>
            <hr className={contastyl.oprat_hr} />
            <div className="col-lg-6 col-12 p-0">
              {/* <!-- contact btn --> */}
              <div className={contastyl.nestay}>
                <FuterStay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
