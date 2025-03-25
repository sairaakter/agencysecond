import React from "react";
import desi_icon from "../assets/desi_icon.png";
import enginiar from "../assets/enginiar.png";
import promanag from "../assets/promanag.png";
import aboutsty from "../style/About.module.css";
import Aboutbottom from "./Aboutbottom";

import dstyl from "../style/Design.module.css";
import Dmainhed from "./Dmainhed";
import Hsurvcard from "./Hsurvcard";

export default function Carearsecond({ caryrstyl }) {
  const data = [
    {
      id: 1,
      title: "Design",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed in lobortis nisl, vitae iaculis sapien.
            Phasellus ultrices gravida massa luctus ornare.
            Suspendisse blandit quam elit, eu imperdiet neque
            semper.`,
      imggg: desi_icon,
    },
    {
      id: 2,
      title: "Engineering",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed in lobortis nisl, vitae iaculis sapien.
            Phasellus ultrices gravida massa luctus ornare.
            Suspendisse blandit quam elit, eu imperdiet neque
            semper.`,
      imggg: enginiar,
    },
    {
      id: 3,
      title: "Project Management",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed in lobortis nisl, vitae iaculis sapien.
            Phasellus ultrices gravida massa luctus ornare.
            Suspendisse blandit quam elit, eu imperdiet neque
            semper.`,
      imggg: promanag,
    },
  ];
  return (
    <div className={caryrstyl.carear}>
      <div className="container cus_container">
        <div className={caryrstyl.d_borderr}>
          <div className="row">
            <Dmainhed
              that={false}
              dstyl={dstyl}
              hon="Current Openings"
              dhpp="We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions."
              dbtntex="Why Work at SquareUp?"
            />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={caryrstyl.paren_box}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={caryrstyl.dsub_hed}>
                      <h2>User Experience (UX) Design</h2>
                    </div>
                  </div>
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className={`col-lg-4 col-md-4 ${caryrstyl.centrall}`}
                    >
                      <Hsurvcard
                        item={item}
                        hsrsty={caryrstyl}
                        carearbox={caryrstyl.carearbox}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={caryrstyl.paren_box}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={caryrstyl.dsub_hed}>
                      <h2>Development Job Openings</h2>
                    </div>
                  </div>
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className={`col-lg-4 col-md-4 ${caryrstyl.centrall}`}
                    >
                      <Hsurvcard
                        item={item}
                        hsrsty={caryrstyl}
                        carearbox={caryrstyl.carearbox}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={caryrstyl.paren_box}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={caryrstyl.dsub_hed}>
                      <h2>Management Job Openings</h2>
                    </div>
                  </div>
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className={`col-lg-4 col-md-4 ${caryrstyl.centrall}`}
                    >
                      <Hsurvcard
                        item={item}
                        hsrsty={caryrstyl}
                        carearbox={caryrstyl.carearbox}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={caryrstyl.paren_box}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={caryrstyl.dsub_hed}>
                      <h2>QA Job Openings</h2>
                    </div>
                  </div>
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className={`col-lg-4 col-md-4 ${caryrstyl.centrall}`}
                    >
                      <Hsurvcard
                        item={item}
                        hsrsty={caryrstyl}
                        carearbox={caryrstyl.carearbox}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Aboutbottom aboutsty={aboutsty} />
        </div>
      </div>
    </div>
  );
}
