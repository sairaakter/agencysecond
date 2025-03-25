import React from "react";
import desi_icon from "../assets/desi_icon.png";
import sqarsty from "../style/Squarup.module.css";
import Sqarcard from "./Sqarcard";
export default function Squarup() {
  const data = [
    {
      title: "Design",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed in lobortis nisl, vitae iaculis sapien.
            Phasellus ultrices gravida massa luctus ornare.
            Suspendisse blandit quam elit, eu imperdiet neque
            semper.`,
      imag: desi_icon,
    },
    {
      title: "Design",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed in lobortis nisl, vitae iaculis sapien.
              Phasellus ultrices gravida massa luctus ornare.
              Suspendisse blandit quam elit, eu imperdiet neque
              semper.`,
      imag: desi_icon,
    },
    {
      title: "Design",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed in lobortis nisl, vitae iaculis sapien.
              Phasellus ultrices gravida massa luctus ornare.
              Suspendisse blandit quam elit, eu imperdiet neque
              semper.`,
      imag: desi_icon,
    },
    {
      title: "Design",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed in lobortis nisl, vitae iaculis sapien.
                Phasellus ultrices gravida massa luctus ornare.
                Suspendisse blandit quam elit, eu imperdiet neque
                semper.`,
      imag: desi_icon,
    },
  ];
  return (
    <div className={sqarsty.squraup}>
      <div className="container cus_container">
        <div className="row">
          <div className="col-lg-12">
            <div className={sqarsty.squraup_box}>
              <div className="row">
                {data.map((items, index) => {
                  const cardElement = (
                    <div
                      key={index}
                      className={`col-lg-6 col-md-6 ${sqarsty.squr_central}`}
                    >
                      <Sqarcard items={items} sqarsty={sqarsty} />
                    </div>
                  );
                  if (index === 1) {
                    return (
                      <>
                        {cardElement}
                        <hr className={sqarsty.squraup_hr} />
                      </>
                    );
                  }
                  return cardElement;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
