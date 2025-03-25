import React from "react";
import nuone from "../assets/nuone.png";

export default function Faccard({ card, faqsty, isOpen, toggleFaq }) {
  return (
    <div className={faqsty.faq_item}>
      <div className={faqsty.faq_question} onClick={toggleFaq}>
        <div className={faqsty.main_ques}>
          <div className={faqsty.count}>
            <img
              src={nuone}
              className={`img-fluid ${faqsty.img_siz}`}
              alt="Icon"
            />
            <p style={{ color: isOpen ? "#C5FF66" : "#fff" }}>0{card.id}</p>
          </div>
          <span style={{ color: isOpen ? "#C5FF66" : "#fff" }}>
            {card.question}
          </span>
        </div>
        <span className={faqsty.faq_toggle}>
          <svg
            className={`${faqsty.faq_img} ${
              isOpen ? faqsty.rotate_icon : faqsty.faq_img
            }`}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.275 2.0748C12.275 1.37064 11.7042 0.799805 11 0.799805C10.2959 0.799805 9.72505 1.37064 9.72505 2.0748V9.7248H2.07505C1.37089 9.7248 0.800049 10.2956 0.800049 10.9998C0.800049 11.704 1.37089 12.2748 2.07505 12.2748L9.72505 12.2748V19.9248C9.72505 20.629 10.2959 21.1998 11 21.1998C11.7042 21.1998 12.275 20.629 12.275 19.9248V12.2748L19.925 12.2748C20.6292 12.2748 21.2 11.704 21.2 10.9998C21.2 10.2956 20.6292 9.7248 19.925 9.7248H12.275V2.0748Z" />
          </svg>
        </span>
      </div>

      <div className={`${faqsty.faq_answer} ${isOpen ? faqsty.open : ""}`}>
        <p>{card.answer}</p>
      </div>
    </div>
  );
}
