import { useState } from "react";

import emsty from "../style/Email.module.css";
import Comonbtn from "./Comonbtn";
import Hinput, { Hinputtwop } from "./Hinput";
export default function Email() {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(5000);
  const minLimit = 1000;
  const maxLimit = 5000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 500); // Prevent overlap
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 500); // Prevent overlap
    setMaxValue(value);
  };
  return (
    <div className={emsty.email}>
      <div className="container cus_container">
        <div className="row">
          <div className="col-lg-12">
            <div className={emsty.squraup_box}>
              <div className={emsty.emai_pad}>
                <div className={`row ${emsty.ecus_pad}`}>
                  <Hinput
                    scenname={`col-lg-6 col-md-6 ${emsty.sub_margbtm}`}
                    htmlFor="fname"
                    inputcls={`${emsty.inputcss}`}
                    labell="First Name"
                    name="user[name]"
                    type="name"
                    id="name"
                    placeholder="Type here"
                    emsty={emsty}
                  />
                  <Hinput
                    scenname={`col-lg-6 col-md-6 ${emsty.sub_margbtm}`}
                    htmlFor="email"
                    inputcls={`${emsty.inputcss}`}
                    labell="Email"
                    name="user[email]"
                    type="email"
                    id="email"
                    placeholder="Type here"
                    emsty={emsty}
                  />
                  <Hinputtwop
                    scenname={`col-lg-12 ${emsty.sub_margbtm}`}
                    labell="Why are you contacting us?"
                    emsty={emsty}
                  />
                  <div className={`col-lg-12 ${emsty.sub_margbtm}`}>
                    <div className={emsty.name}>
                      <div className={emsty.na_label}>Your Budget</div>
                      <p>Slide to indicate your budget range</p>

                      <div className={emsty.custom_range_container}>
                        <input
                          type="range"
                          min={minLimit}
                          max={maxLimit}
                          value={minValue}
                          onChange={handleMinChange}
                          className={emsty.range_input}
                          style={{ position: "absolute", zIndex: 2 }}
                        />
                        <input
                          type="range"
                          min={minLimit}
                          max={maxLimit}
                          value={maxValue}
                          onChange={handleMaxChange}
                          className={emsty.range_input}
                          style={{ position: "absolute", zIndex: 2 }}
                        />

                        <div className={emsty.custom_range_line}></div>
                        <div
                          className={emsty.custom_range_fill}
                          style={{
                            left: `${
                              ((minValue - minLimit) / (maxLimit - minLimit)) *
                              100
                            }%`,
                            width: `${
                              ((maxValue - minValue) / (maxLimit - minLimit)) *
                              100
                            }%`,
                          }}
                        ></div>

                        <div
                          className={emsty.custom_range_thumb}
                          style={{
                            left: `${
                              ((minValue - minLimit) / (maxLimit - minLimit)) *
                              100
                            }%`,
                          }}
                        ></div>
                        <div
                          className={emsty.custom_range_thumb}
                          style={{
                            left: `${
                              ((maxValue - minLimit) / (maxLimit - minLimit)) *
                              100
                            }%`,
                          }}
                        ></div>

                        <div
                          className={`${emsty.custom_range_label} ${emsty.left}`}
                        >
                          ${minValue}
                        </div>
                        <div
                          className={`${emsty.custom_range_label} ${emsty.right}`}
                        >
                          ${maxValue}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`col-lg-12 ${emsty.sub_margbtm}`}>
                    <div className={emsty.name}>
                      <div className={emsty.na_label}>Your Message</div>

                      <textarea
                        id="message"
                        name="message"
                        className={`${emsty.inputcss} ${emsty.message}`}
                        placeholder="Type here"
                      ></textarea>
                    </div>
                  </div>
                  <div className={`col-lg-12 ${emsty.sub_cen}`}>
                    <div
                      className={`${emsty.diff_btn} ${emsty.diff_allbtns} ${emsty.colwidt}`}
                    >
                      <Comonbtn child="Submit" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
