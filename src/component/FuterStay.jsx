import React from "react";
import { Link } from "react-router-dom";
import nuone from "../assets/nuone.png";
import footstyl from "../style/Footer.module.css";

export default function FuterStay() {
  return (
    <div className={footstyl.stay}>
      <p>Stay Connected</p>
      <div className={footstyl.foter_icons}>
        <div className={footstyl.socal_lins}>
          <img
            src={nuone}
            className={`img-fluid ${footstyl.img_siz} ${footstyl.foot_siz} `}
            alt="Icon"
          />
          <Link to="www.facebook.com" className={footstyl.f_link}>
            <svg
              className={footstyl.fo_fac}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" />
            </svg>
          </Link>
        </div>
        <div className={footstyl.socal_lins}>
          <img
            src={nuone}
            className={`img-fluid ${footstyl.img_siz} ${footstyl.foot_siz} `}
            alt="Icon"
          />
          <Link to="www.facebook.com" className={footstyl.f_link}>
            <svg
              className={footstyl.fo_fac}
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.55016 19.7502C16.6045 19.7502 21.5583 12.2469 21.5583 5.74211C21.5583 5.53117 21.5536 5.31554 21.5442 5.1046C22.5079 4.40771 23.3395 3.5445 24 2.55554C23.1025 2.95484 22.1496 3.21563 21.1739 3.32898C22.2013 2.71315 22.9705 1.74572 23.3391 0.606011C22.3726 1.1788 21.3156 1.58286 20.2134 1.80085C19.4708 1.01181 18.489 0.48936 17.4197 0.314295C16.3504 0.13923 15.2532 0.321295 14.2977 0.832341C13.3423 1.34339 12.5818 2.15495 12.1338 3.14156C11.6859 4.12816 11.5754 5.23486 11.8195 6.29054C9.86249 6.19233 7.94794 5.68395 6.19998 4.79834C4.45203 3.91274 2.90969 2.66968 1.67297 1.14976C1.0444 2.23349 0.852057 3.51589 1.13503 4.73634C1.418 5.95678 2.15506 7.02369 3.19641 7.72023C2.41463 7.69541 1.64998 7.48492 0.965625 7.10617V7.1671C0.964925 8.30439 1.3581 9.40683 2.07831 10.287C2.79852 11.1672 3.80132 11.7708 4.91625 11.9952C4.19206 12.1934 3.43198 12.2222 2.69484 12.0796C3.00945 13.0577 3.62157 13.9131 4.44577 14.5266C5.26997 15.14 6.26512 15.4808 7.29234 15.5015C5.54842 16.8714 3.39417 17.6144 1.17656 17.6109C0.783287 17.6103 0.390399 17.5861 0 17.5387C2.25286 18.984 4.87353 19.7516 7.55016 19.7502Z" />
            </svg>
          </Link>
        </div>
        <div className={footstyl.socal_lins}>
          <img
            src={nuone}
            className={`img-fluid ${footstyl.img_siz} ${footstyl.foot_siz} `}
            alt="Icon"
          />
          <Link to="www.facebook.com" className={footstyl.f_link}>
            <svg
              className={footstyl.fo_fac}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
