import { useState } from "react";
import faqsty from "../style/Faq.module.css";
import Faccard from "./Faccard";
export default function Faq({ brono }) {
  const anscard = [
    {
      id: 1,
      question: "What services does SquareUp provide?",
      answer: `SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.`,
    },
    {
      id: 2,
      question: "Can you create a responsive website?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      id: 3,
      question: "How can SquareUp help my business?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      id: 4,
      question: "How do you ensure the security of user data?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      id: 5,
      question: "What services does SquareUp provide?",
      answer: `SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.`,
    },
    {
      id: 6,
      question: "What services does SquareUp provide?",
      answer: `SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.`,
    },
    {
      id: 7,
      question: "What services does SquareUp provide?",
      answer: `SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.`,
    },
    {
      id: 8,
      question: "What services does SquareUp provide?",
      answer: `SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.`,
    },
  ];

  const [expanded, setExpanded] = useState(anscard[0].id); // Default: All closed

  const toggleFaq = (id) => {
    setExpanded((prev) => (prev === id ? null : id)); // Toggle Logic
  };
  return (
    <div className={faqsty.faq}>
      <div className="container cus_container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`${faqsty.squraup_box} ${brono}`}>
              <div className={`row ${faqsty.f_padin}`}>
                <div className={`col-lg-6 p-0 ${faqsty.f_bdright}`}>
                  {anscard.map((card, index) =>
                    index % 2 === 0 ? ( // 🡆 Even Index in Left Column
                      <Faccard
                        key={card.id}
                        card={card}
                        faqsty={faqsty}
                        isOpen={expanded === card.id} // ✅ Shared Expand State
                        toggleFaq={() => toggleFaq(card.id)}
                      />
                    ) : null
                  )}
                </div>
                <div className={`col-lg-6 p-0 ${faqsty.fmd_none}`}>
                  {anscard.map((card, index) =>
                    index % 2 !== 0 ? ( // 🡆 Even Index in Left Column
                      <Faccard
                        key={card.id}
                        card={card}
                        faqsty={faqsty}
                        isOpen={expanded === card.id} // ✅ Shared Expand State
                        toggleFaq={() => toggleFaq(card.id)}
                      />
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
