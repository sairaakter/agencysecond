import React from "react";
import Desbutton from "./Desbutton";
export default function Dmainhed({ dstyl, hon, dhpp, dbtntex, that }) {
  return (
    <div className="col-lg-12">
      <div className={dstyl.desi_hed}>
        <h1>{hon}</h1>
        <p>{dhpp}</p>
        {that === false ? null : <Desbutton btntex={dbtntex} />}
      </div>
    </div>
  );
}
