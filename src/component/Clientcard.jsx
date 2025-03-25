import React from "react";
import Comonbtn from "./Comonbtn.jsx";
export default function Clientcard({ itam, cliensty }) {
  return (
    <div>
      <div className={cliensty.client_content}>
        <h1>{itam.title}</h1>
        <p>{itam.description}</p>
        <div className={cliensty.client_info}>
          <div className={cliensty.clien_idd}>
            <img src={itam.imag} className="img-fluid" />
            <div className={cliensty.clien_flexin}>
              <p>{itam.jhon}</p>
              <p className={cliensty.c_cusp}>{itam.ceo}</p>
            </div>
          </div>
          <div className={`${cliensty.clien_btn} ${cliensty.comon_allbtns}`}>
            <Comonbtn child="Open Website" />
          </div>
        </div>
      </div>
    </div>
  );
}
