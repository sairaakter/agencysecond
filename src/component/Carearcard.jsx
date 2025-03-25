import React from "react";
import caryrstyl from "../style/Carear.module.css";
import dstyl from "../style/Design.module.css";
import Carearsecond from "./Carearsecond";
import Dmainhed from "./Dmainhed";
import Subproccard from "./Subproccard";

export default function Carearcard() {
  const projects = [
    {
      id: 1,
      title: "Discovery",
      description:
        "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      id: 2,
      title: "Planning and Strategy",
      description:
        "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      id: 3,
      title: "Design",
      description:
        "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      id: 4,
      title: "Development",
      description:
        "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
  ];

  return (
    <>
      <div className={caryrstyl.work}>
        <div className="container cus_container">
          <div className={caryrstyl.d_borderr}>
            <div className="row">
              <Dmainhed
                dstyl={dstyl}
                hon="Welcome to SquareUp, where talent meets opportunity!"
                dhpp="At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us."
                dbtntex="Why Work at SquareUp?"
              />
            </div>
            <div className={caryrstyl.box}>
              <div className={`row ${caryrstyl.dsm_pad}`}>
                {projects.map((item, index) => {
                  const procrd = (
                    <div
                      key={index}
                      className={`col-lg-6 col-md-6 ${caryrstyl.subbox} p-0`}
                    >
                      <Subproccard
                        prcestyl={caryrstyl}
                        item={item}
                        thatto={false}
                      />
                    </div>
                  );
                  if (index === 1 || index === 3 || index === 5) {
                    return (
                      <>
                        {procrd}
                        <hr className={caryrstyl.proces_hr} />
                      </>
                    );
                  }
                  return procrd;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carearsecond caryrstyl={caryrstyl} />
    </>
  );
}
