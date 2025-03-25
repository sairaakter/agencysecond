import React from "react";

export default function Wsubcrd({ worksty, item }) {
  return (
    <div>
      <div className={worksty.dsub_hed}>
        <h2>{item.hedtitle}</h2>
      </div>
      <div className={worksty.wor_card}>
        <img src={item.image} className="img-fluid w-100" />
        <div className={worksty.word_flex}>
          <div className={worksty.w_first}>
            <h3>{item.title}</h3>
            <button className={worksty.linkbtn}>{item.buttonLink}</button>
          </div>
          <div className={worksty.w_second}>
            <svg
              className={worksty.aro_svg}
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="54" height="54" rx="8" fill="#262626" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.8734 35.1266C19.3714 35.6245 20.1786 35.6245 20.6766 35.1266L32.95 22.8531V32.525C32.95 33.2292 33.5208 33.8 34.225 33.8C34.9292 33.8 35.5 33.2292 35.5 32.525V19.775C35.5 19.0708 34.9292 18.5 34.225 18.5H21.475C20.7708 18.5 20.2 19.0708 20.2 19.775C20.2 20.4792 20.7708 21.05 21.475 21.05H31.1469L18.8734 33.3234C18.3755 33.8214 18.3755 34.6286 18.8734 35.1266Z"
                fill="#9EFF00"
              />
            </svg>
          </div>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
