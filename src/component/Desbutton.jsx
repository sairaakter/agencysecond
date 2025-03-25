import React from "react";
import desbtsty from "../style/Desbutton.module.css";
export default function Desbutton({ btntex }) {
  return (
    <button type="button" className={desbtsty.decombtn}>
      {btntex}
    </button>
  );
}
