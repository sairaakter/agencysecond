import desi_icon from "../assets/desi_icon.png";
import enginiar from "../assets/enginiar.png";
import promanag from "../assets/promanag.png";

import hsrsty from "../style/Hservic.module.css";
import Hsurvcard from "./Hsurvcard";
export default function Hservic() {
  const data = [
    {
      id: 1,
      title: "Design",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed in lobortis nisl, vitae iaculis sapien.
        Phasellus ultrices gravida massa luctus ornare.
        Suspendisse blandit quam elit, eu imperdiet neque
        semper.`,
      imggg: desi_icon,
    },
    {
      id: 2,
      title: "Engineering",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed in lobortis nisl, vitae iaculis sapien.
        Phasellus ultrices gravida massa luctus ornare.
        Suspendisse blandit quam elit, eu imperdiet neque
        semper.`,
      imggg: enginiar,
    },
    {
      id: 3,
      title: "Project Management",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed in lobortis nisl, vitae iaculis sapien.
        Phasellus ultrices gravida massa luctus ornare.
        Suspendisse blandit quam elit, eu imperdiet neque
        semper.`,
      imggg: promanag,
    },
  ];
  return (
    <div className={hsrsty.servic}>
      <div className="container cus_container">
        <div className="row">
          <div className="col-lg-12">
            <div className={hsrsty.paren_box}>
              <div className="row">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className={`col-lg-4 col-md-4 ${hsrsty.centrall}`}
                  >
                    <Hsurvcard item={item} hsrsty={hsrsty} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
