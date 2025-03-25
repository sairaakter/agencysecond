import React from "react";
import aboutsty from "../style/About.module.css";
import Aboutbottom from "./Aboutbottom";
import Aboutheader from "./Aboutheader";
import Subproccard from "./Subproccard";
export default function Aboutcard() {
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
    {
      id: 5,
      title: "Testing and Quality Assurance",
      description:
        "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      id: 6,
      title: "Deployment and Launch",
      description:
        "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
  ];
  return (
    <div className={aboutsty.about}>
      <div className="container cus_container">
        <div className={aboutsty.d_borderr}>
          <Aboutheader aboutsty={aboutsty} />
          <div className="row">
            <div className="col-lg-12">
              <div className={aboutsty.story}>
                <h1>Our Story</h1>
              </div>
            </div>
          </div>
          <div className={aboutsty.box}>
            <div className={`row ${aboutsty.dsm_pad}`}>
              {projects.map((item, index) => {
                const procrd = (
                  <div
                    key={index}
                    className={`col-lg-6 col-md-6 ${aboutsty.subbox} p-0`}
                  >
                    <Subproccard prcestyl={aboutsty} item={item} />
                  </div>
                );
                if (index === 1 || index === 3 || index === 5) {
                  return (
                    <>
                      {procrd}
                      <hr className={aboutsty.proces_hr} />
                    </>
                  );
                }
                return procrd;
              })}
            </div>
          </div>
          <Aboutbottom aboutsty={aboutsty} />
        </div>
      </div>
    </div>
  );
}
