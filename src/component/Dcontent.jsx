import React from "react";

export default function Dcontent({ item, dstyl }) {
  return (
    <div className={dstyl.dsub_content}>
      <div className={dstyl.image_container}>
        <img src={item.img} className="img-fluid" />
      </div>

      <p>{item.title}</p>
    </div>
  );
}
