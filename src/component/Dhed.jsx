import React from "react";

export default function Dhed({ dstyl, dhcotnt }) {
  return (
    <div>
      <div className={dstyl.dsub_hed}>
        <h2>{dhcotnt}</h2>
      </div>
    </div>
  );
}
