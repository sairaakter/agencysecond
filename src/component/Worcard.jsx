import React from "react";
import butic from "../assets/butic.png";
import wimeght from "../assets/wimeght.png";
import wimfiv from "../assets/wimfiv.png";
import wimfor from "../assets/wimfor.png";
import wimnin from "../assets/wimnin.png";
import wimseven from "../assets/wimseven.png";
import wimsix from "../assets/wimsix.png";
import wimten from "../assets/wimten.png";
import wimthre from "../assets/wimthre.png";
import wimto from "../assets/wimto.png";
import dstyl from "../style/Design.module.css";
import worksty from "../style/Work.module.css";
import Dmainhed from "./Dmainhed";
import Wsubcrd from "./Wsubcrd";

export default function Worcard() {
  const projects = [
    {
      hedtitle: "E-Commerce Platform for Fashion Hub",
      title: "Chic Boutique",
      image: butic,
      buttonLink: "https://www.chicboutique.com",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
    {
      hedtitle: "Mobile App for Food Delivery Service",
      title: "Real Estate Management System",
      image: wimto,
      buttonLink: "https://www.homelyspaces.com",
      arrowColor: "#FF5733",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
    {
      hedtitle: "Booking and Reservation System for Event Management",
      title: "Food Delivery App",
      image: wimthre,
      buttonLink: "https://www.quickbite.com",
      arrowColor: "#FFD700",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
    {
      hedtitle: "Custom Software for Workflow Automation",
      title: "Healthcare Appointment System",
      image: wimfor,
      buttonLink: "https://www.mediconnect.com",
      arrowColor: "#00CED1",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
    {
      hedtitle: "Web Portal for Real Estate Listings",
      title: "Online Learning Platform",
      image: wimfiv,
      buttonLink: "https://www.learnwise.com",
      arrowColor: "#4CAF50",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
    {
      hedtitle: "Mobile App for Fitness Tracking",
      title: "Travel Booking System",
      image: wimsix,
      buttonLink: "https://www.exploremore.com",
      arrowColor: "#1E90FF",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
    {
      hedtitle: "Custom Software for Supply Chain Management",
      title: "Fitness Tracker App",
      image: wimseven,
      buttonLink: "https://www.fittrack.com",
      arrowColor: "#FF69B4",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
    {
      hedtitle: "Educational Platform for Online Learning",
      title: "Music Streaming Service",
      image: wimeght,
      buttonLink: "https://www.soundwave.com",
      arrowColor: "#FF4500",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
    {
      hedtitle: "Mobile App for Travel Planning",
      title: "Job Portal Website",
      image: wimnin,
      buttonLink: "https://www.careerhub.com",
      arrowColor: "#800080",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
    {
      hedtitle: "Web Application for Customer Relationship Management",
      title: "Event Management System",
      image: wimten,
      buttonLink: "https://www.eventmasters.com",
      arrowColor: "#008000",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
  ];

  return (
    <div className={worksty.work}>
      <div className="container cus_container">
        <div className={worksty.d_borderr}>
          <div className="row">
            <Dmainhed
              dstyl={dstyl}
              hon="At SquareUp"
              dhpp="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
              dbtntex="Here are ten examples of our notable works:"
            />
          </div>
          <div className={worksty.box}>
            <div className={`row ${worksty.dsm_pad}`}>
              {projects.map((item, index) => (
                <div
                  key={index}
                  className={`col-lg-6 col-md-6 ${worksty.subbox} p-0`}
                >
                  <Wsubcrd worksty={worksty} item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
