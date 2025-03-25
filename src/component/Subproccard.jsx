import React from "react";

export default function Subproccard({ prcestyl, item, thatto }) {
  return (
    <div className={prcestyl.squp}>
      <div className={`${prcestyl.squ_hedin} ${prcestyl.prces}`}>
        {thatto === false ? null : <h2>0{item.id}</h2>}

        <p>{item.title}</p>
      </div>
      <div className={prcestyl.squrp}>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
