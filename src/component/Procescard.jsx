import React from "react";
import dstyl from "../style/Design.module.css";
import prcestyl from "../style/Process.module.css";
import Dmainhed from "./Dmainhed";
import Subproccard from "./Subproccard";

export default function Procscard() {
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
    {
      id: 7,
      title: "Post-Launch Support",
      description:
        "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      id: 8,
      title: "Continuous Improvement",
      description:
        "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
  ];

  return (
    <div className={prcestyl.work}>
      <div className="container cus_container">
        <div className={prcestyl.d_borderr}>
          <div className="row">
            <Dmainhed
              dstyl={dstyl}
              hon="At SquareUp"
              dhpp="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
              dbtntex="Here's an overview of our typical process:"
            />
          </div>
          <div className={prcestyl.box}>
            <div className={`row ${prcestyl.dsm_pad}`}>
              {projects.map((item, index) => {
                const procrd = (
                  <div
                    key={index}
                    className={`col-lg-6 col-md-6 ${prcestyl.subbox} p-0`}
                  >
                    <Subproccard prcestyl={prcestyl} item={item} />
                  </div>
                );
                if (index === 1 || index === 3 || index === 5) {
                  return (
                    <>
                      {procrd}
                      <hr className={prcestyl.proces_hr} />
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
  );
}
