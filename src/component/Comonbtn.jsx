import React from "react";
import cmnstyl from "../style/Comonbtn.module.css";
export default function Comonbtn({ child }) {
  return <button className={cmnstyl.comonbtn}>{child}</button>;
}
