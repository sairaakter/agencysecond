import React from "react";
import jhn_smith from "../assets/jhn_smith.png";
import cliensty from "../style/Client.module.css";
import Clientcard from "./Clientcard";
export default function Client() {
  const data = [
    {
      title:
        "SquareUp has been Instrumental in Transforming our Online Presence.",
      description: `Their team's expertise in web development and design resulted in a
          visually stunning and user-friendly e-commerce platform. Our online
          sales have skyrocketed, and we couldn't be happier.`,
      imag: jhn_smith,
      jhon: "John Smith",
      ceo: "CEO of Chic Boutique",
    },
    {
      title:
        "SquareUp has been Instrumental in Transforming our Online Presence.",
      description: `Their team's expertise in web development and design resulted in a
            visually stunning and user-friendly e-commerce platform. Our online
            sales have skyrocketed, and we couldn't be happier.`,
      imag: jhn_smith,
      jhon: "John Smith",
      ceo: "CEO of Chic Boutique",
    },
    {
      title:
        "SquareUp has been Instrumental in Transforming our Online Presence.",
      description: `Their team's expertise in web development and design resulted in a
            visually stunning and user-friendly e-commerce platform. Our online
            sales have skyrocketed, and we couldn't be happier.`,
      imag: jhn_smith,
      jhon: "John Smith",
      ceo: "CEO of Chic Boutique",
    },
    {
      title:
        "SquareUp has been Instrumental in Transforming our Online Presence.",
      description: `Their team's expertise in web development and design resulted in a
            visually stunning and user-friendly e-commerce platform. Our online
            sales have skyrocketed, and we couldn't be happier.`,
      imag: jhn_smith,
      jhon: "John Smith",
      ceo: "CEO of Chic Boutique",
    },
    {
      title:
        "SquareUp has been Instrumental in Transforming our Online Presence.",
      description: `Their team's expertise in web development and design resulted in a
            visually stunning and user-friendly e-commerce platform. Our online
            sales have skyrocketed, and we couldn't be happier.`,
      imag: jhn_smith,
      jhon: "John Smith",
      ceo: "CEO of Chic Boutique",
    },
    {
      title:
        "SquareUp has been Instrumental in Transforming our Online Presence.",
      description: `Their team's expertise in web development and design resulted in a
            visually stunning and user-friendly e-commerce platform. Our online
            sales have skyrocketed, and we couldn't be happier.`,
      imag: jhn_smith,
      jhon: "John Smith",
      ceo: "CEO of Chic Boutique",
    },
  ];
  return (
    <div className={cliensty.client}>
      <div className="container cus_container">
        <div className="row">
          <div className="col-lg-12">
            <div className={cliensty.squraup_box}>
              <div className="row">
                {data.map((itam, index) => {
                  const clientElement = (
                    <div
                      key={index}
                      className={`col-lg-6 col-md-6 ${cliensty.squr_central}`}
                    >
                      <Clientcard itam={itam} cliensty={cliensty} />
                    </div>
                  );
                  if (index === 1) {
                    return (
                      <>
                        {clientElement}
                        <hr className={cliensty.squraup_hr} />
                      </>
                    );
                  }
                  if (index === 3) {
                    return (
                      <>
                        {clientElement}
                        <hr className={cliensty.squraup_hr} />
                      </>
                    );
                  }
                  return clientElement;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
