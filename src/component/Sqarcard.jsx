import React from "react";

export default function Sqarcard({ items, sqarsty }) {
  return (
    <div>
      <div className={sqarsty.squraup_content}>
        <div className={sqarsty.squraup_fexing}>
          <div className={sqarsty.image_container}>
            <img
              src={items.imag}
              className={`img-fluid ${sqarsty.img_siz}`}
              alt="Icon"
            />
          </div>
          <h3>{items.title}</h3>
        </div>
        <div>
          <p>{items.description}</p>
        </div>
      </div>
    </div>
  );
}
