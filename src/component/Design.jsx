import React from "react";
import brand from "../assets/brand.png";
import develop from "../assets/develop.png";
import prto from "../assets/prto.png";
import wire from "../assets/wire.png";
import dstyl from "../style/Design.module.css";
import Dcontent from "./Dcontent";
import Dhed from "./Dhed";
import Dmainhed from "./Dmainhed";
export default function Design() {
  const uxDesignData = [
    {
      img: develop,
      title: "User Research and Persona Development",
    },
    {
      img: wire,
      title: "Information Architecture and Wireframing",
    },
    {
      img: prto,
      title: "Interactive Prototyping and User Testing",
    },
    {
      img: brand,
      title: "UI Design and Visual Branding",
    },
  ];
  return (
    <div className={dstyl.design}>
      <div className="container cus_container">
        <div className={dstyl.d_borderr}>
          <div className="row">
            <Dmainhed
              dstyl={dstyl}
              hon="Design"
              dhpp="At Squareup, our design team is passionate about creating stunning,
          user-centric designs that captivate your audience and elevate your
          brand. We believe that great design is not just about aesthetics; it's
          about creating seamless and intuitive user experiences."
              dbtntex="Our design services include:"
            />
          </div>
          <div className={dstyl.squraup_box}>
            <div className={`row ${dstyl.dsm_pad}`}>
              <div className="col-lg-12 p-0">
                <Dhed dstyl={dstyl} dhcotnt="User Experience (UX) Design" />
              </div>

              {uxDesignData.map((item, index) => {
                const elemet = (
                  <div
                    key={index}
                    className={`col-lg-3 col-md-3 col-6 p-0 ${dstyl.squr_central}`}
                  >
                    <Dcontent item={item} dstyl={dstyl} />
                  </div>
                );
                if (index === 1) {
                  return (
                    <>
                      {elemet}
                      <hr className={dstyl.des_hr} />
                    </>
                  );
                }
                return elemet;
              })}
            </div>
          </div>

          <div className={dstyl.squraup_box}>
            <div className={`row ${dstyl.dsm_pad}`}>
              <div className="col-lg-12 p-0">
                <Dhed dstyl={dstyl} dhcotnt="Mobile App Development" />
              </div>

              {uxDesignData.map((item, index) => {
                const elemet = (
                  <div
                    key={index}
                    className={`col-lg-3 col-md-3 col-6 p-0 ${dstyl.squr_central}`}
                  >
                    <Dcontent item={item} dstyl={dstyl} />
                  </div>
                );
                if (index === 1) {
                  return (
                    <>
                      {elemet}
                      <hr className={dstyl.des_hr} />
                    </>
                  );
                }
                return elemet;
              })}
            </div>
          </div>
          <div className={dstyl.squraup_box}>
            <div className={`row ${dstyl.dsm_pad}`}>
              <div className="col-lg-12 p-0">
                <Dhed dstyl={dstyl} dhcotnt="Custom Software Development" />
              </div>

              {uxDesignData.map((item, index) => {
                const elemet = (
                  <div
                    key={index}
                    className={`col-lg-3 col-md-3 col-6 p-0 ${dstyl.squr_central}`}
                  >
                    <Dcontent item={item} dstyl={dstyl} />
                  </div>
                );
                if (index === 1) {
                  return (
                    <>
                      {elemet}
                      <hr className={dstyl.des_hr} />
                    </>
                  );
                }
                return elemet;
              })}
            </div>
          </div>
        </div>
        <div className={dstyl.d_borderr}>
          <div className="row">
            <Dmainhed
              dstyl={dstyl}
              hon="Engineering"
              dhpp="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
              dbtntex="Our engineering services include:"
            />
          </div>
          <div className={dstyl.squraup_box}>
            <div className={`row ${dstyl.dsm_pad}`}>
              <div className="col-lg-12 p-0">
                <Dhed dstyl={dstyl} dhcotnt="User Experience (UX) Design" />
              </div>

              {uxDesignData.map((item, index) => {
                const elemet = (
                  <div
                    key={index}
                    className={`col-lg-3 col-md-3 col-6 p-0 ${dstyl.squr_central}`}
                  >
                    <Dcontent item={item} dstyl={dstyl} />
                  </div>
                );
                if (index === 1) {
                  return (
                    <>
                      {elemet}
                      <hr className={dstyl.des_hr} />
                    </>
                  );
                }
                return elemet;
              })}
            </div>
          </div>
          <div className={dstyl.squraup_box}>
            <div className={`row ${dstyl.dsm_pad}`}>
              <div className="col-lg-12 p-0">
                <Dhed dstyl={dstyl} dhcotnt="Mobile App Development" />
              </div>

              {uxDesignData.map((item, index) => {
                const elemet = (
                  <div
                    key={index}
                    className={`col-lg-3 col-md-3 col-6 p-0 ${dstyl.squr_central}`}
                  >
                    <Dcontent item={item} dstyl={dstyl} />
                  </div>
                );
                if (index === 1) {
                  return (
                    <>
                      {elemet}
                      <hr className={dstyl.des_hr} />
                    </>
                  );
                }
                return elemet;
              })}
            </div>
          </div>
          <div className={dstyl.squraup_box}>
            <div className={`row ${dstyl.dsm_pad}`}>
              <div className="col-lg-12 p-0">
                <Dhed dstyl={dstyl} dhcotnt="Custom Software Development" />
              </div>

              {uxDesignData.map((item, index) => {
                const elemet = (
                  <div
                    key={index}
                    className={`col-lg-3 col-md-3 col-6 p-0 ${dstyl.squr_central}`}
                  >
                    <Dcontent item={item} dstyl={dstyl} />
                  </div>
                );
                if (index === 1) {
                  return (
                    <>
                      {elemet}
                      <hr className={dstyl.des_hr} />
                    </>
                  );
                }
                return elemet;
              })}
            </div>
          </div>
        </div>
        <div className={dstyl.d_borderr}>
          <div className="row">
            <Dmainhed
              dstyl={dstyl}
              hon="Project Management"
              dhpp="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
              dbtntex="Our project management services include:"
            />
          </div>
          <div className={dstyl.squraup_box}>
            <div className={`row ${dstyl.dsm_pad}`}>
              <div className="col-lg-12 p-0">
                <Dhed dstyl={dstyl} dhcotnt="User Experience (UX) Design" />
              </div>

              {uxDesignData.map((item, index) => {
                const elemet = (
                  <div
                    key={index}
                    className={`col-lg-3 col-md-3 col-6 p-0 ${dstyl.squr_central}`}
                  >
                    <Dcontent item={item} dstyl={dstyl} />
                  </div>
                );
                if (index === 1) {
                  return (
                    <>
                      {elemet}
                      <hr className={dstyl.des_hr} />
                    </>
                  );
                }
                return elemet;
              })}
            </div>
          </div>
          <div className={dstyl.squraup_box}>
            <div className={`row ${dstyl.dsm_pad}`}>
              <div className="col-lg-12 p-0">
                <Dhed dstyl={dstyl} dhcotnt="Mobile App Development" />
              </div>

              {uxDesignData.map((item, index) => {
                const elemet = (
                  <div
                    key={index}
                    className={`col-lg-3 col-md-3 col-6 p-0 ${dstyl.squr_central}`}
                  >
                    <Dcontent item={item} dstyl={dstyl} />
                  </div>
                );
                if (index === 1) {
                  return (
                    <>
                      {elemet}
                      <hr className={dstyl.des_hr} />
                    </>
                  );
                }
                return elemet;
              })}
            </div>
          </div>
          <div className={dstyl.squraup_box}>
            <div className={`row ${dstyl.dsm_pad}`}>
              <div className="col-lg-12 p-0">
                <Dhed dstyl={dstyl} dhcotnt="Custom Software Development" />
              </div>

              {uxDesignData.map((item, index) => {
                const elemet = (
                  <div
                    key={index}
                    className={`col-lg-3 col-md-3 col-6 p-0 ${dstyl.squr_central}`}
                  >
                    <Dcontent item={item} dstyl={dstyl} />
                  </div>
                );
                if (index === 1) {
                  return (
                    <>
                      {elemet}
                      <hr className={dstyl.des_hr} />
                    </>
                  );
                }
                return elemet;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
