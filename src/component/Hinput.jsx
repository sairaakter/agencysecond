import React from "react";

export default function Hinput({
  emsty,
  scenname,
  labell,
  htmlFor,
  name,
  type,
  id,
  placeholder,
  inputcls,
}) {
  return (
    <div className={scenname}>
      <div className={emsty.name}>
        <label htmlFor={htmlFor} className={emsty.na_label}>
          {labell}
        </label>
        <br />
        <input
          name={name}
          type={type}
          className={inputcls}
          id={id}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

const options = [
  { id: "web_design", label: "Web Design" },
  { id: "graphic_design", label: "Graphic Design" },
  { id: "mobile_app_design", label: "Mobile App Design" },
  { id: "others", label: "Others" },
];

export function Hinputtwop({ emsty, scenname, labell }) {
  return (
    <div className={scenname}>
      <div className={emsty.name}>
        <div className={emsty.na_label}>{labell}</div>
        <div className={emsty.main_check}>
          {options
            .reduce((acc, option, index) => {
              if (index % 2 === 0)
                acc.push([option]); // Start new sub_check pair
              else acc[acc.length - 1].push(option); // Add to existing pair
              return acc;
            }, [])
            .map((pair, i) => (
              <div key={i} className={emsty.sub_check}>
                {pair.map((option) => (
                  <div key={option.id} className={emsty.ch_box}>
                    <input
                      type="checkbox"
                      id={option.id}
                      name={option.id}
                      value={option.label}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
